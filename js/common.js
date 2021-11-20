//side nav menu buttons
var menuButton = document.getElementById('menu-burger');
var sideNav = document.getElementById('mobile-sidenav');
menuButton.addEventListener('click', function(){
  sideNav.classList.toggle("menu-active");
  friendsSideNav.classList.remove("friends-active");

});

var friendsMenuButton = document.getElementById('friends-menu-btn');
var friendsSideNav = document.getElementById('friends-sidenav');
friendsMenuButton.addEventListener('click', function(){
  friendsSideNav.classList.toggle("friends-active");
  sideNav.classList.remove("menu-active");
});

//more button in sidenav
var moreBtn = document.getElementById('morebtn');
moreBtn.addEventListener('click', function(){
var popUp = document.getElementById('pop-up');
if (popUp.style.display === "none") {
    popUp.style.display = "flex";
  } else {
    popUp.style.display = "none";
}});



//Liking a users posts
var likeBtn = document.getElementById('like-btn');
for (let i = 0; i < likeBtn.length; i++) {
  likeBtn[i].addEventListener("click", function() {
    //this.classList.toggle("active");
    //toggles the red color of the like button
    likeBtn.classList.toggle('active-like');

});
}

likeBtn.addEventListener('click', function(){
    // likeBtn.classList.toggle('active-like');
});