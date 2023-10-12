import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { apiEndPoints } from '../ApiConfig/api.config';

@Injectable({
  providedIn: 'root',
})
export class SandBoxService {
  constructor(private httpClient: HttpClient) {}

  createUsers(projectId: string, clientId: string, sandboxId: string) {
    return this.httpClient.post(apiEndPoints.sandbox.createAll(), {
      projectId: projectId,
      clientId: clientId,
      sandboxId: sandboxId,
    });
  }
}
