import { Component } from '@angular/core';
import { ACADEMICS_SECTION_CONTENT } from '../../services/constants';
import { CommonModule } from "@angular/common";

@Component({
  standalone: true,
  selector: 'app-academics',
  templateUrl: './academics.component.html',
  imports: [CommonModule],
})
export class AcademicsComponent {
academicsCon = ACADEMICS_SECTION_CONTENT;
}
