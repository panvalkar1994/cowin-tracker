import { Component, OnInit } from '@angular/core';
import { NetworkService } from '../../services/network.service';
import { State } from '../models/state.model';

@Component({
  selector: 'app-co-states',
  templateUrl: './co-states.component.html',
  styleUrls: ['./co-states.component.css']
})
export class CoStatesComponent implements OnInit {

  constructor(
    private networkService:NetworkService
  ) { }

  states!: State[];

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

}
