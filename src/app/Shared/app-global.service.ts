import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AppGlobalService {

  authenticationApiUrls = {
    authenticate: 'api/Users/Authenticate',
    register: 'api/Users/Register',
    getAllUsers: 'api/Users/GetAllUsers',
    deleteUser: 'api/Users/DeleteUser',
    updateUser: 'api/Users/UpdateUser',
    refreshToken: 'api/Users/RefreshToken'
  }

}
