import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Route } from '@angular/router';
import { DataTableModule, SharedModule, PaginatorModule, InputTextModule, ButtonModule, DialogModule } from 'primeng/primeng';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
///import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { HomeComponent } from './components/home/home.component';
import { AppComponent } from './components/app/app.component'; 
import { NavMenuComponent } from './components/navmenu/navmenu.component';
import { GPSVehicleDataComponent } from './components/GPSVehicleData/GPSVehicleData.Component';
import { LoginComponent } from './components/Login/Login.Component';
import { LayoutComponent } from './components/Layout/Layout.Component';
import { DashboardComponent } from './components/Dashboard/Dashboard.Component';
import { NotFoundComponent } from './components/NotFound/NotFound.Component';
import { RegisterComponent } from './components/Register/Register.Component';
import { RoleComponent } from './components/Role/Role.Component';


import { AlertService, AuthenticationService, UserService, AuthGuard, RoleService } from './Services/Index';


@NgModule({
    declarations: [
        AppComponent,
        NavMenuComponent,
        LoginComponent,
        GPSVehicleDataComponent,
        LayoutComponent,
        DashboardComponent,
        RoleComponent,
        HomeComponent,
        RegisterComponent
    ],
    providers: [
        AuthGuard,
        AlertService,
        AuthenticationService,
        RoleService,
        UserService
    ],
    imports: [
        CommonModule,
        HttpModule,
        FormsModule,
        InputTextModule,
        DataTableModule,
        SharedModule,
        PaginatorModule,
        BrowserAnimationsModule,
        //AngularFontAwesomeModule,
        ButtonModule,
        DialogModule,
        RouterModule.forRoot([
            //{ path: '', redirectTo: 'home', pathMatch: 'full' },
            { path: '', redirectTo: 'login', pathMatch: 'full' },
            { path: 'login', component: LoginComponent },

            {
                path: 'Dashboard', component: LayoutComponent,
                children: [{ path: '', component: DashboardComponent }]
            },
            {
                path: 'home', component: LayoutComponent,
                children: [{ path: '', component: HomeComponent }]
            },
            {
                path: 'register', component: LayoutComponent,
                children: [{ path: '', component: RegisterComponent }]
            },
            {
                path: 'role', component: LayoutComponent,
                children: [{ path: '', component: RoleComponent }]
            },

            {
                path: 'GPS-Vehicle-Data', component: LayoutComponent,
                children: [{ path: '', component: GPSVehicleDataComponent }]
            },

            { path: '**', redirectTo: 'NotFoundComponent' }
        ])
    ]
})
export class AppModuleShared {
}
