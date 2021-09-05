import React, { useEffect, useState } from "react";
import styled from "styled-components";

const StoriesList = () => {
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [users, setUsers] = useState([]);

    const limit = 8;

    useEffect(async () => {
        const res = await fetch(`https://randomuser.me/api/?results=${limit}`);
        const usersList = await res.json();

        if(usersList) {
            setIsLoaded(true);
            setUsers(usersList.results);
        }else {
            setIsLoaded(true);
            setError(error);
        }
    }, []);

    if (error) {
        return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
        return <div>Loading...</div>;
    } else {
        return (
            <StoriesListModule>
                {users.map((user, index) => (
                    <StoriesListModule__item key={index} title={user.login.username}>
                        <StoriesListModule__itemImage src={user.picture.thumbnail} />
                        <StoriesListModule__itemUsername>{user.login.username}</StoriesListModule__itemUsername>
                    </StoriesListModule__item>
                ))}
            </StoriesListModule>
        );
    }
};

const StoriesListModule = styled.div`
    width: 100%;
    float: left;
    padding: 10px;
    overflow: auto;
    display: flex;
    flex-wrap: nowrap;
    white-space: nowrap;
`;

let size_item = 65;
const StoriesListModule__item = styled.a`
    width: ${size_item}px;
    flex: 0 1 ${size_item}px;
    min-width: ${size_item}px;
    height: ${size_item}px;
    float: left;
    border-radius: 100%;
    background: linear-gradient(45deg, #405de6, #5851db, #833ab4, #c13584, #e1306c, #fd1d1d);
    margin-left: 8px;
    position: relative;
    display: flex;
    justify-content: center;
    margin-bottom: 20px;

    &:first-child {
        margin-left: 0;
    }
`;

const StoriesListModule__itemImage = styled.img`
    width: calc(100% - 8px);
    height: calc(100% - 8px);
    float: left;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    margin: auto;
    border-radius: 100%;
`;

const StoriesListModule__itemUsername = styled.span`
    width: 100%;
    float: left;
    font-size: 12px;
    max-width: 80%;
    overflow: hidden;
    text-overflow: ellipsis;
    text-align: center;
    bottom: -20px;
    position: absolute;
    left: 0;
    right: 0;
    margin: auto;
`;

export default StoriesList;