// pages/getPic/getPic.ts
Page({
    /* 页面的初始数据 */
    data: {
        Avatarsrc:"",
        //canIUse: wx.canIUse('button.open-type.getUserInfo')  
        functionCards: [
            {
                src:"/static/option_icon_number.png",
                target: '/pages/queueLength/queueLength', // 
                id:"1"
            },{
                src:"/static/option_icon_path.png",
                target: '/pages/canvas/canvas', // 
                id:"2"
            },{
                src:"/static/option_icon_foodIntro.png",
                target: '/pages/foodIntro/foodIntro',   //跳转到美食介绍页面
                id:"3"
            },
        ]
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad() {
        
    },

    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady() {

    },

    /**
     * 生命周期函数--监听页面显示
     */
    onShow() {

    },

    /**
     * 生命周期函数--监听页面隐藏
     */
    onHide() {

    },

    /**
     * 生命周期函数--监听页面卸载
     */
    onUnload() {

    },

    /**
     * 页面相关事件处理函数--监听用户下拉动作
     */
    onPullDownRefresh() {

    },

    /**
     * 页面上拉触底事件的处理函数
     */
    onReachBottom() {

    },

    /**
     * 用户点击右上角分享
     */
    onShareAppMessage() {

    },

    cardTapHandler(event: any) {
        // 获取传入参数。
        // dataset 内的内容在 wxml 内设置。
        let target = event.currentTarget.dataset.target
        // 放开下方注释，重新编译运行，点击卡片，然后注意控制台输出。
        // console.log(event)

        // 使用 wx.navigateTo 跳转到指定页面。
        // 可自行了解 wx.redirectTo, wx.navigateBack 等函数。
        wx.navigateTo({
            url: target
        })
    }
})