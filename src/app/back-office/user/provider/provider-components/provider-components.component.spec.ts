import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProviderComponentsComponent } from './provider-components.component';

describe('ProviderComponentsComponent', () => {
  let component: ProviderComponentsComponent;
  let fixture: ComponentFixture<ProviderComponentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProviderComponentsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProviderComponentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
