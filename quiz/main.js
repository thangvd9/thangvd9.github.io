
function check(){
	var question1 = quiz.cau1.value;
	var question2 = quiz.cau2.value;
	var question3 = quiz.cau3.value;
	var question4 = quiz.cau4.value;
	var question5 = quiz.cau5.value;

	var score=0;
	var range = [];
	if (question1 == "cau1-1") {
		document.getElementById("thongbao").innerHTML = 'Đúng';
		score += 1;
	}  if (question1 != "cau1-1"){	
		document.getElementById("thongbao").innerHTML = 'Sai';
		score += 0;
	}

	if (question2 == "cau2-3") {
		document.getElementById("thongbao1").innerHTML = 'Đúng';
		score += 1;
	} if (question2 = "cau2-3") {	
		document.getElementById("thongbao1").innerHTML = 'Sai';
		score += 0;
	}


	if (question3 == "cau3-3") {
		document.getElementById("thongbao2").innerHTML = 'Đúng';
		score += 1;
	} else {	
		document.getElementById("thongbao2").innerHTML = 'Sai';
		score += 0;
	}


	if (question4 == "cau4-1") {
		document.getElementById("thongbao3").innerHTML = 'Đúng';
		score += 1;
	} else {	
		document.getElementById("thongbao3").innerHTML = 'Sai';
		score += 0;
	}


	if (question5 == "cau5-1") {
		document.getElementById("thongbao4").innerHTML = 'Đúng';
		score += 1;
	} else {	
		document.getElementById("thongbao4").innerHTML = 'Sai';
		score += 0;
	}



	if ( score < 4) {
		document.getElementById("messenger").innerHTML = "Bạn cần cố gắng nhiều hơn";
		document.getElementById("picture").src = "https://31.media.tumblr.com/1c93f4e175fab57d82552ab4df5d47d4/tumblr_inline_myejs2Uoav1sohk3w.gif";
	}
	if ( score > 3) {
		document.getElementById("messenger").innerHTML = "Bạn đã hoàn thành";
		document.getElementById("picture").src = "http://2.bp.blogspot.com/-NhCOl0K9hC8/VSPsYUAD-eI/AAAAAAAAdk4/JaHJLsl8-uU/s1600/girl-xinh%2B(27).gif";
	}

	document.getElementById('number_correct').innerHTML = "Điểm của bạn là: " +  score;
	document.getElementById("after-finish").style.visibility = "visible";
}


