import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageVansComponent } from './page-vans.component';

describe('PageVansComponent', () => {
  let component: PageVansComponent;
  let fixture: ComponentFixture<PageVansComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageVansComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PageVansComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
