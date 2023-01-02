import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VariableDataComponent } from './variable-data.component';

describe('VariableDataComponent', () => {
  let component: VariableDataComponent;
  let fixture: ComponentFixture<VariableDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VariableDataComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VariableDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
