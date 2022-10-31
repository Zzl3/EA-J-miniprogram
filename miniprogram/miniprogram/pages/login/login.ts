//连接数据库
const db=wx.cloud.database()

// pages/login.ts
Page({
    /**
     * 页面的初始数据
     */
    data: {
    },
    getData(e:any){
        var name = e.detail.value.name.trim();
        var pwd= e.detail.value.pwd.trim();
        db.collection('demouser').where({
              username: name
          }).get({
            success: function(res) {
                if(res.data[0].password==pwd){
                    console.log("登录成功")
                }else{
                    console.log("登录失败")
                }
           }
       })
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

    }
})