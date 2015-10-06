/*
 FusionCharts JavaScript Library jQuery Plugin v1.0.3
 Copyright FusionCharts Technologies LLP
 License Information at <http://www.fusioncharts.com/license>

 @author FusionCharts Technologies LLP
*/
FusionCharts.register("module",["private","HTMLTableDataHandler",function(){var q=this,A=q.window,F=A.document,h=function(d){var a,b,f=[];b=0;for(a=d.length;b<a;b+=1)3!==d[b].nodeType&&f.push(d[b]);return f},G=function(d){var a=h(d.childNodes);if(a.length){if("TBODY"===a[0].nodeName)return a[0];if("THEAD"===a[0].nodeName&&a[1]&&"TBODY"===a[1].nodeName)return a[1]}return d},v=function(d){return void 0!==d.innerText?d.innerText:d.textContent},D=function(d){var a,b,f,c,e,m,g=1,k,n={},p=[];a=0;for(f=
d.length;a<f;a+=1)for(e=h(d[a].childNodes),g=1,b=m=0,c=e.length;b<c;b+=1){k=b+g+m-1;n[k]&&a-n[k].rowNum<n[k].row&&(m+=n[k].col,k+=n[k].col);1<parseInt(e[b].getAttribute("rowspan"),10)&&(n[k]||(n[k]={}),n[k].rowNum=a,n[k].row=parseInt(e[b].getAttribute("rowspan"),10),1<parseInt(e[b].getAttribute("colspan"),10)?n[k].col=parseInt(e[b].getAttribute("colspan"),10):n[k].col=1);for(;p.length<=k;)p.push({childNodes:[]});p[k].childNodes.push(e[b]);1<parseInt(e[b].getAttribute("colspan"),10)&&(g+=parseInt(e[b].getAttribute("colspan"),
10)-1)}return p},E=function(d,a){for(var b=d.length;b;)if(--b,d[b]===a)return!0;return!1},t=0,y=function(d,a,b){var f,c,e,m,g=null,k=[],n=[],p=0,l,p={},q=0,x=0;if("undefined"===typeof b){m=h(d[0].childNodes);e=0;for(f=m.length;e<f;e+=1)if(d=e+q,k[d]="__fcBLANK__"+(d+1),l=parseInt(m[e].getAttribute("colspan"),10),l=1<l?l:parseInt(m[e].getAttribute("rowspan"),10),1<l){for(b=1;b<l;b+=1)k[d+b]="__fcBLANK__"+(d+b+1);q+=l-1}c=0;b=e+q;for(f=a.length;c<f;c+=1)0<a[c]?delete k[a[c]-1]:delete k[b+a[c]];return{index:-1,
labelObj:k}}if(0===b){c=0;for(b=d.length;c<b;c+=1){m=h(d[c].childNodes);e=p=n[c]=0;for(f=m.length;e<f;e+=1)if(!E(a,e+1)&&!E(a,e-f))if(l=v(m[e]),""===l.replace(/^\s*/,"").replace(/\s*$/,""))n[c]+=1;else if(parseFloat(l)!=l&&(p+=1,1<p))return y(d,a,c+1);0<c&&(n[c-1]>n[c]?g=c-1:n[c-1]<n[c]&&(g=c))}return null!==g?y(d,a,g+1):y(d,a)}0>b?b+=d.length:0<b&&--b;m=h(d[b].childNodes);k=void 0!==d[0].nodeType?!0:!1;e=0;for(f=m.length;e<f;e+=1){g=0;k?"1"!==m[e].getAttribute("colspan")&&(g=parseInt(m[e].getAttribute("colspan"),
10)):"1"!==m[e].getAttribute("rowspan")&&(g=parseInt(m[e].getAttribute("rowspan"),10));g=1<g?g:0;l=v(m[e]);if(""!==l.replace(/^\s*/,"").replace(/\s*$/,""))p[e+x]=l;else{a:{q=D(d);c=b;var n=l=void 0,q=h(q[e].childNodes),u=void 0;l=0;for(n=q.length;l<n;l+=1)if(l!==c&&(u=v(q[l]),parseFloat(u)===u)){c=!0;break a}c=!1}c&&(p[e+x]="__fcBLANK__"+t,t+=1)}if(1<g){l=p[e+x];for(c=1;c<g;c+=1)p[e+x+c]=l+" ("+c+")";x+=g-1}}e=f+x;c=0;for(f=a.length;c<f;c+=1)0<a[c]?delete p[a[c]-1]:delete p[e+a[c]];return{labelObj:p,
index:b}};q.addDataHandler("HTMLTable",{encode:function(d,a,b){var f,c,e,m;a={chartAttributes:{},major:"row",useLabels:!0,useLegend:!0,labelSource:0,legendSource:0,ignoreCols:[],ignoreRows:[],showLabels:!0,showLegend:!0,seriesColors:[],convertBlankTo:"0",hideTable:!1,labels:[],legend:[],data:[]};var g,k,n={},p={};"string"===typeof d&&(d=F.getElementById(d));"undefined"!==typeof A.jQuery&&d instanceof A.jQuery&&(d=d.get(0));if(d){a.hideTable&&(d.style.display="none");var l,t,x,u;f={};var B,z,E,C;e=
{};m={};var w=h(d.childNodes),H=h(w.length&&"THEAD"===w[0].nodeName&&w[1]&&"TBODY"===w[1].nodeName?w[0].childNodes:[]).concat(h(G(d).childNodes)),L=H.length,J=0,K=0,I=0,r=0;a.rowLabelSource=parseInt(a.labelSource,10);a.colLabelSource=parseInt(a.legendSource,10);d=a.useLabels?y(H,a.ignoreCols,a.rowLabelSource):y(H,a.ignoreCols);w=a.useLegend?y(D(H),a.ignoreRows,a.colLabelSource):y(D(H),a.ignoreRows);delete d.labelObj[w.index];delete w.labelObj[d.index];if("row"===a.major)for(l in w.labelObj)f[l]={};
else for(l in d.labelObj)f[l]={};for(l=0;l<L;l+=1)if(d.index!==l&&void 0!==w.labelObj[l]){J+=1;x=h(H[l].childNodes);e[l]=0;m[l]={};t=I=0;for(E=x.length;t<E;t+=1){u=x[t];z=parseInt(u.getAttribute("colspan"),10);C=parseInt(u.getAttribute("rowspan"),10);for(B=t+e[l];r<l;){if(m[r])for(c in m[r]){if(c>B)break;l-r<=m[r][c].row&&(B+=m[r][c].col)}r+=1}1<z&&(e[l]+=z-1);1<C&&(m[l][B]=1<z?{row:C-1,col:z}:{row:C-1,col:1});if(w.index!==B&&void 0!==d.labelObj[B]){I+=1;u=v(u);if(""===u.replace(/^\s*/,"").replace(/\s*$/,
""))if(a.convertBlankTo)u=a.convertBlankTo;else continue;z=1<z?z:1;C=1<C?C:1;if("row"===a.major)for(r=0;r<z;){for(c=0;c<C;)f[l+c][B+r]=parseFloat(u),c+=1;r+=1}else for(r=0;r<z;){for(c=0;c<C;)f[B+r][l+c]=parseFloat(u),c+=1;r+=1}}}I>K&&(K=I)}c=1<J&&1<K?"multi":"single";e=w;m=d}else f=null,m=e=c=void 0;d=f;q.extend(a,b);"row"!==a.major?(b=m,f=e):(b=e,f=m);n.chart=q.extend({},a.chartAttributes);if("multi"===c){n.categories=[{category:[]}];n.dataset=[];e=n.categories[0].category;m=n.dataset;c=0;for(g in d)for(k in!0===
a.showLabels?e.push(q.extend({label:-1!=b.labelObj[g].indexOf("__fcBLANK__")?"":b.labelObj[g]},a.labels[c])):e.push({label:""}),c+=1,d[g])"undefined"===typeof p[k]&&(p[k]=[]),p[k].push({value:d[g][k]});c=0;for(g in p)!0===a.showLegend?m.push(q.extend({seriesname:-1!==f.labelObj[g].indexOf("__fcBLANK__")?"":f.labelObj[g],data:p[g]},a.legend[c])):m.push({seriesname:"",data:p[g]}),c+=1}else if("single"===c)if(n.data=[],m=n.data,c=0,a.showLabels)for(g in d)for(k in d[g])m.push(q.extend({label:-1!==b.labelObj[g].indexOf("__fcBLANK__")?
"":b.labelObj[g],value:d[g][k]},a.labels[c])),c+=1;else for(g in d)for(k in d[g])m.push({value:d[g][k]});return{data:q.core.transcodeData(n,"JSON","XML"),error:void 0}},decode:function(d,a){q.raiseError(a,"07101734","run","::HTMLTableDataHandler.decode()","FusionCharts HTMLTable data-handler only supports decoding of data.");throw Error("FeatureNotSupportedException()");},transportable:!1})}]);
FusionCharts.register("module",["private","extensions.jQueryPlugin",function(){var q=this,A=q.window,F=A.document,h=A.jQuery,G,v,D,E=A.Math.min,t=q.hcLib.isArray,y={feed:"feedData",setdata:"setData",setdataforid:"setDataForId",getdata:"getData",getdataforid:"getDataForId",clear:"clearChart",stop:"stopUpdate",start:"restartUpdate"},d={feedData:function(a){return"string"===typeof a?[a]:"object"===typeof a&&a.stream?[a.stream]:!1},getData:function(a){return isNaN(a)?"object"===typeof a&&a.index?[a.index]:
[]:[a]},getDataForId:function(a){return"string"===typeof a?[a]:"object"===typeof a&&a.id?[a.id]:[]},setData:function(a,b,f){var c=[];"object"!==typeof a?c=[a,b,f]:(a.value&&c.push(a.value),a.label&&c.push(a.label));return c},setDataForId:function(a,b,f){var c=[];"string"===typeof a||"string"===typeof b||"string"===typeof f?c=[a,b,f]:"object"===typeof a&&(a.value&&c.push(a.value),a.label&&c.push(a.label));return c},clearChart:function(a){return[a]},stopUpdate:function(a){return[a]},restartUpdate:function(a){return[a]}};
h.FusionCharts=q.core;G=function(a,b){var f,c,e,d;c=t(b)||b instanceof h?E(a.length,b.length):a.length;for(f=0;f<c;f+=1)e=t(b)||b instanceof h?b[f]:b,a[f].parentNode?q.core.render(h.extend({},e,{renderAt:a[f]})):(e=new FusionCharts(h.extend({},e,{renderAt:a[f]})),h.FusionCharts.delayedRender||(h.FusionCharts.delayedRender={}),h.FusionCharts.delayedRender[e.id]=a[f],d=F.createElement("script"),d.setAttribute("type","text/javascript"),/msie/i.test(A.navigator.userAgent)&&!A.opera?d.text="FusionCharts.items['"+
e.id+"'].render();":d.appendChild(F.createTextNode("FusionCharts.items['"+e.id+"'].render()")),a[f].appendChild(d));return a};q.addEventListener("*",function(a,b){var f;h.extend(a,h.Event("fusioncharts"+a.eventType));a.sender&&a.sender.options?(f=a.sender.options.containerElement||a.sender.options.containerElementId,"object"===typeof f?h(f).trigger(a,b):h("#"+f).length?h("#"+f).trigger(a,b):h(F).trigger(a,b)):h(F).trigger(a,b)});v=function(a){return a.filter(":FusionCharts").add(a.find(":FusionCharts"))};
D=function(a,b,f){"object"===typeof b&&a.each(function(){this.configureLink(b,f)})};h.fn.insertFusionCharts=function(a){return G(this,a)};h.fn.appendFusionCharts=function(a){a.insertMode="append";return G(this,a)};h.fn.prependFusionCharts=function(a){a.insertMode="prepend";return G(this,a)};h.fn.attrFusionCharts=function(a,b){var f=[],c=v(this);if(void 0!==b)return c.each(function(){this.FusionCharts.setChartAttribute(a,b)}),this;if("object"===typeof a)return c.each(function(){this.FusionCharts.setChartAttribute(a)}),
this;c.each(function(){f.push(this.FusionCharts.getChartAttribute(a))});return f};h.fn.updateFusionCharts=function(a){var b={},f=v(this),c=[["swfUrl",!1],["type",!1],["height",!1],["width",!1],["containerBackgroundColor",!0],["containerBackgroundAlpha",!0],["dataFormat",!1],["dataSource",!1]],e,d,g,k,h,p;e=0;for(d=c.length;e<d;e+=1)h=c[e][0],b.type=b.type||b.swfUrl,a[h]&&(c[e][1]&&(k=!0),b[h]=a[h]);f.each(function(){g=this.FusionCharts;if(k)p=g.clone(b),p.render();else{if(void 0!==b.dataSource||void 0!==
b.dataFormat)void 0===b.dataSource?g.setChartData(g.args.dataSource,b.dataFormat):void 0===b.dataFormat?g.setChartData(b.dataSource,g.args.dataFormat):g.setChartData(b.dataSource,b.dataFormat);void 0===b.width&&void 0===b.height||g.resizeTo(b.width,b.height);b.type&&g.chartType(b.type)}});return this};h.fn.cloneFusionCharts=function(a,b){var f,c;"function"!==typeof a&&"function"===typeof b&&(c=a,a=b,b=c);f=[];v(this).each(function(){f.push(this.FusionCharts.clone(b,{},!0))});a.call(h(f),f);return this};
h.fn.disposeFusionCharts=function(){v(this).each(function(){this.FusionCharts.dispose();delete this.FusionCharts;0===this._fcDrillDownLevel&&delete this._fcDrillDownLevel});return this};h.fn.convertToFusionCharts=function(a,b){var f=[];"undefined"===typeof a.dataConfiguration&&(a.dataConfiguration={});h.extend(!0,a.dataConfiguration,b);a.dataSource||(a.dataSource=this.get(0));a.renderAt?"string"===typeof a.renderAt?f.push(h("#"+a.renderAt).insertFusionCharts(a).get(0)):"object"===typeof a.renderAt&&
f.push(h(a.renderAt).insertFusionCharts(a).get(0)):this.each(function(){f.push(h("<div></div>").insertBefore(this).insertFusionCharts(a).get(0))});return h(f)};h.fn.drillDownFusionChartsTo=function(){var a=v(this),b,f,c,e,d;"undefined"===typeof this._fcDrillDownLevel&&(this._fcDrillDownLevel=0);b=0;for(f=arguments.length;b<f;b+=1)if(d=arguments[b],t(d))for(c=0,e=d.length;c<e;c+=1)D(a,d[c],this._fcDrillDownLevel),this._fcDrillDownLevel+=1;else D(a,d,this._fcDrillDownLevel),this._fcDrillDownLevel+=
1;return this};h.fn.streamFusionChartsData=function(a,b,f,c){var e=v(this),h=[],g,k,n;k=y[a&&a.toLowerCase()];if(void 0===k)if(1===arguments.length)n=[a],k=y.feed;else return this;else n=1===arguments.length?[]:d[k](b,f,c);if("getData"===k||"getDataForId"===k)return e.each(function(){g=this.FusionCharts;"function"===typeof g[k]&&h.push(g[k].apply(g,n))}),h;e.each(function(){g=this.FusionCharts;"function"===typeof g[k]&&g[k].apply(g,n)});return this};h.extend(h.expr[":"],{FusionCharts:function(a){return a.FusionCharts instanceof
q.core}})}]);