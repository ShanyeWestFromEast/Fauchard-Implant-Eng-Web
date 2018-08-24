function st_page(num) {
	switch (num){
		case 11: location.href = "index.html"; break;		
		case 12: location.href = "/01about/s_2.php"; break;
		case 13: location.href = "/01about/s_3.php"; break;
		case 14: location.href = "/01about/s_4.php"; break;
		case 15: location.href = "/01about/s_5.php"; break;

		case 21: location.href = "dental-implants.html"; break;
		case 22: location.href = "/02implant/s_2.php"; break;
		case 23: location.href = "/02implant/s_3.php"; break;
		case 24: location.href = "/02implant/s_4.php"; break;
		case 25: location.href = "/02implant/s_5.php"; break;
		case 26: location.href = "/02implant/s_6.php"; break;
		case 27: location.href = "/02implant/s_7.php"; break;
		case 28: location.href = "/02implant/s_8.php"; break;
		case 29: location.href = "/02implant/s_9.php"; break;

		case 31: location.href = "cosmetic-dentistry.html"; break;
		case 32: location.href = "/03beauty/s_2.php"; break;
		case 33: location.href = "/03beauty/s_3.php"; break;
		case 34: location.href = "/03beauty/s_4.php"; break;
		
		case 41: location.href = "general-dental-care.html"; break;
		case 42: location.href = "/04clinic/s_2.php"; break;
		case 43: location.href = "/04clinic/s_3.php"; break;
		case 44: location.href = "/04clinic/s_4.php"; break;
		case 45: location.href = "/04clinic/s_5.php"; break;
		case 46: location.href = "/04clinic/s_6.php"; break;
		case 47: location.href = "/04clinic/s_7.php"; break;
		
		case 51: location.href = "/05comm/s_1.php"; break;
		case 52: location.href = "/05comm/s_2.php"; break;
		case 53: location.href = "/05comm/s_3.php"; break;

		case 61: location.href = "/06online/s_1.php"; break;
		case 62: location.href = "/06online/s_2.php"; break;	
		
		default : alert("준비중입니다"); break;
	}
}


////* 멤버페이지 ////////*/
//메인가기 -> US webpage - Add slash infront later when web is established
function goHOME() { location.href = "index.html"; }

//즐겨찾기
function book_mark() {
	var sidebarurl = "http://www.fauchardplant.co.kr"; // Change as required
	var sidebartitle = "포샤르플란트치과"; // Change as required
	var url = this.location;
	var title = "포샤르플란트치과";
	if (window.sidebar && window.sidebar.addPanel){ // Firefox 
		window.sidebar.addPanel(sidebartitle, sidebarurl,"");
	} 
	else if ( document.all ) { // IE Favorite
		window.external.AddFavorite(url, title); 
	}
	else if (navigator.appName == 'Netscape' && navigator.userAgent.search('Trident') != -1) {
		window.external.AddFavorite(url, title); 
	}
	else if (window.opera && window.print) {
		var elem = document.createElement('a');
		elem.setAttribute('href',sidebarurl);
		elem.setAttribute('title',sidebartitle);
		elem.setAttribute('rel','sidebar');
		elem.click();
	}
	else if (window.chrome) {
		alert("Ctrl+D키를 누르시면 즐겨찾기에 추가하실 수 있습니다.");
	}
	else{
		alert("해당기기에서는 작동하지 않습니다.");
	}
}

//로그아웃
function logout() { location.href = "/logout.php"; }

//로그인
function login() { location.href = "/member/login.php?refurl="+encodeURIComponent(document.location.href); }

//회원가입
function join() { location.href = "/member/join.php"; }

//마이페이지
function mypage() { location.href = "/member/mypage.php"; }

//회원정보수정
function modify() { location.href = "/member/modify.php"; }

//회원탈퇴
function secede() { location.href = "/member/secede.php"; }

//로그인 체크
function login_chk() {
	alert("개인정보보호차원에서 해당 컨텐츠는 의료법 제 56조 2항에 의거,\n\r로그인한 후 이용이 가능합니다.\n\r컨텐츠 이용을 위해 로그인을 하여 주십시오."); 
	location.href = "/member/login.php?refurl="+encodeURIComponent(document.location.href); 
}

//개인보호정책
function policy() { 
url = "/member/policy.php" ;
window.open(url,'','toolbar=no,menubar=no,location=no,directions=no, scrollbars=yes,status=yes,width=500,height=580'); 
} 

//이용약관
function rule() {
url = "/member/rule.php" ; 
window.open(url,'','toolbar=no,menubar=no,location=no,directions=no, scrollbars=yes,status=yes,width=500,height=580'); 
} 

//이메일 무단수집거부
function nospam() {
url = "/member/nospam.php" ;
window.open(url,'','toolbar=no,menubar=no,location=no,directions=no, scrollbars=yes,status=yes,width=340,height=265'); 
}

//게시물 링크
function Go_url(url,action,sel_uid){
	location.href=url+"?"+"action="+action+"&sel_uid="+sel_uid;
}

function id_Block(name){
	$("#"+name).show();
}
function id_None(name){
	$("#"+name).hide();
}

function getCookie( name ) { 
	var nameOfCookie = name + "="; 
	var x = 0; 
	while ( x <= document.cookie.length ) { 
		var y = (x+nameOfCookie.length); 
		if ( document.cookie.substring( x, y ) == nameOfCookie ) { 
			if ( (endOfCookie=document.cookie.indexOf( ";", y )) == -1 ) 
				endOfCookie = document.cookie.length; 
			return unescape( document.cookie.substring( y, endOfCookie ) ); 
		} 
		x = document.cookie.indexOf( " ", x ) + 1; 
		if ( x == 0 ) 
		break; 
	} 
	return ""; 
}
function setCookie( name, value, expiredays ) 
{ 
	var todayDate = new Date(); 
	todayDate.setDate( todayDate.getDate() + expiredays ); 
	document.cookie = name + "=" + escape( value ) + "; path=/; expires=" + todayDate.toGMTString() + ";" 
} 