
$(document).ready(function(){
    // ���� �����̵� ����
    $('.slider').bxSlider({
        auto: true,
		autoHover: true,
        autoControls: true,
		autoControlsCombine: true,
		autoHover: true,
		oneToOneTouch: false,
		speed : 500,
		pause : 5500
    });

	$('.hover-change-img').on('mouseenter focusin',function(){
		$(this).find('.hover-img').addClass('is-visible');
	}).on('mouseleave focusout',function(){
		$(this).find('.hover-img').removeClass('is-visible');
	});
});
