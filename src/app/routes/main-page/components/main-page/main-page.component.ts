import { Component, inject } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';
import { DriveService } from 'src/app/core/services/drive/drive.service';
import { AuthService } from 'src/app/core/services/auth/auth.service';
import { MovieService } from 'src/app/core/services/movie/movie-service.service';
import { Observable, map } from 'rxjs';
import { LoginService } from 'src/app/core/services/login/login.service';
import { UserProfile } from 'src/app/core/services/login/interfaces';


@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss'],
  animations: [trigger('fadeIn', [
    state('void', style({ opacity: 0 })),
    transition('void => *', [animate('3s', style({ opacity: 1 }))])
  ]),
  trigger('fadeOut', [
    state('*', style({ opacity: 1 })),
    transition('* => void', [animate('3s', style({ opacity: 0 }))])
  ])
  ] //array of triggers
})
export class MainPageComponent {
  backgroundImgSrcs!: any[];
  currentSrcIndex: number = 0;
  imgInterval?: NodeJS.Timer;
  isLoggedIn$?: Observable<boolean>;
  userProfile$?: Observable<UserProfile>;

  googleDriveAuth: DriveService = inject(DriveService)
  authService: AuthService = inject(AuthService)
  movieService: MovieService = inject(MovieService)
  loginService: LoginService = inject(LoginService)


  ngOnInit() {
    this.isLoggedIn$ = this.loginService.getIsLoggedIn$()
    this.userProfile$ = this.loginService.getTokenUserProfile$()

    this.movieService.getMovies$()
      .pipe(
        map(movies => movies.map(m => {
          return {
            src: m.imgUrlHorizontal,
            display: false
          }
        }))
      )
      .subscribe({
        next: movies => {
          this.backgroundImgSrcs = movies
          this.backgroundImgSrcs[0].display = true
        }
      })

    this.imgInterval = setInterval(() => {
      this.nextBackgroundIndex();
    }, 5000)
    // // HORIZONTAL IMAGES
    // this.googleDriveAuth.getFilesInFolder('131ls8vcMej1aFm2BmrFZ586fD47t62Sa').subscribe(
    //   (data: any) => {
    //     data.files.forEach((f: any) => {
    //       console.log({
    //         name: f.name,
    //         webContentLink: f.webContentLink
    //       })
    //     }
    //     )
    //   }
    // )

    // //VERTICAL IMAGES
    // this.googleDriveAuth.getFilesInFolder("1rRlyTCdPjTdgMT5wz_p-IAAJFujAqSUK").subscribe((data: any) => {
    //   data.files.forEach((f: any) => {
    //     console.log({
    //       name: f.name,
    //       webContentLink: f.webContentLink
    //     })
    //   }
    //   )
    // })
  }

  loginGoogleDrive() {
    this.authService.logIn();
  }

  nextBackgroundIndex() {
    if (this.currentSrcIndex === this.backgroundImgSrcs.length - 1) {
      this.currentSrcIndex = 0;
    } else {
      this.currentSrcIndex += 1;
    }
    this.backgroundImgSrcs.forEach(s => s.display = false)
    this.backgroundImgSrcs[this.currentSrcIndex].display = true;
  }

  ngOnDestroy() {
    clearInterval(this.imgInterval)
  }
}
