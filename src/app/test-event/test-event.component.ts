import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';

@Component({
  selector: 'app-test-event',
  templateUrl: './test-event.component.html',
  styleUrls: ['./test-event.component.css']
})
export class TestEventComponent implements OnInit {
  messageValue: string;

  @Output()
  messageChange = new EventEmitter<string>();

  @Input()
  get message() {
    return this.messageValue;
  }

  set message(val) {
    this.messageValue = val;
    this.messageChange.emit(this.messageValue);
  }
  constructor() { }

  ngOnInit() {
  }

}
