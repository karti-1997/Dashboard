import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DualaxislineComponent } from './dualaxisline.component';

describe('DualaxislineComponent', () => {
  let component: DualaxislineComponent;
  let fixture: ComponentFixture<DualaxislineComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DualaxislineComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DualaxislineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
