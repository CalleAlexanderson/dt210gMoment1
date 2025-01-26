import logo from '../assets/images/header_image.jpg'
import './Header.css'

function Header({title} : {title: string}) {
  
    return (
      <>
        <header>
            <h1>{title}</h1>
            <img src={logo} alt="alla Sarah J Maas böcker i en bokhylla" />
        </header>
      </>
    )
  }
  
  export default Header