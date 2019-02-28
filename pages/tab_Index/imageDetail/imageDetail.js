//videoDetail.js
Page({
  data: {
    showModal:false,
  },
  clickModal(e){
    let isShow = this.data.showModal;
    if (isShow){
      this.setData({ showModal: false })
    }else{
      this.setData({ showModal: true })
    }
    
  }

})