function viewport (){
    
    var StandardsMode = /css.compat/i.test(document.compatMode);
	var doc = StandardsMode?document.documentElement:document.body;
    var scrollHost = document.documentElement.scrollTop > 0 ? document.documentElement : document.body
	var area = {
	        width:doc.clientWidth,
	        height:doc.clientHeight,
			top:scrollHost.scrollTop,
			right:scrollHost.scrollLeft + doc.clientWidth ,  
			bottom:scrollHost.scrollTop + doc.clientHeight , 
			left:scrollHost.scrollLeft
	}
    return area;
}