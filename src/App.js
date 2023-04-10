import { RouterProvider } from "react-router-dom";
import routes from "./routes/routes";
import { useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import auth from "./firebase/firebase.config";
import { getUser, setuser, toggleLoading } from "./features/auth/authSlice";
import { useDispatch } from "react-redux";
import { Toaster } from "react-hot-toast";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // console.log(user);
        dispatch(getUser(user.email));
      } else {
        dispatch(toggleLoading());
      }
    });
  }, []);
  console.log(process.env.DEPLOYED_URL);
  return (
    <>
      <Toaster />
      <RouterProvider router={routes} />
    </>
  );
}

export default App;
