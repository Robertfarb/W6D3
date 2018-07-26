APIUtil = require ('./api_util.js');

class FollowToggle {
  
  constructor(el){
    this.$el = $(el);
    this.$userId = this.$el.data("user-id");
    this.$FollowState = this.$el.data("initial-follow-state");
    // debugger
    this.render();
    this.handleClick();
  }
  
  render() {
    if (this.$FollowState === 'unfollowed') {
      // debugger
      this.$el.text("Follow!");
    } else {
      this.$el.text("Unfollow!");
    }
  }
  
  handleClick() {
    this.$el.on("click", (e) => {
      e.preventDefault();
      let $button = $(e.currentTarget);
      // debugger
      $button.attr("disabled", true);
      if (this.$FollowState === 'unfollowed') {
        APIUtil.followUser(this.$userId).
        then( () => {
          $button.attr("disabled", false);
          this.toggleFollowState();  
        });
      } else {
        APIUtil.unfollowUser(this.$userId).
        then( () => {
          $button.attr("disabled", false);
          this.toggleFollowState();
        });
      }
    });
  }
  
  toggleFollowState() {
    if (this.$FollowState === 'followed') {
      this.$FollowState = 'unfollowed';
    } else {
      this.$FollowState = 'followed';
    }
    
    
    this.render();
  }
}



module.exports = FollowToggle;