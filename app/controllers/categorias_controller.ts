import type { HttpContext } from '@adonisjs/core/http'
import Usuario from '#models/usuario'

export default class CategoriasController {

async index({response}:HttpContext){

const usuarios=await Usuario.query()
.preload('categoria')

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
idCategoria:1
})

return response.created({
message:'Categoría asignada correctamente',
data:usuario
})

}

async show({params,response}:HttpContext){

const usuario=await Usuario.findOrFail(params.id)

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
message:'Registro eliminado'
})

}

}