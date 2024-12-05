import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TmpComponentComponent } from './tmp-component.component';

describe('TmpComponentComponent', () => {
  let component: TmpComponentComponent;
  let fixture: ComponentFixture<TmpComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TmpComponentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TmpComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
