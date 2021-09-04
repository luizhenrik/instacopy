import styled from "styled-components";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faComment, faHeart, faPlusSquare } from '@fortawesome/free-solid-svg-icons';
import { Head } from "next/document";

const Header = () => {
    return (
        <HeaderModule>
            <HeaderModule__logo>
                <HeaderModule__logoImage src={'https://see.fontimg.com/api/renderfont4/5Y58/eyJyIjoiZnMiLCJoIjo2NSwidyI6MTAwMCwiZnMiOjY1LCJmZ2MiOiIjMDAwMDAwIiwiYmdjIjoiI0ZGRkZGRiIsInQiOjF9/SW5zdGFjb3B5/vegan-style-personal-use.png'}/>
            </HeaderModule__logo>

            <HeaderModule__item>
                <FontAwesomeIcon icon={faPlusSquare} />
            </HeaderModule__item>
            <HeaderModule__item>
                <FontAwesomeIcon icon={faHeart} />
            </HeaderModule__item>
            <HeaderModule__item>
                <FontAwesomeIcon icon={faComment} />
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
    width: 125px;
    float: left;
    /* background-color: red; */
    margin-right: auto;
`;

const HeaderModule__logoImage = styled.img`
    width: 100%;
    float: left;
    height: auto;
`;

let size_item = 36;
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