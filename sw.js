/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2018/08/02/tags/index.html","6ba5d46a93bb73afcc5405b0a6175126"],["/2018/08/02/你好-Hexo/index.html","d24d171a2a6ad5149aec0b0f3676fdad"],["/2018/08/02/内存模型是怎么解决缓存一致性的/index.html","fa9490cbad8c81932403286b29131746"],["/2018/08/02/计算机网络面试/index.html","71dfe0917f3f3557c5050f9d7eda32b9"],["/2018/08/07/深入java虚拟机-第三章-垃圾收集器与内存分配策略/index.html","fcaca87f3cf8994b7db76341470d7382"],["/2018/08/08/Hexo-文章的模板文件/index.html","fd753867a1d2b7efc17169905338cf1f"],["/2018/08/09/Hexo-自带样式note标签/index.html","bb7737727019f1004f5be427c7302d13"],["/2018/08/16/mysql执行流程/index.html","2ad09912d732c877fae136ae906b3050"],["/2018/08/17/java对象模型/index.html","85e6ba7b3e6e26232915140108416913"],["/2018/08/28/HttpClient出现大量CLOSE_WAIT/index.html","f240fbef0abe500ff33d4d6161330920"],["/2018/08/31/J.U.C之并发工具类/index.html","a827a4c0a02cfec090a0d8e8e088023c"],["/2018/09/05/定位及优化SQL语句的性能问题/index.html","72a0e578e7c77dc593a2f7a9dc206886"],["/2018/09/06/Thread.Join()/index.html","46deac98dabcae67a9d0c4e037f397f2"],["/2018/09/18/定时任务/index.html","584419284d879f3a1eca5633be171d3e"],["/2018/09/26/String的intern()/index.html","721e0f38858bf3da6ff0b79114e304c0"],["/2018/10/12/spring集成jetty/index.html","14c867cc4526a069486112b16680e187"],["/2018/10/30/CGLIB用法介绍/index.html","f0f7599e4efb661fb050d4f41a6d4e5e"],["/2018/11/09/事务/index.html","4ad86fe22ded35e6eac30c5b3ea0af78"],["/2018/11/13/线程池阻塞提交/index.html","70064c8fdcc27496809501c639d0d02d"],["/2018/11/27/Hadoop/index.html","e6e0883081b96e095035148d01aebb38"],["/2018/11/28/解惑各种mapreduce问题/index.html","ef326f1ef1172249d3337785b7ee3a28"],["/2018/11/29/mapreduce工作机制/index.html","a0fac95ebbbf25b3c0319c696f8894e8"],["/2018/12/01/Hadoop2.6集群部署文档/index.html","08adb641d29675fcad882f491955db62"],["/2018/12/04/Linux常用命令/index.html","e9ef907082b6588c2bec20f0af08470a"],["/2018/12/06/java类加载/index.html","ba0799f88942411252b0d317b3e841ec"],["/2018/12/06/线上问题排查/index.html","82a975e92b00179cc8322609f90b68c0"],["/2019/01/16/RabbitMQ的ack机制/index.html","29016be92e2cb5121425c7cb67673a81"],["/2019/01/16/消息中间件/index.html","a2b9a167cea62b80eafa0941c58d73cc"],["/2019/01/16/降级方案/index.html","fc664006de52ee67450d15b7c242a9c0"],["/2019/01/17/RabbitMQ的confirm机制/index.html","5c37e2bd86f8942ab610733035e65f1c"],["/2019/01/18/缓存架构优化/index.html","a1a0431608754b6146730a40b7a515ac"],["/2019/02/12/MySql学习记录/index.html","3c5b21f70c851016f208564ba27c911d"],["/2019/02/18/cron表达式/index.html","975be58820168302003ac7ba68dbdec7"],["/2019/02/22/MySQL高性能优化/index.html","8946e1e7726803b669cc7d1a94049f5b"],["/2019/04/16/hello-world/index.html","02a3bf77f8ab565e349ce9f31b0487c6"],["/2019/04/18/IDEA奇淫绝技/index.html","96a749f5e71b47389ea53cf9603d4b08"],["/2019/04/23/SpringBoot之Scheduled/index.html","0ce9aa9d90b23fc9d06b53d72611d0a5"],["/about/index.html","063f4433a9a156d3e494bfa5ec3dd637"],["/archives/2018/08/index.html","1170b3f0eb4bbfe88d4a8591276a0a0c"],["/archives/2018/08/page/2/index.html","74c862b5006fa7ac0d5c532bf80fda75"],["/archives/2018/09/index.html","ef16820fa5034fa2f978d4b1af3d983a"],["/archives/2018/10/index.html","608d76c5c7c16b554bb36cafca11e666"],["/archives/2018/11/index.html","af39359b7f4d4e3f5133a680c2191e60"],["/archives/2018/12/index.html","b7cff8e94a1987ce0e11e913eda82518"],["/archives/2018/index.html","fcd9f9d29f40061d96136b49fc1cfe21"],["/archives/2018/page/2/index.html","f6c427a28929f40ca4efbef1dfa81d3f"],["/archives/2018/page/3/index.html","d8e867b2bfcd47086b876e630695ad82"],["/archives/2019/01/index.html","43b9d8cc9a1ef023d309de9ce462d9da"],["/archives/2019/02/index.html","d3cb1f62fa9dad2c03af81ea5be038c7"],["/archives/2019/04/index.html","bfbe859974f6b3b56ca38a6a386ab6e7"],["/archives/2019/index.html","4ef948ed2f7a8562458c09be1ca3b06b"],["/archives/2019/page/2/index.html","94e3c5d53d9a2409fa5c5582a5e291df"],["/archives/index.html","987a7949324261d2aa821a0a1205d6f5"],["/archives/page/2/index.html","4b19097668ef1dab0ca9eedf21ea67c8"],["/archives/page/3/index.html","161f4ef74cf745f42ea6dd2ee96a8f23"],["/archives/page/4/index.html","1af849ee3d362c8616b8cef3177a1364"],["/categories/Hexo/index.html","84d7679f599e557d0dd5248e7f3a97f8"],["/categories/MQ/index.html","49738ae2275f9d0f79fffe9cf6e7918a"],["/categories/bug/index.html","9f54e8952f0332abbb46fe71388d853e"],["/categories/hadoop/index.html","b7f961b8982988378faef02476af24f2"],["/categories/idea/index.html","24d75270f91c8209a10fdbba91304138"],["/categories/index.html","dd45dfe20fde66dfbf3f46a6ee4370d3"],["/categories/java/index.html","86459cf0637a3b90acd58617e84b2fde"],["/categories/linux/index.html","fbeba889ad310d285e8f79624461b42a"],["/categories/mysql/index.html","ee5fd67516b4973ea3ff3b1b73cf8a95"],["/categories/spring/index.html","30291a72a80163dcbfc65b1df6440b77"],["/categories/架构/index.html","1519fae4cbca3832c833a7c0260dd789"],["/categories/概念/index.html","5578aa217c6e15fdbb9db90faca8bd72"],["/categories/缓存/index.html","d946395904d5746cadde82c7682fe6d1"],["/categories/面试/index.html","03163dc721e5b8117e325f2aec1f4b4f"],["/categories/项目/index.html","792f0b36de9b3f0fb2b60fa37b8d80be"],["/css/main.css","d3f448e390799bc54d29cb2db2092035"],["/images/1168343.png","33a2939ff443fd020d393411e5a9ef8b"],["/images/algolia_logo.svg","88450dd56ea1a00ba772424b30b7d34d"],["/images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["/images/avatar.gif","2bed513bc5f13733cf9a8a12c4e1a971"],["/images/cc-by-nc-nd.svg","3b009b0d5970d2c4b18e140933547916"],["/images/cc-by-nc-sa.svg","cf2644b7aa5ebd3f5eab55329b4e7cb7"],["/images/cc-by-nc.svg","e63bcae937a1ae4cb6f83d8a1d26893c"],["/images/cc-by-nd.svg","78359b1307baffc2d0e8cffba5dee2dd"],["/images/cc-by-sa.svg","525d2a82716fe9860a65cf0ac5e231a0"],["/images/cc-by.svg","bd656500a74c634b4ff1333008c62cd8"],["/images/cc-zero.svg","2d6242e90c3082e7892cf478be605d26"],["/images/default_avatar.png","13736ab7511b09b017c2a4b9e032e44b"],["/images/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["/images/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["/images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/logo.svg","88985471c188e5c5a765a8f233c54df5"],["/images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/quote-l.svg","a9d75107c4d7e31612f98e78be0979f9"],["/images/quote-r.svg","5f902def9e09af7fc41e4cf86ad1a0f9"],["/images/searchicon.png","3d6b5c9d6d6c26a2b76a14b8fdf3438a"],["/index.html","8aa0f76e0e9a344e53a13c0364a13d10"],["/js/src/affix.js","683c19859764baf0d17538897ea1eba2"],["/js/src/algolia-search.js","f5fa392318805997089ceb3a925979ba"],["/js/src/bootstrap.js","2a1083772854ae2663748e0a25c17285"],["/js/src/exturl.js","2b444179b3145e5007b4d371dac07cd3"],["/js/src/hook-duoshuo.js","45997b0c06abff3cd88efd901f614065"],["/js/src/js.cookie.js","6e9eb1f53afb135aedaf90739c867738"],["/js/src/love.js","5a87dd19400b2870ef6734f56cfe2208"],["/js/src/motion.js","0f6add86607c451269d0b3d286c84d8b"],["/js/src/post-details.js","b8e8e27c27c697567879c52888ffc24c"],["/js/src/schemes/pisces.js","827b5ad25e1142277c1e7dfe0cacebe5"],["/js/src/scroll-cookie.js","890406ae3539e4721ef5f314542e5e46"],["/js/src/scrollspy.js","fafdd7ab6af233b701506c733910b7f5"],["/js/src/utils.js","24512c3455f976730b7bf75e1222c533"],["/lib/Han/dist/font/han-space.woff","b09f2dd7d3ad8ad07f3b8495133909d9"],["/lib/Han/dist/font/han.woff","e841c6b547bc06a06f60f4de52bf906e"],["/lib/Han/dist/han.css","cfcc552e7aebaef5e2f34aee030b956b"],["/lib/Han/dist/han.js","575b6c1667c01798730fbd972e959c9c"],["/lib/Han/dist/han.min.css","cab466d758269b437167422c4a16b364"],["/lib/Han/dist/han.min.js","96482c9c2b3c5ea9bf5a40db162c7f34"],["/lib/algolia-instant-search/instantsearch.min.css","029a13b44e6807955106ff3c075a02f9"],["/lib/algolia-instant-search/instantsearch.min.js","0db46eba0c8133693ee839507b1612f2"],["/lib/canvas-nest/canvas-nest.min.js","36e103d2a05bc706bac40f9ab8881eb7"],["/lib/canvas-ribbon/canvas-ribbon.js","16dc214240913551986593808c2efcfc"],["/lib/fancybox/source/blank.gif","325472601571f31e1bf00674c368d335"],["/lib/fancybox/source/fancybox_loading.gif","328cc0f6c78211485058d460e80f4fa8"],["/lib/fancybox/source/fancybox_loading@2x.gif","f92938639fa894a0e8ded1c3368abe98"],["/lib/fancybox/source/fancybox_overlay.png","77aeaa52715b898b73c74d68c630330e"],["/lib/fancybox/source/fancybox_sprite.png","783d4031fe50c3d83c960911e1fbc705"],["/lib/fancybox/source/fancybox_sprite@2x.png","ed9970ce22242421e66ff150aa97fe5f"],["/lib/fancybox/source/helpers/fancybox_buttons.png","b448080f8615e664b7788c7003803b59"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.css","cac75538c2e3ddfadef839feaca8e356"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.js","f53c246661fb995a3f12e67fa38e0fa0"],["/lib/fancybox/source/helpers/jquery.fancybox-media.js","c017067f48d97ec4a077ccdf056e6a2e"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.css","52ddd84a9f42c1d4cd86d518a7f7e8bc"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.js","cf1fc1df534eede4cb460c5cbd71aba6"],["/lib/fancybox/source/jquery.fancybox.css","6c55951ce1e3115711f63f99b7501f3a"],["/lib/fancybox/source/jquery.fancybox.js","921e9cb04ad6e2559869ec845c5be39b"],["/lib/fancybox/source/jquery.fancybox.pack.js","cc9e759f24ba773aeef8a131889d3728"],["/lib/fastclick/README.html","b3cd6e7f930bf6e410a2e7eab8a148a8"],["/lib/fastclick/lib/fastclick.js","6e9d3b0da74f2a4a7042b494cdaa7c2e"],["/lib/fastclick/lib/fastclick.min.js","a0fc6c24d1f3ff9ac281887c92b24acd"],["/lib/font-awesome/css/font-awesome.css","c495654869785bc3df60216616814ad1"],["/lib/font-awesome/css/font-awesome.min.css","269550530cc127b6aa5a35925a7de6ce"],["/lib/font-awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["/lib/font-awesome/fonts/fontawesome-webfont.svg","acf3dcb7ff752b5296ca23ba2c7c2606"],["/lib/font-awesome/fonts/fontawesome-webfont.ttf","b06871f281fee6b241d60582ae9369b9"],["/lib/font-awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["/lib/jquery/index.js","32015dd42e9582a80a84736f5d9a44d7"],["/lib/jquery_lazyload/CONTRIBUTING.html","7287727950845c8a1010f3933691afef"],["/lib/jquery_lazyload/README.html","d89aa4afe316331a25b636b5ead4716e"],["/lib/jquery_lazyload/jquery.lazyload.js","8b427f9e86864ee3aaf1ae33e6e14263"],["/lib/jquery_lazyload/jquery.scrollstop.js","f163fd8f02361928853668a96f8a1249"],["/lib/needsharebutton/font-embedded.css","dd8861d10d1ed6b5e0c0011adfb39be9"],["/lib/needsharebutton/needsharebutton.css","30f2f800e13f7b6b83629a4cbd9749ef"],["/lib/needsharebutton/needsharebutton.js","6c6f855f7d50f4bc3c804f52b03bbfbb"],["/lib/pace/pace-theme-barber-shop.min.css","e8dc66cf2d88abc25fbc89b8a0529abb"],["/lib/pace/pace-theme-big-counter.min.css","db2b8fe31e60f19021545277d2f6e05e"],["/lib/pace/pace-theme-bounce.min.css","ad954aa0bace4b213eeb19d6e89a0bda"],["/lib/pace/pace-theme-center-atom.min.css","8f6bc803acefc6f93afc98fb38201456"],["/lib/pace/pace-theme-center-circle.min.css","93c72298781226a80a9c66b27b21a57d"],["/lib/pace/pace-theme-center-radar.min.css","f0099bdd1cd42e9476bd7abc417c0328"],["/lib/pace/pace-theme-center-simple.min.css","eddff4756dbf21dbbff1c543bd894dde"],["/lib/pace/pace-theme-corner-indicator.min.css","776826157cb28ac1ee5e78771292b9ba"],["/lib/pace/pace-theme-fill-left.min.css","965859b39001da08e1e92327fe3d8e12"],["/lib/pace/pace-theme-flash.min.css","aab39b436e1fa0fdc51df06f2d53c38a"],["/lib/pace/pace-theme-loading-bar.min.css","4e05877f1f9efb9c1e7dd75cb78c764f"],["/lib/pace/pace-theme-mac-osx.min.css","29ae030ceaa8158352c5472218375b91"],["/lib/pace/pace-theme-minimal.min.css","f48f04d370993b55a2745e548cc82743"],["/lib/pace/pace.min.js","24d2d5e3e331c4efa3cda1e1851b31a7"],["/lib/three/canvas_lines.min.js","1324174ae6190fbf63b7bf0ad0a8a5bd"],["/lib/three/canvas_sphere.min.js","5c6bc45b137448b5b9df152ccfb2659c"],["/lib/three/three-waves.min.js","41059bd5e5c7aa520b1b411919e5121f"],["/lib/three/three.min.js","3298078bce82bdb1afadf5b1a280915e"],["/lib/ua-parser-js/dist/ua-parser.min.js","a6e833266c4b41fabb9ba94a145322d8"],["/lib/ua-parser-js/dist/ua-parser.pack.js","6b627e4d61a7135952824bb9c1a4a134"],["/lib/velocity/velocity.js","0361fa6dcf4cf4d19c593cdab0937dd0"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.js","f55d22cc592c9f8d4ffd3b41a6b90081"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/page/2/index.html","0f636495b015c25136b47be22de23e04"],["/page/3/index.html","69578ec1a3b4d02735cee9505d03aa88"],["/page/4/index.html","2ea955072e8c4de651c449aff9736f2c"],["/sw-register.js","cd9177c89c5285cab1c5face9a0a4c7c"],["/tags/Hexo/index.html","642924b8f3b9d1c783d4c449f9aa5712"],["/tags/MQ/index.html","96ac2a2f967fa680e6446d29ef7375e5"],["/tags/cglib/index.html","7a249db37c556d188b8b79399c956646"],["/tags/cron/index.html","11a12fb8995fc8c4ef3fb6c091bf694e"],["/tags/hadoop/index.html","45280c36707a4ce40b8aa464f45533bf"],["/tags/http/index.html","ddb75ade8794959457766fcd5ba9477f"],["/tags/idea/index.html","43d4f7baee1641dcf50a94be757da50d"],["/tags/index.html","0068f8cef4a877fdb164aa559f96c159"],["/tags/java/index.html","b63478ca36376171b8326b3b3b5ba285"],["/tags/java/page/2/index.html","1abf55ff6c22963bd703c7409c5eb9ef"],["/tags/java多线程/index.html","8172e2c1792e52a6c8bc917d6a834b82"],["/tags/java虚拟机/index.html","8a028ef28a47a4cf04231ea8f9ab6890"],["/tags/jetty/index.html","9287d9f2693db9f003dc5eb807b19f45"],["/tags/linux/index.html","728819e170f54fcb0007a0f4535f4cb7"],["/tags/mysql/index.html","511552e0bfca0bb2bf6a41f547edbf1d"],["/tags/spring/index.html","7a9a421abe5508bce6bae4b9238e56f1"],["/tags/springboot/index.html","b8b2f7664ddf62b10594a4d2b8c46f92"],["/tags/tcp/index.html","7512fa9ff2a159c95cccc3f4992c4730"],["/tags/事务/index.html","fa0250a40f2e0ae96dce4806558bcd77"],["/tags/优化/index.html","5cbbde3eef685bdf17219d81811763d1"],["/tags/并发/index.html","30765ecf596f3e6338b8d849b9586d3e"],["/tags/缓存/index.html","8fbb7c1bd34f59a072bd78f4df206bad"],["/tags/虚拟机/index.html","32c94a9de51bbb0abb314830a79cc83f"],["/tags/计算机网络/index.html","d5c495fca339e9e316c7805a6700dbb1"],["/tags/降级/index.html","3a3548613e320afd76b837047f8023d1"],["/tags/面试/index.html","671f789fd9469a692cb926fdb1eba51b"],["/tags/项目/index.html","42f000f0b3160a9891547305e1023550"],["/tags/高并发/index.html","32910d51263fc1f9b3bf8934e9a1c734"],["/top/index.html","ff013b9bc3c41e5400dd5521aac8e3cb"]];
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
