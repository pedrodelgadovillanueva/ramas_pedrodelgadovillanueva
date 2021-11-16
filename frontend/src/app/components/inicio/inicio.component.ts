import { Component, OnInit } from '@angular/core';
import {CargarScriptsService} from '../../services/cargar-scripts.service'
@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {

  constructor( private cargaScripts: CargarScriptsService)
  {
    cargaScripts.carga(["../assets/js/nav/script.js"]);
   }

  ngOnInit(): void {

  }

}
