import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VisitordashletsComponent } from './visitordashlets.component';

describe('VisitordashletsComponent', () => {
  let component: VisitordashletsComponent;
  let fixture: ComponentFixture<VisitordashletsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VisitordashletsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VisitordashletsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
