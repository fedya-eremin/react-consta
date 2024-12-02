import { useState } from "react";
import {Button} from "@consta/uikit/Button"
import Header from "../../components/header/Header";
import {Informer} from "@consta/uikit/Informer"
import { login } from "../../store/api-methods";
import { useDispatch, useSelector } from "react-redux";
import { selectUser, setUser } from "../../store/store";
import { useNavigate } from "react-router-dom";
import Footer from "../../components/footer/Footer";


const SignIn = () => {
  const [formData, setFormData] = useState({
    username: '',
    password: ''
  });
  const navigate = useNavigate()

  const dispatch = useDispatch();

  const [invalidInput, setInvalidInput] = useState(false);


  function updateFormData (e) {
    const {name, value} = e.target;
    setFormData({...formData, [name]: value})
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (!formData.username && !formData.password) {
      setInvalidInput(true)
      return
    } else {
      setInvalidInput(false)
    }
    login(formData.username, formData.password).then((res) => {
      dispatch(setUser(res))
      localStorage.setItem("jwt", res.accessToken)
      localStorage.setItem("refresh", res.refreshToken)
      navigate("/")
    }).catch(() => {
      setInvalidInput(true)
    })
  }

  return (
    <>
      <Header />
      <main style={{ display: "flex", justifyContent: "center"}}>
        <form style={{display: "flex", flexDirection: "column", width: "500px", alignItems: "start"}} onSubmit={handleSubmit}>
          <label>
            Username
            <input type="text" name="username" onChange={updateFormData}/>
          </label>
          <label>
            Password
            <input type="password" name="password" onChange={updateFormData}/>
          </label>
          <Button label="Sign In" type="submit" />
          { invalidInput ? 
            <Informer status="alert" view="filled" label="Заполните поля"/>
          : null}
        </form>
      </main>
      <Footer />
    </>
  )

}

export default SignIn;
