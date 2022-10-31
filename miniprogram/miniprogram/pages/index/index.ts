// index.ts
// 获取应用实例
const app = getApp<IAppOption>()

Page({
  data:{
    buttomUrl:"/pages/option/option"  /**跳转的页面url**/
  },
  login(){
    wx.navigateTo({
      url: "/pages/login/login"
    })
  },
  cardTapHandler() {
    // 获取传入参数。
    // dataset 内的内容在 wxml 内设置。
    let target = this.data.buttomUrl
    // 放开下方注释，重新编译运行，点击卡片，然后注意控制台输出。
    // console.log(event)
    // 使用 wx.navigateTo 跳转到指定页面。
    // 可自行了解 wx.redirectTo, wx.navigateBack 等函数。
    wx.navigateTo({
        url: target
    })
  }
})
