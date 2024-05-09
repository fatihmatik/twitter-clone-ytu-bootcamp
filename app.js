// async function getJson() {}

fetch("data.json")
  .then((response) => response.json())
  .then((data) => {
    // Get the categories array from the JSON data
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
          tweetdiv.textContent =
            "User:@" + currentUser.userName + " post:" + tweet.id;
          categorydiv.appendChild(tweetdiv);
        }
      });

      // Append the newly created div to the container
      container.appendChild(categorydiv);
    });
  });
// const div = document.createElement("div");
// div.innerHTML = element.categoryName;
// div.appendChild(div);
