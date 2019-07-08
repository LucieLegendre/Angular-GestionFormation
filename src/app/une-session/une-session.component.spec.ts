import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UneSessionComponent } from './une-session.component';

describe('UneSessionComponent', () => {
  let component: UneSessionComponent;
  let fixture: ComponentFixture<UneSessionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UneSessionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UneSessionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
