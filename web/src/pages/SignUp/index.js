import { Link } from 'react-router-dom';
import { Form, Input } from '@rocketseat/unform';
import * as Yup from 'yup';
import { useDispatch, useSelector } from 'react-redux';
import Logo from '../../components/Logo';
import { signUpRequest } from '../../store/modules/auth/actions';
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
  const dispatch = useDispatch();
  const loading = useSelector((state) => state.auth.loading);
  function handleSubmit({ name, email, password }) {
    dispatch(signUpRequest(name, email, password));
  }

  return (
    <>
      <Logo />
      <Form onSubmit={handleSubmit} schema={schema}>
        <Input name='name' type='text' placeholder='Seu nome completo' />
        <Input name='email' type='email' placeholder='Seu email' />
        <Input name='password' type='password' placeholder='Sua senha' />
        <button type='submit'>{loading ? 'Aguarde ...' : 'Criar conta'}</button>

        <Link to='/login'>Já tenho login</Link>
      </Form>
    </>
  );
}

export default SignUp;
