// index.js
Page({
  data: {
    dice:[0,0,0,0,0,0],
    num:[0,0,0,0,0,0],
    level:0,// level 0:无奖  level 1：一秀；  level 2：二举； level 3：四进； level 4：三红； level 5：对堂； level 6：状元,
    result:'白给'
  },
  // 事件处理函数
  gohistory() {
  wx.navigateTo({
    url: '/pages/history/history'
  })
  },
  judge:function(){
    for(let i=0;i<6;i++){
      if(i==3&&this.data.num[3]==4||this.data.num[i]>=5){
        if(this.data.level<6){
          this.data.level=6;
        }
      }
    }
    if(this.data.num==[1,1,1,1,1,1]&&this.data.level<5){
      this.data.level=5;
    }
    if(this.data.num[3]==3&&this.data.level<4){
      this.data.level=4;
    }
    for(let i=0;i<6&&i!=3;i++){
      if(this.data.num[i]==4&&this.data.level<3){
        this.data.level=3;
      }
    }
    if(this.data.num[3]==2&&this.data.level<2){
      this.data.level=2;
    }
    if(this.data.num[3]==1&&this.data.level<1){
      this.data.level=1;
    }
    switch(this.data.level){
      case 1:
        this.setData({
          'result':'一秀'
        })
        break;
      case 2:
        this.setData({
          'result':'二举'
        })
        break;
      case 3:
        this.setData({
          'result':'四进'
        })
        break;
      case 4:
        this.setData({
          'result':'三红'
        })
        break;
      case 5:
        this.setData({
          'result':'对堂'
        })
        break;
      case 6:
        this.setData({
          'result':'状元'
        })
        break;
      default:
        break
    }

  },
  gorandom(){
    this.data.level=0
    this.setData({
      'result':'白给'
    })
    for(let i=0;i<6;i++){
      this.data.num[i]=0
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
    console.log(this.data.dice)
    console.log(this.data.level)
    console.log(this.data.result)
  }
})