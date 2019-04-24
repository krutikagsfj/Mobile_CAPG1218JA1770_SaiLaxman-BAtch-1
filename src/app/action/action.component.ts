import { Component, OnInit } from '@angular/core';
import { MobileserviceService } from '../mobileservice.service';

@Component({
  selector: 'app-action',
  templateUrl: './action.component.html',
  styleUrls: ['./action.component.css']
})
export class ActionComponent implements OnInit {

  constructor(private mobileser:MobileserviceService) { }
  mData;
  sortByAsc: boolean = true;
  ngOnInit() {
    this.mobileser.getMobileDetails().subscribe((res)=>{
      this.mData=res;
    })
  }
  sortMobile(parm)
  {
    if(this.sortByAsc == true) {
      this.sortByAsc = false;
      this.mData.sort((a, b) => {
       return a[parm].localeCompare(b[parm]);
      });
    } else {
      this.sortByAsc = true;
      this.mData.sort((a, b) => {
        return b[parm].localeCompare(a[parm]);
     });
   }

  }
  delete(mobile){
    let ind=this.mData.indexOf(mobile);
    this.mData.splice(ind,1);
  }
}
