import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateTypeBudgetComponent } from './update-type-budget.component';

describe('UpdateTypeBudgetComponent', () => {
  let component: UpdateTypeBudgetComponent;
  let fixture: ComponentFixture<UpdateTypeBudgetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UpdateTypeBudgetComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateTypeBudgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
