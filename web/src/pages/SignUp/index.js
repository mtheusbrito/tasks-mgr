import React from 'react';
import { Link } from 'react-router-dom';
import { Form, Input } from '@rocketseat/unform';
import Logo from '../../components/Logo';
// import { Container } from './styles';

function SignUp() {
  function handleSubmit(data) {
    console.tron(data);
  }

  return (
    <>
      <Logo />
      <Form onSubmit={handleSubmit}>
        <Input name='name' type='text' placeholder='Seu nome completo' />
        <Input name='email' type='email' placeholder='Seu email' />
        <Input name='password' type='password' placeholder='Sua senha' />
        <button type='submit'>Criar conta</button>

        <Link to='/login'>Já tenho login</Link>
      </Form>
    </>
  );
}

export default SignUp;
