import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-new-card-input',
  templateUrl: './new-card-input.component.html',
  styleUrls: ['./new-card-input.component.css']
})
export class NewCardInputComponent implements OnInit {

@Output() onCardAdd = new EventEmitter<string>();

public newCradInput: any = {text: ''};
  
  constructor() { }

  ngOnInit() {
  }
  
  addNote () {
    this.onCardAdd.emit(this.newCradInput.text);
    this.newCradInput.text = '';
  }

}
