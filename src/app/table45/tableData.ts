import { signal, WritableSignal } from "@angular/core";

export const tableData: WritableSignal<TableCell[]> = signal([
	{
		value: 'string',
		cellType: 'input'
	}, {
		value: 'не радактируется',
		cellType: 'txt'
	}, {
		value: 'string',
		cellType: 'input'
	}, {
		value: 'string',
		cellType: 'input'
	}, {
		value: 'input',
		cellType: 'input'
	},
	{
		value: 'первый',
		selectValue: ['первый', 'второй', 'третий'],
		cellType: 'select'
	}, {
		value: 'первый',
		selectValue: ['первый', 2, 'третий'],
		cellType: 'select'
	}, {
		value: 'третий',
		selectValue: ['первый', 'второй', 'третий'],
		cellType: 'select'
	}, {
		value: 'третий',
		selectValue: ['первый', 'второй', 'третий'],
		cellType: 'select'
	}, {
		value: 77,
		selectValue: ['первый', 77, 'третий'],
		cellType: 'select'
	},
	{
		value: 'txt',
		cellType: 'txt'
	}, {
		value: 'txt',
		cellType: 'txt'
	}, {
		value: 'txt',
		cellType: 'txt'
	}, {
		value: 'txt',
		cellType: 'txt'
	}, {
		value: 'txt',
		cellType: 'txt'
	},
	{
		value: 'третий',
		selectValue: ['первый', 'второй', 'третий'],
		cellType: 'select'
	}, {
		value: 'второй',
		selectValue: ['первый', 'второй', 'третий'],
		cellType: 'select'
	}, {
		value: 'string',
		cellType: 'input'
	}, {
		value: 'второй',
		selectValue: ['первый', 'второй', 'третий'],
		cellType: 'select'
	}, {
		value: 'первый',
		selectValue: ['первый', 'второй', 'третий'],
		cellType: 'select'
	},
	{
		value: 'первый',
		cellType: 'txt'
	}, {
		value: 'второй',
		cellType: 'txt'
	}, {
		value: 'третий',
		cellType: 'txt'
	}, {
		value: 'четвертый',
		cellType: 'txt'
	}, {
		value: 'NO Edit',
		cellType: 'txt'
	},
]);


export interface TableCell {
	value: string | number;
	selectValue?: (string | number)[];
	cellType: CellType;
}

export type CellType = 'txt' | 'select' | 'input';