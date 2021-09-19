import { createClient } from 'pexels';

const pexels_client = createClient(process.env.PEXELS_KEY);


export const GetUserInfos = async (limit) => {
    limit = limit || 1;

    const json = fetch(`https://randomuser.me/api/?results=${limit}`).then(response => response.json()).catch(err => console.log(err));

    return json;
}

export const GetDescriptionPost = async () => {
    const json = fetch(`https://baconipsum.com/api/?type=all-meat&paras=1`).then(response => response.json()).catch(err => console.log(err));

    return json;
}

export const GetImagePost = async (limit) => {
    limit = limit || 1;

    const json = pexels_client.photos.search({ 
        query: "Nature", 
        per_page: limit,
        orientation: "square",
        total_results: limit,
        size: "small"
    }).then(photos => photos);

    return json;
}

export const GetStories = async (limit) => {
    limit = limit || 1;

    const json = pexels_client.videos.search({ 
        query: "Nature", 
        per_page: limit,
        orientation: "portrait",
        total_results: limit,
        size: "small"
    }).then(stories => stories);

    return json;
}