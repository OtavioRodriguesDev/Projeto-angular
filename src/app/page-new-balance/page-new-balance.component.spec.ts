import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageNewBalanceComponent } from './page-new-balance.component';

describe('PageNewBalanceComponent', () => {
  let component: PageNewBalanceComponent;
  let fixture: ComponentFixture<PageNewBalanceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageNewBalanceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PageNewBalanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
