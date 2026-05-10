import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BLOG_SECTION_CONTENT } from '../../services/constants';

@Component({
  standalone: true,
  selector: 'app-blog',
  imports: [CommonModule],
  templateUrl: './blog.component.html',
})
export class BlogComponent {

  blogCon = BLOG_SECTION_CONTENT;

}