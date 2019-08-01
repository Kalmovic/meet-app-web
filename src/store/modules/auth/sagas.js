import { takeLatest, call, put, all } from 'redux-saga/effects';
import { toast } from 'react-toastify';
import { signInSuccess, signFailure, signUpSuccess } from './actions';
import api from '~/services/api';
import history from '~/services/history';

export function* signIn({ payload }) {
  try {
    const { email, password } = payload;

    const response = yield call(api.post, 'sessions', {
      email,
      password,
    });

    const { token, user } = response.data;

    yield put(signInSuccess(token, user));

    history.push('dashboard');
  } catch (err) {
    toast.error('Authentication failure, check your data');
    yield put(signFailure());
  }
}

export function* signUp({ payload }) {
  console.tron.log(payload);
  try {
    const { name, email, password } = payload;

    const response = yield call(api.post, 'users', {
      name,
      email,
      password,
    });

    console.tron.log(response.data);
    yield put(signUpSuccess());
    history.push('/');
  } catch (err) {
    toast.error('Registration failure');
    console.tron.log(err);
    yield put(signFailure());
  }
}

export default all([
  takeLatest('@auth/SIGN_IN_REQUEST', signIn),
  takeLatest('@auth/SIGN_UP_REQUEST', signUp),
]);
