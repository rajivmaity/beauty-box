import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddMerchantsComponent } from './add-merchants.component';

describe('AddMerchantsComponent', () => {
  let component: AddMerchantsComponent;
  let fixture: ComponentFixture<AddMerchantsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddMerchantsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddMerchantsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
