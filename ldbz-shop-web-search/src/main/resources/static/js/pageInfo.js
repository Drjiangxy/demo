/* product-search/1.0.2 pageInfo.js Date:2016-12-06 18:22:05 */
define("js/pageInfo.js",[],function(require,a){var c=window.searchUnit;var d=window.SEARCH;var e=readCookie("ipLoc-djd");var f=readCookie("__jda");var g=a;function h(){g.tuiguangLoaded=!1,d.adv_param&&void 0!==d.adv_param.sync_num&&(g.tuiguangLoaded=!0,g.tuiguangNumLoaded=d.adv_param.sync_num)}h(),g.isShopResultPage=1==d.is_shop,g.isCoudan=d&&d.activity_id,g.isCoupon=c&&c.coupon&&c.coupon.batchId,g.isNoResultPage=$("#recNoResult").length>0,g.isLazyloadFeaturedGoods=d.adv_param&&1==d.adv_param.lazyload,g.isYiYao="search.yiyaojd.com"==window.location.hostname,g.enableAllResultBox=1==d.enable_yyk,g.enableContrast="1"==$("#J_goodsList").find("ul.gl-warp").attr("data-tpl"),g.enableFooter=$("#footmark").length>0,g.enableSidebar=1===d.enable_adv,g.areaId=e?e.split("-")[0]:"1",g.uuid=f?f.split(".")[1]:"-1",g.pin=decodeURIComponent(readCookie("pin")||""),g.KEYWORD=window.QUERY_KEYWORD,g.refresh=function(){g.isShopResultPage=1==d.is_shop,h()}});