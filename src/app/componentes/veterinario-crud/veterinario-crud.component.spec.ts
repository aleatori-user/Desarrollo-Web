import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VeterinarioCRUDComponent } from './veterinario-crud.component';

describe('VeterinarioCRUDComponent', () => {
  let component: VeterinarioCRUDComponent;
  let fixture: ComponentFixture<VeterinarioCRUDComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VeterinarioCRUDComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VeterinarioCRUDComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
