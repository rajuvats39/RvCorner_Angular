import { Injectable, TemplateRef, ViewContainerRef } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AppNotificationSettings {
  content: string | TemplateRef<any>;
  closeTitle?: string;
  type?: any;
  appendTo?: ViewContainerRef
}