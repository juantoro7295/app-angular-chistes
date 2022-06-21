import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ChistesService } from 'src/app/services/chistes.service';

@Component({
  selector: 'app-list-chistes',
  templateUrl: './list-chistes.component.html',
  styleUrls: ['./list-chistes.component.css']
})
export class ListChistesComponent implements OnInit {

  chiste: any = [];
  respuesta: any = [];

  constructor(private $chiste: ChistesService) { }

  ngOnInit(): void {
    this.getchiste();
  }

  getchiste(){
    return this.$chiste.getChiste().subscribe( data =>{
      this.chiste = data.setup;
      this.respuesta= data.delivery;   
    });


  }

}
