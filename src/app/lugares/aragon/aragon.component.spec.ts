import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AragonComponent } from './aragon.component';

describe('AragonComponent', () => {
  let component: AragonComponent;
  let fixture: ComponentFixture<AragonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AragonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AragonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
