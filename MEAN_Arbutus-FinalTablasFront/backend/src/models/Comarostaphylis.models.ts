import {Schema, model, Document} from 'mongoose';

const comarostaphylisSchema = new Schema ({
    especie: { type: String, required: true},
    estado: { type: String, required: true},
    habito: { type: String, required: true},
    peciolos_ramillas: {type: String, required: true},
    hojas_Duracion_Textura: {type: String, required: true},
    hojas_Anchas: {type: String, required: true},
    hojas_Margen: { type: String , required: true},
    hojas_Enves : { type: String, required: true},
    inflorescencia : { type: String, required: true},
    flores : { type: String, required: true},
    imagen: { type: String, required: true}
});

interface Icomarostaphylis extends Document{
    especie: string,
    estado:  string,
    habito:  string,
    peciolos_ramillas: string,
    hojas_Duracion_Textura: string,
    hojas_Anchas: string,
    hojas_Margen: string,
    hojas_Enves: string,
    inflorescencia: string,
    flores: string,
    imagen: string
}
export default model<Icomarostaphylis>('especie2', comarostaphylisSchema);