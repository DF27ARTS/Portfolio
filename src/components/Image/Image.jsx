import logo from '../Portfolio_Images/background_portfolio.gif';
import './Image.css';

const Image = ({state}) => {
  return (
    <div 
      className={
        state ?
        'container_background_image' :
        'container_background_image_night' 
      }
    >
      <img 
          src={logo} 
          className='background_image'
          alt='logo' 
          />
    </div>
  )
}

export default Image;