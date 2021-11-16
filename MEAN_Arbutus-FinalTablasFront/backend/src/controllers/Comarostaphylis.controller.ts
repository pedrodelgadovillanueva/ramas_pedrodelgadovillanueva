import {Request, Response} from 'express';
import path from 'path';
import Comarostaphylis from '../models/Comarostaphylis.models';
import fs from 'fs-extra';




export async function conseguirComarostaphyli(req: Request, res: Response): Promise<Response> {
   const { id } = req.params;
   const especie2 = await Comarostaphylis.findById(id);
   return res.json(especie2);
}

export async function conseguirComarostaphylis(req: Request, res: Response): Promise<Response> {
    const especie2 = await Comarostaphylis.find();
    return res.json(especie2);
}


export async function crearComarostaphylis(req: Request, res: Response): Promise<Response>{
    const {especie,estado,habito,peciolos_ramillas,hojas_Duracion_Textura,hojas_Anchas,hojas_Margen,hojas_Enves,inflorescencia,flores} = req.body;
    console.log(req.file?.path);
    const nuevoComarostaphylis = {
        especie: especie,
        estado: estado,
        habito: habito,
        peciolos_ramillas: peciolos_ramillas,
        hojas_Duracion_Textura: hojas_Duracion_Textura,
        hojas_Anchas: hojas_Anchas,
        hojas_Margen: hojas_Margen,
        hojas_Enves: hojas_Enves, 
        inflorescencia: inflorescencia,
        flores: flores,
        imagen: req.file?.path

    }
    const especie2 = new Comarostaphylis(nuevoComarostaphylis);
    await especie2.save();

    return res.json({
        message: 'Comarostaphylis Guardado Exitosamente'
    })
}


export async function actualizarComarostaphylis(req: Request, res: Response): Promise<Response> {
   
    const { id } = req.params;
    const {especie,estado,habito,peciolos_ramillas,hojas_Duracion_Textura,hojas_Anchas,hojas_Margen,hojas_Enves,inflorescencia,flores} = req.body;
    
    const actualizarComarostaphyli = await Comarostaphylis.findByIdAndUpdate(id, {
        especie,
        estado,
        habito,
        peciolos_ramillas,
        hojas_Duracion_Textura,
        hojas_Anchas,
        hojas_Margen,
        hojas_Enves,
        inflorescencia,
        flores
    }, {new: true});

    return res.json({
        message: 'Comarostaphylis actualizado' ,
        actualizarComarostaphyli
  
      })
    }




export async function eliminarComarostaphylis(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;
    const especie2 = await Comarostaphylis.findByIdAndRemove(id);
    if(especie2){
        await fs.unlink(path.resolve(especie2.imagen))
    }
    return res.json({
      message: 'Comarostaphylis Eliminado' ,
      especie2

    })
}

