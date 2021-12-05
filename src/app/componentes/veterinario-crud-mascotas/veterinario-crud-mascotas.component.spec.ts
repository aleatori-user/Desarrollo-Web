import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VeterinarioCRUDMascotasComponent } from './veterinario-crud-mascotas.component';

describe('VeterinarioCRUDComponent', () => {
  let component: VeterinarioCRUDMascotasComponent;
  let fixture: ComponentFixture<VeterinarioCRUDMascotasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VeterinarioCRUDMascotasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VeterinarioCRUDMascotasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
