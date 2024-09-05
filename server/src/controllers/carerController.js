import { UserCuidador } from "../persistencia/models/userCuidador.js";
import { UserModel } from "../persistencia/models/userCliente.js";
import { ServiceRequest } from "../persistencia/models/servicesRequest.js";

export const getCarers = async (req, res) => {
	try {
		const { city, preferencePet, services } = req.query;

		// Construir los filtros de búsqueda

		const filters = {};

		if (city) {
			filters.city = city;
		}
		if (preferencePet) {
			filters.preferencePet = preferencePet;
		}
		if (services) {
			filters.typeService = {
				$in: services.split(",").map((service) => service.trim()),
			};
		}

		// Buscar cuidadores con los filtros aplicados
		const carers = await UserCuidador.find(filters)
			.populate("typeService", "nombre precio duracion") // Traer información de los servicios ofrecidos
			.select(
				"first_name last_name city profilePicture experience typeService availability",
			); // Solo los campos necesarios

		if (!carers.length) {
			return res
				.status(404)
				.json({ message: "No carers found matching the criteria" });
		}

		res.status(200).json(carers);
	} catch (error) {
		res.status(500).json({ error: "Error fetching carers" });
	}
};

export const getCarerProfile = async (req, res) => {
	try {
		const { cip } = req.params;

		// Buscar cuidador por ID (cip) y traer los servicios y reseñas asociadas
		const carer = await UserCuidador.findById(cip)
			.populate("typeService", "nombre precio duracion") // Detalles del servicio
			.populate("reviews", "rating comment createdAt"); // Traer las reseñas

		if (!carer) {
			return res.status(404).json({ error: "Carer not found" });
		}

		res.status(200).json(carer);
	} catch (error) {
		res.status(500).json({ error: "Error fetching carer profile" });
	}
};

export const requestService = async (req, res) => {
	try {
		const { carerId, ownerId, serviceType } = req.body;

		const carer = await UserCuidador.findById(carerId);
		const owner = await UserModel.findById(ownerId);

		if (!carer || !owner) {
			return res.status(404).json({ error: "Carer or owner not found" });
		}
		// Crear y guardar la solicitud de servicio
		const newRequest = new ServiceRequest({
			carer: carerId,
			owner: ownerId,
			serviceType,
		});

		await newRequest.save();

		// Enviar notificación por correo
		const emailSubject = `Nueva solicitud de servicio de ${owner.first_name} ${owner.last_name}`;
		const emailBody = `Hola ${carer.first_name},\n\nHas recibido una nueva solicitud de servicio para ${serviceDetails}. Por favor, inicia sesión en la plataforma para más detalles.`;

		await sendEmail(carer.email, emailSubject, emailBody);

		res.status(200).json({ message: "Service request sent successfully" });
	} catch (error) {
		res.status(500).json({ error: "Error requesting service" });
	}
};
