import { Component, computed, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FACULTY_SECTION_CONTENT } from '../../services/constants';

@Component({
  standalone: true,
  selector: 'app-faculty',
  imports: [CommonModule],
  templateUrl: './faculty.component.html',
})
export class FacultyComponent {

  facultyCon = FACULTY_SECTION_CONTENT;

  currentIndex = signal(0);

  faculty = computed(() => this.facultyCon.faculty);

  intervalId?: ReturnType<typeof setInterval>;

  ngOnInit() {
    this.startAutoplay();
  }

  ngOnDestroy() {
    this.stopAutoplay();
  }

  next() {
    this.currentIndex.update(value =>
      value === this.faculty().length - 1 ? 0 : value + 1
    );
  }

  prev() {
    this.currentIndex.update(value =>
      value === 0 ? this.faculty().length - 1 : value - 1
    );
  }

  goTo(index: number) {
    this.currentIndex.set(index);
  }

  startAutoplay() {
    this.stopAutoplay();

    this.intervalId = setInterval(() => {
      this.next();
    }, 4000);
  }

  stopAutoplay() {
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
  }
}