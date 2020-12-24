$(document).ready(function(){
'use strict';

$('.hover').hover(function(){
$(this).addClass('flip');

},function(){

	$(this).removeClass('flip');

});


});