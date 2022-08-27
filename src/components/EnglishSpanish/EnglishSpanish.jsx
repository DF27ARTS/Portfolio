


const EnglishSpanish = ({setIdiom, idiom}) => {
  return (
    <>
    {
      !idiom ?
      <button className='Idiom_Button' onClick={()=>setIdiom(!idiom)} >Spanish</button> :
      <button className='Idiom_Button' onClick={()=>setIdiom(!idiom)} >English</button>
    }
    </>
  )
}

export default EnglishSpanish;