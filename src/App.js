import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ScrollToTop, ProtectedRoute, AuthRoute } from "./utils/CustomRoute";
import { ClientLayout } from "./pages/layout/client"
import { ClearLayout } from "./pages/layout/clear"

import { Home } from "./pages/index"
import { Page404 } from "./pages/404"
import { FriendRequest } from "./pages/friendRequest"
import { Login } from "./pages/login"
import { Signup } from "./pages/signup"
import { Message } from "./pages/message"
import { Notification } from "./pages/notification"
import { Profile } from "./pages/profile"
import { Search } from "./pages/search"
import { UserSetting } from "./pages/userSetting"

function App() {
  return (
    <Router>
      <ScrollToTop>
        <Routes>
          <Route exact path="/" element={
            <AuthRoute>
              <ClearLayout />
            </AuthRoute>
          }>
            <Route path="signup" element={<Signup />} />
            <Route path="login" element={<Login />} />
            <Route path="*" element={<Page404 />} />
          </Route>

          <Route exact path="/" element={
            <ProtectedRoute>
              <ClientLayout />
            </ProtectedRoute>
          }>
            <Route index element={<Home />} />
            <Route path="search" element={<Search />} />
            <Route path="friend" element={<FriendRequest />} />
            <Route path="message" element={<Message />} />
            <Route path="notification" element={<Notification />} />
            <Route path="user/:userid" element={<Profile />} />
            <Route path="setting" element={<UserSetting />} />
            <Route path="*" element={<Page404 />} />
          </Route>
        </Routes>
      </ScrollToTop>
    </Router>
  );
}

export default App;
