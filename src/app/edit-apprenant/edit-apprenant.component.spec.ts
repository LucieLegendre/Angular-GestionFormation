import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditApprenantComponent } from './edit-apprenant.component';

describe('EditApprenantComponent', () => {
  let component: EditApprenantComponent;
  let fixture: ComponentFixture<EditApprenantComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditApprenantComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditApprenantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
