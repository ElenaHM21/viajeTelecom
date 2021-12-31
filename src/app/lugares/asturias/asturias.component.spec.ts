import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AsturiasComponent } from './asturias.component';

describe('AsturiasComponent', () => {
  let component: AsturiasComponent;
  let fixture: ComponentFixture<AsturiasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AsturiasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AsturiasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
