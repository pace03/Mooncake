// index.js
Page({
  data: {
    yixiu:'x',
    erju:'x',
    sijin:'x',
    sanhong:'x',
    duitang:'x',
    zhuagnyuan:'x',
    playnum:0
  },
  handleinput_yixiu(e){
    //console.log(e.detail.value);
    this.setData({
      yixiu:e.detail.value
    })
  },
  handleinput_erju(e){
    //console.log(e.detail.value);
    this.setData({
      erju:e.detail.value
    })
  },
  handleinput_sijin(e){
    //console.log(e.detail.value);
    this.setData({
      sijin:e.detail.value
    })
  },
  handleinput_sanhong(e){
    //console.log(e.detail.value);
    this.setData({
      sanhong:e.detail.value
    })
  },
  handleinput_duitang(e){
    //console.log(e.detail.value);
    this.setData({
      duitang:e.detail.value
    })
  },
  handleinput_zhuangyuan(e){
    //console.log(e.detail.value);
    this.setData({
      zhuangyuan:e.detail.value
    })
  },
  handleinput_playnum(e){
    this.setData({
      playnum:e.detail.value
    })
    //console.log(this.data.playnum)
  },
  // 事件处理函数
  gogaming: function () {
    wx.setStorageSync('playnum', this.data.playnum)
    wx.setStorageSync('yixiu', this.data.yixiu)
    wx.setStorageSync('erju', this.data.erju)
    wx.setStorageSync('sijin', this.data.sijin)
    wx.setStorageSync('sanhong', this.data.sanhong)
    wx.setStorageSync('duitang', this.data.duitang)
    wx.setStorageSync('zhuangyuan', this.data.zhuangyuan)
    wx.navigateTo({
      url: '/pages/gaming/gaming'
    })
  },
})
