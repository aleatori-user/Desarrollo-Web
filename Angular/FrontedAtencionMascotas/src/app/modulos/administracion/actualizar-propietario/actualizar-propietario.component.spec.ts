import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActualizarPropietarioComponent } from './actualizar-propietario.component';

describe('ActualizarPropietarioComponent', () => {
  let component: ActualizarPropietarioComponent;
  let fixture: ComponentFixture<ActualizarPropietarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ActualizarPropietarioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ActualizarPropietarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
