"use strict"
define("dummy/app",["exports","dummy/resolver","ember-load-initializers","dummy/config/environment"],function(e,t,n,r){Object.defineProperty(e,"__esModule",{value:!0})
var a=Ember.Application.extend({modulePrefix:r.default.modulePrefix,podModulePrefix:r.default.podModulePrefix,Resolver:t.default});(0,n.default)(a,r.default.modulePrefix),e.default=a}),define("dummy/application/template",["exports"],function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=Ember.HTMLBars.template({id:"n+JV4zti",block:'{"symbols":[],"statements":[[6,"div"],[9,"class","container"],[7],[0,"\\n  "],[6,"nav"],[9,"class","navbar navbar-inverse"],[7],[0,"\\n    "],[6,"div"],[9,"class","container-fluid"],[7],[0,"\\n      "],[6,"div"],[9,"class","navbar-header"],[7],[0,"\\n        "],[4,"link-to",["charts.chart","bar"],[["class"],["navbar-brand"]],{"statements":[[0,"ember-cli-cedar"]],"parameters":[]},null],[0,"\\n      "],[8],[0,"\\n      "],[6,"div"],[9,"class","navbar-collapse collapse"],[7],[0,"\\n        "],[6,"ul"],[9,"class","nav navbar-nav"],[7],[0,"\\n          "],[6,"li"],[7],[4,"link-to",["charts.chart","bar"],null,{"statements":[[0,"Common Chart Types"]],"parameters":[]},null],[8],[0,"\\n          "],[6,"li"],[7],[4,"link-to",["playground"],null,{"statements":[[0,"Playground"]],"parameters":[]},null],[8],[0,"\\n          "],[6,"li"],[7],[4,"link-to",["error-handling"],null,{"statements":[[0,"Handling Errors"]],"parameters":[]},null],[8],[0,"\\n        "],[8],[0,"\\n        "],[6,"ul"],[9,"class","nav navbar-nav navbar-right"],[7],[0,"\\n          "],[6,"li"],[7],[6,"a"],[9,"href","https://www.npmjs.com/package/ember-cli-cedar"],[7],[0,"About"],[8],[8],[0,"\\n          "],[6,"li"],[7],[6,"a"],[9,"href","https://github.com/Esri/ember-cli-cedar"],[7],[0,"GitHub"],[8],[8],[0,"\\n        "],[8],[0,"\\n      "],[8],[2,"/.nav-collapse "],[0,"\\n    "],[8],[2,"/.container-fluid "],[0,"\\n  "],[8],[0,"\\n  "],[6,"p"],[7],[0,"An Ember Addon for "],[6,"a"],[9,"href","https://www.npmjs.com/package/@esri/cedar"],[7],[0,"@esri/cedar"],[8],[8],[0,"\\n  "],[1,[18,"outlet"],false],[0,"\\n  "],[6,"div"],[7],[0,"\\n    "],[6,"a"],[9,"href","https://github.com/Esri/ember-cli-cedar"],[7],[0,"ember-cli-cedar on GitHub"],[8],[0,"\\n  "],[8],[0,"\\n"],[8],[0,"\\n"]],"hasEval":false}',meta:{moduleName:"dummy/application/template.hbs"}})}),define("dummy/charts/chart/controller",["exports"],function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=Ember.Controller.extend({slugs:null,chartTypes:Ember.computed.map("slugs",function(e){return{slug:e,label:Ember.String.capitalize(e)}}),definitionString:Ember.computed("model.definition",function(){return JSON.stringify(this.get("model.definition"),null,2)}),renderers:null,selectedRenderer:"svg",shouldLogEvents:!1,eventLog:"",init:function(){this._super.apply(this,arguments),this.setProperties({slugs:["bar","bar-grouped","bar-stacked","bar-horizontal","line","area","scatter","bubble","pie","radar"],renderers:["canvas","svg"]})},actions:{selectRenderer:function(e){this.set("selectedRenderer",e)},logEvent:function(e,t){if(this.shouldLogEvents){var n=e?e.type:"No event object passed"
this.set("eventLog",this.get("eventLog")+(n+": ")+JSON.stringify(t)+"\n")}}}})}),define("dummy/charts/chart/route",["exports","fetch"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=Ember.Route.extend({model:function(e){var n=e.slug
return(0,t.default)("https://cedar-v1.surge.sh/examples/"+n+".json").then(function(t){return t.json().then(function(t){var r=Ember.String.capitalize(e.slug)+" Example"
return t.legend={visible:!0},{title:r,definition:t,slug:n}})})}})}),define("dummy/charts/chart/template",["exports"],function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=Ember.HTMLBars.template({id:"rgbU87qj",block:'{"symbols":["chartType"],"statements":[[6,"h3"],[7],[1,[20,["model","title"]],false],[8],[0,"\\n"],[6,"div"],[9,"class","row"],[7],[0,"\\n  "],[6,"div"],[9,"class","col-xs-12"],[7],[0,"\\n    "],[6,"ul"],[9,"class","list-inline"],[7],[0,"\\n"],[4,"each",[[20,["chartTypes"]]],null,{"statements":[[0,"      "],[6,"li"],[7],[4,"link-to",["charts.chart",[19,1,["slug"]]],null,{"statements":[[1,[19,1,["label"]],false]],"parameters":[]},null],[8],[0,"\\n"]],"parameters":[1]},null],[0,"    "],[8],[0,"\\n  "],[8],[0,"\\n  "],[6,"div"],[9,"class","col-xs-12"],[7],[0,"\\n    "],[1,[25,"cedar-chart",null,[["type","datasets","series","overrides","legend","style","onClick","onMouseover","onMouseout","onUpdateStart","onUpdateEnd"],[[20,["model","definition","type"]],[20,["model","definition","datasets"]],[20,["model","definition","series"]],[20,["model","definition","overrides"]],[20,["model","definition","legend"]],[20,["model","definition","style"]],[25,"action",[[19,0,[]],"logEvent"],null],[25,"action",[[19,0,[]],"logEvent"],null],[25,"action",[[19,0,[]],"logEvent"],null],[25,"action",[[19,0,[]],"logEvent"],null],[25,"action",[[19,0,[]],"logEvent"],null]]]],false],[0,"\\n  "],[8],[0,"\\n"],[8],[0,"\\n"],[6,"div"],[9,"class","row"],[7],[0,"\\n  "],[6,"div"],[9,"class","col-xs-12"],[7],[0,"\\n    "],[6,"div"],[9,"class","clearfix"],[7],[0,"\\n      "],[6,"div"],[9,"class","pull-left"],[7],[0,"\\n        "],[6,"h4"],[7],[0,"Chart Definition JSON"],[8],[0,"\\n      "],[8],[0,"\\n      "],[6,"div"],[9,"class","pull-right"],[7],[0,"\\n        "],[4,"link-to",["playground",[25,"query-params",null,[["spec"],[[20,["model","slug"]]]]]],[["class"],["btn btn-primary"]],{"statements":[[0,"Edit"]],"parameters":[]},null],[0,"\\n      "],[8],[0,"\\n    "],[8],[0,"\\n    "],[6,"pre"],[7],[6,"code"],[7],[1,[18,"definitionString"],false],[8],[8],[0,"\\n    "],[2," hiding this until v1 supports events and maybe renderers "],[0,"\\n    "],[2,"\\n    <h4>Options</h4>\\n    <p>Renderer: <select onchange={{action \\"selectRenderer\\" value=\\"target.value\\"}}>\\n{{#each renderers as |renderer|}}\\n      <option value={{renderer}} selected={{eq renderer selectedRenderer}}>{{renderer}}</option>\\n    {{/each}}    </select></p>\\n    <h4>Events</h4>\\n    <p>{{input type=\\"checkbox\\" checked=shouldLogEvents}} Log <a href=\\"http://esri.github.io/cedar/api/on.html\\" target=\\"_blank\\">events</a> below as you interact with the chart.</p>\\n    {{textarea class=\\"form-control event-log\\" value=eventLog}}\\n    "],[0,"\\n  "],[8],[0,"\\n"],[8],[0,"\\n"]],"hasEval":false}',meta:{moduleName:"dummy/charts/chart/template.hbs"}})}),define("dummy/components/cedar-chart/component",["exports","ember-cli-cedar/components/cedar-chart/component"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})}),define("dummy/components/charts-playground/component",["exports","dummy/components/charts-playground/template"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=Ember.Component.extend({layout:t.default,jsonString:Ember.computed("model",function(){return JSON.stringify(this.get("model"),void 0,2)}),actions:{renderJSON:function(){this.set("model",JSON.parse(this.get("jsonString")))}}})}),define("dummy/components/charts-playground/template",["exports"],function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=Ember.HTMLBars.template({id:"7xMWvp6C",block:'{"symbols":[],"statements":[[6,"form"],[3,"action",[[19,0,[]],"renderJSON",[20,["type"]]],[["on"],["submit"]]],[7],[0,"\\n  "],[6,"div"],[9,"class","form-group"],[7],[0,"\\n    "],[6,"label"],[7],[0,"Input chart JSON"],[8],[0,"\\n    "],[1,[25,"textarea",null,[["class","placeholder","value"],["form-control render-json-field","New JSON",[20,["jsonString"]]]]],false],[0,"\\n  "],[8],[0,"\\n  "],[6,"button"],[9,"type","submit"],[9,"class","btn btn-primary btn-sm"],[7],[0,"Render"],[8],[0,"\\n"],[8],[0,"\\n"]],"hasEval":false}',meta:{moduleName:"dummy/components/charts-playground/template.hbs"}})}),define("dummy/error-handling/controller",["exports"],function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=Ember.Controller.extend({timeout:10,invalidUrlDataset:Ember.computed("model.datasets",function(){var e=Ember.copy(this.get("model.datasets"),!0)
return e[0].url="thisisnotavalidurl",e}),emptyDataset:null,init:function(){this._super.apply(this,arguments),this.set("emptyDataset",{})},actions:{showError:function(e){this.set("errorMessage",e)},showError2:function(e){this.set("errorMessage2",e)},showError3:function(e){"The queries to the service(s) are not responding within the designated timeout period."===e?this.set("errorMessage3",e+": There was a timeout based on "+this.get("timeout")+" ms"):this.set("errorMessage3",e)}}})}),define("dummy/error-handling/route",["exports"],function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=Ember.Route.extend({model:function(){return{type:"pie",datasets:[{url:"https://services.arcgis.com/uDTUpUPbk8X8mXwl/arcgis/rest/services/Public_Schools_in_Onondaga_County/FeatureServer/0",query:{orderByFields:"Number_of_SUM DESC",groupByFieldsForStatistics:"Type",outStatistics:[{statisticType:"sum",onStatisticField:"Number_of",outStatisticFieldName:"Number_of_SUM"}]}}],series:[{category:{field:"Type",label:"Type"},value:{field:"Number_of_SUM",label:"Number of Students"}}]}}})}),define("dummy/error-handling/template",["exports"],function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=Ember.HTMLBars.template({id:"SC4iMy3V",block:'{"symbols":[],"statements":[[6,"h3"],[7],[0,"Handling Cedar Errors"],[8],[0,"\\n"],[6,"p"],[7],[0,"Example of an error returned when fetching data:"],[8],[0,"\\n"],[6,"pre"],[7],[0,"{{cedar-chart\\n  type=model.type\\n  datasets=invalidUrlDataset\\n  series=model.series\\n  onError=(action \'showError\')\\n}}"],[8],[0,"\\n"],[6,"div"],[9,"class","alert alert-danger"],[7],[1,[18,"errorMessage"],false],[8],[0,"\\n"],[1,[25,"cedar-chart",null,[["type","datasets","series","onError"],[[20,["model","type"]],[20,["invalidUrlDataset"]],[20,["model","series"]],[25,"action",[[19,0,[]],"showError"],null]]]],false],[0,"\\n"],[6,"p"],[7],[0,"A chart component with invalid attributes returns a message like this:"],[8],[0,"\\n"],[6,"pre"],[7],[0,"{{cedar-chart\\n  specification=42\\n  datasets=model.datasets\\n  series=model.series\\n  invalidSpecMessage=\\"invalidSpecMessage is no longer used and should show a deprecation\\"\\n  onError=(action \'showError2\')\\n}}"],[8],[0,"\\n"],[6,"div"],[9,"class","alert alert-danger"],[7],[1,[18,"errorMessage2"],false],[8],[0,"\\n"],[1,[25,"cedar-chart",null,[["specification","datasets","series","invalidSpecMessage","onError"],[42,[20,["model","datasets"]],[20,["model","series"]],"invalidSpecMessage is no longer used and should show a deprecation",[25,"action",[[19,0,[]],"showError2"],null]]]],false],[0,"\\n"],[6,"p"],[7],[0,"Example of a timeout in milliseconds (10) to force timeouts"],[8],[0,"\\n"],[6,"pre"],[7],[0,"{{cedar-chart\\n  type=model.type\\n  datasets=invalidUrlDataset\\n  series=model.series\\n  timeout=10\\n  onError=(action \'showError3\')\\n}}"],[8],[0,"\\n"],[6,"div"],[9,"class","alert alert-danger"],[7],[1,[18,"errorMessage3"],false],[8],[0,"\\n"],[1,[25,"cedar-chart",null,[["type","datasets","series","timeout","onError"],[[20,["model","type"]],[20,["model","datasets"]],[20,["model","series"]],10,[25,"action",[[19,0,[]],"showError3"],null]]]],false],[0,"\\n"]],"hasEval":false}',meta:{moduleName:"dummy/error-handling/template.hbs"}})}),define("dummy/helpers/eq",["exports"],function(e){function t(e){return 2===e.length&&e[0]===e[1]}Object.defineProperty(e,"__esModule",{value:!0}),e.eq=t,e.default=Ember.Helper.helper(t)}),define("dummy/initializers/container-debug-adapter",["exports","ember-resolver/resolvers/classic/container-debug-adapter"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"container-debug-adapter",initialize:function(){var e=arguments[1]||arguments[0]
e.register("container-debug-adapter:main",t.default),e.inject("container-debug-adapter:main","namespace","application:main")}}}),define("dummy/initializers/export-application-global",["exports","dummy/config/environment"],function(e,t){function n(){var e=arguments[1]||arguments[0]
if(!1!==t.default.exportApplicationGlobal){var n
if("undefined"!=typeof window)n=window
else if("undefined"!=typeof global)n=global
else{if("undefined"==typeof self)return
n=self}var r,a=t.default.exportApplicationGlobal
r="string"==typeof a?a:Ember.String.classify(t.default.modulePrefix),n[r]||(n[r]=e,e.reopen({willDestroy:function(){this._super.apply(this,arguments),delete n[r]}}))}}Object.defineProperty(e,"__esModule",{value:!0}),e.initialize=n,e.default={name:"export-application-global",initialize:n}}),define("dummy/initializers/polyfills",["exports","fetch"],function(e,t){function n(){window.Promise||(window.Promise=Ember.RSVP.Promise),window.fetch||(window.fetch=t.default)}Object.defineProperty(e,"__esModule",{value:!0}),e.initialize=n,e.default={initialize:n}}),define("dummy/instance-initializers/cedar",["exports","ember-cli-cedar/instance-initializers/cedar"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}}),Object.defineProperty(e,"initialize",{enumerable:!0,get:function(){return t.initialize}})}),define("dummy/mixins/adapter-fetch",["exports","ember-fetch/mixins/adapter-fetch"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})}),define("dummy/playground/route",["exports","fetch"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=Ember.Route.extend({queryParams:{spec:{refreshModel:!0}},model:function(e){var n=e.spec||"bar"
return(0,t.default)("https://cedar-v1.surge.sh/examples/"+n+".json").then(function(e){return e.json()})}})}),define("dummy/playground/template",["exports"],function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=Ember.HTMLBars.template({id:"h72RK9hi",block:'{"symbols":[],"statements":[[6,"div"],[9,"class","row"],[7],[0,"\\n  "],[6,"div"],[9,"class","col-md-12 col-lg-8"],[7],[0,"\\n    "],[1,[25,"cedar-chart",null,[["definition"],[[20,["model"]]]]],false],[0,"\\n  "],[8],[0,"\\n  "],[6,"div"],[9,"class","col-md-12 col-lg-4"],[7],[0,"\\n    "],[1,[25,"charts-playground",null,[["model"],[[20,["model"]]]]],false],[0,"\\n  "],[8],[0,"\\n"],[8],[0,"\\n"]],"hasEval":false}',meta:{moduleName:"dummy/playground/template.hbs"}})}),define("dummy/resolver",["exports","ember-resolver"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=t.default}),define("dummy/router",["exports","dummy/config/environment"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0})
var n=Ember.Router.extend({location:t.default.locationType,rootURL:t.default.rootURL})
n.map(function(){this.route("charts",function(){this.route("chart",{path:":slug"})}),this.route("playground"),this.route("transform"),this.route("error-handling")}),e.default=n}),define("dummy/services/ajax",["exports","ember-ajax/services/ajax"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})}),define("dummy/services/cedar-loader",["exports","ember-cli-cedar/services/cedar-loader"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})}),define("dummy/templates/application",["exports"],function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=Ember.HTMLBars.template({id:"cO0cAiHm",block:'{"symbols":[],"statements":[[6,"h2"],[9,"id","title"],[7],[0,"Welcome to Ember"],[8],[0,"\\n\\n"],[1,[18,"outlet"],false]],"hasEval":false}',meta:{moduleName:"dummy/templates/application.hbs"}})}),define("dummy/transform/controller",["exports"],function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=Ember.Controller.extend({actions:{transform:function(e,t){for(var n=e.features,r=[],a=t.query.outStatistics[0].outStatisticFieldName,s=t.query.groupByFieldsForStatistics,o=0,i=0,l=n.length;i<l;i++){var d=n[i]
i<5?r.push(n[i]):o+=d.attributes[a]}if(o>0){var u={}
u[s]="Other",u[a]=o,r.push({attributes:u})}return e.features=r,e}}})}),define("dummy/transform/route",["exports"],function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=Ember.Route.extend({model:function(){return{type:"pie",datasets:[{name:"students",url:"https://services.arcgis.com/uDTUpUPbk8X8mXwl/arcgis/rest/services/Public_Schools_in_Onondaga_County/FeatureServer/0",query:{orderByFields:"Number_of_SUM DESC",groupByFieldsForStatistics:"Type",outStatistics:[{statisticType:"sum",onStatisticField:"Number_of",outStatisticFieldName:"Number_of_SUM"}]}}],series:[{source:"students",category:{field:"Type",label:"Type"},value:{field:"Number_of_SUM",label:"Total Students"}}],overrides:{groupPercent:0}}}})}),define("dummy/transform/template",["exports"],function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=Ember.HTMLBars.template({id:"HT1q+wno",block:'{"symbols":[],"statements":[[6,"h3"],[7],[0,"Transform Query Results"],[8],[0,"\\n"],[1,[25,"cedar-chart",null,[["type","datasets","series","overrides","transform"],[[20,["model","type"]],[20,["model","datasets"]],[20,["model","series"]],[20,["model","overrides"]],[25,"action",[[19,0,[]],"transform"],null]]]],false],[0,"\\n"],[6,"p"],[7],[0,"Based on "],[6,"a"],[9,"href","http://esri.github.io/cedar/examples/transform.html"],[7],[0,"this Cedar example"],[8],[0,"."],[8],[0,"\\n"]],"hasEval":false}',meta:{moduleName:"dummy/transform/template.hbs"}})}),define("dummy/utils/lazy-loading",["exports","ember-cli-cedar/utils/lazy-loading"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"loadAmChartsFiles",{enumerable:!0,get:function(){return t.loadAmChartsFiles}})}),define("dummy/config/environment",[],function(){try{var e="dummy/config/environment",t=document.querySelector('meta[name="'+e+'"]').getAttribute("content"),n={default:JSON.parse(unescape(t))}
return Object.defineProperty(n,"__esModule",{value:!0}),n}catch(t){throw new Error('Could not read config from meta tag with name "'+e+'".')}}),runningTests||require("dummy/app").default.create({})
