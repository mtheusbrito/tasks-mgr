import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../components/Logo';
// import { Container } from './styles';

function SignIn() {
  return (
    <>
      <Logo />
      <form>
        <input type='email' placeholder='Seu email' />
        <input type='password' placeholder='Sua senha' />
        <button type='submit'>Acessar</button>

        <Link to='/register'>Se registrar</Link>
      </form>
    </>
  );
}

export default SignIn;
