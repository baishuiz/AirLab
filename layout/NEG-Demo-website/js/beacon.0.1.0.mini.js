!function(a){function b(a){this.target=a}var c=a.beacon,d=function(c){return this!==a&&d.blend(this,d),new b(c)};d.toString=function(){return"baishuiz@gmail.com"};var e={base:f,avatarCore:b.prototype,self:f,init:function(){var b=Object.freeze;a.beacon=d,e.merge(d,f),delete a.beacon.base,b&&b(d)},login:function(){a.beacon=d},logoff:function(){a.beacon=c}},f={base:e};a.beacon=f}(this),function(a){var b=a.base||{},c={merge:function(a){for(var b=arguments.length,c=0;b>c;c++){var d=arguments[c];for(var e in d)a[e]=d[e]}return a},blend:function(a,b,d){var e={cover:!0,mergePrototype:!1};d=d?c.merge(e,d):e,b=[].concat(b);for(var f=b.length,g=0;f>g;g++){var h=b[g];for(var i in h){var j=d.mergePrototype||h.hasOwnProperty(i),k=d.cover||!a[i];j&&k&&(a[i]=h[i])}}return a},isType:function(a,b){return"Null"===b&&null===a||"Undefined"===b&&void 0===a||"Number"===b&&isFinite(a)||Object.prototype.toString.call(a).slice(8,-1)===b},NS:function(a,b){for(var c=function(){return this}(),d=a.split("."),e=b||c||{},f=0,g=d.length;g>f;f++){var h=d[f];e[h]=e[h]||{},e=e[h]}return e},arrayIndexOf:function(a,b){return c.arrayIndexOf=Array.prototype.indexOf?function(a,b){return a=[].slice.call(a,0),a.indexOf(b)}:function(a,b){a=[].slice.call(a,0);for(var c=a.length;c>=0;c--)if(a[c]===b)return c;return c},c.arrayIndexOf(a,b)},each:function(a,b){if(a){a=[].concat(a);for(var c=a.length-1;c>=0;c--)b.call(a[c],c,a[c])}},getGUID:function(){return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,function(a){var b=0|16*Math.random(),c="x"==a?b:8|3&b;return c.toString(16)}).toUpperCase()}};c.blend(b,c)}(beacon),function(a){function b(){if(this instanceof b)return this;var a=[],d=[],e=[].slice.call(arguments,0),f=e.slice(0),g=function(){function b(){return f=e.slice(0)}var g=function(b,e){var f=c.arrayIndexOf(a,b);0>f&&(a.push(b),d.push(e))},h=function(b){var e=c.arrayIndexOf(a,b),f=d[e];return b?f:d.slice(0)};this.resetEventList=b,this.getEventList=function(){return e.slice(0)},this.registEvent=function(a){var d=c.arrayIndexOf,f=e.slice(0),h=function(c,e){var g=this,h=d(f,c.eventType);h>=0&&f.splice(h,1),0===f.length&&(a.call(g,e),f=b())};return g(a,h),h},this.removeEvent=function(a){var b=[].concat(h(a));return b}};return g.prototype=new b,new g}var c=a.base;c.combinationalEvent=b}(beacon),function(a){function b(a,b){var c=h.arrayIndexOf(a,b);return c}function c(a){var c=b(j,a);return 0>c&&(c=j.push(a)-1),c}function d(a,b,c){h.arrayIndexOf,(!i[a]||i[a].length<=0)&&(i[a]=[{name:b,fn:[]}]);for(var d=i[a],e=0;e<d.length;e++){if(d[e].name===b){d[e].fn.push(c);break}e===d.length-1&&i[a].push({name:b,fn:[]})}}function e(a,b,c){var e=b.registEvent(c),f=b.getEventList();h.each(f,function(b){d(a,f[b],e)})}function f(a,b,c){if(!i[a])return null;if(!b&&!c)return i[a]=[],!0;for(var d,e=i[a],f=0;f<e.length;f++)if(e[f].name===b){d=e[f].fn;break}if(c)for(var g=d.length;g>=0;g--)d[g]===c&&e[f].fn.splice(g,1);else e[f].fn=[]}function g(a,b,c){var d=b.removeEvent(c);h.each(d,function(c){var e=d[c],g=b.getEventList();h.each(g,function(b){var c=g[b];f(a,c,e)})})}var h=a.base,i=[],j=[],k={hostProxy:{},attachEvent:function(a,b){var f=c(this),g=a instanceof h.combinationalEvent?e:d;g(f,a,b)},fireEvent:function(a,c){for(var d,e=this,f=b(j,e),g=i[f],k=0;k<g.length;k++)if(g[k].name===a){d=g[k].fn;break}h.each(d,function(b){var f={eventType:a};d[b].call(e,f,c)})},publicDispatchEvent:function(a,b){h.each(j,function(c){k.fireEvent.call(j[c],a,b)})},removeEvent:function(a,c){var d=this,e=b(j,d);a instanceof h.combinationalEvent?g(e,a,c):f(e,a,c)}},l=function(){var a=function(){};return a.prototype=k,h.blend(a,k),a}();h.Event=l}(beacon),function(a){var b=a.base,c=function(){return this}(),d=function(a){var c=b.arrayIndexOf,d=[],e={dom:a,attachEvent:function(a,b){d[a]=d[a]||[],d[a].push(b),d.push(a)},removeEvent:function(a,b){var e,f=d[a];if(a&&b){var g=c(f,b);e=d[a].splice(g,1)}else a&&!b?(e=d[a],d[a]=[]):a||b||(e=d,d=[]);return e}};return e},e={structures:[],getStructure:function(a){for(var b,c=0;c<e.structures.length;c++)if(b=e.structures[c],b.dom===a)return b},add:function(a,b,c){var f=e.getStructure(a);f||(f=new d(a),e.structures.push(f)),f.attachEvent(b,c)},remove:function(a,b,c){var d=e.getStructure(a);return d.removeEvent(b,c)}},f={attachEvent:function(a,b){var d,e=this,g=function(a,b){var c=this;c.addEventListener(a,b,!1)},h=function(a,b){var c=this;c.attachEvent("on"+a,b)},i=function(a,b){var c=this,d=c["on"+a];c["on"+a]=function(){d.call(c),b.call(c)}};return c.addEventListener?(g.call(e,a,b),d=g):c.attachEvent?(h.call(e,a,b),d=h):(i.call(e,a,b),d=i),f.attachEvent=d},fireEvent:function(a,b){var c,d=this,e=function(a,b){var c=this;b=b||{bubbles:!0,cancelable:!0},b.ieHack=c.all&&c.all.toString(),b.ieHack=c.style;var d=document.createEvent("Event");d.initEvent(a,b.bubbles,b.cancelable),c.dispatchEvent(d)},f=function(a,b){var c=this;b=b||{bubbles:!0,cancelable:!0},b.ieHack=c.all&&c.all.toString(),b.ieHack=c.style,a="on"+a;var d=document.createEventObject();d.cancelBubble=b.cancelable,c.fireEvent(a,d)};return document.createEvent&&d.dispatchEvent?(e.call(d,a,b),c=e):document.createEventObject&&d.fireEvent&&(f.call(d,a,b),c=f),c},removeEvent:function(a,b){var c,d=this,e=function(a,b){var c=this;c.removeEventListener(a,b,!1)},g=function(a,b){var c=this;c.detachEvent("on"+a,b)};return d.removeEventListener?(e.call(d,a,b),c=e):d.detachEvent&&(g.call(d,a,b),c=g),f.removeEvent=c}},g={attachEvent:function(a,b){var c=this;e.add(c,a,b),f.attachEvent.call(c,a,b)},fireEvent:function(a,b){var c=this;g.fireEVent=f.fireEvent.call(c,a,b)},removeEvent:function(a,c){var d=this;if(a&&c)f.removeEvent.call(d,a,c);else if(a&&!c){var h=e.remove(d,a);h&&b.each(h,function(){var b=this;g.removeEvent.call(d,a,b)})}else if(!a&&!c){var i=e.remove(d);i&&b.each(i,function(){var a=this;a&&b.each(i[a],function(){var b=this;g.removeEvent.call(d,a,b)})})}},isHTMLElement:function(a){var b;if(c.HTMLElement)b=a instanceof HTMLElement;else{var d=a.nodeName;b=!delete a.nodeName,a.nodeName=d}return b||(b=a==document||a==window),b},isEventSupported:function(a,b){if(!g.isHTMLElement(a))return!1;var c=!1;if(a===window||a===document){var d=document.createElement("iframe");d.style.display="none",document.body.appendChild(d);var e=a===window?d.contentWindow:d.contentDocument;g.attachEvent.call(e,b,function(){c=!0}),g.fireEvent.call(e,b),d.parentNode.removeChild(d)}else{var f=a.tagName,b="on"+b;a=document.createElement(f),c=b in a,c||(a.setAttribute(b,"return;"),c="function"==typeof a[b]),a=null}return c}};b.DOMEvent=g}(beacon),function(a){var b=a.base,c={on:function(){var b=a.base,c=b.isType,d=b.Event.hostProxy,e=b.Event.publicDispatchEvent,f=b.Event.attachEvent,g=function(a,b){var g=[].slice.call(arguments,0);b&&c(b,"Function")?f.apply(d,g):e.apply(d,g)};return g}(a),off:function(){var b=a.base,c=b.Event.hostProxy,d=function(){var a=[].slice.call(arguments,0);b.Event.removeEvent.apply(c,a)};return d}(),blend:b.blend,NS:b.NS,arrayIndexOf:b.ArrayIndexOf,isType:b.isType,Enum:b.Enum,loginGlobal:b.login,logoffGlobal:b.logoff,createEvent:function(){var a,c=[].slice.call(arguments,0);return a=arguments.length>1?b.combinationalEvent.apply(this,c):{desc:c[0]}}},d={on:function(b,c){var d=[].slice.call(arguments,0),e=this.target,f=a.base,g=f.DOMEvent.isHTMLElement(e),h=f.DOMEvent.isEventSupported(e,b),i=g&&h?f.DOMEvent.fireEvent:f.Event.fireEvent,j=g&&h?f.DOMEvent.attachEvent:f.Event.attachEvent;c&&f.isType(c,"Function")?f.each(e,function(a,b){j.apply(b,d)}):f.each(e,function(a,b){i.apply(b,d)})},off:function(a,c,d){var e=this.target,f=b.DOMEvent.isHTMLElement(e),g=a&&b.DOMEvent.isEventSupported(e,a);f&&g?b.DOMEvent.removeEvent:b.Event.removeEvent,b.each(e,function(e,g){f&&b.DOMEvent.removeEvent.call(g,a,c,d),b.Event.removeEvent.call(g,a,c,d)})}};b.blend(b.avatarCore,d),b.blend(a,c),b.init()}(beacon);