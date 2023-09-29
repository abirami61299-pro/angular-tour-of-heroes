import { Component, OnInit } from '@angular/core';
import sdk, { VM } from '@stackblitz/sdk';
import { Tab } from './tab.enum';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'angular-tour-of-heroes';
  githubProjectName = 'PRO-INDIA/pro-gamification-sandbox/tree/stage';
  vm: VM | null = null;
  isOpen = 0;
  panel = Tab;
  tab = Tab.First;
  files: any;
  ngOnInit(): void {
    this.embedNewProject();
  }
  async embedNewProject() {
    this.vm = await sdk.embedGithubProject('myDiv', this.githubProjectName, {
      openFile: 'src/environments/environment.ts:L12-L16',
      view: 'editor',
      forceEmbedLayout: true,
      // showSidebar: true,
    });
    this.files = await this.vm.getFsSnapshot();
    console.log(this.files['src/environments/environment.ts']);
  }
  async onnext(tab: number) {
    this.tab = tab;

    if (tab == Tab.First) {
      this.goToFirst();
    } else if (tab == Tab.Third) {
      this.goThird();
    }
  }

  async goToFirst() {
    if (!this.vm) {
      console.error('SDK vm is not available');
      return;
    }
    await this.vm.editor.setCurrentFile('src/environments/environment.ts');
    await this.vm.editor.openFile(['src/environments/environment.ts:L12-L16']);
    await this.vm.editor.setView('editor');
  }
  async goThird() {
    if (!this.vm) {
      console.error('SDK vm is not available');
      return;
    }

    this.isOpen = 1;

    await this.vm.editor.setCurrentFile(
      'src/app/Pages/rating/rating.component.ts'
    );
    await this.vm.editor.openFile([
      'src/app/Pages/rating/rating.component.ts:L46',
    ]);
    await this.vm.editor.setView('editor');
  }
}
