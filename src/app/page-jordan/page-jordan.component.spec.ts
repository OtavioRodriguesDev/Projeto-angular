import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageJordanComponent } from './page-jordan.component';

describe('PageJordanComponent', () => {
  let component: PageJordanComponent;
  let fixture: ComponentFixture<PageJordanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageJordanComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PageJordanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
