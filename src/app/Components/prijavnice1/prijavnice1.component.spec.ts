import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Prijavnice1Component } from './prijavnice1.component';

describe('Prijavnice1Component', () => {
  let component: Prijavnice1Component;
  let fixture: ComponentFixture<Prijavnice1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Prijavnice1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Prijavnice1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
