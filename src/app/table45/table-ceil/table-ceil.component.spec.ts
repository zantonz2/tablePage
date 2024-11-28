import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableCeilComponent } from './table-ceil.component';

describe('TableCeilComponent', () => {
  let component: TableCeilComponent;
  let fixture: ComponentFixture<TableCeilComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TableCeilComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TableCeilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
