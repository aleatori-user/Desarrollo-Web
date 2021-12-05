import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CRUDUsuarioComponent } from './crud-usuario.component';

describe('CRUDUsuarioComponent', () => {
  let component: CRUDUsuarioComponent;
  let fixture: ComponentFixture<CRUDUsuarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CRUDUsuarioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CRUDUsuarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
