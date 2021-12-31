import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CantabriaComponent } from './cantabria.component';

describe('CantabriaComponent', () => {
  let component: CantabriaComponent;
  let fixture: ComponentFixture<CantabriaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CantabriaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CantabriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
