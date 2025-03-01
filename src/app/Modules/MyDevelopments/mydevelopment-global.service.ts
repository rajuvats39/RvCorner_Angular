import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MydevelopmentGlobalService {

  myDevelopmentApiUrls = {
    getUserData: 'https://jsonplaceholder.typicode.com/users'
  }

  studentCRUDApiUrls = {
    getStudents: '/api/Student/GetAllStudents',
    createStudent: '/api/Student/CreateStudent',
    updateStudent: '/api/Student/UpdateStudent',
    deleteStudent: '/api/Student/DeleteStudent/{id}',
  };

}
