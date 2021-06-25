import React, { useState, useEffect, useContext, createContext } from "react";
import { db, firebase } from '../firebase/firebase'
import { createUser } from './../firebase/dbActions';



const authContext = createContext();

// Provider component that wraps your app and makes auth object ...
// ... available to any child component that calls useAuth().
export function ProvideAuth({ children }) {
  const auth = useProvideAuth();
  return <authContext.Provider value={auth}>{children}</authContext.Provider>;
}

// Hook for child components to get the auth object ...
// ... and re-render when it changes.
export const useAuth = () => {
  return useContext(authContext);
};

// Provider hook that creates auth object and handles state
function useProvideAuth() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);
  const [userData, setUserData] = useState(null);
  const [error, setError] = useState(null)

  useEffect(() => {
    if (user) {
      setLoading(true)
      db.collection("users").doc(user.uid).get().finally(() => setLoading(false)).then((doc) => {
        if (doc.exists) {
          setUserData(doc.data())
        } else {
          // doc.data() will be undefined in this case
          console.log("No such document!");
        }
      }).catch((error) => {
        console.log("Error getting document:", error);
      });
    }
  }, [user])

  function setCustomErrorText(err) {
    const error = err
    switch (error.code) {
      case 'auth/user-not-found':
        error.message = 'Пользователь не найден!'
        break
      default:
        error.message = 'Неизвестная ошибка!'
        break
    }
    setError(error)
  }
  // Wrap any Firebase methods we want to use making sure ...
  // ... to save the user to state.
  const signin = (email, password) => {
    setLoading(true)
    return firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .finally(() => setLoading(false))
      .then((response) => {
        setError(null)
        setUser(response.user);
        return response.user;
      })
      .catch(error => {
        setCustomErrorText(error)
        setUser(null);
        return error
      })
  };

  const signup = (email, password) => {
    setLoading(true)
    return firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .finally(() => setLoading(false))
      .then((response) => {
        setError(null)
        setUser(response.user);
        createUser({ uid: response.user.uid })
        return response.user;
      })
      .catch(error => {
        setCustomErrorText(error)
        setUser(null);
        return error
      })
  };

  const signout = () => {
    setLoading(true)
    return firebase
      .auth()
      .signOut()
      .finally(() => setLoading(false))
      .then(() => {
        setUser(null);
        setError(null)
      })
      .catch(error => {
        setCustomErrorText(error)
        return error
      });
  };

  const sendPasswordResetEmail = (email) => {
    setLoading(true)
    return firebase
      .auth()
      .sendPasswordResetEmail(email)
      .then(() => {
        setLoading(false)
        return true;
      });
  };

  const confirmPasswordReset = (code, password) => {
    setLoading(true)
    return firebase
      .auth()
      .confirmPasswordReset(code, password)
      .then(() => {
        setLoading(false)
        return true;
      });
  };

  // Subscribe to user on mount
  // Because this sets state in the callback it will cause any ...
  // ... component that utilizes this hook to re-render with the ...
  // ... latest auth object.
  useEffect(() => {
    setLoading(true)
    const unsubscribe = firebase.auth().onAuthStateChanged((user) => {
      setLoading(false)
      if (user) {
        setUser(user);
      } else {
        setUser(null);
      }
    });
    // Cleanup subscription on unmount
    return () => unsubscribe();
  }, []);

  // Return the user object and auth methods
  return {
    user,
    userData,
    error,
    loading,
    signin,
    signup,
    signout,
    sendPasswordResetEmail,
    confirmPasswordReset,
  };
}