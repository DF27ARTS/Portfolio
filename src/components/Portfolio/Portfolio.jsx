import my_image from '../Portfolio_Images/my_image.jpg';
import app_dogs_1 from '../App_dogs/app_dogs1.png';
import app_dogs_2 from '../App_dogs/app_dogs2.png';
import app_dogs_3 from '../App_dogs/app_dogs3.png';
import app_dogs_4 from '../App_dogs/app_dogs4.png';
import app_dogs_5 from '../App_dogs/app_dogs5.png';
import { MdArrowForwardIos } from 'react-icons/md';
import { MdArrowBackIosNew } from 'react-icons/md';
import './Portfolio.css'
import { useState } from 'react';

const Portfolio = ({state, idiom}) => {

  
  const App_dogs = [
    app_dogs_1,
    app_dogs_2,
    app_dogs_3,
    app_dogs_4,
    app_dogs_5,
  ]
  const [AppDogsImage, setAppDogsImage ] = useState(App_dogs[0]);
  const [NextPage, setNextPage ] = useState(false);
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

  const HandleSetNextPage = (value) => {
    if(value === 'AppDogs') {
      setHitHub('HitHub')
      setDeploy('Deploy')
    }
    setNextPage(!NextPage)
  }

  return(
    <div 
      className={
        state ?
        'container_portfolio' :
        'container_portfolio container_portfolio_night'
      }
    >
      
          <>
            <div id='1' className='About' >
              <div className="cont_image">
                <img className='My_Image' src={my_image} alt='my_image' />
              </div>
              <div className="cont_information">
                <h1 className='About_title' >{idiom ? 'Sobre mí' : 'About' }</h1>
                <span className='Infomation' >
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem dolorem nihil ea a tempore magnam fugiat, doloribus odit est rem ad ipsam harum ipsum omnis odio vero laboriosam quo obcaecati cupiditate culpa eius distinctio ut sequi! Mollitia ducimus amet molestiae unde vel nulla, dignissimos quae excepturi aut, nostrum quo. Laborum!
                </span>
              </div>
            </div>

            <div className="Projects" >
              <div className='Projects_title' >{ idiom ? 'Proyectos' : 'Projects'}</div>
              <h2 className='title' >App Dogs</h2>
              <h3>
                <ul>
                  <div>
                    {
                      idiom ?
                      'Aplicación donde podras ver diferentes tipos de perros.' :
                      'Application where you can see different types of dogs.'
                    }
                  </div>
                  <li>
                    { 
                      idiom ? 'Cuenta con filtros para filtrar por rázas y por temperamentos,' :
                      'It has filters to filter by race and temperament,'
                    }
                  </li>
                  <li>
                    {
                      idiom ?
                      'Posibilidad de ordenar por nombre de forma ascendente y descendente y tambíen ordenar por peso,' :
                      'Ability to sort by name ascending and descending and also order by weight,'
                    }
                  </li>
                  <li>
                    {
                      idiom ?
                      'Buscador para encontrar los perros por nombre,' :
                      'Search engine to find dogs by name,'
                    }
                  </li>
                  <li>
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
                <div className={ NextPage ? "next_page" : "next_page_block"}>
                  <a href={HitHub} >
                    <div className="page">
                      <p>GitHub</p>
                      <img className='next_page_img' src={app_dogs_5} alt='GitHub' />
                    </div>
                  </a>
                  <a href={Deploy} >
                    <div className="page">
                      <p>Deploy</p>
                      <img className='next_page_img' src={app_dogs_1} alt='GitHub' />
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </>
    </div>
  )
}

export default Portfolio;