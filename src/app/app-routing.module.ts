import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MaterialModule } from './material.module';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { SideNavComponent } from './side-nav/side-nav.component';
import { ReportsComponent } from './TimeKeeper/reports/reports.component';
import { ScheduleComponent } from './TimeKeeper/schedule/schedule.component';
import { LiveTrackingComponent } from './TimeKeeper/live-tracking/live-tracking.component';
import { GenerateScheduleComponent } from './TimeKeeper/generate-schedule/generate-schedule.component';
// import { AuthGuardService as AuthGuard } from './services/auth-guard-service.service';


const routes: Routes = [
    { path: '', redirectTo: 'Welcome', pathMatch: 'full' },
    { path: 'Welcome', component: LandingPageComponent },
    //   { path: 'DepartmentSummary', component: DepartmentSummeryComponent },
    {
        path: 'User', component: SideNavComponent,
        // canActivate: [AuthGuard],
        children: [
            { path: 'Schedule', component: ScheduleComponent },
              { path: 'Reports', component: ReportsComponent },
              { path: 'Livemap', component: LiveTrackingComponent },
              { path: 'GenerateSchedule', component: GenerateScheduleComponent },
            //   { path: 'Delivery', component: DeliveryComponent },
            { path: '**', component: LiveTrackingComponent, pathMatch: 'full' }
        ]
        // , data: {
        //   expectedRole: ['admin']
        // }
    },

];

@NgModule({
    declarations: [
    ],
    imports: [
        MaterialModule,
        RouterModule.forRoot(
            routes,
            { useHash: true }
        ),
    ],
    exports: [
        RouterModule
    ]

})
export class AppRoutingModule { }