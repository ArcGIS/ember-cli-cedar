(function(t){if("object"==typeof exports&&"undefined"!=typeof module)module.exports=t()
else if("function"==typeof define&&define.amd)JSZip=t(),define([],t)
else{var e
"undefined"!=typeof window?e=window:"undefined"!=typeof global?e=global:"undefined"!=typeof $&&$.global?e=$.global:"undefined"!=typeof self&&(e=self),e.JSZip=t()}})(function(){return function t(e,r,n){function i(s,o){if(!r[s]){if(!e[s]){var d="function"==typeof require&&require
if(!o&&d)return d(s,!0)
if(a)return a(s,!0)
throw new Error("Cannot find module '"+s+"'")}var h=r[s]={exports:{}}
e[s][0].call(h.exports,function(t){var r=e[s][1][t]
return i(r||t)},h,h.exports,t,e,r,n)}return r[s].exports}for(var a="function"==typeof require&&require,s=0;s<n.length;s++)i(n[s])
return i}({1:[function(t,e,r){"use strict"
var n="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/="
r.encode=function(t,e){for(var r,i,a,s,o,d,h,l="",f=0;f<t.length;)s=(r=t.charCodeAt(f++))>>2,o=(3&r)<<4|(i=t.charCodeAt(f++))>>4,d=(15&i)<<2|(a=t.charCodeAt(f++))>>6,h=63&a,isNaN(i)?d=h=64:isNaN(a)&&(h=64),l=l+n.charAt(s)+n.charAt(o)+n.charAt(d)+n.charAt(h)
return l},r.decode=function(t,e){var r,i,a,s,o,d,h="",l=0
for(t=t.replace(/[^A-Za-z0-9\+\/\=]/g,"");l<t.length;)r=n.indexOf(t.charAt(l++))<<2|(s=n.indexOf(t.charAt(l++)))>>4,i=(15&s)<<4|(o=n.indexOf(t.charAt(l++)))>>2,a=(3&o)<<6|(d=n.indexOf(t.charAt(l++))),h+=String.fromCharCode(r),64!=o&&(h+=String.fromCharCode(i)),64!=d&&(h+=String.fromCharCode(a))
return h}},{}],2:[function(t,e,r){"use strict"
function n(){this.compressedSize=0,this.uncompressedSize=0,this.crc32=0,this.compressionMethod=null,this.compressedContent=null}n.prototype={getContent:function(){return null},getCompressedContent:function(){return null}},e.exports=n},{}],3:[function(t,e,r){"use strict"
r.STORE={magic:"\0\0",compress:function(t){return t},uncompress:function(t){return t},compressInputType:null,uncompressInputType:null},r.DEFLATE=t("./flate")},{"./flate":8}],4:[function(t,e,r){"use strict"
var n=t("./utils"),i=[0,1996959894,3993919788,2567524794,124634137,1886057615,3915621685,2657392035,249268274,2044508324,3772115230,2547177864,162941995,2125561021,3887607047,2428444049,498536548,1789927666,4089016648,2227061214,450548861,1843258603,4107580753,2211677639,325883990,1684777152,4251122042,2321926636,335633487,1661365465,4195302755,2366115317,997073096,1281953886,3579855332,2724688242,1006888145,1258607687,3524101629,2768942443,901097722,1119000684,3686517206,2898065728,853044451,1172266101,3705015759,2882616665,651767980,1373503546,3369554304,3218104598,565507253,1454621731,3485111705,3099436303,671266974,1594198024,3322730930,2970347812,795835527,1483230225,3244367275,3060149565,1994146192,31158534,2563907772,4023717930,1907459465,112637215,2680153253,3904427059,2013776290,251722036,2517215374,3775830040,2137656763,141376813,2439277719,3865271297,1802195444,476864866,2238001368,4066508878,1812370925,453092731,2181625025,4111451223,1706088902,314042704,2344532202,4240017532,1658658271,366619977,2362670323,4224994405,1303535960,984961486,2747007092,3569037538,1256170817,1037604311,2765210733,3554079995,1131014506,879679996,2909243462,3663771856,1141124467,855842277,2852801631,3708648649,1342533948,654459306,3188396048,3373015174,1466479909,544179635,3110523913,3462522015,1591671054,702138776,2966460450,3352799412,1504918807,783551873,3082640443,3233442989,3988292384,2596254646,62317068,1957810842,3939845945,2647816111,81470997,1943803523,3814918930,2489596804,225274430,2053790376,3826175755,2466906013,167816743,2097651377,4027552580,2265490386,503444072,1762050814,4150417245,2154129355,426522225,1852507879,4275313526,2312317920,282753626,1742555852,4189708143,2394877945,397917763,1622183637,3604390888,2714866558,953729732,1340076626,3518719985,2797360999,1068828381,1219638859,3624741850,2936675148,906185462,1090812512,3747672003,2825379669,829329135,1181335161,3412177804,3160834842,628085408,1382605366,3423369109,3138078467,570562233,1426400815,3317316542,2998733608,733239954,1555261956,3268935591,3050360625,752459403,1541320221,2607071920,3965973030,1969922972,40735498,2617837225,3943577151,1913087877,83908371,2512341634,3803740692,2075208622,213261112,2463272603,3855990285,2094854071,198958881,2262029012,4057260610,1759359992,534414190,2176718541,4139329115,1873836001,414664567,2282248934,4279200368,1711684554,285281116,2405801727,4167216745,1634467795,376229701,2685067896,3608007406,1308918612,956543938,2808555105,3495958263,1231636301,1047427035,2932959818,3654703836,1088359270,936918e3,2847714899,3736837829,1202900863,817233897,3183342108,3401237130,1404277552,615818150,3134207493,3453421203,1423857449,601450431,3009837614,3294710456,1567103746,711928724,3020668471,3272380065,1510334235,755167117]
e.exports=function(t,e){if(void 0===t||!t.length)return 0
var r="string"!==n.getTypeOf(t)
void 0===e&&(e=0)
var a=0
e^=-1
for(var s=0,o=t.length;s<o;s++)a=r?t[s]:t.charCodeAt(s),e=e>>>8^i[255&(e^a)]
return-1^e}},{"./utils":21}],5:[function(t,e,r){"use strict"
var n=t("./utils")
function i(t){this.data=null,this.length=0,this.index=0}i.prototype={checkOffset:function(t){this.checkIndex(this.index+t)},checkIndex:function(t){if(this.length<t||t<0)throw new Error("End of data reached (data length = "+this.length+", asked index = "+t+"). Corrupted zip ?")},setIndex:function(t){this.checkIndex(t),this.index=t},skip:function(t){this.setIndex(this.index+t)},byteAt:function(t){},readInt:function(t){var e,r=0
for(this.checkOffset(t),e=this.index+t-1;e>=this.index;e--)r=(r<<8)+this.byteAt(e)
return this.index+=t,r},readString:function(t){return n.transformTo("string",this.readData(t))},readData:function(t){},lastIndexOfSignature:function(t){},readDate:function(){var t=this.readInt(4)
return new Date(1980+(t>>25&127),(t>>21&15)-1,t>>16&31,t>>11&31,t>>5&63,(31&t)<<1)}},e.exports=i},{"./utils":21}],6:[function(t,e,r){"use strict"
r.base64=!1,r.binary=!1,r.dir=!1,r.createFolders=!1,r.date=null,r.compression=null,r.comment=null},{}],7:[function(t,e,r){"use strict"
var n=t("./utils")
r.string2binary=function(t){return n.string2binary(t)},r.string2Uint8Array=function(t){return n.transformTo("uint8array",t)},r.uint8Array2String=function(t){return n.transformTo("string",t)},r.string2Blob=function(t){var e=n.transformTo("arraybuffer",t)
return n.arrayBuffer2Blob(e)},r.arrayBuffer2Blob=function(t){return n.arrayBuffer2Blob(t)},r.transformTo=function(t,e){return n.transformTo(t,e)},r.getTypeOf=function(t){return n.getTypeOf(t)},r.checkSupport=function(t){return n.checkSupport(t)},r.MAX_VALUE_16BITS=n.MAX_VALUE_16BITS,r.MAX_VALUE_32BITS=n.MAX_VALUE_32BITS,r.pretty=function(t){return n.pretty(t)},r.findCompression=function(t){return n.findCompression(t)},r.isRegExp=function(t){return n.isRegExp(t)}},{"./utils":21}],8:[function(t,e,r){"use strict"
var n="undefined"!=typeof Uint8Array&&"undefined"!=typeof Uint16Array&&"undefined"!=typeof Uint32Array,i=t("pako")
r.uncompressInputType=n?"uint8array":"array",r.compressInputType=n?"uint8array":"array",r.magic="\b\0",r.compress=function(t){return i.deflateRaw(t)},r.uncompress=function(t){return i.inflateRaw(t)}},{pako:24}],9:[function(t,e,r){"use strict"
var n=t("./base64")
function i(t,e){if(!(this instanceof i))return new i(t,e)
this.files={},this.comment=null,this.root="",t&&this.load(t,e),this.clone=function(){var t=new i
for(var e in this)"function"!=typeof this[e]&&(t[e]=this[e])
return t}}i.prototype=t("./object"),i.prototype.load=t("./load"),i.support=t("./support"),i.defaults=t("./defaults"),i.utils=t("./deprecatedPublicUtils"),i.base64={encode:function(t){return n.encode(t)},decode:function(t){return n.decode(t)}},i.compressions=t("./compressions"),e.exports=i},{"./base64":1,"./compressions":3,"./defaults":6,"./deprecatedPublicUtils":7,"./load":10,"./object":13,"./support":17}],10:[function(t,e,r){"use strict"
var n=t("./base64"),i=t("./zipEntries")
e.exports=function(t,e){var r,a,s,o
for((e=e||{}).base64&&(t=n.decode(t)),r=(a=new i(t,e)).files,s=0;s<r.length;s++)o=r[s],this.file(o.fileName,o.decompressed,{binary:!0,optimizedBinaryString:!0,date:o.date,dir:o.dir,comment:o.fileComment.length?o.fileComment:null,createFolders:e.createFolders})
return a.zipComment.length&&(this.comment=a.zipComment),this}},{"./base64":1,"./zipEntries":22}],11:[function(t,e,r){(function(t){"use strict"
e.exports=function(e,r){return new t(e,r)},e.exports.test=function(e){return t.isBuffer(e)}}).call(this,"undefined"!=typeof Buffer?Buffer:void 0)},{}],12:[function(t,e,r){"use strict"
var n=t("./uint8ArrayReader")
function i(t){this.data=t,this.length=this.data.length,this.index=0}i.prototype=new n,i.prototype.readData=function(t){this.checkOffset(t)
var e=this.data.slice(this.index,this.index+t)
return this.index+=t,e},e.exports=i},{"./uint8ArrayReader":18}],13:[function(t,e,r){"use strict"
var n=t("./support"),i=t("./utils"),a=t("./crc32"),s=t("./signature"),o=t("./defaults"),d=t("./base64"),h=t("./compressions"),l=t("./compressedObject"),f=t("./nodeBuffer"),u=t("./utf8"),c=t("./stringWriter"),_=t("./uint8ArrayWriter"),p=function(t){if(t._data instanceof l&&(t._data=t._data.getContent(),t.options.binary=!0,t.options.base64=!1,"uint8array"===i.getTypeOf(t._data))){var e=t._data
t._data=new Uint8Array(e.length),0!==e.length&&t._data.set(e,0)}return t._data},m=function(t){var e=p(t)
return"string"===i.getTypeOf(e)?!t.options.binary&&n.nodebuffer?f(e,"utf-8"):t.asBinary():e},g=function(t){var e=p(this)
return null===e||void 0===e?"":(this.options.base64&&(e=d.decode(e)),e=t&&this.options.binary?A.utf8decode(e):i.transformTo("string",e),t||this.options.binary||(e=i.transformTo("string",A.utf8encode(e))),e)},b=function(t,e,r){this.name=t,this.dir=r.dir,this.date=r.date,this.comment=r.comment,this._data=e,this.options=r,this._initialMetadata={dir:r.dir,date:r.date}}
b.prototype={asText:function(){return g.call(this,!0)},asBinary:function(){return g.call(this,!1)},asNodeBuffer:function(){var t=m(this)
return i.transformTo("nodebuffer",t)},asUint8Array:function(){var t=m(this)
return i.transformTo("uint8array",t)},asArrayBuffer:function(){return this.asUint8Array().buffer}}
var w=function(t,e){var r,n=""
for(r=0;r<e;r++)n+=String.fromCharCode(255&t),t>>>=8
return n},v=function(){var t,e,r={}
for(t=0;t<arguments.length;t++)for(e in arguments[t])arguments[t].hasOwnProperty(e)&&void 0===r[e]&&(r[e]=arguments[t][e])
return r},y=function(t,e,r){var n,a,s=i.getTypeOf(e)
if(!0!==(a=(a=r)||{}).base64||null!==a.binary&&void 0!==a.binary||(a.binary=!0),(a=v(a,o)).date=a.date||new Date,null!==a.compression&&(a.compression=a.compression.toUpperCase()),(r=a).createFolders&&(n=k(t))&&x.call(this,n,!0),r.dir||null===e||void 0===e)r.base64=!1,r.binary=!1,e=null
else if("string"===s)r.binary&&!r.base64&&!0!==r.optimizedBinaryString&&(e=i.string2binary(e))
else{if(r.base64=!1,r.binary=!0,!(s||e instanceof l))throw new Error("The data of '"+t+"' is in an unsupported format !")
"arraybuffer"===s&&(e=i.transformTo("uint8array",e))}var d=new b(t,e,r)
return this.files[t]=d,d},k=function(t){"/"==t.slice(-1)&&(t=t.substring(0,t.length-1))
var e=t.lastIndexOf("/")
return e>0?t.substring(0,e):""},x=function(t,e){return"/"!=t.slice(-1)&&(t+="/"),e=void 0!==e&&e,this.files[t]||y.call(this,t,null,{dir:!0,createFolders:e}),this.files[t]},z=function(t,e){var r,n=new l
return t._data instanceof l?(n.uncompressedSize=t._data.uncompressedSize,n.crc32=t._data.crc32,0===n.uncompressedSize||t.dir?(e=h.STORE,n.compressedContent="",n.crc32=0):t._data.compressionMethod===e.magic?n.compressedContent=t._data.getCompressedContent():(r=t._data.getContent(),n.compressedContent=e.compress(i.transformTo(e.compressInputType,r)))):((r=m(t))&&0!==r.length&&!t.dir||(e=h.STORE,r=""),n.uncompressedSize=r.length,n.crc32=a(r),n.compressedContent=e.compress(i.transformTo(e.compressInputType,r))),n.compressedSize=n.compressedContent.length,n.compressionMethod=e.magic,n},C=function(t,e,r,n){r.compressedContent
var o,d,h,l,f=i.transformTo("string",u.utf8encode(e.name)),c=e.comment||"",_=i.transformTo("string",u.utf8encode(c)),p=f.length!==e.name.length,m=_.length!==c.length,g=e.options,b="",v="",y=""
h=e._initialMetadata.dir!==e.dir?e.dir:g.dir,o=(l=e._initialMetadata.date!==e.date?e.date:g.date).getHours(),o<<=6,o|=l.getMinutes(),o<<=5,o|=l.getSeconds()/2,d=l.getFullYear()-1980,d<<=4,d|=l.getMonth()+1,d<<=5,d|=l.getDate(),p&&(v=w(1,1)+w(a(f),4)+f,b+="up"+w(v.length,2)+v),m&&(y=w(1,1)+w(this.crc32(_),4)+_,b+="uc"+w(y.length,2)+y)
var k=""
return k+="\n\0",k+=p||m?"\0\b":"\0\0",k+=r.compressionMethod,k+=w(o,2),k+=w(d,2),k+=w(r.crc32,4),k+=w(r.compressedSize,4),k+=w(r.uncompressedSize,4),k+=w(f.length,2),k+=w(b.length,2),{fileRecord:s.LOCAL_FILE_HEADER+k+f+b,dirRecord:s.CENTRAL_FILE_HEADER+"\0"+k+w(_.length,2)+"\0\0\0\0"+(!0===h?"\0\0\0":"\0\0\0\0")+w(n,4)+f+b+_,compressedObject:r}},A={load:function(t,e){throw new Error("Load method is not defined. Is the file jszip-load.js included ?")},filter:function(t){var e,r,n,i,a=[]
for(e in this.files)this.files.hasOwnProperty(e)&&(n=this.files[e],i=new b(n.name,n._data,v(n.options)),r=e.slice(this.root.length,e.length),e.slice(0,this.root.length)===this.root&&t(r,i)&&a.push(i))
return a},file:function(t,e,r){if(1===arguments.length){if(i.isRegExp(t)){var n=t
return this.filter(function(t,e){return!e.dir&&n.test(t)})}return this.filter(function(e,r){return!r.dir&&e===t})[0]||null}return t=this.root+t,y.call(this,t,e,r),this},folder:function(t){if(!t)return this
if(i.isRegExp(t))return this.filter(function(e,r){return r.dir&&t.test(e)})
var e=this.root+t,r=x.call(this,e),n=this.clone()
return n.root=r.name,n},remove:function(t){t=this.root+t
var e=this.files[t]
if(e||("/"!=t.slice(-1)&&(t+="/"),e=this.files[t]),e&&!e.dir)delete this.files[t]
else for(var r=this.filter(function(e,r){return r.name.slice(0,t.length)===t}),n=0;n<r.length;n++)delete this.files[r[n].name]
return this},generate:function(t){t=v(t||{},{base64:!0,compression:"STORE",type:"base64",comment:null}),i.checkSupport(t.type)
var e,r,n=[],a=0,o=0,l=i.transformTo("string",this.utf8encode(t.comment||this.comment||""))
for(var f in this.files)if(this.files.hasOwnProperty(f)){var u=this.files[f],p=u.options.compression||t.compression.toUpperCase(),m=h[p]
if(!m)throw new Error(p+" is not a valid compression method !")
var g=z.call(this,u,m),b=C.call(this,f,u,g,a)
a+=b.fileRecord.length+g.compressedSize,o+=b.dirRecord.length,n.push(b)}var y
y=s.CENTRAL_DIRECTORY_END+"\0\0\0\0"+w(n.length,2)+w(n.length,2)+w(o,4)+w(a,4)+w(l.length,2)+l
var k=t.type.toLowerCase()
for(e="uint8array"===k||"arraybuffer"===k||"blob"===k||"nodebuffer"===k?new _(a+o+y.length):new c(a+o+y.length),r=0;r<n.length;r++)e.append(n[r].fileRecord),e.append(n[r].compressedObject.compressedContent)
for(r=0;r<n.length;r++)e.append(n[r].dirRecord)
e.append(y)
var x=e.finalize()
switch(t.type.toLowerCase()){case"uint8array":case"arraybuffer":case"nodebuffer":return i.transformTo(t.type.toLowerCase(),x)
case"blob":return i.arrayBuffer2Blob(i.transformTo("arraybuffer",x))
case"base64":return t.base64?d.encode(x):x
default:return x}},crc32:function(t,e){return a(t,e)},utf8encode:function(t){return i.transformTo("string",u.utf8encode(t))},utf8decode:function(t){return u.utf8decode(t)}}
e.exports=A},{"./base64":1,"./compressedObject":2,"./compressions":3,"./crc32":4,"./defaults":6,"./nodeBuffer":11,"./signature":14,"./stringWriter":16,"./support":17,"./uint8ArrayWriter":19,"./utf8":20,"./utils":21}],14:[function(t,e,r){"use strict"
r.LOCAL_FILE_HEADER="PK",r.CENTRAL_FILE_HEADER="PK",r.CENTRAL_DIRECTORY_END="PK",r.ZIP64_CENTRAL_DIRECTORY_LOCATOR="PK",r.ZIP64_CENTRAL_DIRECTORY_END="PK",r.DATA_DESCRIPTOR="PK\b"},{}],15:[function(t,e,r){"use strict"
var n=t("./dataReader"),i=t("./utils")
function a(t,e){this.data=t,e||(this.data=i.string2binary(this.data)),this.length=this.data.length,this.index=0}a.prototype=new n,a.prototype.byteAt=function(t){return this.data.charCodeAt(t)},a.prototype.lastIndexOfSignature=function(t){return this.data.lastIndexOf(t)},a.prototype.readData=function(t){this.checkOffset(t)
var e=this.data.slice(this.index,this.index+t)
return this.index+=t,e},e.exports=a},{"./dataReader":5,"./utils":21}],16:[function(t,e,r){"use strict"
var n=t("./utils"),i=function(){this.data=[]}
i.prototype={append:function(t){t=n.transformTo("string",t),this.data.push(t)},finalize:function(){return this.data.join("")}},e.exports=i},{"./utils":21}],17:[function(t,e,r){(function(t){"use strict"
if(r.base64=!0,r.array=!0,r.string=!0,r.arraybuffer="undefined"!=typeof ArrayBuffer&&"undefined"!=typeof Uint8Array,r.nodebuffer=void 0!==t,r.uint8array="undefined"!=typeof Uint8Array,"undefined"==typeof ArrayBuffer)r.blob=!1
else{var e=new ArrayBuffer(0)
try{r.blob=0===new Blob([e],{type:"application/zip"}).size}catch(t){try{var n=new(window.BlobBuilder||window.WebKitBlobBuilder||window.MozBlobBuilder||window.MSBlobBuilder)
n.append(e),r.blob=0===n.getBlob("application/zip").size}catch(t){r.blob=!1}}}}).call(this,"undefined"!=typeof Buffer?Buffer:void 0)},{}],18:[function(t,e,r){"use strict"
var n=t("./dataReader")
function i(t){t&&(this.data=t,this.length=this.data.length,this.index=0)}i.prototype=new n,i.prototype.byteAt=function(t){return this.data[t]},i.prototype.lastIndexOfSignature=function(t){for(var e=t.charCodeAt(0),r=t.charCodeAt(1),n=t.charCodeAt(2),i=t.charCodeAt(3),a=this.length-4;a>=0;--a)if(this.data[a]===e&&this.data[a+1]===r&&this.data[a+2]===n&&this.data[a+3]===i)return a
return-1},i.prototype.readData=function(t){if(this.checkOffset(t),0===t)return new Uint8Array(0)
var e=this.data.subarray(this.index,this.index+t)
return this.index+=t,e},e.exports=i},{"./dataReader":5}],19:[function(t,e,r){"use strict"
var n=t("./utils"),i=function(t){this.data=new Uint8Array(t),this.index=0}
i.prototype={append:function(t){0!==t.length&&(t=n.transformTo("uint8array",t),this.data.set(t,this.index),this.index+=t.length)},finalize:function(){return this.data}},e.exports=i},{"./utils":21}],20:[function(t,e,r){"use strict"
for(var n=t("./utils"),i=t("./support"),a=t("./nodeBuffer"),s=new Array(256),o=0;o<256;o++)s[o]=o>=252?6:o>=248?5:o>=240?4:o>=224?3:o>=192?2:1
s[254]=s[254]=1
var d=function(t,e){var r
for((e=e||t.length)>t.length&&(e=t.length),r=e-1;r>=0&&128==(192&t[r]);)r--
return r<0?e:0===r?e:r+s[t[r]]>e?r:e},h=function(t){var e,r,i,a,o=t.length,d=new Array(2*o)
for(r=0,e=0;e<o;)if((i=t[e++])<128)d[r++]=i
else if((a=s[i])>4)d[r++]=65533,e+=a-1
else{for(i&=2===a?31:3===a?15:7;a>1&&e<o;)i=i<<6|63&t[e++],a--
a>1?d[r++]=65533:i<65536?d[r++]=i:(i-=65536,d[r++]=55296|i>>10&1023,d[r++]=56320|1023&i)}return d.length!==r&&(d.subarray?d=d.subarray(0,r):d.length=r),n.applyFromCharCode(d)}
r.utf8encode=function(t){return i.nodebuffer?a(t,"utf-8"):function(t){var e,r,n,a,s,o=t.length,d=0
for(a=0;a<o;a++)55296==(64512&(r=t.charCodeAt(a)))&&a+1<o&&56320==(64512&(n=t.charCodeAt(a+1)))&&(r=65536+(r-55296<<10)+(n-56320),a++),d+=r<128?1:r<2048?2:r<65536?3:4
for(e=i.uint8array?new Uint8Array(d):new Array(d),s=0,a=0;s<d;a++)55296==(64512&(r=t.charCodeAt(a)))&&a+1<o&&56320==(64512&(n=t.charCodeAt(a+1)))&&(r=65536+(r-55296<<10)+(n-56320),a++),r<128?e[s++]=r:r<2048?(e[s++]=192|r>>>6,e[s++]=128|63&r):r<65536?(e[s++]=224|r>>>12,e[s++]=128|r>>>6&63,e[s++]=128|63&r):(e[s++]=240|r>>>18,e[s++]=128|r>>>12&63,e[s++]=128|r>>>6&63,e[s++]=128|63&r)
return e}(t)},r.utf8decode=function(t){if(i.nodebuffer)return n.transformTo("nodebuffer",t).toString("utf-8")
for(var e=[],r=0,a=(t=n.transformTo(i.uint8array?"uint8array":"array",t)).length;r<a;){var s=d(t,Math.min(r+65536,a))
i.uint8array?e.push(h(t.subarray(r,s))):e.push(h(t.slice(r,s))),r=s}return e.join("")}},{"./nodeBuffer":11,"./support":17,"./utils":21}],21:[function(t,e,r){"use strict"
var n=t("./support"),i=t("./compressions"),a=t("./nodeBuffer")
function s(t){return t}function o(t,e){for(var r=0;r<t.length;++r)e[r]=255&t.charCodeAt(r)
return e}function d(t){var e=65536,n=[],i=t.length,s=r.getTypeOf(t),o=0,d=!0
try{switch(s){case"uint8array":String.fromCharCode.apply(null,new Uint8Array(0))
break
case"nodebuffer":String.fromCharCode.apply(null,a(0))}}catch(t){d=!1}if(!d){for(var h="",l=0;l<t.length;l++)h+=String.fromCharCode(t[l])
return h}for(;o<i&&e>1;)try{"array"===s||"nodebuffer"===s?n.push(String.fromCharCode.apply(null,t.slice(o,Math.min(o+e,i)))):n.push(String.fromCharCode.apply(null,t.subarray(o,Math.min(o+e,i)))),o+=e}catch(t){e=Math.floor(e/2)}return n.join("")}function h(t,e){for(var r=0;r<t.length;r++)e[r]=t[r]
return e}r.string2binary=function(t){for(var e="",r=0;r<t.length;r++)e+=String.fromCharCode(255&t.charCodeAt(r))
return e},r.arrayBuffer2Blob=function(t){r.checkSupport("blob")
try{return new Blob([t],{type:"application/zip"})}catch(r){try{var e=new(window.BlobBuilder||window.WebKitBlobBuilder||window.MozBlobBuilder||window.MSBlobBuilder)
return e.append(t),e.getBlob("application/zip")}catch(t){throw new Error("Bug : can't construct the Blob.")}}},r.applyFromCharCode=d
var l={}
l.string={string:s,array:function(t){return o(t,new Array(t.length))},arraybuffer:function(t){return l.string.uint8array(t).buffer},uint8array:function(t){return o(t,new Uint8Array(t.length))},nodebuffer:function(t){return o(t,a(t.length))}},l.array={string:d,array:s,arraybuffer:function(t){return new Uint8Array(t).buffer},uint8array:function(t){return new Uint8Array(t)},nodebuffer:function(t){return a(t)}},l.arraybuffer={string:function(t){return d(new Uint8Array(t))},array:function(t){return h(new Uint8Array(t),new Array(t.byteLength))},arraybuffer:s,uint8array:function(t){return new Uint8Array(t)},nodebuffer:function(t){return a(new Uint8Array(t))}},l.uint8array={string:d,array:function(t){return h(t,new Array(t.length))},arraybuffer:function(t){return t.buffer},uint8array:s,nodebuffer:function(t){return a(t)}},l.nodebuffer={string:d,array:function(t){return h(t,new Array(t.length))},arraybuffer:function(t){return l.nodebuffer.uint8array(t).buffer},uint8array:function(t){return h(t,new Uint8Array(t.length))},nodebuffer:s},r.transformTo=function(t,e){if(e||(e=""),!t)return e
r.checkSupport(t)
var n=r.getTypeOf(e)
return l[n][t](e)},r.getTypeOf=function(t){return"string"==typeof t?"string":"[object Array]"===Object.prototype.toString.call(t)?"array":n.nodebuffer&&a.test(t)?"nodebuffer":n.uint8array&&t instanceof Uint8Array?"uint8array":n.arraybuffer&&t instanceof ArrayBuffer?"arraybuffer":void 0},r.checkSupport=function(t){if(!n[t.toLowerCase()])throw new Error(t+" is not supported by this browser")},r.MAX_VALUE_16BITS=65535,r.MAX_VALUE_32BITS=-1,r.pretty=function(t){var e,r,n=""
for(r=0;r<(t||"").length;r++)n+="\\x"+((e=t.charCodeAt(r))<16?"0":"")+e.toString(16).toUpperCase()
return n},r.findCompression=function(t){for(var e in i)if(i.hasOwnProperty(e)&&i[e].magic===t)return i[e]
return null},r.isRegExp=function(t){return"[object RegExp]"===Object.prototype.toString.call(t)}},{"./compressions":3,"./nodeBuffer":11,"./support":17}],22:[function(t,e,r){"use strict"
var n=t("./stringReader"),i=t("./nodeBufferReader"),a=t("./uint8ArrayReader"),s=t("./utils"),o=t("./signature"),d=t("./zipEntry"),h=t("./support"),l=t("./object")
function f(t,e){this.files=[],this.loadOptions=e,t&&this.load(t)}f.prototype={checkSignature:function(t){var e=this.reader.readString(4)
if(e!==t)throw new Error("Corrupted zip or bug : unexpected signature ("+s.pretty(e)+", expected "+s.pretty(t)+")")},readBlockEndOfCentral:function(){this.diskNumber=this.reader.readInt(2),this.diskWithCentralDirStart=this.reader.readInt(2),this.centralDirRecordsOnThisDisk=this.reader.readInt(2),this.centralDirRecords=this.reader.readInt(2),this.centralDirSize=this.reader.readInt(4),this.centralDirOffset=this.reader.readInt(4),this.zipCommentLength=this.reader.readInt(2),this.zipComment=this.reader.readString(this.zipCommentLength),this.zipComment=l.utf8decode(this.zipComment)},readBlockZip64EndOfCentral:function(){this.zip64EndOfCentralSize=this.reader.readInt(8),this.versionMadeBy=this.reader.readString(2),this.versionNeeded=this.reader.readInt(2),this.diskNumber=this.reader.readInt(4),this.diskWithCentralDirStart=this.reader.readInt(4),this.centralDirRecordsOnThisDisk=this.reader.readInt(8),this.centralDirRecords=this.reader.readInt(8),this.centralDirSize=this.reader.readInt(8),this.centralDirOffset=this.reader.readInt(8),this.zip64ExtensibleData={}
for(var t,e,r,n=this.zip64EndOfCentralSize-44;0<n;)t=this.reader.readInt(2),e=this.reader.readInt(4),r=this.reader.readString(e),this.zip64ExtensibleData[t]={id:t,length:e,value:r}},readBlockZip64EndOfCentralLocator:function(){if(this.diskWithZip64CentralDirStart=this.reader.readInt(4),this.relativeOffsetEndOfZip64CentralDir=this.reader.readInt(8),this.disksCount=this.reader.readInt(4),this.disksCount>1)throw new Error("Multi-volumes zip are not supported")},readLocalFiles:function(){var t,e
for(t=0;t<this.files.length;t++)e=this.files[t],this.reader.setIndex(e.localHeaderOffset),this.checkSignature(o.LOCAL_FILE_HEADER),e.readLocalPart(this.reader),e.handleUTF8()},readCentralDir:function(){var t
for(this.reader.setIndex(this.centralDirOffset);this.reader.readString(4)===o.CENTRAL_FILE_HEADER;)(t=new d({zip64:this.zip64},this.loadOptions)).readCentralPart(this.reader),this.files.push(t)},readEndOfCentral:function(){var t=this.reader.lastIndexOfSignature(o.CENTRAL_DIRECTORY_END)
if(-1===t)throw new Error("Corrupted zip : can't find end of central directory")
if(this.reader.setIndex(t),this.checkSignature(o.CENTRAL_DIRECTORY_END),this.readBlockEndOfCentral(),this.diskNumber===s.MAX_VALUE_16BITS||this.diskWithCentralDirStart===s.MAX_VALUE_16BITS||this.centralDirRecordsOnThisDisk===s.MAX_VALUE_16BITS||this.centralDirRecords===s.MAX_VALUE_16BITS||this.centralDirSize===s.MAX_VALUE_32BITS||this.centralDirOffset===s.MAX_VALUE_32BITS){if(this.zip64=!0,-1===(t=this.reader.lastIndexOfSignature(o.ZIP64_CENTRAL_DIRECTORY_LOCATOR)))throw new Error("Corrupted zip : can't find the ZIP64 end of central directory locator")
this.reader.setIndex(t),this.checkSignature(o.ZIP64_CENTRAL_DIRECTORY_LOCATOR),this.readBlockZip64EndOfCentralLocator(),this.reader.setIndex(this.relativeOffsetEndOfZip64CentralDir),this.checkSignature(o.ZIP64_CENTRAL_DIRECTORY_END),this.readBlockZip64EndOfCentral()}},prepareReader:function(t){var e=s.getTypeOf(t)
"string"!==e||h.uint8array?this.reader="nodebuffer"===e?new i(t):new a(s.transformTo("uint8array",t)):this.reader=new n(t,this.loadOptions.optimizedBinaryString)},load:function(t){this.prepareReader(t),this.readEndOfCentral(),this.readCentralDir(),this.readLocalFiles()}},e.exports=f},{"./nodeBufferReader":12,"./object":13,"./signature":14,"./stringReader":15,"./support":17,"./uint8ArrayReader":18,"./utils":21,"./zipEntry":23}],23:[function(t,e,r){"use strict"
var n=t("./stringReader"),i=t("./utils"),a=t("./compressedObject"),s=t("./object")
function o(t,e){this.options=t,this.loadOptions=e}o.prototype={isEncrypted:function(){return 1==(1&this.bitFlag)},useUTF8:function(){return 2048==(2048&this.bitFlag)},prepareCompressedContent:function(t,e,r){return function(){var n=t.index
t.setIndex(e)
var i=t.readData(r)
return t.setIndex(n),i}},prepareContent:function(t,e,r,n,a){return function(){var t=i.transformTo(n.uncompressInputType,this.getCompressedContent()),e=n.uncompress(t)
if(e.length!==a)throw new Error("Bug : uncompressed data size mismatch")
return e}},readLocalPart:function(t){var e,r
if(t.skip(22),this.fileNameLength=t.readInt(2),r=t.readInt(2),this.fileName=t.readString(this.fileNameLength),t.skip(r),-1==this.compressedSize||-1==this.uncompressedSize)throw new Error("Bug or corrupted zip : didn't get enough informations from the central directory (compressedSize == -1 || uncompressedSize == -1)")
if(null===(e=i.findCompression(this.compressionMethod)))throw new Error("Corrupted zip : compression "+i.pretty(this.compressionMethod)+" unknown (inner file : "+this.fileName+")")
if(this.decompressed=new a,this.decompressed.compressedSize=this.compressedSize,this.decompressed.uncompressedSize=this.uncompressedSize,this.decompressed.crc32=this.crc32,this.decompressed.compressionMethod=this.compressionMethod,this.decompressed.getCompressedContent=this.prepareCompressedContent(t,t.index,this.compressedSize,e),this.decompressed.getContent=this.prepareContent(t,t.index,this.compressedSize,e,this.uncompressedSize),this.loadOptions.checkCRC32&&(this.decompressed=i.transformTo("string",this.decompressed.getContent()),s.crc32(this.decompressed)!==this.crc32))throw new Error("Corrupted zip : CRC32 mismatch")},readCentralPart:function(t){if(this.versionMadeBy=t.readString(2),this.versionNeeded=t.readInt(2),this.bitFlag=t.readInt(2),this.compressionMethod=t.readString(2),this.date=t.readDate(),this.crc32=t.readInt(4),this.compressedSize=t.readInt(4),this.uncompressedSize=t.readInt(4),this.fileNameLength=t.readInt(2),this.extraFieldsLength=t.readInt(2),this.fileCommentLength=t.readInt(2),this.diskNumberStart=t.readInt(2),this.internalFileAttributes=t.readInt(2),this.externalFileAttributes=t.readInt(4),this.localHeaderOffset=t.readInt(4),this.isEncrypted())throw new Error("Encrypted zip are not supported")
this.fileName=t.readString(this.fileNameLength),this.readExtraFields(t),this.parseZIP64ExtraField(t),this.fileComment=t.readString(this.fileCommentLength),this.dir=!!(16&this.externalFileAttributes)},parseZIP64ExtraField:function(t){if(this.extraFields[1]){var e=new n(this.extraFields[1].value)
this.uncompressedSize===i.MAX_VALUE_32BITS&&(this.uncompressedSize=e.readInt(8)),this.compressedSize===i.MAX_VALUE_32BITS&&(this.compressedSize=e.readInt(8)),this.localHeaderOffset===i.MAX_VALUE_32BITS&&(this.localHeaderOffset=e.readInt(8)),this.diskNumberStart===i.MAX_VALUE_32BITS&&(this.diskNumberStart=e.readInt(4))}},readExtraFields:function(t){var e,r,n,i=t.index
for(this.extraFields=this.extraFields||{};t.index<i+this.extraFieldsLength;)e=t.readInt(2),r=t.readInt(2),n=t.readString(r),this.extraFields[e]={id:e,length:r,value:n}},handleUTF8:function(){if(this.useUTF8())this.fileName=s.utf8decode(this.fileName),this.fileComment=s.utf8decode(this.fileComment)
else{var t=this.findExtraFieldUnicodePath()
null!==t&&(this.fileName=t)
var e=this.findExtraFieldUnicodeComment()
null!==e&&(this.fileComment=e)}},findExtraFieldUnicodePath:function(){var t=this.extraFields[28789]
if(t){var e=new n(t.value)
return 1!==e.readInt(1)?null:s.crc32(this.fileName)!==e.readInt(4)?null:s.utf8decode(e.readString(t.length-5))}return null},findExtraFieldUnicodeComment:function(){var t=this.extraFields[25461]
if(t){var e=new n(t.value)
return 1!==e.readInt(1)?null:s.crc32(this.fileComment)!==e.readInt(4)?null:s.utf8decode(e.readString(t.length-5))}return null}},e.exports=o},{"./compressedObject":2,"./object":13,"./stringReader":15,"./utils":21}],24:[function(t,e,r){"use strict"
var n={};(0,t("./lib/utils/common").assign)(n,t("./lib/deflate"),t("./lib/inflate"),t("./lib/zlib/constants")),e.exports=n},{"./lib/deflate":25,"./lib/inflate":26,"./lib/utils/common":27,"./lib/zlib/constants":30}],25:[function(t,e,r){"use strict"
var n=t("./zlib/deflate.js"),i=t("./utils/common"),a=t("./utils/strings"),s=t("./zlib/messages"),o=t("./zlib/zstream"),d=function(t){this.options=i.assign({level:-1,method:8,chunkSize:16384,windowBits:15,memLevel:8,strategy:0,to:""},t||{})
var e=this.options
e.raw&&e.windowBits>0?e.windowBits=-e.windowBits:e.gzip&&e.windowBits>0&&e.windowBits<16&&(e.windowBits+=16),this.err=0,this.msg="",this.ended=!1,this.chunks=[],this.strm=new o,this.strm.avail_out=0
var r=n.deflateInit2(this.strm,e.level,e.method,e.windowBits,e.memLevel,e.strategy)
if(0!==r)throw new Error(s[r])
e.header&&n.deflateSetHeader(this.strm,e.header)}
function h(t,e){var r=new d(e)
if(r.push(t,!0),r.err)throw r.msg
return r.result}d.prototype.push=function(t,e){var r,s,o=this.strm,d=this.options.chunkSize
if(this.ended)return!1
s=e===~~e?e:!0===e?4:0,o.input="string"==typeof t?a.string2buf(t):t,o.next_in=0,o.avail_in=o.input.length
do{if(0===o.avail_out&&(o.output=new i.Buf8(d),o.next_out=0,o.avail_out=d),1!==(r=n.deflate(o,s))&&0!==r)return this.onEnd(r),this.ended=!0,!1;(0===o.avail_out||0===o.avail_in&&4===s)&&("string"===this.options.to?this.onData(a.buf2binstring(i.shrinkBuf(o.output,o.next_out))):this.onData(i.shrinkBuf(o.output,o.next_out)))}while((o.avail_in>0||0===o.avail_out)&&1!==r)
return 4!==s||(r=n.deflateEnd(this.strm),this.onEnd(r),this.ended=!0,0===r)},d.prototype.onData=function(t){this.chunks.push(t)},d.prototype.onEnd=function(t){0===t&&("string"===this.options.to?this.result=this.chunks.join(""):this.result=i.flattenChunks(this.chunks)),this.chunks=[],this.err=t,this.msg=this.strm.msg},r.Deflate=d,r.deflate=h,r.deflateRaw=function(t,e){return(e=e||{}).raw=!0,h(t,e)},r.gzip=function(t,e){return(e=e||{}).gzip=!0,h(t,e)}},{"./utils/common":27,"./utils/strings":28,"./zlib/deflate.js":32,"./zlib/messages":37,"./zlib/zstream":39}],26:[function(t,e,r){"use strict"
var n=t("./zlib/inflate.js"),i=t("./utils/common"),a=t("./utils/strings"),s=t("./zlib/constants"),o=t("./zlib/messages"),d=t("./zlib/zstream"),h=t("./zlib/gzheader"),l=function(t){this.options=i.assign({chunkSize:16384,windowBits:0,to:""},t||{})
var e=this.options
e.raw&&e.windowBits>=0&&e.windowBits<16&&(e.windowBits=-e.windowBits,0===e.windowBits&&(e.windowBits=-15)),!(e.windowBits>=0&&e.windowBits<16)||t&&t.windowBits||(e.windowBits+=32),e.windowBits>15&&e.windowBits<48&&0==(15&e.windowBits)&&(e.windowBits|=15),this.err=0,this.msg="",this.ended=!1,this.chunks=[],this.strm=new d,this.strm.avail_out=0
var r=n.inflateInit2(this.strm,e.windowBits)
if(r!==s.Z_OK)throw new Error(o[r])
this.header=new h,n.inflateGetHeader(this.strm,this.header)}
function f(t,e){var r=new l(e)
if(r.push(t,!0),r.err)throw r.msg
return r.result}l.prototype.push=function(t,e){var r,o,d,h,l,f=this.strm,u=this.options.chunkSize
if(this.ended)return!1
o=e===~~e?e:!0===e?s.Z_FINISH:s.Z_NO_FLUSH,f.input="string"==typeof t?a.binstring2buf(t):t,f.next_in=0,f.avail_in=f.input.length
do{if(0===f.avail_out&&(f.output=new i.Buf8(u),f.next_out=0,f.avail_out=u),(r=n.inflate(f,s.Z_NO_FLUSH))!==s.Z_STREAM_END&&r!==s.Z_OK)return this.onEnd(r),this.ended=!0,!1
f.next_out&&(0===f.avail_out||r===s.Z_STREAM_END||0===f.avail_in&&o===s.Z_FINISH)&&("string"===this.options.to?(d=a.utf8border(f.output,f.next_out),h=f.next_out-d,l=a.buf2string(f.output,d),f.next_out=h,f.avail_out=u-h,h&&i.arraySet(f.output,f.output,d,h,0),this.onData(l)):this.onData(i.shrinkBuf(f.output,f.next_out)))}while(f.avail_in>0&&r!==s.Z_STREAM_END)
return r===s.Z_STREAM_END&&(o=s.Z_FINISH),o!==s.Z_FINISH||(r=n.inflateEnd(this.strm),this.onEnd(r),this.ended=!0,r===s.Z_OK)},l.prototype.onData=function(t){this.chunks.push(t)},l.prototype.onEnd=function(t){t===s.Z_OK&&("string"===this.options.to?this.result=this.chunks.join(""):this.result=i.flattenChunks(this.chunks)),this.chunks=[],this.err=t,this.msg=this.strm.msg},r.Inflate=l,r.inflate=f,r.inflateRaw=function(t,e){return(e=e||{}).raw=!0,f(t,e)},r.ungzip=f},{"./utils/common":27,"./utils/strings":28,"./zlib/constants":30,"./zlib/gzheader":33,"./zlib/inflate.js":35,"./zlib/messages":37,"./zlib/zstream":39}],27:[function(t,e,r){"use strict"
var n="undefined"!=typeof Uint8Array&&"undefined"!=typeof Uint16Array&&"undefined"!=typeof Int32Array
r.assign=function(t){for(var e=Array.prototype.slice.call(arguments,1);e.length;){var r=e.shift()
if(r){if("object"!=typeof r)throw new TypeError(r+"must be non-object")
for(var n in r)r.hasOwnProperty(n)&&(t[n]=r[n])}}return t},r.shrinkBuf=function(t,e){return t.length===e?t:t.subarray?t.subarray(0,e):(t.length=e,t)}
var i={arraySet:function(t,e,r,n,i){if(e.subarray&&t.subarray)t.set(e.subarray(r,r+n),i)
else for(var a=0;a<n;a++)t[i+a]=e[r+a]},flattenChunks:function(t){var e,r,n,i,a,s
for(n=0,e=0,r=t.length;e<r;e++)n+=t[e].length
for(s=new Uint8Array(n),i=0,e=0,r=t.length;e<r;e++)a=t[e],s.set(a,i),i+=a.length
return s}},a={arraySet:function(t,e,r,n,i){for(var a=0;a<n;a++)t[i+a]=e[r+a]},flattenChunks:function(t){return[].concat.apply([],t)}}
r.setTyped=function(t){t?(r.Buf8=Uint8Array,r.Buf16=Uint16Array,r.Buf32=Int32Array,r.assign(r,i)):(r.Buf8=Array,r.Buf16=Array,r.Buf32=Array,r.assign(r,a))},r.setTyped(n)},{}],28:[function(t,e,r){"use strict"
var n=t("./common"),i=!0,a=!0
try{String.fromCharCode.apply(null,[0])}catch(t){i=!1}try{String.fromCharCode.apply(null,new Uint8Array(1))}catch(t){a=!1}for(var s=new n.Buf8(256),o=0;o<256;o++)s[o]=o>=252?6:o>=248?5:o>=240?4:o>=224?3:o>=192?2:1
function d(t,e){if(e<65537&&(t.subarray&&a||!t.subarray&&i))return String.fromCharCode.apply(null,n.shrinkBuf(t,e))
for(var r="",s=0;s<e;s++)r+=String.fromCharCode(t[s])
return r}s[254]=s[254]=1,r.string2buf=function(t){var e,r,i,a,s,o=t.length,d=0
for(a=0;a<o;a++)55296==(64512&(r=t.charCodeAt(a)))&&a+1<o&&56320==(64512&(i=t.charCodeAt(a+1)))&&(r=65536+(r-55296<<10)+(i-56320),a++),d+=r<128?1:r<2048?2:r<65536?3:4
for(e=new n.Buf8(d),s=0,a=0;s<d;a++)55296==(64512&(r=t.charCodeAt(a)))&&a+1<o&&56320==(64512&(i=t.charCodeAt(a+1)))&&(r=65536+(r-55296<<10)+(i-56320),a++),r<128?e[s++]=r:r<2048?(e[s++]=192|r>>>6,e[s++]=128|63&r):r<65536?(e[s++]=224|r>>>12,e[s++]=128|r>>>6&63,e[s++]=128|63&r):(e[s++]=240|r>>>18,e[s++]=128|r>>>12&63,e[s++]=128|r>>>6&63,e[s++]=128|63&r)
return e},r.buf2binstring=function(t){return d(t,t.length)},r.binstring2buf=function(t){for(var e=new n.Buf8(t.length),r=0,i=e.length;r<i;r++)e[r]=t.charCodeAt(r)
return e},r.buf2string=function(t,e){var r,n,i,a,o=e||t.length,h=new Array(2*o)
for(n=0,r=0;r<o;)if((i=t[r++])<128)h[n++]=i
else if((a=s[i])>4)h[n++]=65533,r+=a-1
else{for(i&=2===a?31:3===a?15:7;a>1&&r<o;)i=i<<6|63&t[r++],a--
a>1?h[n++]=65533:i<65536?h[n++]=i:(i-=65536,h[n++]=55296|i>>10&1023,h[n++]=56320|1023&i)}return d(h,n)},r.utf8border=function(t,e){var r
for((e=e||t.length)>t.length&&(e=t.length),r=e-1;r>=0&&128==(192&t[r]);)r--
return r<0?e:0===r?e:r+s[t[r]]>e?r:e}},{"./common":27}],29:[function(t,e,r){"use strict"
e.exports=function(t,e,r,n){for(var i=65535&t|0,a=t>>>16&65535|0,s=0;0!==r;){r-=s=r>2e3?2e3:r
do{a=a+(i=i+e[n++]|0)|0}while(--s)
i%=65521,a%=65521}return i|a<<16|0}},{}],30:[function(t,e,r){e.exports={Z_NO_FLUSH:0,Z_PARTIAL_FLUSH:1,Z_SYNC_FLUSH:2,Z_FULL_FLUSH:3,Z_FINISH:4,Z_BLOCK:5,Z_TREES:6,Z_OK:0,Z_STREAM_END:1,Z_NEED_DICT:2,Z_ERRNO:-1,Z_STREAM_ERROR:-2,Z_DATA_ERROR:-3,Z_BUF_ERROR:-5,Z_NO_COMPRESSION:0,Z_BEST_SPEED:1,Z_BEST_COMPRESSION:9,Z_DEFAULT_COMPRESSION:-1,Z_FILTERED:1,Z_HUFFMAN_ONLY:2,Z_RLE:3,Z_FIXED:4,Z_DEFAULT_STRATEGY:0,Z_BINARY:0,Z_TEXT:1,Z_UNKNOWN:2,Z_DEFLATED:8}},{}],31:[function(t,e,r){"use strict"
var n=function(){for(var t,e=[],r=0;r<256;r++){t=r
for(var n=0;n<8;n++)t=1&t?3988292384^t>>>1:t>>>1
e[r]=t}return e}()
e.exports=function(t,e,r,i){var a=n,s=i+r
t^=-1
for(var o=i;o<s;o++)t=t>>>8^a[255&(t^e[o])]
return-1^t}},{}],32:[function(t,e,r){"use strict"
var n=t("../utils/common"),i=t("./trees"),a=t("./adler32"),s=t("./crc32"),o=t("./messages"),d=0,h=1,l=3,f=4,u=5,c=0,_=1,p=-2,m=-3,g=-5,b=-1,w=1,v=2,y=3,k=4,x=0,z=2,C=8,A=9,E=15,S=8,B=286,I=30,T=19,R=2*B+1,O=15,L=3,D=258,N=D+L+1,U=32,F=42,Z=69,M=73,P=91,j=103,H=113,X=666,K=1,V=2,Y=3,W=4,q=3
function G(t,e){return t.msg=o[e],e}function J(t){return(t<<1)-(t>4?9:0)}function $(t){for(var e=t.length;--e>=0;)t[e]=0}function Q(t){var e=t.state,r=e.pending
r>t.avail_out&&(r=t.avail_out),0!==r&&(n.arraySet(t.output,e.pending_buf,e.pending_out,r,t.next_out),t.next_out+=r,e.pending_out+=r,t.total_out+=r,t.avail_out-=r,e.pending-=r,0===e.pending&&(e.pending_out=0))}function tt(t,e){i._tr_flush_block(t,t.block_start>=0?t.block_start:-1,t.strstart-t.block_start,e),t.block_start=t.strstart,Q(t.strm)}function et(t,e){t.pending_buf[t.pending++]=e}function rt(t,e){t.pending_buf[t.pending++]=e>>>8&255,t.pending_buf[t.pending++]=255&e}function nt(t,e){var r,n,i=t.max_chain_length,a=t.strstart,s=t.prev_length,o=t.nice_match,d=t.strstart>t.w_size-N?t.strstart-(t.w_size-N):0,h=t.window,l=t.w_mask,f=t.prev,u=t.strstart+D,c=h[a+s-1],_=h[a+s]
t.prev_length>=t.good_match&&(i>>=2),o>t.lookahead&&(o=t.lookahead)
do{if(h[(r=e)+s]===_&&h[r+s-1]===c&&h[r]===h[a]&&h[++r]===h[a+1]){a+=2,r++
do{}while(h[++a]===h[++r]&&h[++a]===h[++r]&&h[++a]===h[++r]&&h[++a]===h[++r]&&h[++a]===h[++r]&&h[++a]===h[++r]&&h[++a]===h[++r]&&h[++a]===h[++r]&&a<u)
if(n=D-(u-a),a=u-D,n>s){if(t.match_start=e,s=n,n>=o)break
c=h[a+s-1],_=h[a+s]}}}while((e=f[e&l])>d&&0!=--i)
return s<=t.lookahead?s:t.lookahead}function it(t){var e,r,i,o,d,h,l,f,u,c,_=t.w_size
do{if(o=t.window_size-t.lookahead-t.strstart,t.strstart>=_+(_-N)){n.arraySet(t.window,t.window,_,_,0),t.match_start-=_,t.strstart-=_,t.block_start-=_,e=r=t.hash_size
do{i=t.head[--e],t.head[e]=i>=_?i-_:0}while(--r)
e=r=_
do{i=t.prev[--e],t.prev[e]=i>=_?i-_:0}while(--r)
o+=_}if(0===t.strm.avail_in)break
if(h=t.strm,l=t.window,f=t.strstart+t.lookahead,u=o,c=void 0,(c=h.avail_in)>u&&(c=u),r=0===c?0:(h.avail_in-=c,n.arraySet(l,h.input,h.next_in,c,f),1===h.state.wrap?h.adler=a(h.adler,l,c,f):2===h.state.wrap&&(h.adler=s(h.adler,l,c,f)),h.next_in+=c,h.total_in+=c,c),t.lookahead+=r,t.lookahead+t.insert>=L)for(d=t.strstart-t.insert,t.ins_h=t.window[d],t.ins_h=(t.ins_h<<t.hash_shift^t.window[d+1])&t.hash_mask;t.insert&&(t.ins_h=(t.ins_h<<t.hash_shift^t.window[d+L-1])&t.hash_mask,t.prev[d&t.w_mask]=t.head[t.ins_h],t.head[t.ins_h]=d,d++,t.insert--,!(t.lookahead+t.insert<L)););}while(t.lookahead<N&&0!==t.strm.avail_in)}function at(t,e){for(var r,n;;){if(t.lookahead<N){if(it(t),t.lookahead<N&&e===d)return K
if(0===t.lookahead)break}if(r=0,t.lookahead>=L&&(t.ins_h=(t.ins_h<<t.hash_shift^t.window[t.strstart+L-1])&t.hash_mask,r=t.prev[t.strstart&t.w_mask]=t.head[t.ins_h],t.head[t.ins_h]=t.strstart),0!==r&&t.strstart-r<=t.w_size-N&&(t.match_length=nt(t,r)),t.match_length>=L)if(n=i._tr_tally(t,t.strstart-t.match_start,t.match_length-L),t.lookahead-=t.match_length,t.match_length<=t.max_lazy_match&&t.lookahead>=L){t.match_length--
do{t.strstart++,t.ins_h=(t.ins_h<<t.hash_shift^t.window[t.strstart+L-1])&t.hash_mask,r=t.prev[t.strstart&t.w_mask]=t.head[t.ins_h],t.head[t.ins_h]=t.strstart}while(0!=--t.match_length)
t.strstart++}else t.strstart+=t.match_length,t.match_length=0,t.ins_h=t.window[t.strstart],t.ins_h=(t.ins_h<<t.hash_shift^t.window[t.strstart+1])&t.hash_mask
else n=i._tr_tally(t,0,t.window[t.strstart]),t.lookahead--,t.strstart++
if(n&&(tt(t,!1),0===t.strm.avail_out))return K}return t.insert=t.strstart<L-1?t.strstart:L-1,e===f?(tt(t,!0),0===t.strm.avail_out?Y:W):t.last_lit&&(tt(t,!1),0===t.strm.avail_out)?K:V}function st(t,e){for(var r,n,a;;){if(t.lookahead<N){if(it(t),t.lookahead<N&&e===d)return K
if(0===t.lookahead)break}if(r=0,t.lookahead>=L&&(t.ins_h=(t.ins_h<<t.hash_shift^t.window[t.strstart+L-1])&t.hash_mask,r=t.prev[t.strstart&t.w_mask]=t.head[t.ins_h],t.head[t.ins_h]=t.strstart),t.prev_length=t.match_length,t.prev_match=t.match_start,t.match_length=L-1,0!==r&&t.prev_length<t.max_lazy_match&&t.strstart-r<=t.w_size-N&&(t.match_length=nt(t,r),t.match_length<=5&&(t.strategy===w||t.match_length===L&&t.strstart-t.match_start>4096)&&(t.match_length=L-1)),t.prev_length>=L&&t.match_length<=t.prev_length){a=t.strstart+t.lookahead-L,n=i._tr_tally(t,t.strstart-1-t.prev_match,t.prev_length-L),t.lookahead-=t.prev_length-1,t.prev_length-=2
do{++t.strstart<=a&&(t.ins_h=(t.ins_h<<t.hash_shift^t.window[t.strstart+L-1])&t.hash_mask,r=t.prev[t.strstart&t.w_mask]=t.head[t.ins_h],t.head[t.ins_h]=t.strstart)}while(0!=--t.prev_length)
if(t.match_available=0,t.match_length=L-1,t.strstart++,n&&(tt(t,!1),0===t.strm.avail_out))return K}else if(t.match_available){if((n=i._tr_tally(t,0,t.window[t.strstart-1]))&&tt(t,!1),t.strstart++,t.lookahead--,0===t.strm.avail_out)return K}else t.match_available=1,t.strstart++,t.lookahead--}return t.match_available&&(n=i._tr_tally(t,0,t.window[t.strstart-1]),t.match_available=0),t.insert=t.strstart<L-1?t.strstart:L-1,e===f?(tt(t,!0),0===t.strm.avail_out?Y:W):t.last_lit&&(tt(t,!1),0===t.strm.avail_out)?K:V}var ot,dt=function(t,e,r,n,i){this.good_length=t,this.max_lazy=e,this.nice_length=r,this.max_chain=n,this.func=i}
function ht(t){var e
return t&&t.state?(t.total_in=t.total_out=0,t.data_type=z,(e=t.state).pending=0,e.pending_out=0,e.wrap<0&&(e.wrap=-e.wrap),e.status=e.wrap?F:H,t.adler=2===e.wrap?0:1,e.last_flush=d,i._tr_init(e),c):G(t,p)}function lt(t){var e,r=ht(t)
return r===c&&((e=t.state).window_size=2*e.w_size,$(e.head),e.max_lazy_match=ot[e.level].max_lazy,e.good_match=ot[e.level].good_length,e.nice_match=ot[e.level].nice_length,e.max_chain_length=ot[e.level].max_chain,e.strstart=0,e.block_start=0,e.lookahead=0,e.insert=0,e.match_length=e.prev_length=L-1,e.match_available=0,e.ins_h=0),r}function ft(t,e,r,i,a,s){if(!t)return p
var o=1
if(e===b&&(e=6),i<0?(o=0,i=-i):i>15&&(o=2,i-=16),a<1||a>A||r!==C||i<8||i>15||e<0||e>9||s<0||s>k)return G(t,p)
8===i&&(i=9)
var d=new function(){this.strm=null,this.status=0,this.pending_buf=null,this.pending_buf_size=0,this.pending_out=0,this.pending=0,this.wrap=0,this.gzhead=null,this.gzindex=0,this.method=C,this.last_flush=-1,this.w_size=0,this.w_bits=0,this.w_mask=0,this.window=null,this.window_size=0,this.prev=null,this.head=null,this.ins_h=0,this.hash_size=0,this.hash_bits=0,this.hash_mask=0,this.hash_shift=0,this.block_start=0,this.match_length=0,this.prev_match=0,this.match_available=0,this.strstart=0,this.match_start=0,this.lookahead=0
this.prev_length=0,this.max_chain_length=0,this.max_lazy_match=0,this.level=0,this.strategy=0,this.good_match=0,this.nice_match=0,this.dyn_ltree=new n.Buf16(2*R),this.dyn_dtree=new n.Buf16(2*(2*I+1)),this.bl_tree=new n.Buf16(2*(2*T+1)),$(this.dyn_ltree),$(this.dyn_dtree),$(this.bl_tree),this.l_desc=null,this.d_desc=null,this.bl_desc=null,this.bl_count=new n.Buf16(O+1),this.heap=new n.Buf16(2*B+1),$(this.heap),this.heap_len=0,this.heap_max=0,this.depth=new n.Buf16(2*B+1),$(this.depth),this.l_buf=0,this.lit_bufsize=0,this.last_lit=0,this.d_buf=0,this.opt_len=0,this.static_len=0,this.matches=0
this.insert=0,this.bi_buf=0,this.bi_valid=0}
return t.state=d,d.strm=t,d.wrap=o,d.gzhead=null,d.w_bits=i,d.w_size=1<<d.w_bits,d.w_mask=d.w_size-1,d.hash_bits=a+7,d.hash_size=1<<d.hash_bits,d.hash_mask=d.hash_size-1,d.hash_shift=~~((d.hash_bits+L-1)/L),d.window=new n.Buf8(2*d.w_size),d.head=new n.Buf16(d.hash_size),d.prev=new n.Buf16(d.w_size),d.lit_bufsize=1<<a+6,d.pending_buf_size=4*d.lit_bufsize,d.pending_buf=new n.Buf8(d.pending_buf_size),d.d_buf=d.lit_bufsize>>1,d.l_buf=3*d.lit_bufsize,d.level=e,d.strategy=s,d.method=r,lt(t)}ot=[new dt(0,0,0,0,function(t,e){var r=65535
for(r>t.pending_buf_size-5&&(r=t.pending_buf_size-5);;){if(t.lookahead<=1){if(it(t),0===t.lookahead&&e===d)return K
if(0===t.lookahead)break}t.strstart+=t.lookahead,t.lookahead=0
var n=t.block_start+r
if((0===t.strstart||t.strstart>=n)&&(t.lookahead=t.strstart-n,t.strstart=n,tt(t,!1),0===t.strm.avail_out))return K
if(t.strstart-t.block_start>=t.w_size-N&&(tt(t,!1),0===t.strm.avail_out))return K}return t.insert=0,e===f?(tt(t,!0),0===t.strm.avail_out?Y:W):(t.strstart>t.block_start&&(tt(t,!1),t.strm.avail_out),K)}),new dt(4,4,8,4,at),new dt(4,5,16,8,at),new dt(4,6,32,32,at),new dt(4,4,16,16,st),new dt(8,16,32,32,st),new dt(8,16,128,128,st),new dt(8,32,128,256,st),new dt(32,128,258,1024,st),new dt(32,258,258,4096,st)],r.deflateInit=function(t,e){return ft(t,e,C,E,S,x)},r.deflateInit2=ft,r.deflateReset=lt,r.deflateResetKeep=ht,r.deflateSetHeader=function(t,e){return t&&t.state?2!==t.state.wrap?p:(t.state.gzhead=e,c):p},r.deflate=function(t,e){var r,n,a,o
if(!t||!t.state||e>u||e<0)return t?G(t,p):p
if(n=t.state,!t.output||!t.input&&0!==t.avail_in||n.status===X&&e!==f)return G(t,0===t.avail_out?g:p)
if(n.strm=t,r=n.last_flush,n.last_flush=e,n.status===F)if(2===n.wrap)t.adler=0,et(n,31),et(n,139),et(n,8),n.gzhead?(et(n,(n.gzhead.text?1:0)+(n.gzhead.hcrc?2:0)+(n.gzhead.extra?4:0)+(n.gzhead.name?8:0)+(n.gzhead.comment?16:0)),et(n,255&n.gzhead.time),et(n,n.gzhead.time>>8&255),et(n,n.gzhead.time>>16&255),et(n,n.gzhead.time>>24&255),et(n,9===n.level?2:n.strategy>=v||n.level<2?4:0),et(n,255&n.gzhead.os),n.gzhead.extra&&n.gzhead.extra.length&&(et(n,255&n.gzhead.extra.length),et(n,n.gzhead.extra.length>>8&255)),n.gzhead.hcrc&&(t.adler=s(t.adler,n.pending_buf,n.pending,0)),n.gzindex=0,n.status=Z):(et(n,0),et(n,0),et(n,0),et(n,0),et(n,0),et(n,9===n.level?2:n.strategy>=v||n.level<2?4:0),et(n,q),n.status=H)
else{var m=C+(n.w_bits-8<<4)<<8
m|=(n.strategy>=v||n.level<2?0:n.level<6?1:6===n.level?2:3)<<6,0!==n.strstart&&(m|=U),m+=31-m%31,n.status=H,rt(n,m),0!==n.strstart&&(rt(n,t.adler>>>16),rt(n,65535&t.adler)),t.adler=1}if(n.status===Z)if(n.gzhead.extra){for(a=n.pending;n.gzindex<(65535&n.gzhead.extra.length)&&(n.pending!==n.pending_buf_size||(n.gzhead.hcrc&&n.pending>a&&(t.adler=s(t.adler,n.pending_buf,n.pending-a,a)),Q(t),a=n.pending,n.pending!==n.pending_buf_size));)et(n,255&n.gzhead.extra[n.gzindex]),n.gzindex++
n.gzhead.hcrc&&n.pending>a&&(t.adler=s(t.adler,n.pending_buf,n.pending-a,a)),n.gzindex===n.gzhead.extra.length&&(n.gzindex=0,n.status=M)}else n.status=M
if(n.status===M)if(n.gzhead.name){a=n.pending
do{if(n.pending===n.pending_buf_size&&(n.gzhead.hcrc&&n.pending>a&&(t.adler=s(t.adler,n.pending_buf,n.pending-a,a)),Q(t),a=n.pending,n.pending===n.pending_buf_size)){o=1
break}o=n.gzindex<n.gzhead.name.length?255&n.gzhead.name.charCodeAt(n.gzindex++):0,et(n,o)}while(0!==o)
n.gzhead.hcrc&&n.pending>a&&(t.adler=s(t.adler,n.pending_buf,n.pending-a,a)),0===o&&(n.gzindex=0,n.status=P)}else n.status=P
if(n.status===P)if(n.gzhead.comment){a=n.pending
do{if(n.pending===n.pending_buf_size&&(n.gzhead.hcrc&&n.pending>a&&(t.adler=s(t.adler,n.pending_buf,n.pending-a,a)),Q(t),a=n.pending,n.pending===n.pending_buf_size)){o=1
break}o=n.gzindex<n.gzhead.comment.length?255&n.gzhead.comment.charCodeAt(n.gzindex++):0,et(n,o)}while(0!==o)
n.gzhead.hcrc&&n.pending>a&&(t.adler=s(t.adler,n.pending_buf,n.pending-a,a)),0===o&&(n.status=j)}else n.status=j
if(n.status===j&&(n.gzhead.hcrc?(n.pending+2>n.pending_buf_size&&Q(t),n.pending+2<=n.pending_buf_size&&(et(n,255&t.adler),et(n,t.adler>>8&255),t.adler=0,n.status=H)):n.status=H),0!==n.pending){if(Q(t),0===t.avail_out)return n.last_flush=-1,c}else if(0===t.avail_in&&J(e)<=J(r)&&e!==f)return G(t,g)
if(n.status===X&&0!==t.avail_in)return G(t,g)
if(0!==t.avail_in||0!==n.lookahead||e!==d&&n.status!==X){var b=n.strategy===v?function(t,e){for(var r;;){if(0===t.lookahead&&(it(t),0===t.lookahead)){if(e===d)return K
break}if(t.match_length=0,r=i._tr_tally(t,0,t.window[t.strstart]),t.lookahead--,t.strstart++,r&&(tt(t,!1),0===t.strm.avail_out))return K}return t.insert=0,e===f?(tt(t,!0),0===t.strm.avail_out?Y:W):t.last_lit&&(tt(t,!1),0===t.strm.avail_out)?K:V}(n,e):n.strategy===y?function(t,e){for(var r,n,a,s,o=t.window;;){if(t.lookahead<=D){if(it(t),t.lookahead<=D&&e===d)return K
if(0===t.lookahead)break}if(t.match_length=0,t.lookahead>=L&&t.strstart>0&&(n=o[a=t.strstart-1])===o[++a]&&n===o[++a]&&n===o[++a]){s=t.strstart+D
do{}while(n===o[++a]&&n===o[++a]&&n===o[++a]&&n===o[++a]&&n===o[++a]&&n===o[++a]&&n===o[++a]&&n===o[++a]&&a<s)
t.match_length=D-(s-a),t.match_length>t.lookahead&&(t.match_length=t.lookahead)}if(t.match_length>=L?(r=i._tr_tally(t,1,t.match_length-L),t.lookahead-=t.match_length,t.strstart+=t.match_length,t.match_length=0):(r=i._tr_tally(t,0,t.window[t.strstart]),t.lookahead--,t.strstart++),r&&(tt(t,!1),0===t.strm.avail_out))return K}return t.insert=0,e===f?(tt(t,!0),0===t.strm.avail_out?Y:W):t.last_lit&&(tt(t,!1),0===t.strm.avail_out)?K:V}(n,e):ot[n.level].func(n,e)
if(b!==Y&&b!==W||(n.status=X),b===K||b===Y)return 0===t.avail_out&&(n.last_flush=-1),c
if(b===V&&(e===h?i._tr_align(n):e!==u&&(i._tr_stored_block(n,0,0,!1),e===l&&($(n.head),0===n.lookahead&&(n.strstart=0,n.block_start=0,n.insert=0))),Q(t),0===t.avail_out))return n.last_flush=-1,c}return e!==f?c:n.wrap<=0?_:(2===n.wrap?(et(n,255&t.adler),et(n,t.adler>>8&255),et(n,t.adler>>16&255),et(n,t.adler>>24&255),et(n,255&t.total_in),et(n,t.total_in>>8&255),et(n,t.total_in>>16&255),et(n,t.total_in>>24&255)):(rt(n,t.adler>>>16),rt(n,65535&t.adler)),Q(t),n.wrap>0&&(n.wrap=-n.wrap),0!==n.pending?c:_)},r.deflateEnd=function(t){var e
return t&&t.state?(e=t.state.status)!==F&&e!==Z&&e!==M&&e!==P&&e!==j&&e!==H&&e!==X?G(t,p):(t.state=null,e===H?G(t,m):c):p},r.deflateInfo="pako deflate (from Nodeca project)"},{"../utils/common":27,"./adler32":29,"./crc32":31,"./messages":37,"./trees":38}],33:[function(t,e,r){"use strict"
e.exports=function(){this.text=0,this.time=0,this.xflags=0,this.os=0,this.extra=null,this.extra_len=0,this.name="",this.comment="",this.hcrc=0,this.done=!1}},{}],34:[function(t,e,r){"use strict"
e.exports=function(t,e){var r,n,i,a,s,o,d,h,l,f,u,c,_,p,m,g,b,w,v,y,k,x,z,C,A
r=t.state,n=t.next_in,C=t.input,i=n+(t.avail_in-5),a=t.next_out,A=t.output,s=a-(e-t.avail_out),o=a+(t.avail_out-257),d=r.dmax,h=r.wsize,l=r.whave,f=r.wnext,u=r.window,c=r.hold,_=r.bits,p=r.lencode,m=r.distcode,g=(1<<r.lenbits)-1,b=(1<<r.distbits)-1
t:do{_<15&&(c+=C[n++]<<_,_+=8,c+=C[n++]<<_,_+=8),w=p[c&g]
e:for(;;){if(c>>>=v=w>>>24,_-=v,0===(v=w>>>16&255))A[a++]=65535&w
else{if(!(16&v)){if(0==(64&v)){w=p[(65535&w)+(c&(1<<v)-1)]
continue e}if(32&v){r.mode=12
break t}t.msg="invalid literal/length code",r.mode=30
break t}y=65535&w,(v&=15)&&(_<v&&(c+=C[n++]<<_,_+=8),y+=c&(1<<v)-1,c>>>=v,_-=v),_<15&&(c+=C[n++]<<_,_+=8,c+=C[n++]<<_,_+=8),w=m[c&b]
r:for(;;){if(c>>>=v=w>>>24,_-=v,!(16&(v=w>>>16&255))){if(0==(64&v)){w=m[(65535&w)+(c&(1<<v)-1)]
continue r}t.msg="invalid distance code",r.mode=30
break t}if(k=65535&w,_<(v&=15)&&(c+=C[n++]<<_,(_+=8)<v&&(c+=C[n++]<<_,_+=8)),(k+=c&(1<<v)-1)>d){t.msg="invalid distance too far back",r.mode=30
break t}if(c>>>=v,_-=v,k>(v=a-s)){if((v=k-v)>l&&r.sane){t.msg="invalid distance too far back",r.mode=30
break t}if(x=0,z=u,0===f){if(x+=h-v,v<y){y-=v
do{A[a++]=u[x++]}while(--v)
x=a-k,z=A}}else if(f<v){if(x+=h+f-v,(v-=f)<y){y-=v
do{A[a++]=u[x++]}while(--v)
if(x=0,f<y){y-=v=f
do{A[a++]=u[x++]}while(--v)
x=a-k,z=A}}}else if(x+=f-v,v<y){y-=v
do{A[a++]=u[x++]}while(--v)
x=a-k,z=A}for(;y>2;)A[a++]=z[x++],A[a++]=z[x++],A[a++]=z[x++],y-=3
y&&(A[a++]=z[x++],y>1&&(A[a++]=z[x++]))}else{x=a-k
do{A[a++]=A[x++],A[a++]=A[x++],A[a++]=A[x++],y-=3}while(y>2)
y&&(A[a++]=A[x++],y>1&&(A[a++]=A[x++]))}break}}break}}while(n<i&&a<o)
n-=y=_>>3,c&=(1<<(_-=y<<3))-1,t.next_in=n,t.next_out=a,t.avail_in=n<i?i-n+5:5-(n-i),t.avail_out=a<o?o-a+257:257-(a-o),r.hold=c,r.bits=_}},{}],35:[function(t,e,r){"use strict"
var n=t("../utils/common"),i=t("./adler32"),a=t("./crc32"),s=t("./inffast"),o=t("./inftrees"),d=0,h=1,l=2,f=4,u=5,c=6,_=0,p=1,m=2,g=-2,b=-3,w=-4,v=-5,y=8,k=1,x=2,z=3,C=4,A=5,E=6,S=7,B=8,I=9,T=10,R=11,O=12,L=13,D=14,N=15,U=16,F=17,Z=18,M=19,P=20,j=21,H=22,X=23,K=24,V=25,Y=26,W=27,q=28,G=29,J=30,$=31,Q=32,tt=852,et=592,rt=15
function nt(t){return(t>>>24&255)+(t>>>8&65280)+((65280&t)<<8)+((255&t)<<24)}function it(t){var e
return t&&t.state?(e=t.state,t.total_in=t.total_out=e.total=0,t.msg="",e.wrap&&(t.adler=1&e.wrap),e.mode=k,e.last=0,e.havedict=0,e.dmax=32768,e.head=null,e.hold=0,e.bits=0,e.lencode=e.lendyn=new n.Buf32(tt),e.distcode=e.distdyn=new n.Buf32(et),e.sane=1,e.back=-1,_):g}function at(t){var e
return t&&t.state?((e=t.state).wsize=0,e.whave=0,e.wnext=0,it(t)):g}function st(t,e){var r,n
return t&&t.state?(n=t.state,e<0?(r=0,e=-e):(r=1+(e>>4),e<48&&(e&=15)),e&&(e<8||e>15)?g:(null!==n.window&&n.wbits!==e&&(n.window=null),n.wrap=r,n.wbits=e,at(t))):g}function ot(t,e){var r,i
return t?(i=new function(){this.mode=0,this.last=!1,this.wrap=0,this.havedict=!1,this.flags=0,this.dmax=0,this.check=0,this.total=0,this.head=null,this.wbits=0,this.wsize=0,this.whave=0,this.wnext=0,this.window=null,this.hold=0,this.bits=0,this.length=0,this.offset=0,this.extra=0,this.lencode=null,this.distcode=null,this.lenbits=0,this.distbits=0,this.ncode=0,this.nlen=0,this.ndist=0,this.have=0,this.next=null,this.lens=new n.Buf16(320),this.work=new n.Buf16(288)
this.lendyn=null,this.distdyn=null,this.sane=0,this.back=0,this.was=0},t.state=i,i.window=null,(r=st(t,e))!==_&&(t.state=null),r):g}var dt,ht,lt=!0
function ft(t){if(lt){var e
for(dt=new n.Buf32(512),ht=new n.Buf32(32),e=0;e<144;)t.lens[e++]=8
for(;e<256;)t.lens[e++]=9
for(;e<280;)t.lens[e++]=7
for(;e<288;)t.lens[e++]=8
for(o(h,t.lens,0,288,dt,0,t.work,{bits:9}),e=0;e<32;)t.lens[e++]=5
o(l,t.lens,0,32,ht,0,t.work,{bits:5}),lt=!1}t.lencode=dt,t.lenbits=9,t.distcode=ht,t.distbits=5}r.inflateReset=at,r.inflateReset2=st,r.inflateResetKeep=it,r.inflateInit=function(t){return ot(t,rt)},r.inflateInit2=ot,r.inflate=function(t,e){var r,tt,et,rt,it,at,st,ot,dt,ht,lt,ut,ct,_t,pt,mt,gt,bt,wt,vt,yt,kt,xt,zt,Ct,At,Et,St,Bt,It,Tt=0,Rt=new n.Buf8(4),Ot=[16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15]
if(!t||!t.state||!t.output||!t.input&&0!==t.avail_in)return g;(r=t.state).mode===O&&(r.mode=L),it=t.next_out,et=t.output,st=t.avail_out,rt=t.next_in,tt=t.input,at=t.avail_in,ot=r.hold,dt=r.bits,ht=at,lt=st,kt=_
t:for(;;)switch(r.mode){case k:if(0===r.wrap){r.mode=L
break}for(;dt<16;){if(0===at)break t
at--,ot+=tt[rt++]<<dt,dt+=8}if(2&r.wrap&&35615===ot){r.check=0,Rt[0]=255&ot,Rt[1]=ot>>>8&255,r.check=a(r.check,Rt,2,0),ot=0,dt=0,r.mode=x
break}if(r.flags=0,r.head&&(r.head.done=!1),!(1&r.wrap)||(((255&ot)<<8)+(ot>>8))%31){t.msg="incorrect header check",r.mode=J
break}if((15&ot)!==y){t.msg="unknown compression method",r.mode=J
break}if(dt-=4,yt=8+(15&(ot>>>=4)),0===r.wbits)r.wbits=yt
else if(yt>r.wbits){t.msg="invalid window size",r.mode=J
break}r.dmax=1<<yt,t.adler=r.check=1,r.mode=512&ot?T:O,ot=0,dt=0
break
case x:for(;dt<16;){if(0===at)break t
at--,ot+=tt[rt++]<<dt,dt+=8}if(r.flags=ot,(255&r.flags)!==y){t.msg="unknown compression method",r.mode=J
break}if(57344&r.flags){t.msg="unknown header flags set",r.mode=J
break}r.head&&(r.head.text=ot>>8&1),512&r.flags&&(Rt[0]=255&ot,Rt[1]=ot>>>8&255,r.check=a(r.check,Rt,2,0)),ot=0,dt=0,r.mode=z
case z:for(;dt<32;){if(0===at)break t
at--,ot+=tt[rt++]<<dt,dt+=8}r.head&&(r.head.time=ot),512&r.flags&&(Rt[0]=255&ot,Rt[1]=ot>>>8&255,Rt[2]=ot>>>16&255,Rt[3]=ot>>>24&255,r.check=a(r.check,Rt,4,0)),ot=0,dt=0,r.mode=C
case C:for(;dt<16;){if(0===at)break t
at--,ot+=tt[rt++]<<dt,dt+=8}r.head&&(r.head.xflags=255&ot,r.head.os=ot>>8),512&r.flags&&(Rt[0]=255&ot,Rt[1]=ot>>>8&255,r.check=a(r.check,Rt,2,0)),ot=0,dt=0,r.mode=A
case A:if(1024&r.flags){for(;dt<16;){if(0===at)break t
at--,ot+=tt[rt++]<<dt,dt+=8}r.length=ot,r.head&&(r.head.extra_len=ot),512&r.flags&&(Rt[0]=255&ot,Rt[1]=ot>>>8&255,r.check=a(r.check,Rt,2,0)),ot=0,dt=0}else r.head&&(r.head.extra=null)
r.mode=E
case E:if(1024&r.flags&&((ut=r.length)>at&&(ut=at),ut&&(r.head&&(yt=r.head.extra_len-r.length,r.head.extra||(r.head.extra=new Array(r.head.extra_len)),n.arraySet(r.head.extra,tt,rt,ut,yt)),512&r.flags&&(r.check=a(r.check,tt,ut,rt)),at-=ut,rt+=ut,r.length-=ut),r.length))break t
r.length=0,r.mode=S
case S:if(2048&r.flags){if(0===at)break t
ut=0
do{yt=tt[rt+ut++],r.head&&yt&&r.length<65536&&(r.head.name+=String.fromCharCode(yt))}while(yt&&ut<at)
if(512&r.flags&&(r.check=a(r.check,tt,ut,rt)),at-=ut,rt+=ut,yt)break t}else r.head&&(r.head.name=null)
r.length=0,r.mode=B
case B:if(4096&r.flags){if(0===at)break t
ut=0
do{yt=tt[rt+ut++],r.head&&yt&&r.length<65536&&(r.head.comment+=String.fromCharCode(yt))}while(yt&&ut<at)
if(512&r.flags&&(r.check=a(r.check,tt,ut,rt)),at-=ut,rt+=ut,yt)break t}else r.head&&(r.head.comment=null)
r.mode=I
case I:if(512&r.flags){for(;dt<16;){if(0===at)break t
at--,ot+=tt[rt++]<<dt,dt+=8}if(ot!==(65535&r.check)){t.msg="header crc mismatch",r.mode=J
break}ot=0,dt=0}r.head&&(r.head.hcrc=r.flags>>9&1,r.head.done=!0),t.adler=r.check=0,r.mode=O
break
case T:for(;dt<32;){if(0===at)break t
at--,ot+=tt[rt++]<<dt,dt+=8}t.adler=r.check=nt(ot),ot=0,dt=0,r.mode=R
case R:if(0===r.havedict)return t.next_out=it,t.avail_out=st,t.next_in=rt,t.avail_in=at,r.hold=ot,r.bits=dt,m
t.adler=r.check=1,r.mode=O
case O:if(e===u||e===c)break t
case L:if(r.last){ot>>>=7&dt,dt-=7&dt,r.mode=W
break}for(;dt<3;){if(0===at)break t
at--,ot+=tt[rt++]<<dt,dt+=8}switch(r.last=1&ot,dt-=1,3&(ot>>>=1)){case 0:r.mode=D
break
case 1:if(ft(r),r.mode=P,e===c){ot>>>=2,dt-=2
break t}break
case 2:r.mode=F
break
case 3:t.msg="invalid block type",r.mode=J}ot>>>=2,dt-=2
break
case D:for(ot>>>=7&dt,dt-=7&dt;dt<32;){if(0===at)break t
at--,ot+=tt[rt++]<<dt,dt+=8}if((65535&ot)!=(ot>>>16^65535)){t.msg="invalid stored block lengths",r.mode=J
break}if(r.length=65535&ot,ot=0,dt=0,r.mode=N,e===c)break t
case N:r.mode=U
case U:if(ut=r.length){if(ut>at&&(ut=at),ut>st&&(ut=st),0===ut)break t
n.arraySet(et,tt,rt,ut,it),at-=ut,rt+=ut,st-=ut,it+=ut,r.length-=ut
break}r.mode=O
break
case F:for(;dt<14;){if(0===at)break t
at--,ot+=tt[rt++]<<dt,dt+=8}if(r.nlen=257+(31&ot),ot>>>=5,dt-=5,r.ndist=1+(31&ot),ot>>>=5,dt-=5,r.ncode=4+(15&ot),ot>>>=4,dt-=4,r.nlen>286||r.ndist>30){t.msg="too many length or distance symbols",r.mode=J
break}r.have=0,r.mode=Z
case Z:for(;r.have<r.ncode;){for(;dt<3;){if(0===at)break t
at--,ot+=tt[rt++]<<dt,dt+=8}r.lens[Ot[r.have++]]=7&ot,ot>>>=3,dt-=3}for(;r.have<19;)r.lens[Ot[r.have++]]=0
if(r.lencode=r.lendyn,r.lenbits=7,xt={bits:r.lenbits},kt=o(d,r.lens,0,19,r.lencode,0,r.work,xt),r.lenbits=xt.bits,kt){t.msg="invalid code lengths set",r.mode=J
break}r.have=0,r.mode=M
case M:for(;r.have<r.nlen+r.ndist;){for(;mt=(Tt=r.lencode[ot&(1<<r.lenbits)-1])>>>16&255,gt=65535&Tt,!((pt=Tt>>>24)<=dt);){if(0===at)break t
at--,ot+=tt[rt++]<<dt,dt+=8}if(gt<16)ot>>>=pt,dt-=pt,r.lens[r.have++]=gt
else{if(16===gt){for(zt=pt+2;dt<zt;){if(0===at)break t
at--,ot+=tt[rt++]<<dt,dt+=8}if(ot>>>=pt,dt-=pt,0===r.have){t.msg="invalid bit length repeat",r.mode=J
break}yt=r.lens[r.have-1],ut=3+(3&ot),ot>>>=2,dt-=2}else if(17===gt){for(zt=pt+3;dt<zt;){if(0===at)break t
at--,ot+=tt[rt++]<<dt,dt+=8}dt-=pt,yt=0,ut=3+(7&(ot>>>=pt)),ot>>>=3,dt-=3}else{for(zt=pt+7;dt<zt;){if(0===at)break t
at--,ot+=tt[rt++]<<dt,dt+=8}dt-=pt,yt=0,ut=11+(127&(ot>>>=pt)),ot>>>=7,dt-=7}if(r.have+ut>r.nlen+r.ndist){t.msg="invalid bit length repeat",r.mode=J
break}for(;ut--;)r.lens[r.have++]=yt}}if(r.mode===J)break
if(0===r.lens[256]){t.msg="invalid code -- missing end-of-block",r.mode=J
break}if(r.lenbits=9,xt={bits:r.lenbits},kt=o(h,r.lens,0,r.nlen,r.lencode,0,r.work,xt),r.lenbits=xt.bits,kt){t.msg="invalid literal/lengths set",r.mode=J
break}if(r.distbits=6,r.distcode=r.distdyn,xt={bits:r.distbits},kt=o(l,r.lens,r.nlen,r.ndist,r.distcode,0,r.work,xt),r.distbits=xt.bits,kt){t.msg="invalid distances set",r.mode=J
break}if(r.mode=P,e===c)break t
case P:r.mode=j
case j:if(at>=6&&st>=258){t.next_out=it,t.avail_out=st,t.next_in=rt,t.avail_in=at,r.hold=ot,r.bits=dt,s(t,lt),it=t.next_out,et=t.output,st=t.avail_out,rt=t.next_in,tt=t.input,at=t.avail_in,ot=r.hold,dt=r.bits,r.mode===O&&(r.back=-1)
break}for(r.back=0;mt=(Tt=r.lencode[ot&(1<<r.lenbits)-1])>>>16&255,gt=65535&Tt,!((pt=Tt>>>24)<=dt);){if(0===at)break t
at--,ot+=tt[rt++]<<dt,dt+=8}if(mt&&0==(240&mt)){for(bt=pt,wt=mt,vt=gt;mt=(Tt=r.lencode[vt+((ot&(1<<bt+wt)-1)>>bt)])>>>16&255,gt=65535&Tt,!(bt+(pt=Tt>>>24)<=dt);){if(0===at)break t
at--,ot+=tt[rt++]<<dt,dt+=8}ot>>>=bt,dt-=bt,r.back+=bt}if(ot>>>=pt,dt-=pt,r.back+=pt,r.length=gt,0===mt){r.mode=Y
break}if(32&mt){r.back=-1,r.mode=O
break}if(64&mt){t.msg="invalid literal/length code",r.mode=J
break}r.extra=15&mt,r.mode=H
case H:if(r.extra){for(zt=r.extra;dt<zt;){if(0===at)break t
at--,ot+=tt[rt++]<<dt,dt+=8}r.length+=ot&(1<<r.extra)-1,ot>>>=r.extra,dt-=r.extra,r.back+=r.extra}r.was=r.length,r.mode=X
case X:for(;mt=(Tt=r.distcode[ot&(1<<r.distbits)-1])>>>16&255,gt=65535&Tt,!((pt=Tt>>>24)<=dt);){if(0===at)break t
at--,ot+=tt[rt++]<<dt,dt+=8}if(0==(240&mt)){for(bt=pt,wt=mt,vt=gt;mt=(Tt=r.distcode[vt+((ot&(1<<bt+wt)-1)>>bt)])>>>16&255,gt=65535&Tt,!(bt+(pt=Tt>>>24)<=dt);){if(0===at)break t
at--,ot+=tt[rt++]<<dt,dt+=8}ot>>>=bt,dt-=bt,r.back+=bt}if(ot>>>=pt,dt-=pt,r.back+=pt,64&mt){t.msg="invalid distance code",r.mode=J
break}r.offset=gt,r.extra=15&mt,r.mode=K
case K:if(r.extra){for(zt=r.extra;dt<zt;){if(0===at)break t
at--,ot+=tt[rt++]<<dt,dt+=8}r.offset+=ot&(1<<r.extra)-1,ot>>>=r.extra,dt-=r.extra,r.back+=r.extra}if(r.offset>r.dmax){t.msg="invalid distance too far back",r.mode=J
break}r.mode=V
case V:if(0===st)break t
if(ut=lt-st,r.offset>ut){if((ut=r.offset-ut)>r.whave&&r.sane){t.msg="invalid distance too far back",r.mode=J
break}ut>r.wnext?(ut-=r.wnext,ct=r.wsize-ut):ct=r.wnext-ut,ut>r.length&&(ut=r.length),_t=r.window}else _t=et,ct=it-r.offset,ut=r.length
ut>st&&(ut=st),st-=ut,r.length-=ut
do{et[it++]=_t[ct++]}while(--ut)
0===r.length&&(r.mode=j)
break
case Y:if(0===st)break t
et[it++]=r.length,st--,r.mode=j
break
case W:if(r.wrap){for(;dt<32;){if(0===at)break t
at--,ot|=tt[rt++]<<dt,dt+=8}if(lt-=st,t.total_out+=lt,r.total+=lt,lt&&(t.adler=r.check=r.flags?a(r.check,et,lt,it-lt):i(r.check,et,lt,it-lt)),lt=st,(r.flags?ot:nt(ot))!==r.check){t.msg="incorrect data check",r.mode=J
break}ot=0,dt=0}r.mode=q
case q:if(r.wrap&&r.flags){for(;dt<32;){if(0===at)break t
at--,ot+=tt[rt++]<<dt,dt+=8}if(ot!==(4294967295&r.total)){t.msg="incorrect length check",r.mode=J
break}ot=0,dt=0}r.mode=G
case G:kt=p
break t
case J:kt=b
break t
case $:return w
case Q:default:return g}return t.next_out=it,t.avail_out=st,t.next_in=rt,t.avail_in=at,r.hold=ot,r.bits=dt,(r.wsize||lt!==t.avail_out&&r.mode<J&&(r.mode<W||e!==f))&&(Ct=t,At=t.output,Et=t.next_out,St=lt-t.avail_out,null===(It=Ct.state).window&&(It.wsize=1<<It.wbits,It.wnext=0,It.whave=0,It.window=new n.Buf8(It.wsize)),St>=It.wsize?(n.arraySet(It.window,At,Et-It.wsize,It.wsize,0),It.wnext=0,It.whave=It.wsize):((Bt=It.wsize-It.wnext)>St&&(Bt=St),n.arraySet(It.window,At,Et-St,Bt,It.wnext),(St-=Bt)?(n.arraySet(It.window,At,Et-St,St,0),It.wnext=St,It.whave=It.wsize):(It.wnext+=Bt,It.wnext===It.wsize&&(It.wnext=0),It.whave<It.wsize&&(It.whave+=Bt)))),ht-=t.avail_in,lt-=t.avail_out,t.total_in+=ht,t.total_out+=lt,r.total+=lt,r.wrap&&lt&&(t.adler=r.check=r.flags?a(r.check,et,lt,t.next_out-lt):i(r.check,et,lt,t.next_out-lt)),t.data_type=r.bits+(r.last?64:0)+(r.mode===O?128:0)+(r.mode===P||r.mode===N?256:0),(0===ht&&0===lt||e===f)&&kt===_&&(kt=v),kt},r.inflateEnd=function(t){if(!t||!t.state)return g
var e=t.state
return e.window&&(e.window=null),t.state=null,_},r.inflateGetHeader=function(t,e){var r
return t&&t.state?0==(2&(r=t.state).wrap)?g:(r.head=e,e.done=!1,_):g},r.inflateInfo="pako inflate (from Nodeca project)"},{"../utils/common":27,"./adler32":29,"./crc32":31,"./inffast":34,"./inftrees":36}],36:[function(t,e,r){"use strict"
var n=t("../utils/common"),i=[3,4,5,6,7,8,9,10,11,13,15,17,19,23,27,31,35,43,51,59,67,83,99,115,131,163,195,227,258,0,0],a=[16,16,16,16,16,16,16,16,17,17,17,17,18,18,18,18,19,19,19,19,20,20,20,20,21,21,21,21,16,72,78],s=[1,2,3,4,5,7,9,13,17,25,33,49,65,97,129,193,257,385,513,769,1025,1537,2049,3073,4097,6145,8193,12289,16385,24577,0,0],o=[16,16,16,16,17,17,18,18,19,19,20,20,21,21,22,22,23,23,24,24,25,25,26,26,27,27,28,28,29,29,64,64]
e.exports=function(t,e,r,d,h,l,f,u){var c,_,p,m,g,b,w,v,y,k=u.bits,x=0,z=0,C=0,A=0,E=0,S=0,B=0,I=0,T=0,R=0,O=null,L=0,D=new n.Buf16(16),N=new n.Buf16(16),U=null,F=0
for(x=0;x<=15;x++)D[x]=0
for(z=0;z<d;z++)D[e[r+z]]++
for(E=k,A=15;A>=1&&0===D[A];A--);if(E>A&&(E=A),0===A)return h[l++]=20971520,h[l++]=20971520,u.bits=1,0
for(C=1;C<A&&0===D[C];C++);for(E<C&&(E=C),I=1,x=1;x<=15;x++)if(I<<=1,(I-=D[x])<0)return-1
if(I>0&&(0===t||1!==A))return-1
for(N[1]=0,x=1;x<15;x++)N[x+1]=N[x]+D[x]
for(z=0;z<d;z++)0!==e[r+z]&&(f[N[e[r+z]]++]=z)
if(0===t?(O=U=f,b=19):1===t?(O=i,L-=257,U=a,F-=257,b=256):(O=s,U=o,b=-1),R=0,z=0,x=C,g=l,S=E,B=0,p=-1,m=(T=1<<E)-1,1===t&&T>852||2===t&&T>592)return 1
for(;;){0,w=x-B,f[z]<b?(v=0,y=f[z]):f[z]>b?(v=U[F+f[z]],y=O[L+f[z]]):(v=96,y=0),c=1<<x-B,C=_=1<<S
do{h[g+(R>>B)+(_-=c)]=w<<24|v<<16|y|0}while(0!==_)
for(c=1<<x-1;R&c;)c>>=1
if(0!==c?(R&=c-1,R+=c):R=0,z++,0==--D[x]){if(x===A)break
x=e[r+f[z]]}if(x>E&&(R&m)!==p){for(0===B&&(B=E),g+=C,I=1<<(S=x-B);S+B<A&&!((I-=D[S+B])<=0);)S++,I<<=1
if(T+=1<<S,1===t&&T>852||2===t&&T>592)return 1
h[p=R&m]=E<<24|S<<16|g-l|0}}return 0!==R&&(h[g+R]=x-B<<24|64<<16|0),u.bits=E,0}},{"../utils/common":27}],37:[function(t,e,r){"use strict"
e.exports={2:"need dictionary",1:"stream end",0:"","-1":"file error","-2":"stream error","-3":"data error","-4":"insufficient memory","-5":"buffer error","-6":"incompatible version"}},{}],38:[function(t,e,r){"use strict"
var n=t("../utils/common"),i=4,a=0,s=1,o=2
function d(t){for(var e=t.length;--e>=0;)t[e]=0}var h=0,l=1,f=2,u=29,c=256,_=c+1+u,p=30,m=19,g=2*_+1,b=15,w=16,v=7,y=256,k=16,x=17,z=18,C=[0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0],A=[0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13],E=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,3,7],S=[16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15],B=new Array(2*(_+2))
d(B)
var I=new Array(2*p)
d(I)
var T=new Array(512)
d(T)
var R=new Array(256)
d(R)
var O=new Array(u)
d(O)
var L=new Array(p)
d(L)
var D,N,U,F=function(t,e,r,n,i){this.static_tree=t,this.extra_bits=e,this.extra_base=r,this.elems=n,this.max_length=i,this.has_stree=t&&t.length},Z=function(t,e){this.dyn_tree=t,this.max_code=0,this.stat_desc=e}
function M(t){return t<256?T[t]:T[256+(t>>>7)]}function P(t,e){t.pending_buf[t.pending++]=255&e,t.pending_buf[t.pending++]=e>>>8&255}function j(t,e,r){t.bi_valid>w-r?(t.bi_buf|=e<<t.bi_valid&65535,P(t,t.bi_buf),t.bi_buf=e>>w-t.bi_valid,t.bi_valid+=r-w):(t.bi_buf|=e<<t.bi_valid&65535,t.bi_valid+=r)}function H(t,e,r){j(t,r[2*e],r[2*e+1])}function X(t,e){var r=0
do{r|=1&t,t>>>=1,r<<=1}while(--e>0)
return r>>>1}function K(t,e,r){var n,i,a=new Array(b+1),s=0
for(n=1;n<=b;n++)a[n]=s=s+r[n-1]<<1
for(i=0;i<=e;i++){var o=t[2*i+1]
0!==o&&(t[2*i]=X(a[o]++,o))}}function V(t){var e
for(e=0;e<_;e++)t.dyn_ltree[2*e]=0
for(e=0;e<p;e++)t.dyn_dtree[2*e]=0
for(e=0;e<m;e++)t.bl_tree[2*e]=0
t.dyn_ltree[2*y]=1,t.opt_len=t.static_len=0,t.last_lit=t.matches=0}function Y(t){t.bi_valid>8?P(t,t.bi_buf):t.bi_valid>0&&(t.pending_buf[t.pending++]=t.bi_buf),t.bi_buf=0,t.bi_valid=0}function W(t,e,r,n){var i=2*e,a=2*r
return t[i]<t[a]||t[i]===t[a]&&n[e]<=n[r]}function q(t,e,r){for(var n=t.heap[r],i=r<<1;i<=t.heap_len&&(i<t.heap_len&&W(e,t.heap[i+1],t.heap[i],t.depth)&&i++,!W(e,n,t.heap[i],t.depth));)t.heap[r]=t.heap[i],r=i,i<<=1
t.heap[r]=n}function G(t,e,r){var n,i,a,s,o=0
if(0!==t.last_lit)do{n=t.pending_buf[t.d_buf+2*o]<<8|t.pending_buf[t.d_buf+2*o+1],i=t.pending_buf[t.l_buf+o],o++,0===n?H(t,i,e):(H(t,(a=R[i])+c+1,e),0!==(s=C[a])&&j(t,i-=O[a],s),H(t,a=M(--n),r),0!==(s=A[a])&&j(t,n-=L[a],s))}while(o<t.last_lit)
H(t,y,e)}function J(t,e){var r,n,i,a=e.dyn_tree,s=e.stat_desc.static_tree,o=e.stat_desc.has_stree,d=e.stat_desc.elems,h=-1
for(t.heap_len=0,t.heap_max=g,r=0;r<d;r++)0!==a[2*r]?(t.heap[++t.heap_len]=h=r,t.depth[r]=0):a[2*r+1]=0
for(;t.heap_len<2;)a[2*(i=t.heap[++t.heap_len]=h<2?++h:0)]=1,t.depth[i]=0,t.opt_len--,o&&(t.static_len-=s[2*i+1])
for(e.max_code=h,r=t.heap_len>>1;r>=1;r--)q(t,a,r)
i=d
do{r=t.heap[1],t.heap[1]=t.heap[t.heap_len--],q(t,a,1),n=t.heap[1],t.heap[--t.heap_max]=r,t.heap[--t.heap_max]=n,a[2*i]=a[2*r]+a[2*n],t.depth[i]=(t.depth[r]>=t.depth[n]?t.depth[r]:t.depth[n])+1,a[2*r+1]=a[2*n+1]=i,t.heap[1]=i++,q(t,a,1)}while(t.heap_len>=2)
t.heap[--t.heap_max]=t.heap[1],function(t,e){var r,n,i,a,s,o,d=e.dyn_tree,h=e.max_code,l=e.stat_desc.static_tree,f=e.stat_desc.has_stree,u=e.stat_desc.extra_bits,c=e.stat_desc.extra_base,_=e.stat_desc.max_length,p=0
for(a=0;a<=b;a++)t.bl_count[a]=0
for(d[2*t.heap[t.heap_max]+1]=0,r=t.heap_max+1;r<g;r++)(a=d[2*d[2*(n=t.heap[r])+1]+1]+1)>_&&(a=_,p++),d[2*n+1]=a,n>h||(t.bl_count[a]++,s=0,n>=c&&(s=u[n-c]),o=d[2*n],t.opt_len+=o*(a+s),f&&(t.static_len+=o*(l[2*n+1]+s)))
if(0!==p){do{for(a=_-1;0===t.bl_count[a];)a--
t.bl_count[a]--,t.bl_count[a+1]+=2,t.bl_count[_]--,p-=2}while(p>0)
for(a=_;0!==a;a--)for(n=t.bl_count[a];0!==n;)(i=t.heap[--r])>h||(d[2*i+1]!==a&&(t.opt_len+=(a-d[2*i+1])*d[2*i],d[2*i+1]=a),n--)}}(t,e),K(a,h,t.bl_count)}function $(t,e,r){var n,i,a=-1,s=e[1],o=0,d=7,h=4
for(0===s&&(d=138,h=3),e[2*(r+1)+1]=65535,n=0;n<=r;n++)i=s,s=e[2*(n+1)+1],++o<d&&i===s||(o<h?t.bl_tree[2*i]+=o:0!==i?(i!==a&&t.bl_tree[2*i]++,t.bl_tree[2*k]++):o<=10?t.bl_tree[2*x]++:t.bl_tree[2*z]++,o=0,a=i,0===s?(d=138,h=3):i===s?(d=6,h=3):(d=7,h=4))}function Q(t,e,r){var n,i,a=-1,s=e[1],o=0,d=7,h=4
for(0===s&&(d=138,h=3),n=0;n<=r;n++)if(i=s,s=e[2*(n+1)+1],!(++o<d&&i===s)){if(o<h)do{H(t,i,t.bl_tree)}while(0!=--o)
else 0!==i?(i!==a&&(H(t,i,t.bl_tree),o--),H(t,k,t.bl_tree),j(t,o-3,2)):o<=10?(H(t,x,t.bl_tree),j(t,o-3,3)):(H(t,z,t.bl_tree),j(t,o-11,7))
o=0,a=i,0===s?(d=138,h=3):i===s?(d=6,h=3):(d=7,h=4)}}var tt=!1
function et(t,e,r,i){var a,s,o,d
j(t,(h<<1)+(i?1:0),3),s=e,o=r,d=!0,Y(a=t),d&&(P(a,o),P(a,~o)),n.arraySet(a.pending_buf,a.window,s,o,a.pending),a.pending+=o}r._tr_init=function(t){tt||(function(){var t,e,r,n,i,a=new Array(b+1)
for(r=0,n=0;n<u-1;n++)for(O[n]=r,t=0;t<1<<C[n];t++)R[r++]=n
for(R[r-1]=n,i=0,n=0;n<16;n++)for(L[n]=i,t=0;t<1<<A[n];t++)T[i++]=n
for(i>>=7;n<p;n++)for(L[n]=i<<7,t=0;t<1<<A[n]-7;t++)T[256+i++]=n
for(e=0;e<=b;e++)a[e]=0
for(t=0;t<=143;)B[2*t+1]=8,t++,a[8]++
for(;t<=255;)B[2*t+1]=9,t++,a[9]++
for(;t<=279;)B[2*t+1]=7,t++,a[7]++
for(;t<=287;)B[2*t+1]=8,t++,a[8]++
for(K(B,_+1,a),t=0;t<p;t++)I[2*t+1]=5,I[2*t]=X(t,5)
D=new F(B,C,c+1,_,b),N=new F(I,A,0,p,b),U=new F(new Array(0),E,0,m,v)}(),tt=!0),t.l_desc=new Z(t.dyn_ltree,D),t.d_desc=new Z(t.dyn_dtree,N),t.bl_desc=new Z(t.bl_tree,U),t.bi_buf=0,t.bi_valid=0,V(t)},r._tr_stored_block=et,r._tr_flush_block=function(t,e,r,n){var d,h,u=0
t.level>0?(t.strm.data_type===o&&(t.strm.data_type=function(t){var e,r=4093624447
for(e=0;e<=31;e++,r>>>=1)if(1&r&&0!==t.dyn_ltree[2*e])return a
if(0!==t.dyn_ltree[18]||0!==t.dyn_ltree[20]||0!==t.dyn_ltree[26])return s
for(e=32;e<c;e++)if(0!==t.dyn_ltree[2*e])return s
return a}(t)),J(t,t.l_desc),J(t,t.d_desc),u=function(t){var e
for($(t,t.dyn_ltree,t.l_desc.max_code),$(t,t.dyn_dtree,t.d_desc.max_code),J(t,t.bl_desc),e=m-1;e>=3&&0===t.bl_tree[2*S[e]+1];e--);return t.opt_len+=3*(e+1)+5+5+4,e}(t),d=t.opt_len+3+7>>>3,(h=t.static_len+3+7>>>3)<=d&&(d=h)):d=h=r+5,r+4<=d&&-1!==e?et(t,e,r,n):t.strategy===i||h===d?(j(t,(l<<1)+(n?1:0),3),G(t,B,I)):(j(t,(f<<1)+(n?1:0),3),function(t,e,r,n){var i
for(j(t,e-257,5),j(t,r-1,5),j(t,n-4,4),i=0;i<n;i++)j(t,t.bl_tree[2*S[i]+1],3)
Q(t,t.dyn_ltree,e-1),Q(t,t.dyn_dtree,r-1)}(t,t.l_desc.max_code+1,t.d_desc.max_code+1,u+1),G(t,t.dyn_ltree,t.dyn_dtree)),V(t),n&&Y(t)},r._tr_tally=function(t,e,r){return t.pending_buf[t.d_buf+2*t.last_lit]=e>>>8&255,t.pending_buf[t.d_buf+2*t.last_lit+1]=255&e,t.pending_buf[t.l_buf+t.last_lit]=255&r,t.last_lit++,0===e?t.dyn_ltree[2*r]++:(t.matches++,e--,t.dyn_ltree[2*(R[r]+c+1)]++,t.dyn_dtree[2*M(e)]++),t.last_lit===t.lit_bufsize-1},r._tr_align=function(t){var e
j(t,l<<1,3),H(t,y,B),16===(e=t).bi_valid?(P(e,e.bi_buf),e.bi_buf=0,e.bi_valid=0):e.bi_valid>=8&&(e.pending_buf[e.pending++]=255&e.bi_buf,e.bi_buf>>=8,e.bi_valid-=8)}},{"../utils/common":27}],39:[function(t,e,r){"use strict"
e.exports=function(){this.input=null,this.next_in=0,this.avail_in=0,this.total_in=0,this.output=null,this.next_out=0,this.avail_out=0,this.total_out=0,this.msg="",this.state=null,this.data_type=2,this.adler=0}},{}]},{},[9])(9)})
