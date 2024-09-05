export const caretakerProfileMock = {
  first_Name: "Maria",
  last_Name: "Pérez",
  location: {
    city: "Madrid",
    country: "España",
  },
  reviews: [
    {
      rating: 4.5,
      comment: "Gran cuidador, muy atento y cariñoso con los perros.",
      reviewer: "María López",
      date: "2024-08-25",
    },
    {
      rating: 5.0,
      comment: "Mi perro disfrutó mucho, lo recomiendo al 100%.",
      reviewer: "Carlos García",
      date: "2024-07-15",
    },
    {
      rating: 4.5,
      comment: "Gran cuidador, muy atento y cariñoso con los perros.",
      reviewer: "María López",
      date: "2024-08-25",
    },
    {
      rating: 5.0,
      comment: "Mi perro disfrutó mucho, lo recomiendo al 100%.",
      reviewer: "Carlos García",
      date: "2024-07-15",
    },
  ],
  serviceType: [
    {
      careType: "Cuidado en casa",
      price: 25,
      priceAdditionalHour: 5,
      petAdditional: 10,
    },
    {
      careType: "Paseo diario de perros",
      price: 15,
      priceAdditionalHour: 3,
      petAdditional: 5,
    },
    {
      careType: "Cuidado nocturno",
      price: 40,
      priceAdditionalHour: 8,
      petAdditional: 15,
    },
    {
      careType: "Cuidado a domicilio",
      price: 30,
      priceAdditionalHour: 6,
      petAdditional: 12,
    },
    {
      careType: "Cuidado nocturno",
      price: 40,
      priceAdditionalHour: 8,
      petAdditional: 15,
    },
    {
      careType: "Cuidado a domicilio",
      price: 30,
      priceAdditionalHour: 6,
      petAdditional: 12,
    },
  ],

  photos: {
    profilePhoto:
      "https://www.veterinariadelbosque.com/images/articulos/g-el-propietario-y-sus-perros.jpg",
    photosViews: [
      "https://nucan.com.mx/blog/wp-content/uploads/2022/09/family-on-vacation-in-the-forest-2021-12-15-19-43-48-utc-min.jpg",
      "https://img2.rtve.es/i/?w=1600&i=1661191939693.jpg",
      "https://images.ecestaticos.com/kkgGAhivplfmV5o5JzGK2icyqwc=/53x0:3182x2181/992x700/filters:fill(white):format(jpg)/f.elconfidencial.com%2Foriginal%2Fd32%2Fb78%2F344%2Fd32b783440b33c37ded932ff81a105db.jpg",
    ],
  },

  description:
    "Hola, soy Maria, una cuidadora con una gran pasión por los animales, especialmente por perros y gatos. Desde temprana edad he sentido una conexión especial con las mascotas, lo que me ha llevado a dedicarme a su cuidado profesionalmente. A lo largo de los años, he adquirido experiencia cuidando todo tipo de mascotas, desde las más activas y juguetonas hasta las más tranquilas y relajadas. Entiendo que cada mascota es única y requiere un enfoque personalizado, por lo que siempre me adapto a las necesidades y preferencias específicas de cada dueño. Además de los cuidados básicos como la alimentación y el paseo, también ofrezco servicios adicionales como atención durante vacaciones, cuidados nocturnos y sesiones de juego.",

  preferensPets: [
    {
      pet: "Gato",
      weigth: [5, 10], // Peso en kg
      gender: ["Macho"],
    },
    {
      pet: "Perro",
      weigth: [10, 20],
      gender: ["Hembra", "Macho"],
    },
  ],

  petsCuidador: [
    { pet: "Perro", gender: "macho" },
    { pet: "Perro", gender: "hembra" },
    { pet: "Gato", gender: "macho" },
    { pet: "Gato", gender: "hembra" },
  ],

  personasQueVivenConCuidador: [
    {
      nombre: "Juan",
      age: 30,
    },
    {
      nombre: "Ana",
      age: 25,
    },
  ],

  skillCuidadorAdicionales: [
    {
      descriptionSkill: "Adiestramiento básico de mascotas",
    },
    {
      descriptionSkill: "Aplicación de vacunas bajo supervisión veterinaria",
    },
    {
      descriptionSkill: "Flexible a solicitudes especiales de cuidado",
    },
  ],

  hogarCuidadorInformacion: [
    {
      caracteristicaHome: "Aire Acondicionado",
      existe: true,
    },
    {
      caracteristicaHome: "Mascotas en Casa",
      existe: true,
    },
    {
      caracteristicaHome: "Vive en Casa Propia",
      existe: true,
    },
    {
      caracteristicaHome: "Niños presentes",
      existe: false,
    },
    {
      caracteristicaHome: "Espacio libre Patio",
      existe: true,
    },
  ],

  coordinates: "40.416775,-3.703790", // Coordenadas de Madrid, España primer valor latitud y segundo longitud , pedir al backend este formato de respuesta , y en el formulario cuando se setea enviar al backend en ese mismo formato 

  fechasOcupadasDelCuidador: [
    {
      date: "2024-09-01",
    },
    {
      date: "2024-09-15",
    },
  ],
};
