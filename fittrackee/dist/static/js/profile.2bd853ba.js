"use strict";(self["webpackChunkfittrackee_client"]=self["webpackChunkfittrackee_client"]||[]).push([[845],{4264:function(e,t,r){r.r(t),r.d(t,{default:function(){return m}});var n=r(6252),a=r(2262),s=r(3577),u=r(2119),o=r(7167),c=r(8602),i=r(9917);const l={key:0,id:"account-confirmation",class:"center-card with-margin"},E={class:"error-message"};var d=(0,n.aZ)({setup(e){const t=(0,u.yj)(),r=(0,u.tv)(),d=(0,i.o)(),S=(0,n.Fl)((()=>d.getters[c.SY.GETTERS.ERROR_MESSAGES])),_=(0,n.Fl)((()=>t.query.token));function m(){_.value?d.dispatch(c.YN.ACTIONS.CONFIRM_ACCOUNT,{token:_.value}):r.push("/")}return(0,n.wF)((()=>m())),(0,n.Ah)((()=>d.commit(c.SY.MUTATIONS.EMPTY_ERROR_MESSAGES))),(e,t)=>{const r=(0,n.up)("router-link");return(0,a.SU)(S)?((0,n.wg)(),(0,n.iD)("div",l,[(0,n.Wm)(o.Z),(0,n._)("p",E,[(0,n._)("span",null,(0,s.zw)(e.$t("error.SOMETHING_WRONG"))+".",1),(0,n.Wm)(r,{class:"links",to:"/account-confirmation/resend"},{default:(0,n.w5)((()=>[(0,n.Uk)((0,s.zw)(e.$t("buttons.ACCOUNT-CONFIRMATION-RESEND"))+"? ",1)])),_:1})])])):(0,n.kq)("",!0)}}}),S=r(3744);const _=(0,S.Z)(d,[["__scopeId","data-v-785df978"]]);var m=_},8160:function(e,t,r){r.r(t),r.d(t,{default:function(){return m}});var n=r(6252),a=r(2262),s=r(3577),u=r(2119),o=r(7167),c=r(8602),i=r(9917);const l={key:0,id:"email-update",class:"center-card with-margin"},E={class:"error-message"};var d=(0,n.aZ)({setup(e){const t=(0,u.yj)(),r=(0,u.tv)(),d=(0,i.o)(),S=(0,n.Fl)((()=>d.getters[c.YN.GETTERS.AUTH_USER_PROFILE])),_=(0,n.Fl)((()=>d.getters[c.YN.GETTERS.IS_AUTHENTICATED])),m=(0,n.Fl)((()=>d.getters[c.SY.GETTERS.ERROR_MESSAGES])),R=(0,n.Fl)((()=>t.query.token));function T(){R.value?d.dispatch(c.YN.ACTIONS.CONFIRM_EMAIL,{token:R.value,refreshUser:_.value}):r.push("/")}return(0,n.wF)((()=>T())),(0,n.Ah)((()=>d.commit(c.SY.MUTATIONS.EMPTY_ERROR_MESSAGES))),(0,n.YP)((()=>m.value),(e=>{S.value.username&&e&&r.push("/")})),(e,t)=>{const r=(0,n.up)("router-link"),u=(0,n.up)("i18n-t");return(0,a.SU)(m)&&!(0,a.SU)(S).username?((0,n.wg)(),(0,n.iD)("div",l,[(0,n.Wm)(o.Z),(0,n._)("p",E,[(0,n._)("span",null,(0,s.zw)(e.$t("error.SOMETHING_WRONG"))+".",1),(0,n._)("span",null,[(0,n.Wm)(u,{keypath:"user.PROFILE.ERRORED_EMAIL_UPDATE"},{default:(0,n.w5)((()=>[(0,n.Wm)(r,{to:"/login"},{default:(0,n.w5)((()=>[(0,n.Uk)((0,s.zw)(e.$t("user.LOG_IN")),1)])),_:1})])),_:1})])])])):(0,n.kq)("",!0)}}}),S=r(3744);const _=(0,S.Z)(d,[["__scopeId","data-v-8c2ec9ce"]]);var m=_},6266:function(e,t,r){r.r(t),r.d(t,{default:function(){return S}});var n=r(6252),a=r(2262),s=r(8602),u=r(9917);const o=e=>((0,n.dD)("data-v-05463732"),e=e(),(0,n.Cn)(),e),c={key:0,id:"profile",class:"container view"},i=o((()=>(0,n._)("div",{id:"bottom"},null,-1)));var l=(0,n.aZ)({setup(e){const t=(0,u.o)(),r=(0,n.Fl)((()=>t.getters[s.YN.GETTERS.AUTH_USER_PROFILE]));return(e,t)=>{const s=(0,n.up)("router-view");return(0,a.SU)(r).username?((0,n.wg)(),(0,n.iD)("div",c,[(0,n.Wm)(s,{user:(0,a.SU)(r)},null,8,["user"]),i])):(0,n.kq)("",!0)}}}),E=r(3744);const d=(0,E.Z)(l,[["__scopeId","data-v-05463732"]]);var S=d},9453:function(e,t,r){r.r(t),r.d(t,{default:function(){return m}});var n=r(6252),a=r(2262),s=r(2119),u=r(2179),o=r(4317),c=r(8602),i=r(9917);const l={key:0,id:"user",class:"view"},E={class:"box"};var d=(0,n.aZ)({props:{fromAdmin:{type:Boolean}},setup(e){const t=e,{fromAdmin:r}=(0,a.BK)(t),d=(0,s.yj)(),S=(0,i.o)(),_=(0,n.Fl)((()=>S.getters[c.RT.GETTERS.USER]));return(0,n.wF)((()=>{d.params.username&&"string"===typeof d.params.username&&S.dispatch(c.RT.ACTIONS.GET_USER,d.params.username)})),(0,n.Jd)((()=>{S.dispatch(c.RT.ACTIONS.EMPTY_USER)})),(e,t)=>(0,a.SU)(_).username?((0,n.wg)(),(0,n.iD)("div",l,[(0,n.Wm)(u.Z,{user:(0,a.SU)(_)},null,8,["user"]),(0,n._)("div",E,[(0,n.Wm)(o.Z,{user:(0,a.SU)(_),"from-admin":(0,a.SU)(r)},null,8,["user","from-admin"])])])):(0,n.kq)("",!0)}}),S=r(3744);const _=(0,S.Z)(d,[["__scopeId","data-v-af7007f4"]]);var m=_}}]);
//# sourceMappingURL=profile.2bd853ba.js.map