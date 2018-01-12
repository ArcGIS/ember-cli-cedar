(function(){var t=window.AmCharts
t.AmSlicedChart=t.Class({inherits:t.AmChart,construct:function(i){this.createEvents("rollOverSlice","rollOutSlice","clickSlice","pullOutSlice","pullInSlice","rightClickSlice"),t.AmSlicedChart.base.construct.call(this,i),this.colors="#FF0F00 #FF6600 #FF9E01 #FCD202 #F8FF01 #B0DE09 #04D215 #0D8ECF #0D52D1 #2A0CD0 #8A0CCF #CD0D74 #754DEB #DDDDDD #999999 #333333 #000000 #57032A #CA9726 #990000 #4B0C25".split(" "),this.alpha=1,this.groupPercent=0,this.groupedTitle="Other",this.groupedPulled=!1,this.groupedAlpha=1,this.marginLeft=0,this.marginBottom=this.marginTop=10,this.marginRight=0,this.hoverAlpha=1,this.outlineColor="#FFFFFF",this.outlineAlpha=0,this.outlineThickness=1,this.startAlpha=0,this.startDuration=1,this.startEffect="bounce",this.sequencedAnimation=!0,this.pullOutDuration=1,this.pullOutEffect="bounce",this.pullOnHover=this.pullOutOnlyOne=!1,this.labelsEnabled=!0,this.labelTickColor="#000000",this.labelTickAlpha=.2,this.hideLabelsPercent=0,this.urlTarget="_self",this.autoMarginOffset=10,this.gradientRatio=[],this.maxLabelWidth=200
this.accessibleLabel="[[title]]: [[percents]]% [[value]] [[description]]",t.applyTheme(this,i,"AmSlicedChart")},initChart:function(){t.AmSlicedChart.base.initChart.call(this),this.dataChanged&&(this.parseData(),this.dispatchDataUpdated=!0,this.dataChanged=!1,this.setLegendData(this.chartData)),this.drawChart()},handleLegendEvent:function(t){var i=t.type,e=t.dataItem,a=this.legend
if(e.wedge&&e){var s=e.hidden
switch(t=t.event,i){case"clickMarker":s||a.switchable||this.clickSlice(e,t)
break
case"clickLabel":s||this.clickSlice(e,t,!1)
break
case"rollOverItem":s||this.rollOverSlice(e,!1,t)
break
case"rollOutItem":s||this.rollOutSlice(e,t)
break
case"hideItem":this.hideSlice(e,t)
break
case"showItem":this.showSlice(e,t)}}},invalidateVisibility:function(){this.recalculatePercents(),this.initChart()
var t=this.legend
t&&t.invalidateSize()},addEventListeners:function(t,i){var e=this
t.mouseover(function(t){e.rollOverSlice(i,!0,t)}).mouseout(function(t){e.rollOutSlice(i,t)}).touchend(function(t){e.rollOverSlice(i,t)}).mouseup(function(t){e.clickSlice(i,t)}).contextmenu(function(t){e.handleRightClick(i,t)}).focus(function(t){e.rollOverSlice(i,t)}).blur(function(t){e.rollOutSlice(i,t)})},formatString:function(i,e,a){i=t.formatValue(i,e,["value"],this.nf,"",this.usePrefixes,this.prefixesOfSmallNumbers,this.prefixesOfBigNumbers)
var s=this.pf.precision
return isNaN(this.tempPrec)||(this.pf.precision=this.tempPrec),i=t.formatValue(i,e,["percents"],this.pf),i=t.massReplace(i,{"[[title]]":e.title,"[[description]]":e.description}),this.pf.precision=s,-1!=i.indexOf("[[")&&(i=t.formatDataContextValue(i,e.dataContext)),i=a?t.fixNewLines(i):t.fixBrakes(i),t.cleanFromEmpty(i)},startSlices:function(){var t
for(t=0;t<this.chartData.length;t++)0<this.startDuration&&this.sequencedAnimation?this.setStartTO(t):this.startSlice(this.chartData[t])},setStartTO:function(t){var i=this
t=setTimeout(function(){i.startSequenced.call(i)},i.startDuration/i.chartData.length*500*t),i.timeOuts.push(t)},pullSlices:function(t){var i,e=this.chartData
for(i=0;i<e.length;i++){var a=e[i]
a.pulled&&this.pullSlice(a,1,t)}},startSequenced:function(){var t,i=this.chartData
for(t=0;t<i.length;t++)if(!i[t].started){this.startSlice(this.chartData[t])
break}},startSlice:function(t){t.started=!0
var i=t.wedge,e=this.startDuration,a=t.labelSet
i&&0<e&&(0<t.alpha&&i.show(),i.translate(t.startX,t.startY),this.animatable.push(i),i.animate({opacity:1,translate:"0,0"},e,this.startEffect)),a&&0<e&&(0<t.alpha&&a.show(),a.translate(t.startX,t.startY),a.animate({opacity:1,translate:"0,0"},e,this.startEffect))},showLabels:function(){var t,i=this.chartData
for(t=0;t<i.length;t++){var e=i[t]
if(0<e.alpha){var a=e.label
a&&a.show(),(e=e.tick)&&e.show()}}},showSlice:function(t){isNaN(t)?t.hidden=!1:this.chartData[t].hidden=!1,this.invalidateVisibility()},hideSlice:function(t){isNaN(t)?t.hidden=!0:this.chartData[t].hidden=!0,this.hideBalloon(),this.invalidateVisibility()},rollOverSlice:function(i,e,a){if(isNaN(i)||(i=this.chartData[i]),clearTimeout(this.hoverInt),!i.hidden){this.pullOnHover&&this.pullSlice(i,1),1>this.hoverAlpha&&i.wedge&&i.wedge.attr({opacity:this.hoverAlpha})
var s=i.balloonX,l=i.balloonY
i.pulled&&(s+=i.pullX,l+=i.pullY)
var h=this.formatString(this.balloonText,i,!0),r=this.balloonFunction
r&&(h=r(i,h)),r=t.adjustLuminosity(i.color,-.15),h?this.showBalloon(h,r,e,s,l):this.hideBalloon(),0===i.value&&this.hideBalloon(),this.fire({type:"rollOverSlice",dataItem:i,chart:this,event:a})}},rollOutSlice:function(t,i){isNaN(t)||(t=this.chartData[t]),t.wedge&&t.wedge.attr({opacity:1}),this.hideBalloon(),this.fire({type:"rollOutSlice",dataItem:t,chart:this,event:i})},clickSlice:function(i,e,a){this.checkTouchDuration(e)&&(isNaN(i)||(i=this.chartData[i]),i.pulled?this.pullSlice(i,0):this.pullSlice(i,1),t.getURL(i.url,this.urlTarget),a||this.fire({type:"clickSlice",dataItem:i,chart:this,event:e}))},handleRightClick:function(t,i){isNaN(t)||(t=this.chartData[t]),this.fire({type:"rightClickSlice",dataItem:t,chart:this,event:i})},drawTicks:function(){var i,e=this.chartData
for(i=0;i<e.length;i++){var a=e[i]
if(a.label&&!a.skipTick){var s=a.ty
s=t.line(this.container,[a.tx0,a.tx,a.tx2],[a.ty0,s,s],this.labelTickColor,this.labelTickAlpha)
t.setCN(this,s,this.type+"-tick"),t.setCN(this,s,a.className,!0),a.tick=s,a.wedge.push(s),"AmFunnelChart"==this.cname&&s.toBack()}}},initialStart:function(){var t=this,i=t.startDuration,e=setTimeout(function(){t.showLabels.call(t)},1e3*i)
t.timeOuts.push(e),t.chartCreated?t.pullSlices(!0):(t.startSlices(),0<i?(i=setTimeout(function(){t.pullSlices.call(t)},1200*i),t.timeOuts.push(i)):t.pullSlices(!0))},pullSlice:function(t,i,e){var a=this.pullOutDuration
!0===e&&(a=0),(e=t.wedge)&&(0<a?(e.animate({translate:i*t.pullX+","+i*t.pullY},a,this.pullOutEffect),t.labelSet&&t.labelSet.animate({translate:i*t.pullX+","+i*t.pullY},a,this.pullOutEffect)):(t.labelSet&&t.labelSet.translate(i*t.pullX,i*t.pullY),e.translate(i*t.pullX,i*t.pullY))),1==i?(t.pulled=!0,this.pullOutOnlyOne&&this.pullInAll(t.index),t={type:"pullOutSlice",dataItem:t,chart:this}):(t.pulled=!1,t={type:"pullInSlice",dataItem:t,chart:this}),this.fire(t)},pullInAll:function(t){var i,e=this.chartData
for(i=0;i<this.chartData.length;i++)i!=t&&e[i].pulled&&this.pullSlice(e[i],0)},pullOutAll:function(){var t,i=this.chartData
for(t=0;t<i.length;t++)i[t].pulled||this.pullSlice(i[t],1)},parseData:function(){var i=[]
this.chartData=i
var e=this.dataProvider
if(isNaN(this.pieAlpha)||(this.alpha=this.pieAlpha),void 0!==e){var a,s,l,h=e.length,r=0
for(a=0;a<h;a++){s={}
var n=e[a]
s.dataContext=n,null!==n[this.valueField]&&(s.value=Number(n[this.valueField])),(l=n[this.titleField])||(l=""),s.title=l,s.pulled=t.toBoolean(n[this.pulledField],!1),(l=n[this.descriptionField])||(l=""),s.description=l,s.labelRadius=Number(n[this.labelRadiusField]),s.switchable=!0,s.className=n[this.classNameField],s.url=n[this.urlField],!(l=n[this.patternField])&&this.patterns&&(l=this.patterns[a]),s.pattern=l,s.visibleInLegend=t.toBoolean(n[this.visibleInLegendField],!0),l=n[this.alphaField],s.alpha=void 0!==l?Number(l):this.alpha,void 0!==(l=n[this.colorField])&&(s.color=l),s.labelColor=t.toColor(n[this.labelColorField]),r+=s.value,s.hidden=!1,i[a]=s}for(a=e=0;a<h;a++)s=i[a],s.percents=s.value/r*100,s.percents<this.groupPercent&&e++
for(1<e&&(this.groupValue=0,this.removeSmallSlices(),i.push({title:this.groupedTitle,value:this.groupValue,percents:this.groupValue/r*100,pulled:this.groupedPulled,color:this.groupedColor,url:this.groupedUrl,description:this.groupedDescription,alpha:this.groupedAlpha,pattern:this.groupedPattern,className:this.groupedClassName,dataContext:{}})),(h=this.baseColor)||(h=this.pieBaseColor),(r=this.brightnessStep)||(r=this.pieBrightnessStep),a=0;a<i.length;a++)h?l=t.adjustLuminosity(h,a*r/100):(l=this.colors[a],void 0===l&&(l=t.randomColor())),void 0===i[a].color&&(i[a].color=l)
this.recalculatePercents()}},recalculatePercents:function(){var t,i,e=this.chartData,a=0
for(t=0;t<e.length;t++)i=e[t],!i.hidden&&0<i.value&&(a+=i.value)
for(t=0;t<e.length;t++)i=this.chartData[t],i.percents=!i.hidden&&0<i.value?100*i.value/a:0},removeSmallSlices:function(){var t,i=this.chartData
for(t=i.length-1;0<=t;t--)i[t].percents<this.groupPercent&&(this.groupValue+=i[t].value,i.splice(t,1))},animateAgain:function(){var t=this
t.startSlices()
for(var i=0;i<t.chartData.length;i++){var e=t.chartData[i]
e.started=!1
var a=e.wedge
a&&(a.setAttr("opacity",t.startAlpha),a.translate(e.startX,e.startY)),(a=e.labelSet)&&(a.setAttr("opacity",t.startAlpha),a.translate(e.startX,e.startY))}0<(i=t.startDuration)?(i=setTimeout(function(){t.pullSlices.call(t)},1200*i),t.timeOuts.push(i)):t.pullSlices()},measureMaxLabel:function(){var i,e=this.chartData,a=0
for(i=0;i<e.length;i++){var s=e[i],l=this.formatString(this.labelText,s),h=this.labelFunction
h&&(l=h(s,l)),(l=(s=t.text(this.container,l,this.color,this.fontFamily,this.fontSize)).getBBox().width)>a&&(a=l),s.remove()}return a}})})(),function(){var t=window.AmCharts
t.AmPieChart=t.Class({inherits:t.AmSlicedChart,construct:function(i){this.type="pie",t.AmPieChart.base.construct.call(this,i),this.cname="AmPieChart",this.pieBrightnessStep=30,this.minRadius=10,this.depth3D=0,this.startAngle=90,this.angle=this.innerRadius=0,this.startRadius="500%",this.pullOutRadius="20%",this.labelRadius=20,this.labelText="[[title]]: [[percents]]%",this.balloonText="[[title]]: [[percents]]% ([[value]])\n[[description]]",this.previousScale=1,this.adjustPrecision=!1,this.gradientType="radial",t.applyTheme(this,i,this.cname)},drawChart:function(){t.AmPieChart.base.drawChart.call(this)
var i=this.chartData
if(t.ifArray(i)){if(0<this.realWidth&&0<this.realHeight){t.VML&&(this.startAlpha=1)
var e=this.startDuration,a=this.container,s=this.updateWidth()
this.realWidth=s
var l=this.updateHeight()
this.realHeight=l
var h,r,n,o=t.toCoordinate,c=o(this.marginLeft,s),u=o(this.marginRight,s),d=o(this.marginTop,l)+this.getTitleHeight(),p=o(this.marginBottom,l)+this.depth3D,f=t.toNumber(this.labelRadius)
for((m=this.measureMaxLabel())>this.maxLabelWidth&&(m=this.maxLabelWidth),this.labelText&&this.labelsEnabled||(f=m=0),h=void 0===this.pieX?(s-c-u)/2+c:o(this.pieX,this.realWidth),r=void 0===this.pieY?(l-d-p)/2+d:o(this.pieY,l),(n=o(this.radius,s,l))||(s=0<=f?s-c-u-2*m:s-c-u,l=l-d-p,n=Math.min(s,l),l<s&&((n/=1-this.angle/90)>s&&(n=s)),l=t.toCoordinate(this.pullOutRadius,n),n=(0<=f?n-1.8*(f+l):n-1.8*l)/2),n<this.minRadius&&(n=this.minRadius),l=o(this.pullOutRadius,n),d=t.toCoordinate(this.startRadius,n),(o=o(this.innerRadius,n))>=n&&(o=n-1),p=t.fitToBounds(this.startAngle,0,360),0<this.depth3D&&(p=270<=p?270:90),360<(p-=90)&&(p-=360),s=n-n*this.angle/90,c=m=0;c<i.length;c++)u=i[c],!0!==u.hidden&&(m+=t.roundTo(u.percents,this.pf.precision))
m=t.roundTo(m,this.pf.precision),this.tempPrec=NaN,this.adjustPrecision&&100!=m&&(this.tempPrec=this.pf.precision+1)
var g
for(c=0;c<i.length;c++)if(u=i[c],!0!==u.hidden&&(this.showZeroSlices||0!==u.percents)){var v=360*u.percents/100,m=Math.sin((p+v/2)/180*Math.PI),b=s/n*-Math.cos((p+v/2)/180*Math.PI),S=this.outlineColor
S||(S=u.color)
var D=this.alpha
if(isNaN(u.alpha)||(D=u.alpha),S={fill:u.color,stroke:S,"stroke-width":this.outlineThickness,"stroke-opacity":this.outlineAlpha,"fill-opacity":D},u.url&&(S.cursor="pointer"),S=t.wedge(a,h,r,p,v,n,s,o,this.depth3D,S,this.gradientRatio,u.pattern,this.path,this.gradientType),t.setCN(this,S,"pie-item"),t.setCN(this,S.wedge,"pie-slice"),t.setCN(this,S,u.className,!0),this.addEventListeners(S,u),u.startAngle=p,i[c].wedge=S,0<e&&(this.chartCreated||S.setAttr("opacity",this.startAlpha)),u.ix=m,u.iy=b,u.wedge=S,u.index=c,u.label=null,D=a.set(),this.labelsEnabled&&this.labelText&&u.percents>=this.hideLabelsPercent){var C=p+v/2
0>C&&(C+=360),360<C&&(C-=360)
var O=f
isNaN(u.labelRadius)||0>(O=u.labelRadius)&&(u.skipTick=!0)
v=h+m*(n+O)
var k,A,x=r+b*(n+O),y=0
if(isNaN(g)&&350<C&&1<i.length-c&&(g=c-1+Math.floor((i.length-c)/2)),0<=O)90>=C&&0<=C?(A=0,k="start",y=8):90<=C&&180>C?(A=1,k="start",y=8):180<=C&&270>C?(A=2,k="end",y=-8):270<=C&&354>=C?(A=3,k="end",y=-8):354<=C&&(c>g?(A=0,k="start",y=8):(A=3,k="end",y=-8)),u.labelQuarter=A
else k="middle"
C=this.formatString(this.labelText,u),(O=this.labelFunction)&&(C=O(u,C)),(O=u.labelColor)||(O=this.color),""!==C&&(C=t.wrappedText(a,C,O,this.fontFamily,this.fontSize,k,!1,this.maxLabelWidth),t.setCN(this,C,"pie-label"),t.setCN(this,C,u.className,!0),C.translate(v+1.5*y,x),0>f&&(C.node.style.pointerEvents="none"),C.node.style.cursor="default",u.ty=x,u.textX=v+1.5*y,D.push(C),this.axesSet.push(D),u.labelSet=D,u.label=C,this.addEventListeners(D,u)),u.tx=v,u.tx2=v+y,u.tx0=h+m*n,u.ty0=r+b*n}v=o+(n-o)/2,u.pulled&&(v+=l),this.accessible&&this.accessibleLabel&&(x=this.formatString(this.accessibleLabel,u),this.makeAccessible(S,x)),void 0!==this.tabIndex&&S.setAttr("tabindex",this.tabIndex),u.balloonX=m*v+h,u.balloonY=b*v+r,u.startX=Math.round(m*d),u.startY=Math.round(b*d),u.pullX=Math.round(m*l),u.pullY=Math.round(b*l),this.graphsSet.push(S),(0===u.alpha||0<e&&!this.chartCreated)&&(S.hide(),D&&D.hide()),360<(p+=360*u.percents/100)&&(p-=360)}0<f&&this.arrangeLabels(),this.pieXReal=h,this.pieYReal=r,this.radiusReal=n,this.innerRadiusReal=o,0<f&&this.drawTicks(),this.initialStart(),this.setDepths()}(i=this.legend)&&i.invalidateSize()}else this.cleanChart()
this.dispDUpd()},setDepths:function(){var t,i=this.chartData
for(t=0;t<i.length;t++){var e,a=(e=i[t]).wedge
0<=(e=e.startAngle)&&180>e?a.toFront():180<=e&&a.toBack()}},arrangeLabels:function(){var t,i,e=this.chartData,a=e.length
for(i=a-1;0<=i;i--)t=e[i],0!==t.labelQuarter||t.hidden||this.checkOverlapping(i,t,0,!0,0)
for(i=0;i<a;i++)t=e[i],1!=t.labelQuarter||t.hidden||this.checkOverlapping(i,t,1,!1,0)
for(i=a-1;0<=i;i--)t=e[i],2!=t.labelQuarter||t.hidden||this.checkOverlapping(i,t,2,!0,0)
for(i=0;i<a;i++)t=e[i],3!=t.labelQuarter||t.hidden||this.checkOverlapping(i,t,3,!1,0)},checkOverlapping:function(t,i,e,a,s){var l,h,r=this.chartData,n=r.length,o=i.label
if(o){if(!0===a)for(h=t+1;h<n;h++)r[h].labelQuarter==e&&(l=this.checkOverlappingReal(i,r[h],e))&&(h=n)
else for(h=t-1;0<=h;h--)r[h].labelQuarter==e&&(l=this.checkOverlappingReal(i,r[h],e))&&(h=0)
!0===l&&200>s&&isNaN(i.labelRadius)&&(l=i.ty+3*i.iy,i.ty=l,o.translate(i.textX,l),this.checkOverlapping(t,i,e,a,s+1))}},checkOverlappingReal:function(i,e,a){var s=!1,l=i.label,h=e.label
return i.labelQuarter!=a||i.hidden||e.hidden||!h||(l=l.getBBox(),(a={}).width=l.width,a.height=l.height,a.y=i.ty,a.x=i.tx,i=h.getBBox(),(h={}).width=i.width,h.height=i.height,h.y=e.ty,h.x=e.tx,t.hitTest(a,h)&&(s=!0)),s}})}()
