import './NavBar.css';

const NavBar = ({state, idiom}) => {
  return (
    <div className='container_navbar' >
      {
        idiom ?
        (
          <>
            <a href='#2' >
              <button className='nav_titles' >Sobre mí</button>
            </a>
            <a href='#1' >
              <button className='nav_titles' >Proyectos</button>
            </a>
            <h2 className='nav_titles' >Tecnologías</h2>
            <h2 className='nav_titles' >Contacto</h2> 
          </>
        )
          :
        (
          <>
            <a href='#2' >
              <button className='nav_titles' >About</button>
            </a>
            <a href='#1' >
              <button className='nav_titles' >Projects</button>
            </a>
            <button className='nav_titles' >Tecnologies</button>
            <button className='nav_titles' >Contact</button> 
          </>
        )
      }
    </div>
  )
}

export default NavBar;