const INITIAL_STATE = {
  sections: [
    {
      title: 'totoro',
      imageUrl: 'https://thumbnail0.baidupcs.com/thumbnail/7065702da34e7809a8c9f1714311aae7?fid=1218555770-250528-441773617678890&time=1572818400&rt=sh&sign=FDTAER-DCb740ccc5511e5e8fedcff06b081203-ZIm255LiC%2BsO%2FUxnfhHcNSKBl%2B4%3D&expires=8h&chkv=0&chkbd=0&chkpc=&dp-logid=208758352305448119&dp-callid=0&size=c710_u400&quality=100&vuk=-&ft=video',
      id: 1,
      linkUrl: 'shop/totoro'
    },
    {
      title: 'snoopy',
      imageUrl: 'https://thumbnail0.baidupcs.com/thumbnail/a9472d25afb88ff502161758c00f8df3?fid=1218555770-250528-628298155642552&time=1572818400&rt=sh&sign=FDTAER-DCb740ccc5511e5e8fedcff06b081203-Urzdb%2BPnkW3oz4OaTL0aLiVqKAA%3D&expires=8h&chkv=0&chkbd=0&chkpc=&dp-logid=209010189618062074&dp-callid=0&size=c710_u400&quality=100&vuk=-&ft=video',
      id: 2,
      linkUrl: 'shop/snoopy'
    },
    {
      title: 'mickey',
      imageUrl: 'https://thumbnail0.baidupcs.com/thumbnail/151df370f7f5417e7e93aaf0261f21c1?fid=1218555770-250528-93672851018839&time=1572818400&rt=sh&sign=FDTAER-DCb740ccc5511e5e8fedcff06b081203-4HLXRH%2FaLRDFHyGpSOLUV5qh8oU%3D&expires=8h&chkv=0&chkbd=0&chkpc=&dp-logid=209043407330324011&dp-callid=0&size=c710_u400&quality=100&vuk=-&ft=video',
      id: 3,
      linkUrl: 'shop/mickey'
    },
    {
      title: 'hellokitty',
      imageUrl: 'https://thumbnail0.baidupcs.com/thumbnail/b7eec95d1f3e25de2196a306d0ba4ad3?fid=1218555770-250528-19377182830439&time=1572818400&rt=sh&sign=FDTAER-DCb740ccc5511e5e8fedcff06b081203-t3eojFq0CORHA1yPRwuFp4Px%2BKk%3D&expires=8h&chkv=0&chkbd=0&chkpc=&dp-logid=209038858066361390&dp-callid=0&size=c710_u400&quality=100&vuk=-&ft=video',
      size: 'large',
      id: 4,
      linkUrl: 'shop/hellokitty'
    },
    {
      title: 'benben',
      imageUrl: 'https://thumbnail0.baidupcs.com/thumbnail/e891b52c779af3e6f08d9937013e75ad?fid=1218555770-250528-954791472897412&time=1572818400&rt=sh&sign=FDTAER-DCb740ccc5511e5e8fedcff06b081203-M2iLi1Gk5mQI4vF9hSZWZwrK9wY%3D&expires=8h&chkv=0&chkbd=0&chkpc=&dp-logid=209051327313327256&dp-callid=0&size=c710_u400&quality=100&vuk=-&ft=video',
      size: 'large',
      id: 5,
      linkUrl: 'shop/benben'
    }
  ]
};

const directoryReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    default:
      return {...state};
  }
};

export default directoryReducer; 