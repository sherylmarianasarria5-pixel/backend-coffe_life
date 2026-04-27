import router from '@adonisjs/core/services/router'

// Importar rutas por módulo
import '#start/routes/cat_roles'
import '#start/routes/usuarios'
import '#start/routes/cat_tipos_tratamiento'
import '#start/routes/cat_niveles_roya'
import '#start/routes/cat_estados_cultivo'
import '#start/routes/cat_estados_analisis'
import '#start/routes/cat_tipos_recomendacion'
import '#start/routes/cat_prioridades'


router.resource('admin','#controllers/admin_controller')

router.resource('cafeteros','#controllers/cafetero_controller')

router.resource('expertos','#controllers/experto_controller')

router.resource('roles','#controllers/roles_controller')

router.resource('categorias','#controllers/categorias_controller')