import { Router } from 'express'

const petRouter = Router()

petRouter.post('/pets') // Crea una nueva mascota asociada al usuario.

petRouter.get('/pets') // Obtiene todas las mascotas del usuario autenticado.

petRouter.get('/pets/:pid') // Obtiene los detalles de una mascota específica.

petRouter.put('/pets/:pid') // Actualiza los detalles de una mascota específica.

petRouter.delete('/pets/:pid') // Elimina una mascota específica.

export default petRouter
