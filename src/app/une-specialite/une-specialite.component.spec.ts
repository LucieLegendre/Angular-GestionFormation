import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UneSpecialiteComponent } from './une-specialite.component';

describe('UneSpecialiteComponent', () => {
  let component: UneSpecialiteComponent;
  let fixture: ComponentFixture<UneSpecialiteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UneSpecialiteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UneSpecialiteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
