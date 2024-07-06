import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScholarComponent } from './scholar.component';

describe('ScholarComponent', () => {
  let component: ScholarComponent;
  let fixture: ComponentFixture<ScholarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ScholarComponent]
    });
    fixture = TestBed.createComponent(ScholarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
