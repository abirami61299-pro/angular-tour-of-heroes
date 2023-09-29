import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatExpansionModule } from '@angular/material/expansion';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { ClipboardModule } from 'ngx-clipboard';

import { FirstWorkflowComponent } from './components/work-flow/first-workflow/first-workflow.component';
import { SecondWorkflowComponent } from './components/work-flow/second-workflow/second-workflow.component';
import { ThirdWorkflowComponent } from './components/work-flow/third-workflow/third-workflow.component';
@NgModule({
  declarations: [AppComponent, FirstWorkflowComponent, SecondWorkflowComponent, ThirdWorkflowComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MatSidenavModule,
    MatIconModule,
    MatButtonModule,
    MatExpansionModule,
    ClipboardModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
