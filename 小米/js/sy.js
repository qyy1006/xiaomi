
window.onload=function(){
	//1.购物车下拉菜单
	let cart=document.querySelector(".head_center_nav_right_cart");
	let cartLink=document.querySelector(".head_center_nav_right_cart_link");
	cart.onmouseover=function(){
		cartLink.style.height="100px";
		cart.style.backgroundColor="#fff";
		cart.style.color="#FF6700";
	}
	cart.onmouseout=function(){
		cartLink.style.height="0px";
		cart.style.backgroundColor="#424242";
		cart.style.color="#b0b0b0";
	}

	//2.选项卡的下拉菜单
	let cart1=document.querySelectorAll(".head_bottom_nav_center_navLink");
	let cartLink1=document.querySelectorAll(".head_bottom_nav_center_link");
	let cartColor1=document.querySelectorAll(".head_bottom_nav_center_navLink_aColor");
	for(let i=0;i<cart1.length-2;i++){
		cart1[i].onmouseover=function(){
			cartLink1[i].style.height="240px";
			cartColor1[i].style.color="#FF6700";
			cartLink1[i].style.boxShadow="0 2px 10px rgba(0,0,0,0.15)";
			cartLink1[i].style.borderTop="solid #E0E0E0 1px";
			cartLink1[i].style.cursor="pointer";
		}
		cart1[i].onmouseout=function(){
			cartLink1[i].style.height="0px";
			cartColor1[i].style.color="#333";
			cartLink1[i].style.boxShadow="none";
			cartLink1[i].style.borderTop="none";
		}
	}

	//3.轮播旁边的选项卡
	let li=document.querySelectorAll(".banner_top_left_li");
	let leftList=document.querySelectorAll(".banner_top_left_list");
	for(let i=0;i<li.length;i++){
		li[i].onmouseover=function(){
			for(let j=0;j<leftList.length;j++){
				leftList[j].style.display="none";
			}
			leftList[i].style.display="block";
			leftList[i].style.borderTop="solid 1px #E0E0E0";
			leftList[i].style.boxShadow="0 2px 10px rgba(0,0,0,0.15)";
			li[i].style.backgroundColor="#FF6700";
			li[i].style.cursor="pointer";

		}
		li[i].onmouseout=function(){
			for(let j=0;j<leftList.length;j++){
				leftList[j].style.display="none";
			}
			leftList[i].style.display="none";
			li[i].style.backgroundColor="rgba(0,0,0,0)";
		}
	}

  	//4.热门呢菜单栏
 	let boxtitlelistImg1 = document.querySelector(".box-title-list-img");
 	boxtitlelistImg1.style.display="block";
 	let boxtitlelistImg2 = document.querySelector(".box-title-list-selectSPAN");
 	let boxtitleList = document.querySelectorAll(".box-title-list");
	let boxtitlelistImg = document.querySelectorAll(".box-title-list-img");
	for (let i = 1; i < boxtitleList.length; i++) {
		boxtitleList[i].onmouseover = function() {
			// for(let j=0;j<leftList.length;j++){
				// boxtitlelistImg[j].style.display="none";
			// }
			boxtitlelistImg[i].style.display="block";
			boxtitlelistImg1.style.display="none";
			boxtitlelistImg2.style.borderBottom="none";
			boxtitlelistImg2.style.color="#000";
		    // boxtitleList[i].style.borderBottom="solid 3px #ff6700";
		}
		boxtitleList[i].onmouseout = function() {
			boxtitlelistImg[i].style.display="none";
			boxtitleList[i].style.borderBottom="none";
			boxtitlelistImg1.style.display="block";
			boxtitlelistImg2.style.borderBottom="2px solid red";
			boxtitlelistImg2.style.color="red";
		}
 	}
 	
	// 5.透明轮播
	let banner=document.querySelector(".banner_top_right")
	let bannerDot=document.querySelectorAll(".banner_top_right_butoonC > a");
	let bannerImg=document.querySelectorAll(".banner_top_right > ul > li");
	let bannerLbtn=document.querySelector(".banner_top_right_buttonL");
	let bannerRbtn=document.querySelector(".banner_top_right_buttonR");
	bannerOpacity(banner,bannerDot,bannerImg,bannerLbtn,bannerRbtn,2000,"active");

	//6.左右轮播
	// let banner = document.querySelector(".banner_top_right");
	// let dots = document.querySelectorAll(".banner_top_right_butoonC > a");
	// let imgs = document.querySelectorAll(".banner_top_right > ul > li >img");
	// let leftBtn = document.querySelector(".banner_top_right_buttonL");
	// let rightBtn = document.querySelector(".banner_top_right_buttonR");
	// let widths = parseInt(getComputedStyle(banner,null).width);
	// bannerLeftRight(banner,dots,imgs,leftBtn,rightBtn,widths,2000,"active");
    
    //使用时，需要配套的css，千万注意



    //7.内容的轮播
    let banner11 = document.querySelector(".box-bannerBox1");
	let dots1 = document.querySelectorAll(".banner-btn1");
	let imgs1 = document.querySelectorAll(".box-banner-list1");
	let leftBtn1 = document.querySelector(".ban-btns-left1");
	let rightBtn1 = document.querySelector(".ban-btns-right1");
	let widths1 = parseInt(getComputedStyle(banner11,null).width);
	bannerLeftRight(banner11,dots1,imgs1,leftBtn1,rightBtn1,widths1,2000,"active");

	let banner12 = document.querySelector(".box-bannerBox2");
	let dots2 = document.querySelectorAll(".banner-btn2");
	let imgs2 = document.querySelectorAll(".box-banner-list2");
	let leftBtn2 = document.querySelector(".ban-btns-left2");
	let rightBtn2 = document.querySelector(".ban-btns-right2");
	let widths2 = parseInt(getComputedStyle(banner12,null).width);
	bannerLeftRight(banner12,dots2,imgs2,leftBtn2,rightBtn2,widths2,2000,"active");

	let banner13 = document.querySelector(".box-bannerBox3");
	let dots3 = document.querySelectorAll(".banner-btn3");
	let imgs3 = document.querySelectorAll(".box-banner-list3");
	let leftBtn3 = document.querySelector(".ban-btns-left3");
	let rightBtn3 = document.querySelector(".ban-btns-right3");
	let widths3 = parseInt(getComputedStyle(banner13,null).width);
	bannerLeftRight(banner13,dots3,imgs3,leftBtn3,rightBtn3,widths3,2000,"active");

	let banner14 = document.querySelector(".box-bannerBox4");
	let dots4 = document.querySelectorAll(".banner-btn4");
	let imgs4 = document.querySelectorAll(".box-banner-list4");
	let leftBtn4 = document.querySelector(".ban-btns-left4");
	let rightBtn4 = document.querySelector(".ban-btns-right4");
	let widths4 = parseInt(getComputedStyle(banner14,null).width);
	bannerLeftRight(banner14,dots4,imgs4,leftBtn4,rightBtn4,widths4,2000,"active");

	//8.推荐的轮播
	let banner141 = document.querySelector(".box-image");
	let dots41 = document.querySelectorAll(".banner-btn4");
	let imgs41 = document.querySelectorAll(".box-image-UL");
	let leftBtn41 = document.querySelector(".box-icon-Left");
	let rightBtn41 = document.querySelector(".box-icon-Right");
	let widths41 = parseInt(getComputedStyle(banner141,null).width);
	bannerLeftRight(banner141,dots41,imgs41,leftBtn41,rightBtn41,widths41,2000,"active");




	//9.闪购的轮播
	let imgs411 = document.querySelector(".box-image1-right>ul");
	let leftBtn411 = document.querySelector(".box-icon1-left");
	let rightBtn411 = document.querySelector(".box-icon1-right");
	bannerLeftRight1(imgs411,leftBtn411,rightBtn411,992,2000,"active");






}
