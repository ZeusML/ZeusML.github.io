/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2018/08/02/tags/index.html","c28656e97918df2382e4e1dd677454ff"],["/2018/08/02/你好-Hexo/index.html","08dd0055fc087de8010d9ca31557ec92"],["/2018/08/02/内存模型是怎么解决缓存一致性的/index.html","aad269ec25f89240cad1d2ca02479343"],["/2018/08/02/计算机网络面试/index.html","6af0c24373b5964ba01af3eacd1f5672"],["/2018/08/07/深入java虚拟机-第三章-垃圾收集器与内存分配策略/index.html","fa769384b36245ef75352e24d0e2c120"],["/2018/08/08/Hexo-文章的模板文件/index.html","951ccc94fffbf3360b9c4424560101c6"],["/2018/08/09/Hexo-自带样式note标签/index.html","2531b8c6203fec62fcb11a48757f4e3a"],["/2018/08/16/mysql执行流程/index.html","cdb67f724037fd98f7df93c175f8ff8f"],["/2018/08/17/java对象模型/index.html","3164e1b653b65f2693b85b120ee135c9"],["/2018/08/28/HttpClient出现大量CLOSE_WAIT/index.html","72bfdcd0957b838289994348955b83a1"],["/2018/08/31/J.U.C之并发工具类/index.html","c88da28716db0284198acff17eea8785"],["/2018/09/05/定位及优化SQL语句的性能问题/index.html","f6c45d005bec914bca5ac07af8b6f637"],["/2018/09/06/Thread.Join()/index.html","f98658f9ef2be75c40d61b1fb7b8a60b"],["/2018/09/18/定时任务/index.html","12efd4a6ea57e4f3b25635149cbea903"],["/2018/09/26/String的intern()/index.html","4e26be22d2acaa482b28ee6239a6d7e7"],["/2018/10/12/spring集成jetty/index.html","78cb21cb4a7739c8cfb73017652b0c99"],["/2018/10/30/CGLIB用法介绍/index.html","51b795ef30d34401b6582510a60c1cc7"],["/2018/11/09/事务/index.html","c59c2ed5769ed4893c66f8547c308463"],["/2018/11/13/线程池阻塞提交/index.html","9cd4167de2c0a722201cb7585a038e97"],["/2018/11/27/Hadoop/index.html","99e2b7620bab1eab235d91ada378e98c"],["/2018/11/28/解惑各种mapreduce问题/index.html","9d1a7ee0670799cebf25d715b82c2780"],["/2018/11/29/mapreduce工作机制/index.html","2882eaae8ef1561f76accb38dbc17e58"],["/2018/12/01/Hadoop2.6集群部署文档/index.html","7b071721fdd6fce027e4383b98005dae"],["/2018/12/04/Linux常用命令/index.html","5b0495de1a8400f04e3eba94ff4228c2"],["/2018/12/06/java类加载/index.html","f9d4b9c8762bff7a6e34d86ae89f11a3"],["/2018/12/06/线上问题排查/index.html","7cd889d7c8ce4f48e4e7f03b8124daeb"],["/2019/01/16/RabbitMQ的ack机制/index.html","523cd1041b8c4d836147d9dddb49f618"],["/2019/01/16/消息中间件/index.html","ab3409461ad081d1a25c347321e77715"],["/2019/01/16/降级方案/index.html","3de4469b819538b71d91e671272ea430"],["/2019/01/17/RabbitMQ的confirm机制/index.html","4c2a985da0dbde65e0e6bfd0ed764d46"],["/2019/01/18/缓存架构优化/index.html","8d2d95fb3db254ceb5fdc3dabcb1cfd4"],["/2019/02/12/MySql学习记录/index.html","f013420dffacbd58e42d81af54bdbf6a"],["/2019/02/18/cron表达式/index.html","62d4fd4ba3d26f3f79f7a59a9948cd53"],["/2019/02/22/MySQL高性能优化/index.html","aec45b5ed9d3ad391cfa222205f7ca3a"],["/2019/04/16/hello-world/index.html","47902c6fe5a0b290aa7aa8faad1bedc8"],["/2019/04/18/IDEA奇淫绝技/index.html","8d88ffa06e02ecea1c6fd4c88ba4b7ce"],["/about/index.html","6233156e13cd2e7c4f8d33272de1a9fb"],["/archives/2018/08/index.html","ef6fa1fc1ec47477922f94c0b0bd1bf7"],["/archives/2018/08/page/2/index.html","a444f0f23f797676a9a891165e7cea53"],["/archives/2018/09/index.html","c40fa6a6bfbe166f993ecacb68018bbe"],["/archives/2018/10/index.html","06ae9be3acdd0eb3c712602b449ab493"],["/archives/2018/11/index.html","32b9e84c2fecb91822a1417b6c8f66f0"],["/archives/2018/12/index.html","63a0aadb030f143a8cb0dac1f99c079a"],["/archives/2018/index.html","38e491588acddffae801208639b615bd"],["/archives/2018/page/2/index.html","0806bc88c2790bc925f7f9267baad42d"],["/archives/2018/page/3/index.html","9c651e8c4a08aa8af9c250a8d479c949"],["/archives/2019/01/index.html","b77bd563ac96c78502ff4078678251e2"],["/archives/2019/02/index.html","3d94df8e5c4bbd65fd734440040d1628"],["/archives/2019/04/index.html","cb0cc2df96f2fec8623154aaa85e1cab"],["/archives/2019/index.html","1d22eb1d1ced24db595113aa11acb446"],["/archives/index.html","3e7f5a6993aab281d7869dcc38a21bc0"],["/archives/page/2/index.html","963255347897488bca7cb0adc806ec8a"],["/archives/page/3/index.html","b482f2957e3da245ee71647c0b1be03e"],["/archives/page/4/index.html","19a5f116cec63ff9c558d53f4f82dbff"],["/categories/Hexo/index.html","619baf731a75c79c4e25d4a42bae39cc"],["/categories/MQ/index.html","c83b3f05212c0fb2f09260cf59f39845"],["/categories/bug/index.html","5a6beb07af7c0d43af3c9cade6898f8b"],["/categories/hadoop/index.html","1ad96972c3762599ccc22750a3e1d6d1"],["/categories/idea/index.html","ffdc1c99c998d49a19e4d8a4c13b2100"],["/categories/index.html","4b9a1e7f69b86d802e69942e69acc48f"],["/categories/java/index.html","0ef8997e6c24418eaa5dbf744af17e5a"],["/categories/linux/index.html","5a01ed295b8a33b561a053c0176cf5ae"],["/categories/mysql/index.html","c99fe425b956c2f78fa4bf0c30f640f5"],["/categories/spring/index.html","ac1c4aa88a4e6e82590f6bb71f9b870a"],["/categories/架构/index.html","644c7d81b1cc2b7408039c9a8b581eda"],["/categories/概念/index.html","c443bf99b01022e0f885f909873592ba"],["/categories/缓存/index.html","c02e56ff42131046b6cb729d0cf06c8b"],["/categories/面试/index.html","326d18378e802f5ebb73bcc91269f3fd"],["/categories/项目/index.html","0cb470b964324566709aeb9066f10007"],["/css/main.css","e7feb04eac78e5e68cb674e3a31838e7"],["/images/1168343.png","33a2939ff443fd020d393411e5a9ef8b"],["/images/algolia_logo.svg","88450dd56ea1a00ba772424b30b7d34d"],["/images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["/images/avatar.gif","2bed513bc5f13733cf9a8a12c4e1a971"],["/images/cc-by-nc-nd.svg","3b009b0d5970d2c4b18e140933547916"],["/images/cc-by-nc-sa.svg","cf2644b7aa5ebd3f5eab55329b4e7cb7"],["/images/cc-by-nc.svg","e63bcae937a1ae4cb6f83d8a1d26893c"],["/images/cc-by-nd.svg","78359b1307baffc2d0e8cffba5dee2dd"],["/images/cc-by-sa.svg","525d2a82716fe9860a65cf0ac5e231a0"],["/images/cc-by.svg","bd656500a74c634b4ff1333008c62cd8"],["/images/cc-zero.svg","2d6242e90c3082e7892cf478be605d26"],["/images/default_avatar.png","13736ab7511b09b017c2a4b9e032e44b"],["/images/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["/images/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["/images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/logo.svg","88985471c188e5c5a765a8f233c54df5"],["/images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/quote-l.svg","a9d75107c4d7e31612f98e78be0979f9"],["/images/quote-r.svg","5f902def9e09af7fc41e4cf86ad1a0f9"],["/images/searchicon.png","3d6b5c9d6d6c26a2b76a14b8fdf3438a"],["/index.html","6f2b13b13df942ff0a4f547a03c5ec8b"],["/js/src/affix.js","683c19859764baf0d17538897ea1eba2"],["/js/src/algolia-search.js","f5fa392318805997089ceb3a925979ba"],["/js/src/bootstrap.js","2a1083772854ae2663748e0a25c17285"],["/js/src/exturl.js","2b444179b3145e5007b4d371dac07cd3"],["/js/src/hook-duoshuo.js","45997b0c06abff3cd88efd901f614065"],["/js/src/js.cookie.js","6e9eb1f53afb135aedaf90739c867738"],["/js/src/love.js","5a87dd19400b2870ef6734f56cfe2208"],["/js/src/motion.js","0f6add86607c451269d0b3d286c84d8b"],["/js/src/post-details.js","b8e8e27c27c697567879c52888ffc24c"],["/js/src/schemes/pisces.js","827b5ad25e1142277c1e7dfe0cacebe5"],["/js/src/scroll-cookie.js","890406ae3539e4721ef5f314542e5e46"],["/js/src/scrollspy.js","fafdd7ab6af233b701506c733910b7f5"],["/js/src/utils.js","24512c3455f976730b7bf75e1222c533"],["/lib/Han/dist/font/han-space.woff","b09f2dd7d3ad8ad07f3b8495133909d9"],["/lib/Han/dist/font/han.woff","e841c6b547bc06a06f60f4de52bf906e"],["/lib/Han/dist/han.css","cfcc552e7aebaef5e2f34aee030b956b"],["/lib/Han/dist/han.js","575b6c1667c01798730fbd972e959c9c"],["/lib/Han/dist/han.min.css","cab466d758269b437167422c4a16b364"],["/lib/Han/dist/han.min.js","96482c9c2b3c5ea9bf5a40db162c7f34"],["/lib/algolia-instant-search/instantsearch.min.css","029a13b44e6807955106ff3c075a02f9"],["/lib/algolia-instant-search/instantsearch.min.js","0db46eba0c8133693ee839507b1612f2"],["/lib/canvas-nest/canvas-nest.min.js","36e103d2a05bc706bac40f9ab8881eb7"],["/lib/canvas-ribbon/canvas-ribbon.js","16dc214240913551986593808c2efcfc"],["/lib/fancybox/source/blank.gif","325472601571f31e1bf00674c368d335"],["/lib/fancybox/source/fancybox_loading.gif","328cc0f6c78211485058d460e80f4fa8"],["/lib/fancybox/source/fancybox_loading@2x.gif","f92938639fa894a0e8ded1c3368abe98"],["/lib/fancybox/source/fancybox_overlay.png","77aeaa52715b898b73c74d68c630330e"],["/lib/fancybox/source/fancybox_sprite.png","783d4031fe50c3d83c960911e1fbc705"],["/lib/fancybox/source/fancybox_sprite@2x.png","ed9970ce22242421e66ff150aa97fe5f"],["/lib/fancybox/source/helpers/fancybox_buttons.png","b448080f8615e664b7788c7003803b59"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.css","cac75538c2e3ddfadef839feaca8e356"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.js","f53c246661fb995a3f12e67fa38e0fa0"],["/lib/fancybox/source/helpers/jquery.fancybox-media.js","c017067f48d97ec4a077ccdf056e6a2e"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.css","52ddd84a9f42c1d4cd86d518a7f7e8bc"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.js","cf1fc1df534eede4cb460c5cbd71aba6"],["/lib/fancybox/source/jquery.fancybox.css","6c55951ce1e3115711f63f99b7501f3a"],["/lib/fancybox/source/jquery.fancybox.js","921e9cb04ad6e2559869ec845c5be39b"],["/lib/fancybox/source/jquery.fancybox.pack.js","cc9e759f24ba773aeef8a131889d3728"],["/lib/fastclick/README.html","b3cd6e7f930bf6e410a2e7eab8a148a8"],["/lib/fastclick/lib/fastclick.js","6e9d3b0da74f2a4a7042b494cdaa7c2e"],["/lib/fastclick/lib/fastclick.min.js","a0fc6c24d1f3ff9ac281887c92b24acd"],["/lib/font-awesome/css/font-awesome.css","c495654869785bc3df60216616814ad1"],["/lib/font-awesome/css/font-awesome.min.css","269550530cc127b6aa5a35925a7de6ce"],["/lib/font-awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["/lib/font-awesome/fonts/fontawesome-webfont.svg","acf3dcb7ff752b5296ca23ba2c7c2606"],["/lib/font-awesome/fonts/fontawesome-webfont.ttf","b06871f281fee6b241d60582ae9369b9"],["/lib/font-awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["/lib/jquery/index.js","32015dd42e9582a80a84736f5d9a44d7"],["/lib/jquery_lazyload/CONTRIBUTING.html","7287727950845c8a1010f3933691afef"],["/lib/jquery_lazyload/README.html","d89aa4afe316331a25b636b5ead4716e"],["/lib/jquery_lazyload/jquery.lazyload.js","8b427f9e86864ee3aaf1ae33e6e14263"],["/lib/jquery_lazyload/jquery.scrollstop.js","f163fd8f02361928853668a96f8a1249"],["/lib/needsharebutton/font-embedded.css","dd8861d10d1ed6b5e0c0011adfb39be9"],["/lib/needsharebutton/needsharebutton.css","30f2f800e13f7b6b83629a4cbd9749ef"],["/lib/needsharebutton/needsharebutton.js","6c6f855f7d50f4bc3c804f52b03bbfbb"],["/lib/pace/pace-theme-barber-shop.min.css","e8dc66cf2d88abc25fbc89b8a0529abb"],["/lib/pace/pace-theme-big-counter.min.css","db2b8fe31e60f19021545277d2f6e05e"],["/lib/pace/pace-theme-bounce.min.css","ad954aa0bace4b213eeb19d6e89a0bda"],["/lib/pace/pace-theme-center-atom.min.css","8f6bc803acefc6f93afc98fb38201456"],["/lib/pace/pace-theme-center-circle.min.css","93c72298781226a80a9c66b27b21a57d"],["/lib/pace/pace-theme-center-radar.min.css","f0099bdd1cd42e9476bd7abc417c0328"],["/lib/pace/pace-theme-center-simple.min.css","eddff4756dbf21dbbff1c543bd894dde"],["/lib/pace/pace-theme-corner-indicator.min.css","776826157cb28ac1ee5e78771292b9ba"],["/lib/pace/pace-theme-fill-left.min.css","965859b39001da08e1e92327fe3d8e12"],["/lib/pace/pace-theme-flash.min.css","aab39b436e1fa0fdc51df06f2d53c38a"],["/lib/pace/pace-theme-loading-bar.min.css","4e05877f1f9efb9c1e7dd75cb78c764f"],["/lib/pace/pace-theme-mac-osx.min.css","29ae030ceaa8158352c5472218375b91"],["/lib/pace/pace-theme-minimal.min.css","f48f04d370993b55a2745e548cc82743"],["/lib/pace/pace.min.js","24d2d5e3e331c4efa3cda1e1851b31a7"],["/lib/three/canvas_lines.min.js","1324174ae6190fbf63b7bf0ad0a8a5bd"],["/lib/three/canvas_sphere.min.js","5c6bc45b137448b5b9df152ccfb2659c"],["/lib/three/three-waves.min.js","41059bd5e5c7aa520b1b411919e5121f"],["/lib/three/three.min.js","3298078bce82bdb1afadf5b1a280915e"],["/lib/ua-parser-js/dist/ua-parser.min.js","a6e833266c4b41fabb9ba94a145322d8"],["/lib/ua-parser-js/dist/ua-parser.pack.js","6b627e4d61a7135952824bb9c1a4a134"],["/lib/velocity/velocity.js","0361fa6dcf4cf4d19c593cdab0937dd0"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.js","f55d22cc592c9f8d4ffd3b41a6b90081"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/page/2/index.html","fca7c0adb76c53765419711167bc25bd"],["/page/3/index.html","25e6755ded1c98a4c27ff539783d60bd"],["/page/4/index.html","156375eeb019631f91c1567526543138"],["/sw-register.js","73b32eb3deb6ef437ccf06bafac71d36"],["/tags/Hexo/index.html","d630828208dba1f66e8a70ad4f365938"],["/tags/MQ/index.html","e9f75c8bbc14ef9279a3b3c0fa216179"],["/tags/cglib/index.html","8f4f204aa42cafcc3f4ca9b4672ce186"],["/tags/cron/index.html","e745a7bfbe12c298c7285efbe51ce273"],["/tags/hadoop/index.html","15a1c6a0c2022ccca51c889fbd071203"],["/tags/http/index.html","1010b07633824648c5e05638637b8e98"],["/tags/idea/index.html","8a427c329ceab09e5d2298a3ff255876"],["/tags/index.html","69ee4018e9104d543704265acb27fdb5"],["/tags/java/index.html","b971435cfacc03613c594d6d636c6449"],["/tags/java/page/2/index.html","6f902d131f8b9b9c645537b006027299"],["/tags/java多线程/index.html","ed67757d2123f2d0cb9dc1189f55dddb"],["/tags/java虚拟机/index.html","2804742c4f0128bc054d70dadc450aad"],["/tags/jetty/index.html","faa4b12e8dda13d07db55e4860ecb7e7"],["/tags/linux/index.html","4dbf417f001a158fd779d3fa6432c1de"],["/tags/mysql/index.html","62ed315bf0c020579bdb4d40d5566f34"],["/tags/spring/index.html","73bafcc53b28f30c8ce35b42897c498d"],["/tags/tcp/index.html","d2491a983ebce8533f608d819561f5a7"],["/tags/事务/index.html","fc2815f279dcf708249bb3db6bbf70b6"],["/tags/优化/index.html","566c51842ca6c01073dc69e9e647578c"],["/tags/并发/index.html","c7592313f1cc0c59f0ccba565958e2f3"],["/tags/缓存/index.html","c7f09595f4fba6360f0659b7df040659"],["/tags/虚拟机/index.html","be96be15d22c255ad87fc8ffa979b9e8"],["/tags/计算机网络/index.html","d2c82d943bf210f12b678238d3eeadcf"],["/tags/降级/index.html","55d797c21da8661a60c4b8db7713e48f"],["/tags/面试/index.html","60513eec349ac9d37a103ef3694c2a70"],["/tags/项目/index.html","a9b12741487b0a15be326c46704e5574"],["/tags/高并发/index.html","e2295e6fb39abc8798aa82c35d2c1a08"],["/top/index.html","cc99d6353fb696814afd61b33fbc2976"]];
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
