import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavarraComponent } from './navarra.component';

describe('NavarraComponent', () => {
  let component: NavarraComponent;
  let fixture: ComponentFixture<NavarraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavarraComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NavarraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
