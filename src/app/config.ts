import { ArrayAlumnosService } from "./services/array-alumnos.service";

export interface Configuracion{
    urlAPI: string,
    servicios:{
        arrayService: ArrayAlumnosService,
    }
} 