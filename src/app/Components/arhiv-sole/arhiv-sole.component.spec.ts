import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArhivSoleComponent } from './arhiv-sole.component';

describe('ArhivSoleComponent', () => {
  let component: ArhivSoleComponent;
  let fixture: ComponentFixture<ArhivSoleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArhivSoleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ArhivSoleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
