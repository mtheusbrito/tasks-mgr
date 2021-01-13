import { takeLatest, call, put, all } from 'redux-saga/effects';
import api from '../../../services/api';
import { signInSuccess } from './actions';
import history from '../../../services/history';

export function* signIn({ payload }) {
  try {
    const { email, password } = payload;
    const response = yield call(api.post, 'sessions', {
      email,
      password,
    });

    const { token, user } = response.data;
    yield put(signInSuccess(token, user));
    history.push('/');
  } catch (err) {
    window.console.log(`error: ${err}`);
  }
}

export default all([takeLatest('@auth/SIGN_IN_REQUEST', signIn)]);