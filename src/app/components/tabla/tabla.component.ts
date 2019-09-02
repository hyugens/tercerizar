import {Component, OnInit, ViewChild, Output, EventEmitter, Input} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import {MatSort} from '@angular/material/sort';


@Component({
  selector: 'app-tabla',
  templateUrl: `./tabla.component.html`,
  styleUrls: ['./tabla.component.css']
})
export class TablaComponent implements OnInit {

  constructor() { }
  columnSort: string;
  orderSort = 'desc';
  displayedColumns: string[] = [];
  dataSource = new MatTableDataSource<any>([]);

  @Input() public data: any;
  @Input() public column: string;
  @Output() public page = new EventEmitter();
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;

  ngOnInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  ngOnChanges(): void {
    if (this.data) {
      this.displayedColumns = this.data.attr;
      this.dataSource = new MatTableDataSource<any>(this.data.data);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    }
  }

  orden( info ) {
    this.columnSort = info.active;
    this.orderSort = info.direction;
  }

  pagina( info ) {
    
    info.columnSort = this.columnSort;
    info.orderSort = this.orderSort;
    this.page.emit(info);
  }
}
