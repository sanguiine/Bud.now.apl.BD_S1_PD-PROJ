import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminloansComponent } from './adminloans.component';

describe('AdminloansComponent', () => {
  let component: AdminloansComponent;
  let fixture: ComponentFixture<AdminloansComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminloansComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminloansComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
