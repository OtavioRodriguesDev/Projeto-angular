import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageAdidasComponent } from './page-adidas.component';

describe('PageAdidasComponent', () => {
  let component: PageAdidasComponent;
  let fixture: ComponentFixture<PageAdidasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageAdidasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PageAdidasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
