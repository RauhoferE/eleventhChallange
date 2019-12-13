import { Component, OnInit, Output, EventEmitter } from '@angular/core'; // darauf achten das EventEmitter importiert wird
import { DataLoaderService } from '../services/data-loader.service';

@Component({
  selector: 'app-name-input',
  templateUrl: './name-input.component.html',
  styleUrls: ['./name-input.component.scss']
})
export class NameInputComponent implements OnInit {
  name: string;
  @Output() nameChanged = new EventEmitter<string>();//Events um sachen rauszugeben
  constructor(private dataLoader: DataLoaderService) { // Den service über dependency injection hinzufügen

  }

  ngOnInit() {
    this.name = "Enter name";
  }
  writeToConsole()
  {
    console.log("test");
    this.nameChanged.emit(this.name); // Hier wird event gefeuert
  }
  load(){
    this.dataLoader.load().subscribe(data => {
      this.name = data["data"];
    });// Hier auf event subscriben
  }
}
