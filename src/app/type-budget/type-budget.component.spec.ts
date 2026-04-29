import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TypeBudgetComponent } from './type-budget.component';

describe('TypeBudgetComponent', () => {
  let component: TypeBudgetComponent;
  let fixture: ComponentFixture<TypeBudgetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TypeBudgetComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TypeBudgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
