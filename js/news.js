$(function(){
	var index={
		init:function(){
			this.bindEvent();
			this.render();
		},
		bindEvent:function(){
			var that=this;	
			//微信客服切换
			$(".wbAndwx ul li").hover(function(){
				var i = $(this).index();
				$(".codeGroup dl").eq(i).show().siblings().hide();
			});
			$(".groupsTop li").hover(function(){
				var i = $(this).index();
				$(".groupsCon .pers").eq(i).show().siblings().hide();
			})
			//底部导航栏的切换
			$(".groupsTop li").hover(function(){
				$(this).find("a").addClass("on").parent().siblings().find("a").removeClass("on");
			});
		},
		render:function(){
			
		}
	};
	index.init();
})