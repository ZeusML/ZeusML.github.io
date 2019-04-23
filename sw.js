/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2018/08/02/tags/index.html","357686af3079733c0106fbb1c304708a"],["/2018/08/02/你好-Hexo/index.html","910222824a5322a26e099dac688ca947"],["/2018/08/02/内存模型是怎么解决缓存一致性的/index.html","8b1493074beb03ae70477e91750023b7"],["/2018/08/02/计算机网络面试/index.html","d8f3949c958a7c1d9f7aa49978ab795b"],["/2018/08/07/深入java虚拟机-第三章-垃圾收集器与内存分配策略/index.html","6cb5c9ef118f4ac37902c865c5660804"],["/2018/08/08/Hexo-文章的模板文件/index.html","77abc9a3dda5b92772f82d671373ea49"],["/2018/08/09/Hexo-自带样式note标签/index.html","a6309d1a30aeb6562d54bd2c77bf6ae7"],["/2018/08/16/mysql执行流程/index.html","94951f565c98c03d3a8177ce1bd71319"],["/2018/08/17/java对象模型/index.html","603bb21a297ee60948d0b14109539412"],["/2018/08/28/HttpClient出现大量CLOSE_WAIT/index.html","d5895b41d0dd539833edbecdac16e37a"],["/2018/08/31/J.U.C之并发工具类/index.html","9cca884a327f2a58d6476a58f93e90ef"],["/2018/09/05/定位及优化SQL语句的性能问题/index.html","9c9a2ffbb97be735bc94837ac8565813"],["/2018/09/06/Thread.Join()/index.html","2318a500b6ed0cfd800de5005c843331"],["/2018/09/18/定时任务/index.html","9eca3ea2ba128348a8b15478ad193a7a"],["/2018/09/26/String的intern()/index.html","ba08990f717f68085ee2e64768709d3e"],["/2018/10/12/spring集成jetty/index.html","0c2dfd44b278ac4a3af6da24b9eca526"],["/2018/10/30/CGLIB用法介绍/index.html","01c2e411b7ccbba257d3103085a6243a"],["/2018/11/09/事务/index.html","3dca66fd38d24eefe0c7c5d815b7c3e7"],["/2018/11/13/线程池阻塞提交/index.html","7bb9eadf45148ad3b9a39d75526876e1"],["/2018/11/27/Hadoop/index.html","54b3c875228f77ceae72a7e0f73562ca"],["/2018/11/28/解惑各种mapreduce问题/index.html","084afce030e387d044ceaa98c513bab3"],["/2018/11/29/mapreduce工作机制/index.html","343dd09eae582f9d5785522f39338d9b"],["/2018/12/01/Hadoop2.6集群部署文档/index.html","0ad9d400797343ba3f5f8af38350e1aa"],["/2018/12/04/Linux常用命令/index.html","f7e898be56d1429710e8ec4a5d9f045c"],["/2018/12/06/java类加载/index.html","931c4324e0e5dada786970d6dbe6d9b4"],["/2018/12/06/线上问题排查/index.html","0700f063dbfc19b9fa9b540c9c4f835b"],["/2019/01/16/RabbitMQ的ack机制/index.html","509e805e7d7d697ddfc3436067518e09"],["/2019/01/16/消息中间件/index.html","c5792079b818322a66ee6ba7d75dfa4c"],["/2019/01/16/降级方案/index.html","c059ac06bd77c044d0d437f9348a7b61"],["/2019/01/17/RabbitMQ的confirm机制/index.html","b5cb1d5c1bf246a63235aa6f42b51675"],["/2019/01/18/缓存架构优化/index.html","5a60a277b658918e3e94881faf8062f2"],["/2019/02/12/MySql学习记录/index.html","c9ebc093b133173f2e6a1213fed5aee8"],["/2019/02/18/cron表达式/index.html","bf88e234333bce3a3efe04a36997b2ba"],["/2019/02/22/MySQL高性能优化/index.html","51bc5d3a4c1b881bac7385ff1c7b0420"],["/2019/04/16/hello-world/index.html","511b628c8f4cc10287a07a15a4ca3800"],["/2019/04/18/IDEA奇淫绝技/index.html","55ad724a56ff19b687f3597040b48b34"],["/2019/04/23/SpringBoot之Scheduled/index.html","7ca80d79aa87139cd1c42f912fe45d23"],["/about/index.html","6a3d703344a6c4f13afe9d4b95564520"],["/archives/2018/08/index.html","abf7ad765ea10d73b4966bb222c4b87a"],["/archives/2018/08/page/2/index.html","1a99e4c68f6b55e9fca6d5b55492c0e9"],["/archives/2018/09/index.html","683ae18f35a2ee2458737ef2f324e8c6"],["/archives/2018/10/index.html","be255712c78cf8182d67091e08c20951"],["/archives/2018/11/index.html","a67697816fb96a884a49877c110db51b"],["/archives/2018/12/index.html","7501056ed3dd15a0120176491b032849"],["/archives/2018/index.html","fa82f0ae72a70d0472341185ca6beffc"],["/archives/2018/page/2/index.html","be117a521179ad885d4de13a95d890d0"],["/archives/2018/page/3/index.html","74553c6813a044f5d57dcb86c40957c2"],["/archives/2019/01/index.html","37639109843e1f6af408566a033d0955"],["/archives/2019/02/index.html","62df603d11fb6eb84f8c025f72dbf379"],["/archives/2019/04/index.html","8a45ac5cf27a6f8a81e8d430ee9a5018"],["/archives/2019/index.html","b0b0c780e877c55d6266052b6bb8320f"],["/archives/2019/page/2/index.html","8978a84656e02223829a9421a934ffec"],["/archives/index.html","e9fb2deca9af1942a9d72c27a1327840"],["/archives/page/2/index.html","4cba9d1963c303652c17147f10b9bab3"],["/archives/page/3/index.html","ce82b301bcb95d2ed4bee7734c561778"],["/archives/page/4/index.html","9871684dc78b95654e87ea1e4c0a1885"],["/categories/Hexo/index.html","c21a8dabf18b7f1e32d5a5f936c3ed41"],["/categories/MQ/index.html","f5560892554bae1a69fa7a30881833f3"],["/categories/bug/index.html","56ff93a9da07460fbd2ca6c0b838e332"],["/categories/hadoop/index.html","6e3e8448f4ac171a887d34174c720b5e"],["/categories/idea/index.html","846ec04c761178eb138d900f592240a6"],["/categories/index.html","bf6d2ed62713962e1de1e840b58abda4"],["/categories/java/index.html","e1e334010a60e73a2b9b5bd66f284dad"],["/categories/linux/index.html","07eea246e8784dd54b2337bea800174d"],["/categories/mysql/index.html","c19e834d53e6ac0c7d7519a2e69539bd"],["/categories/spring/index.html","3881d7a6a99d5dee5019ced349d22843"],["/categories/springboot/index.html","2e20c20d78d6df2bef3ed1aed5b41814"],["/categories/架构/index.html","3376b997e9b5dc2d9a643ff0cb32c08c"],["/categories/概念/index.html","ea5a1e86c89eb9e541a6613ba9ef09f4"],["/categories/缓存/index.html","b13ae14f1387f210551f560301522a98"],["/categories/面试/index.html","7f6cc2772ff1378e1f65bf55b7c0ef3d"],["/categories/项目/index.html","6051d0cecfc75f854e2df4e2bcc4dd82"],["/css/main.css","545f48b23add4baf6aaa73f7087e709b"],["/images/1168343.png","33a2939ff443fd020d393411e5a9ef8b"],["/images/algolia_logo.svg","88450dd56ea1a00ba772424b30b7d34d"],["/images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["/images/avatar.gif","2bed513bc5f13733cf9a8a12c4e1a971"],["/images/cc-by-nc-nd.svg","3b009b0d5970d2c4b18e140933547916"],["/images/cc-by-nc-sa.svg","cf2644b7aa5ebd3f5eab55329b4e7cb7"],["/images/cc-by-nc.svg","e63bcae937a1ae4cb6f83d8a1d26893c"],["/images/cc-by-nd.svg","78359b1307baffc2d0e8cffba5dee2dd"],["/images/cc-by-sa.svg","525d2a82716fe9860a65cf0ac5e231a0"],["/images/cc-by.svg","bd656500a74c634b4ff1333008c62cd8"],["/images/cc-zero.svg","2d6242e90c3082e7892cf478be605d26"],["/images/default_avatar.png","13736ab7511b09b017c2a4b9e032e44b"],["/images/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["/images/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["/images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/logo.svg","88985471c188e5c5a765a8f233c54df5"],["/images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/quote-l.svg","a9d75107c4d7e31612f98e78be0979f9"],["/images/quote-r.svg","5f902def9e09af7fc41e4cf86ad1a0f9"],["/images/searchicon.png","3d6b5c9d6d6c26a2b76a14b8fdf3438a"],["/index.html","c0a3c4d6e381ef3a742b8573f9fc22cf"],["/js/src/affix.js","683c19859764baf0d17538897ea1eba2"],["/js/src/algolia-search.js","f5fa392318805997089ceb3a925979ba"],["/js/src/bootstrap.js","2a1083772854ae2663748e0a25c17285"],["/js/src/exturl.js","2b444179b3145e5007b4d371dac07cd3"],["/js/src/hook-duoshuo.js","45997b0c06abff3cd88efd901f614065"],["/js/src/js.cookie.js","6e9eb1f53afb135aedaf90739c867738"],["/js/src/love.js","5a87dd19400b2870ef6734f56cfe2208"],["/js/src/motion.js","0f6add86607c451269d0b3d286c84d8b"],["/js/src/post-details.js","b8e8e27c27c697567879c52888ffc24c"],["/js/src/schemes/pisces.js","827b5ad25e1142277c1e7dfe0cacebe5"],["/js/src/scroll-cookie.js","890406ae3539e4721ef5f314542e5e46"],["/js/src/scrollspy.js","fafdd7ab6af233b701506c733910b7f5"],["/js/src/utils.js","24512c3455f976730b7bf75e1222c533"],["/lib/Han/dist/font/han-space.woff","b09f2dd7d3ad8ad07f3b8495133909d9"],["/lib/Han/dist/font/han.woff","e841c6b547bc06a06f60f4de52bf906e"],["/lib/Han/dist/han.css","cfcc552e7aebaef5e2f34aee030b956b"],["/lib/Han/dist/han.js","575b6c1667c01798730fbd972e959c9c"],["/lib/Han/dist/han.min.css","cab466d758269b437167422c4a16b364"],["/lib/Han/dist/han.min.js","96482c9c2b3c5ea9bf5a40db162c7f34"],["/lib/algolia-instant-search/instantsearch.min.css","029a13b44e6807955106ff3c075a02f9"],["/lib/algolia-instant-search/instantsearch.min.js","0db46eba0c8133693ee839507b1612f2"],["/lib/canvas-nest/canvas-nest.min.js","36e103d2a05bc706bac40f9ab8881eb7"],["/lib/canvas-ribbon/canvas-ribbon.js","16dc214240913551986593808c2efcfc"],["/lib/fancybox/source/blank.gif","325472601571f31e1bf00674c368d335"],["/lib/fancybox/source/fancybox_loading.gif","328cc0f6c78211485058d460e80f4fa8"],["/lib/fancybox/source/fancybox_loading@2x.gif","f92938639fa894a0e8ded1c3368abe98"],["/lib/fancybox/source/fancybox_overlay.png","77aeaa52715b898b73c74d68c630330e"],["/lib/fancybox/source/fancybox_sprite.png","783d4031fe50c3d83c960911e1fbc705"],["/lib/fancybox/source/fancybox_sprite@2x.png","ed9970ce22242421e66ff150aa97fe5f"],["/lib/fancybox/source/helpers/fancybox_buttons.png","b448080f8615e664b7788c7003803b59"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.css","cac75538c2e3ddfadef839feaca8e356"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.js","f53c246661fb995a3f12e67fa38e0fa0"],["/lib/fancybox/source/helpers/jquery.fancybox-media.js","c017067f48d97ec4a077ccdf056e6a2e"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.css","52ddd84a9f42c1d4cd86d518a7f7e8bc"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.js","cf1fc1df534eede4cb460c5cbd71aba6"],["/lib/fancybox/source/jquery.fancybox.css","6c55951ce1e3115711f63f99b7501f3a"],["/lib/fancybox/source/jquery.fancybox.js","921e9cb04ad6e2559869ec845c5be39b"],["/lib/fancybox/source/jquery.fancybox.pack.js","cc9e759f24ba773aeef8a131889d3728"],["/lib/fastclick/README.html","b3cd6e7f930bf6e410a2e7eab8a148a8"],["/lib/fastclick/lib/fastclick.js","6e9d3b0da74f2a4a7042b494cdaa7c2e"],["/lib/fastclick/lib/fastclick.min.js","a0fc6c24d1f3ff9ac281887c92b24acd"],["/lib/font-awesome/css/font-awesome.css","c495654869785bc3df60216616814ad1"],["/lib/font-awesome/css/font-awesome.min.css","269550530cc127b6aa5a35925a7de6ce"],["/lib/font-awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["/lib/font-awesome/fonts/fontawesome-webfont.svg","acf3dcb7ff752b5296ca23ba2c7c2606"],["/lib/font-awesome/fonts/fontawesome-webfont.ttf","b06871f281fee6b241d60582ae9369b9"],["/lib/font-awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["/lib/jquery/index.js","32015dd42e9582a80a84736f5d9a44d7"],["/lib/jquery_lazyload/CONTRIBUTING.html","7287727950845c8a1010f3933691afef"],["/lib/jquery_lazyload/README.html","d89aa4afe316331a25b636b5ead4716e"],["/lib/jquery_lazyload/jquery.lazyload.js","8b427f9e86864ee3aaf1ae33e6e14263"],["/lib/jquery_lazyload/jquery.scrollstop.js","f163fd8f02361928853668a96f8a1249"],["/lib/needsharebutton/font-embedded.css","dd8861d10d1ed6b5e0c0011adfb39be9"],["/lib/needsharebutton/needsharebutton.css","30f2f800e13f7b6b83629a4cbd9749ef"],["/lib/needsharebutton/needsharebutton.js","6c6f855f7d50f4bc3c804f52b03bbfbb"],["/lib/pace/pace-theme-barber-shop.min.css","e8dc66cf2d88abc25fbc89b8a0529abb"],["/lib/pace/pace-theme-big-counter.min.css","db2b8fe31e60f19021545277d2f6e05e"],["/lib/pace/pace-theme-bounce.min.css","ad954aa0bace4b213eeb19d6e89a0bda"],["/lib/pace/pace-theme-center-atom.min.css","8f6bc803acefc6f93afc98fb38201456"],["/lib/pace/pace-theme-center-circle.min.css","93c72298781226a80a9c66b27b21a57d"],["/lib/pace/pace-theme-center-radar.min.css","f0099bdd1cd42e9476bd7abc417c0328"],["/lib/pace/pace-theme-center-simple.min.css","eddff4756dbf21dbbff1c543bd894dde"],["/lib/pace/pace-theme-corner-indicator.min.css","776826157cb28ac1ee5e78771292b9ba"],["/lib/pace/pace-theme-fill-left.min.css","965859b39001da08e1e92327fe3d8e12"],["/lib/pace/pace-theme-flash.min.css","aab39b436e1fa0fdc51df06f2d53c38a"],["/lib/pace/pace-theme-loading-bar.min.css","4e05877f1f9efb9c1e7dd75cb78c764f"],["/lib/pace/pace-theme-mac-osx.min.css","29ae030ceaa8158352c5472218375b91"],["/lib/pace/pace-theme-minimal.min.css","f48f04d370993b55a2745e548cc82743"],["/lib/pace/pace.min.js","24d2d5e3e331c4efa3cda1e1851b31a7"],["/lib/three/canvas_lines.min.js","1324174ae6190fbf63b7bf0ad0a8a5bd"],["/lib/three/canvas_sphere.min.js","5c6bc45b137448b5b9df152ccfb2659c"],["/lib/three/three-waves.min.js","41059bd5e5c7aa520b1b411919e5121f"],["/lib/three/three.min.js","3298078bce82bdb1afadf5b1a280915e"],["/lib/ua-parser-js/dist/ua-parser.min.js","a6e833266c4b41fabb9ba94a145322d8"],["/lib/ua-parser-js/dist/ua-parser.pack.js","6b627e4d61a7135952824bb9c1a4a134"],["/lib/velocity/velocity.js","0361fa6dcf4cf4d19c593cdab0937dd0"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.js","f55d22cc592c9f8d4ffd3b41a6b90081"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/page/2/index.html","1bbd03fc8aa689acee6f67972a71399c"],["/page/3/index.html","dcdf219f38cf5efe6f50671a9c266e52"],["/page/4/index.html","e702c688cb7aefa6dc1d15bfeb82d70b"],["/sw-register.js","15651ccbe341b1a4cf45bcc441c4f638"],["/tags/Hexo/index.html","9ef3c2b648bcd604b52a0a2695970df6"],["/tags/MQ/index.html","035c084cacdecf3e45ea62d4f659c1df"],["/tags/cglib/index.html","65b1b6265a3f8998458ae5d0783122e2"],["/tags/cron/index.html","f93f1da21732b98e92cd0e2372737caa"],["/tags/hadoop/index.html","41c5fe1dde39e0f49ad62c30da360717"],["/tags/http/index.html","c503a9d30129f7bde6d9f339cd1d68c8"],["/tags/idea/index.html","64368e10a56967a71a3b8312015d19df"],["/tags/index.html","b496b838324998fc4abe36ffab79ce25"],["/tags/java/index.html","e248a6c33c5d46c13814b8eef12c7f98"],["/tags/java/page/2/index.html","7b7f49c89e1632abc7c5b034ef882c19"],["/tags/java多线程/index.html","dfc89850791710c944c159041ce39994"],["/tags/java虚拟机/index.html","6b3fecead6952d32b8c05b00b1be2085"],["/tags/jetty/index.html","83783f78152a303acede78639fdfb45b"],["/tags/linux/index.html","8b7da931d96ab3fdabb8e0f1c7b0a326"],["/tags/mysql/index.html","203c1bc52624442797f5f5efcf17e621"],["/tags/spring/index.html","54a4358bebc7ac26b88e0615211a19a0"],["/tags/springboot/index.html","6eea7ebbc0a404ed24d5093b5b7b29f9"],["/tags/tcp/index.html","47c2a5fec22e58ecb7ba048ce06dbfc5"],["/tags/事务/index.html","c8cd43c538f988cdd4cd979a674595e8"],["/tags/优化/index.html","83eeb74e354afd113b6ad5966013f639"],["/tags/并发/index.html","1fd35ae9ec192b276d69dc6d3eb5ffe4"],["/tags/缓存/index.html","c15f5fc06ce1c3ccf1f1999d6e27db3b"],["/tags/虚拟机/index.html","ace35d2fe8f801b8414c93b6ce2c6b47"],["/tags/计算机网络/index.html","1d12a4f1e01c6832a4693771bf796912"],["/tags/降级/index.html","1c85f00b0acbed195bff9adf25b105c2"],["/tags/面试/index.html","3a3ca04bb7492d30531b02dbc1106b09"],["/tags/项目/index.html","c8926dba290ae1e2bb35905b81b601c5"],["/tags/高并发/index.html","c39a7966405e2e6d27591f1ec97ea1b6"],["/top/index.html","1260e98b441c21f61ae1004723ef82aa"]];
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
