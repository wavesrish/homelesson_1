import { Component, OnInit } from '@angular/core';
import {VillageDataService} from '../../services/village-data.service';
import {Observable} from 'rxjs';
import {IVillage} from '../../models/IVillage';

@Component({
  selector: 'app-village',
  templateUrl: './village.component.html',
  styleUrls: ['./village.component.css']
})
export class VillageComponent implements OnInit {

  public villageList$: Observable<IVillage[]>;
  constructor(private villageService: VillageDataService) { }

  ngOnInit() {
    this.villageList$ = this.villageService.getVillage();
    console.log(this.villageList$);
  }
}
