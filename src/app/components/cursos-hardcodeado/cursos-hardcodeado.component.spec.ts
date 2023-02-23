import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CursosHardcodeadoComponent } from './cursos-hardcodeado.component';

describe('CursosHardcodeadoComponent', () => {
  let component: CursosHardcodeadoComponent;
  let fixture: ComponentFixture<CursosHardcodeadoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CursosHardcodeadoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CursosHardcodeadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
