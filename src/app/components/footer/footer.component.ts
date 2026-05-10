import { Component, inject } from '@angular/core';
import { ScrollService } from '../../services/scroll.service';

@Component({
  standalone: true,
  selector: 'app-footer',
  templateUrl: './footer.component.html',
})
export class FooterComponent {
  private scrollService = inject(ScrollService);
  currentYear: number;
  profile={
    name: `St. Xavier's Public School`,
    email:'mailto:bm000543@gmail.com'
  }

  constructor() {
    this.currentYear = new Date().getFullYear();
  }
  
  scrollTo(id: string) {
    this.scrollService.scrollTo(id);
  }
}