// let blogArray = []

// const getMediumFeed = () => {
//     fetch('https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fmedium.com%2Ffeed%2F%40scottespinosa')
//         .then(res => res.json())
//         .then(json => {
//             blogArray = [json.items[0].description, json.items[1].description, json.items[2]]
//             appendBlogs()
//         })
// }

// const appendBlogs = () => {
//     let blogDiv = document.querySelector('div.blogs')
//     let blogContent = blogArray[0] + blogArray[1]
//     blogDiv.innerHTML = blogContent
// }

// getMediumFeed()

$(".js-video-button").modalVideo({
    youtube:{
        controls:0,
        nocookie: true,
    }
});