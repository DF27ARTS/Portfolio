import backgroun_img_day from '../Portfolio_Images/backgroun_img_day.jpg';
import phone_img_day from '../Portfolio_Images/phone_img_day.jpg';
import background_img_night from '../Portfolio_Images/background_img_night.jpg';
import phone_img_night from '../Portfolio_Images/phone_img_night.jpg';
import './Image.css';

const Image = ({state}) => {
  return (
    <div >
      {
        state ?
        (
          <>
            <img className='container_background_image' src={backgroun_img_day} alt="backgroun img day" />
            <img className='phone_img_day_night' src={phone_img_day} alt="backgroun img day" />
          </>
        )
        :
        (
          <>
            <img className='container_background_image' src={background_img_night} alt="backgroun img night" />
            <img className='phone_img_day_night' src={phone_img_night} alt="backgroun img night" />
            <div className="container_about_img_night"></div>
          </>
        )
      }
    </div>
  )
}

export default Image;