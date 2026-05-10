import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'download-fee-structure',
    loadComponent: () =>
      import('./components/downloadfee/download-fee-structure.component')
        .then(m => m.DownloadFeeStructComponent),
  },
];
