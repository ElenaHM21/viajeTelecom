import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaisVascoComponent } from './pais-vasco.component';

describe('PaisVascoComponent', () => {
  let component: PaisVascoComponent;
  let fixture: ComponentFixture<PaisVascoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaisVascoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PaisVascoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
