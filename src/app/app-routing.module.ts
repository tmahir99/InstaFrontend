import { PostComponent } from './post/post.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfileComponent } from './profile/profile.component';
import { NotificationsComponent } from './notifications/notifications.component';
import { MessageComponent } from './message/message.component';

const routes: Routes = [
  {path: 'login', component : LoginComponent},
  {path : 'home', component: HomeComponent},
  {path : 'profile', component: ProfileComponent},
  {path : 'post', component: PostComponent},
  {path : 'notifications', component: NotificationsComponent},
  {path : 'messages', component: MessageComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [LoginComponent, HomeComponent]
