Page({
  data: {
    items: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27],
    bottomInVisiable: true,
  },
  onPullDownRefresh: function () {
    var that = this;
    setTimeout(function () {
      if (that.data.items[0] == 1) {
        that.setData({
          items: [11, 12, 13, 14, 15, 16, 17, 18, 19, 20]
        })
      } else {
        that.setData({
          items: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27]
        })
      }
      wx.stopPullDownRefresh()
      console.log("刷新2")
    }, 1000)
    console.log("刷新1")
  },
  scroll: function () {
    console.log("滑动了...")
  },
  onReachBottom: function () {
    console.log(this.data.items)
    var that = this;
    console.log("加载")
    wx.showLoading({
      title: '加载中'
    })
    this.setData({
      bottomInVisiable: false
    })
    setTimeout(function () {
      that.data.items.push("new");
      that.data.items.push("new1");
      that.data.items.push("new2");
      that.data.items.push("new3");
      that.data.items.push("new4");
      that.setData({
        items: that.data.items,
        bottomInVisiable: true
      })
      wx.hideLoading();
    }, 2000)
  }
})