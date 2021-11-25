import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageDunkLowComponent } from './page-dunk-low.component';

describe('PageDunkLowComponent', () => {
  let component: PageDunkLowComponent;
  let fixture: ComponentFixture<PageDunkLowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageDunkLowComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PageDunkLowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
