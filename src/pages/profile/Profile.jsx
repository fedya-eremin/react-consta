import React, { useCallback, useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectUser, setUser } from '../../store/store';
import { getMe } from '../../store/api-methods';
import Header from '../../components/header/Header';
import Footer from '../../components/footer/Footer';

const UserProfile = () => {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);

  const fetchUserData = useCallback(async () => {
    setLoading(true);
    try {
      const userData = await getMe(
        localStorage.getItem("jwt"),
        localStorage.getItem("refresh")
      );
      dispatch(setUser(userData));
    } catch (error) {
      console.error("Ошибка при получении данных пользователя:", error);
    } finally {
      setLoading(false);
    }
  }, [dispatch]);

  useEffect(() => {
    fetchUserData();
  }, [fetchUserData]);

  if (loading) {
    return <div>Загрузка...</div>;
  }

  return (
    <>
    <Header />
    <div style={{marginTop: "70px", display: "flex", justifyContent: "center"}}>
      <div>
      <h1>Профиль пользователя</h1>
        <img src={user.image} alt={`${user.firstName} ${user.lastName}`} className="profile-image" />
        <h2>{`${user.firstName} ${user.lastName}`}</h2>
        <p><strong>Имя пользователя:</strong> {user.username}</p>
        <p><strong>Электронная почта:</strong> {user.email}</p>
        <p><strong>Пол:</strong> {user.gender}</p>
      </div>
    </div>
    <Footer />
    </>
  );
};

export default UserProfile;

