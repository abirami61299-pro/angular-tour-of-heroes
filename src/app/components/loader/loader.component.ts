import { NavigationExtras, Router } from '@angular/router';
import { SandBoxService } from './../../services/sand-box.service';
import { Component, OnInit } from '@angular/core';
import { getSandBoxId } from 'src/app/utils/helper';
import {
  animate,
  query,
  sequence,
  stagger,
  style,
  transition,
  trigger,
} from '@angular/animations';
import { environment } from 'src/environments/environment';
const listAnimation = trigger('listAnimation', [
  transition('* <=> *', [
    query(
      ':enter',
      [
        style({ opacity: 0 }),
        stagger('1200ms', animate('1000ms ease-out', style({ opacity: 1 }))),
      ],
      { optional: true }
    ),
    query(':leave', animate('500ms', style({ opacity: 0 })), {
      optional: true,
    }),
  ]),
]);
export const fadeAnimation = trigger('fadeAnimation', [
  transition(':enter', [
    style({ opacity: 0 }),
    animate('500ms', style({ opacity: 1 })),
  ]),
  transition(':leave', [
    style({ opacity: 1 }),
    animate('200ms', style({ opacity: 0 })),
  ]),
]);

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.scss'],
  animations: [listAnimation, fadeAnimation],
})
export class LoaderComponent implements OnInit {
  items = [
    'Creating Application',
    'Creating Users',
    'Configuring Game Actions',
    'Configuring PriviledgeStages ',
  ];
  constructor(private sandboxService: SandBoxService, private router: Router) {}

  ngOnInit(): void {
    this.sandboxService
      .createUsers(
        environment.sandBoxSettings.projectId,
        environment.sandBoxSettings.clientId,
        'SandBox ' + getSandBoxId()
      )
      .subscribe((userResponse: any) => {
        const navigationExtras: NavigationExtras = {
          state: {
            data: userResponse.data,
          },
        };
        const gameAction = userResponse.data.gameAction._id;
        const application = userResponse.data.application._id;
        const user = userResponse.data.users[0].userId;

        console.log(userResponse);
        if (userResponse) {
          this.router
            .navigateByUrl(
              `/tour/${user}/${gameAction}/${application}`,
              navigationExtras
            )
            .then(
              (data) => {},
              (error) => {}
            );
        }
      });
  }
}
