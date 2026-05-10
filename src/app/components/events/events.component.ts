import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EVENTS_SECTION_CONTENT } from '../../services/constants';

@Component({
  standalone: true,
  selector: 'app-events',
  imports: [CommonModule],
  templateUrl: './events.component.html',
})
export class EventsComponent {

  eventsCon = EVENTS_SECTION_CONTENT;

}