import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import sdk, { VM } from '@stackblitz/sdk';
import { VIEW } from 'src/app/tab.enum';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss'],
})
export class LayoutComponent implements OnInit {
  githubProjectName = 'PRO-INDIA/pro-gamification-sandbox/tree/stage';
  vm: VM | null = null;
  isOpen = 0;
  files: any;
  view = VIEW;
  tabView = VIEW.EDITOR;
  tab = 1;
  userId = '';
  gameId = '';
  appId = '';
  projectId = environment.sandBoxSettings.projectId;
  iframeUrl = '';
  constructor(private route: ActivatedRoute, private router: Router) {}
  ngOnInit(): void {
    this.embedNewProject();
    this.userId = this.route.snapshot.paramMap.get('userId') ?? '';
    this.gameId = this.route.snapshot.paramMap.get('gameId') ?? '';
    this.appId = this.route.snapshot.paramMap.get('appId') ?? '';

    this.iframeUrl = `${environment.sandBoxSettings.adminUrl}/sandbox/projects/${this.projectId}/Bus%20Booking%20SandBox/applications/${this.appId}/Sandbox%20Application/configure-rewards/0`;
  }

  async embedNewProject() {
    this.vm = await sdk.embedGithubProject('myDiv', this.githubProjectName, {
      openFile: 'src/environments/environment.ts:L12-L16',
      view: 'editor',
      forceEmbedLayout: true,
      // showSidebar: true,
      hideNavigation: true,
    });
    this.files = await this.vm.getFsSnapshot();
  }

  async embedNewProjectWithPreview() {
    await this.vm.editor.setView('preview');
    this.tabView = VIEW.PREVIEW;
  }

  async embedNewProjectWithEditor() {
    await this.vm.editor.setView('editor');
    this.tabView = VIEW.EDITOR;
  }

  async embedNewProjectWithAdmin() {
    this.tabView = VIEW.ADMINPANEL;
  }
  async onnext(tab: number) {
    // this.tabView = tab;
    this.tab = tab;
    console.log(tab);

    if (tab == 1) {
      this.goToFirst();
    } else if (tab == 2) {
      this.tabView = VIEW.ADMINPANEL;
    } else if (tab == 3) {
      this.goThird();
    } else if (tab == 4) {
      this.embedNewProjectWithPreview();
    }
  }

  async goToFirst() {
    if (!this.vm) {
      console.error('SDK vm is not available');
      return;
    }
    this.tabView = VIEW.EDITOR;

    await this.vm.editor.setCurrentFile('src/environments/environment.ts');
    await this.vm.editor.openFile(['src/environments/environment.ts:L12-L16']);
    await this.vm.editor.setView('editor');
  }
  async goThird() {
    if (!this.vm) {
      console.error('SDK vm is not available');
      return;
    }

    this.tabView = VIEW.EDITOR;

    await this.vm.editor.setCurrentFile(
      'src/app/Pages/rating/rating.component.ts'
    );
    await this.vm.editor.openFile([
      'src/app/Pages/rating/rating.component.ts:L46',
    ]);
    await this.vm.editor.setView('editor');
  }
}
