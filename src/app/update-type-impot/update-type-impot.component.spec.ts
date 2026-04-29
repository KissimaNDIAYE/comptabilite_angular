import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateTypeImpotComponent } from './update-type-impot.component';

describe('UpdateTypeImpotComponent', () => {
  let component: UpdateTypeImpotComponent;
  let fixture: ComponentFixture<UpdateTypeImpotComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UpdateTypeImpotComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateTypeImpotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
