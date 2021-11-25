import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageConverseComponent } from './page-converse.component';

describe('PageConverseComponent', () => {
  let component: PageConverseComponent;
  let fixture: ComponentFixture<PageConverseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageConverseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PageConverseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
