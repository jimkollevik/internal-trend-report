$(document).ready(function() {
	//update every 5 second
	window.setInterval(function() {
	//declare color array and update randomly - Google Colors, you can change them
	var colors = ["#4A75E6","#EA2533","#FEBC1F","#4470E6","#08AF22"];
	var coulors = ["#4A75E6","#EA2533","#FEBC1F","#4470E6","#08AF22"];
	var Colors = ["#4A75E6","#EA2533","#FEBC1F","#4470E6","#08AF22"];
	var colOrs = ["#4A75E6","#EA2533","#FEBC1F","#4470E6","#08AF22"];
	var randomColor = colors[Math.floor(Math.random() * colors.length)];
	var randomCol = coulors[Math.floor(Math.random() * coulors.length)];
	var randColor = Colors[Math.floor(Math.random() * Colors.length)];
	var Randcolor = colOrs[Math.floor(Math.random() * colOrs.length)];
	//set random color to col
	$(".first-col").css("background-color", randomColor);
	$(".second-col").css("background-color", randomCol);
	$(".third-col").css("background-color", randColor);
	$(".fourth-col").css("background-color", Randcolor)

	var showText = function (target, message, index, interval) {   
  		if (index < message.length) {
    		$(target).append(message[index++]);
    		setTimeout(function () { showText(target, message, index, interval); }, interval);
  		}
	}

	//make api call here. Change it to your api call
	var uri = "http://echo.jsontest.com/first/Moscow/second/Stockholm/third/Barcelona/fourth/Paris";
		$.getJSON(uri, function(data) {
			var keyword1 = data.first;
			var keyword2 = data.second;
			var keyword3 = data.third;
			var keyword4 = data.fourth;

	$(function () {
		$(".keyword1").empty()
		$(".keyword2").empty()
		$(".keyword3").empty()
		$(".keyword4").empty()
		//call showtext function
		showText(".keyword1", keyword1, 0, 200);
		showText(".keyword2", keyword2, 0, 200);
		showText(".keyword3", keyword3, 0, 200);
		showText(".keyword4", keyword4, 0, 200);
	});
})
}, 5000);//end timer
})//end of script