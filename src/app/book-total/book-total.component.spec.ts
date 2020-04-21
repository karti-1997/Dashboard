import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BookTotalComponent } from './book-total.component';

describe('BookTotalComponent', () => {
  let component: BookTotalComponent;
  let fixture: ComponentFixture<BookTotalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BookTotalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookTotalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
