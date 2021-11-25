import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageNikeComponent } from './page-nike.component';

describe('PageNikeComponent', () => {
  let component: PageNikeComponent;
  let fixture: ComponentFixture<PageNikeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageNikeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PageNikeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
