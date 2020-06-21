"use strict";

$(document).ready(function () {
  $('.operation-toggle').on('click', function (e) {
    $('.operation-wrapper').toggleClass('open');
  }); // console.log(location.href);

  function getLocation() {
    return location.pathname;
  }

  if (getLocation() == '/index.html') {
    var link = document.querySelectorAll('.nav-item')[2];
    link.classList.add('active');
  } else if (getLocation() == '/admin.html') {
    var _link = document.querySelectorAll('.nav-item')[4];

    _link.classList.add('active');
  }
});
//# sourceMappingURL=all.js.map
