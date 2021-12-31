import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManchaComponent } from './mancha.component';

describe('ManchaComponent', () => {
  let component: ManchaComponent;
  let fixture: ComponentFixture<ManchaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManchaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ManchaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
