import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ValenciaComponent } from './valencia.component';

describe('ValenciaComponent', () => {
  let component: ValenciaComponent;
  let fixture: ComponentFixture<ValenciaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ValenciaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ValenciaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
