import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DevedorComponent } from './devedor.component';

describe('DevedorComponent', () => {
  let component: DevedorComponent;
  let fixture: ComponentFixture<DevedorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DevedorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DevedorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
