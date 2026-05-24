// src/app/core/services/schema.service.ts
import { Injectable, inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class SchemaService {
  private readonly document = inject(DOCUMENT);

  injectSchema(): void {
    const existingScript = this.document.getElementById('school-structured-data');
    if (existingScript) return;

    const script = this.document.createElement('script');
    script.id = 'school-structured-data';
    script.type = 'application/ld+json';
    script.text = JSON.stringify({
      '@context': 'https://schema.org/',
      '@type': 'School',
      'name': 'St. Xavier’s Public School',
      'url': 'https://stxavierspublicschools.in/',
      'image': 'https://stxavierspublicschools.in/assets/logo.png',
      'address': {
        '@type': 'PostalAddress',
        'streetAddress': 'Thakurbari Road, Ward No. 26',
        'addressLocality': 'Supaul',
        'addressRegion': 'Bihar',
        'postalCode': '852131',
        'addressCountry': 'IN'
      },
      'geo': {
        '@type': 'GeoCoordinates',
        'latitude': '26.115044',
        'longitude': '86.601228'
      },
      'telephone': '+91-8757805509',
      'email': 'bm000543@gmail.com',
      'hasOfferCatalog': {
        '@type': 'OfferCatalog',
        'name': 'Education Services',
        'itemListElement': [
          { '@type': 'Offer', 'itemOffered': { '@type': 'EducationalProgram', 'name': 'Pre-Primary Education' } },
          { '@type': 'Offer', 'itemOffered': { '@type': 'EducationalProgram', 'name': 'Primary Education' } },
          { '@type': 'Offer', 'itemOffered': { '@type': 'EducationalProgram', 'name': 'Middle School Education' } }
        ]
      }
    });

    this.document.head.appendChild(script);
  }
}