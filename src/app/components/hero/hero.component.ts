import { Component, inject } from '@angular/core';
import { ScrollService } from '../../services/scroll.service';
import { schoolName } from '../../services/constants';

@Component({
  standalone: true,
  selector: 'app-hero',
  templateUrl: './hero.component.html',
})
export class HeroComponent {
  private scrollService = inject(ScrollService);
  schoolName = schoolName;

  scrollTo(id: string) {
    this.scrollService.scrollTo(id);
  }
}
