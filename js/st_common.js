	$(document).ready(function(){
		// GNB
		if(a_num==-1){
			$('#nav > ul > li').on('mouseenter',function(){
				$(this).find('div').stop();
				$(this).addClass('on');
				$(this).find('div').slideDown("fast");
			}).on('mouseleave',function(){
				$(this).find('div').stop();
				$(this).removeClass('on');
				$(this).find('div').slideUp("fast");
			});
		}else {
			$('#nav > ul > li').on('mouseenter',function(){	
				$("#nav > ul > li").removeClass("on");
				$("#nav > ul > li").find('div').hide();
				$(this).addClass('on');
				$(this).find('div').show();
			}).on('mouseleave',function(){
				$(this).removeClass("on");
				$(this).find('div').hide();
				$("#nav > ul > li").eq(a_num).addClass("on");
				$("#nav > ul > li").eq(a_num).find('div').show();
			});
			if(a_num>-1){
				$("#nav > ul > li").eq(a_num).addClass("on");
				$("#nav > ul > li").eq(a_num).find('div').slideDown();
				$("#nav > ul > li").eq(a_num).find('li').eq(b_num).addClass("on");
			}
		}
		//GNB end

		// TOP��ư
		$(window).scroll(function () {
			if ($(this).scrollTop() > 100) {
				$('#top').fadeIn();
			}else {
				$('#top').fadeOut();
			}
		});
		$('#top').click(function () {
			$('body,html').animate({
				scrollTop: 0
			},400);
			return false;
		});
	});