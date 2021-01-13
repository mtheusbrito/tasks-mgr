import { takeLatest, call, put, all } from 'redux-saga/effects';
import { toast } from 'react-toastify';
import api from '../../../services/api';
import { signInSuccess, signFailure } from './actions';
import history from '../../../services/history';

export function* signIn({ payload }) {
  try {
    const { email, password } = payload;
    const response = yield call(api.post, 'sessions', {
      email,
      password,
    });

    const { token, user } = response.data;
    api.defaults.headers.Authorization = `Bearer ${token}`;
    yield put(signInSuccess(token, user));
    history.push('/');
  } catch (err) {
    window.console.log(`error: ${err}`);
    toast.error('Falha na autenticão, verifique seus dados!');
    yield put(signFailure());
  }
}
export function* signUp({ payload }) {
  try {
    const { email, name, password } = payload;
    const response = yield call(api.post, 'users', {
      name,
      email,
      password,
    });
    const { error } = response.data;
    if (error) {
      toast.error(error);
    } else {
      history.push('/login');
      toast.success(
        'Conta criada, informe suas credeciais para acessar sua conta.'
      );
    }
  } catch (err) {
    toast.error('Falha, verfique seus dados!');
    yield put(signFailure());
  }
}
export function setToken({ payload }) {
  if (!payload) return;
  const { token } = payload.auth;
  if (token) {
    api.defaults.headers.Authorization = `Bearer ${token}`;
  }
}
export default all([
  takeLatest('persist/REHYDRATE', setToken),
  takeLatest('@auth/SIGN_IN_REQUEST', signIn),
  takeLatest('@auth/SIGN_UP_REQUEST', signUp),
]);
