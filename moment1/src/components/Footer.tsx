import './Footer.css'
function Footer({name, email} : {name: string, email: string}) {
  
    return (
      <>
        <footer>
            <ul>
                <li>
                    Sidskapare: {name}
                </li>
                <li>
                Kontakt: <a href={"mailto:"+email} >{email}</a>
                </li>
            </ul>
        </footer>
      </>
    )
  }
  
  export default Footer