import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-page-not-found',
    templateUrl: './page-not-found.component.html',
    styleUrl: './page-not-found.component.scss',
    standalone: false
})
export class PageNotFoundComponent {

    constructor(
        public readonly router: Router
    ) { }

    public onSubmit(): void {
        this.router.navigate(['/authentication/signin']);
    }

}
