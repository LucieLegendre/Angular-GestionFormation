import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UnApprenantComponent } from './un-apprenant.component';

describe('UnApprenantComponent', () => {
  let component: UnApprenantComponent;
  let fixture: ComponentFixture<UnApprenantComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UnApprenantComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UnApprenantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
