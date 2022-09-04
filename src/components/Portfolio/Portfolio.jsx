import my_image from '../Portfolio_Images/my_image.jpg';
import GitHub from '../Portfolio_Images/GitHub.png';
import My_CV from '../Portfolio_Images/My_CV.pdf'
import { GoMarkGithub } from 'react-icons/go';
import { BsLinkedin } from 'react-icons/bs';
import { ImMail } from 'react-icons/im';
import { SiJavascript } from 'react-icons/si';
import { IoLogoNodejs } from 'react-icons/io';
import { GrReactjs } from 'react-icons/gr';
import { SiRedux } from 'react-icons/si';
import { ImHtmlFive } from 'react-icons/im';
import { IoLogoCss3 } from 'react-icons/io';
import { SiSequelize } from 'react-icons/si';
import { SiExpress } from 'react-icons/si';
import { SiPostgresql } from 'react-icons/si';
import { DiScrum } from 'react-icons/di';
import Module_Projects from '../Mudule_Projects/Module_Projects';
import { 
  Array_App_dogs, 
  Array_App_Synnet, 
  Array_Weather_App, 
  Synnet_Descriptions, 
  App_Dogs_Descriptions, 
  Weather_App_Descriptions, 
  About_Me, 
} from '../Projects_Description/Projects_Description';


import './Portfolio.css'
import { useEffect } from 'react';

const Portfolio = ({state, idiom}) => {

  

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
                <a className='cv_link' href={My_CV} download >Download CV</a>
              </div>
              <div className="cont_information">
                <h1 className='About_title' >{idiom ? 'Sobre mí' : 'About' }</h1>
                <span className='Infomation' >
                  {
                    idiom ?
                    (
                      <>
                        <p>{About_Me.greeting_spanish}</p>
                        <p>{About_Me.description1_spanish}</p>
                        <p>{About_Me.description2_spanish}</p>
                        <p>{About_Me.description3_spanish}</p>
                      </>
                    )
                    :
                    (
                      <>
                        <p>{About_Me.greeting_english}</p>
                        <p>{About_Me.description1_english}</p>
                        <p>{About_Me.description2_english}</p>
                        <p>{About_Me.description3_english}</p>
                      </>
                    )
                  }
                </span>
              </div>
            </div>

            <div id='projects' className='Projects_title' >{ idiom ? 'Proyectos' : 'Projects'}</div>
            <div className="Projects" >
              <div className="single_project">
                <Module_Projects
                  state={state}
                  Array={Array_App_dogs}
                  GitHub={"https://github.com/DF27ARTS/Henry-PI-Dogs"}
                  Deploy={"https://henry-pi-dogs-d26rn64ql-df27arts.vercel.app/"}
                  GitHubIcon={GitHub}
                  idiom={idiom}
                  Descriptions={App_Dogs_Descriptions}
                />
              </div>

              <div className="single_project">
                <Module_Projects
                  state={state}
                  Array={Array_App_Synnet}
                  GitHub={"https://github.com/Nicrosi/Proyecto-Final"}
                  Deploy={"https://proyecto-final-rho-three.vercel.app/"}
                  GitHubIcon={GitHub}
                  idiom={idiom}
                  Descriptions={Synnet_Descriptions}
                />
              </div>

              <div className="single_project">
                <Module_Projects
                  state={state}
                  Array={Array_Weather_App}
                  GitHub={"https://github.com/DF27ARTS/Weather_App"}
                  Deploy={"https://weather-dg4hdgpg6-df27arts.vercel.app/"}
                  GitHubIcon={GitHub}
                  idiom={idiom}
                  Descriptions={Weather_App_Descriptions}
                />
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