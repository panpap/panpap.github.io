$(document).ready(function(){
//	$('#linkedin').hover(function() {
//	  $(this).attr('src', 'http://www.linkedin.com/img/webpromo/btn_myprofile_160x33.png');
//	}, function() {
//	  $(this).attr('src', 'images/btn_myprofile_without.png');
//	});

//$(function () {
  $("#linkedin").hover(function() {
    $(this).css('border', "solid 0.2px #E00000");  
  }, function() {
    $(this).css('border', 'none');
});

  $("#slideshare").hover(function() {
    $(this).css('border', "solid 0.2px #E00000");  
  }, function() {
    $(this).css('border', 'none');
});
});
