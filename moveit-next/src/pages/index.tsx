import styles from '../styles/components/LoginPage.module.css'

import { GoMarkGithub } from 'react-icons/go'
import { FiArrowRight } from 'react-icons/fi'
import { useState } from 'react'

// This is the client ID and client secret that I obtained while registering the application
const clientID = '7f49889ccabaa9274d88'

function index() {

  const [userName, setUserName] = useState('')

  return (
    <div id={styles.loginPage}>
      <img src='./Simbolo.svg' alt="simbolo" />
      <main className={styles.content}>
        <img src='./logo.svg' alt="logo"/>
        <p>Bem-vindo</p>
        <div>
           <GoMarkGithub size={36} color="#B2B9FF"/> {/* o body 32px setado no global.css não está pegando aqui. Por isso foi necessário setar o size para 36 */}
          <span>Faça login com seu Github para começar</span>
        </div>
        <div>
          <input type="text" placeholder="Digite seu username" onChange={event => setUserName(event.target.value)}/>
          <a href={`https://github.com/login/oauth/authorize?client_id=${clientID}&login=${userName}`}>
            {/* o parâmetro redirect_uri é opcional. Se não colocarmos, vai redirecionar para o link que
            registramos no campo "Authorization callback URL" no Github */}
            <FiArrowRight/>
          </a>
        </div>
      </main>
    </div>
  );
}

export default index

{/*<div className={styles.landingContainer}>
  <div className={styles.simbolo}>
    <img src={simbolo} alt="simbolo"/>
  </div>

  <div className={styles.loginWrapper}>
    <img src={logo} alt="logo"/>

    <main>
      <p>Bem-vindo</p>

      <div>
        <GoMarkGithub color="#B2B9FF"/>  a props size está setada em size{36}
        <span>Faça login com seu Github para começar</span>
      </div>

      <div className={styles.userName}>
        <input type="text" placeholder="Digite seu nome" />
        <a href="/">
          <FiArrowRight/>
        </a>
      </div>
    </main>
  </div>
</div>*/}