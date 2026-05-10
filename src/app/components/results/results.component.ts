import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RESULTS_SECTION_CONTENT } from '../../services/constants';

@Component({
  standalone: true,
  selector: 'app-results',
  imports: [CommonModule],
  templateUrl: './results.component.html',
})
export class ResultsComponent {

  resultsCon = RESULTS_SECTION_CONTENT;

}