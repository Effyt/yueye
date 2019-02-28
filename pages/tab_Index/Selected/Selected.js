//videoDetail.js
Page({
  data: {
    changeTab: true,

  },
  changeTabStyle(){
    let currTab = this.data.changeTab;
    console.log(currTab)
    if (currTab){
      this.setData({ changeTab: false })
    }else{
      this.setData({ changeTab: true })
    }

  }




})