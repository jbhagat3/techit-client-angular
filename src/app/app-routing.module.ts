import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { CheckLoginGuard } from './guards/check-login.guard';

const routes: Routes = [
	{
		path: 'home',
		component: HomeComponent,
		canActivate: [CheckLoginGuard]
	},
	{
		path: 'login',
		component: LoginComponent
	},
	{
		path: '',
		redirectTo: 'login',
		pathMatch: 'full'
	},
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule],
	providers: [
		{
			provide: 'APP_URL',
			useValue: 'http://localhost:4200'
		}
	]
})
export class AppRoutingModule { }
