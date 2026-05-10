import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GALLERY_SECTION_CONTENT } from '../../services/constants';

@Component({
  standalone: true,
  selector: 'app-gallery',
  imports: [CommonModule],
  templateUrl: './gallery.component.html',
})
export class GalleryComponent {

  galleryCon = GALLERY_SECTION_CONTENT;

}