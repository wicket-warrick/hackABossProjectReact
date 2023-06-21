import "./App.css";
import { Route, Routes } from "react-router-dom";
import { Home } from "./view/Home/Home";
import { Login } from "./view/Login/Login";
import { UserDetail } from "./view/UserDetail/UserDetail";
import { NewDetail } from "./view/NewDetail/NewDetail";
import { NotFound } from "./view/NotFound/NotFound";
import { Register } from "./view/Register/Register";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { ValidationCode } from "./view/ValidationCode/ValidationCode";
import { CreateNew } from "./view/CreateNew/CreateNew";
import { EditNew } from "./view/EditNew/EditNew";
import { RecoveryPassword } from "./view/RecoveryPassword/RecoveryPassword";
import { EditUser } from "./view/EditUser/EditUser";
import { EditPassword } from "./view/EditPassword/EditPassword";
function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/user/:idUser" element={<UserDetail />}></Route>
        <Route path="/user/:idUser/edit" element={<EditUser />}></Route>
        <Route path="/new/:idNew" element={<NewDetail />}></Route>
        <Route path="/register" element={<Register />}></Route>
        <Route path="/edit/:idNew" element={<EditNew />}></Route>
        <Route path="/createnew" element={<CreateNew />}></Route>
        <Route path="/user/:idUser/password" element={<EditPassword />}></Route>
        <Route
          path="/user/validate/:registrationCode"
          element={<ValidationCode />}
        ></Route>
        <Route
          path="/user/recoverypassword"
          element={<RecoveryPassword />}
        ></Route>
        <Route path="*" element={<NotFound />}></Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
