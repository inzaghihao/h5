// 散点图表组件对象
var H5componentpoint = function(name,cfg){

	var component = new H5componentbase(name,cfg);

	var base = cfg.data[0][1];		//以第一个数据的比例做基本大小100%
	$.each(cfg.data,function(idx,item){
		var point = $("<div class='point point_"+idx+"'>");
		var per = (item[1]/base*100) + "%";
		
		var nameEle = $("<div class='name'>"+item[0]+"</div>");
		var perEle = $("<div class='per'>"+(item[1]*100)+'%'+"</div>");
		nameEle.append(perEle);
		point.append(nameEle);

		point.width(per).height(per);

		if(item[2]){
			point.css("backgroundColor",item[2]);
		}
		if(item[3] !==undefined && item[4]!==undefined){
			point.css({"left" : item[3],"top" : item[4]});
		}

		component.append(point);
	})


	return component;

}





