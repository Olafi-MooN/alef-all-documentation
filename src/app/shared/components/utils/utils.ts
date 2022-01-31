import { IFirebaseAuthUserModel } from "src/app/services/firebase/firebase-auth.component";

export const getStorage: () => IFirebaseAuthUserModel = () => {
  return  JSON.parse(localStorage.getItem('token') as string) as IFirebaseAuthUserModel;
}
