// history.js
Page({
    data: {
        player_num:1,
        yixiu_award1:'x',
        erju_award1:'x',
        sijin_award1:'x',
        sanhong_award1:'x',
        duitang_award1:'x',
        zhuangyuan_award1:'x',
        ending_flag:0,
        max_player:0
    },
    // 事件处理函数
    onLoad:function(options){
        this.setData({
          ending_flag:0,
          yixiu_award1:wx.getStorageSync('yixiu'),
          erju_award1:wx.getStorageSync('erju'),
          sijin_award1:wx.getStorageSync('sijin'),
          sanhong_award1:wx.getStorageSync('sanhong'),
          duitang_award1:wx.getStorageSync('duitang'),
          zhuangyuan_award1:wx.getStorageSync('zhuangyuan'),
          player_num:parseInt(wx.getStorageSync('playnum')),
          max_player:wx.getStorageSync('maxplayer')
        })
        console.log(this.data.max_player)
        // console.log(this.data.ending_flag)
        if(wx.getStorageSync('endflag')){//游戏是否结束判定
          this.setData({
            ending_flag:parseInt(wx.getStorageSync('endflag'))
          })
        }
        // console.log(this.data.ending_flag)
        // console.log(this.data.playernum1)
        // console.log(this.data.yixiu_award1)
        // console.log(this.data.erju_award1)
        // console.log(this.data.sijin_award1)
        // console.log(this.data.sanhong_award1)
        // console.log(this.data.duitang_award1)
        // console.log(this.data.zhuangyuan_award1)
      }
})