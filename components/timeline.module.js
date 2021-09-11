import React, {useState, useEffect, useContext} from "react";
import AbortController from "abort-controller";
import { Context } from "../context/common.context";

import styled from "styled-components";
import StoriesList from './stories-list.module';
import TimelinePost from "./timeline-post.module";

const Timeline = () => {
    const {isLoaded, setIsLoaded} = useContext(Context);

    const [posts, setPosts] = useState([]);
    const [api, setApi] = useState(0);

    const limit = 5;

    const controller = new AbortController();
    const signal = controller.signal;

    Promise.all([
    fetch(`https://picsum.photos/v2/list?limit=${limit}`,{
        method: "get",
        signal: signal
    }),
    fetch(`https://randomuser.me/api/?results=${limit}`,{
        method: "get",
        signal: signal
    }),
    ]).then(async ([arrPhotos, arrUsers]) => {
        const noLoop = promise => promise;
        setApi({
            "photos": {
                "state": noLoop(arrPhotos).ok,
                "data": await noLoop(arrPhotos).json()
            },
            "users": {
                "state": noLoop(arrUsers).ok,
                "data": await noLoop(arrUsers).json()
            }
        });
    }).catch((err) => {
        console.log(err);
    });

    if(typeof api != "number" && (api.photos.state && api.users.state)) {
        // console.log("abort");
        controller.abort();
    }

    useEffect(async () => {
        
        if(typeof api != "number" && (api.photos.state && api.users.state)) {
            console.log("api timeline ok");

            const arrUsers = api.users.data.results;
            const arrPhotos = api.photos.data;
            
            setPosts([]);

            arrUsers.map((user, index)=>{
                const obj = {
                    id: index,
                    username: user.login.username,
                    avatar: user.picture.thumbnail,
                    id_user: user.login.salt,
                    data: {
                        image: arrPhotos[index].download_url,
                        description: `Nostrud amet veniam aliqua duis consequat consectetur quis minim id fugiat.`
                    }
                }

                setPosts(posts => [...posts, obj]);
            });
        }

        if(posts.length == 0) {
            setIsLoaded(true);
        }
    }, [api]);
        
    if (!isLoaded) {
        return <div>Loading...</div>;
    } else {
        return (
            <TimelineModule>
                <StoriesList />
                
                {posts.map((post, index) => (
                    <TimelinePost key={index} post={post} />
                ))}
            </TimelineModule>
        );
    }
}
            
const TimelineModule = styled.div`
width: 100%;
float: left;
flex: 1 1 10em;
display: flex;
flex-wrap: wrap;
align-items: flex-start;
align-content: flex-start;
max-height: 100%;
overflow: auto;
`;

export default Timeline;