let FollowToggle = require("./follow_toggle.js");
let UsersSearch = require("./users_search.js");

$( () => {
  let $buttons = $(".follow-toggle");
  $buttons.each((idx, el) => {
    new FollowToggle(el);
  });
});

$( () => {
  let $searchItems = $(".users a");
  $searchItems.each((idx, el) => {
    new UsersSearch(el);
  });
});


// if ($el.data === "followed") {
//   $el.text("Unfollow!");
// } else {
//   $el.data("initial-follow-state", "unfollowed");
//   $el.text("Follow!");
//   alert('test');
// }
