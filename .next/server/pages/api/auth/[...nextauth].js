"use strict";(()=>{var e={};e.id=3748,e.ids=[3748],e.modules={32104:e=>{e.exports=require("@next-auth/prisma-adapter")},73227:e=>{e.exports=require("next-auth")},9673:e=>{e.exports=require("next-auth/providers/email")},93598:e=>{e.exports=require("next-auth/providers/google")},20145:e=>{e.exports=require("next/dist/compiled/next-server/pages-api.runtime.prod.js")},45184:e=>{e.exports=require("nodemailer")},36206:e=>{e.exports=import("@t3-oss/env-nextjs")},9926:e=>{e.exports=import("zod")},97579:(e,n)=>{Object.defineProperty(n,"l",{enumerable:!0,get:function(){return function e(n,r){return r in n?n[r]:"then"in n&&"function"==typeof n.then?n.then(n=>e(n,r)):"function"==typeof n&&"default"===r?n:void 0}}})},65946:(e,n,r)=>{r.a(e,async(e,s)=>{try{r.r(n),r.d(n,{config:()=>p,default:()=>o,routeModule:()=>c});var t=r(92844),i=r(35787),E=r(97579),_=r(46102),a=e([_]);_=(a.then?(await a)():a)[0];let o=(0,E.l)(_,"default"),p=(0,E.l)(_,"config"),c=new t.PagesAPIRouteModule({definition:{kind:i.x.PAGES_API,page:"/api/auth/[...nextauth]",pathname:"/api/auth/[...nextauth]",bundlePath:"",filename:""},userland:_});s()}catch(e){s(e)}})},67276:(e,n,r)=>{r.a(e,async(e,s)=>{try{r.d(n,{O:()=>_});var t=r(36206),i=r(9926),E=e([t,i]);[t,i]=E.then?(await E)():E;let _=(0,t.createEnv)({server:{apiKey:i.z.string().min(1),appId:i.z.string().min(1),auth_provider_x509_cert_url:i.z.string().min(1),auth_uri:i.z.string().min(1),authDomain:i.z.string().min(1),client_email:i.z.string().min(1),client_id:i.z.string().min(1),client_x509_cert_url:i.z.string().min(1),DATABASE_URL:i.z.string().min(1),GOOGLE_CLIENT_ID:i.z.string().min(1),GOOGLE_CLIENT_SECRET:i.z.string().min(1),measurementId:i.z.string().min(1),messagingSenderId:i.z.string().min(1),NEXT_PUBLIC_APP_URL:i.z.string().min(1),NEXT_PUBLIC_FACEBOOK_PIXEL_ID:i.z.string().min(1),NEXTAUTH_SECRET:i.z.string().min(1),NEXTAUTH_URL:i.z.string().url().optional(),OPENAI_API_KEY:i.z.string().min(1),OPENAI_ORG_ID:i.z.string().min(1),PINECONE_KEY:i.z.string().min(1),private_key:i.z.string().min(1),private_key_id:i.z.string().min(1),FACEBOOKCONVTOKEN:i.z.string().min(1),projectId:i.z.string().min(1),storageBucket:i.z.string().min(1),STRIPE_API_KEY:i.z.string().min(1),STRIPE_PRO_MONTHLY_PLAN_ID:i.z.string().min(1),STRIPE_WEBHOOK_SECRET:i.z.string().min(1),token_uri:i.z.string().min(1),type:i.z.string().min(1),universe_domain:i.z.string().min(1),EMAIL_SERVER_USER:i.z.string().min(1),EMAIL_SERVER_PASSWORD:i.z.string().min(1),EMAIL_SERVER_HOST:i.z.string().min(1),EMAIL_SERVER_PORT:i.z.string().min(1),EMAIL_FROM:i.z.string().min(1)},client:{NEXT_PUBLIC_APP_URL:i.z.string().min(1)},runtimeEnv:{apiKey:process.env.apiKey,appId:process.env.appId,auth_provider_x509_cert_url:process.env.auth_provider_x509_cert_url,auth_uri:process.env.auth_uri,authDomain:process.env.authDomain,client_email:process.env.client_email,client_id:process.env.client_id,client_x509_cert_url:process.env.client_x509_cert_url,DATABASE_URL:process.env.DATABASE_URL,GOOGLE_CLIENT_ID:process.env.GOOGLE_CLIENT_ID,GOOGLE_CLIENT_SECRET:process.env.GOOGLE_CLIENT_SECRET,measurementId:process.env.measurementId,messagingSenderId:process.env.messagingSenderId,NEXT_PUBLIC_APP_URL:"http://localhost:3000",NEXT_PUBLIC_FACEBOOK_PIXEL_ID:"877663831030809",NEXTAUTH_SECRET:process.env.NEXTAUTH_SECRET,NEXTAUTH_URL:process.env.NEXTAUTH_URL,OPENAI_API_KEY:process.env.OPENAI_API_KEY,OPENAI_ORG_ID:process.env.OPENAI_ORG_ID,PINECONE_KEY:process.env.PINECONE_KEY,private_key:process.env.private_key,private_key_id:process.env.FACEBOOKCONVTOKEN,FACEBOOKCONVTOKEN:process.env.PINECONE_KEY,projectId:process.env.projectId,storageBucket:process.env.storageBucket,STRIPE_API_KEY:process.env.STRIPE_API_KEY,STRIPE_PRO_MONTHLY_PLAN_ID:process.env.STRIPE_PRO_MONTHLY_PLAN_ID,STRIPE_WEBHOOK_SECRET:process.env.STRIPE_WEBHOOK_SECRET,token_uri:process.env.token_uri,type:process.env.type,universe_domain:process.env.universe_domain,NEXTAUTH_URL:process.env.NEXTAUTH_URL,NEXTAUTH_SECRET:process.env.NEXTAUTH_SECRET,DATABASE_URL:process.env.DATABASE_URL,STRIPE_API_KEY:process.env.STRIPE_API_KEY,STRIPE_WEBHOOK_SECRET:process.env.STRIPE_WEBHOOK_SECRET,STRIPE_PRO_MONTHLY_PLAN_ID:process.env.STRIPE_PRO_MONTHLY_PLAN_ID,NEXT_PUBLIC_APP_URL:"http://localhost:3000",GOOGLE_CLIENT_ID:process.env.GOOGLE_CLIENT_ID,GOOGLE_CLIENT_SECRET:process.env.GOOGLE_CLIENT_SECRET,NEXT_PUBLIC_FACEBOOK_PIXEL_ID:"877663831030809",EMAIL_SERVER_USER:process.env.EMAIL_SERVER_USER,EMAIL_SERVER_PASSWORD:process.env.EMAIL_SERVER_PASSWORD,EMAIL_SERVER_HOST:process.env.EMAIL_SERVER_PASSWORD,EMAIL_SERVER_PORT:process.env.EMAIL_SERVER_PASSWORD,EMAIL_FROM:process.env.EMAIL_SERVER_PASSWORD}});s()}catch(e){s(e)}})},23613:(e,n,r)=>{r.a(e,async(e,s)=>{try{r.d(n,{L:()=>I});var t=r(32104),i=r(9673),E=r.n(i),_=r(93598),a=r.n(_),o=r(45184),p=r(67276),c=r(40628),R=e([p]);p=(R.then?(await R)():R)[0],(0,o.createTransport)({host:process.env.EMAIL_SERVER_HOST,port:process.env.EMAIL_SERVER_PORT,secure:!0,auth:{user:process.env.EMAIL_SERVER_USER,pass:process.env.EMAIL_SERVER_PASSWORD}});let I={adapter:(0,t.PrismaAdapter)(c.db),session:{strategy:"jwt"},pages:{signIn:"/login"},providers:[a()({clientId:p.O.GOOGLE_CLIENT_ID,clientSecret:p.O.GOOGLE_CLIENT_SECRET,allowDangerousEmailAccountLinking:!0}),E()({server:{host:process.env.EMAIL_SERVER_HOST,port:process.env.EMAIL_SERVER_PORT,auth:{user:process.env.EMAIL_SERVER_USER,pass:process.env.EMAIL_SERVER_PASSWORD}},from:process.env.EMAIL_FROM,sendVerificationRequest:async({identifier:e,url:n,provider:r})=>{let{server:s,from:t}=r,i=(0,o.createTransport)(s),E={to:e,from:t,subject:`Sign in to ${process.env.NEXTAUTH_URL}`,text:`Sign in to ${process.env.NEXTAUTH_URL}
${n}

`,html:`<p>Sign in to <strong>${process.env.NEXTAUTH_URL}</strong></p><p><a href="${n}">Click here to sign in</a></p>`};await i.sendMail(E)}})],callbacks:{session:async({token:e,session:n})=>(e&&(n.user.id=e.id,n.user.name=e.name,n.user.email=e.email,n.user.image=e.picture,n.user.fleetMemberships=e.fleetMemberships),n),async jwt({token:e,user:n}){let r=await c.db.user.findFirst({where:{email:e.email},include:{fleetMemberships:{select:{id:!0,fleet:{select:{name:!0,id:!0}}}}}});return r?{id:r.id,name:r.name,email:r.email,picture:r.image,fleetMemberships:r.fleetMemberships}:(n&&(e.id=n?.id),e)}}};s()}catch(e){s(e)}})},40628:(e,n,r)=>{r.d(n,{db:()=>s});let s=new(require("@prisma/client")).PrismaClient},46102:(e,n,r)=>{r.a(e,async(e,s)=>{try{r.r(n),r.d(n,{default:()=>a});var t=r(73227),i=r.n(t),E=r(23613),_=e([E]);E=(_.then?(await _)():_)[0];let a=i()(E.L);s()}catch(e){s(e)}})},35787:(e,n)=>{var r;Object.defineProperty(n,"x",{enumerable:!0,get:function(){return r}}),function(e){e.PAGES="PAGES",e.PAGES_API="PAGES_API",e.APP_PAGE="APP_PAGE",e.APP_ROUTE="APP_ROUTE"}(r||(r={}))},92844:(e,n,r)=>{e.exports=r(20145)}};var n=require("../../../webpack-api-runtime.js");n.C(e);var r=n(n.s=65946);module.exports=r})();