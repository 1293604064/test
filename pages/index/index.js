//0 引入用来发送请求的方法
import {request} from "../../request/index.js"
wx-Page({

  /**
   * 页面的初始数据
   */
  data: {
    //轮播图数组
      swiperList:[]
  },

  /**
   * 生命周期函数--监听页面加载,页面加载就会触发
   */
  onLoad: function (options) {
    var that = this;
    //发送异步请求获取数据
    // wx-wx.request({
    //   url:'https://api.zbztb.cn/api/public/v1/home/swiperdata',
    //   success: function(res) {
        
    //     that.setData({
    //       swiperList:res.data.message
    //     })
    //   },   
    //   fail: function(res) {},  //失败的返回函数
    //   complete: function(res) {},  //成功或者失败都会返回的数据
    // });

    request({ url:"https://api.zbztb.cn/api/public/v1/home/swiperdata"})
    .then(result=>{
      that.setData({
        swiperList: result.data.message
        })
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
    
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
    
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
    
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
    
  }
})