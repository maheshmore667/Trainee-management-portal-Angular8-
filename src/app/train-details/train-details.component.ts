import { Component, OnInit } from '@angular/core';
import { trainee } from 'src/services/trainee';
//services
import { EmpCRUDService } from '../../services/emp-crud.service';
import { routerTransition } from '../../services/authenticate.service';

@Component({
  selector: 'app-train-details',
  templateUrl: './train-details.component.html',
  styleUrls: ['./train-details.component.css'],
  animations: [routerTransition()],
	host: {'[@routerTransition]': ''}
})
export class TrainDetailsComponent implements OnInit {

  constructor(private es: EmpCRUDService) { }

  temp:trainee;

  ngOnInit() {
    this.temp = this.es.getSingle();
  }
}
