import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReturnandissueComponent } from './monthlyusage.component';

describe('ReturnandissueComponent', () => {
  let component: ReturnandissueComponent;
  let fixture: ComponentFixture<ReturnandissueComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReturnandissueComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReturnandissueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
