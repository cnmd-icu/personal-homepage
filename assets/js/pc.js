// 进入页面就执行
window.onload=function()
{
	// 文字输入特效
	let divTyping = document.getElementById('etext')
	let i = 0,
		timer = 0,
		str = 'Hell Word!';
	function typing()
	{
		if (i <= str.length)
		{
			divTyping.innerHTML = str.slice(0, i++) + '_'
			timer = setTimeout(typing, 50)
		}else
		 {
			divTyping.innerHTML = str //结束打字,移除 _ 光标
			clearTimeout(timer)
			$("#ebga").animate({width:'100%',height:'100%'},800);
			//判断是否移动端
			if(/Android|webOS|iPhone|iPod|BlackBerry/i.test(navigator.userAgent))
			{
				setTimeout(function(){$("#content").animate({height:'100%'},600)},300);
			}
			else
			{
				setTimeout(function(){$("#content").animate({height:'80%'},600)},300);
			}
		}
	}
	typing();


	setTimeout(function(){$("#xuna").show();},8800);
	//单击选择框-宽度变化
	$("#cleft_li01").click(function(){
		$("#nav01").animate({"left":"0%"},500);
		$("#nav02").animate({"left":"0%"},500);
		$("#nav03").animate({"left":"0%"},500);
		$("#nav04").animate({"left":"0%"},500);
		$("#nav05").animate({"left":"0%"},500);
		$("#nav06").animate({"left":"0%"},500);
		$("#nav07").animate({"left":"0%"},500);
		$("#nav08").animate({"left":"0%"},500);
	})
	$("#cleft_li02").click(function(){
		$("#nav01").animate({"left":"-100%"},500);
		$("#nav02").animate({"left":"0%"},500);
		$("#nav03").animate({"left":"0%"},500);
		$("#nav04").animate({"left":"0%"},500);
		$("#nav05").animate({"left":"0%"},500);
		$("#nav06").animate({"left":"0%"},500);
		$("#nav07").animate({"left":"0%"},500);
		$("#nav08").animate({"left":"0%"},500);
	})
	$("#cleft_li03").click(function(){
		$("#nav01").animate({"left":"-100%"},500);
		$("#nav02").animate({"left":"-100%"},500);
		$("#nav03").animate({"left":"0%"},500);
		$("#nav04").animate({"left":"0%"},500);
		$("#nav05").animate({"left":"0%"},500);
		$("#nav06").animate({"left":"0%"},500);
		$("#nav07").animate({"left":"0%"},500);
		$("#nav08").animate({"left":"0%"},500);
	})
	$("#cleft_li04").click(function(){
		$("#nav01").animate({"left":"-100%"},500);
		$("#nav02").animate({"left":"-100%"},500);
		$("#nav03").animate({"left":"-100%"},500);
		$("#nav04").animate({"left":"0%"},500);
		$("#nav05").animate({"left":"0%"},500);
		$("#nav06").animate({"left":"0%"},500);
		$("#nav07").animate({"left":"0%"},500);
		$("#nav08").animate({"left":"0%"},500);
	})
	$("#cleft_li05").click(function(){
		$("#nav01").animate({"left":"-100%"},500);
		$("#nav02").animate({"left":"-100%"},500);
		$("#nav03").animate({"left":"-100%"},500);
		$("#nav04").animate({"left":"-100%"},500);
		$("#nav05").animate({"left":"0%"},500);
		$("#nav06").animate({"left":"0%"},500);
		$("#nav07").animate({"left":"0%"},500);
		$("#nav08").animate({"left":"0%"},500);
	})
	$("#cleft_li06").click(function(){
		$("#nav01").animate({"left":"-100%"},500);
		$("#nav02").animate({"left":"-100%"},500);
		$("#nav03").animate({"left":"-100%"},500);
		$("#nav04").animate({"left":"-100%"},500);
		$("#nav05").animate({"left":"-100%"},500);
		$("#nav06").animate({"left":"0%"},500);
		$("#nav07").animate({"left":"0%"},500);
		$("#nav08").animate({"left":"0%"},500);
	})
	$("#cleft_li07").click(function(){
		$("#nav01").animate({"left":"-100%"},500);
		$("#nav02").animate({"left":"-100%"},500);
		$("#nav03").animate({"left":"-100%"},500);
		$("#nav04").animate({"left":"-100%"},500);
		$("#nav05").animate({"left":"-100%"},500);
		$("#nav06").animate({"left":"-100%"},500);
		$("#nav07").animate({"left":"0%"},500);
		$("#nav08").animate({"left":"0%"},500);
	})	
	$("#cleft_li08").click(function(){
		$("#nav01").animate({"left":"-100%"},500);
		$("#nav02").animate({"left":"-100%"},500);
		$("#nav03").animate({"left":"-100%"},500);
		$("#nav04").animate({"left":"-100%"},500);
		$("#nav05").animate({"left":"-100%"},500);
		$("#nav06").animate({"left":"-100%"},500);
		$("#nav07").animate({"left":"-100%"},500);
		$("#nav08").animate({"left":"0%"},500);
	})	
	$(".nav01_but01").click(function(){
		$("#nav01").animate({"left":"-100%"},500);
		$("#nav02").animate({"left":"0%"},500);
		$("#nav03").animate({"left":"0%"},500);
		$("#nav04").animate({"left":"0%"},500);
		$("#nav05").animate({"left":"0%"},500);
	})
	$(".nav01_but02").click(function(){
		$("#nav01").animate({"left":"-100%"},500);
		$("#nav02").animate({"left":"-100%"},500);
		$("#nav03").animate({"left":"-100%"},500);
		$("#nav04").animate({"left":"0%"},500);
		$("#nav05").animate({"left":"0%"},500);
	})
}