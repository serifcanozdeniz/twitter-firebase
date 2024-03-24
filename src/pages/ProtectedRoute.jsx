import { onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from "react";
import { Outlet, useNavigate, Navigate } from "react-router-dom";
import { auth } from "../firebase/config";

const ProtectedRoute = () => {
  // kullanıcının yetkisi var mı state'i
  const [isAuth, setIsAuth] = useState();

  const navigate = useNavigate();

  useEffect(() => {
    // onAuthStateChanged > kullanıcı oturmunun değişimini izler
    onAuthStateChanged(auth, (user) => {
      // eğer oturum açtıysa yetkiyi true ya, kapattıysa false a çekiyoruz
      setIsAuth(user ? true : false);
    });
  }, []);

  //   eğer yetkisi yoksa login sayfasına yönlendir
  if (isAuth === false) {
    // useNavigate kullanınca bileşen tam yüklenmeden yönlendirme yapmamızdan kaynaklı react uyarı veriyordu bizde useNavigatee yerine Navigate bileşeni kullandık. Bu kullanıcının browser router bileşenin yükleme işlemini tamamlamış gibi algılıyor ve to prop'u olarak tanımladığımız sayfaya yönlendiriyor
    return <Navigate to={"/"} />;
  }
  // kapsayıcı bir route'da alt route'u çağırma
  return <Outlet />;
};

export default ProtectedRoute;
