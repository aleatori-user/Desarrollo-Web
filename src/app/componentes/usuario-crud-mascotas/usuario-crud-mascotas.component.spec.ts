import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsuarioCRUDMascotasComponent } from './usuario-crud-mascotas.component';

describe('UsuarioCRUDComponent', () => {
  let component: UsuarioCRUDMascotasComponent;
  let fixture: ComponentFixture<UsuarioCRUDMascotasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UsuarioCRUDMascotasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UsuarioCRUDMascotasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
