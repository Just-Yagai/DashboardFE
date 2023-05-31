export interface DatosContribuyente {
    rnc:         string;
    razonSocial: string;
}

export interface TipoCertificacion {
    emisor:    datosProveedorEmisor;
    proveedor: datosProveedorEmisor;
}

export interface DatosCertficiacion {
    tipo_certificacion: TipoCertificacion[];
}

export interface DatosCont {
    datosContribuyente: DatosContribuyente[];
    datosCertficiacion: DatosCertficiacion[];
}

export interface datosProveedorEmisor {
    tipo:                     string;
    estado:                   string;
    inicio_postulacion:       string;
    finalizacion_postulacion: string;
}


