import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddTypeImpotComponent } from './add-type-impot.component';

describe('AddTypeImpotComponent', () => {
  let component: AddTypeImpotComponent;
  let fixture: ComponentFixture<AddTypeImpotComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddTypeImpotComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddTypeImpotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
