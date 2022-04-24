import {Component, forwardRef, Input, OnInit} from '@angular/core';
import {ControlValueAccessor, NG_VALUE_ACCESSOR} from "@angular/forms";

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss'],
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => CarouselComponent),
    multi: true
  }]
})
export class CarouselComponent implements OnInit, ControlValueAccessor {
  currentItem: number = 0;

  @Input() value: string = '';
  @Input() itemList: string[] = [];


  constructor() { }

  ngOnInit(): void {
    this.onChange(this.itemList[this.currentItem]);

  }

  next() {
    this.currentItem = this.itemList[this.currentItem + 1] ? this.currentItem + 1 : 0;
    this.onChange(this.itemList[this.currentItem]);

  }

  prev() {
    this.currentItem = this.itemList[this.currentItem - 1] ? this.currentItem - 1 : this.itemList.length - 1;
    this.onChange(this.itemList[this.currentItem]);
  }

  onChange(_: any) {}

  writeValue(value: string) {
    this.currentItem = this.itemList.indexOf(value);
    this.value = value[this.currentItem];
  }

  registerOnChange(fn: any) {
    this.onChange = fn;
  }

  registerOnTouched() {}
}
