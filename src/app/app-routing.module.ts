import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginPageComponent} from './components/login-page/login-page.component';
import {RegistrationComponent} from './components/registration/registration.component';
import {StudentQuizPageComponent} from './components/student-quiz-page/student-quiz-page.component';
import {UserPageComponent} from './components/user-page/user-page.component';
import {StaffClassPageComponent} from './components/staff-class-page/staff-class-page.component';
import {TeacherClassPageComponent} from './components/teacher-class-page/teacher-class-page.component';
import {ProfilePageComponent} from './components/profile-page/profile-page.component';
import {NewQuizQuestionModalComponent} from './components/new-quiz-question-modal/new-quiz-question-modal.component';
import {NewEternalquizModalComponent} from './components/new-eternalquiz-modal/new-eternalquiz-modal.component';
import {ChangePasswordModalComponent} from './components/change-password-modal/change-password-modal.component';
import {QuizStatisticModalComponent} from './components/quiz-statistic-modal/quiz-statistic-modal.component';
import {QuizQuestionListPageComponent} from './components/quiz-question-list-page/quiz-question-list-page.component';
import {EternalQuizListPageComponent} from './components/eternal-quiz-list-page/eternal-quiz-list-page.component';
import {Roles} from './enum/roles.enum';
import {AuthGuard} from './guard/auth.guard';
import {MainPageComponent} from './components/main-page/main-page.component';
import {NewClassModalComponent} from './components/new-class-modal/new-class-modal.component';
import {StudentAssignToClassComponent} from './components/student-assign-to-class/student-assign-to-class.component';
import {NewUserModalComponent} from './components/new-user-modal/new-user-modal.component';
import {EternalQuizAssignClassModalComponent} from './components/eternal-quiz-assign-class-modal/eternal-quiz-assign-class-modal.component';
import {NewStudentComponent} from './components/new-student/new-student.component';

const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: 'login'},
  {path: 'login', component: LoginPageComponent},
  {path: 'main-page', component: MainPageComponent},
  {path: 'registration', component: RegistrationComponent},
  {path: 'student-quiz-page', component: StudentQuizPageComponent},
  {path: 'user', component: UserPageComponent},
  {path: 'staff-class', component: StaffClassPageComponent},
  {path: 'teacher-class-page', component: TeacherClassPageComponent},
  {path: 'profile', component: ProfilePageComponent},
  {path: 'new-quiz-question', component: NewQuizQuestionModalComponent},
  {path: 'new-eternal-quiz', component: NewEternalquizModalComponent},
  {path: 'change-password', component: ChangePasswordModalComponent}, // TODO role?
  {path: 'statistic', component: QuizStatisticModalComponent}, // TODO role?
  {path: 'quiz-question-list', component: QuizQuestionListPageComponent},
  {path: 'eternal-quiz-list', component: EternalQuizListPageComponent}, // canActivate: [AuthGuard], data: { roles: [Roles.teacher]}
  {path: 'new-class-modal', component: NewClassModalComponent},
  {path: 'student-assign-to-class', component: StudentAssignToClassComponent},
  {path: 'new-user-modal', component: NewUserModalComponent},
  {path: 'eternal-quiz-class/:quiz', component: EternalQuizAssignClassModalComponent},
  {path: 'new-student', component: NewStudentComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
