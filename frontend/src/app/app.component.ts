import { Component } from '@angular/core';
import {CargarScriptsService} from './services/cargar-scripts.service'



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private cargaScripts: CargarScriptsService){
    cargaScripts.carga(["../assets/js/script.js"]);
  }
  title = 'frontend';

}
