import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AppGlobalService {

  employeeApiUrls = {
    getEmployee: '/api/Employee/GetEmployee',
    getEmployees: '/api/Employee/GetEmployees',
    addEmployee: '/api/Employee/AddEmployee',
    updateEmployee: '/api/Employee/UpdateEmployee',
    deleteEmployee: '/api/Employee/DeleteEmployee',
  }

  authenticationApiUrls = {
    user: 'http://localhost:3000/user',
    role: 'http://localhost:3000/role',
  }

}
