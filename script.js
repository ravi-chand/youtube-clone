const videoData = [
    {
      title: "Video 1",
      thumbnail: "https://via.placeholder.com/150",
      videoUrl: "https://www.youtube.com/embed/tgbNymZ7vqY",
    },
    {
      title: "Video 2",
      thumbnail: "https://via.placeholder.com/150",
      videoUrl: "https://youtu.be/_vktceH8ZA0?si=8PoFdxceS-xWzCz8",
    },
    {
      title: "Video 3",
      thumbnail: "https://via.placeholder.com/150",
      videoUrl: "https://youtu.be/y1-w1kUGuz8?si=8DO_RZ6t8RPITp8_",
    },
    {
      title: "Video 4",
      thumbnail: "https://via.placeholder.com/150",
      videoUrl: "https://www.youtube.com/embed/tgbNymZ7vqY",
    },
  ];
  
  const videoListContainer = document.querySelector(".video-list");
  
  videoData.forEach((video, index) => {
    const videoItem = document.createElement("div");
    videoItem.classList.add("video-item");
    videoItem.innerHTML = `
      <img src="${video.thumbnail}" alt="Thumbnail">
      <h4>${video.title}</h4>
    `;
    videoItem.addEventListener("click", () => {
      document.getElementById("video-frame").src = video.videoUrl;
    });
    videoListContainer.appendChild(videoItem);
  });
  