import React, {useState, useEffect} from "react";
import styled from "styled-components";
import TimelinePost from "./timeline-post.module";

const Timeline = () => {
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [photos, setPhotos] = useState([]);
    const [users, setUsers] = useState([]);

    const limit = 5;
    
    // Nota: O array [] deps vazio significa
    // este useEffect será executado uma vez
    // semelhante ao componentDidMount()
    useEffect(async () => {
        const photosReq = await fetch(`https://picsum.photos/v2/list?page=1&limit=${limit}`);
        const photosList = await photosReq.json();

        const usersReq = await fetch(`https://randomuser.me/api/?results=${limit}`);
        const usersList = await usersReq.json();

        if(photosList) {
            setIsLoaded(true);
            setPhotos(photosList);
        }else {
            setIsLoaded(true);
            setError(error);
        }

        if(usersList) {
            setIsLoaded(true);
            setUsers(usersList.results);
        }else {
            setIsLoaded(true);
            setError(error);
        }
    }, [])
        
    if (error) {
        return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
        return <div>Loading...</div>;
    } else {
        // console.log(photos);
        return (
            <TimelineModule>
                {users.map((user, index) => (
                    <TimelinePost key={index} user={user} photo={photos[index]} />
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
border-top: 1px solid rgba(0,0,0,0.15);
`;

export default Timeline;