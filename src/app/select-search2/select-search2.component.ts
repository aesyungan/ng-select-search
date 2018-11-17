import { Component, OnInit, Input, Output, EventEmitter, ViewChild, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-select-search2',
  templateUrl: './select-search2.component.html',
  styleUrls: ['./select-search2.component.css']
})
export class SelectSearch2Component implements OnInit {

  @Input() lst: Array<any> = [];
  @Input() item: any;
  @Input() filterName: string;
  @Input() required: boolean;
  @Input() placeHolder: string;
  @Input() placeholderLabelSearch: string;
  @Input() noEntriesFoundSearch: string;
  @Input() label: Array<string>;
  @Input() btnSearchActive: boolean = false;
  @Output() itemChange = new EventEmitter();
  @Output() btnOnSearch = new EventEmitter();

  filterInput: String = '';
  lstFilter: Array<any> = [];
  @ViewChild('iselect') mySelect;
  constructor() { }

  ngOnInit() {
    this.lstFilter = this.lst;
  }
  applyFilter(filterValue: string) {
   // console.log("filter->" + filterValue);
    if (this.btnSearchActive == false) {
      if (filterValue != "") {
        filterValue = filterValue.trim(); // Remove whitespace
        filterValue = filterValue.toLowerCase(); // Datasource defaults to lowercase matches
        this.lstFilter = this.lst.filter(item => String(item[this.filterName]).toLowerCase().indexOf(filterValue) > -1);
      } else {
        this.lstFilter = this.lst;
      }
     // console.log("filter2->" + filterValue);
    }
  }
  clearFilterValue() {
    this.filterInput = '';
    this.lstFilter = this.lst;
  }
  changeItemSelected(data: any) {
    this.item = data;
    this.itemChange.emit(this.item);
  }
  getNameClass(item): string {
    //console.log(item);
    let value: string = "";
    this.label.forEach(lab => {
      let name = this.getSubNameClass(lab, item);
      value += name + " ";
    });
    return value;
  }
  getSubNameClass(label: String, data: any): String {
    let new_data = data;
    let name = "";
    label.split(".").forEach(lab => {
      if (new_data[lab] === Object(new_data[lab])) {
        new_data = new_data[lab];
      } else {
        name = new_data[lab];
      }
    });
    return String(name);
  }
  onSearch() {
    this.btnOnSearch.emit(this.filterInput);
  }
  /*cambios */
  ngOnChanges(changes: SimpleChanges) {
    // console.log('cambios on change->' + JSON.stringify(changes));
    if (changes['lst']) {
      this.lst = changes['lst'].currentValue;
      this.lstFilter=this.lst;
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
    if (changes['btnSearchActive']) {
      this.btnSearchActive = changes['btnSearchActive'].currentValue;
    }
  }
}
