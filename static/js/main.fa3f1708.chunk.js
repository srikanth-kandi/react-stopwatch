(this.webpackJsonpstopwatch=this.webpackJsonpstopwatch||[]).push([[0],{13:function(t,e,n){},15:function(t,e,n){},16:function(t,e,n){"use strict";n.r(e);var s=n(2),c=n.n(s),a=n(4),i=n.n(a),r=n(5),o=n(7),h=n(8),l=n(6),d=(n(13),n(0)),u={minutes:0,seconds:0,isStopWatchRunning:!1},p=function(t){Object(h.a)(n,t);var e=Object(l.a)(n);function n(){var t;Object(r.a)(this,n);for(var s=arguments.length,c=new Array(s),a=0;a<s;a++)c[a]=arguments[a];return(t=e.call.apply(e,[this].concat(c))).state=u,t.getElapsedSecondsInTimeFormat=function(){var e=t.state,n=e.minutes,s=e.seconds,c=n>9?n:"0".concat(n),a=s>9?s:"0".concat(s);return"".concat(c,":").concat(a)},t.incrementTimeElapsedInSeconds=function(){59===t.state.seconds?t.setState((function(t){return{minutes:t.minutes+1,seconds:0}})):t.setState((function(t){return{seconds:t.seconds+1}}))},t.resetWatch=function(){t.state.isStopWatchRunning?(clearInterval(t.intervalId),t.setState(u)):t.setState(u)},t.stopWatch=function(){t.state.isStopWatchRunning&&(clearInterval(t.intervalId),t.setState({isStopWatchRunning:!1}))},t.startWatch=function(){!1===t.state.isStopWatchRunning&&(t.intervalId=setInterval(t.incrementTimeElapsedInSeconds,1e3),t.setState({isStopWatchRunning:!0}))},t}return Object(o.a)(n,[{key:"render",value:function(){return Object(d.jsx)("div",{className:"bg-container",children:Object(d.jsxs)("div",{className:"stopwatch-container",children:[Object(d.jsx)("h1",{className:"heading",children:"Stopwatch"}),Object(d.jsxs)("div",{className:"shadow-container",children:[Object(d.jsxs)("div",{className:"timer-img-container",children:[Object(d.jsx)("img",{src:"https://assets.ccbp.in/frontend/react-js/stopwatch-timer.png",alt:"stopwatch",className:"stopwatch-img"}),Object(d.jsx)("p",{className:"timer-desc",children:"Timer"})]}),Object(d.jsx)("h1",{className:"timer",children:this.getElapsedSecondsInTimeFormat()}),Object(d.jsxs)("div",{className:"btn-container",children:[Object(d.jsx)("button",{type:"button",className:"start-btn",onClick:this.startWatch,children:"Start"}),Object(d.jsx)("button",{type:"button",className:"stop-btn",onClick:this.stopWatch,children:"Stop"}),Object(d.jsx)("button",{type:"button",className:"reset-btn",onClick:this.resetWatch,children:"Reset"})]})]})]})})}}]),n}(s.Component),j=p,m=(n(15),function(){return Object(d.jsx)(j,{})});i.a.render(Object(d.jsx)(c.a.StrictMode,{children:Object(d.jsx)(m,{})}),document.getElementById("root"))}},[[16,1,2]]]);
//# sourceMappingURL=main.fa3f1708.chunk.js.map