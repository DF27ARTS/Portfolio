import my_image from '../Portfolio_Images/my_image.jpg';
import GitHub from '../Portfolio_Images/GitHub.png';
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
import { MdArrowForwardIos } from 'react-icons/md';
import { MdArrowBackIosNew } from 'react-icons/md';
import { GoMarkGithub } from 'react-icons/go';
import { BsLinkedin } from 'react-icons/bs';
import { ImMail } from 'react-icons/im';
import { SiJavascript } from 'react-icons/si';
import { IoLogoNodejs } from 'react-icons/io';
import { GrReactjs } from 'react-icons/gr';
import './Portfolio.css'
import { useState } from 'react';
import { SiRedux } from 'react-icons/si';
import { ImHtmlFive } from 'react-icons/im';
import { IoLogoCss3 } from 'react-icons/io';
import { SiSequelize } from 'react-icons/si';
import { SiExpress } from 'react-icons/si';
import { SiPostgresql } from 'react-icons/si';
import { DiScrum } from 'react-icons/di';

const Portfolio = ({state, idiom}) => {

  
  const App_dogs = [
    app_dogs_1,
    app_dogs_2,
    app_dogs_3,
    app_dogs_4,
    app_dogs_5,
  ]
  const App_Synnet = [
    synnet_image1,
    synnet_image2,
    synnet_image3,
    synnet_image4,
    synnet_image5,
  ]
  const [AppDogsImage, setAppDogsImage ] = useState(app_dogs_1);
  const [AppSynnetImage, setAppSynnetImage ] = useState(synnet_image1);
  const [OpenGitAndDeployDogs, setOpenGitAndDeployDogs ] = useState(false);
  const [OpenGitAndDeploySynnet, setOpenGitAndDeploySynnet ] = useState(false);
  const [HitHub, setHitHub ] = useState(null);
  const [Deploy, setDeploy ] = useState(null);

  const HandleClickAppDogs = (value) => {
    if(value === 'ahead') {
      if(AppDogsImage === App_dogs[0]) setAppDogsImage(App_dogs[1])
      else if(AppDogsImage === App_dogs[1]) setAppDogsImage(App_dogs[2])
      else if(AppDogsImage === App_dogs[2]) setAppDogsImage(App_dogs[3])
      else if(AppDogsImage === App_dogs[3]) setAppDogsImage(App_dogs[4])
      else if(AppDogsImage === App_dogs[4]) setAppDogsImage(App_dogs[0])
    } else {
      if(AppDogsImage === App_dogs[0]) setAppDogsImage(App_dogs[4])
      else if(AppDogsImage === App_dogs[1]) setAppDogsImage(App_dogs[0])
      else if(AppDogsImage === App_dogs[2]) setAppDogsImage(App_dogs[1])
      else if(AppDogsImage === App_dogs[3]) setAppDogsImage(App_dogs[2])
      else if(AppDogsImage === App_dogs[4]) setAppDogsImage(App_dogs[3])

    }
  }

  const HandleClickAppSynnet = (value) => {
    if(value === 'ahead') {
      if(AppSynnetImage === App_Synnet[0]) setAppSynnetImage(App_Synnet[1])
      else if(AppSynnetImage === App_Synnet[1]) setAppSynnetImage(App_Synnet[2])
      else if(AppSynnetImage === App_Synnet[2]) setAppSynnetImage(App_Synnet[3])
      else if(AppSynnetImage === App_Synnet[3]) setAppSynnetImage(App_Synnet[4])
      else if(AppSynnetImage === App_Synnet[4]) setAppSynnetImage(App_Synnet[0])
    } else {
      if(AppSynnetImage === App_Synnet[0]) setAppSynnetImage(App_Synnet[4])
      else if(AppSynnetImage === App_Synnet[1]) setAppSynnetImage(App_Synnet[0])
      else if(AppSynnetImage === App_Synnet[2]) setAppSynnetImage(App_Synnet[1])
      else if(AppSynnetImage === App_Synnet[3]) setAppSynnetImage(App_Synnet[2])
      else if(AppSynnetImage === App_Synnet[4]) setAppSynnetImage(App_Synnet[3])

    }
  }

  const HandleSetNextPage = (value) => {
    if(value === 'AppDogs') {
      setHitHub('https://github.com/DF27ARTS/Henry-PI-Dogs')
      setDeploy('https://henry-pi-dogs-d26rn64ql-df27arts.vercel.app/')
      setOpenGitAndDeployDogs(!OpenGitAndDeployDogs)
    }
    else if(value === 'SynnetApp') {
      setHitHub('https://github.com/Nicrosi/Proyecto-Final')
      setDeploy('https://proyecto-final-rho-three.vercel.app/')
      setOpenGitAndDeploySynnet(!OpenGitAndDeploySynnet)
    }
  }

  return(
    <div 
      id='about' 
      className={
        state ?
        'container_portfolio' :
        'container_portfolio container_portfolio_night'
      }
    >
      
          <>
            <div className='About' >
              <div className="cont_image">
                <img className='My_Image' src={my_image} alt='my_image' />
                <h1 className='My_Profile_title' >Diego Fernando Rojas Carrillo</h1>
              </div>
              <div className="cont_information">
                <h1 className='About_title' >{idiom ? 'Sobre mí' : 'About' }</h1>
                <span className='Infomation' >
                  {
                    idiom ?
                    (
                      <>
                        <p>Hola!</p>

                        <p>Soy un desarrollador Full stack, cuando decidí hacer el bootcamp de henery 
                        y termine la cursada me enamore de la programación. 
                        Me gustan los retos y aprender cosas nuevas por eso aver cursar henry 
                        fue una gran y maravillosa experiencia donde aprendí varias de las 
                        tecnologías mas usadas en el mundo tech</p>
  
                        <p>Me gustaría tener la oportunidad de seguir aprendiendo nuevas tecnologías 
                        y seguir mejorando los conocimientos aprendidos en el Bootcamp.</p>
                        
                        <p>Soy una persona curiosa con ganas de aprende y seguir mejorando,
                        me gusta el trabajo en equipo y espero encontrar un lugar donde pueda seguir 
                        desarrollando mis habilidades y donde pueda contribuir con mis conocimientos 
                        además de seguir creciendo como programador y también como persona</p>
                      </>
                    )
                    :
                    (
                      <>
                        <p>Hi!</p>

                        <p>I am a full stack developer, when I decided to do henery's bootcamp 
                          and I finished the course I fell in love with programming. 
                          I like challenges and learn new things, that's why studying in Henry 
                          was a great and wonderful experience where I learned several of the most 
                          used technologies in the tech world.</p>

                        <p>I would like to have the opportunity to continue learning new technologies 
                          and continue improving the knowledge learned in the Bootcamp.</p>

                        <p>I am a curious person who wants to learn and keep improving.
                          I like teamwork and I hope to find a place where I can continue 
                          developing my skills and where I can contribute with my knowledge 
                          as well as continue to grow as a programmer and also as a person.</p>
                      </>
                    )
                  }
                </span>
              </div>
            </div>

            <div id='projects' className='Projects_title' >{ idiom ? 'Proyectos' : 'Projects'}</div>
            <div className="Projects" >
              <div className="single_project">
              <h2 className='title' >App Dogs</h2>
              <h3>
                <ul>
                  <div className='apps_infomation' >
                    {
                      idiom ?
                      'Aplicación donde podras ver diferentes tipos de perros.' :
                      'Application where you can see different types of dogs.'
                    }
                  </div>
                  <li className='apps_infomation' >
                    { 
                      idiom ? 'Cuenta con filtros para filtrar por rázas y por temperamentos,' :
                      'It has filters to filter by race and temperament,'
                    }
                  </li>
                  <li className='apps_infomation' >
                    {
                      idiom ?
                      'Posibilidad de ordenar por nombre de forma ascendente y descendente y tambíen ordenar por peso,' :
                      'Ability to sort by name ascending and descending and also order by weight,'
                    }
                  </li>
                  <li className='apps_infomation' >
                    {
                      idiom ?
                      'Buscador para encontrar los perros por nombre,' :
                      'Search engine to find dogs by name,'
                    }
                  </li>
                  <li className='apps_infomation' >
                    {
                      idiom ?
                      'sección de favoritos y un formulario para que puedas crear tu propio perrito' :
                      'favorites section and a form so you can create your own dog'
                    }
                  </li>
                </ul>
              </h3>
              <div className={ state ? "cont_Apps" : "cont_Apps cont_Apps_night"}>
                <img onClick={()=>HandleSetNextPage('AppDogs')} className="apps_image" src={AppDogsImage} alt='app-images' />
                <MdArrowForwardIos
                  onClick={()=>HandleClickAppDogs('ahead')}
                  className='Apps_images_buttons right '
                />
                <MdArrowBackIosNew
                  onClick={()=>HandleClickAppDogs()}
                  className='Apps_images_buttons left '
                />
                <div className={ OpenGitAndDeployDogs ? "next_page" : "next_page_block"}>
                    <div className="page">
                      <button className='git_and_deploy_link' >GitHub</button>
                      <a href={HitHub} >
                        <img className='next_page_img' src={GitHub} alt='GitHub' />
                      </a>
                    </div>
                    <div className="page">
                      <button className='git_and_deploy_link' >Deploy</button>
                      <a href={Deploy} >
                        <img className='next_page_img' src={app_dogs_1} alt='GitHub' />
                      </a>
                    </div>
                </div>
              </div>
              </div>




              <div className="single_project">
              <h2 className='title' >Synnet</h2>
              <h3>
                <ul>
                  <div className='apps_infomation' >
                    {
                      idiom ?
                      'Aplicación que te permite crear y participar en torneos de tenis .' :
                      'Application that allows you to create and participate in tennis tournaments.'
                    }
                  </div>
                  <li className='apps_infomation' >
                    { 
                      idiom ? 'Contiene filtros que te permiten filtrar usuarios por nombre, genero y categoria,' :
                      'Contains filters that allow you to filter users by name, gender and category,'
                    }
                  </li>
                  <li className='apps_infomation' >
                    {
                      idiom ?
                      'Tambien contiene galeria donde podras ver las imagenes mas destacadas de los diferentes torneos' :
                      'It also contains a gallery where you can see the most outstanding images of the different tournaments'
                    }
                  </li>
                  <li className='apps_infomation' >
                    {
                      idiom ?
                      'Panel de administración para editar los usuarios, torneos entre otros, Dashboard para visualisar el estado de el torneo' :
                      'Administration panel to edit users, tournaments among others, Dashboard to view the status of the tournament'
                    }
                  </li>
                  <li className='apps_infomation' >
                    {
                      idiom ?
                      'Metodo de pago, login  y registro, sección de patrocinadores, ChatBot para los usuarios que los guiara en el proceso de resgitro y pago de subtorneos' :
                      'Payment method, login and registration, sponsors section, ChatBot for users that will guide them in the process of registration and payment of subtournaments'
                    }
                  </li>
                </ul>
              </h3>
              <div className={ state ? "cont_Apps" : "cont_Apps cont_Apps_night"}>
                <img onClick={()=>HandleSetNextPage('SynnetApp')} className="apps_image" src={AppSynnetImage} alt='app-images' />
                <MdArrowForwardIos
                  onClick={()=>HandleClickAppSynnet('ahead')}
                  className='Apps_images_buttons right '
                />
                <MdArrowBackIosNew
                  onClick={()=>HandleClickAppSynnet()}
                  className='Apps_images_buttons left '
                />
                <div className={ OpenGitAndDeploySynnet ? "next_page" : "next_page_block"}>
                    <div className="page">
                      <button className='git_and_deploy_link' >GitHub</button>
                    <a href={HitHub} >
                      <img className='next_page_img' src={GitHub} alt='GitHub' />
                    </a>
                    </div>
                    <div className="page">
                      <button className='git_and_deploy_link' >Deploy</button>
                      <a href={Deploy} >
                        <img className='next_page_img' src={synnet_image1} alt='GitHub' />
                      </a>
                    </div>
                </div>
              </div>
              </div>



            </div>
              <div id='tecnologies' className="Tecnologies">
                <h1 className="tecnologies_title">{ idiom ? 'Tecnologías' : 'Tecnologies' }</h1>
                <div className="container_logos_tecnologies">
                 <div className="container_single_icon"> <p className='title_icon' >JavaScript</p> <SiJavascript className=' icon_mobile javascript_icon' /> </div>
                 <div className="container_single_icon"> <p className='title_icon' >Node</p> <IoLogoNodejs className=' icon_mobile node_icon' /> </div>
                 <div className="container_single_icon"> <p className='title_icon' >React</p> <GrReactjs className=' icon_mobile react_icon' /> </div>
                 <div className="container_single_icon"> <p className='title_icon' >Redux</p> <SiRedux className=' icon_mobile redux_icon' /> </div>
                 <div className="container_single_icon"> <p className='title_icon' >HTML</p> <ImHtmlFive className=' icon_mobile html_icon' /> </div>
                 <div className="container_single_icon"> <p className='title_icon' >CSS</p> <IoLogoCss3 className=' icon_mobile css_icon' /> </div>
                 <div className="container_single_icon"> <p className='title_icon' >Expres</p> <SiExpress className=' icon_mobile express_icon' /> </div>
                 <div className="container_single_icon"> <p className='title_icon' >Sequelize</p> <SiSequelize className=' icon_mobile sequelize_icon' /> </div>
                 <div className="container_single_icon"> <p className='title_icon' >PostgreSQL</p> <SiPostgresql className=' icon_mobile postgres_icon' /> </div>
                 <div className="container_single_icon"> <p className='title_icon' >Scrum</p> <DiScrum className=' icon_mobile scrum_icon' /> </div>
                </div>
              </div>


              <div id='contact' className="contact">
                <div className="contact_title">{ idiom ? 'Contacto' : 'Contact' }</div>
                <div className="container_logos">
                  <a href='https://github.com/DF27ARTS' >
                    <GoMarkGithub className='contact_logos' />
                  </a>
                  <a href='https://www.linkedin.com/in/diego-fernando-rojas-carrillo-full-stack-developer/' >
                    <BsLinkedin className='contact_logos' />
                  </a>
                  <a href='mailto:diego27Fernando72@gmail.com' >
                    <ImMail className='contact_logos' />
                  </a>
                </div>
              </div>
          </>
    </div>
  )
}

export default Portfolio;