import React from 'react';
import { useNavigate } from 'react-router-dom';

const Logout = () => {
    const navigate = useNavigate();

    const handleLogout = () => {
        window.localStorage.removeItem('token'); // Удаление токена из localStorage
        navigate('/login'); // Перенаправление на страницу входа или другое действие
    };

    return (
        <button onClick={handleLogout}>Выйти</button>
    );
};

export default Logout;