import { Component, ViewChild, OnInit, Input, Output, SimpleChanges, EventEmitter } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ReplaySubject, Subject } from 'rxjs';
import { MatSelect } from '@angular/material';
import { take, takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-select-search',
  templateUrl: './select-search.component.html',
  styleUrls: ['./select-search.component.css']
})
export class SelectSearchComponent implements OnInit {

  @Input() lst: any = [];
  @Input() item: any;
  @Input() filterName: string;
  @Input() placeHolder: string;
  @Input() placeholderLabelSearch: string;
  @Input() noEntriesFoundSearch: string;
  @Input() label: Array<string>;
  @Input() required: boolean;
  @Output() itemChange = new EventEmitter();
  /** control for the MatSelect filter keyword */
  public itemFilterCtrl: FormControl = new FormControl();

  /** list of banks filtered by search keyword */
  public filteredItems: ReplaySubject<any[]> = new ReplaySubject<any[]>(1);

  @ViewChild('singleSelect') singleSelect: MatSelect;
  /** Subject that emits when the component has been destroyed. */
  private _onDestroy = new Subject<void>();
  constructor() {
    this.itemChange = new EventEmitter();
  }
  ngOnInit(): void {
    //console.log('init->' + JSON.stringify(this.item));
    this.filteredItems.next(this.lst.slice());
    this.itemFilterCtrl.valueChanges
      .pipe(takeUntil(this._onDestroy))
      .subscribe(() => {
        this.filterBanks();
      });
  }

  /*Init busqueda  */
  ngAfterViewInit() {
    this.setInitialValue();
  }

  ngOnDestroy() {
    this._onDestroy.next();
    this._onDestroy.complete();
  }

  private setInitialValue() {
    // this.filteredItems
    //   .pipe(take(1), takeUntil(this._onDestroy))
    //   .subscribe(() => {

    //   });
  }
  private filterBanks() {
    if (!this.lst) {
      return;
    }
    // get the search keyword
    let search = this.itemFilterCtrl.value;
    if (!search) {
      this.filteredItems.next(this.lst.slice());
      return;
    } else {
      search = search.toLowerCase();
    }
    // filter the banks
    this.filteredItems.next(
      this.lst.filter(item => String(item[this.filterName]).toLowerCase().indexOf(search) > -1)
    );
  }
  /*end busqueda  */

  /*otros */
  changeItemSelected(data: any) {
    this.item = data;
    this.itemChange.emit(this.item);
  }

  getNameClass(item): string {
    //console.log("get-name->"+item);
    let value: string = "";
    this.label.forEach(lab=>{
     value+= String(item[lab])+" ";
    });
    return value;
  }
  /*cambios */
  ngOnChanges(changes: SimpleChanges) {
    // console.log('cambios on change->' + JSON.stringify(changes));
    if (changes['lst']) {
      this.lst = changes['lst'].currentValue;
    }
    if (changes['item']) {
      this.item = changes['item'].currentValue;
    }
    if (changes['filterName']) {
      this.filterName = changes['filterName'].currentValue;
    }
    if (changes['placeHolder']) {
      this.placeHolder = changes['placeHolder'].currentValue;
    }
    if (changes['placeholderLabelSearch']) {
      this.placeholderLabelSearch = changes['placeholderLabelSearch'].currentValue;
    }
    if (changes['noEntriesFoundSearch']) {
      this.noEntriesFoundSearch = changes['noEntriesFoundSearch'].currentValue;
    }
    if (changes['label']) {
      this.label = changes['label'].currentValue;
    }
  }
}
