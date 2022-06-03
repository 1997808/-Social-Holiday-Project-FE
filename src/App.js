import React, { useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate
} from "react-router-dom";
import { ScrollToTop, ProtectedRoute, AuthRoute } from "./utils/CustomRoute";
import { ClearLayout } from "./pages/layout/clear";

import { Home } from "./pages/index";
import { Page404 } from "./pages/404";
import { FriendRequest } from "./pages/friendRequest";
import { Login } from "./pages/login";
import { Signup } from "./pages/signup";
import { Message } from "./pages/message";
import { Notification } from "./pages/notification";
import { Profile } from "./pages/profile";
import { Search } from "./pages/search";
import { ProfileEdit } from "./pages/profileEdit";
import { MyAxios } from "./utils/api";
import { login, logOut } from "./app/auth";
import { resetUser, setUser } from "./app/user";
import { useDispatch } from "react-redux";
import { NavLayout } from "./pages/layout/nav";
import { PostDetail } from "./pages/postDetail";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    const checkLogin = async () => {
      await MyAxios.get("auth/checkLogin")
        .then((res) => {
          if (res.data) {
            dispatch(setUser(res.data.user));
            dispatch(login());
          } else {
            localStorage.removeItem("token");
            dispatch(resetUser());
            dispatch(logOut());
            // return (
            //   <Navigate to="/auth/login" replace={true} />
            // )
          }
        })
        .catch((error) => {
          console.log(error);
        });
    };
    checkLogin();
  }, [dispatch]);

  return (
    <Router>
      <ScrollToTop>
        <Routes>
          <Route
            exact
            path="/"
            element={
              <ProtectedRoute>
                <NavLayout />
              </ProtectedRoute>
            }
          >
            <Route index element={<Home />} />
            <Route path="post/:id" element={<PostDetail />} />
            <Route path="search" element={<Search />} />
            <Route path="friend" element={<FriendRequest />} />
            <Route path="message" element={<Message />} />
            <Route path="notification" element={<Notification />} />
            <Route path="profile/:id" element={<Profile />} />
            <Route path="edit" element={<ProfileEdit />} />
            <Route path="*" element={<Page404 />} />
          </Route>
          <Route
            path="/auth"
            element={
              <AuthRoute>
                <ClearLayout />
              </AuthRoute>
            }
          >
            <Route path="signup" element={<Signup />} />
            <Route path="login" element={<Login />} />
            <Route path="*" element={<Page404 />} />
          </Route>
        </Routes>
      </ScrollToTop>
    </Router>
  );
}

export default App;
