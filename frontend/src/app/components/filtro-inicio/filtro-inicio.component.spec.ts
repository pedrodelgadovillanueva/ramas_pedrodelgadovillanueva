import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FiltroInicioComponent } from './filtro-inicio.component';

describe('FiltroInicioComponent', () => {
  let component: FiltroInicioComponent;
  let fixture: ComponentFixture<FiltroInicioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FiltroInicioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FiltroInicioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
