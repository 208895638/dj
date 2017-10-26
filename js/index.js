$(function(){
	var index={
		init:function(){
			this.bindEvent();
			this.render();
			this.swiper();
		},
		bindEvent:function(){
			var that=this;	
			var m=0;  //初始化游戏图库中的图片
			//点击新闻中心切换
			$(".info .title li").hover(function(){
				var i = $(this).index();
				$(this).find("a").addClass("active").parent().siblings().find("a").removeClass("active");
				$(this).parents(".title").siblings().find("ul").eq(i).show().siblings().hide();
			});
			//角色介绍男女角色切换
			$(".rolesInfo .sex em").hover(function(){
				var i = $(this).index();
				$(this).addClass("on").siblings().removeClass("on");
				$(this).parents(".rolesInfo").siblings(".role").find("img").eq(i).show().siblings().hide();
			});	
			//角色介绍角色图片切换
			$(".charac li").hover(function(){
				var i = $(this).index();
				$(this).addClass("on").siblings().removeClass("on");
				$(".roles .con .per").eq(i).show().siblings().hide();
			});
			//    游戏图库划过图片显示阴影
			$(".pic .box li").hover(function(){
				var i = $(this).index();
				$(this).find("h4").stop().fadeIn();
			},function(){
				$(this).find("h4").stop().fadeOut();
			});
			//   点击游戏图库显示图片
			$(".pic .box li h4").on("click",function(){
				var i = $(this).parent().index();
				m = i;
				$(".photos .per").eq(i).show().siblings().hide();
				$(".photos").fadeIn();
				var swipers = new Swiper('.swiperPhoto', {
			        pagination: '.swiperPage',
			        paginationClickable: true,
			        spaceBetween: 30,
			        loop:true,
			        autoplayDisableOnInteraction : true,
			        prevButton:'.btnPrev',
					nextButton:'.btnNext',
					paginationType : 'fraction',
					observer:true,//修改swiper自己或子元素时，自动初始化swiper  
					observeParents:true,//修改swiper的父元素时，自动初始化swiper  
			    });
			});
			//初始化图库中的截图
			$(".photos .per").eq(m).show().siblings().hide();
			//点击图片x号消失和切换下面的图片
			$(".photos .per h2").on("click",function(){
				$(this).parents(".photos").fadeOut();
			});
			var n = $(".photos .per").eq(m).find("li").length;
			$(".btnPrev").on("click",function(){
				var i = $(this).siblings("ul").find("li").length;
				i--;
				if(i < 0){
					i=n;
					$(this).siblings("ul").find("li").eq(n-1).show().siblings().hide();
				}else{
					$(this).siblings("ul").find("li").eq(i).show().siblings().hide();
				};
				
			});
			
			$(".btnNext").on("click",function(){
				var i = $(this).siblings("ul").find("li").length;
				i++;
				if(i > n){
					i=0;
					$(this).siblings("ul").find("li").eq(i).show().siblings().hide();
				}else{
					$(this).siblings("ul").find("li").eq(i).show().siblings().hide();
				}
				
			});
			//跳转到职业介绍和游戏截图
			$(".roleInfo").on("click",function(){
				var h =$(".roles").offset().top;
				$('body,html').animate({scrollTop:h},500);
			});
			$(".playPhot").on("click",function(){
				var h =$(".pic").offset().top;
				$('body,html').animate({scrollTop:h},500);
			});
		},
		render:function(){
			
		},
		swiper:function(){
			var swiper = new Swiper('.bans', {
		        pagination: '.pagination',
		        paginationClickable: true,
		        spaceBetween: 30,
		        loop:true,
		        autoplay: 3000,
		        autoplayDisableOnInteraction : true
		    });
		    $(".bans").mouseenter(function(){
		    	swiper.stopAutoplay();
		    }).mouseout(function(){
		    	swiper.startAutoplay();
		    });
		    var swipers = new Swiper('.features', {
		        spaceBetween: 30,
		        loop:true,
		        grabCursor : true,
		        autoplay: 300000,
		        autoplayDisableOnInteraction : true,	 
		        prevButton:'.swiper-button-prev',
				nextButton:'.swiper-button-next',	
		       	effect : 'coverflow',
		       	coverflow: {
		            rotate: 50,
		            stretch: 0,
		            depth: 100,
		            modifier: 1,
		            slideShadows : false
		        }
		    });
		}
	};
	index.init();
})