import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditMappingComponent } from './edit-mapping.component';

describe('EditMappingComponent', () => {
  let component: EditMappingComponent;
  let fixture: ComponentFixture<EditMappingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditMappingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditMappingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
