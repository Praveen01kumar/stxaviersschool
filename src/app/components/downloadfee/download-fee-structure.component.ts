import { Component, inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-download-fee-structure',
  standalone: true,
  templateUrl: './download-fee-structure.component.html',
})
export class DownloadFeeStructComponent {
  private platformId = inject(PLATFORM_ID);

  ngOnInit() {
    if (isPlatformBrowser(this.platformId)) {
      const fileUrl = 'assets/download_fee_structure.pdf';
      const a = document.createElement('a');
      a.href = fileUrl;
      a.download = 'download_fee_structure';
      a.click();
    }
  }
}
