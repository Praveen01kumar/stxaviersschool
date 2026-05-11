import { Component, inject } from '@angular/core';
import { ScrollService } from '../../services/scroll.service';
import { FOOTER_SECTION_CONTENT } from '../../services/constants';

@Component({
  standalone: true,
  selector: 'app-footer',
  templateUrl: './footer.component.html',
})
export class FooterComponent {
  private scrollService = inject(ScrollService);
  currentYear: number;
  footerCon = FOOTER_SECTION_CONTENT;
  constructor() {
    this.currentYear = new Date().getFullYear();
  }
  
  scrollTo(id: string) {
    this.scrollService.scrollTo(id);
  }
}