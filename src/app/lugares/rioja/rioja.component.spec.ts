import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RiojaComponent } from './rioja.component';

describe('RiojaComponent', () => {
  let component: RiojaComponent;
  let fixture: ComponentFixture<RiojaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RiojaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RiojaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
