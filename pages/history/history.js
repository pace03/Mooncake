// history.js
Page({
    data: {
        player_num:1,
        yixiu_award1:'x',
        erju_award1:'x',
        sijin_award1:'x',
        sanhong_award1:'x',
        duitang_award1:'x',
        zhuangyuan_award1:'x'
    },
    // 事件处理函数
    onLoad:function(options){
        this.setData({
          yixiu_award1:wx.getStorageSync('yixiu'),
          erju_award1:wx.getStorageSync('erju'),
          sijin_award1:wx.getStorageSync('sijin'),
          sanhong_award1:wx.getStorageSync('sanhong'),
          duitang_award1:wx.getStorageSync('duitang'),
          zhuangyuan_award1:wx.getStorageSync('zhuangyuan'),
          player_num:parseInt(wx.getStorageSync('playnum'))
        })
        console.log(this.data.player_num)
        console.log(this.data.yixiu_award1)
        console.log(this.data.erju_award1)
        console.log(this.data.sijin_award1)
        console.log(this.data.sanhong_award1)
        console.log(this.data.duitang_award1)
        console.log(this.data.zhuangyuan_award1)
      }
})