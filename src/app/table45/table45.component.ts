import { TableCeilComponent } from './table-ceil/table-ceil.component';
import { Component, HostListener, signal, WritableSignal } from '@angular/core';
import { tableData } from './tableData';
import { JsonPipe, NgClass } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'table45',
  standalone: true,
  imports: [
    NgClass,
    TableCeilComponent,
    JsonPipe,
    MatButtonModule
  ],
  templateUrl: './table45.component.html',
  styleUrl: './table45.component.scss'
})
export class Table45Component {

  constructor() { }

  tableData = signal(tableData().slice(0, 20));
  hoverCeil = signal(0);
  activeCeil = signal<number | null>(null)

  @HostListener('window:keydown', ['$event']) keyDown(ev: KeyboardEvent) {
    handleKeyDown(ev, this.hoverCeil, this.activeCeil);
    /**
     * для ячеек txt не ждем нажтий сразу выходим
     */
    if (this.tableData()[this.activeCeil() || 1000]?.cellType === 'txt') { this.activeCeil.set(null) }
  }

  updateData() {
    this.tableData.update(data => data.sort((a, b) => 0.5 - Math.random()))
  }

  setActive(ev: MouseEvent, i: number) {
    // только для действий пользователей
    if (!ev.isTrusted) return;
    this.hoverCeil.set(i)
    const keyboardEvent = new KeyboardEvent('keydown', { key: 'Enter' });
    handleKeyDown(keyboardEvent, this.hoverCeil, this.activeCeil);
    if (this.tableData()[this.activeCeil() || 1000]?.cellType === 'txt') { this.activeCeil.set(null) }
  }


}


/**
 * для таблицы 4 строк и 5 колонок.
 * @param ev 
 */
function handleKeyDown(ev: KeyboardEvent, hoverCeil: WritableSignal<number>, activeCeil: WritableSignal<number | null>): void {
  const rows = 4;
  const columns = 5;
  const position = {
    row: Math.trunc(hoverCeil() / columns),
    column: hoverCeil() % columns
  }
  const NoActiveCeil = activeCeil() === null;

  switch (ev.key) {
    case 'ArrowUp':
      NoActiveCeil && --position.row
      break;
    case 'ArrowLeft':
      NoActiveCeil && --position.column
      break;
    case 'ArrowRight':
      NoActiveCeil && ++position.column
      break;
    case 'ArrowDown':
      NoActiveCeil && ++position.row
      break;
    case 'Enter': {
      if (NoActiveCeil) {
        activeCeil.set(hoverCeil());
      } else {
        activeCeil.set(null)
      }
      break;
    }
    case 'Escape':
      activeCeil.set(null)
      break;
  }
  /**
   * выход за сетку
   */
  if (position.row < 0) { position.row = rows - 1 }
  if (position.row >= rows) { position.row = 0 }

  if (position.column < 0) { position.column = columns - 1 }
  if (position.column >= columns) { position.column = 0 }

  hoverCeil.set(position.row * columns + position.column)
}


