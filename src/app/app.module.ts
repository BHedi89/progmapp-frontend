import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FroalaEditorModule, FroalaViewModule } from 'angular-froala-wysiwyg';
import { NgSelectModule } from '@ng-select/ng-select';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { LoginPageComponent } from './components/login-page/login-page.component';
import { HeaderComponent } from './components/header/header.component';
import { RegistrationComponent } from './components/registration/registration.component';
import { StudentQuizPageComponent } from './components/student-quiz-page/student-quiz-page.component';
import { NewQuizQuestionModalComponent } from './components/new-quiz-question-modal/new-quiz-question-modal.component';
import { NewEternalquizModalComponent } from './components/new-eternalquiz-modal/new-eternalquiz-modal.component';
import { UserPageComponent } from './components/user-page/user-page.component';
import { UserRowComponent } from './components/user-row/user-row.component';
import { NewUserModalComponent } from './components/new-user-modal/new-user-modal.component';
import { StaffClassPageComponent } from './components/staff-class-page/staff-class-page.component';
import { ClassRowComponent } from './components/class-row/class-row.component';
import { NewClassModalComponent } from './components/new-class-modal/new-class-modal.component';
import { TeacherClassPageComponent } from './components/teacher-class-page/teacher-class-page.component';
import { ClassQuizRowComponent } from './components/class-quiz-row/class-quiz-row.component';
import { ProfilePageComponent } from './components/profile-page/profile-page.component';
import { StudentAssignToClassComponent } from './components/student-assign-to-class/student-assign-to-class.component';
import { QuizStatisticModalComponent } from './components/quiz-statistic-modal/quiz-statistic-modal.component';
import { ChangePasswordModalComponent } from './components/change-password-modal/change-password-modal.component';
import { QuizQuestionListPageComponent } from './components/quiz-question-list-page/quiz-question-list-page.component';
import { EternalQuizListPageComponent } from './components/eternal-quiz-list-page/eternal-quiz-list-page.component';
import { EternalQuizRowComponent } from './components/eternal-quiz-row/eternal-quiz-row.component';
import { QuizQuestionRowComponent } from './components/quiz-question-row/quiz-question-row.component';
import { ModifyEternalquizModalComponent } from './components/modify-eternalquiz-modal/modify-eternalquiz-modal.component';
import { ModifyQuizQuestionModalComponent } from './components/modify-quiz-question-modal/modify-quiz-question-modal.component';
import {CsrfInterceptor} from './interceptors/csrf.interceptor';
import { MainPageComponent } from './components/main-page/main-page.component';
import { FilterClassPipe } from './pipes/filter-class.pipe';
import { FilterUserPipe } from './pipes/filter-user.pipe';
import {RouterModule} from '@angular/router';
import { FilterQuizPipe } from './pipes/filter-quiz.pipe';
import { FilterQuizQuestionPipe } from './pipes/filter-quiz-question.pipe';
import { EternalQuizAssignClassModalComponent } from './components/eternal-quiz-assign-class-modal/eternal-quiz-assign-class-modal.component';
import {BASE_PATH} from '../../build/openapi';
import { environment } from 'src/environments/environment';
import { PossibleAnswerRadioComponent } from './components/possible-answer-radio/possible-answer-radio.component';
import { PossibleAnswerDropdownComponent } from './components/possible-answer-dropdown/possible-answer-dropdown.component';
import { EqStatisticsComponent } from './components/eq-statistics/eq-statistics.component';
import { PossibleAnswerCheckboxlistComponent } from './components/possible-answer-checkboxlist/possible-answer-checkboxlist.component';
import { PossibleAnswerOrdercodeSimpleComponent } from './components/possible-answer-ordercode-simple/possible-answer-ordercode-simple.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {DragDropModule} from '@angular/cdk/drag-drop';
import { NewStudentComponent } from './components/new-student/new-student.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginPageComponent,
    HeaderComponent,
    RegistrationComponent,
    StudentQuizPageComponent,
    NewQuizQuestionModalComponent,
    NewEternalquizModalComponent,
    UserPageComponent,
    UserRowComponent,
    NewUserModalComponent,
    StaffClassPageComponent,
    ClassRowComponent,
    NewClassModalComponent,
    TeacherClassPageComponent,
    ClassQuizRowComponent,
    ProfilePageComponent,
    StudentAssignToClassComponent,
    QuizStatisticModalComponent,
    ChangePasswordModalComponent,
    QuizQuestionListPageComponent,
    EternalQuizListPageComponent,
    EternalQuizRowComponent,
    QuizQuestionRowComponent,
    ModifyEternalquizModalComponent,
    ModifyQuizQuestionModalComponent,
    MainPageComponent,
    FilterClassPipe,
    FilterUserPipe,
    FilterQuizPipe,
    FilterQuizQuestionPipe,
    EternalQuizAssignClassModalComponent,
    PossibleAnswerRadioComponent,
    PossibleAnswerDropdownComponent,
    EqStatisticsComponent,
    PossibleAnswerCheckboxlistComponent,
    PossibleAnswerOrdercodeSimpleComponent,
    NewStudentComponent,
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        NgbModule,
        FroalaEditorModule.forRoot(),
        FroalaViewModule.forRoot(),
        NgSelectModule,
        FormsModule,
        ReactiveFormsModule,
        RouterModule,
        BrowserAnimationsModule,
        DragDropModule
    ],
  entryComponents: [],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: CsrfInterceptor, multi: true },
    { provide: BASE_PATH, useValue: environment.serverUrl.substring(0, environment.serverUrl.length - 1) }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
