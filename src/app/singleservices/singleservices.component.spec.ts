import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleservicesComponent } from './singleservices.component';

describe('SingleservicesComponent', () => {
  let component: SingleservicesComponent;
  let fixture: ComponentFixture<SingleservicesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SingleservicesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SingleservicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
