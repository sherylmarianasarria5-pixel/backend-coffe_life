import type { HttpContext } from '@adonisjs/core/http'
import Usuario from '#models/usuario'

export default class CafeteroController {

async index({response}:HttpContext){

const usuarios=await Usuario.query()
.whereHas('rol',(query)=>{
query.where('nombre','cafetero')
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
idRol:2
})

return response.created({
message:'Cafetero creado correctamente',
data:usuario
})

}

async show({params,response}:HttpContext){

const usuario=await Usuario.query()
.where('id',params.id)
.whereHas('rol',(q)=>{
q.where('nombre','cafetero')
})
.preload('rol')
.firstOrFail()

return response.ok(usuario)

}

async update({params,request,response}:HttpContext){

const usuario=await Usuario.findOrFail(params.id)

usuario.merge(
request.only([
'nombre',
'apellido',
'correo',
'telefono',
'passwordHash',
'observaciones',
'activo'
])
)

await usuario.save()

return response.ok(usuario)

}

async destroy({params,response}:HttpContext){

const usuario=await Usuario.findOrFail(params.id)

await usuario.delete()

return response.ok({
message:'Cafetero eliminado'
})

}

}