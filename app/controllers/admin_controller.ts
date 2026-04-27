import type { HttpContext } from '@adonisjs/core/http'
import Usuario from '#models/usuario'

export default class AdminController {

async index({response}:HttpContext){

const usuarios=await Usuario.query()
.whereHas('rol',(query)=>{
query.where('nombre','admin')
})
.preload('rol')

return response.ok(usuarios)

}


async store({request,response}:HttpContext){

const data=request.only([
'nombre',
'apellido',
'correo',
'telefono',
'passwordHash',
'observaciones',
'activo'
])

const usuario=await Usuario.create({
...data,
idRol:1
})

return response.created({
message:'Administrador creado correctamente',
data:usuario
})

}


async show({params,response}:HttpContext){

const usuario=await Usuario.query()
.where('id',params.id)
.whereHas('rol',(query)=>{
query.where('nombre','admin')
})
.preload('rol')
.firstOrFail()

return response.ok(usuario)

}


async update({params,request,response}:HttpContext){

const usuario=await Usuario.findOrFail(params.id)

const data=request.only([
'nombre',
'apellido',
'correo',
'telefono',
'passwordHash',
'observaciones',
'activo'
])

usuario.merge(data)

await usuario.save()

return response.ok({
message:'Administrador actualizado correctamente',
data:usuario
})

}


async destroy({params,response}:HttpContext){

const usuario=await Usuario.findOrFail(params.id)

await usuario.delete()

return response.ok({
message:'Administrador eliminado correctamente'
})

}

}