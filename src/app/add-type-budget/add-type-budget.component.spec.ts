import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddTypeBudgetComponent } from './add-type-budget.component';

describe('AddTypeBudgetComponent', () => {
  let component: AddTypeBudgetComponent;
  let fixture: ComponentFixture<AddTypeBudgetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddTypeBudgetComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddTypeBudgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
