import styled from "styled-components";
import { FavoriteBorderOutlined, FavoriteOutlined, FormatQuoteOutlined, BookmarkBorderOutlined, BookmarkOutlined, ChatOutlined, MoreVertOutlined} from '@material-ui/icons';

import CommentField from '@components/comment-field.module'
import CommentResume from '@components/comment-resume.module'

const TimelinePost = ({post}) => {
        return(
            <TimelinePost__item id={post.postId}>
                <TimelinePost__header>
                    <TimelinePost__avatar title={post.username}>
                        <TimelinePost__avatarImage alt={post.username} src={post.user_avatar} />
                    </TimelinePost__avatar>

                    <TimelinePost__infosHeader>
                        <TimelinePost__headerUsername loading={'lazy'}>{post.username}</TimelinePost__headerUsername>
                    </TimelinePost__infosHeader>

                    <TimelinePost__headerMenu>
                        <MoreVertOutlined />
                    </TimelinePost__headerMenu>
                </TimelinePost__header>

                <TimelinePost__main>
                    <TimelinePost__mainImage loading={'lazy'} alt={post.username} src={post.data.image}/>
                </TimelinePost__main>

                <TimelinePost__actions>
                    <TimelinePost__actionsItem>
                        <FavoriteBorderOutlined />
                    </TimelinePost__actionsItem>
                    <TimelinePost__actionsItem>
                        <ChatOutlined />
                    </TimelinePost__actionsItem>
                    <TimelinePost__actionsItem>
                        <FormatQuoteOutlined />
                    </TimelinePost__actionsItem>
                    <TimelinePost__actionsItem className={'is-align-right'}>
                        <BookmarkBorderOutlined />
                    </TimelinePost__actionsItem>

                    <TimelinePost__actionsText>Curtido por <strong>NomeDeUSer</strong> e <strong>outras pessoas</strong></TimelinePost__actionsText>
                </TimelinePost__actions>

                <CommentResume post={post} />

                <CommentField />
                <TimelinePost__posted>há 5 minutos <a>Ver tradução</a></TimelinePost__posted>
            </TimelinePost__item>
        )
}

const TimelinePost__item = styled.div`
    width: 100%;
    float: left;

    &:not(:first-child) {
        margin-top: 10px;
    }

    &:first-child {
        border-top: 1px solid rgba(0,0,0,0.15);
    }
`;

const TimelinePost__header = styled.div`
    width: 100%;
    float: left;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    padding: 10px;
`;

let size_item = 36;
const TimelinePost__avatar = styled.a`
    width: ${size_item}px;
    flex: 0 1 ${size_item}px;
    height: ${size_item}px;
    float: left;
    position: relative;
    border-radius: 100%;
    background: linear-gradient(45deg, #405de6, #5851db, #833ab4, #c13584, #e1306c, #fd1d1d);
    margin-right: 10px;
`;

const TimelinePost__avatarImage = styled.img`
    width: calc(100% - 3px);
    height: calc(100% - 3px);
    float: left;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    margin: auto;
    border-radius: 100%;
`;

const TimelinePost__infosHeader = styled.div`
    width: auto;
    flex: 1 1 10em;
    float: left;
`;

const TimelinePost__headerUsername = styled.h3`
    font-weight: 700;
    margin: 0;
    font-size: 14px;
`;

let size_headerMenu = 18;
let font_size_headerMenu = size_headerMenu * 80 / 100;
const TimelinePost__headerMenu = styled.a`
    width: ${size_headerMenu}px;
    height: ${size_headerMenu}px;
    float: left;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: ${font_size_headerMenu}px;
    margin-left: 15px;
`;

const TimelinePost__main = styled.div`
    width: 100%;
    float: left;
    position: relative;

    &:before {
        content: '';
        padding-bottom: 95%;
        display: block;
    }
`;

const TimelinePost__mainImage = styled.img`
    width: 100%;
    height: 100%;
    float: left;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    object-fit: cover;
`;

const TimelinePost__actions = styled.div`
    width: 100%;
    float: left;
    display: flex;
    flex-wrap: wrap;
    padding: 10px 10px 5px;
    align-items: center; 
    justify-content: space-between;
`;

let size_actionItem = 24;
let font_size_actionItem = size_actionItem * 80 / 100;
const TimelinePost__actionsItem = styled.a`
    width: ${size_actionItem}px;
    height: ${size_actionItem}px;
    float: left;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: ${font_size_actionItem}px;
    &:not(:first-child) {
        margin-left: 15px;
    }

    &.is-align-right {
        margin-left: auto;
    }
`;

const TimelinePost__actionsText = styled.span`
    width: 100%;
    float: left;
    font-size: 12px;
    margin-top: 5px;
`;

const TimelinePost__posted = styled.span`
    width: 100%;
    float: left;
    font-size: 10px;
    padding: 10px;
    color: rgba(0, 0, 0, 0.4);
    display: flex;
    align-items: center;

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

export default TimelinePost;