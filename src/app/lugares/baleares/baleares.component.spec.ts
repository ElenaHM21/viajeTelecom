import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BalearesComponent } from './baleares.component';

describe('BalearesComponent', () => {
  let component: BalearesComponent;
  let fixture: ComponentFixture<BalearesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BalearesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BalearesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
