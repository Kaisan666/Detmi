import Header from "../components/headers/header";
//import HeaderJs from "../components/headers/headerJS";
//import HeaderPY from "../components/headers/headerPython";
//import HeaderCPP from "../components/headers/headerCPP";
import Footer from "../components/footer/footer";
import styles from '../styles/UserProfile.module.css';
import { NavLink } from 'react-router-dom';
import React, { useState } from 'react';


function UserProfile() {
    
    const [nickname, setNickname] = useState('User123');
    const [editNickname, setEditNickname] = useState(false);
    const [profilePic, setProfilePic] = useState(null);

    const handleNicknameChange = (event) => {
        setNickname(event.target.value);
    };

    const toggleEditNickname = () => {
        setEditNickname(!editNickname);
    };

    const handleProfilePicChange = (event) => {
        if (event.target.files && event.target.files[0]) {
            const reader = new FileReader();
            reader.onload = (e) => {
                setProfilePic(e.target.result);
            };
            reader.readAsDataURL(event.target.files[0]);
        }
    };

    return (

        <div className={styles.container}>
            <Header/>
            <h1>Личный Кабинет</h1>
            <div className={styles.profileSection}>
                <div className={styles.profilePic}>
                    <img src={profilePic || 'https://via.placeholder.com/150'} alt="Profile" />
                    <input type="file" onChange={handleProfilePicChange} />
                </div>
                <div className={styles.nicknameSection}>
                    {editNickname ? (
                        <input 
                            type="text" 
                            value={nickname} 
                            onChange={handleNicknameChange}
                            onBlur={toggleEditNickname} 
                        />
                    ) : (
                        <h2 onClick={toggleEditNickname}>{nickname}</h2>
                    )}
                </div>
            </div>
            <Footer/>
        </div>
    );
}

export default UserProfile;
