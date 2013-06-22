$(function(){
	$('#evoCarousel').carousel()
	$("body").on('click', "#product_thumbs img", function(){
		var pic = $(this).attr('data-pic');
		$("#product_thumbs_large").attr('src', pic);
	});

	
	//$("#all-products").masonry({itemSelector:'.span3'});
	var masonry = false;

	$("body").on('click', '#all-more', function(){
		var location = window.location.href.substr(window.location.href.length-1, 1) == "/"  ? window.location.href.substr(0,window.location.href.length-1) : window.location.href;
		var url = location + '/all';
		var last = $("#all-products > div:last");
		var since;
		if(last.length > 0){
			since = last.attr('data-id');
			url += '/since/' + since;
		}
		$.getJSON(url, function(res){
			if(res.length < 10){
				$('#all-more').hide();
			}
			var html = '';
			res.forEach(function(item){
				var data = [
				'<div class="span3" data-id="'+item._id+'">'+
				'<img src="/files/medium_'+item.gallery[0]+'">'+
				'<a href="'+location + '/' + item.name.replace(/ /g, '-').toLowerCase()+'"><h4>'+item.name+'</h4></a>'+
				'<h5>'+item.price+'</h5></div>'
				]
				html += data.join('');
			});
			html = $(html);
			console.log(html);
			$("#all-products").append(html);
			if(masonry == false){
				$("#all-products").imagesLoaded(function(){
					$("#all-products").masonry({itemSelector:'.span3'})
					masonry = true;
				});
			}else
			$("#all-products").imagesLoaded(function(){
				$("#all-products").masonry('reload');
			});
			//window.scrollTo(0,document.body.scrollHeight);
			
		});
	});
	var scrolling = false;
	$(window, 'html').scroll(function (e) {
		var page_height = document.body.scrollHeight;
		var current_position = window.pageYOffset;
	});
	$('#all-more').trigger('click');
});
