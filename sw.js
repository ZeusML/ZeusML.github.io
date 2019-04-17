/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2018/08/02/tags/index.html","d39aa338bcd40a1ba6af8d688edb750d"],["/2018/08/02/你好-Hexo/index.html","3701c92f17c6dff7f0da401f74316fbb"],["/2018/08/02/内存模型是怎么解决缓存一致性的/index.html","2c60a6f1bb9aefb1eca24ea7f3928cb0"],["/2018/08/02/计算机网络面试/index.html","8332d1dfc9b3d73f384466ddbbf16bc7"],["/2018/08/07/深入java虚拟机-第三章-垃圾收集器与内存分配策略/index.html","6775ec16f7104e01f457f86e3dc3ff76"],["/2018/08/08/Hexo-文章的模板文件/index.html","00d0af3f7bd68677a036c06209b57af1"],["/2018/08/09/Hexo-自带样式note标签/index.html","10158790455ff8cb915833ce8e237a1b"],["/2018/08/16/mysql执行流程/index.html","5c4190425c0ae10ab86911d0cf5bb9ee"],["/2018/08/17/java对象模型/index.html","dcf2952e9f6304e1af13f2f6d79346da"],["/2018/08/28/HttpClient出现大量CLOSE_WAIT/index.html","836ade75be4f34111c81e9a1f4de442e"],["/2018/08/31/J.U.C之并发工具类/index.html","40bc84dc27c67d8fb8e6cceddc5b3ed2"],["/2018/09/05/定位及优化SQL语句的性能问题/index.html","cfefa15e2b352284e24b62104de5c23f"],["/2018/09/06/Thread.Join()/index.html","c9c6ef56be22d73b1715709dc777f304"],["/2018/09/18/定时任务/index.html","3ac7374563e1479072154d76302f8e7d"],["/2018/09/26/String的intern()/index.html","637fe900ea75096feea253e387216c57"],["/2018/10/12/spring集成jetty/index.html","86e81f41cc4ea438f2931d968a3764ad"],["/2018/10/30/CGLIB用法介绍/index.html","8b9e898bb7a6d35159dd9b9e430ac41b"],["/2018/11/09/事务/index.html","b7f0591f9cd360a222256388fc18d230"],["/2018/11/13/线程池阻塞提交/index.html","803e9ea4e8405cf638b0a70bb521ecaa"],["/2018/11/27/Hadoop/index.html","b3195bc387de3ff69195b7ffcb4d7724"],["/2018/11/28/解惑各种mapreduce问题/index.html","715925b99c285dce63d90ca19957ffdc"],["/2018/11/29/mapreduce工作机制/index.html","5ccd7189409aa82702e8fc3ea57bce31"],["/2018/12/01/Hadoop2.6集群部署文档/index.html","f20c59d84f765f46fd81415de43694d7"],["/2018/12/04/Linux常用命令/index.html","f783f7178346550074764a6b91292bc5"],["/2018/12/06/java类加载/index.html","34fed015ad34d8962602b75761bd6093"],["/2018/12/06/线上问题排查/index.html","6e7c0f6116e7922f4f206aa03f0d36cd"],["/2019/01/16/RabbitMQ的ack机制/index.html","1ee80535c45bd3b22d1f8e1298aed3db"],["/2019/01/16/消息中间件/index.html","f2a7e26b6c1109c0899a86043a334d4e"],["/2019/01/16/降级方案/index.html","81185c53d4f4e894c9fa213e216e2fc9"],["/2019/01/17/RabbitMQ的confirm机制/index.html","44582bff1281259363dd35a2f9df695a"],["/2019/01/18/缓存架构优化/index.html","9458d3c30b6a22cfa0419df729a051fd"],["/2019/02/12/MySql学习记录/index.html","20572160120ce92485e1e5459b0d863a"],["/2019/02/18/cron表达式/index.html","1466b2f6370dc7321542487f15061c5e"],["/2019/02/22/MySQL高性能优化/index.html","ba3c37fb4f3c2f1f86f280966f7a1285"],["/2019/04/16/hello-world/index.html","ac20b3dc9910504fc9cacedef84dab7b"],["/about/index.html","83ddc74f288734e8645e6fbc1984b451"],["/archives/2018/08/index.html","832d95f8ba7ea749d4e9cc21ec816382"],["/archives/2018/08/page/2/index.html","6064dde895107e57d7a18e20c8c675de"],["/archives/2018/09/index.html","26f8f9ff51f5b9543668219f868aa8f1"],["/archives/2018/10/index.html","f19d0625fc0cb4eb8ca0df034aab4a88"],["/archives/2018/11/index.html","6f433874578a74ea1b215c6ec51f3bcb"],["/archives/2018/12/index.html","ec1d7b044d507aa75996655284e1e633"],["/archives/2018/index.html","4648864e32ba0f4a0d0ba6a5206e9621"],["/archives/2018/page/2/index.html","b1c3c2296ea92361e07f6bfade4e2fa9"],["/archives/2018/page/3/index.html","5448c3f85ae651df45d5f51b9864575c"],["/archives/2019/01/index.html","64a18263693cd8c721327bb5e49054b9"],["/archives/2019/02/index.html","e65381b62bcd25bef61c209b1edd06e8"],["/archives/2019/04/index.html","3ae34beca06f328ec0a0677f5a1bbba5"],["/archives/2019/index.html","4a6fe89466d8714ff44445d84bc88523"],["/archives/index.html","cd2e5fbe0f233eb9aebb6a43f8be3e24"],["/archives/page/2/index.html","0a7d65b14849546da0fb006b1ce5d7be"],["/archives/page/3/index.html","53759d11ce7a43ad224e016f85ea2b55"],["/archives/page/4/index.html","1f8b9842231affd357bf3a2f36f53bd8"],["/categories/Hexo/index.html","701c0d862b083c71220eaec8ec50af95"],["/categories/MQ/index.html","2dcce8b375217e33db6bed701ed642ad"],["/categories/bug/index.html","f0f53999dd7f79e7f504bec11f980f55"],["/categories/hadoop/index.html","35ce037fe722b83b17faba84af7bfa10"],["/categories/index.html","b846075d59067634171c5c06c58daec0"],["/categories/java/index.html","8c1d2015707a35daabf0c46ae90070cd"],["/categories/linux/index.html","0a458a31d88df9658504ba417779cb75"],["/categories/mysql/index.html","30005d143852dd99353196aaa38653bb"],["/categories/spring/index.html","3ec9d89642d260a12224ea694f0f78b9"],["/categories/架构/index.html","33450e54928edee4432c5685132bca96"],["/categories/概念/index.html","b38ca1345ad8e8bda5b9c17e10557bab"],["/categories/缓存/index.html","ec1f1b566c90984fd20d1cd4b2fae095"],["/categories/面试/index.html","35b08f465a91e60a3fb2decc54c56a59"],["/categories/项目/index.html","a3da7fb9fb4d52da56c4379818db2b00"],["/css/main.css","cdf13927ba7092175a5c40d7e523d5c9"],["/images/1168343.png","33a2939ff443fd020d393411e5a9ef8b"],["/images/algolia_logo.svg","88450dd56ea1a00ba772424b30b7d34d"],["/images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["/images/avatar.gif","2bed513bc5f13733cf9a8a12c4e1a971"],["/images/cc-by-nc-nd.svg","3b009b0d5970d2c4b18e140933547916"],["/images/cc-by-nc-sa.svg","cf2644b7aa5ebd3f5eab55329b4e7cb7"],["/images/cc-by-nc.svg","e63bcae937a1ae4cb6f83d8a1d26893c"],["/images/cc-by-nd.svg","78359b1307baffc2d0e8cffba5dee2dd"],["/images/cc-by-sa.svg","525d2a82716fe9860a65cf0ac5e231a0"],["/images/cc-by.svg","bd656500a74c634b4ff1333008c62cd8"],["/images/cc-zero.svg","2d6242e90c3082e7892cf478be605d26"],["/images/default_avatar.png","13736ab7511b09b017c2a4b9e032e44b"],["/images/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["/images/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["/images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/logo.svg","88985471c188e5c5a765a8f233c54df5"],["/images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/quote-l.svg","a9d75107c4d7e31612f98e78be0979f9"],["/images/quote-r.svg","5f902def9e09af7fc41e4cf86ad1a0f9"],["/images/searchicon.png","3d6b5c9d6d6c26a2b76a14b8fdf3438a"],["/index.html","f2bd4194c6f738d78117d86eb726b43d"],["/js/src/affix.js","683c19859764baf0d17538897ea1eba2"],["/js/src/algolia-search.js","f5fa392318805997089ceb3a925979ba"],["/js/src/bootstrap.js","2a1083772854ae2663748e0a25c17285"],["/js/src/exturl.js","2b444179b3145e5007b4d371dac07cd3"],["/js/src/hook-duoshuo.js","45997b0c06abff3cd88efd901f614065"],["/js/src/js.cookie.js","6e9eb1f53afb135aedaf90739c867738"],["/js/src/love.js","5a87dd19400b2870ef6734f56cfe2208"],["/js/src/motion.js","0f6add86607c451269d0b3d286c84d8b"],["/js/src/post-details.js","b8e8e27c27c697567879c52888ffc24c"],["/js/src/schemes/pisces.js","827b5ad25e1142277c1e7dfe0cacebe5"],["/js/src/scroll-cookie.js","890406ae3539e4721ef5f314542e5e46"],["/js/src/scrollspy.js","fafdd7ab6af233b701506c733910b7f5"],["/js/src/utils.js","24512c3455f976730b7bf75e1222c533"],["/lib/Han/dist/font/han-space.woff","b09f2dd7d3ad8ad07f3b8495133909d9"],["/lib/Han/dist/font/han.woff","e841c6b547bc06a06f60f4de52bf906e"],["/lib/Han/dist/han.css","cfcc552e7aebaef5e2f34aee030b956b"],["/lib/Han/dist/han.js","575b6c1667c01798730fbd972e959c9c"],["/lib/Han/dist/han.min.css","cab466d758269b437167422c4a16b364"],["/lib/Han/dist/han.min.js","96482c9c2b3c5ea9bf5a40db162c7f34"],["/lib/algolia-instant-search/instantsearch.min.css","029a13b44e6807955106ff3c075a02f9"],["/lib/algolia-instant-search/instantsearch.min.js","0db46eba0c8133693ee839507b1612f2"],["/lib/canvas-nest/canvas-nest.min.js","36e103d2a05bc706bac40f9ab8881eb7"],["/lib/canvas-ribbon/canvas-ribbon.js","16dc214240913551986593808c2efcfc"],["/lib/fancybox/source/blank.gif","325472601571f31e1bf00674c368d335"],["/lib/fancybox/source/fancybox_loading.gif","328cc0f6c78211485058d460e80f4fa8"],["/lib/fancybox/source/fancybox_loading@2x.gif","f92938639fa894a0e8ded1c3368abe98"],["/lib/fancybox/source/fancybox_overlay.png","77aeaa52715b898b73c74d68c630330e"],["/lib/fancybox/source/fancybox_sprite.png","783d4031fe50c3d83c960911e1fbc705"],["/lib/fancybox/source/fancybox_sprite@2x.png","ed9970ce22242421e66ff150aa97fe5f"],["/lib/fancybox/source/helpers/fancybox_buttons.png","b448080f8615e664b7788c7003803b59"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.css","cac75538c2e3ddfadef839feaca8e356"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.js","f53c246661fb995a3f12e67fa38e0fa0"],["/lib/fancybox/source/helpers/jquery.fancybox-media.js","c017067f48d97ec4a077ccdf056e6a2e"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.css","52ddd84a9f42c1d4cd86d518a7f7e8bc"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.js","cf1fc1df534eede4cb460c5cbd71aba6"],["/lib/fancybox/source/jquery.fancybox.css","6c55951ce1e3115711f63f99b7501f3a"],["/lib/fancybox/source/jquery.fancybox.js","921e9cb04ad6e2559869ec845c5be39b"],["/lib/fancybox/source/jquery.fancybox.pack.js","cc9e759f24ba773aeef8a131889d3728"],["/lib/fastclick/README.html","b3cd6e7f930bf6e410a2e7eab8a148a8"],["/lib/fastclick/lib/fastclick.js","6e9d3b0da74f2a4a7042b494cdaa7c2e"],["/lib/fastclick/lib/fastclick.min.js","a0fc6c24d1f3ff9ac281887c92b24acd"],["/lib/font-awesome/css/font-awesome.css","c495654869785bc3df60216616814ad1"],["/lib/font-awesome/css/font-awesome.min.css","269550530cc127b6aa5a35925a7de6ce"],["/lib/font-awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["/lib/font-awesome/fonts/fontawesome-webfont.svg","acf3dcb7ff752b5296ca23ba2c7c2606"],["/lib/font-awesome/fonts/fontawesome-webfont.ttf","b06871f281fee6b241d60582ae9369b9"],["/lib/font-awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["/lib/jquery/index.js","32015dd42e9582a80a84736f5d9a44d7"],["/lib/jquery_lazyload/CONTRIBUTING.html","7287727950845c8a1010f3933691afef"],["/lib/jquery_lazyload/README.html","d89aa4afe316331a25b636b5ead4716e"],["/lib/jquery_lazyload/jquery.lazyload.js","8b427f9e86864ee3aaf1ae33e6e14263"],["/lib/jquery_lazyload/jquery.scrollstop.js","f163fd8f02361928853668a96f8a1249"],["/lib/needsharebutton/font-embedded.css","dd8861d10d1ed6b5e0c0011adfb39be9"],["/lib/needsharebutton/needsharebutton.css","30f2f800e13f7b6b83629a4cbd9749ef"],["/lib/needsharebutton/needsharebutton.js","6c6f855f7d50f4bc3c804f52b03bbfbb"],["/lib/pace/pace-theme-barber-shop.min.css","e8dc66cf2d88abc25fbc89b8a0529abb"],["/lib/pace/pace-theme-big-counter.min.css","db2b8fe31e60f19021545277d2f6e05e"],["/lib/pace/pace-theme-bounce.min.css","ad954aa0bace4b213eeb19d6e89a0bda"],["/lib/pace/pace-theme-center-atom.min.css","8f6bc803acefc6f93afc98fb38201456"],["/lib/pace/pace-theme-center-circle.min.css","93c72298781226a80a9c66b27b21a57d"],["/lib/pace/pace-theme-center-radar.min.css","f0099bdd1cd42e9476bd7abc417c0328"],["/lib/pace/pace-theme-center-simple.min.css","eddff4756dbf21dbbff1c543bd894dde"],["/lib/pace/pace-theme-corner-indicator.min.css","776826157cb28ac1ee5e78771292b9ba"],["/lib/pace/pace-theme-fill-left.min.css","965859b39001da08e1e92327fe3d8e12"],["/lib/pace/pace-theme-flash.min.css","aab39b436e1fa0fdc51df06f2d53c38a"],["/lib/pace/pace-theme-loading-bar.min.css","4e05877f1f9efb9c1e7dd75cb78c764f"],["/lib/pace/pace-theme-mac-osx.min.css","29ae030ceaa8158352c5472218375b91"],["/lib/pace/pace-theme-minimal.min.css","f48f04d370993b55a2745e548cc82743"],["/lib/pace/pace.min.js","24d2d5e3e331c4efa3cda1e1851b31a7"],["/lib/three/canvas_lines.min.js","1324174ae6190fbf63b7bf0ad0a8a5bd"],["/lib/three/canvas_sphere.min.js","5c6bc45b137448b5b9df152ccfb2659c"],["/lib/three/three-waves.min.js","41059bd5e5c7aa520b1b411919e5121f"],["/lib/three/three.min.js","3298078bce82bdb1afadf5b1a280915e"],["/lib/ua-parser-js/dist/ua-parser.min.js","a6e833266c4b41fabb9ba94a145322d8"],["/lib/ua-parser-js/dist/ua-parser.pack.js","6b627e4d61a7135952824bb9c1a4a134"],["/lib/velocity/velocity.js","0361fa6dcf4cf4d19c593cdab0937dd0"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.js","f55d22cc592c9f8d4ffd3b41a6b90081"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/page/2/index.html","d808851cb72ba0d67e2b7a12d039780f"],["/page/3/index.html","d21cb5c3855202827780d2a0cff66f77"],["/page/4/index.html","13183d1173c9a1af579c7124882b5510"],["/sw-register.js","9bab092d9bedafebb049a80adbd74db0"],["/tags/Hexo/index.html","e5ba7960550885216d5d36e720d966df"],["/tags/MQ/index.html","4ff9cabbdf8298b41f421acc7c7fe506"],["/tags/cglib/index.html","17730c0e702064859d7bf7dbcb12f1bb"],["/tags/cron/index.html","828e23bd5d39c5f0d17cc2d8b37fa843"],["/tags/hadoop/index.html","a060da7f415906169a27d684ed8e97f0"],["/tags/http/index.html","74ef1ebf263db7d42005121fe70e0021"],["/tags/index.html","8873900bff522d4bbec791e8bb6ce26c"],["/tags/java/index.html","d254d57bebf9f589609218db70a77bb6"],["/tags/java/page/2/index.html","df8de2ed980f742270be37a92170e469"],["/tags/java多线程/index.html","66b803e6de46c09b6745075c03f31cdb"],["/tags/java虚拟机/index.html","cc3d7d9841047079e696ac900af2ae0b"],["/tags/jetty/index.html","2d0657726b262ad6f81594a6d018bcb3"],["/tags/linux/index.html","2366f70c3b0a2b68cfab1c361fee26e7"],["/tags/mysql/index.html","a54cd9cb3d1bf3f57f0fcc23634e1383"],["/tags/spring/index.html","93a2e3e47438585ebc563ef8fcb7ecbe"],["/tags/tcp/index.html","2bdb75b8a991f1e3542ccfdfee9cb19e"],["/tags/事务/index.html","89f8c5dec06ac66a6f2f38ea2be91a36"],["/tags/优化/index.html","14ec8e4a5ebc48467104a3cae5938a03"],["/tags/并发/index.html","d3b29007bf4492a9e7256ea2320d011e"],["/tags/缓存/index.html","4209c09ce475ed8e0bb4a148f392792d"],["/tags/虚拟机/index.html","d19b28204a39119de7fe47cf45dff3f1"],["/tags/计算机网络/index.html","1c3e75d9fb118d2df5630848d58e2685"],["/tags/降级/index.html","673c8a7e2f944f98806c062ff38c982e"],["/tags/面试/index.html","05decc961a6f06d14fc14b2383fc91e3"],["/tags/项目/index.html","8a89133947246f8f43267a01b237cfbc"],["/tags/高并发/index.html","0714498f5a2e13f5af83560dbd2ce250"],["/top/index.html","52dc8e226c7101c33aa99d86d046db6c"]];
var cacheName = 'sw-precache-v3--' + (self.registration ? self.registration.scope : '');
var firstRegister = 1; // 默认1是首次安装SW， 0是SW更新


var ignoreUrlParametersMatching = [/^utm_/];


var addDirectoryIndex = function (originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
        url.pathname += index;
    }
    return url.toString();
};

var cleanResponse = function (originalResponse) {
    // 如果没有重定向响应，不需干啥
    if (!originalResponse.redirected) {
        return Promise.resolve(originalResponse);
    }

    // Firefox 50 及以下不知处 Response.body 流, 所以我们需要读取整个body以blob形式返回。
    var bodyPromise = 'body' in originalResponse ?
        Promise.resolve(originalResponse.body) :
        originalResponse.blob();

    return bodyPromise.then(function (body) {
        // new Response() 可同时支持 stream or Blob.
        return new Response(body, {
            headers: originalResponse.headers,
            status: originalResponse.status,
            statusText: originalResponse.statusText
        });
    });
};

var createCacheKey = function (originalUrl, paramName, paramValue,
    dontCacheBustUrlsMatching) {

    // 创建一个新的URL对象，避免影响原始URL
    var url = new URL(originalUrl);

    // 如果 dontCacheBustUrlsMatching 值没有设置，或是没有匹配到，将值拼接到url.serach后
    if (!dontCacheBustUrlsMatching ||
        !(url.pathname.match(dontCacheBustUrlsMatching))) {
        url.search += (url.search ? '&' : '') +
            encodeURIComponent(paramName) + '=' + encodeURIComponent(paramValue);
    }

    return url.toString();
};

var isPathWhitelisted = function (whitelist, absoluteUrlString) {
    // 如果 whitelist 是空数组，则认为全部都在白名单内
    if (whitelist.length === 0) {
        return true;
    }

    // 否则逐个匹配正则匹配并返回
    var path = (new URL(absoluteUrlString)).pathname;
    return whitelist.some(function (whitelistedPathRegex) {
        return path.match(whitelistedPathRegex);
    });
};

var stripIgnoredUrlParameters = function (originalUrl,
    ignoreUrlParametersMatching) {
    var url = new URL(originalUrl);
    // 移除 hash; 查看 https://github.com/GoogleChrome/sw-precache/issues/290
    url.hash = '';

    url.search = url.search.slice(1) // 是否包含 '?'
        .split('&') // 分割成数组 'key=value' 的形式
        .map(function (kv) {
            return kv.split('='); // 分割每个 'key=value' 字符串成 [key, value] 形式
        })
        .filter(function (kv) {
            return ignoreUrlParametersMatching.every(function (ignoredRegex) {
                return !ignoredRegex.test(kv[0]); // 如果 key 没有匹配到任何忽略参数正则，就 Return true
            });
        })
        .map(function (kv) {
            return kv.join('='); // 重新把 [key, value] 格式转换为 'key=value' 字符串
        })
        .join('&'); // 将所有参数 'key=value' 以 '&' 拼接

    return url.toString();
};


var addDirectoryIndex = function (originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
        url.pathname += index;
    }
    return url.toString();
};

var hashParamName = '_sw-precache';
var urlsToCacheKeys = new Map(
    precacheConfig.map(function (item) {
        var relativeUrl = item[0];
        var hash = item[1];
        var absoluteUrl = new URL(relativeUrl, self.location);
        var cacheKey = createCacheKey(absoluteUrl, hashParamName, hash, false);
        return [absoluteUrl.toString(), cacheKey];
    })
);

function setOfCachedUrls(cache) {
    return cache.keys().then(function (requests) {
        // 如果原cacheName中没有缓存任何收，就默认是首次安装，否则认为是SW更新
        if (requests && requests.length > 0) {
            firstRegister = 0; // SW更新
        }
        return requests.map(function (request) {
            return request.url;
        });
    }).then(function (urls) {
        return new Set(urls);
    });
}

self.addEventListener('install', function (event) {
    event.waitUntil(
        caches.open(cacheName).then(function (cache) {
            return setOfCachedUrls(cache).then(function (cachedUrls) {
                return Promise.all(
                    Array.from(urlsToCacheKeys.values()).map(function (cacheKey) {
                        // 如果缓存中没有匹配到cacheKey，添加进去
                        if (!cachedUrls.has(cacheKey)) {
                            var request = new Request(cacheKey, { credentials: 'same-origin' });
                            return fetch(request).then(function (response) {
                                // 只要返回200才能继续，否则直接抛错
                                if (!response.ok) {
                                    throw new Error('Request for ' + cacheKey + ' returned a ' +
                                        'response with status ' + response.status);
                                }

                                return cleanResponse(response).then(function (responseToCache) {
                                    return cache.put(cacheKey, responseToCache);
                                });
                            });
                        }
                    })
                );
            });
        })
            .then(function () {
            
            // 强制 SW 状态 installing -> activate
            return self.skipWaiting();
            
        })
    );
});

self.addEventListener('activate', function (event) {
    var setOfExpectedUrls = new Set(urlsToCacheKeys.values());

    event.waitUntil(
        caches.open(cacheName).then(function (cache) {
            return cache.keys().then(function (existingRequests) {
                return Promise.all(
                    existingRequests.map(function (existingRequest) {
                        // 删除原缓存中相同键值内容
                        if (!setOfExpectedUrls.has(existingRequest.url)) {
                            return cache.delete(existingRequest);
                        }
                    })
                );
            });
        }).then(function () {
            
            return self.clients.claim();
            
        }).then(function () {
                // 如果是首次安装 SW 时, 不发送更新消息（是否是首次安装，通过指定cacheName 中是否有缓存信息判断）
                // 如果不是首次安装，则是内容有更新，需要通知页面重载更新
                if (!firstRegister) {
                    return self.clients.matchAll()
                        .then(function (clients) {
                            if (clients && clients.length) {
                                clients.forEach(function (client) {
                                    client.postMessage('sw.update');
                                })
                            }
                        })
                }
            })
    );
});



    self.addEventListener('fetch', function (event) {
        if (event.request.method === 'GET') {

            // 是否应该 event.respondWith()，需要我们逐步的判断
            // 而且也方便了后期做特殊的特殊
            var shouldRespond;


            // 首先去除已配置的忽略参数及hash
            // 查看缓存简直中是否包含该请求，包含就将shouldRespond 设为true
            var url = stripIgnoredUrlParameters(event.request.url, ignoreUrlParametersMatching);
            shouldRespond = urlsToCacheKeys.has(url);

            // 如果 shouldRespond 是 false, 我们在url后默认增加 'index.html'
            // (或者是你在配置文件中自行配置的 directoryIndex 参数值)，继续查找缓存列表
            var directoryIndex = 'index.html';
            if (!shouldRespond && directoryIndex) {
                url = addDirectoryIndex(url, directoryIndex);
                shouldRespond = urlsToCacheKeys.has(url);
            }

            // 如果 shouldRespond 仍是 false，检查是否是navigation
            // request， 如果是的话，判断是否能与 navigateFallbackWhitelist 正则列表匹配
            var navigateFallback = '';
            if (!shouldRespond &&
                navigateFallback &&
                (event.request.mode === 'navigate') &&
                isPathWhitelisted([], event.request.url)
            ) {
                url = new URL(navigateFallback, self.location).toString();
                shouldRespond = urlsToCacheKeys.has(url);
            }

            // 如果 shouldRespond 被置为 true
            // 则 event.respondWith()匹配缓存返回结果，匹配不成就直接请求.
            if (shouldRespond) {
                event.respondWith(
                    caches.open(cacheName).then(function (cache) {
                        return cache.match(urlsToCacheKeys.get(url)).then(function (response) {
                            if (response) {
                                return response;
                            }
                            throw Error('The cached response that was expected is missing.');
                        });
                    }).catch(function (e) {
                        // 如果捕获到异常错误，直接返回 fetch() 请求资源
                        console.warn('Couldn\'t serve response for "%s" from cache: %O', event.request.url, e);
                        return fetch(event.request);
                    })
                );
            }
        }
    });









/* eslint-enable */
