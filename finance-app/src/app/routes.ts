import { Routes } from "@angular/router";
import { DashboardComponent } from "./dashboard/dashboard.component";

export const appRoutes: Routes = [
    {
      path:'home' , component:DashboardComponent
    },
    {
        path: '',redirectTo:'/home' ,pathMatch:'full'
    },
  ];