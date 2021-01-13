import { Link } from 'react-router-dom';
import { Container, Content, Profile } from './styles';
import Logo from '../Logo';

function Header() {
  return (
    <Container>
      <Content>
        <nav>
          <Logo />
          <Link to='/dashboard'>DASHBOARD</Link>
        </nav>
        <aside>
          <Profile>
            <div>
              <strong>Matheus</strong>
              <Link to='/meuperfil'>Meu perfil</Link>
            </div>
            <img src='http://localhost:3333/myAvatar/1' alt='Matheus' />
          </Profile>
        </aside>
      </Content>
    </Container>
  );
}

export default Header;
