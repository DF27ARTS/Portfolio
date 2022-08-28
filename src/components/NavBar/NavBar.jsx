import './NavBar.css';

const NavBar = ({state, idiom}) => {
  return (
    <div className='container_navbar' >
      <a href='#about' >
        <button className='nav_titles' >{ idiom ? 'Sobre mí' : 'About' }</button>
      </a>

      <a href='#projects' >
        <button className='nav_titles' >{ idiom ? 'Proyectos' : 'Projects' }</button>
      </a>

      <a href='#tecnologies' >
        <button className='nav_titles' >{ idiom ? 'Tecnologías' : 'Tecnologies' }</button>
      </a>

      <a href='#contact' >
        <button className='nav_titles' >{ idiom ? 'Contacto' : 'Contact' }</button> 
      </a>
    </div>
  )
}

export default NavBar;