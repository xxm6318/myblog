// 请从开者中心获取 "Client-end (Target Recognition) URL"，格式如：https://af0c1ca3b41857bd8d6b44d480601c74.cn1.crs.easyar.com:8443/search
const app = new App('https://af0c1ca3b41857bd8d6b44d480601c74.cn1.crs.easyar.com:8443/search');
// 如果使用自定义方法获取token
 app.setToken({
    'crsAppId': 'aeb97ec3f4925b07442a51f1aa91ca19',
    'token': 'utJelq45QKx3lGIVI4r61qRN1M0PG3qjyQVZiLWSe5MD8wOUXxmnM4YofuCDs+wCYR1PrwLGDJdt9nIUh0p+OdK+JJv8PvNEqWsBRGBrVu+lzVmBGxk4Yaj1pEIPkh72uWfbQj+pTxfL93GblBYV1S4CrLwPwRsJlDoZ79FOgTVWc8TOyuZjtchB/2FdysJPJMhelgyG3VbhS7d0EaXLi64VmaEtWo/MWHndwRDF83UvR9JCCA/PTFWSsFlJQ2v3dfyXeAj+GYlcYjBw/rlUyhYCMJE47GejVCy97ygs5Y9fBmJfSeG/u1XeVossQZUpYSPXGV9CbvYa42rqg5Abs8nONadHFmc+MRChrecSbWkpYqKB0BSYB2LecaY2oRqcmYXiav3K0f17am0Zl7yzWtBk+s38d8BLMlyL5YrKTK8Zrjox3ad947Q4DcTunhgqHRkBVQOKhSOEPkvNRtHheg==' // APIKey+APISecret生成token
 });
// 如果使用EasyAR提供的集成环境
app.useEasyAr();
// 识别成功后的回调
app.callback = (msg) => {
    console.info(msg);
    const setting = {
        video: '//staticfile-cdn.sightp.com/sightp/webar/webardemo-final.mp4',
    };
    // 可以将 setting 作为meta上传到EasyAR的云识别，使用方法如下:
    // const setting = JSON.parse(window.atob(msg.target.meta));
    playVideo(setting);
};
// 在手机上可能不会自动播放
function playVideo(setting) {
    let video = document.querySelector('#easyARVideo');
    if (video === null) {
        video = document.createElement('video');
        video.setAttribute('id', 'easyARVideo');
        video.setAttribute('controls', 'controls');
        video.setAttribute('playsinline', 'playsinline');
        video.setAttribute('preload', 'preload');
        video.setAttribute('style', 'position:absolute;top:0;left:0;width:100%;height:100%;z-index:99');
        document.querySelector('#easyAR').appendChild(video);
    }
    video.setAttribute('src', setting.video);
    video.play().then(() => {
    }).catch((err) => {
        // 需要使用点击事件播放。
        console.info('播放视频失败');
        console.info(err);
    });
}
//# sourceMappingURL=app.js.map