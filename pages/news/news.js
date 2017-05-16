Page({
    data:{
    booksdata:[]
},
onPullDownRefresh:function(){
  wx.stopPullDownRefresh();
  var that=this;
},
onLoad:function(){
    var that=this;
    wx.request({
      url: 'https://api.douban.com/v2/book/search?tag=%E4%B8%9C%E9%87%8E%E5%9C%AD%E5%90%BE',
      method: 'GET', // OPTIONS, GET, HEAD, POST, PUT, DELETE, TRACE, CONNECT
      // header: {}, // 设置请求的 header
      success: function(res){
        // success
         console.log(res);
         that.setData({booksdata:res.data.books});
      },
      fail: function(res) { 
        // fail
      },
      complete: function(res) {
        // complete
      }
    })
}
})