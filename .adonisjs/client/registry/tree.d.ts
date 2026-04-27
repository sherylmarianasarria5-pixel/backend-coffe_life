/* eslint-disable prettier/prettier */
import type { routes } from './index.ts'

export interface ApiDefinition {
  catRoles: {
    index: typeof routes['cat_roles.index']
    store: typeof routes['cat_roles.store']
    show: typeof routes['cat_roles.show']
    update: typeof routes['cat_roles.update']
    destroy: typeof routes['cat_roles.destroy']
  }
  usuarios: {
    index: typeof routes['usuarios.index']
    store: typeof routes['usuarios.store']
    show: typeof routes['usuarios.show']
    update: typeof routes['usuarios.update']
    destroy: typeof routes['usuarios.destroy']
  }
  catTiposTratamiento: {
    index: typeof routes['cat_tipos_tratamiento.index']
    store: typeof routes['cat_tipos_tratamiento.store']
    show: typeof routes['cat_tipos_tratamiento.show']
    update: typeof routes['cat_tipos_tratamiento.update']
    destroy: typeof routes['cat_tipos_tratamiento.destroy']
  }
  catNivelesRoya: {
    index: typeof routes['cat_niveles_roya.index']
    store: typeof routes['cat_niveles_roya.store']
    show: typeof routes['cat_niveles_roya.show']
    update: typeof routes['cat_niveles_roya.update']
    destroy: typeof routes['cat_niveles_roya.destroy']
  }
  catEstadosCultivo: {
    index: typeof routes['cat_estados_cultivo.index']
    store: typeof routes['cat_estados_cultivo.store']
    show: typeof routes['cat_estados_cultivo.show']
    update: typeof routes['cat_estados_cultivo.update']
    destroy: typeof routes['cat_estados_cultivo.destroy']
  }
  catEstadosAnalisis: {
    index: typeof routes['cat_estados_analisis.index']
    store: typeof routes['cat_estados_analisis.store']
    show: typeof routes['cat_estados_analisis.show']
    update: typeof routes['cat_estados_analisis.update']
    destroy: typeof routes['cat_estados_analisis.destroy']
  }
  catTiposRecomendacion: {
    index: typeof routes['cat_tipos_recomendacion.index']
    store: typeof routes['cat_tipos_recomendacion.store']
    show: typeof routes['cat_tipos_recomendacion.show']
    update: typeof routes['cat_tipos_recomendacion.update']
    destroy: typeof routes['cat_tipos_recomendacion.destroy']
  }
  catPrioridades: {
    index: typeof routes['cat_prioridades.index']
    store: typeof routes['cat_prioridades.store']
    show: typeof routes['cat_prioridades.show']
    update: typeof routes['cat_prioridades.update']
    destroy: typeof routes['cat_prioridades.destroy']
  }
  admin: {
    index: typeof routes['admin.index']
    create: typeof routes['admin.create']
    store: typeof routes['admin.store']
    show: typeof routes['admin.show']
    edit: typeof routes['admin.edit']
    update: typeof routes['admin.update']
    destroy: typeof routes['admin.destroy']
  }
  cafeteros: {
    index: typeof routes['cafeteros.index']
    create: typeof routes['cafeteros.create']
    store: typeof routes['cafeteros.store']
    show: typeof routes['cafeteros.show']
    edit: typeof routes['cafeteros.edit']
    update: typeof routes['cafeteros.update']
    destroy: typeof routes['cafeteros.destroy']
  }
  expertos: {
    index: typeof routes['expertos.index']
    create: typeof routes['expertos.create']
    store: typeof routes['expertos.store']
    show: typeof routes['expertos.show']
    edit: typeof routes['expertos.edit']
    update: typeof routes['expertos.update']
    destroy: typeof routes['expertos.destroy']
  }
  roles: {
    index: typeof routes['roles.index']
    create: typeof routes['roles.create']
    store: typeof routes['roles.store']
    show: typeof routes['roles.show']
    edit: typeof routes['roles.edit']
    update: typeof routes['roles.update']
    destroy: typeof routes['roles.destroy']
  }
  categorias: {
    index: typeof routes['categorias.index']
    create: typeof routes['categorias.create']
    store: typeof routes['categorias.store']
    show: typeof routes['categorias.show']
    edit: typeof routes['categorias.edit']
    update: typeof routes['categorias.update']
    destroy: typeof routes['categorias.destroy']
  }
}
