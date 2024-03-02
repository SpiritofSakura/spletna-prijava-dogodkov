import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArhivComponent } from './arhiv.component';

describe('ArhivComponent', () => {
  let component: ArhivComponent;
  let fixture: ComponentFixture<ArhivComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArhivComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ArhivComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
