webpackJsonp([1],{29:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=a(38),i=a.n(n);e.default={name:"app",components:{appLottery:i.a}}},30:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=a(37),i=a.n(n),s=a(11),r=a.n(s),o=a(44),l=a.n(o);e.default={data:function(){return{newlotteryObj:{username:"",lotteryKey:""},lotteries:null,prize1:"",prize2:"",prize3:"",prize4:"",prize5:"",timeLeft:"",luckyNumber:0,winners:[],distance:0,showTimeLeft:!0,eventState:0,eventStartTime:"",eventEndTime:""}},methods:{addLottery:function(){var t=this;if(2===this.eventState)return void i.a.warning("Lottery event has already passed. Please come back early next time!");if(0===this.eventState)return void i.a.warning("Event has not start yet, please come back later!");if(1===this.eventState){!0===confirm("Please confirm your username. If the username is not correct, this lottery will not count!")&&this.newlotteryObj.username&&(this.newlotteryObj.lotteryKey=Math.floor(1e3*Math.random()+1),r.a.post("http://"+l.a.hostip+":"+l.a.hostport+"/api/lotteries",t.newlotteryObj).then(function(e){i.a.success("Lottery Added successfully"),t.getlotteries(),t.newlotteryObj.username=""}).catch(function(t){console.log(t)}))}},getlotteries:function(){var t=this;r.a.get("http://"+l.a.hostip+":"+l.a.hostport+"/api/lotteries").then(function(e){t.lotteries=e.data}).catch(function(e){console.log(t.errors)})},getWinner:function(){var t=this;r.a.get("http://"+l.a.hostip+":"+l.a.hostport+"/api/winners").then(function(e){t.winners=e.data}).catch(function(e){console.log(t.errors)})},getLuckyNumber:function(){var t=this;r.a.get("http://"+l.a.hostip+":"+l.a.hostport+"/api/luckynumberdb").then(function(e){t.luckyNumber=e.data}).catch(function(e){console.log(t.errors)})},getPrize:function(){var t=this;r.a.get("http://"+l.a.hostip+":"+l.a.hostport+"/api/eventdata").then(function(e){t.prize1=e.data.prize1,t.prize2=e.data.prize2,t.prize3=e.data.prize3,t.prize4=e.data.prize4,t.prize5=e.data.prize5,t.eventStartTime=e.data.eventStartTime,t.eventEndTime=e.data.eventEndTime}).catch(function(e){console.log(t.errors)})},getTime:function(){var t=this;r.a.get("http://"+l.a.hostip+":"+l.a.hostport+"/api/eventdata/countdown").then(function(e){t.distance=e.data.countdown}).catch(function(e){console.log(t.errors)})},getEventState:function(){var t=this;r.a.get("http://"+l.a.hostip+":"+l.a.hostport+"/api/eventdata/state").then(function(e){t.eventState=e.data.state}).catch(function(e){console.log(t.errors)})}},watch:{showTimeLeft:{handler:function(){this.getLuckyNumber(),this.getWinner()}}},created:function(){var t=this;return this.getEventState(),this.getPrize(),this.getTime(),this.getlotteries(),this.getWinner(),this.getLuckyNumber(),t.distance=this.distance,setInterval(function(){var e=Math.floor(t.distance/864e5),a=Math.floor(t.distance%864e5/36e5),n=Math.floor(t.distance%36e5/6e4),i=Math.floor(t.distance%6e4/1e3);t.distance>0?(t.timeLeft=e+"d "+a+"h "+n+"m "+i+"s ",t.showTimeLeft=!0):t.showTimeLeft=!1,t.distance=t.distance-1e3},1e3),t.timeLeft}}},31:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=a(10),i=a(9),s=a.n(i),r=a(8),o=a.n(r);n.a.config.productionTip=!1,new n.a({el:"#app",router:o.a,template:"<App/>",components:{App:s.a}})},32:function(t,e){},33:function(t,e){},38:function(t,e,a){function n(t){a(33)}var i=a(7)(a(30),a(40),n,null,null);t.exports=i.exports},39:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"container"},[a("appLottery")],1)},staticRenderFns:[]}},40:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("div",{staticClass:"container"},[t.showTimeLeft?a("div",{staticClass:"row col-sm-12 "},[a("div",{staticClass:"panel panel-info "},[a("div",{staticClass:"panel-heading  "},[t._v("Prizes")]),t._v(" "),a("div",{staticClass:"panel-body "},[a("ol",[a("li",[t._v(t._s(t.prize1))]),t._v(" "),a("li",[t._v(t._s(t.prize2))]),t._v(" "),a("li",[t._v(t._s(t.prize3))]),t._v(" "),a("li",[t._v(t._s(t.prize4))]),t._v(" "),a("li",[t._v(t._s(t.prize5))])])])])]):a("div",[a("div",{staticClass:"row col-sm-5 "},[a("div",{staticClass:"panel panel-info "},[a("div",{staticClass:"panel-heading  "},[t._v("Prizes")]),t._v(" "),a("div",{staticClass:"panel-body "},[a("ol",[a("li",[t._v(t._s(t.prize1))]),t._v(" "),a("li",[t._v(t._s(t.prize2))]),t._v(" "),a("li",[t._v(t._s(t.prize3))]),t._v(" "),a("li",[t._v(t._s(t.prize4))]),t._v(" "),a("li",[t._v(t._s(t.prize5))])])])])]),t._v(" "),a("div",{staticClass:"row col-sm-5 col-sm-offset-2 "},[a("div",{staticClass:"panel panel-info "},[a("div",{staticClass:"panel-heading  "},[t._v("Winners")]),t._v(" "),a("div",{staticClass:"panel-body"},[a("ol",t._l(t.winners,function(e,n){return n<5?a("li",[t._v(t._s(e.username))]):t._e()}))])])])])]),t._v(" "),0==t.eventState?a("div",{staticClass:"panel panel-info "},[a("div",{staticClass:"panel-heading "},[t._v("The new lottery event will be start on "),a("span",{staticStyle:{color:"red"}},[t._v(" "+t._s(t.eventStartTime)+" ")]),t._v(" to "),a("span",{staticStyle:{color:"red"}},[t._v(" "+t._s(t.eventEndTime)+" ")]),t._v(". Please come back later.")])]):t._e(),t._v(" "),1==t.eventState?a("div",{staticClass:"panel panel-info "},[a("div",{staticClass:"panel-heading "},[t._v("Time left: "),a("span",{staticStyle:{color:"red"}},[t._v(" "+t._s(t.timeLeft)+" ")])])]):t._e(),t._v(" "),2==t.eventState?a("div",{staticClass:"panel panel-info"},[a("div",{staticClass:"panel-heading "},[t._v("Lottery lucky number: "),a("span",{staticStyle:{color:"red"}},t._l(t.luckyNumber,function(e,n){return n<1?a("tr",[a("td",[t._v(t._s(e.luckyNumber))])]):t._e()}))])]):t._e(),t._v(" "),a("div",{staticClass:"panel panel-default"},[a("div",{staticClass:"panel-heading "},[t._v("Get start")]),t._v(" "),a("div",{staticClass:"panel-body "},[a("form",{staticClass:"input-group  col-sm-8 col-sm-offset-2 ",attrs:{id:"form"},on:{submit:function(e){e.preventDefault(),t.addLottery(e)}}},[a("span",{staticClass:"input-group-addon",attrs:{id:"basic-addon1"}},[t._v("@")]),t._v(" "),a("div",{staticClass:"form-group "},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.newlotteryObj.username,expression:"newlotteryObj.username"}],staticClass:"form-control",attrs:{type:"text",placeholder:"username"},domProps:{value:t.newlotteryObj.username},on:{input:function(e){e.target.composing||(t.newlotteryObj.username=e.target.value)}}})]),t._v(" "),t._m(0)])])]),t._v(" "),a("div",{staticClass:"panel panel-default"},[a("div",{staticClass:"panel-heading"},[t._v("Participators list")]),t._v(" "),a("table",{staticClass:"table table-hover"},[a("thead",[a("tr",[a("th",[t._v("username")]),t._v(" "),a("th",[t._v("Lottery Number")]),t._v(" "),0==t.showTimeLeft?a("th",[t._v("Difference")]):t._e()])]),t._v(" "),a("tbody",t._l(this.lotteries,function(e){return a("tr",[a("td",[t._v(t._s(e.username))]),t._v(" "),a("td",[t._v(t._s(e.lotteryKey))]),t._v(" "),0==t.showTimeLeft?a("td",[a("span",[t._v(t._s(e.diff))])]):t._e()])}))])])])},staticRenderFns:[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("span",{staticClass:"input-group-btn"},[a("input",{staticClass:"btn btn-default",attrs:{type:"submit",value:"Go!"}})])}]}},44:function(t,e){t.exports={hostip:"127.0.0.1",hostport:"9000"}},8:function(t,e){},9:function(t,e,a){function n(t){a(32)}var i=a(7)(a(29),a(39),n,null,null);t.exports=i.exports}},[31]);