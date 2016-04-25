/*window.onload = function (){
	var oInp = document.getElementById('search_input');
	var oSearch_key = document.getElementById('search_key');
	oInp.onclick = function (){

		var ev = ev || event;

		ev.cancelBubble = true;//阻止当前对象的当前事件的冒泡

		oInp.value = "";
		oSearch_key.style.display = 'block';
	};

	document.onclick = function (){
		if( oSearch_key.style.display = 'block' ){
			oSearch_key.style.display = 'none';
		}
	};

}*/

 $(function(){
 	$("#search_input").on("click",function(event){
 		$(this).attr("value","");
		$("#search_key").css("display","block");
		//jquery的冒泡事件的阻止与允许有三种方法，在这里
		// return false, event.stopPropagation()都是可行的,
		// event.preventDefault()不行
		return false;//在事件的处理中，可以阻止默认事件和冒泡事件
		//event.preventDefault();//在事件的处理中，可以阻止默认事件但是允许冒泡事件的发生
		//event.stopPropagation();//在事件的处理中，可以阻止冒泡但是允许默认事件的发生
 	});

	 $(document).on("click",function(){
		 if($("#search_key").css("display") == 'block' ){
			 $("#search_key").css("display","none");
		 }
	 })

 });
function stopPropagam(){
	if ( e && e.stopPropagation )
//因此它支持W3C的stopPropagation()方法
		e.stopPropagation();
	else
//否则，我们需要使用IE的方式来取消事件冒泡
		window.event.cancelBubble = true;
	return false;
}
