const service = firebase.database().ref("posts");
let data = {};

service.on("value", function(snapshot) {
  $("#voting-board").empty(); // clear board of all posts and rerender based on what's in Firebase

  data = snapshot.val() || {}; // store data in a global variable for calculating likes/dislikes later

  // loops through the keys
  const itemKeys = Object.keys(data);
  for (let i = 0; i < itemKeys.length; i++) {
    const key = itemKeys[i];
    const item = data[key];

    // encodes the key using a data attribute
    const template = `
      <li data-key=${key}>
        ${item.name}
        <img src="img/thumbsup.jpg" class="pull-right like">
        <span class="pull-right likes">${item.likes}</span>
      </li>
    `;

    $("#voting-board").append(template);
  }
});

$("#voting-board").on("click", ".like", function() {
  const key = $(this)
    .parent() // use use "parent()" here since the data-key is on the li
    .data("key");

  service.child(key).update({
    likes: data[key].likes + 1
  });
});

