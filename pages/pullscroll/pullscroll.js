Page({
  data: {
    items: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27],
    bottomInVisiable: true,
    scrollHeight: 0,
    locked:false,
    scrolltop:0
  },
  onLoad: function () {
    var that = this;
    wx.getSystemInfo({
      success: function (res) {
        console.info(res.windowHeight);
        that.setData({
          scrollHeight: res.windowHeight
        });
      }
    });
  },
  onPullDown: function () {
    if (this.data.locked) {
      console.log("尝试解锁")
      wx.showLoading({
        title: '123',
      })
      return;
    }else{
      var that = this;
      this.setData({
        locked: true
      })
      setTimeout(function () {
        if (that.data.items[0] == 1) {
          that.setData({
            items: [11, 12, 13, 14, 15, 16, 17, 18, 19, 20],
            locked: false
          })
        } else {
          that.setData({
            items: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27],
            locked: false
          })
        }
        wx.hideLoading();
      }, 1000)
    }
   
  },
  scroll: function (e) {

  },
  onBottomEvent: function (e) {
    if(this.data.locked){
      console.log("尝试解锁")
      return;
    }else{
      this.setData({
        locked:true
      })
      var that = this;
      console.log("加载")
      wx.showLoading({
        title: '加载中'
      })
      setTimeout(function () {
        that.data.items.push("new");
        that.data.items.push("new1");
        that.data.items.push("new2");
        that.data.items.push("new3");
        that.data.items.push("new4");
        that.setData({
          items: that.data.items,
          bottomInVisiable: true,
          locked: false,
          scrolltop: e.detail.scrollTop

        })
        wx.hideLoading();
        console.log(that.data.items);
      }, 2000)
    }

  }
})