// index.js
Page({
  data: {
    dice:[0,0,0,0,0,0],
    num:[0,0,0,0,0,0],
    level:0,// level 0:无奖  level 1：一秀；  level 2：二举； level 3：四进； level 4：三红； level 5：对堂； level 6：状元,
    result:'白给',
    flag1:0,
    flag2:0,
    flag3:0,
    flag4:0,
    flag5:0,
    flag6:0,
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
 
    switch(this.data.dice[0]){
      case 1:
        this.setData({
         flag1:1
        })
        break;
      case 2:
        this.setData({
          flag1:2
        })
        break;
      case 3:
        this.setData({
          flag1:3
        })
        break;
      case 4:
        this.setData({
          flag1:4
        })
        break;
      case 5:
        this.setData({
          flag1:5
        })
        break;
      case 6:
        this.setData({
          flag1:6
        })
        break;
      default:
        this.setData({
          flag1:0
        })
  }
  switch(this.data.dice[1]){
    case 1:
      this.setData({
       flag2:1
      })
      break;
    case 2:
      this.setData({
        flag2:2
      })
      break;
    case 3:
      this.setData({
        flag2:3
      })
      break;
    case 4:
      this.setData({
        flag2:4
      })
      break;
    case 5:
      this.setData({
        flag2:5
      })
      break;
    case 6:
      this.setData({
        flag2:6
      })
      break;
    default:
      break
}
switch(this.data.dice[2]){
  case 1:
    this.setData({
     flag3:1
    })
    break;
  case 2:
    this.setData({
      flag3:2
    })
    break;
  case 3:
    this.setData({
      flag3:3
    })
    break;
  case 4:
    this.setData({
      flag3:4
    })
    break;
  case 5:
    this.setData({
      flag3:5
    })
    break;
  case 6:
    this.setData({
      flag3:6
    })
    break;
  default:
    break
}
switch(this.data.dice[3]){
  case 1:
    this.setData({
     flag4:1
    })
    break;
  case 2:
    this.setData({
      flag4:2
    })
    break;
  case 3:
    this.setData({
      flag4:3
    })
    break;
  case 4:
    this.setData({
      flag4:4
    })
    break;
  case 5:
    this.setData({
      flag4:5
    })
    break;
  case 6:
    this.setData({
      flag4:6
    })
    break;
  default:
    break
}
switch(this.data.dice[4]){
  case 1:
    this.setData({
     flag5:1
    })
    break;
  case 2:
    this.setData({
      flag5:2
    })
    break;
  case 3:
    this.setData({
      flag5:3
    })
    break;
  case 4:
    this.setData({
      flag5:4
    })
    break;
  case 5:
    this.setData({
      flag5:5
    })
    break;
  case 6:
    this.setData({
      flag5:6
    })
    break;
  default:
    break
}
switch(this.data.dice[5]){
  case 1:
    this.setData({
     flag6:1
    })
    break;
  case 2:
    this.setData({
      flag6:2
    })
    break;
  case 3:
    this.setData({
      flag6:3
    })
    break;
  case 4:
    this.setData({
      flag6:4
    })
    break;
  case 5:
    this.setData({
      flag6:5
    })
    break;
  case 6:
    this.setData({
      flag6:6
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
},
)