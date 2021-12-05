import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CRUDVeterinarioComponent } from './crud-veterinario.component';

describe('CRUDVeterinarioComponent', () => {
  let component: CRUDVeterinarioComponent;
  let fixture: ComponentFixture<CRUDVeterinarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CRUDVeterinarioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CRUDVeterinarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
