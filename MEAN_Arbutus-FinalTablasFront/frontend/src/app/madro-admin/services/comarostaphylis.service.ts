import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Comarostaphylis } from '../interface/comarostaphylis';

@Injectable({
  providedIn: 'root'
})
export class ComarostaphylisService {

  private baseUrl: string = environment.baseUrl;

  constructor(private http: HttpClient) { }

  crearComarostaphylis(especie: string , estado: string, habito: string, peciolos_ramillas: string, hojas_Duracion_Textura: string, hojas_Anchas: string, hojas_Margen: string, hojas_Enves: string, inflorescencia: string, flores: string, imagen: File){
    const fd = new FormData();
    fd.append('especie', especie);
    fd.append('estado',estado);
    fd.append('habito',habito);
    fd.append('peciolos_ramillas',peciolos_ramillas);
    fd.append('hojas_Duracion_Textura',hojas_Duracion_Textura);
    fd.append('hojas_Anchas',hojas_Anchas);
    fd.append('hojas_Margen',hojas_Margen);
    fd.append('hojas_Enves',hojas_Enves);
    fd.append('inflorescencia',inflorescencia);
    fd.append('flores',flores);
    fd.append('imagen',imagen);
    return this.http.post(this.baseUrl + '/comarostaphylisI',fd)

  }

  conseguirComarostaphylis(){
    return this.http.get<Comarostaphylis>(this.baseUrl + '/comarostaphylisI')
  }

  conseguircomarostaphyli(id: string){
    return this.http.get<Comarostaphylis>(`${this.baseUrl}/comarostaphylisI/${id}`);
  }

  actualizarComarostaphylis(id: string,especie: string , estado: string, habito: string, peciolos_ramillas: string, hojas_Duracion_Textura: string, hojas_Anchas: string, hojas_Margen: string, hojas_Enves: string, inflorescencia: string, flores: string){
    return this.http.put(`${this.baseUrl}/comarostaphylisI/${id}`, {especie,estado,habito,peciolos_ramillas, hojas_Duracion_Textura, hojas_Anchas, hojas_Margen, hojas_Enves, inflorescencia,flores})
  }

  eliminarComarostaphylis(id: string){
    return this.http.delete(`${this.baseUrl}/comarostaphylisI/${id}`)
  }
}
