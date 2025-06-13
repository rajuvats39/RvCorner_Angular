import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class MydevelopmentGlobalService {
  myDevelopmentApiUrls = {
    getUserData: 'https://jsonplaceholder.typicode.com/users',
  };

  studentCRUDApiUrls = {
    getStudents: '/api/Student/GetAllStudents',
    addStudent: '/api/Student/AddStudent',
    updateStudent: '/api/Student/UpdateStudent',
    deleteStudent: '/api/Student/DeleteStudent',
  };

  employeesManagementUrls = {
    getAllDepartments: '/api/Department/GetAllDepartments',
    addDepartment: '/api/Department/AddDepartment',
    updateDepartment: 'api/Department/UpdateDepartment',
    deleteDepartment: '/api/Department/DeleteDepartment',
    getAllEmployees: '/api/Employee/GetAllEmployees',
    addEmployee: '/api/Employee/AddEmployee',
    updateEmployee: '/api/Employee/UpdateEmployee',
    deleteEmployee: '/api/Employee/DeleteEmployee',
    uploadFiles: '/api/Employee/UploadFiles'
  };

  blogAppUrls = {
    getAllBlogs: '/api/Blog/GetAllBlogs',
    addBlog: '/api/Blog/AddBlog',
    updateBlog: '/api/Blog/UpdateBlog',
    deleteBlog: '/api/Blog/DeleteBlog'
  };

}
