import { Component } from '@angular/core';
import { DatabaseService } from 'src/app/core/services/database/database.service';
import { Subject, takeUntil } from 'rxjs';
import { Movie } from 'src/app/feature/movie/interfaces';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { DriveService } from 'src/app/core/services/drive/drive.service';
import { LocalAuthService } from 'src/app/core/services/local-auth/local-auth.service';
import { Tokens } from './interfaces';
import jwt_decode from 'jwt-decode'


@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})

export class AdminComponent {
  movies: Movie[] = []
  movieName: string = '';
  movieNameToAdd: string = '';
  movieNameToDelete: string = '';
  movieTime: string = '';
  movieImageBase64: any = '';
  movieSeatCount: number = 0;
  serverResponse?: any;
  unsubscribe$: Subject<void> = new Subject();

  constructor(
    private databaseService: DatabaseService,
    private driveService: DriveService,
    private localAuthService: LocalAuthService
  ) { }

  ngOnInit() {
    this.getMovies();
    // this.driveService.getFilesInFolder('17tFB05XFBKQk0Xw3_xEDFj5PD_LocTwy').subscribe(
    //   {
    //     next: (data: any) => console.log(data)
    //   }
    // )
  }

  login() {
    this.localAuthService.login().subscribe(
      {
        next: (data: Tokens) => {
          localStorage.setItem('accessToken', data.accessToken)
          localStorage.setItem('refreshToken', data.refreshToken)
        }
      }
    )
  }

  getUser() {
    const token = jwt_decode(localStorage.getItem('accessToken') as string)
    if (!token) { console.error('no access token') }
    const { username } = token as any
    this.databaseService.getUser$(username).subscribe(
      {
        next: (data) => console.log(data)
      }
    )
  }

  callGoogleApi() {

  }

  handleImageInput(e: any) {
    const imageFile = e.target.files[0]
    const fileReader = new FileReader();
    fileReader.onload = (event: any) => {
      this.movieImageBase64 = event.target.result
    }
    fileReader.readAsDataURL(imageFile) // need this for .onload to execute
  }

  getMovies() {
    this.databaseService.getMovies$().subscribe({
      next: (movies: Movie[]) => {
        this.movies = movies
      }
    })
  }

  resetSeatsBooked() {

  }


  addMovie() {

  }

  deleteMovie() {

  }

  ngOnDestroy() {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }

}
