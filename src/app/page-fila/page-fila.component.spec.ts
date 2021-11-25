import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageFilaComponent } from './page-fila.component';

describe('PageFilaComponent', () => {
  let component: PageFilaComponent;
  let fixture: ComponentFixture<PageFilaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageFilaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PageFilaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
