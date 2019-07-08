import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UnFormateurComponent } from './un-formateur.component';

describe('UnFormateurComponent', () => {
  let component: UnFormateurComponent;
  let fixture: ComponentFixture<UnFormateurComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UnFormateurComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UnFormateurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
