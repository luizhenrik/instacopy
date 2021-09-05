import React, {useState, useEffect} from "react";
import styled from "styled-components";
import TimelinePost from "./timeline-post.module";

const Timeline = ({posts}) => {
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [items, setItems] = useState([]);
    
    // Nota: O array [] deps vazio significa
    // este useEffect será executado uma vez
    // semelhante ao componentDidMount()
    useEffect(() => {
        fetch("https://picsum.photos/v2/list?page=1&limit=50")
        .then(res => res.json())
        .then(
            (result) => {
                setIsLoaded(true);
                setItems(result);
            },
            // Nota: é importante lidar com errros aqui
            // em vez de um bloco catch() para não receber
            // exceções de erros reais nos componentes.
            (error) => {
                setIsLoaded(true);
                setError(error);
            }
            )
        }, [])
        
        if (error) {
            return <div>Error: {error.message}</div>;
        } else if (!isLoaded) {
            return <div>Loading...</div>;
        } else {
            return (
                <TimelineModule>
                    {posts.map((post, index) => (
                        <TimelinePost key={post.login.username} post={post} photo={items[index]} />
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