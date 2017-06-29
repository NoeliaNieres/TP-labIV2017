import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InicioLoggeoComponent } from './inicio-loggeo.component';

describe('InicioLoggeoComponent', () => {
  let component: InicioLoggeoComponent;
  let fixture: ComponentFixture<InicioLoggeoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InicioLoggeoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InicioLoggeoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
