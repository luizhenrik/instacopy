import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faSearch, faPlayCircle, faShoppingBag, faUser } from '@fortawesome/free-solid-svg-icons';


const NavBarBottom = () => {
    return (
        <NavBar>
            <NavBar__item>
                <FontAwesomeIcon icon={faHome} />
            </NavBar__item>
            <NavBar__item>
                <FontAwesomeIcon icon={faSearch} />
            </NavBar__item>
            <NavBar__item>
                <FontAwesomeIcon icon={faPlayCircle} />
            </NavBar__item>
            <NavBar__item>
                <FontAwesomeIcon icon={faShoppingBag} />
            </NavBar__item>
            <NavBar__item>
                <FontAwesomeIcon icon={faUser} />
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

let size_item = 36;
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