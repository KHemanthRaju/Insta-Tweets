export const sortOptions = {
  Latest: "Latest Posts",
  Oldest: "Oldest Posts",
  Trending: "Trending Posts",
};

export const getSortedPosts = (posts, sortBy) => {
  console.log(posts);
  switch (sortBy.toUpperCase()) {
    case "LATEST":
      return [...posts].sort(
        (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
      );
    case "OLDEST":
      return [...posts].sort(
        (a, b) => new Date(a.createdAt) - new Date(b.createdAt)
      );
    default:
      return [...posts];
  }
};
