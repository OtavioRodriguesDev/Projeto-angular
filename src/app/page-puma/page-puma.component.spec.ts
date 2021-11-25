import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PagePumaComponent } from './page-puma.component';

describe('PagePumaComponent', () => {
  let component: PagePumaComponent;
  let fixture: ComponentFixture<PagePumaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PagePumaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PagePumaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
