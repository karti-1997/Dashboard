import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StackedcolumnComponent } from './stackedcolumn.component';

describe('StackedcolumnComponent', () => {
  let component: StackedcolumnComponent;
  let fixture: ComponentFixture<StackedcolumnComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StackedcolumnComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StackedcolumnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
