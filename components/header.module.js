import styled from "styled-components";
import { AddBoxOutlined, FavoriteBorderOutlined, FavoriteOutlined, ForumOutlined } from '@material-ui/icons';

const Header = () => {
    return (
        <HeaderModule>
            <HeaderModule__logo>
                <HeaderModule__logoImage src={'https://see.fontimg.com/api/renderfont4/5Y58/eyJyIjoiZnMiLCJoIjo2NSwidyI6MTAwMCwiZnMiOjY1LCJmZ2MiOiIjMDAwMDAwIiwiYmdjIjoiI0ZGRkZGRiIsInQiOjF9/SW5zdGFjb3B5/vegan-style-personal-use.png'}/>
            </HeaderModule__logo>

            <HeaderModule__item>
                <AddBoxOutlined />
            </HeaderModule__item>
            <HeaderModule__item>
                <FavoriteBorderOutlined />
            </HeaderModule__item>
            <HeaderModule__item>
                <ForumOutlined />
            </HeaderModule__item>
        </HeaderModule>
    );
}

const HeaderModule = styled.div`
    width: 100%;
    float: left;
    display: flex;
    flex-wrap: wrap;
    padding: 10px;
`;

const HeaderModule__logo = styled.a`
    width: 90px;
    float: left;
    /* background-color: red; */
    margin-right: auto;
`;

const HeaderModule__logoImage = styled.img`
    width: 100%;
    float: left;
    height: auto;
`;

let size_item = 28;
let font_size_item = size_item * 80 / 100;
const HeaderModule__item = styled.a`
    width: ${size_item}px;
    height: ${size_item}px;
    float: left;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: ${font_size_item}px;
    margin-left: 15px;
`;

export default Header;