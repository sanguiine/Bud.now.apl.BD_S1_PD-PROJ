import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminwritersComponent } from './adminwriters.component';

describe('AdminwritersComponent', () => {
  let component: AdminwritersComponent;
  let fixture: ComponentFixture<AdminwritersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminwritersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminwritersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
