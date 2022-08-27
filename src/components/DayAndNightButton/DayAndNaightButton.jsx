import { BsFillMoonFill } from 'react-icons/bs';
import { BsFillSunFill } from 'react-icons/bs';
import './DayAndNightButton.css';

const DayAndNightButton = ({setState, state }) => {
  return (
    <>
      <BsFillMoonFill 
        onClick={()=>setState(false)} 
        className={
          state ?
          'NightButton' :
          'NightButton Night_Active '
        } 
      />
      <BsFillSunFill 
        onClick={()=>setState(true)} 
        className={
          !state ?
          'DayNight' :
          'DayNight Day_Active '
        } 
      />
    </>
    // <button
    //     onClick={()=>setState(!state)}
    //     style={{
    //       position: 'absolute',
    //       top: '20px',
    //       right: '20px'
    //     }}
    //   >
    //     Change
    //   </button>
  )
}

export default DayAndNightButton;