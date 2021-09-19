import {GetImagePost, GetUserInfos, GetDescriptionPost} from "@api/api";

const Post = async (req, res) => {
    const data = await GetImagePost();
    const user = await GetUserInfos();
    const description = await GetDescriptionPost();

    res.status(200).json({
        postId: data.photos[0].id,
        username: user.results[0].login.username,
        user_avatar: user.results[0].picture.thumbnail,
        userId: data.photos[0].photographer_id,
        data: {
            image: data.photos[0].src.medium,
            description: description[0]
        }
    })
}

export default Post;