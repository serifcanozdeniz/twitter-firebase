import { BrowserRouter, Route, Routes } from "react-router-dom";
import AuthPage from "./pages/AuthPage";
import FeedPage from "./pages/FeedPage";
import ProtectedRoute from "./pages/ProtectedRoute";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AuthPage />} />

        {/* kullanıcının erişimi için hesabına giriş yapmasını n zorunlu olmasını istediğimiz için route'ları kapsayıcı bir router içerisine al */}

        <Route element={<ProtectedRoute />}>
          <Route path="/home" element={<FeedPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
