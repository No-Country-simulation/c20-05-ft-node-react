import { UserCuidador } from '../persistencia/models/userCuidador.js'
import { UserCliente } from '../persistencia/models/userCliente.js'

export const getCarers = async (req, res) => {
	try {
		const { city, preferencePet, services } = req.query

		const filters = {}

		if (city) filters.city = city
		if (preferencePet) filters.preferencePet = preferencePet
		if (services) filters.services = { $regex: services, $options: 'i' }

		const carers = await UserCuidador.find(filters)

		res.status(200).json(carers)
	} catch (error) {
		res.status(500).json({ error: 'Error fetching carers' })
	}
}

export const getCarerProfile = async (req, res) => {
	try {
		const { cip } = req.params
		const carer = await UserCuidador.findById(cip).populate('reviews')

		if (!carer) {
			return res.status(404).json({ error: 'Carer not found' })
		}

		res.status(200).json(carer)
	} catch (error) {
		res.status(500).json({ error: 'Error fetching carer profile' })
	}
}

export const requestService = async (req, res) => {
	try {
		const { carerId, ownerId, serviceDetails } = req.body

		const carer = await UserCuidador.findById(carerId)
		const owner = await UserModel.findById(ownerId)

		if (!carer || !owner) {
			return res.status(404).json({ error: 'Carer or owner not found' })
		}

		// Aquí puedes agregar lógica para enviar una notificación o correo electrónico, registrar la solicitud, etc.
		res.status(200).json({ message: 'Service request sent successfully' })
	} catch (error) {
		res.status(500).json({ error: 'Error requesting service' })
	}
}
