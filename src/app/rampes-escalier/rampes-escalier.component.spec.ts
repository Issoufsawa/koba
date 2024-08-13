import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RampesEscalierComponent } from './rampes-escalier.component';

describe('RampesEscalierComponent', () => {
  let component: RampesEscalierComponent;
  let fixture: ComponentFixture<RampesEscalierComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RampesEscalierComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RampesEscalierComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
