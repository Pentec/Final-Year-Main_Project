/*
 FusionCharts JavaScript Library MSStackedCombiDY2D Chart
 Copyright FusionCharts Technologies LLP
 License Information at <http://www.fusioncharts.com/license>

 @version 3.9.0
*/
FusionCharts.register("module",["private","modules.renderer.js-msstackedcombidy2d",function(){var m=this,v=m.window,h=m.hcLib,f=h.chartAPI,C=h.moduleCmdQueue,O=h.injectModuleDependency,P={column:"mscolumn2dbase",column3d:"mscolumn2dbase",line:"mslinebase",spline:"mslinebase",stepline:"mslinebase",area:"msareabase",steparea:"msareabase",splinearea:"msareabase"},w;w={friendlyName:"Multi-series Dual Y-Axis Stacked Combination Chart",creditLabel:!/fusioncharts\.com$/i.test(v.location.hostname),sformatnumberscale:1,
series:function(e,b,n){var m=h.FC_CONFIG_STRING,p=b[m],k=h.pluck,q=h.pluckNumber,v=h.getFirstValue,w=h.createTrendLine,a=e.chart,D=e.dataset,C=D&&D.length,r,d,x,t=0,L,g,z,c,A=[],u=[],E=[],B,F,G,M=!!q(a.hideemptyaxis,1),l,y=-1,H,N,I,J,K;if(e.dataset&&0<e.dataset.length){b.legend.enabled=Boolean(q(e.chart.showlegend,1));this.categoryAdder(e,b);z=p.oriCatTmp.length;for(r=0;r<C;r+=1)if(d=D[r])for(l=v(d.renderas,this.defaultSeriesType).toLowerCase(),l=P[l]&&l||"column",H="column"===l,N=void 0!==d.dataset,
B=+("s"===k(d.parentyaxis,"p").toLowerCase()),F=F||!B,G=G||!!B,H&&(y+=1),x=0,L=d.dataset&&d.dataset.length||1;x<L;x+=1,t+=1){g=d.dataset&&d.dataset[x]||d;if(I=/stepline|steparea/.test(l)||/line|area/.test(l)&&!!q(g.drawinstepmode,d.drawinstepmode,a.drawinstepmode,0))J=!!q(g.useforwardsteps,d.useforwardsteps,a.useforwardsteps,0),K=!!q(g.drawverticaljoins,d.drawverticaljoins,a.drawverticaljoins,1);c={visible:!q(g.initiallyhidden,d.initiallyhidden,a.initiallyhidden,0),hoverEffects:this.parseSeriesHoverOptions(e,
b,g,n),data:[],legendIndex:t,isStacked:N,yAxis:B};H&&(c.columnPosition=y);switch(l){case "line":case "spline":case "stepline":c.type="line";c.step=I;c.useForwardSteps=J;c.drawVerticalJoins=K;A.push(f.mslinebase.point.call(this,n,c,g,a,b,z,t));break;case "area":case "splinearea":case "steparea":c.type="area";b.chart.series2D3Dshift=!0;c.step=I;c.useForwardSteps=J;c.drawVerticalJoins=K;E.push(f.msareabase.point.call(this,n,c,g,a,b,z,t));break;default:c.type="column",u.push(f.mscolumn2dbase.point.call(this,
n,c,g,a,b,z,t,r,y))}}n=b.chart.areaOverColumns="0"!==a.areaovercolumns;b.series=b.series.concat(n?u:E,n?E:u,A);0===u.length&&(p.hasNoColumn=!0);p=0;for(A=u.length;p<A;p+=1)u[p].numColumns=y+1;M&&!F&&(a.showyaxisvalues=k(a.showyaxisvalues,0),a.showlimits=k(a.showyaxislimits,a.showlimits,0),a.showdivlinevalues=k(a.showdivlinevalues,0),a.showdivlinesecondaryvalue=k(a.showdivlinesecondaryvalue,1),a.showsecondarylimits=k(a.showsecondarylimits,1));M&&!G&&(a.showdivlinesecondaryvalue=k(a.showdivlinesecondaryvalue,
0),a.showsecondarylimits=k(a.showsecondarylimits,0));this.configureAxis(b,e);e.trendlines&&w(e.trendlines,b.yAxis,b[m],!0,this.isBar)}}};f.msstackedcolumn2dlinedy?f("msstackedcombidy2d",w,f.msstackedcolumn2dlinedy):(O("charts","msstackedcombidy2d",1),C.charts.unshift({cmd:"_call",obj:v,args:[function(){f.msstackedcolumn2dlinedy?f("msstackedcombidy2d",w,f.msstackedcolumn2dlinedy):m.raiseError(m.core,"12052314141","run","JavaScriptRenderer~MSStackedCombiDY2D._call()",Error("FusionCharts.HC.Charts.js is required in order to define vizualization"))},
[],v]}))}]);
