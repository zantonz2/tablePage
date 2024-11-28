import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Table45Component } from './table45.component';

describe('Table45Component', () => {
  let component: Table45Component;
  let fixture: ComponentFixture<Table45Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Table45Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Table45Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
