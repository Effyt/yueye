//navBar.js
Page({
  data: {
    navInfo:"2222",
    navData2: [
        {
          name: "广场",  //文本
          current: 1,    //是否是当前页，0不是  1是
          ico: 'icon-qiugouguanli',  //不同图标
          fn: 'gotoIndex'   //对应处理函数
        }, {
          name: "旧物",
          current: 0,
          ico: 'icon-mingpianjia',
          fn: 'gotoOldGoods'
        }, {
          name: "发布",
          current: 0,
          ico: '',
          fn: 'gotoPublish'
        }
    ],
  },
  
})
