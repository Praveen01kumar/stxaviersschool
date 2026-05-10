import { isPlatformBrowser } from '@angular/common';
import { Injectable, PLATFORM_ID, inject } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DownloadService {
  private platformId = inject(PLATFORM_ID);

  downloadFile(filePath: string, fileName: string): void {
    if (!isPlatformBrowser(this.platformId)) {
      return;
    }
    const link = document.createElement('a');
    link.href = filePath;
    link.download = fileName;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }
}
