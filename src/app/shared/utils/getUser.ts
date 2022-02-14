import firebase from 'firebase/compat/app';

export const getUser: () => firebase.auth.UserCredential = () => {
  return JSON.parse(localStorage.getItem('user') as string);
}
