
import { Component, ChangeDetectionStrategy, signal, inject, PLATFORM_ID, ElementRef } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { ScrollService } from '../../services/scroll.service';
import { ThemeToggleComponent } from '../theme-toggle/theme-toggle.component';
import { DownloadService } from '../../services/download.service';

interface MenuItem {
  label: string;
  id: string;
}

@Component({
  standalone: true,
  selector: 'app-header',
  templateUrl: './header.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [ThemeToggleComponent],
  host: {
    '(document:click)': 'onDocumentClick($event)',
  }
})
export class HeaderComponent {
  private scrollService = inject(ScrollService);
  private platformId = inject(PLATFORM_ID);
  private elementRef = inject(ElementRef);
  name = 'St. Xavier’s Public School';

  isMenuOpen = signal(false);
  isScrolled = signal(false);
  isMoreMenuOpen = signal(false);

  menuItems: MenuItem[] = [
    { label: 'Home', id: 'home' },
    { label: 'About', id: 'about' },
    { label: 'Academics', id: 'academics' },
    { label: 'Admissions', id: 'admissions' },
    { label: 'Faculty', id: 'faculty' },
    { label: 'Gallery', id: 'gallery' },
    { label: 'Events', id: 'events' },
    { label: 'Blog', id: 'blog' },
    { label: 'Results', id: 'results' },
    { label: 'Fees', id: 'fees' },
    { label: 'Contact', id: 'contact' },
  ];

  mainMenuItems: MenuItem[];
  moreMenuItems: MenuItem[];

  constructor(private download: DownloadService) {
    if (isPlatformBrowser(this.platformId)) {
      window.addEventListener('scroll', this.onScroll, { passive: true });
    }
    const moreMenuLabels = [
      'Faculty',
      'Events',
      'Blog',
      'Results',
      'Fees',
    ];
    this.mainMenuItems = this.menuItems.filter(item => !moreMenuLabels.includes(item.label));
    this.moreMenuItems = this.menuItems.filter(item => moreMenuLabels.includes(item.label));
  }

  onDocumentClick(event: Event): void {
    if (!this.elementRef.nativeElement.contains(event.target)) {
      this.isMoreMenuOpen.set(false);
    }
  }

  onScroll = () => {
    this.isScrolled.set(window.scrollY > 50);
  };

  toggleMenu(): void {
    this.isMenuOpen.update(open => !open);
  }

  toggleMoreMenu(): void {
    this.isMoreMenuOpen.update(open => !open);
  }

  scrollToSection(id: string): void {
    this.scrollService.scrollTo(id);
    this.isMenuOpen.set(false);
    this.isMoreMenuOpen.set(false);
  }

  downloadFeestructure() {
    const path = 'assets/download_fee_structure.pdf';
    const name = this.name;
    this.download.downloadFile(path, name);
  }
}