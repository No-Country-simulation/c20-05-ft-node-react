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
  ],
  serviceType: [
    {
      careType: "Cuidado en casa",
      price: 25,
      priceAdditionalHour: 5, // Precio adicional por hora
      petAdditional: 10, // Precio adicional por mascota adicional
    },
    {
      careType: "Paseo diario de perros",
      price: 15,
      priceAdditionalHour: 3, // Precio adicional por hora
      petAdditional: 5, // Precio adicional por mascota adicional
    },
    {
      careType: "Cuidado nocturno",
      price: 40,
      priceAdditionalHour: 8, // Precio adicional por hora
      petAdditional: 15, // Precio adicional por mascota adicional
    },
    {
      careType: "Cuidado a domicilio",
      price: 30,
      priceAdditionalHour: 6, // Precio adicional por hora
      petAdditional: 12, // Precio adicional por mascota adicional
    },
    {
      careType: "Cuidado durante vacaciones",
      price: 50,
      priceAdditionalHour: 10, // Precio adicional por hora
      petAdditional: 20, // Precio adicional por mascota adicional
    },
    {
      careType: "Cuidado en grupo",
      price: 20,
      priceAdditionalHour: 4, // Precio adicional por hora
      petAdditional: 8, // Precio adicional por mascota adicional
    },
    {
      careType: "Cuidado en grupo",
      price: 20,
      priceAdditionalHour: 4, // Precio adicional por hora
      petAdditional: 8, // Precio adicional por mascota adicional
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
  description: "holas soy maria",
  preferensPets: [
    {
      pet: "cat",
      weigth: [20, 15],
      gender: "Macho",
    },
    {
      pet: "dog",
      weigth: [20, 10],
      gender: "Hembra",
    },
  ],
  petsCuidador: [
    // si el cuidador no tiene mascotas , se manda un array vacio
    {
      pet: "cat",
      weigth: [20, 15],
      gender: "Macho",
    },
    {
      pet: "dog",
      weigth: [20, 10],
      gender: "Hembra",
    },
  ],
  personasQueVivenConCuidador: [
    {
      persona: "juanita",
      age: 18,
    },
    {
      persona: "juanita",
      age: 18,
    },
  ],
  skillCuidadorAdicionales: [
    {
      descriptionSkill: "algo relacionado con cuidar mascotas",
    },
    {
      descriptionSkill: "sabe Vacunar",
    },
    {
      descriptionSkill: "Se Adapta a solucitudes", //una opcion para ver si se adapta a solicitudes
    },
  ],
  hogarCuidadorInformacion: [
    {
      caracteristicaHome: "aireAcondicionado",
      existe: true,
    },
    {
      caracteristicaHome: "Casa Propia",
      existe: false,
    },
  ],
  ubication: "latitud y longitud",
  fechasOcupadasDelCuidador: [
    {
      date: new Date(),
    },
    {
      date: new Date(),
    },
  ],
};
