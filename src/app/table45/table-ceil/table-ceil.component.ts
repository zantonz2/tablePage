import { AfterViewInit, Component, effect, ElementRef, input, InputSignal, OnInit } from '@angular/core';
import { CellType, TableCell } from '../tableData';
import { NgSwitch, NgSwitchCase, NgSwitchDefault, NgTemplateOutlet } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from "@angular/material/input";
import { MatSelectModule } from '@angular/material/select';

@Component({
  selector: 'table-ceil',
  standalone: true,
  imports: [
    NgSwitchCase,
    NgSwitch,
    NgSwitchDefault,
    NgTemplateOutlet,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    FormsModule,
    ReactiveFormsModule
  ],
  templateUrl: './table-ceil.component.html',
  styleUrl: './table-ceil.component.scss'
})
export class TableCeilComponent implements OnInit, AfterViewInit {

  tableDataCeil: InputSignal<TableCell> = input.required();
  active: InputSignal<boolean> = input.required();

  control: FormControl = new FormControl({ value: null, disabled: true }); // не стал заморачиваться с типизацией сделал через переменную
  typeValue?: 'text' | 'number'; // выставляем для инпута

  constructor(
    private elementRef: ElementRef
  ) {
    effect(() => {
      if (this.active()) {
        this.control?.enable();
        this.activateElement()
      } else {
        this.control?.disable();
      }
    })
  }

  ngOnInit(): void {

    if (this.tableDataCeil().cellType === 'input') {
      this.typeValue = (typeof this.tableDataCeil().value === 'number') ? 'number' : 'text';
    }
    this.control.setValue(this.tableDataCeil().value)
    // при изменениии сразу изменяем исходное значение
    // отображение изменений 
    this.control.valueChanges.subscribe(newValue => {
      if (this.tableDataCeil().cellType === 'txt') { return };
      if (this.tableDataCeil().cellType === 'input') {
        newValue === 'number' ? +newValue : newValue
      }
      this.tableDataCeil().value = newValue;
    })
  }

  private activateElement() {
    console.log(this.elementRef.nativeElement.querySelector(type_selector[this.tableDataCeil().cellType]))
    this.elementRef.nativeElement.querySelector(type_selector[this.tableDataCeil().cellType])?.click()
  }

  ngAfterViewInit(): void {
    console.log(this.tableDataCeil().value)
  }

}

const type_selector: Type_Selector = {
  'input': 'input',
  'select': 'mat-select',
  'txt': 'span'
}

type Type_Selector = Record<CellType, string>