import { Component } from '@angular/core';

@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrl: './dashboard.component.scss',
    standalone: false
})
export class DashboardComponent {
  syllabusAngular = [
    { module: 1, title: 'Introduction to Angular', description: 'What is Angular? Setting up the development environment, Angular CLI, Project structure' },
    { module: 2, title: 'TypeScript Basics', description: 'Introduction to TypeScript, variables, types, interfaces, classes, functions' },
    { module: 3, title: 'Angular Architecture', description: 'Components, Modules, Directives, Component Lifecycle, Application Bootstrap Process' },
    { module: 4, title: 'Components and Data Binding', description: 'Creating Components, Data Binding, Component communication, Template reference variables' },
    { module: 5, title: 'Directives', description: 'Built-in and custom directives: ngIf, ngFor, ngClass, ngStyle' },
    { module: 6, title: 'Pipes', description: 'Built-in pipes, creating and using custom pipes' },
    { module: 7, title: 'Services and Dependency Injection', description: 'Creating and injecting services, Singleton services, DI in Angular' },
    { module: 8, title: 'Routing and Navigation', description: 'Setting up routes, route parameters, nested routes, router guards, lazy loading' },
    { module: 9, title: 'Forms in Angular', description: 'Template-driven and Reactive forms, validation, dynamic forms, form arrays' },
    { module: 10, title: 'HTTP Client and API Integration', description: 'Setting up HttpClient, making HTTP requests, handling errors, HttpInterceptor' },
    { module: 11, title: 'Angular Observables and RxJS', description: 'Introduction to RxJS, common operators, using Observables with HTTP and Forms' },
    { module: 12, title: 'Angular Modules and Lazy Loading', description: 'Core, shared, and feature modules, lazy loading, forRoot and forChild configuration' },
    { module: 13, title: 'Angular Material', description: 'Installing Angular Material, using components, creating responsive UIs' },
    { module: 14, title: 'State Management in Angular', description: 'Component-based state management, NgRx overview, store, actions, reducers, effects' },
    { module: 15, title: 'Reactive Programming in Angular', description: 'Async operations, advanced RxJS patterns, async pipes' },
    { module: 16, title: 'Advanced Angular titles', description: 'Dynamic components, Angular Animations, Change Detection, Angular Universal' },
    { module: 17, title: 'Testing in Angular', description: 'Unit testing, E2E testing, test best practices' },
    { module: 18, title: 'Performance Optimization', description: 'Lazy loading, change detection strategies, production optimizations' },
    { module: 19, title: 'Progressive Web Apps (PWA) in Angular', description: 'Converting an app to a PWA, service workers, caching, offline capabilities' },
    { module: 20, title: 'Deployment and DevOps', description: 'Building for production, deploying, using environment variables, CI/CD pipeline' }
  ];
}
