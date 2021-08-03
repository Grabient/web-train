// 百度地图API功能
var map = new BMapGL.Map("container");//创建百度地图实例，这里的allmap是地图容器的id
var point = new BMapGL.Point(114.25073479629516, 30.59443683741777);//创建一个点对象，这里的参数是地图上的经纬度
map.centerAndZoom(point, 12);//这里是将地图的中心移动到我们刚才创建的点；这里的12是地图的缩放界别；数值越大，地图看的越细

//定位
var geolocation = new BMapGL.Geolocation();
geolocation.getCurrentPosition(function(result){
    if(this.getStatus() === BMapGL_STATUS_SUCCESS){
        var mk = new BMapGL.Marker(result.point);//创建一个覆盖物
        map.addOverlay(mk);//增加一个标示到地图上
        map.panTo(result.point);
        latitude  = result.point.lat;//获取到的纬度
        longitude = result.point.lng;//获取到的经度
    }
});

map.enableScrollWheelZoom(true);

map.addControl(new BMapGL.ScaleControl());
map.addContorl(new BMapGL.ZoomControl());
map.addContorl(new BMapGL.CityListControl());

