import React, { useEffect, useState, useContext } from "react";
import styled from "styled-components";
import AbortController from "abort-controller";
import { Context } from "../context/common.context";

const StoriesList = () => {
    const { isLoaded, setIsLoaded } = useContext(Context);
    const [stories, setStories] = useState([]);
    const [api, setApi] = useState(0);

    const limit = 8;

    const controller = new AbortController();
    const signal = controller.signal;

    Promise.all([
    fetch(`https://randomuser.me/api/?results=${limit}`,{
        method: "get",
        signal: signal
    }),
    ]).then(async ([arrUsers]) => {
        const noLoop = promise => promise;
        setApi({
            "users": {
                "state": noLoop(arrUsers).ok,
                "data": await noLoop(arrUsers).json()
            }
        });
    }).catch((err) => {
        console.log(err);
    });

    if(typeof api != "number" && (api.users.state)) {
        // console.log("abort");
        controller.abort();
    }

    useEffect(async () => {
        if(typeof api != "number" && (api.users.state)) {
            console.log("api stories ok");

            const arrUsers = api.users.data.results;
            
            setStories([]);

            arrUsers.map((user, index)=>{
                const obj = {
                    id: index,
                    username: user.login.username,
                    avatar: user.picture.thumbnail,
                    id_user: user.login.salt
                }

                setStories(stories => [...stories, obj]);
            });
        }

        if(stories.length == 0) {
            setIsLoaded(true);
        }
    }, [api]);

    if (!isLoaded) {
        return <div>Loading...</div>;
    } else {
        return (
            <StoriesListModule>
                {stories.map((story, index) => (
                    <StoriesListModule__item key={index} title={story.username}>
                        <StoriesListModule__itemImage loading={'lazy'} src={story.avatar} />
                        <StoriesListModule__itemUsername>{story.username}</StoriesListModule__itemUsername>
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