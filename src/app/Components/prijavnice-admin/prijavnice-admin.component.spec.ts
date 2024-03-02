import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrijavniceAdminComponent } from './prijavnice-admin.component';

describe('PrijavniceAdminComponent', () => {
  let component: PrijavniceAdminComponent;
  let fixture: ComponentFixture<PrijavniceAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrijavniceAdminComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PrijavniceAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
