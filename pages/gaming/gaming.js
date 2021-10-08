// gaming.js
Page({
  data: {
    dice:[0,0,0,0,0,0],//骰子点数
    num:[0,0,0,0,0,0],//计数每个点数出现的次数
    level:0,// level 0:无奖  level 1：一秀；  level 2：二举； level 3：四进； level 4：三红； level 5：对堂； level 6：状元,
    result:'开始博饼吧',
    flag1:0,
    flag2:0,
    flag3:0,
    flag4:0,
    flag5:0,
    flag6:0,
    score:0,//同为状元大小判定
    playernum:0,//玩家数量
    playernum_now:0,//当前玩家号码
    playernum_next:1,//下一个玩家
    /////奖品名
    award_result:'？',
    yixiu_award:'？',
    erju_award:'？',
    sijin_award:'？',
    sanhong_award:'？',
    duitang_award:'？',
    zhuangyuan_award:'？',
    /////奖品数量
    yixiu_num:0,
    erju_num:0,
    sijin_num:0,
    sanhong_num:0,
    duitang_num:0,
    zhuangyuan_num:0,
    ///最终状元的数据
    max_score:0,
    max_player:0,
    ////
    record:[{count1:0,count2:0,count3:0,count4:0,count5:0,count6:0}]
  },
  // 事件处理函数
  onLoad:function(options){
    this.setData({
      playernum:parseInt(wx.getStorageSync('playnum')),
      yixiu_award:wx.getStorageSync('yixiu'),
      erju_award:wx.getStorageSync('erju'),
      sijin_award:wx.getStorageSync('sijin'),
      sanhong_award:wx.getStorageSync('sanhong'),
      duitang_award:wx.getStorageSync('duitang'),
      zhuangyuan_award:wx.getStorageSync('zhuangyuan'),
      playernum_now:0,
      playernum_next:1,
      yixiu_num:32,
      erju_num:16,
      sijin_num:8,
      sanhong_num:4,
      duitang_num:2,
      zhuangyuan_num:1,
      max_player:0,
      max_score:0
    })
    for(let i=1;i<this.data.playernum;i++){
      var newArray=[{count1:0,count2:0,count3:0,count4:0,count5:0,count6:0}]
      this.setData({
        record:this.data.record.concat(newArray)
      })
    }
    console.log(this.data.playernum)
    
    
    // console.log(this.data.yixiu_award)
    // console.log(this.data.erju_award)
    // console.log(this.data.sijin_award)
    // console.log(this.data.sanhong_award)
    // console.log(this.data.duitang_award)
    // console.log(this.data.zhuangyuan_award)
    
  },
  //跳转历史记录页面
  gohistory() {
    wx.setStorageSync('maxplayer', this.data.max_player)
    wx.setStorageSync('record', JSON.stringify(this.data.record))
    wx.navigateTo({
     url: '/pages/history/history'
    })
  },
//跳转博饼规则页面
  gorule() {
  wx.navigateTo({
    url: '/pages/rul/rul'
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
    if(this.data.level==6){
      if(this.data.num[3]==6&&this.data.score<600){
        this.data.score=600;
      }//6个4
      for(let i=0;i<6;i++){
        if(this.data.num[i]==6&&this.data.score<500){
          this.data.score=500+i
        }
      }//6个x
      if(this.data.num[3]==4&&this.data.num[0]==2&&this.data.score<400){
        this.data.score=400
      }//4个4，2个1
      if(this.data.num[3]==5&&this.data.score<300){
        this.data.score=300
        for(let i=0;i<6;i++){
          if(this.data.num[i]==1){
            this.data.score+=i
          }
        }
      }//5个4+x
      for(let i=0;i<6;i++){
        if(this.data.num[i]==5&&this.data.score<200){
          this.data.score=200+i*10
          for(let j=0;j<6;j++){
            if(this.data.num[j]==1){
              this.data.score+=j
            }
          }
        }
      }//5个x+y
      if(this.data.num[3]==4&&this.data.score<100){
        this.data.score=100
        for(let i=0;i<6;i++){
          if(this.data.num[i]!=0&&this.data.num[i]!=4){
            this.data.score+=i*this.data.num[i]
          }
        }
      }//4个4+x+y
    }
    if(this.data.level==6&&this.data.score>this.data.max_score){
      this.data.max_score=this.data.score
      this.data.max_player=this.data.playernum_now+1
      if(this.data.max_player>this.data.playernum){
        this.data.max_player=1
      }
   
      
    }
    // console.log(this.data.max_player)
    // console.log(this.data.max_score)
    ///////状元判定
    if(this.data.level<5){
      let flag=0
      for(let i=0;i<6;i++){
        if(this.data.num[i]!=1){
          flag=1
        }
      }
      if(flag==0){
        this.data.level=5;
      }
    }//对堂判定
    console.log(this.data.num)
    if(this.data.num[3]==3&&this.data.level<4){
      this.data.level=4;
    }//三红判定
    for(let i=0;i<6&&i!=3;i++){
      if(this.data.num[i]==4&&this.data.level<3){
        this.data.level=3;
      }
    }//四进判定
    if(this.data.num[3]==2&&this.data.level<2){
      this.data.level=2;
    }//二举判定
    if(this.data.num[3]==1&&this.data.level<1){
      this.data.level=1;
    }//一秀判定
    if(this.data.level){
      if(this.data.playernum_now==this.data.playernum){
        this.data.playernum_now=0
      }
      switch(this.data.level){
        case 1:
          if(this.data.yixiu_num>0){
            this.data.record[this.data.playernum_now].count1+=1
          }
          break;
        case 2:
          if(this.data.erju_num>0){
            this.data.record[this.data.playernum_now].count2+=1
          }
          break;
        case 3:
          if(this.data.sijin_num>0){
            this.data.record[this.data.playernum_now].count3+=1
          }
          break;
        case 4:
          if(this.data.sanhong_num>0){
            this.data.record[this.data.playernum_now].count4+=1
          }
          break;
        case 5:
          if(this.data.duitang_num>0){
            this.data.record[this.data.playernum_now].count5+=1
          }
          break;
        case 6:
          
            this.data.record[this.data.playernum_now].count6+=1
        
          break;
        default:
          break;
      }
      if(this.data.playernum_now==0){
        this.data.playernum_now=this.data.playernum
      }
    }
    //console.log(this.data.record)
    switch(this.data.level){//设定当前摇奖结果
      case 1:
        this.data.yixiu_num-=1
        if(this.data.yixiu_num>=0){
          this.setData({
            'result':'一秀'
          })
        }else{
          this.setData({
            'result':'一秀没了'
          })
          this.data.yixiu_num=-1
        }
        break;
      case 2:
        this.data.erju_num-=1
        if(this.data.erju_num>=0){
          this.setData({
            'result':'二举'
          })
        }else{
          this.setData({
            'result':'二举没了'
          })
          this.data.erju_num=-1
        }
        break;
      case 3:
        this.data.sijin_num-=1
        if(this.data.sijin_num>=0){
          this.setData({
            'result':'四进'
          })
        }else{
          this.setData({
            'result':'四进没了'
          })
          this.data.sijin_num=-1
        }
        break;
      case 4:
        this.data.sanhong_num-=1
        if(this.data.sanhong_num>=0){
          this.setData({
            'result':'三红'
          })
        }else{
          this.setData({
            'result':'三红没了'
          })
          this.data.sanhong_num=-1
        }
        break;
      case 5:
        this.data.duitang_num-=1
        if(this.data.duitang_num>=0){
          this.setData({
            'result':'对堂'
          })
        }else{
          this.setData({
            'result':'对堂没了'
          })
          this.data.duitang_num=-1
        }
        break;
      case 6:
        this.data.zhuangyuan_num-=1
        if(this.data.zhuangyuan_num>=0){
          if(this.data.score==600){
            this.setData({
              'result':'六杯红'
            })
          }
          else if(this.data.score>=500&&this.data.score<600){
            this.setData({
              'result':'六黑'
            })
          }
          else if(this.data.score==400){
            this.setData({
              'result':'状元插金花'
            })
          }
          else if(this.data.score>=200&&this.data.score<400){
            this.setData({
              'result':'五子登科'
            })
          }
          else if(this.data.score>=100&&this.data.score<200){
            this.setData({
              'result':'普通状元'
            })
          }
        }else{
          this.setData({
            'result':'状元'
          })
          this.data.zhuangyuan_num=-1
        }
        break;
      default:
        break
    }
    // console.log(this.data.yixiu_num)
    // console.log(this.data.erju_num)
    // console.log(this.data.sijin_num)
    // console.log(this.data.sanhong_num)
    // console.log(this.data.duitang_num)
    // console.log(this.data.zhuangyuan_num)
    
    switch(this.data.dice[0]){//第一个骰子
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
    switch(this.data.dice[1]){//第二个骰子
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
    switch(this.data.dice[2]){//第三个骰子
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
    switch(this.data.dice[3]){//第四个骰子
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
    switch(this.data.dice[4]){//第五个骰子
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
    switch(this.data.dice[5]){//第六个骰子
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
    /////游戏结束判定
    wx.setStorageSync('endflag', 0)
      // console.log(this.data.yixiu_num)
      // console.log(this.data.erju_num)
      // console.log(this.data.sijin_num)
      // console.log(this.data.sanhong_num)
      // console.log(this.data.duitang_num)
      // console.log(this.data.zhuangyuan_num)
    if(this.data.yixiu_num<=0&&this.data.erju_num<=0&&this.data.sijin_num<=0&&this.data.sanhong_num<=0&&this.data.duitang_num<=0&&this.data.zhuangyuan_num<=0){
      wx.setStorageSync('endflag',1)
      wx.setStorageSync('maxplayer', this.data.max_player)
      //console.log(wx.getStorageSync('endflag'))
      
      this.gohistory()
    }else{
      wx.setStorageSync('endflag', 0)
    }
  },
  gorandom(){//掷骰子动作
    this.data.level=0
    this.data.score=0
    this.setData({
      'result':'什么也没有博到'
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
    // this.setData({
    //   'dice[0]':1,
    //   'dice[1]':4,
    //   'dice[2]':3,
    //   'dice[3]':2,
    //   'dice[4]':6,
    //   'dice[5]':5
    // })
    for(let i=0;i<6;i++){
      this.data.num[this.data.dice[i]-1]+=1
    }
    this.judge()
    this.setData({
      'playernum_now':this.data.playernum_now+1,
      'playernum_next':this.data.playernum_next+1
    })
    if(this.data.playernum_now==this.data.playernum+1){
      this.setData({
        'playernum_now':1
      })
    }
    if(this.data.playernum_next==this.data.playernum+1){
      this.setData({
        'playernum_next':1
      })
    }
    console.log(this.data.playernum_now)
    // console.log(this.data.dice)
    // console.log(this.data.level)
    // console.log(this.data.score)
    console.log(this.data.result)
  }
})