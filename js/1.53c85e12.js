(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[1],{"/uSs":function(e,a,t){"use strict";t.d(a,"a",function(){return n});let n={apiUrl:"nodeApi:31213"}},GcLN:function(e,a,t){"use strict";var n=t("Sa7b"),l=t.n(n);l.a},Sa7b:function(e,a,t){},d0Ez:function(e,a,t){"use strict";t.r(a);var n=function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("q-page",{staticClass:"flex flex-center"},[t("q-card",{style:{"min-width":"40vw"}},[t("q-card-title",[e._v("\n      Créer une tache\n    ")]),t("q-card-separator"),t("q-card-main",[t("q-field",{staticClass:"padding-bot",attrs:{icon:"code",helper:"Nom de la tache",label:"Nom de la tache",error:e.mailHasError,"error-label":"We need a valid email"}},[t("q-input",{model:{value:e.task.name,callback:function(a){e.$set(e.task,"name",a)},expression:"task.name"}})],1),t("q-field",{staticClass:"padding-bot",attrs:{icon:"all_inclusive",helper:"Charge de la tache",label:"Charge de la tache",error:e.mailHasError,"error-label":"We need a valid email"}},[t("q-input",{attrs:{type:"number",min:"0"},model:{value:e.task.time,callback:function(a){e.$set(e.task,"time",a)},expression:"task.time"}})],1),t("q-field",{staticClass:"padding-bot",attrs:{icon:"check",helper:"Tache complétée ?",label:"Tache complétée ?",error:e.mailHasError,"error-label":"We need a valid email"}},[t("q-select",{attrs:{options:e.taskOptions},model:{value:e.task.completed,callback:function(a){e.$set(e.task,"completed",a)},expression:"task.completed"}})],1),t("div",{staticClass:"flex flex-center"},[t("q-btn",{attrs:{icon:"send",color:"primary",label:"Envoyer"},on:{click:e.sendData}})],1)],1)],1)],1)},l=[];n._withStripped=!0;var s=t("vDqi"),r=t.n(s),i=t("/uSs"),c={name:"LayoutDefault",data:function(){return{taskOptions:[{label:"Oui",value:!0},{label:"Non",value:!1}],task:{name:"",completed:!1,time:0}}},methods:{sendData:function(){var e=this;r.a.post("".concat(i["a"].apiUrl,"/tasks"),this.task).then(function(a){e.$q.notify({type:"positive",message:"La tache a bien été créee"})}).catch(function(a){e.$q.notify({type:"negative",message:"Une erreur est survenue"})})}}},o=c,d=(t("GcLN"),t("KHd+")),u=Object(d["a"])(o,n,l,!1,null,"7eafe313",null);a["default"]=u.exports}}]);