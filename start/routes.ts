import router from '@adonisjs/core/services/router'

// Rutas existentes
import '#start/routes/cat_roles'
import '#start/routes/usuarios'
import '#start/routes/cat_tipos_tratamiento'
import '#start/routes/cat_niveles_roya'
import '#start/routes/cat_estados_cultivo'
import '#start/routes/cat_estados_analisis'
import '#start/routes/cat_tipos_recomendacion'
import '#start/routes/cat_prioridades'

// Lazy imports de controladores
const AdminController = () => import('#controllers/admin_controller')
const ExpertosController = () => import('#controllers/expertos_controller')
const CafeterosController = () => import('#controllers/cafeteros_controller')
const CategoriasController = () => import('#controllers/categorias_controller')
const RolesController = () => import('#controllers/roles_controller')

// Rutas resource
router.resource('admin', AdminController)
router.resource('expertos', ExpertosController)
router.resource('cafeteros', CafeterosController)
router.resource('categorias', CategoriasController)
router.resource('roles', RolesController)
