
'use strict';

import Vue from 'vue';

const get =  function (param,successCallback,failCallbak) { 
    var url = "//stats1.jiuyan.info/itugo_deleven.html?jsonpCallback=dasda&action=promo*forecast2017*2017Guess*";
    // Vue.axios.setHeader("Access-Control-Allow-Origin", "*");
    console.log(param);
    Vue.axios.get(url+param)
                .then(function (response) {
                    console.log(response);
                    if(response.status === 200 ){
                        if(successCallback) {
                            successCallback(response.data);
                        }
                    } else {
                        if(failCallbak) {
                            failCallbak(error);
                        }
                    } 
                })
                .catch(function (error) {
                    if(failCallbak) {
                        failCallbak(error);
                    }
                });
}

const shortUrlGet = function (param,successCallback) { 
    var url = "http://api.t.sina.com.cn/short_url/shorten.json?source=209678993&url_long=";

    Vue.axios.get(url+param)
                .then(function (response) {
                    if(response.status === 200 ){
                        if(successCallback) {
                            successCallback(response.data);
                        }
                    } else {
                        if(failCallbak) {
                            failCallbak(error);
                        }
                    } 
                })
                .catch(function (error) {
                    if(failCallbak) {
                        failCallbak(error);
                    }
                });

 }


exports.get = get;
exports.shortUrlGet = shortUrlGet;