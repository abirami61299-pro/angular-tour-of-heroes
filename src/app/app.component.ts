import { Component, OnInit } from '@angular/core';
import sdk, { VM } from '@stackblitz/sdk';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'angular-tour-of-heroes';
  githubProjectName = 'PRO-INDIA/pro-gamification-sandbox';
  vm: VM | null = null;
  isOpen = '1';
  ngOnInit(): void {
    this.embedNewProject();
  }
  async embedNewProject() {
    this.vm = await sdk.embedGithubProject('myDiv', this.githubProjectName, {
      openFile: 'src/environments/environment.ts:L13-L17',
      view: 'editor',
      forceEmbedLayout: true,
      // showSidebar: true,
    });
  }
  async onnext() {
    if (!this.vm) {
      console.error('SDK vm is not available');
      return;
    }

    this.isOpen = '1';

    await this.vm.editor.setCurrentFile(
      'src/app/Pages/rating/rating.component.ts'
    );
    await this.vm.editor.openFile([
      'src/app/Pages/rating/rating.component.ts:L1-L10',
    ]);
  }

  goToAdmin() {
    this.isOpen = '2';
  }

  async goBack() {
    if (!this.vm) {
      console.error('SDK vm is not available');
      return;
    }

    this.isOpen = '1';

    await this.vm.editor.setCurrentFile('package.json');
    await this.vm.editor.openFile([
      'src/app/Pages/rating/rating.component.ts:L1-L10',
    ]);
  }
}
