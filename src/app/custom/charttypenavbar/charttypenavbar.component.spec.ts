import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CharttypenavbarComponent } from './charttypenavbar.component';

describe('CharttypenavbarComponent', () => {
  let component: CharttypenavbarComponent;
  let fixture: ComponentFixture<CharttypenavbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CharttypenavbarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CharttypenavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
