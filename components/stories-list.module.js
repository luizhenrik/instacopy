import styled from "styled-components";

const StoriesList = ({users}) => {
console.log(users);
    return (
        <StoriesListModule>
            {users.map((user) => (
                <StoriesListModule__item title={user.login.username}>
                    <StoriesListModule__itemImage src={user.picture.thumbnail} />
                </StoriesListModule__item>
            ))}
        </StoriesListModule>
    );
};

const StoriesListModule = styled.div`
    width: 100%;
    float: left;
    padding: 10px;
    overflow: auto;
    display: flex;
    flex-wrap: nowrap;
    white-space: nowrap;
`;

let size_item = 75;
const StoriesListModule__item = styled.a`
    width: ${size_item}px;
    flex: 0 1 ${size_item}px;
    min-width: ${size_item}px;
    height: ${size_item}px;
    float: left;
    border-radius: 100%;
    background: linear-gradient(45deg, #405de6, #5851db, #833ab4, #c13584, #e1306c, #fd1d1d);
    margin-left: 8px;
    position: relative;
`;

const StoriesListModule__itemImage = styled.img`
    width: calc(100% - 8px);
    height: calc(100% - 8px);
    float: left;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    margin: auto;
    border-radius: 100%;
`;

export default StoriesList;