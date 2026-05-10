import { Component, inject } from '@angular/core';
import { ScrollService } from '../../services/scroll.service';

@Component({
  standalone: true,
  selector: 'app-hero',
  templateUrl: './hero.component.html',
})
export class HeroComponent {
  private scrollService = inject(ScrollService);
  schoolName = "St. Xavier's Public School, Supaul";

  scrollTo(id: string) {
    this.scrollService.scrollTo(id);
  }
}
