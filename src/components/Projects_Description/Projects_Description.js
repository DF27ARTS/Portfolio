import app_dogs_1 from '../App_dogs_images/app_dogs1.png';
import app_dogs_2 from '../App_dogs_images/app_dogs2.png';
import app_dogs_3 from '../App_dogs_images/app_dogs3.png';
import app_dogs_4 from '../App_dogs_images/app_dogs4.png';
import app_dogs_5 from '../App_dogs_images/app_dogs5.png';

import synnet_image1 from '../Synnet_app_images/synnet_image1.png';
import synnet_image2 from '../Synnet_app_images/synnet_image2.png';
import synnet_image3 from '../Synnet_app_images/synnet_image3.png';
import synnet_image4 from '../Synnet_app_images/synnet_image4.png';
import synnet_image5 from '../Synnet_app_images/synnet_image5.png';

import weather_app_img1 from '../Weather_app_images/weather_app_img1.jpg';
import weather_app_img2 from '../Weather_app_images/weather_app_img2.jpg';
import weather_app_img3 from '../Weather_app_images/weather_app_img3.jpg';
import weather_app_img4 from '../Weather_app_images/weather_app_img4.jpg';
import weather_app_img5 from '../Weather_app_images/weather_app_img5.jpg';
import weather_app_img6 from '../Weather_app_images/weather_app_img6.jpg';


export const Array_App_dogs = [
  app_dogs_1,
  app_dogs_2,
  app_dogs_3,
  app_dogs_4,
  app_dogs_5,
]

export const Array_App_Synnet = [
  synnet_image1,
  synnet_image2,
  synnet_image3,
  synnet_image4,
  synnet_image5,
]

export const Array_Weather_App = [
  weather_app_img1,
  weather_app_img2,
  weather_app_img3,
  weather_app_img4,
  weather_app_img5,
  weather_app_img6,
]

export const Synnet_Descriptions = {
  title: "Synnet",
  description1_spanish: "Aplicación que te permite crear y participar en torneos de tenis .",
  description1_english: "Application that allows you to create and participate in tennis tournaments.",

  description2_spanish: "Contiene filtros que te permiten filtrar usuarios por nombre, genero y categoria,",
  description2_english: "Contains filters that allow you to filter users by name, gender and category,",

  description3_spanish: "Tambien contiene galeria donde podras ver las imagenes mas destacadas de los diferentes torneos",
  description3_english: "It also contains a gallery where you can see the most outstanding images of the different tournaments",

  description4_spanish: "Panel de administración para editar los usuarios, torneos entre otros, Dashboard para visualisar el estado de el torneo",
  description4_english: "Administration panel to edit users, tournaments among others, Dashboard to view the status of the tournament",

  description5_spanish: "Metodo de pago, login  y registro, sección de patrocinadores, ChatBot para los usuarios que los guiara en el proceso de resgitro y pago de subtorneos",
  description5_english: "Payment method, login and registration, sponsors section, ChatBot for users that will guide them in the process of registration and payment of subtournaments",

  Tecnologies: [
    "React.js", "Redux.js", "Javascript", "Node.js", "Express.js", "Sequelize", "PostgreSQL", 
    "React-Chatbot-kit", "HTML", "CSS", "Cloudinary", "Bootstrap", "react-stripe-checkout", 
    "react-toastify", "sweetalert2", "tournament-generator", "bcrypt", "passport-google-oauth20", "stripe"
  ]
}

export const App_Dogs_Descriptions = {
  title: "App Dogs",
  description1_spanish: "Aplicación donde podras ver diferentes tipos de perros.",
  description1_english: "Application where you can see different types of dogs.",

  description2_spanish: "Cuenta con filtros para filtrar por rázas y por temperamentos,",
  description2_english: "It has filters to filter by race and temperament,",

  description3_spanish: "Posibilidad de ordenar por nombre de forma ascendente y descendente y tambíen ordenar por peso,",
  description3_english: "Ability to sort by name ascending and descending and also order by weight,",

  description4_spanish: "Buscador para encontrar los perros por nombre,",
  description4_english: "Search engine to find dogs by name,",

  description5_spanish: "sección de favoritos y un formulario para que puedas crear tu propio perrito",
  description5_english: "favorites section and a form so you can create your own dog",

  Tecnologies: [
    "React.js", "Redux.js", "Javascript", "Node.js", "Express.js", "Sequelize", "PostgreSQL",
    "HTML", "CSS", "Cloudinary",
  ]
}

export const Weather_App_Descriptions = {
  title: "Weather App",
  description1_spanish: "Aplicación para ver el clima de diferentes ciudades",
  description1_english: "Application to see the weather of different cities",

  description2_spanish: "Cuenta con sección de Favoritos y detalle",
  description2_english: "It has a Favorites section and detail",

  description3_spanish: "Creada con el proposito de mejorar mis habilidades con React y TypeScript",
  description3_english: "Created with the purpose of improving my skills with React and TypeScript",

  Tecnologies: [
    "React.js", "TypeScript", "HTML", "CSS"
  ]
}

export const About_Me = {
  greeting_spanish: "Hola!",
  greeting_english: "Hi!",

  description1_spanish: "Soy un desarrollador Full stack, cuando decidí hacer el bootcamp de henery y termine la cursada me enamore de la programación. Me gustan los retos y aprender cosas nuevas por eso aver cursar henry fue una gran y maravillosa experiencia donde aprendí varias de las tecnologías mas usadas en el mundo tech",
  description1_english: "I am a full stack developer, when I decided to do henery's bootcamp and I finished the course I fell in love with programming. I like challenges and learn new things, that's why studying in Henry was a great and wonderful experience where I learned several of the most used technologies in the tech world.",

  description2_spanish: "Me gustaría tener la oportunidad de seguir aprendiendo nuevas tecnologías y seguir mejorando los conocimientos aprendidos en el Bootcamp.",
  description2_english: "I would like to have the opportunity to continue learning new technologies and continue improving the knowledge learned in the Bootcamp.",

  description3_spanish: "Soy una persona curiosa con ganas de aprende y seguir mejorando,me gusta el trabajo en equipo y espero encontrar un lugar donde pueda seguir desarrollando mis habilidades y donde pueda contribuir con mis conocimientos además de seguir creciendo como programador y también como persona",
  description3_english: "I am a curious person who wants to learn and keep improving.I like teamwork and I hope to find a place where I can continue developing my skills and where I can contribute with my knowledge as well as continue to grow as a programmer and also as a person."
}

export const Descriptions = {
  Array_App_dogs,
  Array_App_Synnet,
  Synnet_Descriptions,
  App_Dogs_Descriptions,
  About_Me,
}

