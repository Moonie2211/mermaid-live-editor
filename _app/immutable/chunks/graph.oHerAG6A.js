import{a_ as O,aP as A,aS as X,aO as Te,a$ as qe,b0 as Ze,b1 as Xe,b2 as Ee,b3 as G,aM as Q,b4 as Qe,b5 as Oe,b6 as Je,b7 as x,b8 as I,b9 as D,aX as me,aU as ve,ba as We,bb as q,bc as ze,bd as Ve,be as L,aW as ke,bf as en,aN as nn,bg as re,bh as rn,bi as tn,aV as sn,aT as we,aQ as an,bj as j,aK as un,bk as fn,aY as F,aj as te,bl as ie}from"./state.Ctxf--Md.js";function $e(e,n){for(var r=-1,t=e==null?0:e.length,i=Array(t);++r<t;)i[r]=n(e[r],r,e);return i}var on=1/0,se=O?O.prototype:void 0,ae=se?se.toString:void 0;function Pe(e){if(typeof e=="string")return e;if(A(e))return $e(e,Pe)+"";if(X(e))return ae?ae.call(e):"";var n=e+"";return n=="0"&&1/e==-on?"-0":n}function dn(){}function Le(e,n){for(var r=-1,t=e==null?0:e.length;++r<t&&n(e[r],r,e)!==!1;);return e}function hn(e,n,r,t){for(var i=e.length,s=r+-1;++s<i;)if(n(e[s],s,e))return s;return-1}function ln(e){return e!==e}function gn(e,n,r){for(var t=r-1,i=e.length;++t<i;)if(e[t]===n)return t;return-1}function cn(e,n,r){return n===n?gn(e,n,r):hn(e,ln,r)}function _n(e,n){var r=e==null?0:e.length;return!!r&&cn(e,n,0)>-1}function T(e){return Te(e)?qe(e):Ze(e)}var pn=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,bn=/^\w*$/;function J(e,n){if(A(e))return!1;var r=typeof e;return r=="number"||r=="symbol"||r=="boolean"||e==null||X(e)?!0:bn.test(e)||!pn.test(e)||n!=null&&e in Object(n)}var An=500;function yn(e){var n=Xe(e,function(t){return r.size===An&&r.clear(),t}),r=n.cache;return n}var Tn=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,En=/\\(\\)?/g,On=yn(function(e){var n=[];return e.charCodeAt(0)===46&&n.push(""),e.replace(Tn,function(r,t,i,s){n.push(i?s.replace(En,"$1"):t||r)}),n});function mn(e){return e==null?"":Pe(e)}function Ie(e,n){return A(e)?e:J(e,n)?[e]:On(mn(e))}var vn=1/0;function U(e){if(typeof e=="string"||X(e))return e;var n=e+"";return n=="0"&&1/e==-vn?"-0":n}function Ce(e,n){n=Ie(n,e);for(var r=0,t=n.length;e!=null&&r<t;)e=e[U(n[r++])];return r&&r==t?e:void 0}function wn(e,n,r){var t=e==null?void 0:Ce(e,n);return t===void 0?r:t}function W(e,n){for(var r=-1,t=n.length,i=e.length;++r<t;)e[i+r]=n[r];return e}var ue=O?O.isConcatSpreadable:void 0;function $n(e){return A(e)||Ee(e)||!!(ue&&e&&e[ue])}function Pn(e,n,r,t,i){var s=-1,a=e.length;for(r||(r=$n),i||(i=[]);++s<a;){var u=e[s];r(u)?W(i,u):t||(i[i.length]=u)}return i}function Ln(e,n,r,t){var i=-1,s=e==null?0:e.length;for(t&&s&&(r=e[++i]);++i<s;)r=n(r,e[i],i,e);return r}function In(e,n){return e&&G(n,T(n),e)}function Cn(e,n){return e&&G(n,Q(n),e)}function Se(e,n){for(var r=-1,t=e==null?0:e.length,i=0,s=[];++r<t;){var a=e[r];n(a,r,e)&&(s[i++]=a)}return s}function Ne(){return[]}var Sn=Object.prototype,Nn=Sn.propertyIsEnumerable,fe=Object.getOwnPropertySymbols,z=fe?function(e){return e==null?[]:(e=Object(e),Se(fe(e),function(n){return Nn.call(e,n)}))}:Ne;function Fn(e,n){return G(e,z(e),n)}var Mn=Object.getOwnPropertySymbols,Fe=Mn?function(e){for(var n=[];e;)W(n,z(e)),e=Qe(e);return n}:Ne;function Rn(e,n){return G(e,Fe(e),n)}function Me(e,n,r){var t=n(e);return A(e)?t:W(t,r(e))}function Z(e){return Me(e,T,z)}function xn(e){return Me(e,Q,Fe)}var Dn=Object.prototype,Gn=Dn.hasOwnProperty;function Un(e){var n=e.length,r=new e.constructor(n);return n&&typeof e[0]=="string"&&Gn.call(e,"index")&&(r.index=e.index,r.input=e.input),r}function jn(e,n){var r=n?Oe(e.buffer):e.buffer;return new e.constructor(r,e.byteOffset,e.byteLength)}var Bn=/\w*$/;function Kn(e){var n=new e.constructor(e.source,Bn.exec(e));return n.lastIndex=e.lastIndex,n}var oe=O?O.prototype:void 0,de=oe?oe.valueOf:void 0;function Hn(e){return de?Object(de.call(e)):{}}var Yn="[object Boolean]",qn="[object Date]",Zn="[object Map]",Xn="[object Number]",Qn="[object RegExp]",Jn="[object Set]",Wn="[object String]",zn="[object Symbol]",Vn="[object ArrayBuffer]",kn="[object DataView]",er="[object Float32Array]",nr="[object Float64Array]",rr="[object Int8Array]",tr="[object Int16Array]",ir="[object Int32Array]",sr="[object Uint8Array]",ar="[object Uint8ClampedArray]",ur="[object Uint16Array]",fr="[object Uint32Array]";function or(e,n,r){var t=e.constructor;switch(n){case Vn:return Oe(e);case Yn:case qn:return new t(+e);case kn:return jn(e,r);case er:case nr:case rr:case tr:case ir:case sr:case ar:case ur:case fr:return Je(e,r);case Zn:return new t;case Xn:case Wn:return new t(e);case Qn:return Kn(e);case Jn:return new t;case zn:return Hn(e)}}var dr="[object Map]";function hr(e){return x(e)&&I(e)==dr}var he=D&&D.isMap,lr=he?me(he):hr,gr="[object Set]";function cr(e){return x(e)&&I(e)==gr}var le=D&&D.isSet,_r=le?me(le):cr,pr=1,br=2,Ar=4,Re="[object Arguments]",yr="[object Array]",Tr="[object Boolean]",Er="[object Date]",Or="[object Error]",xe="[object Function]",mr="[object GeneratorFunction]",vr="[object Map]",wr="[object Number]",De="[object Object]",$r="[object RegExp]",Pr="[object Set]",Lr="[object String]",Ir="[object Symbol]",Cr="[object WeakMap]",Sr="[object ArrayBuffer]",Nr="[object DataView]",Fr="[object Float32Array]",Mr="[object Float64Array]",Rr="[object Int8Array]",xr="[object Int16Array]",Dr="[object Int32Array]",Gr="[object Uint8Array]",Ur="[object Uint8ClampedArray]",jr="[object Uint16Array]",Br="[object Uint32Array]",d={};d[Re]=d[yr]=d[Sr]=d[Nr]=d[Tr]=d[Er]=d[Fr]=d[Mr]=d[Rr]=d[xr]=d[Dr]=d[vr]=d[wr]=d[De]=d[$r]=d[Pr]=d[Lr]=d[Ir]=d[Gr]=d[Ur]=d[jr]=d[Br]=!0;d[Or]=d[xe]=d[Cr]=!1;function B(e,n,r,t,i,s){var a,u=n&pr,f=n&br,g=n&Ar;if(a!==void 0)return a;if(!ve(e))return e;var l=A(e);if(l){if(a=Un(e),!u)return We(e,a)}else{var o=I(e),h=o==xe||o==mr;if(q(e))return ze(e,u);if(o==De||o==Re||h&&!i){if(a=f||h?{}:Ve(e),!u)return f?Rn(e,Cn(a,e)):Fn(e,In(a,e))}else{if(!d[o])return i?e:{};a=or(e,o,u)}}s||(s=new L);var y=s.get(e);if(y)return y;s.set(e,a),_r(e)?e.forEach(function(c){a.add(B(c,n,r,c,e,s))}):lr(e)&&e.forEach(function(c,_){a.set(_,B(c,n,r,_,e,s))});var p=g?f?xn:Z:f?Q:T,b=l?void 0:p(e);return Le(b||e,function(c,_){b&&(_=c,c=e[_]),ke(a,_,B(c,n,r,_,e,s))}),a}var Kr="__lodash_hash_undefined__";function Hr(e){return this.__data__.set(e,Kr),this}function Yr(e){return this.__data__.has(e)}function C(e){var n=-1,r=e==null?0:e.length;for(this.__data__=new en;++n<r;)this.add(e[n])}C.prototype.add=C.prototype.push=Hr;C.prototype.has=Yr;function qr(e,n){for(var r=-1,t=e==null?0:e.length;++r<t;)if(n(e[r],r,e))return!0;return!1}function Ge(e,n){return e.has(n)}var Zr=1,Xr=2;function Ue(e,n,r,t,i,s){var a=r&Zr,u=e.length,f=n.length;if(u!=f&&!(a&&f>u))return!1;var g=s.get(e),l=s.get(n);if(g&&l)return g==n&&l==e;var o=-1,h=!0,y=r&Xr?new C:void 0;for(s.set(e,n),s.set(n,e);++o<u;){var p=e[o],b=n[o];if(t)var c=a?t(b,p,o,n,e,s):t(p,b,o,e,n,s);if(c!==void 0){if(c)continue;h=!1;break}if(y){if(!qr(n,function(_,m){if(!Ge(y,m)&&(p===_||i(p,_,r,t,s)))return y.push(m)})){h=!1;break}}else if(!(p===b||i(p,b,r,t,s))){h=!1;break}}return s.delete(e),s.delete(n),h}function Qr(e){var n=-1,r=Array(e.size);return e.forEach(function(t,i){r[++n]=[i,t]}),r}function V(e){var n=-1,r=Array(e.size);return e.forEach(function(t){r[++n]=t}),r}var Jr=1,Wr=2,zr="[object Boolean]",Vr="[object Date]",kr="[object Error]",et="[object Map]",nt="[object Number]",rt="[object RegExp]",tt="[object Set]",it="[object String]",st="[object Symbol]",at="[object ArrayBuffer]",ut="[object DataView]",ge=O?O.prototype:void 0,K=ge?ge.valueOf:void 0;function ft(e,n,r,t,i,s,a){switch(r){case ut:if(e.byteLength!=n.byteLength||e.byteOffset!=n.byteOffset)return!1;e=e.buffer,n=n.buffer;case at:return!(e.byteLength!=n.byteLength||!s(new re(e),new re(n)));case zr:case Vr:case nt:return nn(+e,+n);case kr:return e.name==n.name&&e.message==n.message;case rt:case it:return e==n+"";case et:var u=Qr;case tt:var f=t&Jr;if(u||(u=V),e.size!=n.size&&!f)return!1;var g=a.get(e);if(g)return g==n;t|=Wr,a.set(e,n);var l=Ue(u(e),u(n),t,i,s,a);return a.delete(e),l;case st:if(K)return K.call(e)==K.call(n)}return!1}var ot=1,dt=Object.prototype,ht=dt.hasOwnProperty;function lt(e,n,r,t,i,s){var a=r&ot,u=Z(e),f=u.length,g=Z(n),l=g.length;if(f!=l&&!a)return!1;for(var o=f;o--;){var h=u[o];if(!(a?h in n:ht.call(n,h)))return!1}var y=s.get(e),p=s.get(n);if(y&&p)return y==n&&p==e;var b=!0;s.set(e,n),s.set(n,e);for(var c=a;++o<f;){h=u[o];var _=e[h],m=n[h];if(t)var ne=a?t(m,_,h,n,e,s):t(_,m,h,e,n,s);if(!(ne===void 0?_===m||i(_,m,r,t,s):ne)){b=!1;break}c||(c=h=="constructor")}if(b&&!c){var S=e.constructor,N=n.constructor;S!=N&&"constructor"in e&&"constructor"in n&&!(typeof S=="function"&&S instanceof S&&typeof N=="function"&&N instanceof N)&&(b=!1)}return s.delete(e),s.delete(n),b}var gt=1,ce="[object Arguments]",_e="[object Array]",M="[object Object]",ct=Object.prototype,pe=ct.hasOwnProperty;function _t(e,n,r,t,i,s){var a=A(e),u=A(n),f=a?_e:I(e),g=u?_e:I(n);f=f==ce?M:f,g=g==ce?M:g;var l=f==M,o=g==M,h=f==g;if(h&&q(e)){if(!q(n))return!1;a=!0,l=!1}if(h&&!l)return s||(s=new L),a||rn(e)?Ue(e,n,r,t,i,s):ft(e,n,f,r,t,i,s);if(!(r&gt)){var y=l&&pe.call(e,"__wrapped__"),p=o&&pe.call(n,"__wrapped__");if(y||p){var b=y?e.value():e,c=p?n.value():n;return s||(s=new L),i(b,c,r,t,s)}}return h?(s||(s=new L),lt(e,n,r,t,i,s)):!1}function k(e,n,r,t,i){return e===n?!0:e==null||n==null||!x(e)&&!x(n)?e!==e&&n!==n:_t(e,n,r,t,k,i)}var pt=1,bt=2;function At(e,n,r,t){var i=r.length,s=i;if(e==null)return!s;for(e=Object(e);i--;){var a=r[i];if(a[2]?a[1]!==e[a[0]]:!(a[0]in e))return!1}for(;++i<s;){a=r[i];var u=a[0],f=e[u],g=a[1];if(a[2]){if(f===void 0&&!(u in e))return!1}else{var l=new L,o;if(!(o===void 0?k(g,f,pt|bt,t,l):o))return!1}}return!0}function je(e){return e===e&&!ve(e)}function yt(e){for(var n=T(e),r=n.length;r--;){var t=n[r],i=e[t];n[r]=[t,i,je(i)]}return n}function Be(e,n){return function(r){return r==null?!1:r[e]===n&&(n!==void 0||e in Object(r))}}function Tt(e){var n=yt(e);return n.length==1&&n[0][2]?Be(n[0][0],n[0][1]):function(r){return r===e||At(r,e,n)}}function Et(e,n){return e!=null&&n in Object(e)}function Ke(e,n,r){n=Ie(n,e);for(var t=-1,i=n.length,s=!1;++t<i;){var a=U(n[t]);if(!(s=e!=null&&r(e,a)))break;e=e[a]}return s||++t!=i?s:(i=e==null?0:e.length,!!i&&tn(i)&&sn(a,i)&&(A(e)||Ee(e)))}function Ot(e,n){return e!=null&&Ke(e,n,Et)}var mt=1,vt=2;function wt(e,n){return J(e)&&je(n)?Be(U(e),n):function(r){var t=wn(r,e);return t===void 0&&t===n?Ot(r,e):k(n,t,mt|vt)}}function $t(e){return function(n){return n==null?void 0:n[e]}}function Pt(e){return function(n){return Ce(n,e)}}function Lt(e){return J(e)?$t(U(e)):Pt(e)}function He(e){return typeof e=="function"?e:e==null?we:typeof e=="object"?A(e)?wt(e[0],e[1]):Tt(e):Lt(e)}function It(e,n){return e&&an(e,n,T)}function Ct(e,n){return function(r,t){if(r==null)return r;if(!Te(r))return e(r,t);for(var i=r.length,s=-1,a=Object(r);++s<i&&t(a[s],s,a)!==!1;);return r}}var ee=Ct(It);function St(e){return typeof e=="function"?e:we}function v(e,n){var r=A(e)?Le:ee;return r(e,St(n))}function Nt(e,n){var r=[];return ee(e,function(t,i,s){n(t,i,s)&&r.push(t)}),r}function R(e,n){var r=A(e)?Se:Nt;return r(e,He(n))}var Ft=Object.prototype,Mt=Ft.hasOwnProperty;function Rt(e,n){return e!=null&&Mt.call(e,n)}function E(e,n){return e!=null&&Ke(e,n,Rt)}function xt(e,n){return $e(n,function(r){return e[r]})}function H(e){return e==null?[]:xt(e,T(e))}function $(e){return e===void 0}function Dt(e,n,r,t,i){return i(e,function(s,a,u){r=t?(t=!1,s):n(r,s,a,u)}),r}function Gt(e,n,r){var t=A(e)?Ln:Dt,i=arguments.length<3;return t(e,He(n),r,i,ee)}var Ut=1/0,jt=j&&1/V(new j([,-0]))[1]==Ut?function(e){return new j(e)}:dn,Bt=200;function Kt(e,n,r){var t=-1,i=_n,s=e.length,a=!0,u=[],f=u;if(s>=Bt){var g=jt(e);if(g)return V(g);a=!1,i=Ge,f=new C}else f=u;e:for(;++t<s;){var l=e[t],o=l;if(l=l!==0?l:0,a&&o===o){for(var h=f.length;h--;)if(f[h]===o)continue e;u.push(l)}else i(f,o,r)||(f!==u&&f.push(o),u.push(l))}return u}var Ht=un(function(e){return Kt(Pn(e,1,fn,!0))}),Yt="\0",w="\0",be="";class Ye{constructor(n={}){this._isDirected=E(n,"directed")?n.directed:!0,this._isMultigraph=E(n,"multigraph")?n.multigraph:!1,this._isCompound=E(n,"compound")?n.compound:!1,this._label=void 0,this._defaultNodeLabelFn=F(void 0),this._defaultEdgeLabelFn=F(void 0),this._nodes={},this._isCompound&&(this._parent={},this._children={},this._children[w]={}),this._in={},this._preds={},this._out={},this._sucs={},this._edgeObjs={},this._edgeLabels={}}isDirected(){return this._isDirected}isMultigraph(){return this._isMultigraph}isCompound(){return this._isCompound}setGraph(n){return this._label=n,this}graph(){return this._label}setDefaultNodeLabel(n){return te(n)||(n=F(n)),this._defaultNodeLabelFn=n,this}nodeCount(){return this._nodeCount}nodes(){return T(this._nodes)}sources(){var n=this;return R(this.nodes(),function(r){return ie(n._in[r])})}sinks(){var n=this;return R(this.nodes(),function(r){return ie(n._out[r])})}setNodes(n,r){var t=arguments,i=this;return v(n,function(s){t.length>1?i.setNode(s,r):i.setNode(s)}),this}setNode(n,r){return E(this._nodes,n)?(arguments.length>1&&(this._nodes[n]=r),this):(this._nodes[n]=arguments.length>1?r:this._defaultNodeLabelFn(n),this._isCompound&&(this._parent[n]=w,this._children[n]={},this._children[w][n]=!0),this._in[n]={},this._preds[n]={},this._out[n]={},this._sucs[n]={},++this._nodeCount,this)}node(n){return this._nodes[n]}hasNode(n){return E(this._nodes,n)}removeNode(n){var r=this;if(E(this._nodes,n)){var t=function(i){r.removeEdge(r._edgeObjs[i])};delete this._nodes[n],this._isCompound&&(this._removeFromParentsChildList(n),delete this._parent[n],v(this.children(n),function(i){r.setParent(i)}),delete this._children[n]),v(T(this._in[n]),t),delete this._in[n],delete this._preds[n],v(T(this._out[n]),t),delete this._out[n],delete this._sucs[n],--this._nodeCount}return this}setParent(n,r){if(!this._isCompound)throw new Error("Cannot set parent in a non-compound graph");if($(r))r=w;else{r+="";for(var t=r;!$(t);t=this.parent(t))if(t===n)throw new Error("Setting "+r+" as parent of "+n+" would create a cycle");this.setNode(r)}return this.setNode(n),this._removeFromParentsChildList(n),this._parent[n]=r,this._children[r][n]=!0,this}_removeFromParentsChildList(n){delete this._children[this._parent[n]][n]}parent(n){if(this._isCompound){var r=this._parent[n];if(r!==w)return r}}children(n){if($(n)&&(n=w),this._isCompound){var r=this._children[n];if(r)return T(r)}else{if(n===w)return this.nodes();if(this.hasNode(n))return[]}}predecessors(n){var r=this._preds[n];if(r)return T(r)}successors(n){var r=this._sucs[n];if(r)return T(r)}neighbors(n){var r=this.predecessors(n);if(r)return Ht(r,this.successors(n))}isLeaf(n){var r;return this.isDirected()?r=this.successors(n):r=this.neighbors(n),r.length===0}filterNodes(n){var r=new this.constructor({directed:this._isDirected,multigraph:this._isMultigraph,compound:this._isCompound});r.setGraph(this.graph());var t=this;v(this._nodes,function(a,u){n(u)&&r.setNode(u,a)}),v(this._edgeObjs,function(a){r.hasNode(a.v)&&r.hasNode(a.w)&&r.setEdge(a,t.edge(a))});var i={};function s(a){var u=t.parent(a);return u===void 0||r.hasNode(u)?(i[a]=u,u):u in i?i[u]:s(u)}return this._isCompound&&v(r.nodes(),function(a){r.setParent(a,s(a))}),r}setDefaultEdgeLabel(n){return te(n)||(n=F(n)),this._defaultEdgeLabelFn=n,this}edgeCount(){return this._edgeCount}edges(){return H(this._edgeObjs)}setPath(n,r){var t=this,i=arguments;return Gt(n,function(s,a){return i.length>1?t.setEdge(s,a,r):t.setEdge(s,a),a}),this}setEdge(){var n,r,t,i,s=!1,a=arguments[0];typeof a=="object"&&a!==null&&"v"in a?(n=a.v,r=a.w,t=a.name,arguments.length===2&&(i=arguments[1],s=!0)):(n=a,r=arguments[1],t=arguments[3],arguments.length>2&&(i=arguments[2],s=!0)),n=""+n,r=""+r,$(t)||(t=""+t);var u=P(this._isDirected,n,r,t);if(E(this._edgeLabels,u))return s&&(this._edgeLabels[u]=i),this;if(!$(t)&&!this._isMultigraph)throw new Error("Cannot set a named edge when isMultigraph = false");this.setNode(n),this.setNode(r),this._edgeLabels[u]=s?i:this._defaultEdgeLabelFn(n,r,t);var f=qt(this._isDirected,n,r,t);return n=f.v,r=f.w,Object.freeze(f),this._edgeObjs[u]=f,Ae(this._preds[r],n),Ae(this._sucs[n],r),this._in[r][u]=f,this._out[n][u]=f,this._edgeCount++,this}edge(n,r,t){var i=arguments.length===1?Y(this._isDirected,arguments[0]):P(this._isDirected,n,r,t);return this._edgeLabels[i]}hasEdge(n,r,t){var i=arguments.length===1?Y(this._isDirected,arguments[0]):P(this._isDirected,n,r,t);return E(this._edgeLabels,i)}removeEdge(n,r,t){var i=arguments.length===1?Y(this._isDirected,arguments[0]):P(this._isDirected,n,r,t),s=this._edgeObjs[i];return s&&(n=s.v,r=s.w,delete this._edgeLabels[i],delete this._edgeObjs[i],ye(this._preds[r],n),ye(this._sucs[n],r),delete this._in[r][i],delete this._out[n][i],this._edgeCount--),this}inEdges(n,r){var t=this._in[n];if(t){var i=H(t);return r?R(i,function(s){return s.v===r}):i}}outEdges(n,r){var t=this._out[n];if(t){var i=H(t);return r?R(i,function(s){return s.w===r}):i}}nodeEdges(n,r){var t=this.inEdges(n,r);if(t)return t.concat(this.outEdges(n,r))}}Ye.prototype._nodeCount=0;Ye.prototype._edgeCount=0;function Ae(e,n){e[n]?e[n]++:e[n]=1}function ye(e,n){--e[n]||delete e[n]}function P(e,n,r,t){var i=""+n,s=""+r;if(!e&&i>s){var a=i;i=s,s=a}return i+be+s+be+($(t)?Yt:t)}function qt(e,n,r,t){var i=""+n,s=""+r;if(!e&&i>s){var a=i;i=s,s=a}var u={v:i,w:s};return t&&(u.name=t),u}function Y(e,n){return P(e,n.v,n.w,n.name)}export{Ye as G,Pn as a,B as b,He as c,hn as d,ee as e,v as f,$e as g,E as h,$ as i,St as j,T as k,It as l,Ie as m,Ce as n,Ot as o,mn as p,R as q,Gt as r,U as t,H as v};