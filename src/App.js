import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ScrollToTop, ProtectedRoute, AuthRoute } from "./utils/CustomRoute";
import { ClientLayout } from "./pages/layout/client"

import { Home } from "./pages/index"
import { Page404 } from "./pages/404"

function App() {
  return (
    <Router>
      <ScrollToTop>
        <Routes>
          <Route exact path="/" element={<ClientLayout />}>
            <Route index element={<Home />} />
            {/* <Route path="item" element={<ItemList />} />
            <Route path="blog" element={<Blog />} />
            <Route path="help" element={<Help />} />
            <Route path="term" element={<Term />} /> */}
            {/* <Route
              path="login"
              element={
                <AuthRoute>
                  <Login />
                </AuthRoute>
              }
            /> */}
            <Route path="*" element={<Page404 />} />
          </Route>
        </Routes>
      </ScrollToTop>
    </Router>
  );
}

export default App;
