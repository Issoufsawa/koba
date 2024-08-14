import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EscalierComponent } from './escalier.component';

describe('EscalierComponent', () => {
  let component: EscalierComponent;
  let fixture: ComponentFixture<EscalierComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EscalierComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EscalierComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
