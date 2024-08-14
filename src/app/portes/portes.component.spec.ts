import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PortesComponent } from './portes.component';

describe('PortesComponent', () => {
  let component: PortesComponent;
  let fixture: ComponentFixture<PortesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PortesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PortesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
