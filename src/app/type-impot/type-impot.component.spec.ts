import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TypeImpotComponent } from './type-impot.component';

describe('TypeImpotComponent', () => {
  let component: TypeImpotComponent;
  let fixture: ComponentFixture<TypeImpotComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TypeImpotComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TypeImpotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
