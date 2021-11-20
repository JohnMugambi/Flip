var postsBtn = document.getElementById('posts-btn');
var notificationsBtn =  document.getElementById('notifications-btn');
var savedBtn =  document.getElementById('saved-btn');

var profilePosts = document.getElementById('profile-posts');
var profileNotifications =  document.getElementById('profile-notifications');
var savedPosts =  document.getElementById('saved-posts');

//navigate the profile posts, notification and saved sections
postsBtn.addEventListener("click", function(){
    document.getElementById("profile-posts").style.display='block';
    document.getElementById("profile-notifications").style.display='none';
    document.getElementById("saved-posts").style.display='none';
    postsBtn.classList.add("active");
    notificationsBtn.classList.remove("active");
    savedBtn.classList.remove("active");
});
notificationsBtn.addEventListener("click", function(){
    document.getElementById("profile-posts").style.display='none';
    document.getElementById("profile-notifications").style.display='block';
    document.getElementById("saved-posts").style.display='none';
    notificationsBtn.classList.add("active");
    postsBtn.classList.remove("active");
    savedBtn.classList.remove("active");
  
});
savedBtn.addEventListener("click", function(){
    document.getElementById("profile-posts").style.display='none';
    document.getElementById("profile-notifications").style.display='none';
    document.getElementById("saved-posts").style.display='block';
    savedBtn.classList.add("active");
    notificationsBtn.classList.remove("active");
    postsBtn.classList.remove("active");
});
