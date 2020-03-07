import { Component, OnInit, ViewChild, Input, Output, EventEmitter } from '@angular/core';
import { MessageService } from 'primeng/api';
import { ApproverServiceService } from '../../shared-module/approver-service.service';
import { Car } from '../../shared-module/car';
import { SelectItem } from 'primeng/api';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'gcrs-approver-edit',
  templateUrl: './approver-edit.component.html',
  styleUrls: ['./approver-edit.component.scss']
})

export class ApproverEditComponent implements OnInit {
  public myForm: FormGroup;
  // cars: Car[];
  cars: any;
  cols: any[];
  selectedCars3: any;
  brands: SelectItem[];
  asymmetricAu: SelectItem[];
  userForm: any;


  // Input from parent.
  @Input() gridData: any;
  @Output() childEvent = new EventEmitter();

  constructor(private approverService: ApproverServiceService,
    private messageService: MessageService) { 
      
    }

  ngOnInit() {
    
    console.log('===CHECKING GRID DATA--->', this.gridData);

    // this.approverService.getCarsSmall().then(cars => this.cars = cars);
    this.cars = this.gridData;
      // [
      //   { brand: 'VW', year: 2012, color: 'Orange', vin: 'dsad231ff', asymmetric: ['Hold Limits', 'UW'] },
      //   { brand: 'Audi', year: 2011, color: 'Black', vin: 'gwregre345', asymmetric: [] },
      //   { brand: 'Renault', year: 2005, color: 'Gray', vin: 'h354htr', asymmetric: [] },
      //   { brand: 'BMW', year: 2003, color: 'Blue', vin: 'j6w54qgh', asymmetric: ['UW'] },
      //   { brand: 'Mercedes', year: 1995, color: 'Orange', vin: 'hrtwy34', asymmetric: [] },
      //   { brand: 'Volvo', year: 2005, color: 'Black', vin: 'jejtyj', asymmetric: ['Hold Limits'] }
      // ]
      // ;

    this.cols = [
      { field: 'vin', header: 'Vin' },
      { field: 'year', header: 'Year' },
      { field: 'brand', header: 'Brand' },
      { field: 'color', header: 'Color' }
    ];

    this.brands = [
      { label: 'Audi', value: 'Audi' },
      { label: 'BMW', value: 'BMW' },
      { label: 'Fiat', value: 'Fiat' },
      { label: 'Ford', value: 'Ford' },
      { label: 'Honda', value: 'Honda' },
      { label: 'Jaguar', value: 'Jaguar' },
      { label: 'Mercedes', value: 'Mercedes' },
      { label: 'Renault', value: 'Renault' },
      { label: 'VW', value: 'VW' },
      { label: 'Volvo', value: 'Volvo' }
    ];
    this.asymmetricAu = [
      { label: 'Hold Limits', value: 'Hold Limits' },
      { label: 'UW', value: 'UW' }
    ]

    // this.myForm = formBuilder.group({
    //   vin : [this.cars.vin],
    //   year: [this.cars.year],
    //   asymmetric: [this.cars.asymmetric],
    //   color: [this.cars.color],
    // });
    // // this.initRowFirst();
    // console.log(this.myForm);


  }

  isAsymmetricApply(event) {
    console.log("VAL -->", event.value);
    console.log("event.itemValue -->", event.itemValue);
    console.log("ONCHANGE EVENT-->", event);
    this.eventFromChild();

  }

  /*
  loadChunk(index, length): Car[] {
        let chunk: Car[] = [];
        for (let i = 0; i < length; i++) {
            chunk[i] = {...this.inmemoryData[i], ...{vin: (index + i)}};
        } 

        return chunk;
    }*/

  onRowSelect(event) {
    this.messageService.add({ severity: 'info', summary: 'Car Selected', detail: 'Vin: ' + event.data.vin });
  }

  onRowUnselect(event) {
    this.messageService.add({ severity: 'info', summary: 'Car Unselected', detail: 'Vin: ' + event.data.vin });
  }



  // initRowFirst() {
  //   const control = this.myForm;
  //   this.cars.forEach(car => {
  //     control.push(
  //       this.formBuilder.group({
  //         vin: [car.vin],
  //           year: [car.year],
  //           asymmetric: [car.asymmetric],
  //           color: [car.color],
  //       })
  //     );
  //   })
  // }

  eventFromChild(){
    this.childEvent.emit(this.cars);
  }

  handleOnRowReorder(event) {
    console.log('onRowReorde>', event);
    console.log('onRowReorde this.cars---->', this.cars);
    this.childEvent.emit(this.cars);
  }

}
