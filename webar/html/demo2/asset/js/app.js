// 请从开者中心获取 "Client-end (Target Recognition) URL"，格式如：https://af0c1ca3b41857bd8d6b44d480601c74.cn1.crs.easyar.com:8443/search
const app = new App('http://67977f2a507547229ee31238ff0b0d4b.cn1.crs.easyar.com:8080/search/');
// 如果使用自定义方法获取token
app.setToken({
    'crsAppId': 'aeb97ec3f4925b07442a51f1aa91ca19',
    'token': 'utJelq45QKx3lGIVI4r61qRN1M0PG3qjyQVZiLWSe5MD8wOUXxmnM4YofuCDs+wCYR1PrwLGDJdt9nIUh0p+OdK+JJv8PvNEqWsBRGBrVu+lzVmBGxk4Yaj1pEIPkh72uWfbQj+pTxfL93GblBYV1S4CrLwPwRsJlDoZ79FOgTVWc8TOyuZjtchB/2FdysJPJMhelgyG3VbhS7d0EaXLi64VmaEtWo/MWHndwRDF83UvR9JCCA/PTFWSsFlJQ2v3dfyXeAj+GYlcYjBw/rlUyhYCMJE47GejVCy97ygs5Y9fBmJfSeG/u1XeVossQZUpYSPXGV9CbvYa42rqg5Abs8nONadHFmc+MRChrecSbWkpYqKB0BSYB2LecaY2oRqcmYXiav3K0f17am0Zl7yzWtBk+s38d8BLMlyL5YrKTK8Zrjox3ad947Q4DcTunhgqHRkBVQOKhSOEPkvNRtHheg==' // APIKey+APISecret生成token
});
// 如果使用EasyAR提供的集成环境
// app.useEasyAr();
// 识别成功后的回调
app.callback = (msg) => {
    console.info(msg);
    const setting = {
        model: 'asset/model/trex_v3.fbx',
        scale: 0.02,
        position: [0, 0, 0]
    };
    // 可以将 setting 作为meta上传到EasyAR的云识别，使用方法如下:
    // const setting = JSON.parse(window.atob(msg.target.meta));
    showModel(setting);
};
function showModel(setting) {
    const canvas = document.querySelector('.easyARCanvas');
    if (canvas) {
        canvas.remove();
    }
    app.show('loadingWrap');
    // ThreeJS简单使用类
    const threeHelper = new ThreeHelper();
    threeHelper.loadObject(setting, (p) => {
        const val = Math.ceil(p.loaded / p.total * 100);
        document.querySelector('#loadingPercent').innerHTML = `${val}%`;
        if (val >= 100) {
            app.hide('loadingWrap');
        }
    });
}
//# sourceMappingURL=app.js.map