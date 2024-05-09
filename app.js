// async function getJson() {} YAPMAYI UNUTMA

fetch("data.json")
  .then((response) => response.json())
  .then((data) => {
    const categories = data.categories;
    const tweets = data.tweets;
    const users = data.users;

    categories.forEach((cat) => {
      console.log(cat.categoryName);

      const container = document.getElementById("container");
      const categorydiv = document.createElement("div");
      categorydiv.textContent = "#" + cat.categoryName;

      tweets.forEach((tweet) => {
        if (tweet.categoryId === cat.id) {
          console.log("tweetid:", tweet.id, "user:", tweet.userId);
          currentUser = users.find((user) => user.id === tweet.userId);

          const tweetdiv = document.createElement("div");

          const img = document.createElement("img");
          img.src = currentUser.userPhoto;
          tweetdiv.appendChild(img);
          tweetdiv.textContent =
            currentUser.userName +
            " " +
            currentUser.name +
            " " +
            currentUser.userName +
            " " +
            tweet.textContent;
          tweetdiv.appendChild(img);
          tweetdiv.classList.add("tweet");
          categorydiv.appendChild(tweetdiv);
        }
      });

      categorydiv.classList.add("category");
      container.appendChild(categorydiv);
    });
  });
