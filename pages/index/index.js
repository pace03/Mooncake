// index.js
Page({
  data: {
    yixiu:'x',
    erju:'x',
    sijin:'x',
    sanhong:'x',
    duitang:'x',
    zhuangyuan:'x',
    playnum:0,
  },
  handleinput_yixiu(e){
    this.setData({
      yixiu:e.detail.value
    })
  },
  handleinput_erju(e){
    this.setData({
      erju:e.detail.value
    })
  },
  handleinput_sijin(e){
    this.setData({
      sijin:e.detail.value
    })
  },
  handleinput_sanhong(e){
    this.setData({
      sanhong:e.detail.value
    })
  },
  handleinput_duitang(e){
    this.setData({
      duitang:e.detail.value
    })
  },
  handleinput_zhuangyuan(e){
    this.setData({
      zhuangyuan:e.detail.value
    })
  },
  handleinput_playnum(e){
    this.setData({
      playnum:e.detail.value
    })
  },
  // 跳转页面函数
  gogaming: function () {
    //将首页获得的数据转到本地缓存
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
