$(document).ready(() => {
  $('.operation-toggle').on('click', function(e){
    $('.operation-wrapper').toggleClass('open');
  });

  // console.log(location.href);
  function getLocation() {
    return location.pathname
  }

  if (getLocation() == '/index.html') {
    let link = document.querySelectorAll('.nav-item')[2];
    link.classList.add('active');
  }else if(getLocation() == '/admin.html') {
    let link = document.querySelectorAll('.nav-item')[4];
    link.classList.add('active');
  }
});