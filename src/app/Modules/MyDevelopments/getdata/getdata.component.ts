import { Component, OnInit } from '@angular/core';
import { AddEditDataComponent } from './add-edit-data/add-edit-data.component';
import { MydevelopmentService } from '../mydevelopment.service';
import { ModelPopupService } from '../../../Shared/model-popup/model-popup.service';
import { DialogDataResponse } from '../../../Shared/model-popup/models/dialog-data-response.model';

@Component({
  selector: 'app-getdata',
  templateUrl: './getdata.component.html',
  styleUrls: ['./getdata.component.scss']
})
export class GetDataComponent implements OnInit {

  public userData: any = [];
  public searchDetails: string;

  constructor(
    private mydevelopmentService: MydevelopmentService,
    private modelPopupService: ModelPopupService
  ) { }

  ngOnInit(): void {
    this.getUserData();
  }

  public getUserData(): void {
    this.mydevelopmentService.getUserData().subscribe((data: any) => {
      this.userData = data;
    })
  }

  public addEditData(dataItem): void {
    const dialogData = {
      id: dataItem.id,
      name: dataItem.name,
      email: dataItem.email,
      phone: dataItem.phone,
      username: dataItem.username,
      website: dataItem.website,
      companyName: dataItem.company.name,
      address: dataItem.address.street,
      city: dataItem.address.city,
      zipCode: dataItem.address.zipcode
    };
    this.modelPopupService.open(AddEditDataComponent, dialogData).result.then((result: DialogDataResponse) => {
      if (result.isClickOk) {
        this.getUserData();
      }
    });
  }

}
