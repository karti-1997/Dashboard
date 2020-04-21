import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DuesandfinesComponent } from './duesandfines.component';

describe('DuesandfinesComponent', () => {
  let component: DuesandfinesComponent;
  let fixture: ComponentFixture<DuesandfinesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DuesandfinesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DuesandfinesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
