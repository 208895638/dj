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
		},
		render:function(){
			
		}
	};
	index.init();
})