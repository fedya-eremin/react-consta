import React, { useEffect, useState } from "react";
import Header from "../../components/header/Header";
import MyCard from "../../components/card/Card";



const AllServices = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    fetch("https://673423afa042ab85d1190055.mockapi.io/api/v1/services").then((response) => {
      return response.json()
    }).then((data) => {
      setServices(data)
    })
  }, [services, setServices])

  return (
    <>
      <Header />
      <main style={{width: "80vh", margin: "auto"}}>
        <div style={{display: "flex", flexFlow: "row wrap", justifyContent: "space-between", gap: "5px"}}>
        { services.length > 0 ?
          services.map((item) => (
            <MyCard key={item.id} id={item.id} imgURI={item.image} name={item.name} desc={item.description} /> 
          ))
        : "Загрузка..."}
        </div>
      </main>
    </>
  )

}
export default AllServices;

