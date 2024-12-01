import React from "react"
import Header from "../../components/header/Header"
import MyCard from "../../components/card/Card"

const Home = () => {
  return (
    <>
      <Header />
      <main style={{width: "80vh", margin: "auto"}}>
        <div style={{display: "flex", flexFlow: "row wrap", justifyContent: "space-between", gap: "5px"}}>
        /*Сюда карточки*/
        </div>
      </main>
    </>
  )
}

export default Home;
