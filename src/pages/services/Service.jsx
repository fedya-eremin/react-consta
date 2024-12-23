import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import MyCard from '../../components/card/Card'; 
import Header from '../../components/header/Header';
import Footer from '../../components/footer/Footer';

const ServiceDetail = () => {
  const { id } = useParams();
  const [service, setService] = useState();

  useEffect(() => {
    fetch(`https://673423afa042ab85d1190055.mockapi.io/api/v1/services/${id}`)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setService(data);
      })
      .catch((error) => {
        console.error('Error fetching the service:', error);
      });
  }, [id]);

  return (
    <>
      <Header />
      <div style={{marginTop: "70px"}}>
      {service ? (
        <MyCard 
          imgURI={service.image} 
          name={service.name} 
          desc={service.description} 
          id={service.id} 
        />
      ) : (
        <div>Услуга не найдена.</div>
      )}
      </div>
      <Footer />
    </>
  );
};

export default ServiceDetail;

