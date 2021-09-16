import styled from 'styled-components';
import { HomeOutlined, SearchOutlined, VideoLibraryOutlined, LocalMallOutlined, AccountCircleOutlined } from '@material-ui/icons';

const NavBarBottom = () => {
    return (
        <NavBar>
            <NavBar__item>
                <HomeOutlined />
            </NavBar__item>
            <NavBar__item>
                <SearchOutlined />
            </NavBar__item>
            <NavBar__item>
                <VideoLibraryOutlined />
            </NavBar__item>
            <NavBar__item>
                <LocalMallOutlined />
            </NavBar__item>
            <NavBar__item>
                <AccountCircleOutlined />
            </NavBar__item>
        </NavBar>
    )
}

const NavBar = styled.div`
    width: 100%;
    float: left;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px;
`;

let size_item = 28;
let font_size_item = size_item * 80 / 100;
const NavBar__item = styled.a`
    width: ${size_item}px;
    height: ${size_item}px;
    float: left;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: ${font_size_item}px;
`;

export default NavBarBottom;