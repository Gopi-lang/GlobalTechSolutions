import { Component, OnInit, AfterViewInit, PLATFORM_ID, Inject } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { RouterLink } from '@angular/router';

declare var bootstrap: any;

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './home.html',
  styleUrls: ['./home.css']
})
export class HomeComponent implements OnInit, AfterViewInit {
  selectedCountry: string = 'All';
  carouselSectors = [
    { name: 'Overseas Recruitment Services', image: 'overseas.png' },
    { name: 'Tours & Travels (Domestic & International)', image: 'tours.png' },
    { name: 'Visa Documentation & Processing', image: 'visa.png' }
  ];

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      this.initializeCarouselEngine();
    }
  }

  /**
   * Safe initialization using the globally loaded bootstrap scripts bundle
   */
  private initializeCarouselEngine(): void {
    const carouselObjElement = document.getElementById('globalTechHeroCarousel');
    
    if (carouselObjElement && typeof bootstrap !== 'undefined') {
      new bootstrap.Carousel(carouselObjElement, {
        interval: 4000, // The slide stays still for 4 seconds before starting next movement
        ride: 'carousel',
        wrap: true,
        touch: true
      });
    } else {
      console.warn('Bootstrap global script not detected or slider element missing.');
    }
  }
}