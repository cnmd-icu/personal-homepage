	// function getTime() {
	// 	var myDate = new Date();
	// 	var myYear = myDate.getFullYear(); //获取完整的年份(4位,1970-????)
	// 	var myMonth = myDate.getMonth() + 1; //获取当前月份(0-11,0代表1月)
	// 	var myToday = myDate.getDate(); //获取当前日(1-31)
	// 	var myDay = myDate.getDay(); //获取当前星期X(0-6,0代表星期天)
	// 	var myHour = myDate.getHours(); //获取当前小时数(0-23)
	// 	var myMinute = myDate.getMinutes(); //获取当前分钟数(0-59)
	// 	var mySecond = myDate.getSeconds(); //获取当前秒数(0-59)
	// 	var week = ['星期日', '星期一', '星期二', '星期三', '星期四', '星期五', '星期六'];
	// 	$('#showDate').html(myYear + '年' + fillZero(myMonth) + '月' + fillZero(myToday) + '日');
	// 	$('#NewTime').html(fillZero(myHour) + ':' +fillZero(myMinute) + ':' + fillZero(mySecond)+"<br>"+week[myDay]);
	// };
	// function fillZero(str) {
	// 	var realNum;
	// 	if (str < 10) {
	// 		realNum = '0' + str;
	// 	} else {
	// 		realNum = str;
	// 	}
	// 	return realNum;
	// }
	// setInterval(getTime, 1000);	

		
$(function() {
    var yan = new XMLHttpRequest();
    yan.open('get', 'https://v1.hitokoto.cn/?c=j&c=c&c=d&c=f&c=h');
    yan.onreadystatechange = function () {
        if (yan.readyState === 4) {
            var data = JSON.parse(yan.responseText);
            $('#derp').html(data.hitokoto);
            $('#from').html(data.from);
                if (data.from_who!=null) {
                    $('#author').html("---作者:"+data.from_who+"");
                }else if(data.creator!=null){
                    $('#author').html("---作者:"+data.creator+"");
                }else{
                    $('#author').html("---作者:华烨");
                }
        }
    }
    yan.send();
});

