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
import { MatTabsModule } from '@angular/material/tabs';
import { FirstWorkflowComponent } from './components/work-flow/first-workflow/first-workflow.component';
import { SecondWorkflowComponent } from './components/work-flow/second-workflow/second-workflow.component';
import { ThirdWorkflowComponent } from './components/work-flow/third-workflow/third-workflow.component';
import { FourthWorkflowComponent } from './components/work-flow/fourth-workflow/fourth-workflow.component';
import { LoaderComponent } from './components/loader/loader.component';
import { LayoutComponent } from './components/layout/layout.component';
import { HttpClientModule } from '@angular/common/http';
import { SafePipe } from './pipes/safe.pipe';

@NgModule({
  declarations: [
    AppComponent,
    FirstWorkflowComponent,
    SecondWorkflowComponent,
    ThirdWorkflowComponent,

    FourthWorkflowComponent,
    LoaderComponent,
    LayoutComponent,
    SafePipe,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MatSidenavModule,
    MatIconModule,
    MatButtonModule,
    MatExpansionModule,
    ClipboardModule,
    MatTabsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
