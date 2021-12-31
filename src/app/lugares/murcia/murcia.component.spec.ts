import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MurciaComponent } from './murcia.component';

describe('MurciaComponent', () => {
  let component: MurciaComponent;
  let fixture: ComponentFixture<MurciaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MurciaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MurciaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
