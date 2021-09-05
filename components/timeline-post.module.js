import styled from "styled-components";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsisV } from '@fortawesome/free-solid-svg-icons';

const TimelinePost = ({user, photo}) => {
    if(!photo) {
        return false;
    }else {
        return(
            <TimelinePost__item>
                <TimelinePost__header>
                    <TimelinePost__avatar title={user.login.username}>
                        <TimelinePost__avatarImage alt={user.login.username} src={user.picture.thumbnail} />
                    </TimelinePost__avatar>

                    <TimelinePost__infosHeader>
                        <TimelinePost__headerUsername>{user.login.username}</TimelinePost__headerUsername>
                    </TimelinePost__infosHeader>

                    <TimelinePost__headerMenu>
                        <FontAwesomeIcon icon={faEllipsisV} />
                    </TimelinePost__headerMenu>
                </TimelinePost__header>

                <TimelinePost__main>
                    <TimelinePost__mainImage alt={user.login.username} src={photo.download_url}/>
                </TimelinePost__main>
            </TimelinePost__item>
        )
    }
}

const TimelinePost__item = styled.div`
    width: 100%;
    float: left;

    &:not(:first-child) {
        margin-top: 10px;
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

export default TimelinePost;