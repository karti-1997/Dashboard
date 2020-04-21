import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DigitalandprintedbookusageComponent } from './digitalandprintedbookusage.component';

describe('DigitalandprintedbookusageComponent', () => {
  let component: DigitalandprintedbookusageComponent;
  let fixture: ComponentFixture<DigitalandprintedbookusageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DigitalandprintedbookusageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DigitalandprintedbookusageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
