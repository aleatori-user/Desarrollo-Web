import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsuarioCRUDComponent } from './usuario-crud.component';

describe('UsuarioCRUDComponent', () => {
  let component: UsuarioCRUDComponent;
  let fixture: ComponentFixture<UsuarioCRUDComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UsuarioCRUDComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UsuarioCRUDComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
