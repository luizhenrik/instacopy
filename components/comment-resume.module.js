import { useEffect, useState, useContext } from "react";
import styled from "styled-components";""
import Comments from "./comments.module";
import { Context } from "../context/common.context";

const CommentResume = ({post}) => {
    const {setModalCommentsOpened} = useContext(Context);

    const descriptionOriginal = `<strong>${post.username}</strong> ${post.data.description} <br><a class="no-before js-open-comments">Ver todos comentarios</a>`;

    const [isResumed, setIsResumed] = useState(false);
    const [description, setDescription] = useState(descriptionOriginal);
    const lengthLimit = 90;

    const resumedLength = () => {
        if(description.length > lengthLimit) {
            setIsResumed(true);
            setDescription(`${description.substring(0, lengthLimit)} ... <a>Ver mais</a><br><a class="no-before js-open-comments">Ver todos comentarios</a>`);
        }else {
            setIsResumed(false);
        }
    }

    useEffect(()=>{
        resumedLength();
    },[])

    const toggleResume = (e) => {
        // console.log(e.target.classList.contains("js-open-comments"));
        if(!isResumed || e.target.classList.contains("js-open-comments")) {
            setModalCommentsOpened(true);
            return false;
        }

        setIsResumed(false);
        e.currentTarget.innerHTML = descriptionOriginal;
    }

    return (
        <>
        <CommentResumeModule isResumed={isResumed} onClick={toggleResume} dangerouslySetInnerHTML={{__html: description}} />
        <Comments />
        </>
    );
};

const CommentResumeModule = styled.span`
    width: 100%;
    float: left;
    font-size: 12px;
    line-height: 1.5;   
    padding: 0 10px;
    color: #000;

    a {
        color: #000;
        display: inline-flex;
        align-items: center;

        &:not(.no-before) {
            &:before {
                content: '';
                width: 3px;
                height: 3px;
                display: inline-block;
                margin: 0 5px;
                border-radius: 100%;
                background-color: rgba(0, 0, 0, 0.4);
            }
        }
    }
`;

export default CommentResume;