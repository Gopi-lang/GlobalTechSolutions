import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CareersComponent } from './careers';

describe('Careers', () => {
  let component: CareersComponent;
  let fixture: ComponentFixture<CareersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CareersComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(CareersComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
