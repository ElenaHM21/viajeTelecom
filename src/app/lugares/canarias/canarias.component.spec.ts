import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CanariasComponent } from './canarias.component';

describe('CanariasComponent', () => {
  let component: CanariasComponent;
  let fixture: ComponentFixture<CanariasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CanariasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CanariasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
