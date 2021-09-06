import styled from "styled-components";

const CommentField = ({user}) => {
    return (
        <CommentFieldModule>
            <CommentFieldModule__avatar>
                <CommentFieldModule__avatarImage src={user.picture.thumbnail} />
            </CommentFieldModule__avatar>

            <CommentFieldModule__field type={'text'} placeholder={'Adicione um comentário...'} />
        </CommentFieldModule>
    );
}

const CommentFieldModule = styled.div`
    width: 100%;
    float: left;
    padding: 10px 10px 0;
    display: flex;
    align-items: center;
`;

let size_avatar = 26;
const CommentFieldModule__avatar = styled.a`
    width: ${size_avatar}px;
    flex: 0 1 ${size_avatar}px;
    height: ${size_avatar}px;
    float: left;
    position: relative;
    border-radius: 100%;
    margin-right: 10px;
`;

const CommentFieldModule__avatarImage = styled.img`
    width: 100%;
    height: 100%;
    float: left;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    margin: auto;
    border-radius: 100%;
`;

const CommentFieldModule__field = styled.input`
    width: auto;
    float: left;
    flex: 1 1 10em;
    padding: 5px;
    color: #000;
    font-size: 14px;
    border: none;

    &:focus {
        outline: none;
    }

    &::placeholder {
        opacity: 0.7;
    }
`;

export default CommentField;