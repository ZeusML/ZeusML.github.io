/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2018/08/02/tags/index.html","0895c84178defc1d6151bca06d49c3d4"],["/2018/08/02/你好-Hexo/index.html","a690b1a998fc1af875b0f2b08213fa2a"],["/2018/08/02/内存模型是怎么解决缓存一致性的/index.html","f9983ef6a00670f6c6e7fefea9d906d3"],["/2018/08/02/计算机网络面试/index.html","a6bc444795785075308ca6bb229a9b4e"],["/2018/08/07/深入java虚拟机-第三章-垃圾收集器与内存分配策略/index.html","3df80192c5ae01aba9e9c99779220f23"],["/2018/08/08/Hexo-文章的模板文件/index.html","accba040974484e8b16030be96068bc3"],["/2018/08/09/Hexo-自带样式note标签/index.html","0646fe982f4a3d7dbfdb8514653e8a2d"],["/2018/08/16/mysql执行流程/index.html","5fefddf57c6d188a91452bf81f6e6cbc"],["/2018/08/17/java对象模型/index.html","21dce6781ce9504af8d3b813e69ed563"],["/2018/08/28/HttpClient出现大量CLOSE_WAIT/index.html","19be16aa240517224e90b5b26b76f6ab"],["/2018/08/31/J.U.C之并发工具类/index.html","d9336e86a3bcb555eb2d6082fe2dcb28"],["/2018/09/05/定位及优化SQL语句的性能问题/index.html","59d6332b72cf1913cc69329b53f504de"],["/2018/09/06/Thread.Join()/index.html","32f01dc19fb02d69f828ee0744268bc4"],["/2018/09/18/定时任务/index.html","0b3d16f30a19682f4bac5f083b204b48"],["/2018/09/26/String的intern()/index.html","b7bed2ba01ec78086a51e9e358506448"],["/2018/10/12/spring集成jetty/index.html","f05cf8a1da3ac584fb259e5cd582b45e"],["/2018/10/30/CGLIB用法介绍/index.html","f95e68f1f4958ea05ddc0d52dbeeb89d"],["/2018/11/09/事务/index.html","c4276d3ed752a3c5e87ba5a1fb1c37b7"],["/2018/11/13/线程池阻塞提交/index.html","b65ac71792785fa492b0d20f8050fa71"],["/2018/11/27/Hadoop/index.html","09bbb33bdba0a9e867501632a8c783a2"],["/2018/11/28/解惑各种mapreduce问题/index.html","14ee1032e89410d15535073a49a9fa2b"],["/2018/11/29/mapreduce工作机制/index.html","a3847722860d9aabef9b605f6f77aa45"],["/2018/12/01/Hadoop2.6集群部署文档/index.html","d3fb41010799ae822751ec818d230a83"],["/2018/12/04/Linux常用命令/index.html","dc2060aff2286324548a9ef35b8c37a7"],["/2018/12/06/java类加载/index.html","41fa3c64dcbb7623b7ceb76296c6f281"],["/2018/12/06/线上问题排查/index.html","42c298b7a519e346df38326ba3cda91f"],["/2019/01/16/RabbitMQ的ack机制/index.html","50e30efbd2ceb710d43be1b2e01f7c05"],["/2019/01/16/消息中间件/index.html","51db0aa4d3590cdd3e70bd83cfa216ea"],["/2019/01/16/降级方案/index.html","e910253d62c265a347be7dcf307d6d1a"],["/2019/01/17/RabbitMQ的confirm机制/index.html","12489bf4b8cb22d04d03d2f42d3db1c2"],["/2019/01/18/缓存架构优化/index.html","ac8552a02a695dd6d56057d2539e6426"],["/2019/02/12/MySql学习记录/index.html","2df6a3c5864f1ee5e572f7bd9e7ab086"],["/2019/02/18/cron表达式/index.html","ccf38ea4b3637fbb1d39a91b8619bffe"],["/2019/02/22/MySQL高性能优化/index.html","2bc7a0cfcf2eca7701cbaabcb2500792"],["/2019/04/16/hello-world/index.html","0fcd45fdf1ddd437ba238748b44fab97"],["/2019/04/18/IDEA奇淫绝技/index.html","89c04fe257995284dd2f28e11139a39e"],["/2019/04/23/SpringBoot之Scheduled/index.html","c9b5f89011e9f9678f484768bbdcb429"],["/about/index.html","226b1ed8a678efb268de806ec2401ba7"],["/archives/2018/08/index.html","baaffafb4040179a87056c7d98e11ff4"],["/archives/2018/08/page/2/index.html","5cea54c119d561f358da295b0f5b6017"],["/archives/2018/09/index.html","7a753aa84f36a49f5f472b5e80b76379"],["/archives/2018/10/index.html","6af99ee5a92cbcc8642f8b0c61009dec"],["/archives/2018/11/index.html","5020fba258d6f8a7cbce9068e1a5d7aa"],["/archives/2018/12/index.html","74b2d8985dac2cc56d191c97c1da321d"],["/archives/2018/index.html","8340a623a152a94aea81792e0be5a6e5"],["/archives/2018/page/2/index.html","d3d454e070e77f1d4872332280b1d8bf"],["/archives/2018/page/3/index.html","af8c2746a794c1013358d958cea80b4b"],["/archives/2019/01/index.html","7747b949e595b0ca120a3b2a28179435"],["/archives/2019/02/index.html","515471fa7f31550f0353ee918861035d"],["/archives/2019/04/index.html","28a156e1fcb08674d4cd256b844baf9b"],["/archives/2019/index.html","fa28f37bc009048f0bab768ffe876dbe"],["/archives/2019/page/2/index.html","db35fdab062ae509b38a40719dac71b8"],["/archives/index.html","02b61d9b859f0b71745376b9f979547a"],["/archives/page/2/index.html","6176ca71c127f54bab89b5e2a463bb6f"],["/archives/page/3/index.html","92c22a271b3e361a326d3629895df50b"],["/archives/page/4/index.html","f52f6d524aec5b31a1cd97f398e263d6"],["/categories/Hexo/index.html","611635355b0fe3a370f11dc0242d4f91"],["/categories/MQ/index.html","087249211953762a3cae3fbbf4ea680e"],["/categories/bug/index.html","4b9e9c50faebaf3f1b17233e8db9351e"],["/categories/hadoop/index.html","a05b76eef022b4d28d4abc9f8ea0e693"],["/categories/idea/index.html","103c9062646b3593afb37f99f43a5d5d"],["/categories/index.html","8878d428eeb8aa4dacced26769c3473e"],["/categories/java/index.html","7f0f96ad5c0c3b76e072dca4547a6f30"],["/categories/linux/index.html","f7194125a0ad9a75d558b8104d9eba6c"],["/categories/mysql/index.html","0b25fb8969b16b52241417a56542b186"],["/categories/spring/index.html","76a3e58979179b2387a2716188fa1ddb"],["/categories/架构/index.html","cab94f9b59f7cd447d97ef5623ea367d"],["/categories/概念/index.html","cb7c6ac0dcfdf4dc7c52358bc3a2c0b1"],["/categories/缓存/index.html","84a554c22bb904c74e399dcad8702941"],["/categories/面试/index.html","fbf3a2488ddc9a9452a3e89188a62d42"],["/categories/项目/index.html","aba0b4b76c44b991f167b188778917d1"],["/css/main.css","659a89a507783b9189a0a3443211a33a"],["/images/1168343.png","33a2939ff443fd020d393411e5a9ef8b"],["/images/algolia_logo.svg","88450dd56ea1a00ba772424b30b7d34d"],["/images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["/images/avatar.gif","2bed513bc5f13733cf9a8a12c4e1a971"],["/images/cc-by-nc-nd.svg","3b009b0d5970d2c4b18e140933547916"],["/images/cc-by-nc-sa.svg","cf2644b7aa5ebd3f5eab55329b4e7cb7"],["/images/cc-by-nc.svg","e63bcae937a1ae4cb6f83d8a1d26893c"],["/images/cc-by-nd.svg","78359b1307baffc2d0e8cffba5dee2dd"],["/images/cc-by-sa.svg","525d2a82716fe9860a65cf0ac5e231a0"],["/images/cc-by.svg","bd656500a74c634b4ff1333008c62cd8"],["/images/cc-zero.svg","2d6242e90c3082e7892cf478be605d26"],["/images/default_avatar.png","13736ab7511b09b017c2a4b9e032e44b"],["/images/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["/images/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["/images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/logo.svg","88985471c188e5c5a765a8f233c54df5"],["/images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/quote-l.svg","a9d75107c4d7e31612f98e78be0979f9"],["/images/quote-r.svg","5f902def9e09af7fc41e4cf86ad1a0f9"],["/images/searchicon.png","3d6b5c9d6d6c26a2b76a14b8fdf3438a"],["/index.html","236b97db8023f693a0167d55d20140ed"],["/js/src/affix.js","683c19859764baf0d17538897ea1eba2"],["/js/src/algolia-search.js","f5fa392318805997089ceb3a925979ba"],["/js/src/bootstrap.js","2a1083772854ae2663748e0a25c17285"],["/js/src/exturl.js","2b444179b3145e5007b4d371dac07cd3"],["/js/src/hook-duoshuo.js","45997b0c06abff3cd88efd901f614065"],["/js/src/js.cookie.js","6e9eb1f53afb135aedaf90739c867738"],["/js/src/love.js","5a87dd19400b2870ef6734f56cfe2208"],["/js/src/motion.js","0f6add86607c451269d0b3d286c84d8b"],["/js/src/post-details.js","b8e8e27c27c697567879c52888ffc24c"],["/js/src/schemes/pisces.js","827b5ad25e1142277c1e7dfe0cacebe5"],["/js/src/scroll-cookie.js","890406ae3539e4721ef5f314542e5e46"],["/js/src/scrollspy.js","fafdd7ab6af233b701506c733910b7f5"],["/js/src/utils.js","24512c3455f976730b7bf75e1222c533"],["/lib/Han/dist/font/han-space.woff","b09f2dd7d3ad8ad07f3b8495133909d9"],["/lib/Han/dist/font/han.woff","e841c6b547bc06a06f60f4de52bf906e"],["/lib/Han/dist/han.css","cfcc552e7aebaef5e2f34aee030b956b"],["/lib/Han/dist/han.js","575b6c1667c01798730fbd972e959c9c"],["/lib/Han/dist/han.min.css","cab466d758269b437167422c4a16b364"],["/lib/Han/dist/han.min.js","96482c9c2b3c5ea9bf5a40db162c7f34"],["/lib/algolia-instant-search/instantsearch.min.css","029a13b44e6807955106ff3c075a02f9"],["/lib/algolia-instant-search/instantsearch.min.js","0db46eba0c8133693ee839507b1612f2"],["/lib/canvas-nest/canvas-nest.min.js","36e103d2a05bc706bac40f9ab8881eb7"],["/lib/canvas-ribbon/canvas-ribbon.js","16dc214240913551986593808c2efcfc"],["/lib/fancybox/source/blank.gif","325472601571f31e1bf00674c368d335"],["/lib/fancybox/source/fancybox_loading.gif","328cc0f6c78211485058d460e80f4fa8"],["/lib/fancybox/source/fancybox_loading@2x.gif","f92938639fa894a0e8ded1c3368abe98"],["/lib/fancybox/source/fancybox_overlay.png","77aeaa52715b898b73c74d68c630330e"],["/lib/fancybox/source/fancybox_sprite.png","783d4031fe50c3d83c960911e1fbc705"],["/lib/fancybox/source/fancybox_sprite@2x.png","ed9970ce22242421e66ff150aa97fe5f"],["/lib/fancybox/source/helpers/fancybox_buttons.png","b448080f8615e664b7788c7003803b59"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.css","cac75538c2e3ddfadef839feaca8e356"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.js","f53c246661fb995a3f12e67fa38e0fa0"],["/lib/fancybox/source/helpers/jquery.fancybox-media.js","c017067f48d97ec4a077ccdf056e6a2e"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.css","52ddd84a9f42c1d4cd86d518a7f7e8bc"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.js","cf1fc1df534eede4cb460c5cbd71aba6"],["/lib/fancybox/source/jquery.fancybox.css","6c55951ce1e3115711f63f99b7501f3a"],["/lib/fancybox/source/jquery.fancybox.js","921e9cb04ad6e2559869ec845c5be39b"],["/lib/fancybox/source/jquery.fancybox.pack.js","cc9e759f24ba773aeef8a131889d3728"],["/lib/fastclick/README.html","b3cd6e7f930bf6e410a2e7eab8a148a8"],["/lib/fastclick/lib/fastclick.js","6e9d3b0da74f2a4a7042b494cdaa7c2e"],["/lib/fastclick/lib/fastclick.min.js","a0fc6c24d1f3ff9ac281887c92b24acd"],["/lib/font-awesome/css/font-awesome.css","c495654869785bc3df60216616814ad1"],["/lib/font-awesome/css/font-awesome.min.css","269550530cc127b6aa5a35925a7de6ce"],["/lib/font-awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["/lib/font-awesome/fonts/fontawesome-webfont.svg","acf3dcb7ff752b5296ca23ba2c7c2606"],["/lib/font-awesome/fonts/fontawesome-webfont.ttf","b06871f281fee6b241d60582ae9369b9"],["/lib/font-awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["/lib/jquery/index.js","32015dd42e9582a80a84736f5d9a44d7"],["/lib/jquery_lazyload/CONTRIBUTING.html","7287727950845c8a1010f3933691afef"],["/lib/jquery_lazyload/README.html","d89aa4afe316331a25b636b5ead4716e"],["/lib/jquery_lazyload/jquery.lazyload.js","8b427f9e86864ee3aaf1ae33e6e14263"],["/lib/jquery_lazyload/jquery.scrollstop.js","f163fd8f02361928853668a96f8a1249"],["/lib/needsharebutton/font-embedded.css","dd8861d10d1ed6b5e0c0011adfb39be9"],["/lib/needsharebutton/needsharebutton.css","30f2f800e13f7b6b83629a4cbd9749ef"],["/lib/needsharebutton/needsharebutton.js","6c6f855f7d50f4bc3c804f52b03bbfbb"],["/lib/pace/pace-theme-barber-shop.min.css","e8dc66cf2d88abc25fbc89b8a0529abb"],["/lib/pace/pace-theme-big-counter.min.css","db2b8fe31e60f19021545277d2f6e05e"],["/lib/pace/pace-theme-bounce.min.css","ad954aa0bace4b213eeb19d6e89a0bda"],["/lib/pace/pace-theme-center-atom.min.css","8f6bc803acefc6f93afc98fb38201456"],["/lib/pace/pace-theme-center-circle.min.css","93c72298781226a80a9c66b27b21a57d"],["/lib/pace/pace-theme-center-radar.min.css","f0099bdd1cd42e9476bd7abc417c0328"],["/lib/pace/pace-theme-center-simple.min.css","eddff4756dbf21dbbff1c543bd894dde"],["/lib/pace/pace-theme-corner-indicator.min.css","776826157cb28ac1ee5e78771292b9ba"],["/lib/pace/pace-theme-fill-left.min.css","965859b39001da08e1e92327fe3d8e12"],["/lib/pace/pace-theme-flash.min.css","aab39b436e1fa0fdc51df06f2d53c38a"],["/lib/pace/pace-theme-loading-bar.min.css","4e05877f1f9efb9c1e7dd75cb78c764f"],["/lib/pace/pace-theme-mac-osx.min.css","29ae030ceaa8158352c5472218375b91"],["/lib/pace/pace-theme-minimal.min.css","f48f04d370993b55a2745e548cc82743"],["/lib/pace/pace.min.js","24d2d5e3e331c4efa3cda1e1851b31a7"],["/lib/three/canvas_lines.min.js","1324174ae6190fbf63b7bf0ad0a8a5bd"],["/lib/three/canvas_sphere.min.js","5c6bc45b137448b5b9df152ccfb2659c"],["/lib/three/three-waves.min.js","41059bd5e5c7aa520b1b411919e5121f"],["/lib/three/three.min.js","3298078bce82bdb1afadf5b1a280915e"],["/lib/ua-parser-js/dist/ua-parser.min.js","a6e833266c4b41fabb9ba94a145322d8"],["/lib/ua-parser-js/dist/ua-parser.pack.js","6b627e4d61a7135952824bb9c1a4a134"],["/lib/velocity/velocity.js","0361fa6dcf4cf4d19c593cdab0937dd0"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.js","f55d22cc592c9f8d4ffd3b41a6b90081"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/page/2/index.html","03114c3a6df4cfbdceee08f40344dce4"],["/page/3/index.html","38aa07415dfe1c0daba8114e788c118d"],["/page/4/index.html","509f413cadc4ec94e6205757351db0ea"],["/sw-register.js","eba0e65b69a861bbf9817cb78769aa71"],["/tags/Hexo/index.html","579ad7363c9af81d81dff540c517747a"],["/tags/MQ/index.html","65f3903b5dfff30b3aa8f7c386144b87"],["/tags/cglib/index.html","f21df97b736a4d109cb3fecb558b4ceb"],["/tags/cron/index.html","b0bdcf9e595003dcc36f9d65f476a697"],["/tags/hadoop/index.html","46138826aacb3745c0b4ddca103f539a"],["/tags/http/index.html","e988698c3f1e3bac3ff7b65b61d3318e"],["/tags/idea/index.html","375438772289d0aaaa7861686f4972bb"],["/tags/index.html","021ed3f032017b92d8c4adb177b6ff89"],["/tags/java/index.html","1bec2d8c62e0ef885695a60af35224ea"],["/tags/java/page/2/index.html","dd4cefb8d52f0429117c787e49bf7e77"],["/tags/java多线程/index.html","ec0ddb5d71d3a9b123de6d4c53a4dcfa"],["/tags/java虚拟机/index.html","61c1287ed43f90e1bdca7496d14336ba"],["/tags/jetty/index.html","265fa2c4112200d01187cbeaa0f62466"],["/tags/linux/index.html","b1beab7b267930c5061a6869900288c8"],["/tags/mysql/index.html","c0b35c7eae3f126dd1e8685b1ca92991"],["/tags/spring/index.html","2d8d0d150362b248a60fd57f087388c2"],["/tags/tcp/index.html","e2cebee1cfaf909b9763b7a06e68896b"],["/tags/事务/index.html","3507f91ead6540f23346a395247f71b4"],["/tags/优化/index.html","4414e25204ea914f8c91cdd16225f894"],["/tags/并发/index.html","3435afe45a7eb33f234dc97c246c5280"],["/tags/缓存/index.html","386b408fcc6226552f22ad3073ff4b25"],["/tags/虚拟机/index.html","114abeaff658541182893dc60e5c1622"],["/tags/计算机网络/index.html","b28dad7063ac4296ee8c2cd291c020e4"],["/tags/降级/index.html","7482b5941316ef65542b266a1a403c7e"],["/tags/面试/index.html","b9d4dd538e5c584615e65a7e7b51078c"],["/tags/项目/index.html","646d8d867e70a9594e208953b787e271"],["/tags/高并发/index.html","a13e384e134bb8f0d098483a4f325bf2"],["/top/index.html","401fd17a77d24d5c4638684ecb92b989"]];
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
