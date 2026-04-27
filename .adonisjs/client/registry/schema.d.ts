/* eslint-disable prettier/prettier */
/// <reference path="../manifest.d.ts" />

import type { ExtractBody, ExtractErrorResponse, ExtractQuery, ExtractQueryForGet, ExtractResponse } from '@tuyau/core/types'
import type { InferInput, SimpleError } from '@vinejs/vine/types'

export type ParamValue = string | number | bigint | boolean

export interface Registry {
  'cat_roles.index': {
    methods: ["GET","HEAD"]
    pattern: '/cat_roles'
    types: {
      body: {}
      paramsTuple: []
      params: {}
      query: {}
      response: ExtractResponse<Awaited<ReturnType<import('#controllers/cat_roles_controller').default['index']>>>
      errorResponse: ExtractErrorResponse<Awaited<ReturnType<import('#controllers/cat_roles_controller').default['index']>>>
    }
  }
  'cat_roles.store': {
    methods: ["POST"]
    pattern: '/cat_roles'
    types: {
      body: {}
      paramsTuple: []
      params: {}
      query: {}
      response: ExtractResponse<Awaited<ReturnType<import('#controllers/cat_roles_controller').default['store']>>>
      errorResponse: ExtractErrorResponse<Awaited<ReturnType<import('#controllers/cat_roles_controller').default['store']>>>
    }
  }
  'cat_roles.show': {
    methods: ["GET","HEAD"]
    pattern: '/cat_roles/:id'
    types: {
      body: {}
      paramsTuple: [ParamValue]
      params: { id: ParamValue }
      query: {}
      response: ExtractResponse<Awaited<ReturnType<import('#controllers/cat_roles_controller').default['show']>>>
      errorResponse: ExtractErrorResponse<Awaited<ReturnType<import('#controllers/cat_roles_controller').default['show']>>>
    }
  }
  'cat_roles.update': {
    methods: ["PUT"]
    pattern: '/cat_roles/:id'
    types: {
      body: {}
      paramsTuple: [ParamValue]
      params: { id: ParamValue }
      query: {}
      response: ExtractResponse<Awaited<ReturnType<import('#controllers/cat_roles_controller').default['update']>>>
      errorResponse: ExtractErrorResponse<Awaited<ReturnType<import('#controllers/cat_roles_controller').default['update']>>>
    }
  }
  'cat_roles.destroy': {
    methods: ["DELETE"]
    pattern: '/cat_roles/:id'
    types: {
      body: {}
      paramsTuple: [ParamValue]
      params: { id: ParamValue }
      query: {}
      response: ExtractResponse<Awaited<ReturnType<import('#controllers/cat_roles_controller').default['destroy']>>>
      errorResponse: ExtractErrorResponse<Awaited<ReturnType<import('#controllers/cat_roles_controller').default['destroy']>>>
    }
  }
  'usuarios.index': {
    methods: ["GET","HEAD"]
    pattern: '/usuarios'
    types: {
      body: {}
      paramsTuple: []
      params: {}
      query: {}
      response: ExtractResponse<Awaited<ReturnType<import('#controllers/usuarios_controller').default['index']>>>
      errorResponse: ExtractErrorResponse<Awaited<ReturnType<import('#controllers/usuarios_controller').default['index']>>>
    }
  }
  'usuarios.store': {
    methods: ["POST"]
    pattern: '/usuarios'
    types: {
      body: {}
      paramsTuple: []
      params: {}
      query: {}
      response: ExtractResponse<Awaited<ReturnType<import('#controllers/usuarios_controller').default['store']>>>
      errorResponse: ExtractErrorResponse<Awaited<ReturnType<import('#controllers/usuarios_controller').default['store']>>>
    }
  }
  'usuarios.show': {
    methods: ["GET","HEAD"]
    pattern: '/usuarios/:id'
    types: {
      body: {}
      paramsTuple: [ParamValue]
      params: { id: ParamValue }
      query: {}
      response: ExtractResponse<Awaited<ReturnType<import('#controllers/usuarios_controller').default['show']>>>
      errorResponse: ExtractErrorResponse<Awaited<ReturnType<import('#controllers/usuarios_controller').default['show']>>>
    }
  }
  'usuarios.update': {
    methods: ["PUT"]
    pattern: '/usuarios/:id'
    types: {
      body: {}
      paramsTuple: [ParamValue]
      params: { id: ParamValue }
      query: {}
      response: ExtractResponse<Awaited<ReturnType<import('#controllers/usuarios_controller').default['update']>>>
      errorResponse: ExtractErrorResponse<Awaited<ReturnType<import('#controllers/usuarios_controller').default['update']>>>
    }
  }
  'usuarios.destroy': {
    methods: ["DELETE"]
    pattern: '/usuarios/:id'
    types: {
      body: {}
      paramsTuple: [ParamValue]
      params: { id: ParamValue }
      query: {}
      response: ExtractResponse<Awaited<ReturnType<import('#controllers/usuarios_controller').default['destroy']>>>
      errorResponse: ExtractErrorResponse<Awaited<ReturnType<import('#controllers/usuarios_controller').default['destroy']>>>
    }
  }
  'cat_tipos_tratamiento.index': {
    methods: ["GET","HEAD"]
    pattern: '/cat_tipos_tratamiento'
    types: {
      body: {}
      paramsTuple: []
      params: {}
      query: {}
      response: ExtractResponse<Awaited<ReturnType<import('#controllers/cat_tipos_tratamientos_controller').default['index']>>>
      errorResponse: ExtractErrorResponse<Awaited<ReturnType<import('#controllers/cat_tipos_tratamientos_controller').default['index']>>>
    }
  }
  'cat_tipos_tratamiento.store': {
    methods: ["POST"]
    pattern: '/cat_tipos_tratamiento'
    types: {
      body: {}
      paramsTuple: []
      params: {}
      query: {}
      response: ExtractResponse<Awaited<ReturnType<import('#controllers/cat_tipos_tratamientos_controller').default['store']>>>
      errorResponse: ExtractErrorResponse<Awaited<ReturnType<import('#controllers/cat_tipos_tratamientos_controller').default['store']>>>
    }
  }
  'cat_tipos_tratamiento.show': {
    methods: ["GET","HEAD"]
    pattern: '/cat_tipos_tratamiento/:id'
    types: {
      body: {}
      paramsTuple: [ParamValue]
      params: { id: ParamValue }
      query: {}
      response: ExtractResponse<Awaited<ReturnType<import('#controllers/cat_tipos_tratamientos_controller').default['show']>>>
      errorResponse: ExtractErrorResponse<Awaited<ReturnType<import('#controllers/cat_tipos_tratamientos_controller').default['show']>>>
    }
  }
  'cat_tipos_tratamiento.update': {
    methods: ["PUT"]
    pattern: '/cat_tipos_tratamiento/:id'
    types: {
      body: {}
      paramsTuple: [ParamValue]
      params: { id: ParamValue }
      query: {}
      response: ExtractResponse<Awaited<ReturnType<import('#controllers/cat_tipos_tratamientos_controller').default['update']>>>
      errorResponse: ExtractErrorResponse<Awaited<ReturnType<import('#controllers/cat_tipos_tratamientos_controller').default['update']>>>
    }
  }
  'cat_tipos_tratamiento.destroy': {
    methods: ["DELETE"]
    pattern: '/cat_tipos_tratamiento/:id'
    types: {
      body: {}
      paramsTuple: [ParamValue]
      params: { id: ParamValue }
      query: {}
      response: ExtractResponse<Awaited<ReturnType<import('#controllers/cat_tipos_tratamientos_controller').default['destroy']>>>
      errorResponse: ExtractErrorResponse<Awaited<ReturnType<import('#controllers/cat_tipos_tratamientos_controller').default['destroy']>>>
    }
  }
  'cat_niveles_roya.index': {
    methods: ["GET","HEAD"]
    pattern: '/cat_niveles_roya'
    types: {
      body: {}
      paramsTuple: []
      params: {}
      query: {}
      response: ExtractResponse<Awaited<ReturnType<import('#controllers/cat_niveles_royas_controller').default['index']>>>
      errorResponse: ExtractErrorResponse<Awaited<ReturnType<import('#controllers/cat_niveles_royas_controller').default['index']>>>
    }
  }
  'cat_niveles_roya.store': {
    methods: ["POST"]
    pattern: '/cat_niveles_roya'
    types: {
      body: {}
      paramsTuple: []
      params: {}
      query: {}
      response: ExtractResponse<Awaited<ReturnType<import('#controllers/cat_niveles_royas_controller').default['store']>>>
      errorResponse: ExtractErrorResponse<Awaited<ReturnType<import('#controllers/cat_niveles_royas_controller').default['store']>>>
    }
  }
  'cat_niveles_roya.show': {
    methods: ["GET","HEAD"]
    pattern: '/cat_niveles_roya/:id'
    types: {
      body: {}
      paramsTuple: [ParamValue]
      params: { id: ParamValue }
      query: {}
      response: ExtractResponse<Awaited<ReturnType<import('#controllers/cat_niveles_royas_controller').default['show']>>>
      errorResponse: ExtractErrorResponse<Awaited<ReturnType<import('#controllers/cat_niveles_royas_controller').default['show']>>>
    }
  }
  'cat_niveles_roya.update': {
    methods: ["PUT"]
    pattern: '/cat_niveles_roya/:id'
    types: {
      body: {}
      paramsTuple: [ParamValue]
      params: { id: ParamValue }
      query: {}
      response: ExtractResponse<Awaited<ReturnType<import('#controllers/cat_niveles_royas_controller').default['update']>>>
      errorResponse: ExtractErrorResponse<Awaited<ReturnType<import('#controllers/cat_niveles_royas_controller').default['update']>>>
    }
  }
  'cat_niveles_roya.destroy': {
    methods: ["DELETE"]
    pattern: '/cat_niveles_roya/:id'
    types: {
      body: {}
      paramsTuple: [ParamValue]
      params: { id: ParamValue }
      query: {}
      response: ExtractResponse<Awaited<ReturnType<import('#controllers/cat_niveles_royas_controller').default['destroy']>>>
      errorResponse: ExtractErrorResponse<Awaited<ReturnType<import('#controllers/cat_niveles_royas_controller').default['destroy']>>>
    }
  }
  'cat_estados_cultivo.index': {
    methods: ["GET","HEAD"]
    pattern: '/cat_estados_cultivo'
    types: {
      body: {}
      paramsTuple: []
      params: {}
      query: {}
      response: ExtractResponse<Awaited<ReturnType<import('#controllers/cat_estados_cultivos_controller').default['index']>>>
      errorResponse: ExtractErrorResponse<Awaited<ReturnType<import('#controllers/cat_estados_cultivos_controller').default['index']>>>
    }
  }
  'cat_estados_cultivo.store': {
    methods: ["POST"]
    pattern: '/cat_estados_cultivo'
    types: {
      body: {}
      paramsTuple: []
      params: {}
      query: {}
      response: ExtractResponse<Awaited<ReturnType<import('#controllers/cat_estados_cultivos_controller').default['store']>>>
      errorResponse: ExtractErrorResponse<Awaited<ReturnType<import('#controllers/cat_estados_cultivos_controller').default['store']>>>
    }
  }
  'cat_estados_cultivo.show': {
    methods: ["GET","HEAD"]
    pattern: '/cat_estados_cultivo/:id'
    types: {
      body: {}
      paramsTuple: [ParamValue]
      params: { id: ParamValue }
      query: {}
      response: ExtractResponse<Awaited<ReturnType<import('#controllers/cat_estados_cultivos_controller').default['show']>>>
      errorResponse: ExtractErrorResponse<Awaited<ReturnType<import('#controllers/cat_estados_cultivos_controller').default['show']>>>
    }
  }
  'cat_estados_cultivo.update': {
    methods: ["PUT"]
    pattern: '/cat_estados_cultivo/:id'
    types: {
      body: {}
      paramsTuple: [ParamValue]
      params: { id: ParamValue }
      query: {}
      response: ExtractResponse<Awaited<ReturnType<import('#controllers/cat_estados_cultivos_controller').default['update']>>>
      errorResponse: ExtractErrorResponse<Awaited<ReturnType<import('#controllers/cat_estados_cultivos_controller').default['update']>>>
    }
  }
  'cat_estados_cultivo.destroy': {
    methods: ["DELETE"]
    pattern: '/cat_estados_cultivo/:id'
    types: {
      body: {}
      paramsTuple: [ParamValue]
      params: { id: ParamValue }
      query: {}
      response: ExtractResponse<Awaited<ReturnType<import('#controllers/cat_estados_cultivos_controller').default['destroy']>>>
      errorResponse: ExtractErrorResponse<Awaited<ReturnType<import('#controllers/cat_estados_cultivos_controller').default['destroy']>>>
    }
  }
  'cat_estados_analisis.index': {
    methods: ["GET","HEAD"]
    pattern: '/cat_estados_analisis'
    types: {
      body: {}
      paramsTuple: []
      params: {}
      query: {}
      response: ExtractResponse<Awaited<ReturnType<import('#controllers/cat_estados_analises_controller').default['index']>>>
      errorResponse: ExtractErrorResponse<Awaited<ReturnType<import('#controllers/cat_estados_analises_controller').default['index']>>>
    }
  }
  'cat_estados_analisis.store': {
    methods: ["POST"]
    pattern: '/cat_estados_analisis'
    types: {
      body: {}
      paramsTuple: []
      params: {}
      query: {}
      response: ExtractResponse<Awaited<ReturnType<import('#controllers/cat_estados_analises_controller').default['store']>>>
      errorResponse: ExtractErrorResponse<Awaited<ReturnType<import('#controllers/cat_estados_analises_controller').default['store']>>>
    }
  }
  'cat_estados_analisis.show': {
    methods: ["GET","HEAD"]
    pattern: '/cat_estados_analisis/:id'
    types: {
      body: {}
      paramsTuple: [ParamValue]
      params: { id: ParamValue }
      query: {}
      response: ExtractResponse<Awaited<ReturnType<import('#controllers/cat_estados_analises_controller').default['show']>>>
      errorResponse: ExtractErrorResponse<Awaited<ReturnType<import('#controllers/cat_estados_analises_controller').default['show']>>>
    }
  }
  'cat_estados_analisis.update': {
    methods: ["PUT"]
    pattern: '/cat_estados_analisis/:id'
    types: {
      body: {}
      paramsTuple: [ParamValue]
      params: { id: ParamValue }
      query: {}
      response: ExtractResponse<Awaited<ReturnType<import('#controllers/cat_estados_analises_controller').default['update']>>>
      errorResponse: ExtractErrorResponse<Awaited<ReturnType<import('#controllers/cat_estados_analises_controller').default['update']>>>
    }
  }
  'cat_estados_analisis.destroy': {
    methods: ["DELETE"]
    pattern: '/cat_estados_analisis/:id'
    types: {
      body: {}
      paramsTuple: [ParamValue]
      params: { id: ParamValue }
      query: {}
      response: ExtractResponse<Awaited<ReturnType<import('#controllers/cat_estados_analises_controller').default['destroy']>>>
      errorResponse: ExtractErrorResponse<Awaited<ReturnType<import('#controllers/cat_estados_analises_controller').default['destroy']>>>
    }
  }
  'cat_tipos_recomendacion.index': {
    methods: ["GET","HEAD"]
    pattern: '/cat_tipos_recomendacion'
    types: {
      body: {}
      paramsTuple: []
      params: {}
      query: {}
      response: ExtractResponse<Awaited<ReturnType<import('#controllers/cat_tipos_recomendacions_controller').default['index']>>>
      errorResponse: ExtractErrorResponse<Awaited<ReturnType<import('#controllers/cat_tipos_recomendacions_controller').default['index']>>>
    }
  }
  'cat_tipos_recomendacion.store': {
    methods: ["POST"]
    pattern: '/cat_tipos_recomendacion'
    types: {
      body: {}
      paramsTuple: []
      params: {}
      query: {}
      response: ExtractResponse<Awaited<ReturnType<import('#controllers/cat_tipos_recomendacions_controller').default['store']>>>
      errorResponse: ExtractErrorResponse<Awaited<ReturnType<import('#controllers/cat_tipos_recomendacions_controller').default['store']>>>
    }
  }
  'cat_tipos_recomendacion.show': {
    methods: ["GET","HEAD"]
    pattern: '/cat_tipos_recomendacion/:id'
    types: {
      body: {}
      paramsTuple: [ParamValue]
      params: { id: ParamValue }
      query: {}
      response: ExtractResponse<Awaited<ReturnType<import('#controllers/cat_tipos_recomendacions_controller').default['show']>>>
      errorResponse: ExtractErrorResponse<Awaited<ReturnType<import('#controllers/cat_tipos_recomendacions_controller').default['show']>>>
    }
  }
  'cat_tipos_recomendacion.update': {
    methods: ["PUT"]
    pattern: '/cat_tipos_recomendacion/:id'
    types: {
      body: {}
      paramsTuple: [ParamValue]
      params: { id: ParamValue }
      query: {}
      response: ExtractResponse<Awaited<ReturnType<import('#controllers/cat_tipos_recomendacions_controller').default['update']>>>
      errorResponse: ExtractErrorResponse<Awaited<ReturnType<import('#controllers/cat_tipos_recomendacions_controller').default['update']>>>
    }
  }
  'cat_tipos_recomendacion.destroy': {
    methods: ["DELETE"]
    pattern: '/cat_tipos_recomendacion/:id'
    types: {
      body: {}
      paramsTuple: [ParamValue]
      params: { id: ParamValue }
      query: {}
      response: ExtractResponse<Awaited<ReturnType<import('#controllers/cat_tipos_recomendacions_controller').default['destroy']>>>
      errorResponse: ExtractErrorResponse<Awaited<ReturnType<import('#controllers/cat_tipos_recomendacions_controller').default['destroy']>>>
    }
  }
  'cat_prioridades.index': {
    methods: ["GET","HEAD"]
    pattern: '/cat_prioridades'
    types: {
      body: {}
      paramsTuple: []
      params: {}
      query: {}
      response: ExtractResponse<Awaited<ReturnType<import('#controllers/cat_prioridades_controller').default['index']>>>
      errorResponse: ExtractErrorResponse<Awaited<ReturnType<import('#controllers/cat_prioridades_controller').default['index']>>>
    }
  }
  'cat_prioridades.store': {
    methods: ["POST"]
    pattern: '/cat_prioridades'
    types: {
      body: {}
      paramsTuple: []
      params: {}
      query: {}
      response: ExtractResponse<Awaited<ReturnType<import('#controllers/cat_prioridades_controller').default['store']>>>
      errorResponse: ExtractErrorResponse<Awaited<ReturnType<import('#controllers/cat_prioridades_controller').default['store']>>>
    }
  }
  'cat_prioridades.show': {
    methods: ["GET","HEAD"]
    pattern: '/cat_prioridades/:id'
    types: {
      body: {}
      paramsTuple: [ParamValue]
      params: { id: ParamValue }
      query: {}
      response: ExtractResponse<Awaited<ReturnType<import('#controllers/cat_prioridades_controller').default['show']>>>
      errorResponse: ExtractErrorResponse<Awaited<ReturnType<import('#controllers/cat_prioridades_controller').default['show']>>>
    }
  }
  'cat_prioridades.update': {
    methods: ["PUT"]
    pattern: '/cat_prioridades/:id'
    types: {
      body: {}
      paramsTuple: [ParamValue]
      params: { id: ParamValue }
      query: {}
      response: ExtractResponse<Awaited<ReturnType<import('#controllers/cat_prioridades_controller').default['update']>>>
      errorResponse: ExtractErrorResponse<Awaited<ReturnType<import('#controllers/cat_prioridades_controller').default['update']>>>
    }
  }
  'cat_prioridades.destroy': {
    methods: ["DELETE"]
    pattern: '/cat_prioridades/:id'
    types: {
      body: {}
      paramsTuple: [ParamValue]
      params: { id: ParamValue }
      query: {}
      response: ExtractResponse<Awaited<ReturnType<import('#controllers/cat_prioridades_controller').default['destroy']>>>
      errorResponse: ExtractErrorResponse<Awaited<ReturnType<import('#controllers/cat_prioridades_controller').default['destroy']>>>
    }
  }
  'admin.index': {
    methods: ["GET","HEAD"]
    pattern: '/admin'
    types: {
      body: {}
      paramsTuple: []
      params: {}
      query: {}
      response: unknown
      errorResponse: unknown
    }
  }
  'admin.create': {
    methods: ["GET","HEAD"]
    pattern: '/admin/create'
    types: {
      body: {}
      paramsTuple: []
      params: {}
      query: {}
      response: unknown
      errorResponse: unknown
    }
  }
  'admin.store': {
    methods: ["POST"]
    pattern: '/admin'
    types: {
      body: {}
      paramsTuple: []
      params: {}
      query: {}
      response: unknown
      errorResponse: unknown
    }
  }
  'admin.show': {
    methods: ["GET","HEAD"]
    pattern: '/admin/:id'
    types: {
      body: {}
      paramsTuple: [ParamValue]
      params: { id: ParamValue }
      query: {}
      response: unknown
      errorResponse: unknown
    }
  }
  'admin.edit': {
    methods: ["GET","HEAD"]
    pattern: '/admin/:id/edit'
    types: {
      body: {}
      paramsTuple: [ParamValue]
      params: { id: ParamValue }
      query: {}
      response: unknown
      errorResponse: unknown
    }
  }
  'admin.update': {
    methods: ["PUT","PATCH"]
    pattern: '/admin/:id'
    types: {
      body: {}
      paramsTuple: [ParamValue]
      params: { id: ParamValue }
      query: {}
      response: unknown
      errorResponse: unknown
    }
  }
  'admin.destroy': {
    methods: ["DELETE"]
    pattern: '/admin/:id'
    types: {
      body: {}
      paramsTuple: [ParamValue]
      params: { id: ParamValue }
      query: {}
      response: unknown
      errorResponse: unknown
    }
  }
  'cafeteros.index': {
    methods: ["GET","HEAD"]
    pattern: '/cafeteros'
    types: {
      body: {}
      paramsTuple: []
      params: {}
      query: {}
      response: unknown
      errorResponse: unknown
    }
  }
  'cafeteros.create': {
    methods: ["GET","HEAD"]
    pattern: '/cafeteros/create'
    types: {
      body: {}
      paramsTuple: []
      params: {}
      query: {}
      response: unknown
      errorResponse: unknown
    }
  }
  'cafeteros.store': {
    methods: ["POST"]
    pattern: '/cafeteros'
    types: {
      body: {}
      paramsTuple: []
      params: {}
      query: {}
      response: unknown
      errorResponse: unknown
    }
  }
  'cafeteros.show': {
    methods: ["GET","HEAD"]
    pattern: '/cafeteros/:id'
    types: {
      body: {}
      paramsTuple: [ParamValue]
      params: { id: ParamValue }
      query: {}
      response: unknown
      errorResponse: unknown
    }
  }
  'cafeteros.edit': {
    methods: ["GET","HEAD"]
    pattern: '/cafeteros/:id/edit'
    types: {
      body: {}
      paramsTuple: [ParamValue]
      params: { id: ParamValue }
      query: {}
      response: unknown
      errorResponse: unknown
    }
  }
  'cafeteros.update': {
    methods: ["PUT","PATCH"]
    pattern: '/cafeteros/:id'
    types: {
      body: {}
      paramsTuple: [ParamValue]
      params: { id: ParamValue }
      query: {}
      response: unknown
      errorResponse: unknown
    }
  }
  'cafeteros.destroy': {
    methods: ["DELETE"]
    pattern: '/cafeteros/:id'
    types: {
      body: {}
      paramsTuple: [ParamValue]
      params: { id: ParamValue }
      query: {}
      response: unknown
      errorResponse: unknown
    }
  }
  'expertos.index': {
    methods: ["GET","HEAD"]
    pattern: '/expertos'
    types: {
      body: {}
      paramsTuple: []
      params: {}
      query: {}
      response: unknown
      errorResponse: unknown
    }
  }
  'expertos.create': {
    methods: ["GET","HEAD"]
    pattern: '/expertos/create'
    types: {
      body: {}
      paramsTuple: []
      params: {}
      query: {}
      response: unknown
      errorResponse: unknown
    }
  }
  'expertos.store': {
    methods: ["POST"]
    pattern: '/expertos'
    types: {
      body: {}
      paramsTuple: []
      params: {}
      query: {}
      response: unknown
      errorResponse: unknown
    }
  }
  'expertos.show': {
    methods: ["GET","HEAD"]
    pattern: '/expertos/:id'
    types: {
      body: {}
      paramsTuple: [ParamValue]
      params: { id: ParamValue }
      query: {}
      response: unknown
      errorResponse: unknown
    }
  }
  'expertos.edit': {
    methods: ["GET","HEAD"]
    pattern: '/expertos/:id/edit'
    types: {
      body: {}
      paramsTuple: [ParamValue]
      params: { id: ParamValue }
      query: {}
      response: unknown
      errorResponse: unknown
    }
  }
  'expertos.update': {
    methods: ["PUT","PATCH"]
    pattern: '/expertos/:id'
    types: {
      body: {}
      paramsTuple: [ParamValue]
      params: { id: ParamValue }
      query: {}
      response: unknown
      errorResponse: unknown
    }
  }
  'expertos.destroy': {
    methods: ["DELETE"]
    pattern: '/expertos/:id'
    types: {
      body: {}
      paramsTuple: [ParamValue]
      params: { id: ParamValue }
      query: {}
      response: unknown
      errorResponse: unknown
    }
  }
  'roles.index': {
    methods: ["GET","HEAD"]
    pattern: '/roles'
    types: {
      body: {}
      paramsTuple: []
      params: {}
      query: {}
      response: unknown
      errorResponse: unknown
    }
  }
  'roles.create': {
    methods: ["GET","HEAD"]
    pattern: '/roles/create'
    types: {
      body: {}
      paramsTuple: []
      params: {}
      query: {}
      response: unknown
      errorResponse: unknown
    }
  }
  'roles.store': {
    methods: ["POST"]
    pattern: '/roles'
    types: {
      body: {}
      paramsTuple: []
      params: {}
      query: {}
      response: unknown
      errorResponse: unknown
    }
  }
  'roles.show': {
    methods: ["GET","HEAD"]
    pattern: '/roles/:id'
    types: {
      body: {}
      paramsTuple: [ParamValue]
      params: { id: ParamValue }
      query: {}
      response: unknown
      errorResponse: unknown
    }
  }
  'roles.edit': {
    methods: ["GET","HEAD"]
    pattern: '/roles/:id/edit'
    types: {
      body: {}
      paramsTuple: [ParamValue]
      params: { id: ParamValue }
      query: {}
      response: unknown
      errorResponse: unknown
    }
  }
  'roles.update': {
    methods: ["PUT","PATCH"]
    pattern: '/roles/:id'
    types: {
      body: {}
      paramsTuple: [ParamValue]
      params: { id: ParamValue }
      query: {}
      response: unknown
      errorResponse: unknown
    }
  }
  'roles.destroy': {
    methods: ["DELETE"]
    pattern: '/roles/:id'
    types: {
      body: {}
      paramsTuple: [ParamValue]
      params: { id: ParamValue }
      query: {}
      response: unknown
      errorResponse: unknown
    }
  }
  'categorias.index': {
    methods: ["GET","HEAD"]
    pattern: '/categorias'
    types: {
      body: {}
      paramsTuple: []
      params: {}
      query: {}
      response: unknown
      errorResponse: unknown
    }
  }
  'categorias.create': {
    methods: ["GET","HEAD"]
    pattern: '/categorias/create'
    types: {
      body: {}
      paramsTuple: []
      params: {}
      query: {}
      response: unknown
      errorResponse: unknown
    }
  }
  'categorias.store': {
    methods: ["POST"]
    pattern: '/categorias'
    types: {
      body: {}
      paramsTuple: []
      params: {}
      query: {}
      response: unknown
      errorResponse: unknown
    }
  }
  'categorias.show': {
    methods: ["GET","HEAD"]
    pattern: '/categorias/:id'
    types: {
      body: {}
      paramsTuple: [ParamValue]
      params: { id: ParamValue }
      query: {}
      response: unknown
      errorResponse: unknown
    }
  }
  'categorias.edit': {
    methods: ["GET","HEAD"]
    pattern: '/categorias/:id/edit'
    types: {
      body: {}
      paramsTuple: [ParamValue]
      params: { id: ParamValue }
      query: {}
      response: unknown
      errorResponse: unknown
    }
  }
  'categorias.update': {
    methods: ["PUT","PATCH"]
    pattern: '/categorias/:id'
    types: {
      body: {}
      paramsTuple: [ParamValue]
      params: { id: ParamValue }
      query: {}
      response: unknown
      errorResponse: unknown
    }
  }
  'categorias.destroy': {
    methods: ["DELETE"]
    pattern: '/categorias/:id'
    types: {
      body: {}
      paramsTuple: [ParamValue]
      params: { id: ParamValue }
      query: {}
      response: unknown
      errorResponse: unknown
    }
  }
}
