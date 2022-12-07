//  App dogs Images
import app_dogs_1 from "../Image/App_dogs_images/app_dogs1.webp";
import app_dogs_2 from "../Image/App_dogs_images/app_dogs2.webp";
import app_dogs_3 from "../Image/App_dogs_images/app_dogs3.webp";
import app_dogs_4 from "../Image/App_dogs_images/app_dogs4.webp";
import app_dogs_5 from "../Image/App_dogs_images/app_dogs5.webp";
import app_dogs_6 from "../Image/App_dogs_images/app_dogs6.webp";
import app_dogs_video from "../Image/App_dogs_images/app_dogs_video.mp4";

// App Synnet  Images
import synnet_image1 from "../Image/Synnet_app_images/synnet_image1.png";
import synnet_image2 from "../Image/Synnet_app_images/synnet_image2.png";
import synnet_image3 from "../Image/Synnet_app_images/synnet_image3.png";
import synnet_image4 from "../Image/Synnet_app_images/synnet_image4.png";
import synnet_image5 from "../Image/Synnet_app_images/synnet_image5.png";
import synnet_image6 from "../Image/Synnet_app_images/synnet_image6.png";
import synnet_video from "../Image/Synnet_app_images/synnet_video.mp4";

// App Weather Images
import weather_app_img1 from "../Image/Weather_app_images/weather_app_img1.webp";
import weather_app_img2 from "../Image/Weather_app_images/weather_app_img2.webp";
import weather_app_img3 from "../Image/Weather_app_images/weather_app_img3.webp";
import weather_app_img4 from "../Image/Weather_app_images/weather_app_img4.webp";
import weather_app_img5 from "../Image/Weather_app_images/weather_app_img5.webp";
import weather_app_img6 from "../Image/Weather_app_images/weather_app_img6.webp";
import weather_app_video from "../Image/Weather_app_images/weather_app_video.mp4";

// Portfolio Images

import portfolio1 from "../Image/Portfolio_images/portfolio1.png";
import portfolio2 from "../Image/Portfolio_images/portfolio2.png";
import portfolio3 from "../Image/Portfolio_images/portfolio3.png";
import portfolio4 from "../Image/Portfolio_images/portfolio4.png";
import portfolio5 from "../Image/Portfolio_images/portfolio5.png";
import portfolio6 from "../Image/Portfolio_images/portfolio6.png";
import portfolio_video from "../Image/Portfolio_images/portfolio_video.mp4";

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
import Twitter from "../Image/Icons/Twitter.svg";
import Whatsapp from "../Image/Icons/whatsapp.png";

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

// Array Portfolio Images
const Portfolio_Images = [
  portfolio1,
  portfolio2,
  portfolio3,
  portfolio4,
  portfolio5,
  portfolio6,
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
    "ReactJS",
    "ReduxJS",
    "Javascript",
    "NodeJS",
    "ExpressJS",
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
    "ReactJS",
    "ReduxJS",
    "Javascript",
    "NodeJS",
    "ExpressJS",
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
    "Una aplicación para ver el clima de diferentes paices y ciudades",
    "Cuenta con sección de Favoritos, detalle de la ciudad y Buscador para encontrar ciudades por nombre",
    "Creada con estilos suabes y transparencias para una experiencia comoda de los usuarios",
  ],

  english_description: [
    "An application to see the weather of different countries and cities",
    "It has a Favorites section, details of the city and a Search Engine to find cities by name",
    "Created with smooth and transparent styles for a user-friendly experience",
  ],

  Tecnologies: ["ReactTS", "TypeScript", "HTML", "CSS"],
};

// Description Portfolio
const Porfolio_Description = {
  title: "Portfolio",
  spanish_description: [
    "En mi Portfolio podras encontrar todos mis proyectos, mis estudios y las tecnologías con las que trabajo ",
    "Podes elegir tu color de tema preferido ademas de elegir entre el modo dia o noche",
    "Tambien podras encontrar mis redes de comunicación como LinkedIn, GitHub entre otros",
    "Ademas tendras la posibilidad de enviar me un mensaje por Email asiendo uso de un sencillo formulario",
  ],

  english_description: [
    "In my Portfolio you can find all my projects, my studies and the technologies I work with",
    "You can choose your preferred theme color in addition to choosing between day or night mode",
    "You can also find my communication networks such as LinkedIn, GitHub among others",
    "You will also have the possibility to send me a message by Email using a simple form",
  ],

  Tecnologies: [
    "JavaScrip",
    "ReactJS",
    "HTML",
    "CSS",
    "Sass",
    "React-Lazy-Loading",
  ],
};

// Object With English and Spanish Information
const About_Me = {
  contact_message_spanish: [
    "¿Hola como estas?  👋",
    "si estas interesado en mi Perfil",
    "puedes contactarme atravez de mis diferentes redes de contacto como linkedIn, whatsApp entre otros ",
    "o tambien puedes enviarme un Email llenando el formulario que puedes encontrar un poco mas abajo ",
    "Estaria feliz de charlar con tigo 😉",
  ],

  contact_message_english: [
    "Hello how are you? 👋",
    "If you're interested in my Profile",
    "You can contact me through my different contact networks such as LinkedIn, WhatsApp, among others",
    "Or you can also send me an email by filling out the form that you can find a little below",
    "I would be happy to chat with you 😉",
  ],

  description_spanish: [
    "Hola! 👋",
    "Soy Desarrollador Web Full-Stack, terminé el Bootcamp de henry hace unos meses y me enamoré de la programación y el mundo de TI en general",
    "Me gusta asumir nuevos retos y esforzarme más allá de lo que creo que puedo hacer, aprendiendo cosas nuevas y tratando de ser mejor y mejorando mis conocimientos cada día.",
    "Busco un lugar donde pueda aportar con mis habilidades resolviendo problemas y además seguir aprendiendo de mis compañeros de trabajo",
  ],

  description_english: [
    "Hi! 👋",
    "I'm a Full-Stack Web Developer, I finished henry's Bootcamp a few months ago and fell in love with programming and the IT world in general",
    "I like to take on new challenges and push myself beyond what I think I can do, learning new things and trying to be better and improving my knowledge every day ",
    "I'm looking for a place where I can contribute with  my abilities by solving problems and also keep learning from my coworkers",
  ],
};

export const App_dogs = {
  Images: App_dogs_Images,
  Video: app_dogs_video,
  Description: App_Dogs_Descriptions,
  GitHub: "https://github.com/DF27ARTS/Henry-PI-Dogs",
  Deploy: "https://henry-pi-dogs-d26rn64ql-df27arts.vercel.app/",
};

export const App_Synnet = {
  Images: App_Synnet_Images,
  Video: synnet_video,
  Description: Synnet_Descriptions,
  GitHub: "https://github.com/Nicrosi/Proyecto-Final",
  Deploy: "https://proyecto-final-rho-three.vercel.app/",
};

export const App_Weather = {
  Images: Weather_App_Images,
  Video: weather_app_video,
  Description: Weather_App_Descriptions,
  GitHub: "https://github.com/DF27ARTS/Weather_App",
  Deploy: "https://weather-app-dusky-phi.vercel.app/",
};

export const Portfolio = {
  Images: Portfolio_Images,
  Video: portfolio_video,
  Description: Porfolio_Description,
  GitHub: "https://github.com/DF27ARTS/Portfolio",
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
  Whatsapp,
  Phone,
  GitHub,
  CV_image_English,
  CV_image_Spanish,
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
