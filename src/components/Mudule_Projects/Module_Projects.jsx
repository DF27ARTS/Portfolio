import React, { useState } from 'react'
import { MdArrowForwardIos } from 'react-icons/md';
import { MdArrowBackIosNew } from 'react-icons/md';


export default function Module_Projects({Array, state, GitHub, Deploy, GitHubIcon, idiom, Descriptions }) {
  const currentArray = [...Array];

  const [CurrentImage, setCurrentImage ] = useState(currentArray[0]);
  const [CurrentPage, setCurrentPage] = useState(0);
  const [OpenGitAndDeployDogs, setOpenGitAndDeployDogs ] = useState(false);


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

  return (
    <>
    <h2 className='title' >{Descriptions.title}</h2>
      <h3>
        <ul>
          <div className='apps_infomation' >
            { !idiom && Descriptions.description1_english ? Descriptions?.description1_english : Descriptions.description1_spanish}
          </div>
          <li className='apps_infomation' >
            { !idiom && Descriptions.description2_english ? Descriptions?.description2_english : Descriptions.description2_spanish}
          </li>
          <li className='apps_infomation' >
            { !idiom && Descriptions.description3_english ? Descriptions?.description3_english : Descriptions.description3_spanish}
          </li>
          <li className='apps_infomation' >
            { !idiom && Descriptions.description4_english ? Descriptions?.description4_english : Descriptions.description4_spanish}
          </li>
          <li className='apps_infomation' >
            { !idiom && Descriptions.description5_english ? Descriptions?.description5_english : Descriptions.description5_spanish}
          </li> 
        </ul>
      </h3>
    <div className={ state ? "cont_Apps" : "cont_Apps cont_Apps_night"}>
      <img onClick={()=> setOpenGitAndDeployDogs(!OpenGitAndDeployDogs)} className="apps_image" src={ CurrentImage && CurrentImage} alt='app-images' />
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
    </>
  )
}
