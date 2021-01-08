import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../components/Logo';
// import { Container } from './styles';

function SignUp() {
  return (
    <>
      <Logo />
      <form>
        <input type='text' placeholder='Seu nome completo' />
        <input type='email' placeholder='Seu email' />
        <input type='password' placeholder='Sua senha' />
        <button type='submit'>Criar conta</button>

        <Link to='/login'>Já tenho login</Link>
      </form>
    </>
  );
}

export default SignUp;
