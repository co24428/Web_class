import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GroupFormControlComponent } from './group-form-control.component';

describe('GroupFormControlComponent', () => {
  let component: GroupFormControlComponent;
  let fixture: ComponentFixture<GroupFormControlComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GroupFormControlComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GroupFormControlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
