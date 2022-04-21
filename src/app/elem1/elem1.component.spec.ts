import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Elem1Component } from './elem1.component';

describe('Elem1Component', () => {
  let component: Elem1Component;
  let fixture: ComponentFixture<Elem1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Elem1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Elem1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
