import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddCourseComponent } from './add-course/add-course.component';
import { CourseDetailsComponent } from './course-details/course-details.component';
import { CourseNotificationComponent } from './course-notification/course-notification.component';
import { CourseTakenComponent } from './course-taken/course-taken.component';
import { CoursesComponent } from './courses/courses.component';
import { CoursetakenDetailsComponent } from './coursetaken-details/coursetaken-details.component';
import { CoursetakenRequestsComponent } from './coursetaken-requests/coursetaken-requests.component';
import { EditCourseComponent } from './edit-course/edit-course.component';
import { EditProfComponent } from './edit-prof/edit-prof.component';
import { EditUserComponent } from './edit-user/edit-user.component';
import { HomeComponent } from './home/home.component';
import { LoginProfComponent } from './login-prof/login-prof.component';
import { LoginUserComponent } from './login-user/login-user.component';
import { ProfileProfComponent } from './profile-prof/profile-prof.component';
import { ProfileUserComponent } from './profile-user/profile-user.component';
import { RequestedCoursesComponent } from './requested-courses/requested-courses.component';
import { SignupProfComponent } from './signup-prof/signup-prof.component';
import { SignupUserComponent } from './signup-user/signup-user.component';

const routes: Routes = [
                       {path:'',component:HomeComponent},
                       {path:'login-user',component:LoginUserComponent},
                       {path:'signup-user',component:SignupUserComponent},
                       {path:'login-prof',component:LoginProfComponent},
                       {path:'signup-prof',component:SignupProfComponent},
                       {path:'profile-prof',component:ProfileProfComponent},
                       {path:'profile-user',component:ProfileUserComponent},
                       {path:'edit-user',component:EditUserComponent},
                       {path:'edit-prof',component:EditProfComponent},
                       {path:'edit-course',component:EditCourseComponent},
                       {path:'add-course',component:AddCourseComponent},
                       {path:'course-taken',component:CourseTakenComponent},
                       {path:'course-enrolled',component:CoursesComponent},
                       {path:'details-course',component:CourseDetailsComponent},
                       {path:'details-coursetaken',component:CoursetakenDetailsComponent},
                       {path:'request-coursetaken',component:CoursetakenRequestsComponent},
                       {path:'course-notification',component:CourseNotificationComponent},
                       {path:'course-requested',component:RequestedCoursesComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
