import {
  Component,
  EventEmitter,
  Input,
  Output,
  OnChanges,
  SimpleChanges,
  OnInit
} from '@angular/core';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss'],
  standalone: false
})
export class PaginationComponent implements OnInit, OnChanges {
  public pages: number[] = [];
  public totalPages: number = 0;

  @Input() totalItems: number = 0;
  @Input() pageSize: number = 5;
  @Input() currentPage: number = 1;
  @Input() pageSizeOptions: number[] = [5, 10, 20, 50];

  @Output() pageChanged = new EventEmitter<number>();
  @Output() pageSizeChanged = new EventEmitter<number>();

  ngOnInit(): void {
    this.setupPagination();
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.setupPagination(); // ensure pages get updated whenever any input changes
  }

  public onPageChange(page: number): void {
    if (page < 1 || page > this.totalPages) return;
    this.pageChanged.emit(page);
  }

  public onPageSizeChange(newSize: number): void {
    this.pageSizeChanged.emit(+newSize);
  }

  public setupPagination(): void {
    this.totalPages = Math.ceil(this.totalItems / this.pageSize) || 1;
    this.pages = Array.from({ length: this.totalPages }, (_, i) => i + 1);
  }

  public getRecordRange(): string {
    if (this.totalItems === 0) {
      return 'Showing 0 records';
    }
    const start = (this.currentPage - 1) * this.pageSize + 1;
    const end = Math.min(this.currentPage * this.pageSize, this.totalItems);
    return `Showing ${start} to ${end} of ${this.totalItems} records`;
  }
}