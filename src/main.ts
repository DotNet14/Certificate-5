import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { App } from './app/app';
import { Approval } from './app/approval/approval';
bootstrapApplication(Approval, appConfig)
  .catch((err) => console.error(err));
