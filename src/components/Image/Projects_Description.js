//  App dogs Images
import app_dogs_1 from "../Image/App_dogs_images/app_dogs1.webp";
import app_dogs_2 from "../Image/App_dogs_images/app_dogs2.webp";
import app_dogs_3 from "../Image/App_dogs_images/app_dogs3.webp";
import app_dogs_4 from "../Image/App_dogs_images/app_dogs4.webp";
import app_dogs_5 from "../Image/App_dogs_images/app_dogs5.webp";
import app_dogs_6 from "../Image/App_dogs_images/app_dogs6.webp";

// App Synnet  Images
import synnet_image1 from "../Image/Synnet_app_images/synnet_image1.png";
import synnet_image2 from "../Image/Synnet_app_images/synnet_image2.png";
import synnet_image3 from "../Image/Synnet_app_images/synnet_image3.png";
import synnet_image4 from "../Image/Synnet_app_images/synnet_image4.png";
import synnet_image5 from "../Image/Synnet_app_images/synnet_image5.png";
import synnet_image6 from "../Image/Synnet_app_images/synnet_image6.png";

// App Weather Images
import weather_app_img1 from "../Image/Weather_app_images/weather_app_img1.jpg";
import weather_app_img2 from "../Image/Weather_app_images/weather_app_img2.jpg";
import weather_app_img3 from "../Image/Weather_app_images/weather_app_img3.jpg";
import weather_app_img4 from "../Image/Weather_app_images/weather_app_img4.jpg";
import weather_app_img5 from "../Image/Weather_app_images/weather_app_img5.jpg";
import weather_app_img6 from "../Image/Weather_app_images/weather_app_img6.jpg";

// Technology icons
import ExpressJS from "../Image/Icons/ExpressJS.svg";
import Git from "../Image/Icons/Git.svg";
import GitHub from "../Image/Icons/GitHub.svg";
import JavaScript from "../Image/Icons/JavaScript.svg";
import NodeJS from "../Image/Icons/NodeJS.svg";
import PostgreSQL from "../Image/Icons/PostgreSQL.svg";
import ReactJS from "../Image/Icons/ReactJS.svg";
import ReduxJS from "../Image/Icons/ReduxJS.svg";
import Scrum from "../Image/Icons/Scrum.svg";
import TypeScript from "../Image/Icons/TypeScript.svg";
import CSS from "../Image/Icons/CSS.svg";
import HTML from "../Image/Icons/HTML.svg";
import Sequelize from "../Image/Icons/Sequelize.svg";
import Arrow_icon from "../Image/Icons/Arrow_icon.svg";

// Personal Information
import My_Picture from "../Image/Personal_Information/my_image.jpg";
import CV_SPANISH from "../Image/Personal_Information/CV_SPANISH.pdf";
import CV_ENGLISH from "../Image/Personal_Information/CV_ENGLISH.pdf";
import Email from "../Image/Personal_Information/Email.svg";
import LinkedIn from "../Image/Personal_Information/LinkedIn.svg";
import Location from "../Image/Personal_Information/Location.svg";
import Phone from "../Image/Personal_Information/Phone.svg";
import CV_image_English from "../Image/Personal_Information/CV_image_English.jpg";
import CV_image_Spanish from "../Image/Personal_Information/CV_image_Spanish.jpg";

// Array App Dogs Images
const App_dogs_Images = [
  app_dogs_1,
  app_dogs_2,
  app_dogs_3,
  app_dogs_4,
  app_dogs_5,
  app_dogs_6,
];

// Array App Synnet Images
const App_Synnet_Images = [
  synnet_image1,
  synnet_image2,
  synnet_image3,
  synnet_image4,
  synnet_image5,
  synnet_image6,
];

// Array App Weather Images
const Weather_App_Images = [
  weather_app_img1,
  weather_app_img2,
  weather_app_img3,
  weather_app_img4,
  weather_app_img5,
  weather_app_img6,
];

// Description App Synnet
const Synnet_Descriptions = {
  title: "Synnet",
  spanish_description: [
    "Aplicación que te permite crear y participar en torneos de tenis.",
    "Contiene filtros que te permiten filtrar usuarios por nombre, genero y categoria,",
    "Tambien contiene galeria donde podras ver las imagenes mas destacadas de los diferentes torneos",
    "Panel de administración para editar los usuarios, torneos entre otros, Dashboard para visualisar el estado de el torneo",
    "Metodo de pago, login  y registro, sección de patrocinadores, ChatBot para los usuarios que los guiara en el proceso de resgitro y pago de subtorneos",
  ],
  english_description: [
    "Application that allows you to create and participate in tennis tournaments.",
    "Contains filters that allow you to filter users by name, gender and category,",
    "It also contains a gallery where you can see the most outstanding images of the different tournaments",
    "Administration panel to edit users, tournaments among others, Dashboard to view the status of the tournament",
    "Payment method, login and registration, sponsors section, ChatBot for users that will guide them in the process of registration and payment of subtournaments",
  ],

  Tecnologies: [
    "React.js",
    "Redux.js",
    "Javascript",
    "Node.js",
    "Express.js",
    "Sequelize",
    "PostgreSQL",
    "React-Chatbot-kit",
    "HTML",
    "CSS",
    "Cloudinary",
    "Bootstrap",
    "react-stripe-checkout",
    "react-toastify",
    "sweetalert2",
    "tournament-generator",
    "bcrypt",
    "passport-google-oauth20",
    "stripe",
  ],
};

// Description App Dogs
const App_Dogs_Descriptions = {
  title: "App Dogs",
  spanish_description: [
    "Aplicación donde podras ver diferentes tipos de perros.",
    "Cuenta con filtros para filtrar por rázas y por temperamentos,",
    "Posibilidad de ordenar por nombre de forma ascendente y descendente y tambíen ordenar por peso,",
    "Buscador para encontrar los perros por nombre,",
    "sección de favoritos y un formulario para que puedas crear tu propio perrito",
  ],

  english_description: [
    "Application where you can see different types of dogs.",
    "Ability to sort by name ascending and descending and also order by weight,",
    "It has filters to filter by race and temperament,",
    "Search engine to find dogs by name,",
    "favorites section and a form so you can create your own dog",
  ],

  Tecnologies: [
    "React.js",
    "Redux.js",
    "Javascript",
    "Node.js",
    "Express.js",
    "Sequelize",
    "PostgreSQL",
    "HTML",
    "CSS",
    "Cloudinary",
  ],
};

// Description App Weather
const Weather_App_Descriptions = {
  title: "Weather App",
  spanish_description: [
    "Aplicación para ver el clima de diferentes ciudades",
    "Cuenta con sección de Favoritos y detalle",
    "Creada con el proposito de mejorar mis habilidades con React y TypeScript",
  ],

  english_description: [
    "Application to see the weather of different cities",
    "It has a Favorites section and detail",
    "Created with the purpose of improving my skills with React and TypeScript",
  ],

  Tecnologies: ["React.js", "TypeScript", "HTML", "CSS"],
};

// Object With English and Spanish Information
const About_Me = {
  description_spanish: [
    "Hola!",
    "Soy un desarrollador Full stack, cuando decidí hacer el bootcamp de henery y termine la cursada me enamore de la programación. Me gustan los retos y aprender cosas nuevas por eso aver cursar henry fue una gran y maravillosa experiencia donde aprendí varias de las tecnologías mas usadas en el mundo tech",
    "Me gustaría tener la oportunidad de seguir aprendiendo nuevas tecnologías y seguir mejorando los conocimientos aprendidos en el Bootcamp.",
    "Soy una persona curiosa con ganas de aprende y seguir mejorando,me gusta el trabajo en equipo y espero encontrar un lugar donde pueda seguir desarrollando mis habilidades y donde pueda contribuir con mis conocimientos además de seguir creciendo como programador y también como persona",
  ],

  description_english: [
    "Hi!",
    "I am a full stack developer, when I decided to do henery's bootcamp and I finished the course I fell in love with programming. I like challenges and learn new things, that's why studying in Henry was a great and wonderful experience where I learned several of the most used technologies in the tech world.",
    "I would like to have the opportunity to continue learning new technologies and continue improving the knowledge learned in the Bootcamp.",
    "I am a curious person who wants to learn and keep improving.I like teamwork and I hope to find a place where I can continue developing my skills and where I can contribute with my knowledge as well as continue to grow as a programmer and also as a person.",
  ],
};

export const App_dogs = {
  Images: App_dogs_Images,
  Description: App_Dogs_Descriptions,
  GitHub: "https://github.com/DF27ARTS/Henry-PI-Dogs",
  Deploy: "https://henry-pi-dogs-d26rn64ql-df27arts.vercel.app/",
};

export const App_Synnet = {
  Images: App_Synnet_Images,
  Description: Synnet_Descriptions,
  GitHub: "https://github.com/Nicrosi/Proyecto-Final",
  Deploy: "https://proyecto-final-rho-three.vercel.app/",
};

export const App_Weather = {
  Images: Weather_App_Images,
  Description: Weather_App_Descriptions,
  GitHub: "https://github.com/DF27ARTS/Weather_App",
  Deploy: "https://weather-app-dusky-phi.vercel.app/",
};

export const About = {
  About_Me: About_Me,
  Full_Name: "Diego Fernando Rojas Carrillo",
  Picture: My_Picture,
  CV_SPANISH: CV_SPANISH,
  CV_ENGLISH: CV_ENGLISH,
  Email,
  LinkedIn,
  Location,
  Phone,
  GitHub,
  CV_image_English,
  CV_image_Spanish,
  Arrow_icon,
};

export const Icons = [
  JavaScript,
  TypeScript,
  ReactJS,
  ReduxJS,
  CSS,
  HTML,
  ExpressJS,
  Git,
  GitHub,
  NodeJS,
  PostgreSQL,
  Scrum,
  Sequelize,
];