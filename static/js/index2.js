/**
 * Created by qimi on 2016/5/9.
 */
(function() {
    $(function() {
        var map = new BMap.Map("allmap");          // 创建地图实例
        var point = new BMap.Point(116.404, 39.915);  // 创建点坐标
        map.centerAndZoom(point, 13);                 // 初始化地图，设置中心点坐标和地图级别
        var top_left_control = new BMap.ScaleControl({
            anchor: BMAP_ANCHOR_TOP_LEFT
        });// 左上角，添加比例尺
        var top_right_control = new BMap.CityListControl({  //右上角添加城市控件
            anchor: BMAP_ANCHOR_TOP_RIGHT
        });
	    var top_left_navigation = new BMap.NavigationControl();  //左上角，添加默认缩放平移控件
        map.addControl(top_left_control);
        map.addControl(top_left_navigation);
        map.addControl(top_right_control);
        // 根据浏览器定位
        //var geolocation = new BMap.Geolocation();
        //geolocation.getCurrentPosition(function(r) {
        //    if (this.getStatus() == BMAP_STATUS_SUCCESS) {
        //        var mk = new BMap.Marker(r.point);
        //        map.addOverlay(mk);
        //        map.panTo(r.point);
        //        alert('您的位置：'+ r.point.lng+","+ r.point.lat);
        //        console.log(r.point)
        //    }
        //}, {enableHighAccuracy: true});
        map.setCurrentCity("北京");          // 设置地图显示的城市 此项是必须设置的
	    map.enableScrollWheelZoom(true);     // 开启鼠标滚轮缩放
        map.enableContinuousZoom();
        // 创建函数，在地图上添加标注
        addMarker = function(job) {
            var infoWindow, marker, sContent;
            point = new BMap.Point(job['lng'], job['lat']);
            marker = new BMap.Marker(point);  // 创建标注
            map.addOverlay(marker);  // 将标注添加到地图中
            // 设置信息窗口内容
            sContent = "<p>职位：" + job.title + " <br/> 公司：" + job.company_name + " " + job.company_size + " <br/> 资金：" + job.stage + " <br/> 地址：" + job.location + " <br/> 待遇：" + job.salary + " <br/> 来源：<a href='http://www.lagou.com/jobs/" + job.jid + ".html'>拉勾网</a> </p>";
            infoWindow = new BMap.InfoWindow(sContent);  // 创建信息窗口对象
            // 绑定点击事件
            return marker.addEventListener("click", function() {
                this.openInfoWindow(infoWindow);  // 开启窗口信息
                //return document.getElementById("imgDemo").onload = function() {
                //    return infoWindow.redrow();
                //};
            });
        };
        return $.getJSON('/api/jobs').success(function(data) {
            var i, job, len, ref, results;
            if ((data.error == null) || data.error != 0) {
                return true;
            }
            ref = data["items"];
            results = [];
            for (i=0, len=ref.length; i<len; i++) {
                job = ref[i];
                results.push(addMarker(job));
            }
            return results;
        })
    })
})();