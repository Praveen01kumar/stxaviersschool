import { Component } from '@angular/core';
import { ADMISSIONS_SECTION_CONTENT } from '../../services/constants';
import { CommonModule } from "@angular/common";

@Component({
  standalone: true,
  selector: 'app-admissions',
  templateUrl: './admissions.component.html',
  imports: [CommonModule],
})
export class AdmissionsComponent {
admissionsCon = ADMISSIONS_SECTION_CONTENT;
}
