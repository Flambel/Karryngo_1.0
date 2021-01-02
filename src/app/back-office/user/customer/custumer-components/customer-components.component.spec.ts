import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerComponentsComponent } from './customer-components.component';

describe('CustomerComponentsComponent', () => {
  let component: CustomerComponentsComponent;
  let fixture: ComponentFixture<CustomerComponentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomerComponentsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerComponentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
