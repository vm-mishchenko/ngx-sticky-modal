import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxStickyModalComponent } from './ngx-sticky-modal.component';

describe('NgxStickyModalComponent', () => {
  let component: NgxStickyModalComponent;
  let fixture: ComponentFixture<NgxStickyModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgxStickyModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxStickyModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
