import React, { useCallback, useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectUser, setUser } from '../../store/store';
import { getMe } from '../../store/api-methods';
import Header from '../../components/header/Header';

const UserProfile = () => {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true); // Состояние загрузки

  const fetchUserData = useCallback(async () => {
    setLoading(true); // Устанавливаем состояние загрузки в true
    try {
      const userData = await getMe(
        localStorage.getItem("jwt"),
        localStorage.getItem("refresh")
      );
      dispatch(setUser(userData));
    } catch (error) {
      console.error("Ошибка при получении данных пользователя:", error);
    } finally {
      setLoading(false); // Устанавливаем состояние загрузки в false после завершения
    }
  }, [dispatch]);

  useEffect(() => {
    fetchUserData();
  }, [fetchUserData]);

  if (loading) {
    return <div>Загрузка...</div>; // Отображаем сообщение о загрузке
  }

  return (
    <>
    <Header />
    <div className="user-profile">
      <h1>Профиль пользователя</h1>
      <div className="profile-info">
        <img src={user.image} alt={`${user.firstName} ${user.lastName}`} className="profile-image" />
        <h2>{`${user.firstName} ${user.lastName}`}</h2>
        <p><strong>Имя пользователя:</strong> {user.username}</p>
        <p><strong>Электронная почта:</strong> {user.email}</p>
        <p><strong>Пол:</strong> {user.gender}</p>
      </div>
    </div>
    </>
  );
};

export default UserProfile;

