"use strict";function createCookie(e,o,t){t=t||{};var n,i=encodeURIComponent(e)+"="+encodeURIComponent(o);isNaN(t.expires)||((n=new Date).setDate(n.getDate()+t.expires),i+=";expires="+n),t.path&&(i+=";path="+t.path),t.domain&&(i+=";domain="+t.domain),t.secure&&(i+=";secure"),document.cookie=i}function getCookie(e){for(var o=document.cookie.split("; "),t=0,n=o.length;t<n;t++){var i=o[t].split("=");if(encodeURIComponent(e)===i[0])return decodeURIComponent(i[1])}}