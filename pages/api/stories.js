import {GetStories, GetUserInfos} from "@api/api";

const Stories = async (req, res) => {
    // console.log(req);
    let story = [];
    const limit = req.query.limit;
    const data = await GetStories(limit);
    const user = await GetUserInfos(limit);

    for(let i = 0; i < limit; i++) {

        story = [...story, {
            storyId: data.videos[i].id,
            username: user.results[i].login.username,
            user_avatar: user.results[i].picture.thumbnail,
            userId: data.videos[i].user.id,
            data: {
                video: data.videos[i].video_files[0]
            }
        }]
    }

    res.status(200).json(story);
}

export default Stories;