import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageYeezyComponent } from './page-yeezy.component';

describe('PageYeezyComponent', () => {
  let component: PageYeezyComponent;
  let fixture: ComponentFixture<PageYeezyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageYeezyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PageYeezyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
