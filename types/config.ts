export interface SiteConfig {
  negocio: {
    nombre: string; dominio: string; telefono: string; telefono_display: string
    whatsapp: string; whatsapp_mensaje: string; email: string
    ciudad_principal: string; provincia: string; pais: string
    nicho_singular: string; servicios_realizados: number
    anos_experiencia: string | number; tiempo_respuesta: string
    horario: { semana: { abre: string; cierra: string }; sabado?: { abre: string; cierra: string } }
    direccion: { cp: string }
    coordenadas: { lat: number; lon: number }
  }
  seo: { home: { title: string; meta_desc: string; h1: string } }
  schema: { type: string; price_range: string; same_as: string[] }
  diseno: {
    logo_url: string
    color_primario: string
    color_acento: string
    color_fondo: string         
    color_superficie: string     
    color_borde: string          
    color_texto: string           
    color_texto_suave: string     
    color_acento_hover: string 
  }
  servicios: Servicio[]
  ciudades: Ciudad[]
  faqs: { pregunta: string; respuesta: string }[]
  testimonios: { texto: string; estrellas: number; nombre: string; barrio: string; ciudad: string; servicio: string }[]
  garantias: string[]
}

export interface Servicio {
  slug: string; nombre: string; descripcion: string; descripcion_corta: string
  seo: { title: string; meta_desc: string; h1: string }
}

export interface Ciudad {
  slug: string; nombre: string; provincia: string
  descripcion_local: string; barrios_destacados: string[]
}
