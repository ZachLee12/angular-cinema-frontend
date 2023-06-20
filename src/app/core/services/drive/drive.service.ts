import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthService } from '../auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class DriveService {

  constructor(private httpClient: HttpClient, private authService: AuthService) { }

  private getHttpHeaders() {
    return new HttpHeaders({
      'Authorization': `Bearer ${this.authService.getAccessToken()}`
    })
  }

  getUserDriveInfo() {
    return this.httpClient.get(`https://www.googleapis.com/drive/v3/about?fields=user,storageQuota`, {
      headers: this.getHttpHeaders()
    })
  }

  getFiles() {
    return this.httpClient.get(`https://www.googleapis.com/drive/v3/files`, {
      headers: this.getHttpHeaders()
    })
  }
}
