import{_ as a}from"./plugin-vue_export-helper.21dcd24c.js";import{r,a as c,b as e,e as s,w as o,F as l,d as t,c as d,o as h}from"./app.17608018.js";const _={},u=t("@purista/core"),p=t(" / "),f=t("Exports"),m=t(" / Service"),b=d(`<h1 id="class-service" tabindex="-1"><a class="header-anchor" href="#class-service" aria-hidden="true">#</a> Class: Service</h1><p>Base class for all services. This class provides base functions to work with the event bridge, logging and so on</p><p>Every service should extend this class and should not directly access the eventbridge or other service</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">class</span> <span class="token class-name">MyService</span> <span class="token keyword">extends</span> <span class="token class-name">Service</span> <span class="token punctuation">{</span>

  <span class="token function">constructor</span><span class="token punctuation">(</span>baseLogger<span class="token operator">:</span> Logger<span class="token punctuation">,</span> info<span class="token operator">:</span> ServiceInfoType<span class="token punctuation">,</span> eventBridge<span class="token operator">:</span> EventBridge<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">super</span><span class="token punctuation">(</span> baseLogger<span class="token punctuation">,</span> info<span class="token punctuation">,</span> eventBridge <span class="token punctuation">)</span>
    <span class="token comment">// ... initial service logic</span>
  <span class="token punctuation">}</span>
  <span class="token comment">// ... service methods, functions and logic</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><h2 id="hierarchy" tabindex="-1"><a class="header-anchor" href="#hierarchy" aria-hidden="true">#</a> Hierarchy</h2>`,5),v=e("code",null,"ServiceClass",-1),g=e("p",null,[t("\u21B3 "),e("strong",null,[e("code",null,"Service")])],-1),x=t("\u21B3\u21B3 "),S=e("code",null,"HttpServerService",-1),y=e("h2",{id:"table-of-contents",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#table-of-contents","aria-hidden":"true"},"#"),t(" Table of contents")],-1),k=e("h3",{id:"constructors",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#constructors","aria-hidden":"true"},"#"),t(" Constructors")],-1),w=t("constructor"),C=e("h3",{id:"properties",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#properties","aria-hidden":"true"},"#"),t(" Properties")],-1),P=t("commands"),I=t("eventBridge"),L=t("info"),D=t("log"),T=t("mainSubscriptionId"),B=t("pendingInvocations"),E=t("subscriptions"),R=t("ttlInterval"),M=e("h3",{id:"accessors",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#accessors","aria-hidden":"true"},"#"),t(" Accessors")],-1),N=t("serviceInfo"),F=e("h3",{id:"methods",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#methods","aria-hidden":"true"},"#"),t(" Methods")],-1),q=t("connectToEventBridge"),O=t("defaultMessageHandler"),j=t("destroy"),H=t("executeCommand"),V=t("handleSubscriptionMessage"),A=t("invoke"),G=t("registerCommand"),U=t("rejectExpiredInvocations"),z=t("sendServiceInfo"),J=t("start"),K=t("subscribe"),Q=d('<h2 id="constructors-1" tabindex="-1"><a class="header-anchor" href="#constructors-1" aria-hidden="true">#</a> Constructors</h2><h3 id="constructor" tabindex="-1"><a class="header-anchor" href="#constructor" aria-hidden="true">#</a> constructor</h3><p>\u2022 <strong>new Service</strong>(<code>baseLogger</code>, <code>info</code>, <code>eventBridge</code>, <code>commandFunctions</code>, <code>subscriptionList</code>)</p><h4 id="parameters" tabindex="-1"><a class="header-anchor" href="#parameters" aria-hidden="true">#</a> Parameters</h4>',4),W=e("thead",null,[e("tr",null,[e("th",{style:{"text-align":"left"}},"Name"),e("th",{style:{"text-align":"left"}},"Type")])],-1),X=e("td",{style:{"text-align":"left"}},[e("code",null,"baseLogger")],-1),Y={style:{"text-align":"left"}},Z=e("code",null,"Logger",-1),$=e("td",{style:{"text-align":"left"}},[e("code",null,"info")],-1),ee={style:{"text-align":"left"}},te=e("code",null,"ServiceInfoType",-1),se=e("td",{style:{"text-align":"left"}},[e("code",null,"eventBridge")],-1),ne={style:{"text-align":"left"}},oe=e("code",null,"EventBridge",-1),ie=e("td",{style:{"text-align":"left"}},[e("code",null,"commandFunctions")],-1),de={style:{"text-align":"left"}},re=e("code",null,"CommandDefinition",-1),ae=t("<"),ce=e("code",null,"Record",-1),le=t("<"),he=e("code",null,"string",-1),_e=t(", "),ue=e("code",null,"unknown",-1),pe=t(">, "),fe=e("code",null,"CommandFunction",-1),me=t("<"),be=e("code",null,"Service",-1),ve=t(", "),ge=e("code",null,"unknown",-1),xe=t(", "),Se=e("code",null,"unknown",-1),ye=t(", "),ke=e("code",null,"unknown",-1),we=t(">>[]"),Ce=e("td",{style:{"text-align":"left"}},[e("code",null,"subscriptionList")],-1),Pe={style:{"text-align":"left"}},Ie=e("code",null,"SubscriptionDefinition",-1),Le=t("<"),De=e("code",null,"EBMessage",-1),Te=t(">[]"),Be=e("h4",{id:"overrides",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#overrides","aria-hidden":"true"},"#"),t(" Overrides")],-1),Ee=t("ServiceClass"),Re=t("."),Me=t("constructor"),Ne=e("h4",{id:"defined-in",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#defined-in","aria-hidden":"true"},"#"),t(" Defined in")],-1),Fe={href:"https://github.com/sebastianwessel/purista/blob/9753133/src/core/Service/Service.impl.ts#L74",target:"_blank",rel:"noopener noreferrer"},qe=t("src/core/Service/Service.impl.ts:74"),Oe=e("h2",{id:"properties-1",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#properties-1","aria-hidden":"true"},"#"),t(" Properties")],-1),je=e("h3",{id:"commands",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#commands","aria-hidden":"true"},"#"),t(" commands")],-1),He=t("\u2022 "),Ve=e("code",null,"Protected",-1),Ae=t(),Ge=e("strong",null,"commands",-1),Ue=t(": "),ze=e("code",null,"Map",-1),Je=t("<"),Ke=e("code",null,"string",-1),Qe=t(", "),We=e("code",null,"CommandDefinition",-1),Xe=t("<"),Ye=e("code",null,"Record",-1),Ze=t("<"),$e=e("code",null,"string",-1),et=t(", "),tt=e("code",null,"unknown",-1),st=t(">, "),nt=e("code",null,"CommandFunction",-1),ot=t("<"),it=e("code",null,"Service",-1),dt=t(", "),rt=e("code",null,"unknown",-1),at=t(", "),ct=e("code",null,"unknown",-1),lt=t(", "),ht=e("code",null,"unknown",-1),_t=t(">>>"),ut=e("h4",{id:"defined-in-1",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#defined-in-1","aria-hidden":"true"},"#"),t(" Defined in")],-1),pt={href:"https://github.com/sebastianwessel/purista/blob/9753133/src/core/Service/Service.impl.ts#L70",target:"_blank",rel:"noopener noreferrer"},ft=t("src/core/Service/Service.impl.ts:70"),mt=e("hr",null,null,-1),bt=e("h3",{id:"eventbridge",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#eventbridge","aria-hidden":"true"},"#"),t(" eventBridge")],-1),vt=t("\u2022 "),gt=e("code",null,"Protected",-1),xt=t(),St=e("strong",null,"eventBridge",-1),yt=t(": "),kt=e("code",null,"EventBridge",-1),wt=e("p",null,"The event bridge instance",-1),Ct=e("h4",{id:"overrides-1",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#overrides-1","aria-hidden":"true"},"#"),t(" Overrides")],-1),Pt=t("ServiceClass"),It=t("."),Lt=t("eventBridge"),Dt=e("h4",{id:"defined-in-2",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#defined-in-2","aria-hidden":"true"},"#"),t(" Defined in")],-1),Tt={href:"https://github.com/sebastianwessel/purista/blob/9753133/src/core/Service/Service.impl.ts#L62",target:"_blank",rel:"noopener noreferrer"},Bt=t("src/core/Service/Service.impl.ts:62"),Et=e("hr",null,null,-1),Rt=e("h3",{id:"info",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#info","aria-hidden":"true"},"#"),t(" info")],-1),Mt=t("\u2022 "),Nt=e("strong",null,"info",-1),Ft=t(": "),qt=e("code",null,"ServiceInfoType",-1),Ot=e("p",null,"General service info Service name, service version and some human readable description",-1),jt=e("h4",{id:"overrides-2",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#overrides-2","aria-hidden":"true"},"#"),t(" Overrides")],-1),Ht=t("ServiceClass"),Vt=t("."),At=t("info"),Gt=e("h4",{id:"defined-in-3",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#defined-in-3","aria-hidden":"true"},"#"),t(" Defined in")],-1),Ut={href:"https://github.com/sebastianwessel/purista/blob/9753133/src/core/Service/Service.impl.ts#L59",target:"_blank",rel:"noopener noreferrer"},zt=t("src/core/Service/Service.impl.ts:59"),Jt=e("hr",null,null,-1),Kt=e("h3",{id:"log",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#log","aria-hidden":"true"},"#"),t(" log")],-1),Qt=t("\u2022 "),Wt=e("strong",null,"log",-1),Xt=t(": "),Yt=e("code",null,"Logger",-1),Zt=e("h4",{id:"defined-in-4",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#defined-in-4","aria-hidden":"true"},"#"),t(" Defined in")],-1),$t={href:"https://github.com/sebastianwessel/purista/blob/9753133/src/core/Service/Service.impl.ts#L60",target:"_blank",rel:"noopener noreferrer"},es=t("src/core/Service/Service.impl.ts:60"),ts=d('<hr><h3 id="mainsubscriptionid" tabindex="-1"><a class="header-anchor" href="#mainsubscriptionid" aria-hidden="true">#</a> mainSubscriptionId</h3><p>\u2022 <code>Protected</code> <strong>mainSubscriptionId</strong>: <code>undefined</code> | <code>string</code></p><h4 id="defined-in-5" tabindex="-1"><a class="header-anchor" href="#defined-in-5" aria-hidden="true">#</a> Defined in</h4>',4),ss={href:"https://github.com/sebastianwessel/purista/blob/9753133/src/core/Service/Service.impl.ts#L72",target:"_blank",rel:"noopener noreferrer"},ns=t("src/core/Service/Service.impl.ts:72"),os=d('<hr><h3 id="pendinginvocations" tabindex="-1"><a class="header-anchor" href="#pendinginvocations" aria-hidden="true">#</a> pendingInvocations</h3><p>\u2022 <code>Protected</code> <strong>pendingInvocations</strong>: <code>Map</code>&lt;<code>string</code>, <code>PendigInvocation</code>&gt;</p><h4 id="defined-in-6" tabindex="-1"><a class="header-anchor" href="#defined-in-6" aria-hidden="true">#</a> Defined in</h4>',4),is={href:"https://github.com/sebastianwessel/purista/blob/9753133/src/core/Service/Service.impl.ts#L64",target:"_blank",rel:"noopener noreferrer"},ds=t("src/core/Service/Service.impl.ts:64"),rs=e("hr",null,null,-1),as=e("h3",{id:"subscriptions",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#subscriptions","aria-hidden":"true"},"#"),t(" subscriptions")],-1),cs=t("\u2022 "),ls=e("code",null,"Protected",-1),hs=t(),_s=e("strong",null,"subscriptions",-1),us=t(": "),ps=e("code",null,"Map",-1),fs=t("<"),ms=e("code",null,"string",-1),bs=t(", "),vs=e("code",null,"SubscriptionDefinition",-1),gs=t("<"),xs=e("code",null,"EBMessage",-1),Ss=t(">>"),ys=e("h4",{id:"defined-in-7",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#defined-in-7","aria-hidden":"true"},"#"),t(" Defined in")],-1),ks={href:"https://github.com/sebastianwessel/purista/blob/9753133/src/core/Service/Service.impl.ts#L68",target:"_blank",rel:"noopener noreferrer"},ws=t("src/core/Service/Service.impl.ts:68"),Cs=e("hr",null,null,-1),Ps=e("h3",{id:"ttlinterval",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#ttlinterval","aria-hidden":"true"},"#"),t(" ttlInterval")],-1),Is=e("p",null,[t("\u2022 "),e("code",null,"Protected"),t(),e("strong",null,"ttlInterval"),t(": "),e("code",null,"Timer")],-1),Ls=e("h4",{id:"defined-in-8",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#defined-in-8","aria-hidden":"true"},"#"),t(" Defined in")],-1),Ds={href:"https://github.com/sebastianwessel/purista/blob/9753133/src/core/Service/Service.impl.ts#L66",target:"_blank",rel:"noopener noreferrer"},Ts=t("src/core/Service/Service.impl.ts:66"),Bs=e("h2",{id:"accessors-1",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#accessors-1","aria-hidden":"true"},"#"),t(" Accessors")],-1),Es=e("h3",{id:"serviceinfo",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#serviceinfo","aria-hidden":"true"},"#"),t(" serviceInfo")],-1),Rs=t("\u2022 "),Ms=e("code",null,"get",-1),Ns=t(),Fs=e("strong",null,"serviceInfo",-1),qs=t("(): "),Os=e("code",null,"ServiceInfoType",-1),js=e("p",null,"Get service info",-1),Hs=e("h4",{id:"returns",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#returns","aria-hidden":"true"},"#"),t(" Returns")],-1),Vs=e("code",null,"ServiceInfoType",-1),As=e("h4",{id:"inherited-from",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#inherited-from","aria-hidden":"true"},"#"),t(" Inherited from")],-1),Gs=e("p",null,"ServiceClass.serviceInfo",-1),Us=e("h4",{id:"defined-in-9",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#defined-in-9","aria-hidden":"true"},"#"),t(" Defined in")],-1),zs={href:"https://github.com/sebastianwessel/purista/blob/9753133/src/core/types/ServiceClass.ts#L32",target:"_blank",rel:"noopener noreferrer"},Js=t("src/core/types/ServiceClass.ts:32"),Ks=d('<h2 id="methods-1" tabindex="-1"><a class="header-anchor" href="#methods-1" aria-hidden="true">#</a> Methods</h2><h3 id="connecttoeventbridge" tabindex="-1"><a class="header-anchor" href="#connecttoeventbridge" aria-hidden="true">#</a> connectToEventBridge</h3><p>\u25B8 <code>Protected</code> <strong>connectToEventBridge</strong>(<code>commandFunctions</code>, <code>subscriptions</code>): <code>Promise</code>&lt;<code>void</code>&gt;</p><p>Connect service to event bridge to receive commands and command responses</p><h4 id="parameters-1" tabindex="-1"><a class="header-anchor" href="#parameters-1" aria-hidden="true">#</a> Parameters</h4>',5),Qs=e("thead",null,[e("tr",null,[e("th",{style:{"text-align":"left"}},"Name"),e("th",{style:{"text-align":"left"}},"Type")])],-1),Ws=e("td",{style:{"text-align":"left"}},[e("code",null,"commandFunctions")],-1),Xs={style:{"text-align":"left"}},Ys=e("code",null,"CommandDefinition",-1),Zs=t("<"),$s=e("code",null,"Record",-1),en=t("<"),tn=e("code",null,"string",-1),sn=t(", "),nn=e("code",null,"unknown",-1),on=t(">, "),dn=e("code",null,"CommandFunction",-1),rn=t("<"),an=e("code",null,"Service",-1),cn=t(", "),ln=e("code",null,"unknown",-1),hn=t(", "),_n=e("code",null,"unknown",-1),un=t(", "),pn=e("code",null,"unknown",-1),fn=t(">>[]"),mn=e("td",{style:{"text-align":"left"}},[e("code",null,"subscriptions")],-1),bn={style:{"text-align":"left"}},vn=e("code",null,"SubscriptionDefinition",-1),gn=t("<"),xn=e("code",null,"EBMessage",-1),Sn=t(">[]"),yn=e("h4",{id:"returns-1",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#returns-1","aria-hidden":"true"},"#"),t(" Returns")],-1),kn=e("p",null,[e("code",null,"Promise"),t("<"),e("code",null,"void"),t(">")],-1),wn=e("h4",{id:"defined-in-10",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#defined-in-10","aria-hidden":"true"},"#"),t(" Defined in")],-1),Cn={href:"https://github.com/sebastianwessel/purista/blob/9753133/src/core/Service/Service.impl.ts#L101",target:"_blank",rel:"noopener noreferrer"},Pn=t("src/core/Service/Service.impl.ts:101"),In=d('<hr><h3 id="defaultmessagehandler" tabindex="-1"><a class="header-anchor" href="#defaultmessagehandler" aria-hidden="true">#</a> defaultMessageHandler</h3><p>\u25B8 <code>Protected</code> <strong>defaultMessageHandler</strong>(<code>subscriptionId</code>, <code>message</code>): <code>Promise</code>&lt;<code>void</code>&gt;</p><p>There is one subscription with a specific id which set during init. This subscriptions handles all incoming commands and invoke responses.</p><p>If the handler receives a message for a subscription with different id, the message relates to a regular subscription (passiv listener)</p><h4 id="parameters-2" tabindex="-1"><a class="header-anchor" href="#parameters-2" aria-hidden="true">#</a> Parameters</h4>',6),Ln=e("thead",null,[e("tr",null,[e("th",{style:{"text-align":"left"}},"Name"),e("th",{style:{"text-align":"left"}},"Type"),e("th",{style:{"text-align":"left"}},"Description")])],-1),Dn=e("tr",null,[e("td",{style:{"text-align":"left"}},[e("code",null,"subscriptionId")]),e("td",{style:{"text-align":"left"}},[e("code",null,"string")]),e("td",{style:{"text-align":"left"}},"id of subscription")],-1),Tn=e("td",{style:{"text-align":"left"}},[e("code",null,"message")],-1),Bn={style:{"text-align":"left"}},En=e("code",null,"EBMessage",-1),Rn=e("td",{style:{"text-align":"left"}},"event bridge message",-1),Mn=e("h4",{id:"returns-2",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#returns-2","aria-hidden":"true"},"#"),t(" Returns")],-1),Nn=e("p",null,[e("code",null,"Promise"),t("<"),e("code",null,"void"),t(">")],-1),Fn=e("h4",{id:"defined-in-11",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#defined-in-11","aria-hidden":"true"},"#"),t(" Defined in")],-1),qn={href:"https://github.com/sebastianwessel/purista/blob/9753133/src/core/Service/Service.impl.ts#L154",target:"_blank",rel:"noopener noreferrer"},On=t("src/core/Service/Service.impl.ts:154"),jn=d('<hr><h3 id="destroy" tabindex="-1"><a class="header-anchor" href="#destroy" aria-hidden="true">#</a> destroy</h3><p>\u25B8 <strong>destroy</strong>(): <code>Promise</code>&lt;<code>void</code>&gt;</p><p>Shut down the service</p><h4 id="returns-3" tabindex="-1"><a class="header-anchor" href="#returns-3" aria-hidden="true">#</a> Returns</h4><p><code>Promise</code>&lt;<code>void</code>&gt;</p><h4 id="overrides-3" tabindex="-1"><a class="header-anchor" href="#overrides-3" aria-hidden="true">#</a> Overrides</h4>',7),Hn=t("ServiceClass"),Vn=t("."),An=t("destroy"),Gn=e("h4",{id:"defined-in-12",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#defined-in-12","aria-hidden":"true"},"#"),t(" Defined in")],-1),Un={href:"https://github.com/sebastianwessel/purista/blob/9753133/src/core/Service/Service.impl.ts#L307",target:"_blank",rel:"noopener noreferrer"},zn=t("src/core/Service/Service.impl.ts:307"),Jn=d('<hr><h3 id="executecommand" tabindex="-1"><a class="header-anchor" href="#executecommand" aria-hidden="true">#</a> executeCommand</h3><p>\u25B8 <code>Protected</code> <strong>executeCommand</strong>(<code>_subscriptionId</code>, <code>message</code>): <code>Promise</code>&lt;<code>void</code>&gt;</p><p>Called when a command is received by the service</p><h4 id="parameters-3" tabindex="-1"><a class="header-anchor" href="#parameters-3" aria-hidden="true">#</a> Parameters</h4>',5),Kn=e("thead",null,[e("tr",null,[e("th",{style:{"text-align":"left"}},"Name"),e("th",{style:{"text-align":"left"}},"Type")])],-1),Qn=e("tr",null,[e("td",{style:{"text-align":"left"}},[e("code",null,"_subscriptionId")]),e("td",{style:{"text-align":"left"}},[e("code",null,"string")])],-1),Wn=e("td",{style:{"text-align":"left"}},[e("code",null,"message")],-1),Xn={style:{"text-align":"left"}},Yn=e("code",null,"Command",-1),Zn=t("<"),$n=e("code",null,"unknown",-1),eo=t(", "),to=e("code",null,"Record",-1),so=t("<"),no=e("code",null,"string",-1),oo=t(", "),io=e("code",null,"unknown",-1),ro=t(">>"),ao=e("h4",{id:"returns-4",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#returns-4","aria-hidden":"true"},"#"),t(" Returns")],-1),co=e("p",null,[e("code",null,"Promise"),t("<"),e("code",null,"void"),t(">")],-1),lo=e("h4",{id:"defined-in-13",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#defined-in-13","aria-hidden":"true"},"#"),t(" Defined in")],-1),ho={href:"https://github.com/sebastianwessel/purista/blob/9753133/src/core/Service/Service.impl.ts#L234",target:"_blank",rel:"noopener noreferrer"},_o=t("src/core/Service/Service.impl.ts:234"),uo=d('<hr><h3 id="handlesubscriptionmessage" tabindex="-1"><a class="header-anchor" href="#handlesubscriptionmessage" aria-hidden="true">#</a> handleSubscriptionMessage</h3><p>\u25B8 <code>Protected</code> <strong>handleSubscriptionMessage</strong>(<code>subscriptionId</code>, <code>message</code>): <code>Promise</code>&lt;<code>void</code>&gt;</p><h4 id="parameters-4" tabindex="-1"><a class="header-anchor" href="#parameters-4" aria-hidden="true">#</a> Parameters</h4>',4),po=e("thead",null,[e("tr",null,[e("th",{style:{"text-align":"left"}},"Name"),e("th",{style:{"text-align":"left"}},"Type")])],-1),fo=e("tr",null,[e("td",{style:{"text-align":"left"}},[e("code",null,"subscriptionId")]),e("td",{style:{"text-align":"left"}},[e("code",null,"string")])],-1),mo=e("td",{style:{"text-align":"left"}},[e("code",null,"message")],-1),bo={style:{"text-align":"left"}},vo=e("code",null,"EBMessage",-1),go=e("h4",{id:"returns-5",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#returns-5","aria-hidden":"true"},"#"),t(" Returns")],-1),xo=e("p",null,[e("code",null,"Promise"),t("<"),e("code",null,"void"),t(">")],-1),So=e("h4",{id:"defined-in-14",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#defined-in-14","aria-hidden":"true"},"#"),t(" Defined in")],-1),yo={href:"https://github.com/sebastianwessel/purista/blob/9753133/src/core/Service/Service.impl.ts#L260",target:"_blank",rel:"noopener noreferrer"},ko=t("src/core/Service/Service.impl.ts:260"),wo=d('<hr><h3 id="invoke" tabindex="-1"><a class="header-anchor" href="#invoke" aria-hidden="true">#</a> invoke</h3><p>\u25B8 <strong>invoke</strong>&lt;<code>T</code>&gt;(<code>input</code>, <code>ttl?</code>): <code>Promise</code>&lt;<code>T</code>&gt;</p><p>Invoke a service over event bridge and expect some result from called service Used for service(-function) to service(-function) communication</p><h4 id="type-parameters" tabindex="-1"><a class="header-anchor" href="#type-parameters" aria-hidden="true">#</a> Type parameters</h4><table><thead><tr><th style="text-align:left;">Name</th></tr></thead><tbody><tr><td style="text-align:left;"><code>T</code></td></tr></tbody></table><h4 id="parameters-5" tabindex="-1"><a class="header-anchor" href="#parameters-5" aria-hidden="true">#</a> Parameters</h4>',7),Co=e("thead",null,[e("tr",null,[e("th",{style:{"text-align":"left"}},"Name"),e("th",{style:{"text-align":"left"}},"Type")])],-1),Po=e("td",{style:{"text-align":"left"}},[e("code",null,"input")],-1),Io={style:{"text-align":"left"}},Lo=e("code",null,"Omit",-1),Do=t("<"),To=e("code",null,"Command",-1),Bo=d("&lt;<code>unknown</code>, <code>Record</code>&lt;<code>string</code>, <code>unknown</code>&gt;&gt;, <code>&quot;id&quot;</code> | <code>&quot;sender&quot;</code> | <code>&quot;messageType&quot;</code> | <code>&quot;timestamp&quot;</code> | <code>&quot;correlationId&quot;</code>&gt;",19),Eo=e("tr",null,[e("td",{style:{"text-align":"left"}},[e("code",null,"ttl")]),e("td",{style:{"text-align":"left"}},[e("code",null,"number")])],-1),Ro=e("h4",{id:"returns-6",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#returns-6","aria-hidden":"true"},"#"),t(" Returns")],-1),Mo=e("p",null,[e("code",null,"Promise"),t("<"),e("code",null,"T"),t(">")],-1),No=e("h4",{id:"overrides-4",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#overrides-4","aria-hidden":"true"},"#"),t(" Overrides")],-1),Fo=t("ServiceClass"),qo=t("."),Oo=t("invoke"),jo=e("h4",{id:"defined-in-15",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#defined-in-15","aria-hidden":"true"},"#"),t(" Defined in")],-1),Ho={href:"https://github.com/sebastianwessel/purista/blob/9753133/src/core/Service/Service.impl.ts#L184",target:"_blank",rel:"noopener noreferrer"},Vo=t("src/core/Service/Service.impl.ts:184"),Ao=d('<hr><h3 id="registercommand" tabindex="-1"><a class="header-anchor" href="#registercommand" aria-hidden="true">#</a> registerCommand</h3><p>\u25B8 <code>Protected</code> <strong>registerCommand</strong>(<code>commandDefinition</code>): <code>Promise</code>&lt;<code>void</code>&gt;</p><p>Register a new command (function) for this service</p><h4 id="parameters-6" tabindex="-1"><a class="header-anchor" href="#parameters-6" aria-hidden="true">#</a> Parameters</h4>',5),Go=e("thead",null,[e("tr",null,[e("th",{style:{"text-align":"left"}},"Name"),e("th",{style:{"text-align":"left"}},"Type")])],-1),Uo=e("td",{style:{"text-align":"left"}},[e("code",null,"commandDefinition")],-1),zo={style:{"text-align":"left"}},Jo=e("code",null,"CommandDefinition",-1),Ko=t("<"),Qo=e("code",null,"Record",-1),Wo=t("<"),Xo=e("code",null,"string",-1),Yo=t(", "),Zo=e("code",null,"unknown",-1),$o=t(">, "),ei=e("code",null,"CommandFunction",-1),ti=t("<"),si=e("code",null,"Service",-1),ni=t(", "),oi=e("code",null,"unknown",-1),ii=t(", "),di=e("code",null,"unknown",-1),ri=t(", "),ai=e("code",null,"unknown",-1),ci=t(">>"),li=e("h4",{id:"returns-7",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#returns-7","aria-hidden":"true"},"#"),t(" Returns")],-1),hi=e("p",null,[e("code",null,"Promise"),t("<"),e("code",null,"void"),t(">")],-1),_i=e("h4",{id:"overrides-5",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#overrides-5","aria-hidden":"true"},"#"),t(" Overrides")],-1),ui=t("ServiceClass"),pi=t("."),fi=t("registerCommand"),mi=e("h4",{id:"defined-in-16",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#defined-in-16","aria-hidden":"true"},"#"),t(" Defined in")],-1),bi={href:"https://github.com/sebastianwessel/purista/blob/9753133/src/core/Service/Service.impl.ts#L294",target:"_blank",rel:"noopener noreferrer"},vi=t("src/core/Service/Service.impl.ts:294"),gi=d('<hr><h3 id="rejectexpiredinvocations" tabindex="-1"><a class="header-anchor" href="#rejectexpiredinvocations" aria-hidden="true">#</a> rejectExpiredInvocations</h3><p>\u25B8 <code>Protected</code> <strong>rejectExpiredInvocations</strong>(): <code>void</code></p><p>Function which runs in internval to reject all invocations which are timed out</p><h4 id="returns-8" tabindex="-1"><a class="header-anchor" href="#returns-8" aria-hidden="true">#</a> Returns</h4><p><code>void</code></p><h4 id="defined-in-17" tabindex="-1"><a class="header-anchor" href="#defined-in-17" aria-hidden="true">#</a> Defined in</h4>',7),xi={href:"https://github.com/sebastianwessel/purista/blob/9753133/src/core/Service/Service.impl.ts#L280",target:"_blank",rel:"noopener noreferrer"},Si=t("src/core/Service/Service.impl.ts:280"),yi=d('<hr><h3 id="sendserviceinfo" tabindex="-1"><a class="header-anchor" href="#sendserviceinfo" aria-hidden="true">#</a> sendServiceInfo</h3><p>\u25B8 <strong>sendServiceInfo</strong>(<code>infoType</code>, <code>target?</code>, <code>data?</code>): <code>Promise</code>&lt;<code>void</code>&gt;</p><p>Broadcast service info message</p><h4 id="parameters-7" tabindex="-1"><a class="header-anchor" href="#parameters-7" aria-hidden="true">#</a> Parameters</h4>',5),ki=e("thead",null,[e("tr",null,[e("th",{style:{"text-align":"left"}},"Name"),e("th",{style:{"text-align":"left"}},"Type"),e("th",{style:{"text-align":"left"}},"Description")])],-1),wi=e("td",{style:{"text-align":"left"}},[e("code",null,"infoType")],-1),Ci={style:{"text-align":"left"}},Pi=e("code",null,"InfoMessageType",-1),Ii=e("td",{style:{"text-align":"left"}},"type of info message",-1),Li=e("tr",null,[e("td",{style:{"text-align":"left"}},[e("code",null,"target?")]),e("td",{style:{"text-align":"left"}},[e("code",null,"string")]),e("td",{style:{"text-align":"left"}},"function name is need in messages like InfoServiceFunctionAdded")],-1),Di=e("tr",null,[e("td",{style:{"text-align":"left"}},[e("code",null,"data?")]),e("td",{style:{"text-align":"left"}},[e("code",null,"Record"),t("<"),e("code",null,"string"),t(", "),e("code",null,"unknown"),t(">")]),e("td",{style:{"text-align":"left"}},"-")],-1),Ti=e("h4",{id:"returns-9",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#returns-9","aria-hidden":"true"},"#"),t(" Returns")],-1),Bi=e("p",null,[e("code",null,"Promise"),t("<"),e("code",null,"void"),t(">")],-1),Ei=e("h4",{id:"defined-in-18",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#defined-in-18","aria-hidden":"true"},"#"),t(" Defined in")],-1),Ri={href:"https://github.com/sebastianwessel/purista/blob/9753133/src/core/Service/Service.impl.ts#L138",target:"_blank",rel:"noopener noreferrer"},Mi=t("src/core/Service/Service.impl.ts:138"),Ni=d('<hr><h3 id="start" tabindex="-1"><a class="header-anchor" href="#start" aria-hidden="true">#</a> start</h3><p>\u25B8 <strong>start</strong>(): <code>Promise</code>&lt;<code>void</code>&gt;</p><p>It connects to the event bridge and subscribes to the topics that are in the subscription list.</p><h4 id="returns-10" tabindex="-1"><a class="header-anchor" href="#returns-10" aria-hidden="true">#</a> Returns</h4><p><code>Promise</code>&lt;<code>void</code>&gt;</p><h4 id="defined-in-19" tabindex="-1"><a class="header-anchor" href="#defined-in-19" aria-hidden="true">#</a> Defined in</h4>',7),Fi={href:"https://github.com/sebastianwessel/purista/blob/9753133/src/core/Service/Service.impl.ts#L94",target:"_blank",rel:"noopener noreferrer"},qi=t("src/core/Service/Service.impl.ts:94"),Oi=d('<hr><h3 id="subscribe" tabindex="-1"><a class="header-anchor" href="#subscribe" aria-hidden="true">#</a> subscribe</h3><p>\u25B8 <code>Protected</code> <strong>subscribe</strong>(<code>subscription</code>): <code>Promise</code>&lt;<code>string</code>&gt;</p><p>Send subscription request to event bridge Creates a new subscription</p><h4 id="parameters-8" tabindex="-1"><a class="header-anchor" href="#parameters-8" aria-hidden="true">#</a> Parameters</h4>',5),ji=e("thead",null,[e("tr",null,[e("th",{style:{"text-align":"left"}},"Name"),e("th",{style:{"text-align":"left"}},"Type")])],-1),Hi=e("td",{style:{"text-align":"left"}},[e("code",null,"subscription")],-1),Vi={style:{"text-align":"left"}},Ai=e("code",null,"SubscriptionDefinition",-1),Gi=t("<"),Ui=e("code",null,"EBMessage",-1),zi=t(">"),Ji=e("h4",{id:"returns-11",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#returns-11","aria-hidden":"true"},"#"),t(" Returns")],-1),Ki=e("p",null,[e("code",null,"Promise"),t("<"),e("code",null,"string"),t(">")],-1),Qi=e("h4",{id:"overrides-6",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#overrides-6","aria-hidden":"true"},"#"),t(" Overrides")],-1),Wi=t("ServiceClass"),Xi=t("."),Yi=t("subscribe"),Zi=e("h4",{id:"defined-in-20",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#defined-in-20","aria-hidden":"true"},"#"),t(" Defined in")],-1),$i={href:"https://github.com/sebastianwessel/purista/blob/9753133/src/core/Service/Service.impl.ts#L211",target:"_blank",rel:"noopener noreferrer"},ed=t("src/core/Service/Service.impl.ts:211");function td(sd,nd){const n=r("RouterLink"),i=r("ExternalLinkIcon");return h(),c(l,null,[e("p",null,[s(n,{to:"/api/"},{default:o(()=>[u]),_:1}),p,s(n,{to:"/api/modules.html"},{default:o(()=>[f]),_:1}),m]),b,e("ul",null,[e("li",null,[e("p",null,[s(n,{to:"/api/classes/ServiceClass.html"},{default:o(()=>[v]),_:1})]),g,e("p",null,[x,s(n,{to:"/api/classes/HttpServerService.html"},{default:o(()=>[S]),_:1})])])]),y,k,e("ul",null,[e("li",null,[s(n,{to:"/api/classes/Service.html#constructor"},{default:o(()=>[w]),_:1})])]),C,e("ul",null,[e("li",null,[s(n,{to:"/api/classes/Service.html#commands"},{default:o(()=>[P]),_:1})]),e("li",null,[s(n,{to:"/api/classes/Service.html#eventbridge"},{default:o(()=>[I]),_:1})]),e("li",null,[s(n,{to:"/api/classes/Service.html#info"},{default:o(()=>[L]),_:1})]),e("li",null,[s(n,{to:"/api/classes/Service.html#log"},{default:o(()=>[D]),_:1})]),e("li",null,[s(n,{to:"/api/classes/Service.html#mainsubscriptionid"},{default:o(()=>[T]),_:1})]),e("li",null,[s(n,{to:"/api/classes/Service.html#pendinginvocations"},{default:o(()=>[B]),_:1})]),e("li",null,[s(n,{to:"/api/classes/Service.html#subscriptions"},{default:o(()=>[E]),_:1})]),e("li",null,[s(n,{to:"/api/classes/Service.html#ttlinterval"},{default:o(()=>[R]),_:1})])]),M,e("ul",null,[e("li",null,[s(n,{to:"/api/classes/Service.html#serviceinfo"},{default:o(()=>[N]),_:1})])]),F,e("ul",null,[e("li",null,[s(n,{to:"/api/classes/Service.html#connecttoeventbridge"},{default:o(()=>[q]),_:1})]),e("li",null,[s(n,{to:"/api/classes/Service.html#defaultmessagehandler"},{default:o(()=>[O]),_:1})]),e("li",null,[s(n,{to:"/api/classes/Service.html#destroy"},{default:o(()=>[j]),_:1})]),e("li",null,[s(n,{to:"/api/classes/Service.html#executecommand"},{default:o(()=>[H]),_:1})]),e("li",null,[s(n,{to:"/api/classes/Service.html#handlesubscriptionmessage"},{default:o(()=>[V]),_:1})]),e("li",null,[s(n,{to:"/api/classes/Service.html#invoke"},{default:o(()=>[A]),_:1})]),e("li",null,[s(n,{to:"/api/classes/Service.html#registercommand"},{default:o(()=>[G]),_:1})]),e("li",null,[s(n,{to:"/api/classes/Service.html#rejectexpiredinvocations"},{default:o(()=>[U]),_:1})]),e("li",null,[s(n,{to:"/api/classes/Service.html#sendserviceinfo"},{default:o(()=>[z]),_:1})]),e("li",null,[s(n,{to:"/api/classes/Service.html#start"},{default:o(()=>[J]),_:1})]),e("li",null,[s(n,{to:"/api/classes/Service.html#subscribe"},{default:o(()=>[K]),_:1})])]),Q,e("table",null,[W,e("tbody",null,[e("tr",null,[X,e("td",Y,[s(n,{to:"/api/modules.html#logger"},{default:o(()=>[Z]),_:1})])]),e("tr",null,[$,e("td",ee,[s(n,{to:"/api/modules.html#serviceinfotype"},{default:o(()=>[te]),_:1})])]),e("tr",null,[se,e("td",ne,[s(n,{to:"/api/interfaces/EventBridge.html"},{default:o(()=>[oe]),_:1})])]),e("tr",null,[ie,e("td",de,[s(n,{to:"/api/modules.html#commanddefinition"},{default:o(()=>[re]),_:1}),ae,ce,le,he,_e,ue,pe,s(n,{to:"/api/modules.html#commandfunction"},{default:o(()=>[fe]),_:1}),me,s(n,{to:"/api/classes/Service.html"},{default:o(()=>[be]),_:1}),ve,ge,xe,Se,ye,ke,we])]),e("tr",null,[Ce,e("td",Pe,[s(n,{to:"/api/modules.html#subscriptiondefinition"},{default:o(()=>[Ie]),_:1}),Le,s(n,{to:"/api/modules.html#ebmessage"},{default:o(()=>[De]),_:1}),Te])])])]),Be,e("p",null,[s(n,{to:"/api/classes/ServiceClass.html"},{default:o(()=>[Ee]),_:1}),Re,s(n,{to:"/api/classes/ServiceClass.html#constructor"},{default:o(()=>[Me]),_:1})]),Ne,e("p",null,[e("a",Fe,[qe,s(i)])]),Oe,je,e("p",null,[He,Ve,Ae,Ge,Ue,ze,Je,Ke,Qe,s(n,{to:"/api/modules.html#commanddefinition"},{default:o(()=>[We]),_:1}),Xe,Ye,Ze,$e,et,tt,st,s(n,{to:"/api/modules.html#commandfunction"},{default:o(()=>[nt]),_:1}),ot,s(n,{to:"/api/classes/Service.html"},{default:o(()=>[it]),_:1}),dt,rt,at,ct,lt,ht,_t]),ut,e("p",null,[e("a",pt,[ft,s(i)])]),mt,bt,e("p",null,[vt,gt,xt,St,yt,s(n,{to:"/api/interfaces/EventBridge.html"},{default:o(()=>[kt]),_:1})]),wt,Ct,e("p",null,[s(n,{to:"/api/classes/ServiceClass.html"},{default:o(()=>[Pt]),_:1}),It,s(n,{to:"/api/classes/ServiceClass.html#eventbridge"},{default:o(()=>[Lt]),_:1})]),Dt,e("p",null,[e("a",Tt,[Bt,s(i)])]),Et,Rt,e("p",null,[Mt,Nt,Ft,s(n,{to:"/api/modules.html#serviceinfotype"},{default:o(()=>[qt]),_:1})]),Ot,jt,e("p",null,[s(n,{to:"/api/classes/ServiceClass.html"},{default:o(()=>[Ht]),_:1}),Vt,s(n,{to:"/api/classes/ServiceClass.html#info"},{default:o(()=>[At]),_:1})]),Gt,e("p",null,[e("a",Ut,[zt,s(i)])]),Jt,Kt,e("p",null,[Qt,Wt,Xt,s(n,{to:"/api/modules.html#logger"},{default:o(()=>[Yt]),_:1})]),Zt,e("p",null,[e("a",$t,[es,s(i)])]),ts,e("p",null,[e("a",ss,[ns,s(i)])]),os,e("p",null,[e("a",is,[ds,s(i)])]),rs,as,e("p",null,[cs,ls,hs,_s,us,ps,fs,ms,bs,s(n,{to:"/api/modules.html#subscriptiondefinition"},{default:o(()=>[vs]),_:1}),gs,s(n,{to:"/api/modules.html#ebmessage"},{default:o(()=>[xs]),_:1}),Ss]),ys,e("p",null,[e("a",ks,[ws,s(i)])]),Cs,Ps,Is,Ls,e("p",null,[e("a",Ds,[Ts,s(i)])]),Bs,Es,e("p",null,[Rs,Ms,Ns,Fs,qs,s(n,{to:"/api/modules.html#serviceinfotype"},{default:o(()=>[Os]),_:1})]),js,Hs,e("p",null,[s(n,{to:"/api/modules.html#serviceinfotype"},{default:o(()=>[Vs]),_:1})]),As,Gs,Us,e("p",null,[e("a",zs,[Js,s(i)])]),Ks,e("table",null,[Qs,e("tbody",null,[e("tr",null,[Ws,e("td",Xs,[s(n,{to:"/api/modules.html#commanddefinition"},{default:o(()=>[Ys]),_:1}),Zs,$s,en,tn,sn,nn,on,s(n,{to:"/api/modules.html#commandfunction"},{default:o(()=>[dn]),_:1}),rn,s(n,{to:"/api/classes/Service.html"},{default:o(()=>[an]),_:1}),cn,ln,hn,_n,un,pn,fn])]),e("tr",null,[mn,e("td",bn,[s(n,{to:"/api/modules.html#subscriptiondefinition"},{default:o(()=>[vn]),_:1}),gn,s(n,{to:"/api/modules.html#ebmessage"},{default:o(()=>[xn]),_:1}),Sn])])])]),yn,kn,wn,e("p",null,[e("a",Cn,[Pn,s(i)])]),In,e("table",null,[Ln,e("tbody",null,[Dn,e("tr",null,[Tn,e("td",Bn,[s(n,{to:"/api/modules.html#ebmessage"},{default:o(()=>[En]),_:1})]),Rn])])]),Mn,Nn,Fn,e("p",null,[e("a",qn,[On,s(i)])]),jn,e("p",null,[s(n,{to:"/api/classes/ServiceClass.html"},{default:o(()=>[Hn]),_:1}),Vn,s(n,{to:"/api/classes/ServiceClass.html#destroy"},{default:o(()=>[An]),_:1})]),Gn,e("p",null,[e("a",Un,[zn,s(i)])]),Jn,e("table",null,[Kn,e("tbody",null,[Qn,e("tr",null,[Wn,e("td",Xn,[s(n,{to:"/api/modules.html#command"},{default:o(()=>[Yn]),_:1}),Zn,$n,eo,to,so,no,oo,io,ro])])])]),ao,co,lo,e("p",null,[e("a",ho,[_o,s(i)])]),uo,e("table",null,[po,e("tbody",null,[fo,e("tr",null,[mo,e("td",bo,[s(n,{to:"/api/modules.html#ebmessage"},{default:o(()=>[vo]),_:1})])])])]),go,xo,So,e("p",null,[e("a",yo,[ko,s(i)])]),wo,e("table",null,[Co,e("tbody",null,[e("tr",null,[Po,e("td",Io,[Lo,Do,s(n,{to:"/api/modules.html#command"},{default:o(()=>[To]),_:1}),Bo])]),Eo])]),Ro,Mo,No,e("p",null,[s(n,{to:"/api/classes/ServiceClass.html"},{default:o(()=>[Fo]),_:1}),qo,s(n,{to:"/api/classes/ServiceClass.html#invoke"},{default:o(()=>[Oo]),_:1})]),jo,e("p",null,[e("a",Ho,[Vo,s(i)])]),Ao,e("table",null,[Go,e("tbody",null,[e("tr",null,[Uo,e("td",zo,[s(n,{to:"/api/modules.html#commanddefinition"},{default:o(()=>[Jo]),_:1}),Ko,Qo,Wo,Xo,Yo,Zo,$o,s(n,{to:"/api/modules.html#commandfunction"},{default:o(()=>[ei]),_:1}),ti,s(n,{to:"/api/classes/Service.html"},{default:o(()=>[si]),_:1}),ni,oi,ii,di,ri,ai,ci])])])]),li,hi,_i,e("p",null,[s(n,{to:"/api/classes/ServiceClass.html"},{default:o(()=>[ui]),_:1}),pi,s(n,{to:"/api/classes/ServiceClass.html#registercommand"},{default:o(()=>[fi]),_:1})]),mi,e("p",null,[e("a",bi,[vi,s(i)])]),gi,e("p",null,[e("a",xi,[Si,s(i)])]),yi,e("table",null,[ki,e("tbody",null,[e("tr",null,[wi,e("td",Ci,[s(n,{to:"/api/modules.html#infomessagetype"},{default:o(()=>[Pi]),_:1})]),Ii]),Li,Di])]),Ti,Bi,Ei,e("p",null,[e("a",Ri,[Mi,s(i)])]),Ni,e("p",null,[e("a",Fi,[qi,s(i)])]),Oi,e("table",null,[ji,e("tbody",null,[e("tr",null,[Hi,e("td",Vi,[s(n,{to:"/api/modules.html#subscriptiondefinition"},{default:o(()=>[Ai]),_:1}),Gi,s(n,{to:"/api/modules.html#ebmessage"},{default:o(()=>[Ui]),_:1}),zi])])])]),Ji,Ki,Qi,e("p",null,[s(n,{to:"/api/classes/ServiceClass.html"},{default:o(()=>[Wi]),_:1}),Xi,s(n,{to:"/api/classes/ServiceClass.html#subscribe"},{default:o(()=>[Yi]),_:1})]),Zi,e("p",null,[e("a",$i,[ed,s(i)])])],64)}var dd=a(_,[["render",td],["__file","Service.html.vue"]]);export{dd as default};
