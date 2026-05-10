import { Component } from '@angular/core';
import { ABOUT_SECTION_CONTENT } from '../../services/constants';
import { CommonModule } from "@angular/common";

@Component({
  standalone: true,
  selector: 'app-about',
  templateUrl: './about.component.html',
  imports: [CommonModule],
})
export class AboutComponent {
aboutCon = ABOUT_SECTION_CONTENT;
}
