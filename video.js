const videos = Array.from(document.getElementsByTagName("video"));
const container = document.getElementsByClassName("myDiv")[0];

container.addEventListener("scroll", (e)=>{
    
    videos.forEach((video, index)=>{
        const height = video.getBoundingClientRect().top;

        if (height>90 && height<400)
        {
            video.play();
        }
        else
        {
            video.currentTime = 0;
            video.pause();
        }
    })

})