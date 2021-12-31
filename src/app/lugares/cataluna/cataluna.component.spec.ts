import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CatalunaComponent } from './cataluna.component';

describe('CatalunaComponent', () => {
  let component: CatalunaComponent;
  let fixture: ComponentFixture<CatalunaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CatalunaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CatalunaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
