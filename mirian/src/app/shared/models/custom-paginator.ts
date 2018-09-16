import { Injectable } from '@angular/core';
import { MatPaginatorIntl } from '@angular/material';

@Injectable()
export class CustomPaginator extends MatPaginatorIntl {
  itemsPerPageLabel = 'Qde. por pagina';
  nextPageLabel     = 'Próximo';
  previousPageLabel = 'Anterior';
  lastPageLabel = 'Ultima';
  firstPageLabel = 'Início';
  getRangeLabel = function (page: number, pageSize: number, length: number) {
    if (length === 0 || pageSize === 0) { return `0 de ${length}`; }

    length = Math.max(length, 0);

    const startIndex = page * pageSize,
    endIndex = startIndex < length ? Math.min(startIndex + pageSize, length) : startIndex + pageSize;

    return `${startIndex + 1} - ${endIndex} de ${length}`;
  };
}
