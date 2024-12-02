import React from "react"
import {Button} from "@consta/uikit/Button"
import {User} from "@consta/uikit/User"
import { useNavigate } from "react-router-dom"
import { useSelector } from "react-redux"
import { selectUser } from "../../store/store"

const Header = () => {
  const navigate = useNavigate();
  const user = useSelector(selectUser);

  return (
      <header style={{
        display: "flex",
        justifyContent: "space-evenly",
        alignItems: "center",
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        padding: "10px 0",
        backgroundColor: "white",
        zIndex: 1000
      }}>
        <Button label="Главная страница" onClick={() => navigate("/")} />
        {user != null ? <Button label="Услуги компании" onClick={() => navigate("/services")}  /> : null}
        {user != null ? <User name={user.username} onClick={() => navigate("/profile")} /> : null}
        {user == null ? <Button label="Вход" onClick={() => navigate("/sign_in")}  />: null}
      </header>
 )
}

export default Header;
