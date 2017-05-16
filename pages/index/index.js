//index.js
//获取应用实例
var app = getApp()
Page({
  data: {
    userInfo: {},
    isVisiable:true
  },
  //事件处理函数
  linstenButton: function() {
    this.setData({
      isVisiable: !this.data.isVisiable
    })
  },
  nav:function(){
    wx.navigateTo({
      url: '/pages/dialog/dialog',
      success: function(res) {},
      fail: function(res) {},
      complete: function(res) {},
    })
  },
  navbar:function(){
    wx.navigateTo({
      url: '/pages/navbar/navbar',
    })
  }
  ,
  toast:function(){
    wx.showToast({
      title:"OK",
      icon:"success",
      duration:2000
    })
    setTimeout(()=>{
      wx.hideToast()
    },2000)
  }
  ,
  onLoad: function () {
    console.log('onLoad')
    var that = this
    //调用应用实例的方法获取全局数据
    app.getUserInfo(function(userInfo){
      //更新数据
      that.setData({
        userInfo:userInfo
      })
    })
  }
})
