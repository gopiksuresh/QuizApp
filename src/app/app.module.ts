import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { ChemistryComponent } from "./chemistry/chemistry.component";
import { HomeComponent } from "./home/home.component";
import { LoginComponent } from "./login/login.component";
import { PhysicsComponent } from "./physics/physics.component";
import { QuestionComponent } from "./question/question.component";
import { AuthGuardService } from "./shared/auth-guard.service";
import { SubjectComponent } from './subject/subject.component';
import { ReportComponent } from './report/report.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    PhysicsComponent,
    ChemistryComponent,
    QuestionComponent,
    SubjectComponent,
    ReportComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [AuthGuardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
