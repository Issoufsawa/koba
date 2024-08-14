import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Singleservices1Component } from './singleservices1.component';

describe('Singleservices1Component', () => {
  let component: Singleservices1Component;
  let fixture: ComponentFixture<Singleservices1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Singleservices1Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Singleservices1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
