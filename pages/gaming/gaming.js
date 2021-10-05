// index.js
Page({
    data: {
    },
    // 事件处理函数
  gohistory: function () {
    wx.navigateTo({
      url: '/pages/history/history'
    })
  },
})