import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MostrarFotoComponent } from './mostrar-foto.component';

describe('MostrarFotoComponent', () => {
  let component: MostrarFotoComponent;
  let fixture: ComponentFixture<MostrarFotoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MostrarFotoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MostrarFotoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
