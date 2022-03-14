import { BrowserRouter, Route, Routes } from "react-router-dom";
import "../styles/global.css";
import { AuthProvider } from "./../contexts/AuthContext";
import Layout from "./Layout";
import PageNotFound from "./PageNotFound";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import Quize from "./Pages/Quize";
import Result from "./Pages/Result";
import Signup from "./Pages/Signup";
import PrivateRoute from "./PrivateRoute";
import Public from "./Public";

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Layout>
          <Routes>
            <Route exect path="/" element={<Home />} />
            <Route
              path="signup"
              element={
                <Public>
                  <Signup />
                </Public>
              }
            />
            <Route
              path="login"
              element={
                <Public>
                  <Login />
                </Public>
              }
            />
            <Route
              path="quize"
              element={
                <PrivateRoute>
                  <Quize />
                </PrivateRoute>
              }
            />
            <Route
              path="result"
              element={
                <PrivateRoute>
                  <Result />
                </PrivateRoute>
              }
            />
            <Route path="*" element={<PageNotFound />} />
          </Routes>
        </Layout>
      </AuthProvider>
    </BrowserRouter>
  );
}
export default App;
