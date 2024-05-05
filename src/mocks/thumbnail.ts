export const mockThumbnails = () => {
  const thumbnails = [
    "https://demo.themeum.com/plugins/tutor/wp-content/uploads/2019/04/1_0005_15.jpg",
    "https://demo.themeum.com/plugins/tutor/wp-content/uploads/2019/04/1_0007_13.jpg",
    "https://demo.themeum.com/plugins/tutor/wp-content/uploads/2019/04/1_0016_4.jpg",
    "https://demo.themeum.com/plugins/tutor/wp-content/uploads/2019/03/1_0001_19.jpg",
    "https://demo.themeum.com/plugins/tutor/wp-content/uploads/2019/03/1_0003_17.jpg",
    "https://demo.themeum.com/plugins/tutor/wp-content/uploads/2019/03/1_0018_2.jpg",
  ];
  return thumbnails[Math.floor(Math.random() * thumbnails.length)];
};
