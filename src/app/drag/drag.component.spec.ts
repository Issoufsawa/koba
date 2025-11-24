import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DragComponent } from './drag.component';

describe('DragComponent', () => {
  let component: DragComponent;
  let fixture: ComponentFixture<DragComponent>;

  beforeEach(() => {
    fixture = TestBed.createComponent(DragComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
