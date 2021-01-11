import React from 'react';
import { Link } from 'react-router-dom';
import { Form, Input } from '@rocketseat/unform';
import * as Yup from 'yup';
import Logo from '../../components/Logo';
// import { Container } from './styles';
const schema = Yup.object().shape({
  name: Yup.string().required('O nome é obrigatório'),
  email: Yup.string()
    .email('Insira um e-mail válido')
    .required('O e-mail é obrigatório'),
  password: Yup.string()
    .required('A senha é obrigatória')
    .min(6, 'No mínimo 6 caracteres'),
});
function SignUp() {
  function handleSubmit(data) {
    console.tron(data);
  }

  return (
    <>
      <Logo />
      <Form onSubmit={handleSubmit} schema={schema}>
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
