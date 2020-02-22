import { Component, OnInit, ViewChild, ElementRef, ExistingProvider } from '@angular/core';
import {CalendarModule, Calendar} from 'primeng/primeng';
import { ControlValueAccessor, FormControl, FormGroup } from '@angular/forms';



// @Component({
//   selector: 'app-calendar',
//   templateUrl: './calendar.component.html',
//   providers: [CUSTOM_CALENDAR_CONTROL_VALUE_ACCESSOR],
// })
// export class CalendarComponent implements OnInit {
//   value: Date;

//   constructor() {    
//   }

//   ngOnInit() {  
//   }

// }

//


@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html'
})
export class CalendarComponent implements ControlValueAccessor, OnInit {
date1: FormControl;

  
 @ViewChild(Calendar) private _calendar: Calendar;
 validInputMapping: Map<string, Date> = new Map<string, Date>();
private onChange = (_) => { };
private onTouched = () => { };
myGroup: FormGroup;
minDate: Date;
    
maxDate: Date;
constructor(private el: ElementRef) {
  
 }


ngOnInit() {
    // this.date1 = new FormControl();
    this.setvalidInputSet();
    let today = new Date();
    let month = today.getMonth();
    let year = today.getFullYear();
    let prevMonth = (month === 0) ? 11 : month -1;
    let prevYear = (prevMonth === 11) ? year - 1 : year;
    let nextMonth = (month === 11) ? 0 : month + 1;
    let nextYear = (nextMonth === 0) ? year + 1 : year;
    this.minDate = new Date();
    this.minDate.setMonth(prevMonth);
    this.minDate.setFullYear(prevYear);
    this.maxDate = new Date();
    this.maxDate.setMonth(nextMonth);
    // this.maxDate.setFullYear(nextYear);
    
    let invalidDate = new Date();
    invalidDate.setDate(today.getDate() - 1);

    this.myGroup = new FormGroup({
      date1: new FormControl()
   });

if (this._calendar) {
      const origOnInput = this._calendar.onUserInput;
      
      this._calendar.onUserInput = (event) => {
        this.onInput(event);
        origOnInput.call(this._calendar, event);
      };
    }
}

TEST (event) {
console.log('1####======>',event);
if (this._calendar) {
  const origOnInput = this._calendar.onUserInput;
  console.log('2==--------origOnInput======>',origOnInput);
  if(this._calendar.yearOptions.indexOf(2049) !== -1){
    console.log("Value exists!")
} else {
  this._calendar.yearOptions.push(2049);
  this._calendar.yearOptions.push(2099);
}      
  
  this._calendar.onUserInput = (event) => {
    console.log('onUserInput---3===>',event);
    this.onInput(event);
    origOnInput.call(this._calendar, event);
  };
}

}
writeValue(value: any) {
    if (value) {
      this.date1.setValue(value);
    }
  }
setvalidInputSet() {
    const today: Date = new Date();
    this.validInputMapping.set('T', new Date());
    const tomorrow: Date = new Date();
    tomorrow.setDate(today.getDate() + 1);
    this.validInputMapping.set('W', tomorrow);
    const yesterday: Date = new Date();
    yesterday.setDate(today.getDate() -1);
    this.validInputMapping.set('Y', yesterday);
  }
private onInput(event) {
    if (this.validInputMapping.has(event.target.value)) {
      const mapValue = this.validInputMapping.get(event.target.value);
      this.date1.setValue(mapValue);
    }
  }
registerOnChange(fn: any): void {
    this.onChange = fn;
  }
registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }
}
