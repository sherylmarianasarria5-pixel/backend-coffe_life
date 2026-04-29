/* eslint-disable prettier/prettier */
import type { AdonisEndpoint } from '@tuyau/core/types'
import type { Registry } from './schema.d.ts'
import type { ApiDefinition } from './tree.d.ts'

const placeholder: any = {}

const routes = {
  'cat_roles.index': {
    methods: ["GET","HEAD"],
    pattern: '/cat_roles',
    tokens: [{"old":"/cat_roles","type":0,"val":"cat_roles","end":""}],
    types: placeholder as Registry['cat_roles.index']['types'],
  },
  'cat_roles.store': {
    methods: ["POST"],
    pattern: '/cat_roles',
    tokens: [{"old":"/cat_roles","type":0,"val":"cat_roles","end":""}],
    types: placeholder as Registry['cat_roles.store']['types'],
  },
  'cat_roles.show': {
    methods: ["GET","HEAD"],
    pattern: '/cat_roles/:id',
    tokens: [{"old":"/cat_roles/:id","type":0,"val":"cat_roles","end":""},{"old":"/cat_roles/:id","type":1,"val":"id","end":""}],
    types: placeholder as Registry['cat_roles.show']['types'],
  },
  'cat_roles.update': {
    methods: ["PUT"],
    pattern: '/cat_roles/:id',
    tokens: [{"old":"/cat_roles/:id","type":0,"val":"cat_roles","end":""},{"old":"/cat_roles/:id","type":1,"val":"id","end":""}],
    types: placeholder as Registry['cat_roles.update']['types'],
  },
  'cat_roles.destroy': {
    methods: ["DELETE"],
    pattern: '/cat_roles/:id',
    tokens: [{"old":"/cat_roles/:id","type":0,"val":"cat_roles","end":""},{"old":"/cat_roles/:id","type":1,"val":"id","end":""}],
    types: placeholder as Registry['cat_roles.destroy']['types'],
  },
  'usuarios.index': {
    methods: ["GET","HEAD"],
    pattern: '/usuarios',
    tokens: [{"old":"/usuarios","type":0,"val":"usuarios","end":""}],
    types: placeholder as Registry['usuarios.index']['types'],
  },
  'usuarios.store': {
    methods: ["POST"],
    pattern: '/usuarios',
    tokens: [{"old":"/usuarios","type":0,"val":"usuarios","end":""}],
    types: placeholder as Registry['usuarios.store']['types'],
  },
  'usuarios.show': {
    methods: ["GET","HEAD"],
    pattern: '/usuarios/:id',
    tokens: [{"old":"/usuarios/:id","type":0,"val":"usuarios","end":""},{"old":"/usuarios/:id","type":1,"val":"id","end":""}],
    types: placeholder as Registry['usuarios.show']['types'],
  },
  'usuarios.update': {
    methods: ["PUT"],
    pattern: '/usuarios/:id',
    tokens: [{"old":"/usuarios/:id","type":0,"val":"usuarios","end":""},{"old":"/usuarios/:id","type":1,"val":"id","end":""}],
    types: placeholder as Registry['usuarios.update']['types'],
  },
  'usuarios.destroy': {
    methods: ["DELETE"],
    pattern: '/usuarios/:id',
    tokens: [{"old":"/usuarios/:id","type":0,"val":"usuarios","end":""},{"old":"/usuarios/:id","type":1,"val":"id","end":""}],
    types: placeholder as Registry['usuarios.destroy']['types'],
  },
  'cat_tipos_tratamiento.index': {
    methods: ["GET","HEAD"],
    pattern: '/cat_tipos_tratamiento',
    tokens: [{"old":"/cat_tipos_tratamiento","type":0,"val":"cat_tipos_tratamiento","end":""}],
    types: placeholder as Registry['cat_tipos_tratamiento.index']['types'],
  },
  'cat_tipos_tratamiento.store': {
    methods: ["POST"],
    pattern: '/cat_tipos_tratamiento',
    tokens: [{"old":"/cat_tipos_tratamiento","type":0,"val":"cat_tipos_tratamiento","end":""}],
    types: placeholder as Registry['cat_tipos_tratamiento.store']['types'],
  },
  'cat_tipos_tratamiento.show': {
    methods: ["GET","HEAD"],
    pattern: '/cat_tipos_tratamiento/:id',
    tokens: [{"old":"/cat_tipos_tratamiento/:id","type":0,"val":"cat_tipos_tratamiento","end":""},{"old":"/cat_tipos_tratamiento/:id","type":1,"val":"id","end":""}],
    types: placeholder as Registry['cat_tipos_tratamiento.show']['types'],
  },
  'cat_tipos_tratamiento.update': {
    methods: ["PUT"],
    pattern: '/cat_tipos_tratamiento/:id',
    tokens: [{"old":"/cat_tipos_tratamiento/:id","type":0,"val":"cat_tipos_tratamiento","end":""},{"old":"/cat_tipos_tratamiento/:id","type":1,"val":"id","end":""}],
    types: placeholder as Registry['cat_tipos_tratamiento.update']['types'],
  },
  'cat_tipos_tratamiento.destroy': {
    methods: ["DELETE"],
    pattern: '/cat_tipos_tratamiento/:id',
    tokens: [{"old":"/cat_tipos_tratamiento/:id","type":0,"val":"cat_tipos_tratamiento","end":""},{"old":"/cat_tipos_tratamiento/:id","type":1,"val":"id","end":""}],
    types: placeholder as Registry['cat_tipos_tratamiento.destroy']['types'],
  },
  'cat_niveles_roya.index': {
    methods: ["GET","HEAD"],
    pattern: '/cat_niveles_roya',
    tokens: [{"old":"/cat_niveles_roya","type":0,"val":"cat_niveles_roya","end":""}],
    types: placeholder as Registry['cat_niveles_roya.index']['types'],
  },
  'cat_niveles_roya.store': {
    methods: ["POST"],
    pattern: '/cat_niveles_roya',
    tokens: [{"old":"/cat_niveles_roya","type":0,"val":"cat_niveles_roya","end":""}],
    types: placeholder as Registry['cat_niveles_roya.store']['types'],
  },
  'cat_niveles_roya.show': {
    methods: ["GET","HEAD"],
    pattern: '/cat_niveles_roya/:id',
    tokens: [{"old":"/cat_niveles_roya/:id","type":0,"val":"cat_niveles_roya","end":""},{"old":"/cat_niveles_roya/:id","type":1,"val":"id","end":""}],
    types: placeholder as Registry['cat_niveles_roya.show']['types'],
  },
  'cat_niveles_roya.update': {
    methods: ["PUT"],
    pattern: '/cat_niveles_roya/:id',
    tokens: [{"old":"/cat_niveles_roya/:id","type":0,"val":"cat_niveles_roya","end":""},{"old":"/cat_niveles_roya/:id","type":1,"val":"id","end":""}],
    types: placeholder as Registry['cat_niveles_roya.update']['types'],
  },
  'cat_niveles_roya.destroy': {
    methods: ["DELETE"],
    pattern: '/cat_niveles_roya/:id',
    tokens: [{"old":"/cat_niveles_roya/:id","type":0,"val":"cat_niveles_roya","end":""},{"old":"/cat_niveles_roya/:id","type":1,"val":"id","end":""}],
    types: placeholder as Registry['cat_niveles_roya.destroy']['types'],
  },
  'cat_estados_cultivo.index': {
    methods: ["GET","HEAD"],
    pattern: '/cat_estados_cultivo',
    tokens: [{"old":"/cat_estados_cultivo","type":0,"val":"cat_estados_cultivo","end":""}],
    types: placeholder as Registry['cat_estados_cultivo.index']['types'],
  },
  'cat_estados_cultivo.store': {
    methods: ["POST"],
    pattern: '/cat_estados_cultivo',
    tokens: [{"old":"/cat_estados_cultivo","type":0,"val":"cat_estados_cultivo","end":""}],
    types: placeholder as Registry['cat_estados_cultivo.store']['types'],
  },
  'cat_estados_cultivo.show': {
    methods: ["GET","HEAD"],
    pattern: '/cat_estados_cultivo/:id',
    tokens: [{"old":"/cat_estados_cultivo/:id","type":0,"val":"cat_estados_cultivo","end":""},{"old":"/cat_estados_cultivo/:id","type":1,"val":"id","end":""}],
    types: placeholder as Registry['cat_estados_cultivo.show']['types'],
  },
  'cat_estados_cultivo.update': {
    methods: ["PUT"],
    pattern: '/cat_estados_cultivo/:id',
    tokens: [{"old":"/cat_estados_cultivo/:id","type":0,"val":"cat_estados_cultivo","end":""},{"old":"/cat_estados_cultivo/:id","type":1,"val":"id","end":""}],
    types: placeholder as Registry['cat_estados_cultivo.update']['types'],
  },
  'cat_estados_cultivo.destroy': {
    methods: ["DELETE"],
    pattern: '/cat_estados_cultivo/:id',
    tokens: [{"old":"/cat_estados_cultivo/:id","type":0,"val":"cat_estados_cultivo","end":""},{"old":"/cat_estados_cultivo/:id","type":1,"val":"id","end":""}],
    types: placeholder as Registry['cat_estados_cultivo.destroy']['types'],
  },
  'cat_estados_analisis.index': {
    methods: ["GET","HEAD"],
    pattern: '/cat_estados_analisis',
    tokens: [{"old":"/cat_estados_analisis","type":0,"val":"cat_estados_analisis","end":""}],
    types: placeholder as Registry['cat_estados_analisis.index']['types'],
  },
  'cat_estados_analisis.store': {
    methods: ["POST"],
    pattern: '/cat_estados_analisis',
    tokens: [{"old":"/cat_estados_analisis","type":0,"val":"cat_estados_analisis","end":""}],
    types: placeholder as Registry['cat_estados_analisis.store']['types'],
  },
  'cat_estados_analisis.show': {
    methods: ["GET","HEAD"],
    pattern: '/cat_estados_analisis/:id',
    tokens: [{"old":"/cat_estados_analisis/:id","type":0,"val":"cat_estados_analisis","end":""},{"old":"/cat_estados_analisis/:id","type":1,"val":"id","end":""}],
    types: placeholder as Registry['cat_estados_analisis.show']['types'],
  },
  'cat_estados_analisis.update': {
    methods: ["PUT"],
    pattern: '/cat_estados_analisis/:id',
    tokens: [{"old":"/cat_estados_analisis/:id","type":0,"val":"cat_estados_analisis","end":""},{"old":"/cat_estados_analisis/:id","type":1,"val":"id","end":""}],
    types: placeholder as Registry['cat_estados_analisis.update']['types'],
  },
  'cat_estados_analisis.destroy': {
    methods: ["DELETE"],
    pattern: '/cat_estados_analisis/:id',
    tokens: [{"old":"/cat_estados_analisis/:id","type":0,"val":"cat_estados_analisis","end":""},{"old":"/cat_estados_analisis/:id","type":1,"val":"id","end":""}],
    types: placeholder as Registry['cat_estados_analisis.destroy']['types'],
  },
  'cat_tipos_recomendacion.index': {
    methods: ["GET","HEAD"],
    pattern: '/cat_tipos_recomendacion',
    tokens: [{"old":"/cat_tipos_recomendacion","type":0,"val":"cat_tipos_recomendacion","end":""}],
    types: placeholder as Registry['cat_tipos_recomendacion.index']['types'],
  },
  'cat_tipos_recomendacion.store': {
    methods: ["POST"],
    pattern: '/cat_tipos_recomendacion',
    tokens: [{"old":"/cat_tipos_recomendacion","type":0,"val":"cat_tipos_recomendacion","end":""}],
    types: placeholder as Registry['cat_tipos_recomendacion.store']['types'],
  },
  'cat_tipos_recomendacion.show': {
    methods: ["GET","HEAD"],
    pattern: '/cat_tipos_recomendacion/:id',
    tokens: [{"old":"/cat_tipos_recomendacion/:id","type":0,"val":"cat_tipos_recomendacion","end":""},{"old":"/cat_tipos_recomendacion/:id","type":1,"val":"id","end":""}],
    types: placeholder as Registry['cat_tipos_recomendacion.show']['types'],
  },
  'cat_tipos_recomendacion.update': {
    methods: ["PUT"],
    pattern: '/cat_tipos_recomendacion/:id',
    tokens: [{"old":"/cat_tipos_recomendacion/:id","type":0,"val":"cat_tipos_recomendacion","end":""},{"old":"/cat_tipos_recomendacion/:id","type":1,"val":"id","end":""}],
    types: placeholder as Registry['cat_tipos_recomendacion.update']['types'],
  },
  'cat_tipos_recomendacion.destroy': {
    methods: ["DELETE"],
    pattern: '/cat_tipos_recomendacion/:id',
    tokens: [{"old":"/cat_tipos_recomendacion/:id","type":0,"val":"cat_tipos_recomendacion","end":""},{"old":"/cat_tipos_recomendacion/:id","type":1,"val":"id","end":""}],
    types: placeholder as Registry['cat_tipos_recomendacion.destroy']['types'],
  },
  'cat_prioridades.index': {
    methods: ["GET","HEAD"],
    pattern: '/cat_prioridades',
    tokens: [{"old":"/cat_prioridades","type":0,"val":"cat_prioridades","end":""}],
    types: placeholder as Registry['cat_prioridades.index']['types'],
  },
  'cat_prioridades.store': {
    methods: ["POST"],
    pattern: '/cat_prioridades',
    tokens: [{"old":"/cat_prioridades","type":0,"val":"cat_prioridades","end":""}],
    types: placeholder as Registry['cat_prioridades.store']['types'],
  },
  'cat_prioridades.show': {
    methods: ["GET","HEAD"],
    pattern: '/cat_prioridades/:id',
    tokens: [{"old":"/cat_prioridades/:id","type":0,"val":"cat_prioridades","end":""},{"old":"/cat_prioridades/:id","type":1,"val":"id","end":""}],
    types: placeholder as Registry['cat_prioridades.show']['types'],
  },
  'cat_prioridades.update': {
    methods: ["PUT"],
    pattern: '/cat_prioridades/:id',
    tokens: [{"old":"/cat_prioridades/:id","type":0,"val":"cat_prioridades","end":""},{"old":"/cat_prioridades/:id","type":1,"val":"id","end":""}],
    types: placeholder as Registry['cat_prioridades.update']['types'],
  },
  'cat_prioridades.destroy': {
    methods: ["DELETE"],
    pattern: '/cat_prioridades/:id',
    tokens: [{"old":"/cat_prioridades/:id","type":0,"val":"cat_prioridades","end":""},{"old":"/cat_prioridades/:id","type":1,"val":"id","end":""}],
    types: placeholder as Registry['cat_prioridades.destroy']['types'],
  },
  'admin.index': {
    methods: ["GET","HEAD"],
    pattern: '/admin',
    tokens: [{"old":"/admin","type":0,"val":"admin","end":""}],
    types: placeholder as Registry['admin.index']['types'],
  },
  'admin.create': {
    methods: ["GET","HEAD"],
    pattern: '/admin/create',
    tokens: [{"old":"/admin/create","type":0,"val":"admin","end":""},{"old":"/admin/create","type":0,"val":"create","end":""}],
    types: placeholder as Registry['admin.create']['types'],
  },
  'admin.store': {
    methods: ["POST"],
    pattern: '/admin',
    tokens: [{"old":"/admin","type":0,"val":"admin","end":""}],
    types: placeholder as Registry['admin.store']['types'],
  },
  'admin.show': {
    methods: ["GET","HEAD"],
    pattern: '/admin/:id',
    tokens: [{"old":"/admin/:id","type":0,"val":"admin","end":""},{"old":"/admin/:id","type":1,"val":"id","end":""}],
    types: placeholder as Registry['admin.show']['types'],
  },
  'admin.edit': {
    methods: ["GET","HEAD"],
    pattern: '/admin/:id/edit',
    tokens: [{"old":"/admin/:id/edit","type":0,"val":"admin","end":""},{"old":"/admin/:id/edit","type":1,"val":"id","end":""},{"old":"/admin/:id/edit","type":0,"val":"edit","end":""}],
    types: placeholder as Registry['admin.edit']['types'],
  },
  'admin.update': {
    methods: ["PUT","PATCH"],
    pattern: '/admin/:id',
    tokens: [{"old":"/admin/:id","type":0,"val":"admin","end":""},{"old":"/admin/:id","type":1,"val":"id","end":""}],
    types: placeholder as Registry['admin.update']['types'],
  },
  'admin.destroy': {
    methods: ["DELETE"],
    pattern: '/admin/:id',
    tokens: [{"old":"/admin/:id","type":0,"val":"admin","end":""},{"old":"/admin/:id","type":1,"val":"id","end":""}],
    types: placeholder as Registry['admin.destroy']['types'],
  },
  'expertos.index': {
    methods: ["GET","HEAD"],
    pattern: '/expertos',
    tokens: [{"old":"/expertos","type":0,"val":"expertos","end":""}],
    types: placeholder as Registry['expertos.index']['types'],
  },
  'expertos.create': {
    methods: ["GET","HEAD"],
    pattern: '/expertos/create',
    tokens: [{"old":"/expertos/create","type":0,"val":"expertos","end":""},{"old":"/expertos/create","type":0,"val":"create","end":""}],
    types: placeholder as Registry['expertos.create']['types'],
  },
  'expertos.store': {
    methods: ["POST"],
    pattern: '/expertos',
    tokens: [{"old":"/expertos","type":0,"val":"expertos","end":""}],
    types: placeholder as Registry['expertos.store']['types'],
  },
  'expertos.show': {
    methods: ["GET","HEAD"],
    pattern: '/expertos/:id',
    tokens: [{"old":"/expertos/:id","type":0,"val":"expertos","end":""},{"old":"/expertos/:id","type":1,"val":"id","end":""}],
    types: placeholder as Registry['expertos.show']['types'],
  },
  'expertos.edit': {
    methods: ["GET","HEAD"],
    pattern: '/expertos/:id/edit',
    tokens: [{"old":"/expertos/:id/edit","type":0,"val":"expertos","end":""},{"old":"/expertos/:id/edit","type":1,"val":"id","end":""},{"old":"/expertos/:id/edit","type":0,"val":"edit","end":""}],
    types: placeholder as Registry['expertos.edit']['types'],
  },
  'expertos.update': {
    methods: ["PUT","PATCH"],
    pattern: '/expertos/:id',
    tokens: [{"old":"/expertos/:id","type":0,"val":"expertos","end":""},{"old":"/expertos/:id","type":1,"val":"id","end":""}],
    types: placeholder as Registry['expertos.update']['types'],
  },
  'expertos.destroy': {
    methods: ["DELETE"],
    pattern: '/expertos/:id',
    tokens: [{"old":"/expertos/:id","type":0,"val":"expertos","end":""},{"old":"/expertos/:id","type":1,"val":"id","end":""}],
    types: placeholder as Registry['expertos.destroy']['types'],
  },
  'cafeteros.index': {
    methods: ["GET","HEAD"],
    pattern: '/cafeteros',
    tokens: [{"old":"/cafeteros","type":0,"val":"cafeteros","end":""}],
    types: placeholder as Registry['cafeteros.index']['types'],
  },
  'cafeteros.create': {
    methods: ["GET","HEAD"],
    pattern: '/cafeteros/create',
    tokens: [{"old":"/cafeteros/create","type":0,"val":"cafeteros","end":""},{"old":"/cafeteros/create","type":0,"val":"create","end":""}],
    types: placeholder as Registry['cafeteros.create']['types'],
  },
  'cafeteros.store': {
    methods: ["POST"],
    pattern: '/cafeteros',
    tokens: [{"old":"/cafeteros","type":0,"val":"cafeteros","end":""}],
    types: placeholder as Registry['cafeteros.store']['types'],
  },
  'cafeteros.show': {
    methods: ["GET","HEAD"],
    pattern: '/cafeteros/:id',
    tokens: [{"old":"/cafeteros/:id","type":0,"val":"cafeteros","end":""},{"old":"/cafeteros/:id","type":1,"val":"id","end":""}],
    types: placeholder as Registry['cafeteros.show']['types'],
  },
  'cafeteros.edit': {
    methods: ["GET","HEAD"],
    pattern: '/cafeteros/:id/edit',
    tokens: [{"old":"/cafeteros/:id/edit","type":0,"val":"cafeteros","end":""},{"old":"/cafeteros/:id/edit","type":1,"val":"id","end":""},{"old":"/cafeteros/:id/edit","type":0,"val":"edit","end":""}],
    types: placeholder as Registry['cafeteros.edit']['types'],
  },
  'cafeteros.update': {
    methods: ["PUT","PATCH"],
    pattern: '/cafeteros/:id',
    tokens: [{"old":"/cafeteros/:id","type":0,"val":"cafeteros","end":""},{"old":"/cafeteros/:id","type":1,"val":"id","end":""}],
    types: placeholder as Registry['cafeteros.update']['types'],
  },
  'cafeteros.destroy': {
    methods: ["DELETE"],
    pattern: '/cafeteros/:id',
    tokens: [{"old":"/cafeteros/:id","type":0,"val":"cafeteros","end":""},{"old":"/cafeteros/:id","type":1,"val":"id","end":""}],
    types: placeholder as Registry['cafeteros.destroy']['types'],
  },
  'categorias.index': {
    methods: ["GET","HEAD"],
    pattern: '/categorias',
    tokens: [{"old":"/categorias","type":0,"val":"categorias","end":""}],
    types: placeholder as Registry['categorias.index']['types'],
  },
  'categorias.create': {
    methods: ["GET","HEAD"],
    pattern: '/categorias/create',
    tokens: [{"old":"/categorias/create","type":0,"val":"categorias","end":""},{"old":"/categorias/create","type":0,"val":"create","end":""}],
    types: placeholder as Registry['categorias.create']['types'],
  },
  'categorias.store': {
    methods: ["POST"],
    pattern: '/categorias',
    tokens: [{"old":"/categorias","type":0,"val":"categorias","end":""}],
    types: placeholder as Registry['categorias.store']['types'],
  },
  'categorias.show': {
    methods: ["GET","HEAD"],
    pattern: '/categorias/:id',
    tokens: [{"old":"/categorias/:id","type":0,"val":"categorias","end":""},{"old":"/categorias/:id","type":1,"val":"id","end":""}],
    types: placeholder as Registry['categorias.show']['types'],
  },
  'categorias.edit': {
    methods: ["GET","HEAD"],
    pattern: '/categorias/:id/edit',
    tokens: [{"old":"/categorias/:id/edit","type":0,"val":"categorias","end":""},{"old":"/categorias/:id/edit","type":1,"val":"id","end":""},{"old":"/categorias/:id/edit","type":0,"val":"edit","end":""}],
    types: placeholder as Registry['categorias.edit']['types'],
  },
  'categorias.update': {
    methods: ["PUT","PATCH"],
    pattern: '/categorias/:id',
    tokens: [{"old":"/categorias/:id","type":0,"val":"categorias","end":""},{"old":"/categorias/:id","type":1,"val":"id","end":""}],
    types: placeholder as Registry['categorias.update']['types'],
  },
  'categorias.destroy': {
    methods: ["DELETE"],
    pattern: '/categorias/:id',
    tokens: [{"old":"/categorias/:id","type":0,"val":"categorias","end":""},{"old":"/categorias/:id","type":1,"val":"id","end":""}],
    types: placeholder as Registry['categorias.destroy']['types'],
  },
  'roles.index': {
    methods: ["GET","HEAD"],
    pattern: '/roles',
    tokens: [{"old":"/roles","type":0,"val":"roles","end":""}],
    types: placeholder as Registry['roles.index']['types'],
  },
  'roles.create': {
    methods: ["GET","HEAD"],
    pattern: '/roles/create',
    tokens: [{"old":"/roles/create","type":0,"val":"roles","end":""},{"old":"/roles/create","type":0,"val":"create","end":""}],
    types: placeholder as Registry['roles.create']['types'],
  },
  'roles.store': {
    methods: ["POST"],
    pattern: '/roles',
    tokens: [{"old":"/roles","type":0,"val":"roles","end":""}],
    types: placeholder as Registry['roles.store']['types'],
  },
  'roles.show': {
    methods: ["GET","HEAD"],
    pattern: '/roles/:id',
    tokens: [{"old":"/roles/:id","type":0,"val":"roles","end":""},{"old":"/roles/:id","type":1,"val":"id","end":""}],
    types: placeholder as Registry['roles.show']['types'],
  },
  'roles.edit': {
    methods: ["GET","HEAD"],
    pattern: '/roles/:id/edit',
    tokens: [{"old":"/roles/:id/edit","type":0,"val":"roles","end":""},{"old":"/roles/:id/edit","type":1,"val":"id","end":""},{"old":"/roles/:id/edit","type":0,"val":"edit","end":""}],
    types: placeholder as Registry['roles.edit']['types'],
  },
  'roles.update': {
    methods: ["PUT","PATCH"],
    pattern: '/roles/:id',
    tokens: [{"old":"/roles/:id","type":0,"val":"roles","end":""},{"old":"/roles/:id","type":1,"val":"id","end":""}],
    types: placeholder as Registry['roles.update']['types'],
  },
  'roles.destroy': {
    methods: ["DELETE"],
    pattern: '/roles/:id',
    tokens: [{"old":"/roles/:id","type":0,"val":"roles","end":""},{"old":"/roles/:id","type":1,"val":"id","end":""}],
    types: placeholder as Registry['roles.destroy']['types'],
  },
} as const satisfies Record<string, AdonisEndpoint>

export { routes }

export const registry = {
  routes,
  $tree: {} as ApiDefinition,
}

declare module '@tuyau/core/types' {
  export interface UserRegistry {
    routes: typeof routes
    $tree: ApiDefinition
  }
}
