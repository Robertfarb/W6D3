const APIUtil = require("./api_util.js");

class UsersSearch {
  constructor(el) {
    this.$el = $(el);
    this.$input = $(".users-search input");
    this.$ul = $("ul.users");
    this.handleInput();
    // debugger
  }
  
  handleInput() {
    this.$input.on("input", (e) => {
      // debugger
      let $val = this.$input.val();
      let $result = APIUtil.searchUsers($val, this.renderResults.bind(this));
    });
  }
  
  renderResults(users) {
    // debugger
    this.$ul.empty();
    users.forEach((el) => {
      let $li = $(`<li>${el.username}</li>`);
      this.$ul.append($li);
    });
  }
  
}

module.exports = UsersSearch;