import React, {useState, useEffect, useContext} from "react";
import { Context } from "@context/common.context";

import styled from "styled-components";
import StoriesList from '@components/stories-list.module';
import TimelinePost from "@components/timeline-post.module";

const Timeline = () => {
    const {isLoaded, setIsLoaded} = useContext(Context);

    const [posts, setPosts] = useState([]);

    const limit = 5;

    useEffect(async () => {
        const json = fetch(`api/posts?limit=${limit}`).then(res => res).then(resp => resp.json()).catch(err=> console.log(err));
        // console.log();
        setPosts(await json);

        if(posts.length == 0) {
            setIsLoaded(true);
        }
    }, []);
        
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