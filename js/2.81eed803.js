(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[2],{"+6EW":function(e,t,a){},"/uSs":function(e,t,a){"use strict";a.d(t,"a",function(){return n});let n={apiUrl:"http://localhost:31213"}},UXTB:function(e,t,a){"use strict";a.r(t);var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("q-page",{staticClass:"flex flex-center"},[a("q-table",{attrs:{title:"Liste des taches",data:e.taskData,columns:e.columns,"row-key":"name"}})],1)},r=[];n._withStripped=!0;var l=a("vDqi"),s=a.n(l),i=a("/uSs"),o={name:"LayoutDefault",data:function(){return{columns:[{name:"name",required:!0,label:"Nom",align:"left",field:"name",sortable:!0},{name:"time",required:!0,label:"Charge",align:"left",field:"time",sortable:!0,format:function(e){return e+" heures"}},{name:"completed",required:!0,label:"Completée",align:"left",field:"completed",sortable:!0,format:function(e){return!1===e?"Non":"Oui"}}],taskData:[{name:"Créer les utilisateurs",time:2,completed:!0},{name:"Créer la liste des taches",time:2,completed:!1},{name:"Créer la création de tache",time:2,completed:!1}]}},methods:{},mounted:function(){var e=this;s.a.get("".concat(i["a"].apiUrl,"/tasks"),this.task).then(function(t){"200"===t.statusCode&&(e.taskData=t.data)}).catch(function(t){e.$q.notify({type:"negative",message:"Une erreur est survenue lors de la récuperation des données"}),console.log(t)})}},u=o,c=(a("jwnp"),a("KHd+")),m=Object(c["a"])(u,n,r,!1,null,"889f5cf2",null);t["default"]=m.exports},jwnp:function(e,t,a){"use strict";var n=a("+6EW"),r=a.n(n);r.a}}]);