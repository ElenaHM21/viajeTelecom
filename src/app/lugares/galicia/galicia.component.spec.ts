import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GaliciaComponent } from './galicia.component';

describe('GaliciaComponent', () => {
  let component: GaliciaComponent;
  let fixture: ComponentFixture<GaliciaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GaliciaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GaliciaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
