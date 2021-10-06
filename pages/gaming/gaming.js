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
  judge:function(){
    
  },
  gorandom(){
    for(let i=0;i<6;i++){
      this.data.num[i]=0;
    }
    this.setData({
      'dice[0]':Math.floor(Math.random()*6)+1,
      'dice[1]':Math.floor(Math.random()*6)+1,
      'dice[2]':Math.floor(Math.random()*6)+1,
      'dice[3]':Math.floor(Math.random()*6)+1,
      'dice[4]':Math.floor(Math.random()*6)+1,
      'dice[5]':Math.floor(Math.random()*6)+1
    })
    for(let i=0;i<6;i++){
      this.data.num[this.data.dice[i]-1]+=1;
    }
    this.judge()
    console.log(this.data.num)
  }
})