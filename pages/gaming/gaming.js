// index.js
Page({
    data: {
      dice:[0,0,0,0,0,0],
      num:[0,0,0,0,0,0]
    },
    // 事件处理函数
    gohistory() {
    wx.navigateTo({
      url: '/pages/history/history'
    })
    },
    // judge:function(){
    //   var temp_str0='dice[0]';
    //    this.setData({
    //      'num[${}].value':this.data.num[0]+1
    //    })
    // },
    gorandom(){
      this.setData({
        'dice[0]':Math.floor(Math.random()*6)+1,
        'dice[1]':Math.floor(Math.random()*6)+1,
        'dice[2]':Math.floor(Math.random()*6)+1,
        'dice[3]':Math.floor(Math.random()*6)+1,
        'dice[4]':Math.floor(Math.random()*6)+1,
        'dice[5]':Math.floor(Math.random()*6)+1
      })
      // this.judge()
    }
      
})