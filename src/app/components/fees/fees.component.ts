import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FEES_SECTION_CONTENT } from '../../services/constants';

@Component({
  standalone: true,
  selector: 'app-fees',
  imports: [CommonModule],
  templateUrl: './fees.component.html',
})
export class FeesComponent {

  feesCon = FEES_SECTION_CONTENT;

}