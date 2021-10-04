// index.js
Page({
  data: {
   flag:true,
   name:'',
   Chinese_score: '',
   Math_score:'',
   average:''
  },
  // 事件处理函数
  gogaming: function () {
    wx.navigateTo({
      url: '/pages/gaming/gaming'
    })
  },
  nameInput:function(e){
    this.setData({
      name:e.detail.value
    });
  },
  ChineseInput:function(e){
    this.setData({
      Chinese_score:e.detail.value
    });
  },
  MathInput:function(e){
    this.setData({
      Math_score:e.detail.value
    });
  },
  mysubmit:function(){
    if(this.data.Chinese_score==''||this.data.Math_score==''||this.data.name==''){
      return;
    }else{
      var avg=(this.data.Chinese_score*1+this.data.Math_score*1)/2;
      this.setData({
        flag: false,
        average:avg,
      });
    }
  }
})
