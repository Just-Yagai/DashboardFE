export interface datos {
    rnc:                 string;
    razonSocial:         string;
    tipo_certificiacion: TipoCertificiacion;
}

export interface TipoCertificiacion {
    tipo:                     string;
    estado:                   string;
    inicio_postulacion:       string;
    finalizacion_postulacion: string;
}
