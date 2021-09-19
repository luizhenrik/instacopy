import {GetImagePost, GetUserInfos, GetDescriptionPost} from "@api/api";

const Posts = async (req, res) => {
    // console.log(req);
    let post = [];
    const limit = req.query.limit;
    const data = await GetImagePost(limit);
    const user = await GetUserInfos(limit);
    const description = await GetDescriptionPost();

    for(let i = 0; i < limit; i++) {

        post = [...post, {
            postId: data.photos[i].id,
            username: user.results[i].login.username,
            user_avatar: user.results[i].picture.thumbnail,
            userId: data.photos[i].photographer_id,
            data: {
                image: data.photos[i].src.medium,
                description: description[0]
            }
        }]
    }

    res.status(200).json(post);
}

export default Posts;