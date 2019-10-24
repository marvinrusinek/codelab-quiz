import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { QuestionComponent } from './containers/question/question.component';

const routes: Route[] = [
  { path: 'question/:questionId', component: QuestionComponent, pathMatch: 'full' },
  { path: '', redirectTo: '/question/1', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    // enableTracing: true
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
