import { Injectable } from '@angular/core';
import { Http, Headers, URLSearchParams, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';
import * as jsSHA from "jssha";
@Injectable()

export class TwitterUtils {
  consumerKey: string;
  consumerSecret: string;
  oauthKey: string;
  oauthSecret: string


  constructor(public http: Http) {
    
  }


  public configureUtils(cK, cS, oK, oS) {
    this.consumerKey = cK;
    this.consumerSecret = cS;
    this.oauthKey = oK;
    this.oauthSecret = oS;
  }


  public performGetRequest(url, neededParams, optionalParams?) {
    if (typeof(optionalParams)==='undefined') optionalParams = {};
    if (typeof(neededParams)==='undefined') neededParams = {};
    let parameters = Object.assign(optionalParams, neededParams);


    let signature = this.createTwitterSignature('GET', url, parameters, this.consumerKey, this.consumerSecret, this.oauthKey, this.oauthSecret);


    let headers = new Headers({ 'Accept': 'application/json' });
    headers.append('Authorization', signature['authorization_header']);


    let params = new URLSearchParams();
    for (var key in parameters) {
      params.set(key, parameters[key]);
    }


    return this.http.get(url, {search: params, headers: headers})
    .map(response => response.json());
  }


  public performPostRequest(url, neededParams, optionalParams?) {
    if (typeof(optionalParams)==='undefined') optionalParams = {};
    if (typeof(neededParams)==='undefined') neededParams = {};
    let parameters = Object.assign(optionalParams, neededParams);


    let signature = this.createTwitterSignature('POST', url, parameters, this.consumerKey, this.consumerSecret, this.oauthKey, this.oauthSecret);
    if (parameters !== {}) url = url + '?' + this.transformRequest(parameters);


    let headers = new Headers({ 'Accept': 'application/json' });
    headers.append('Authorization', signature['authorization_header']);


    let options = new RequestOptions({ headers: headers });


    return this.http.post(url, parameters, options)
    .map(response => response.json());
  }


  private createSignature(method, endPoint, headerParameters, bodyParameters, secretKey, tokenSecret) : {} {
   if(typeof jsSHA !== "undefined") {
     var headerAndBodyParameters = Object.assign({}, headerParameters)
     var bodyParameterKeys = Object.keys(bodyParameters);
     for(var i = 0; i < bodyParameterKeys.length; i++) {
       headerAndBodyParameters[bodyParameterKeys[i]] = this.escapeSpecialCharacters(bodyParameters[bodyParameterKeys[i]]);
     }
     var signatureBaseString = method + "&" + encodeURIComponent(endPoint) + "&";
     var headerAndBodyParameterKeys = (Object.keys(headerAndBodyParameters)).sort();
     for(i = 0; i < headerAndBodyParameterKeys.length; i++) {
       if(i == headerAndBodyParameterKeys.length - 1) {
         signatureBaseString += encodeURIComponent(headerAndBodyParameterKeys[i] + "=" + headerAndBodyParameters[headerAndBodyParameterKeys[i]]);
       } else {
         signatureBaseString += encodeURIComponent(headerAndBodyParameterKeys[i] + "=" + headerAndBodyParameters[headerAndBodyParameterKeys[i]] + "&");
       }
     }
     var oauthSignatureObject = new jsSHA(signatureBaseString, "TEXT");


     var encodedTokenSecret = '';
     if (tokenSecret) {
       encodedTokenSecret = encodeURIComponent(tokenSecret);
     }


     headerParameters.oauth_signature = encodeURIComponent(oauthSignatureObject.getHMAC(encodeURIComponent(secretKey) + "&" + encodedTokenSecret, ["TEXT", "SHA-1", "B64"]));
     var headerParameterKeys = Object.keys(headerParameters);
     var authorizationHeader = 'OAuth ';
     for(i = 0; i < headerParameterKeys.length; i++) {
       if(i == headerParameterKeys.length - 1) {
         authorizationHeader += headerParameterKeys[i] + '="' + headerParameters[headerParameterKeys[i]] + '"';
       } else {
         authorizationHeader += headerParameterKeys[i] + '="' + headerParameters[headerParameterKeys[i]] + '",';
       }
     }
     return { signature_base_string: signatureBaseString, authorization_header: authorizationHeader, signature: headerParameters.oauth_signature };
   } else {
     return {fail: "Missing jsSHA JavaScript library"};
   }
 }


 private createNonce(length) {
   var text = "";
   var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
   for(var i = 0; i < length; i++) {
     text += possible.charAt(Math.floor(Math.random() * possible.length));
   }
   return text;
 }


 private escapeSpecialCharacters(string) {
   var tmp = encodeURIComponent(string);
   tmp = tmp.replace(/\!/g, "%21");
   tmp = tmp.replace(/\'/g, "%27");
   tmp = tmp.replace(/\(/g, "%28");
   tmp = tmp.replace(/\)/g, "%29");
   tmp = tmp.replace(/\*/g, "%2A");
   return tmp;
 }


private transformRequest(obj) {
      var str = [];
      for(var p in obj)
      str.push(encodeURIComponent(p) + "=" + this.escapeSpecialCharacters(obj[p]));
      console.log(str.join('&'));
      return str.join('&');
  }


  private createTwitterSignature(method, url, bodyParameters, clientId, clientSecret, oauthKey, oauthSecret) {
     var oauthObject = {
       oauth_consumer_key: clientId,
       oauth_nonce: this.createNonce(10),
       oauth_signature_method: "HMAC-SHA1",
       oauth_token: oauthKey,
       oauth_timestamp: Math.round((new Date()).getTime() / 1000.0),
       oauth_version: "1.0"
     };
     var signatureObj = this.createSignature(method, url, oauthObject, bodyParameters, clientSecret, oauthSecret);
    return signatureObj;
   }
}