import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'tab-home',
        children: [
          {
            path: '',
            loadChildren: '../tab-home/tab-home.module#TabHomePageModule'
          }
        ]
      },
      {
        path: 'tab-discovery',
        children: [
          {
            path: '',
            loadChildren: '../tab-discovery/tab-discovery.module#TabDiscoveryPageModule'
          }
        ]
      },
      {
        path: 'tab-chat',
        children: [
          {
            path: '',
            loadChildren: '../tab-chat/tab-chat.module#TabChatPageModule'
          }
        ]
      },
      {
        path: 'tab-notification',
        children: [
          {
            path: '',
            loadChildren: '../tab-notification/tab-notification.module#TabNotificationPageModule'
          }
        ]
      },
      {
        path: 'tab-more',
        children: [
          {
            path: '',
            loadChildren: '../tab-more/tab-more.module#TabMorePageModule'
          }
        ]
      },
      {
        path: '',
        redirectTo: '/tabs/tab-home',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/tab-home',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class TabsPageRoutingModule {}
