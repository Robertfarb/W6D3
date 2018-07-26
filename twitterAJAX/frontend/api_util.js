const APIUtil = {
  followUser: id => {
    return $.ajax ({
      url: `/users/${id}/follow`,
      method: 'POST',
      dataType: 'json',
    });
  },

  unfollowUser: id => {
    return $.ajax ({
      url: `/users/${id}/follow`,
      method: 'DELETE',
      dataType: 'json',
    });
  },
  
  searchUsers: (queryVal, callBack) => {
    return $.ajax ({
      url: "/users/search",
      method: 'GET',
      dataType: 'json',
      data: {query: queryVal},
      success: callBack
    });
  }
  
  
};


module.exports = APIUtil;
