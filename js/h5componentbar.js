// 柱图表组件对象
var H5componentbar = function(name,cfg){

	var component = new H5componentbase(name,cfg);

	$.each(cfg.data,function(idx,item){

		var line = $("<div class='line'>")
		var name = $("<div class='name'>")
		var rate = $("<div class='rate'>")
		var per = $("<div class='per'>")

		var width = item[1]*100 + "%";
		rate.css("width",width);
		per.text(width);
		var bgStyle = "";
		if(item[2]){
			bgStyle = "style='background-color:"+item[2]+"'";
		}
		rate.html("<div class='bg' "+bgStyle+">");
		name.text(item[0]);
		line.append(name).append(rate).append(per);
		component.append(line);
	})

	return component;

}





