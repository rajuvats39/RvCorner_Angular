import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AppGlobalService {

  authenticationApiUrls = {
    user: 'http://localhost:3000/user',
    role: 'http://localhost:3000/role',
  }

}
