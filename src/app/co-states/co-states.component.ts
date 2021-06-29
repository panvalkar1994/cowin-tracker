import { Component, OnInit,EventEmitter, Output } from '@angular/core';
import { NetworkService } from '../../services/network.service';
import { State } from '../models/state.model';

@Component({
  selector: 'app-co-states',
  templateUrl: './co-states.component.html',
  styleUrls: ['./co-states.component.css']
})
export class CoStatesComponent implements OnInit {
  
  @Output() stateIdEvent = new EventEmitter();
  states!: State[];
  stateId!:number;

  constructor(
    private networkService:NetworkService
  ) { }



  ngOnInit(): void {
    this.getStates();
  }

  getStates(){
    this.networkService.getStates().subscribe(x=>{
      console.log(x);
      if(!x) return;
      this.states = x?.states;
    });
  }

  selectState($event:any){
    console.log($event.target.value)
    this.stateId=$event.target.value;
    this.stateIdEvent.emit($event.target.value);
  }

}
