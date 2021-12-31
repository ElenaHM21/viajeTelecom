import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CastillaLeonComponent } from './castilla-leon.component';

describe('CastillaLeonComponent', () => {
  let component: CastillaLeonComponent;
  let fixture: ComponentFixture<CastillaLeonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CastillaLeonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CastillaLeonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
