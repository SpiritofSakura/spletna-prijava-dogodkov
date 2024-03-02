import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrijavniceComponent } from './prijavnice.component';

describe('PrijavniceComponent', () => {
  let component: PrijavniceComponent;
  let fixture: ComponentFixture<PrijavniceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrijavniceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PrijavniceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
