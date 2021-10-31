import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmingenresComponent } from './admingenres.component';

describe('AdmingenresComponent', () => {
  let component: AdmingenresComponent;
  let fixture: ComponentFixture<AdmingenresComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdmingenresComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdmingenresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
