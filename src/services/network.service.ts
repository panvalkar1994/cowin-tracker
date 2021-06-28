import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NetworkService {
  baseUrl = 'https://cdn-api.co-vin.in/api';
  constructor( private _http:HttpClient) { }

  getStates(){
    const endPoint = this.baseUrl + '/v2/admin/location/states';
    return this._http.get<any>(endPoint);
  }

  getDistricts(state_id:string|number){
    const endPoint = this.baseUrl + `/v2​/admin​/location​/districts​/${state_id}`;
    return this._http.get<any>(endPoint);
  }

  findByPin(params:{pincode:string, date:string}){
    const endPoint = this.baseUrl + `/v2/appointment/sessions/public/findByPin`;
    const queryParams = new HttpParams();
    queryParams.append('pincode',params.pincode);
    queryParams.append('date',params.date);
    return this._http.get<any>(endPoint, {params:queryParams});
  }

  getByPinAndWeek(params:{pincode:string, date:string}){
    const endPoint = this.baseUrl + `/v2/appointment/sessions/public/findByPin`;
    const queryParams = new HttpParams();
    queryParams.append('pincode',params.pincode);
    queryParams.append('date',params.date);
    return this._http.get<any>(endPoint, {params:queryParams});
  }

  findByDistrict(params:{district_id:string,date:string}){
    const endPoint = this.baseUrl + `/v2/appointment/sessions/public/calendarByPin`;
    const queryParams = new HttpParams();
    queryParams.append('district_id', params.district_id);
    queryParams.append('date', params.date);
    return this._http.get(endPoint, {params:queryParams});
  }

  findByDistrictWeek(params:{district_id:string,date:string}){
    const endPoint = this.baseUrl + `/v2/appointment/sessions/public/calendarByDistrict`;
    const queryParams = new HttpParams();
    queryParams.append('district_id', params.district_id);
    queryParams.append('date', params.date);
    return this._http.get(endPoint, {params:queryParams});
  }

  findByCenterWeek(params:{center_id:string,date:string}){
    const endPoint = this.baseUrl + `/v2/appointment/sessions/public/calendarByDistrict`;
    const queryParams = new HttpParams();
    queryParams.append('district_id', params.center_id);
    queryParams.append('date', params.date);
    return this._http.get(endPoint, {params:queryParams});
  }

}
