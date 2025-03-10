import { Component } from '@angular/core';
import { Routes } from '@angular/router';
import { BookComponent } from './book/book.component';
import { AuthorsComponent } from './authors/authors.component';
import { PublishersComponent } from './publishers/publishers.component';

export const routes: Routes = [
    {path:"",redirectTo:"/book",pathMatch:"full"},
    {path:"book",component: BookComponent},
    {path:"author",component: AuthorsComponent},
    {path:"publisher",component: PublishersComponent}

];
