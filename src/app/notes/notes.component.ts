import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';


@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.css']
})
export class NotesComponent implements OnInit {
  newNote: object = {note:""};
  notes: any[];
  constructor(private _apiService: ApiService) { }

  ngOnInit() {
    this._apiService.getNotes()
    .then((data)=>{
      console.log(data);
      this.notes = data;
    })
    .catch((error)=>{
      console.log("catch", error);
    })
  }
  onSubmit() {
    console.log("in onSubmit");
    this._apiService.addNote(this.newNote)
    .then((data)=>{
        console.log("then", data);
        this.ngOnInit();
    })
    .catch((error) =>{
        console.log("catch", error);
    })

  }

}
