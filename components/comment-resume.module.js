import styled from "styled-components";

const CommentResume = ({post}) => {
    return (
        <CommentResumeModule>
            <strong>{post.username}</strong> {post.data.description}
        </CommentResumeModule>
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
        display: flex;
        align-items: center;

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
`;

export default CommentResume;