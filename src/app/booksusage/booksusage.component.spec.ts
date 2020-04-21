import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BooksusageComponent } from './booksusage.component';

describe('BooksusageComponent', () => {
  let component: BooksusageComponent;
  let fixture: ComponentFixture<BooksusageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BooksusageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BooksusageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
