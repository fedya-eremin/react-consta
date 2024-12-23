import React from "react"
import {Button} from "@consta/uikit/Button"
import { useNavigate } from "react-router-dom"
import { useSelector } from "react-redux"
import { selectUser } from "../../store/store"

const Footer = () => {
  const navigate = useNavigate();
  const user = useSelector(selectUser);

  return (
    <footer style={{
      display: "flex",
      justifyContent: "space-evenly",
      alignItems: "center",
      position: "fixed",
      bottom: 0,
      left: 0,
      right: 0,
      padding: "10px 0",
      backgroundColor: "white"
    }}>
        <Button label="Главная страница" onClick={() => navigate("/")} />
        {user != null ? <Button label="Услуги компании" onClick={() => navigate("/services")} /> : null}
      <div>
        {user ? (
          <p style={{ margin: 0 }}>Добро пожаловать, {user.username}!</p>
        ) : (
          <p style={{ margin: 0 }}>© 2024 Все права защищены.</p>
        )}
      </div>
    </footer>
  )
}

export default Footer;

