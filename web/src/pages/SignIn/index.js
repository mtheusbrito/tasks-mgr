import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { Form, Input } from '@rocketseat/unform';
import * as Yup from 'yup';
import Logo from '../../components/Logo';
// import { Container } from './styles';

import { signInRequest } from '../../store/modules/auth/actions';

const schema = Yup.object().shape({
  email: Yup.string()
    .email('Insira um e-mail válido')
    .required('O e-mail é obrigatório'),
  password: Yup.string().required('A senha é obrigatória'),
});
function SignIn() {
  const dispatch = useDispatch();
  function handleSubmit({ email, password }) {
    dispatch(signInRequest(email, password));
  }
  return (
    <>
      <Logo />
      <Form onSubmit={handleSubmit} schema={schema}>
        <Input name='email' type='email' placeholder='Seu email' />
        <Input name='password' type='password' placeholder='Sua senha' />
        <button type='submit'>Acessar</button>

        <Link to='/register'>Se registrar</Link>
      </Form>
    </>
  );
}

export default SignIn;
