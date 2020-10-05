import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RonaldoComponent } from './ronaldo.component';

describe('RonaldoComponent', () => {
  let component: RonaldoComponent;
  let fixture: ComponentFixture<RonaldoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RonaldoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RonaldoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
