import './NavBar.css';

const NavBar = ({state}) => {
  return (
    <div className='container_navbar' >
      <a href='#2' >
      <h2 className='nav_titles' >About me</h2>
      </a>
      <a href='#1' >
      <h2 className='nav_titles' >projects</h2>
      </a>
      <h2 className='nav_titles' >Tecnologies</h2>
      <h2 className='nav_titles' >Contact</h2>
    </div>
  )
}

export default NavBar;