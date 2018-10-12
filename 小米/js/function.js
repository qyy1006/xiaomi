

//1.透明度轮播
// 参数1:轮播盒子元素
// 参数2：轮播点集合
// 参数3：轮播图片集合
// 参数4：左按钮
// 参数5：右按钮
// 参数6：时间
// 参数7：轮播点样式
function bannerOpacity(banner,bannerDot,bannerImg,bannerLbtn,bannerRbtn,time,active){
	bannerImg[0].style.opacity=1;
	// bannerDot[0].style.backgroundColor="#fff";
	bannerDot[0].classList.add(active);
	let flag=true; //定义一个开关，
	for(let i=0;i<bannerDot.length;i++){
		bannerDot[i].onmouseover=function(){
			for(let j=0;j<bannerImg.length;j++){
				// bannerDot[j].style.backgroundColor="#748793";
				bannerDot[j].classList.remove(active);
				bannerImg[j].style.opacity=0;
			}
			// bannerDot[i].style.backgroundColor="#fff";
			bannerDot[i].classList.add(active);
			bannerImg[i].style.opacity=1;
			//赋值，
			num=i;
		}
	}

	//自动轮播

	let num=0;
	let t=setInterval(move,time);
	function move(){
		num++;
		if(num==bannerImg.length){
			num=0;
		}
		for(let j=0;j<bannerImg.length;j++){
			bannerImg[j].style.opacity=0;
			// bannerDot[j].style.backgroundColor="#748793";
			bannerDot[j].classList.remove(active);
			flag=true;
		}
		// bannerDot[num].style.backgroundColor="#fff";
		bannerDot[num].classList.add(active);
		bannerImg[num].style.opacity=1;
		flag=true;
	}
	//鼠标移入banner时，暂停时间间隔函数
	banner.onmouseover=function(){
		clearInterval(t);
	}
	//鼠标移出banner时，继续函数
	banner.onmouseout=function(){
		t=setInterval(move,time);
	}
	
	//点击右箭头
	bannerRbtn.onclick=function(){
		if(!flag){
			return;
		}
		flag=false;
		move();
	}
	//点击左箭头
	bannerLbtn.onclick=function(){
		if(!flag){
			return;
		}
		flag=false;
		moveL();
	}
	function moveL(){
		num--;
		if(num<0){
			num=bannerImg.length-1;
		}
		for(let j=0;j<bannerImg.length;j++){
			bannerImg[j].style.opacity=0;
			// bannerDot[j].style.backgroundColor="#748793";
			bannerDot[j].classList.remove(active);
			flag=true;
		}
		// bannerDot[num].style.backgroundColor="#fff";
		bannerDot[num].classList.add(active);
		bannerImg[num].style.opacity=1;
		flag=true;
	}

	//窗口失去焦点，暂停时间间隔函数
	window.onblur=function(){
		clearInterval(t);
	}
	window.onfocus=function(){
		t=setInterval(move,time);
	}
}

//2.左右轮播
// 参数1:轮播盒子元素
// 参数2：轮播点集合
// 参数3：轮播图片集合
// 参数4：左按钮
// 参数5：右按钮
// 参数6：图片盒子宽度
// 参数7：时间
// 参数8：轮播点样式
function bannerLeftRight(banner,dots,imgs,leftBtn,rightBtn,widths,time,active){
	let t;
	let now = 0;
	let next = 0;
	let flag = true;

	dots[0].classList.add("active");
	// animate(imgs[0],{left:0});
	imgs[0].style.left = 0;
	for(let i=0;i<dots.length;i++){
		dots[i].onmouseover = function(){
			for(let j=0;j<imgs.length;j++){
				dots[j].classList.remove("active");
				imgs[j].style.left = -widths+"px";
			}
			dots[i].classList.add("active");
			imgs[i].style.left = 0;
		}
	}

	// leftBtn.onmouseover=function(){
	// 	backgroundColor="rgba(0,0,0,0.8)";
	// }
	// console.log(imgs);
	// 自动轮播
	// t = setInterval(move,time);
	function move(){
		next++;
		if(next == imgs.length){
			next = imgs.length-1;      //循环时为0；
			flag = true;
			return;
		}
		imgs[now].style.left = 0;
		imgs[next].style.left = widths + "px";
		animate(imgs[now],{left:-widths},function(){
			for(let j=0;j<dots.length;j++){
				dots[j].classList.remove("active");
				flag = true;
			}
		});
		animate(imgs[next],{left:0},function(){
			dots[next].classList.add("active");
			flag = true;
		});
		now = next;
	}

	// banner.onmouseover = function(){
	// 	clearInterval(t);
	// }
	// banner.onmouseout = function(){
	// 	t = setInterval(move,time);
	// }

	function moveL(){
		next--;
		if(next == -1){
			next = 0;              //为0时截止，要循环时为length-1；
			flag = true;
			return;
		}
		imgs[now].style.left = 0;
		imgs[next].style.left = -widths + "px";
		animate(imgs[now],{left:widths},function(){
			for(let j=0;j<dots.length;j++){
				dots[j].classList.remove("active");
				flag = true;
			}
		});
		animate(imgs[next],{left:0},function(){
			dots[next].classList.add("active");
			flag = true;
		});
		now = next;
	}
	rightBtn.onclick = function(){
		if(!flag){
			return;
		}
		flag = false;
		move();
	}
	leftBtn.onclick = function(){
		if(!flag){
			return;
		}
		flag = false;
		moveL();
	}
	// window.onblur = function(){
	// 	clearInterval(t);
	// }
	// window.onfocus = function(){
	// 	t = setInterval(move, time);
	// }
}


//3.闪购左右轮播
// 参数1：轮播部分
// 参数2：左按钮
// 参数3：右按钮
// 参数4：轮播盒子宽度
// 参数5：时间
// 参数6：轮播点样式
function bannerLeftRight1(imgs,leftBtn,rightBtn,widths,time,active){

	let num = 0;
	rightBtn.style.color="#B0B0B0";
	// rightBtn.onmouseover=function(){
	// 	rightBtn.style.color="red";
	// }
	// rightBtn.onmouseout=function(){
	// 	rightBtn.style.color="";
	// }
	rightBtn.onclick = function(){
		num++;
		if(num==3){
			num=2;
			return;
		}
		imgs.style.transform="translateX("+(-widths*num)+"px)";
		if(num==2){
			rightBtn.style.color="#E0E0E0";
		}
		if(num!=0){
			leftBtn.style.color="#B0B0B0";
		}
	}
	leftBtn.onclick = function(){
		num--;
		if(num==-1){
			num=0;

			return;
		}
		imgs.style.transform="translateX("+(-widths*num)+"px)";
		if(num==0){
			leftBtn.style.color="#E0E0E0";
		}
		if(num!=2){
			rightBtn.style.color="#B0B0B0";
		}
	}
	
}