import { ChangeDetectorRef, Component, Input, OnInit } from '@angular/core';
import { NetworkService } from '../../services/network.service';
import { District } from '../models/district.model';

@Component({
  selector: 'app-co-districts',
  templateUrl: './co-districts.component.html',
  styleUrls: ['./co-districts.component.css']
})
export class CoDistrictsComponent implements OnInit {

  districts!:District[];
  districtId!:number;

  private _stateId!:number;

  @Input() set stateId(value:number){
    this._stateId = value;
    this.getDistricts(this._stateId);
  }

  constructor(
    private networkService:NetworkService,
    private cd:ChangeDetectorRef
  ) { }

  ngOnInit(): void {
  }

  selectDistrict(value:any){
    this.districtId = value;
  }

  getDistricts(stateId:number){
    this.networkService.getDistricts(stateId).subscribe(x=>{
      this.districts = x?.districts;
    })
  }
}
