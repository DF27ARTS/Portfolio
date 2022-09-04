import React, { useState } from 'react'
import { MdArrowForwardIos } from 'react-icons/md';
import { MdArrowBackIosNew } from 'react-icons/md';


export default function Module_Projects({Array, state, GitHub, Deploy, GitHubIcon, idiom, Descriptions }) {
  const currentArray = [...Array];

  const [CurrentImage, setCurrentImage ] = useState(currentArray[0]);
  const [CurrentPage, setCurrentPage] = useState(0);
  const [OpenGitAndDeployDogs, setOpenGitAndDeployDogs ] = useState(false);
  const [TecnologiesContainer, setTecnologiesContainer] = useState(false)
  const [DescriptionContainer, setDescriptionContainer] = useState(false)


  const HandleNextPage = () => {
    if(CurrentImage === currentArray[currentArray.length -1]) {
      setCurrentImage(currentArray[0]);
      setCurrentPage(0)
    } else {
      setCurrentImage(currentArray[CurrentPage + 1])
      setCurrentPage(CurrentPage + 1)
    }
  }


  const HandlePreviousPage = () => {
    if(CurrentImage === currentArray[0]) {
      setCurrentImage(currentArray[currentArray.length -1]);
      setCurrentPage(currentArray.length -1)
    } else {
      setCurrentImage(currentArray[CurrentPage - 1])
      setCurrentPage(CurrentPage - 1)
    }
  }

  const HandleOpenGitAndDeployDogs = () => {
    setDescriptionContainer(false)
    setTecnologiesContainer(false)
    setOpenGitAndDeployDogs(!OpenGitAndDeployDogs)
  }

  const HandleDescriptionContainer = () => {
    setTecnologiesContainer(false)
    setOpenGitAndDeployDogs(false)
    setDescriptionContainer(!DescriptionContainer)
  }

  const HandleTecnologiesContainer = () => {
    setDescriptionContainer(false)
    setOpenGitAndDeployDogs(false)
    setTecnologiesContainer(!TecnologiesContainer)
  }

  return (
    <>
    <h2 className='title' >{Descriptions.title}</h2>
    <div className="container_tecnologies_and_description">
      <span 
        onClick={()=>HandleTecnologiesContainer()}
        className="tecnologies_and_description_text"
      >
        {idiom ? "Tecnologías" : "Tecnologies"}
      </span>
      <span 
        onClick={()=>HandleDescriptionContainer()}
        className="tecnologies_and_description_text"
      >
        {idiom ? "Descripción" : "Description"}
      </span>
    </div>
    
    <div className={ state ? "cont_Apps" : "cont_Apps cont_Apps_night"}>
      <img onClick={()=> HandleOpenGitAndDeployDogs()} className="apps_image" src={ CurrentImage && CurrentImage} alt='app-images' />
      <MdArrowForwardIos
        onClick={()=>HandleNextPage()}
        className='Apps_images_buttons right '
      />
      <MdArrowBackIosNew
        onClick={()=>HandlePreviousPage()}
        className='Apps_images_buttons left '
      />
      <div className={ OpenGitAndDeployDogs ? "next_page" : "next_page_block"}>
          <div className="page">
            <button className='git_and_deploy_link' >GitHub</button>
            <a href={GitHub} >
              <img className='next_page_img' src={GitHubIcon} alt='GitHub Icon' />
            </a>
          </div>
          <div className="page">
            <button className='git_and_deploy_link' >Deploy</button>
            <a href={Deploy} >
              <img className='next_page_img' src={currentArray[0]} alt='GitHub' />
            </a>
          </div>
      </div>
    </div>

    <div 
      onClick={()=> HandleOpenGitAndDeployDogs()}
      className="Open_links_container"
    >
      Link
    </div>

    <div className={ DescriptionContainer ? 'container_description' : 'container_description description_desable'} >
      <h3>
        <ul>
          <p className='apps_infomation' >
            { !idiom && Descriptions.description1_english ? Descriptions?.description1_english : Descriptions.description1_spanish}
          </p>
          <p className='apps_infomation' >
            { !idiom && Descriptions.description2_english ? Descriptions?.description2_english : Descriptions.description2_spanish}
          </p>
          <p className='apps_infomation' >
            { !idiom && Descriptions.description3_english ? Descriptions?.description3_english : Descriptions.description3_spanish}
          </p>
          <p className='apps_infomation' >
            { !idiom && Descriptions.description4_english ? Descriptions?.description4_english : Descriptions.description4_spanish}
          </p>
          <p className='apps_infomation' >
            { !idiom && Descriptions.description5_english ? Descriptions?.description5_english : Descriptions.description5_spanish}
          </p> 
        </ul>
      </h3>
    </div>

    <div className={ TecnologiesContainer ? "containet_tecnologies" : "containet_tecnologies tecnologies_desable"}>
      {
        Descriptions.Tecnologies.length ? Descriptions.Tecnologies.map((tech) => (
          <span className='tech_name' >{tech}</span>
        )) : <div></div>
      }
    </div>
    </>
  )
}
