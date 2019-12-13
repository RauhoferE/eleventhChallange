import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-output',
  templateUrl: './output.component.html',
  styleUrls: ['./output.component.scss']
})
export class OutputComponent implements OnInit {
  @Input() name: string;
  public isChef: boolean;
  constructor() { 
    this.name = "Cool Name";
    this.isChef = false;
  }

  ngOnInit() {
  }

}
