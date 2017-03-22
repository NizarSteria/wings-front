import { RouterModule, Routes } from '@angular/router';

// APP COMPONENTS
import { HomeComponent } from './home/index';
import { UsersComponent, UserFormComponent } from './users/index';
import { PostsComponent } from './posts/index';
import { AboutComponent } from './about/about.component';
import { TestAngularMaterialComponent } from './test-angular-material/test-angular-material.component';
import { PreventUnsavedChangesGuard } from './prevent-unsaved-changes-guard.service';

const ROUTES: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent },
    { path: 'posts', component: PostsComponent },
    { path: 'users', component: UsersComponent },
    { path: 'about', component: AboutComponent },
    { path: 'test', component: TestAngularMaterialComponent },
    { path: 'users/:id', component: UserFormComponent, canDeactivate: [PreventUnsavedChangesGuard] },
    { path: 'users/new', component: UserFormComponent, canDeactivate: [PreventUnsavedChangesGuard] }
];

export const APP_ROUTES = RouterModule.forRoot(ROUTES, { useHash: true });