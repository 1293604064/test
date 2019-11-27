export const request=(params)=>{
  return new Promise((resoLve,reject)=>{
    wx.request({
      ...params,
      success:(result)=>{
        resoLve(result);
      },
      fail:(err)=>{
        reject(err);
      }
    });
  })
}