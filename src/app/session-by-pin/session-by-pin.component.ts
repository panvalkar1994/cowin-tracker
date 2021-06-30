import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NetworkService } from '../../services/network.service';

@Component({
  selector: 'app-session-by-pin',
  templateUrl: './session-by-pin.component.html',
  styleUrls: ['./session-by-pin.component.css']
})
export class SessionByPinComponent implements OnInit {

  sessionByPinFrom!:FormGroup;

  constructor(
    private fb:FormBuilder,
    private networkService:NetworkService
  ) { }

  
  ngOnInit(): void {
    this.sessionByPinFrom = this.fb.group({
      pincode:['', Validators.required],
      date:['', Validators.required]
    })
  }

  data:any;

  onSubmit(){
    this.networkService.findByPin(this.sessionByPinFrom.value)
      .subscribe(x=>{
        this.data = x;
      })
  }

}
