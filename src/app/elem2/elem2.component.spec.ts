import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Elem2Component } from './elem2.component';

describe('Elem2Component', () => {
  let component: Elem2Component;
  let fixture: ComponentFixture<Elem2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Elem2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Elem2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
