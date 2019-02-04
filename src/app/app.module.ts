import { BrowserModule } from '@angular/platform-browser';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomepageComponent } from './homepage/homepage.component';
import { EvaluatorsDashboardComponent } from './evaluators-dashboard/evaluators-dashboard.component';
import { DashboardContainerComponent } from './dashboard-container/dashboard-container.component';
import { EvaluatorsProfileComponent } from './evaluators-profile/evaluators-profile.component';
import { SchoolSelfEvaluationReportFormComponent } from './school-self-evaluation-report-form/school-self-evaluation-report-form.component';
import { ReactiveFormsModule , FormsModule} from '@angular/forms';
import { SignaturePadModule } from 'angular2-signaturepad';


import {
  MatButtonModule, MatFormFieldModule,
  MatCardModule, MatStepperModule,
  MatSidenavModule, MatCheckboxModule,
  MatOptionModule, MatSelectModule,MatInputModule,
  MatDatepickerModule, MatRadioModule,MatNativeDateModule,MatIconModule
} from '@angular/material';

import {
  SchedulingOfExternalEvaluationOfSchoolsComponent
} from './scheduling-of-external-evaluation-of-schools/scheduling-of-external-evaluation-of-schools.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    EvaluatorsDashboardComponent,
    DashboardContainerComponent,
    EvaluatorsProfileComponent,
    SchoolSelfEvaluationReportFormComponent,
    SchedulingOfExternalEvaluationOfSchoolsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot([
      {path: '', component: HomepageComponent},
      {path: 'school-self-evaluation-survey', component: SchoolSelfEvaluationReportFormComponent}
    ]),
    MatButtonModule, MatSidenavModule, MatStepperModule, MatCardModule, MatFormFieldModule, MatCardModule
    , MatCheckboxModule, ReactiveFormsModule, FormsModule, MatOptionModule, MatSelectModule, MatDatepickerModule,
  MatDatepickerModule, MatRadioModule, MatNativeDateModule , MatInputModule,
  SignaturePadModule, MatRadioModule, BrowserAnimationsModule, MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
