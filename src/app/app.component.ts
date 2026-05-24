import { Component, inject, PLATFORM_ID } from '@angular/core';
import { HeaderComponent } from './components/header/header.component';
import { HeroComponent } from './components/hero/hero.component';
import { AboutComponent } from './components/about/about.component';
import { FooterComponent } from './components/footer/footer.component';
import { ContactComponent } from './components/contact/contact.component';
import { isPlatformBrowser } from '@angular/common';
import { ThemeService } from './services/theme.service';
import { RouterOutlet } from '@angular/router';
import { AcademicsComponent } from './components/academics/academics.component';
import { AdmissionsComponent } from './components/admissions/academics.component';
import { FacultyComponent } from './components/faculty/faculty.component';
import { GalleryComponent } from './components/gallery/gallery.component';
import { EventsComponent } from './components/events/events.component';
import { BlogComponent } from './components/blog/blog.component';
import { ResultsComponent } from './components/results/results.component';
import { FeesComponent } from './components/fees/fees.component';
export type Theme = 'light' | 'dark' | 'system';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeaderComponent, HeroComponent, AboutComponent, ContactComponent, FooterComponent, AcademicsComponent, AdmissionsComponent, FacultyComponent, GalleryComponent, EventsComponent, BlogComponent, ResultsComponent, FeesComponent],
  templateUrl: './app.component.html',
})
export class AppComponent {
  private platformId = inject(PLATFORM_ID);
  themeService = inject(ThemeService);
  private title = inject(Title);
  private meta = inject(Meta);
  constructor() {
    this.title.setTitle('St. Xavier’s Public School | Best School in Supaul, Bihar');
    this.meta.updateTag({ name: 'description', content: 'St. Xavier’s Public School Supaul offers quality education from Pre-Primary to Class 8. Best school in Supaul for academics, discipline & holistic development.' });
    this.meta.updateTag({ property: 'og:title', content: 'St. Xavier’s Public School | Best School in Supaul, Bihar' });
    this.meta.updateTag({ property: 'og:description', content: 'St. Xavier’s Public School Supaul offers quality education from Pre-Primary to Class 8. Best school in Supaul for academics, discipline & holistic development.' });
    if (isPlatformBrowser(this.platformId)) {
      const theme = this.getInitialTheme();
      localStorage.setItem('theme', theme);
      this.themeService.updateDOM(theme);
    }
  }

  getInitialTheme(): Theme {
    if (typeof window !== 'undefined' && window.localStorage) {
      return (localStorage.getItem('theme') as Theme | null) || 'dark';
    }
    return 'dark';
  }
}
