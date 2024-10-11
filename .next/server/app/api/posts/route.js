"use strict";(()=>{var e={};e.id=990,e.ids=[990],e.modules={53524:e=>{e.exports=require("@prisma/client")},72934:e=>{e.exports=require("next/dist/client/components/action-async-storage.external.js")},54580:e=>{e.exports=require("next/dist/client/components/request-async-storage.external.js")},45869:e=>{e.exports=require("next/dist/client/components/static-generation-async-storage.external.js")},30517:e=>{e.exports=require("next/dist/compiled/next-server/app-route.runtime.prod.js")},39491:e=>{e.exports=require("assert")},14300:e=>{e.exports=require("buffer")},32081:e=>{e.exports=require("child_process")},6113:e=>{e.exports=require("crypto")},9523:e=>{e.exports=require("dns")},82361:e=>{e.exports=require("events")},57147:e=>{e.exports=require("fs")},13685:e=>{e.exports=require("http")},95687:e=>{e.exports=require("https")},41808:e=>{e.exports=require("net")},22037:e=>{e.exports=require("os")},71017:e=>{e.exports=require("path")},63477:e=>{e.exports=require("querystring")},12781:e=>{e.exports=require("stream")},24404:e=>{e.exports=require("tls")},57310:e=>{e.exports=require("url")},73837:e=>{e.exports=require("util")},59796:e=>{e.exports=require("zlib")},82777:(e,r,t)=>{t.r(r),t.d(r,{headerHooks:()=>S,originalPathname:()=>P,patchFetch:()=>A,requestAsyncStorage:()=>v,routeModule:()=>I,serverHooks:()=>O,staticGenerationAsyncStorage:()=>m,staticGenerationBailout:()=>T});var s={};t.r(s),t.d(s,{GET:()=>d,POST:()=>R});var n=t(26040),i=t(7623),o=t(52816),a=t(41912),E=t(44132),_=t(75409),c=t(84808);class p extends Error{constructor(e="This action requires a pro plan"){super(e)}}var u=t(78827);let l=E.Ry({title:E.Z_(),content:E.Z_().optional()});async function d(){try{let e=await (0,a.getServerSession)(_.L);if(!e)return new Response("Unauthorized",{status:403});let{user:r}=e,t=await c.db.post.findMany({select:{id:!0,title:!0,published:!0,createdAt:!0},where:{authorId:r.id}});return new Response(JSON.stringify(t))}catch(e){return new Response(null,{status:500})}}async function R(e){try{let r=await (0,a.getServerSession)(_.L);if(!r)return new Response("Unauthorized",{status:403});let{user:t}=r,s=await (0,u.b)(t.id);if(!s?.isPro&&await c.db.post.count({where:{authorId:t.id}})>=3)throw new p;let n=await e.json(),i=l.parse(n),o=await c.db.post.create({data:{title:i.title,content:i.content,authorId:r.user.id},select:{id:!0}});return new Response(JSON.stringify(o))}catch(e){if(e instanceof E.jm)return new Response(JSON.stringify(e.issues),{status:422});if(e instanceof p)return new Response("Requires Pro Plan",{status:402});return new Response(null,{status:500})}}let I=new n.AppRouteRouteModule({definition:{kind:i.x.APP_ROUTE,page:"/api/posts/route",pathname:"/api/posts",filename:"route",bundlePath:"app/api/posts/route"},resolvedPagePath:"/Users/morganfuller/Documents/Invoke/ReelSearch/temp/ReelSearch/app/api/posts/route.ts",nextConfigOutput:"",userland:s}),{requestAsyncStorage:v,staticGenerationAsyncStorage:m,serverHooks:O,headerHooks:S,staticGenerationBailout:T}=I,P="/api/posts/route";function A(){return(0,o.patchFetch)({serverHooks:O,staticGenerationAsyncStorage:m})}},85685:(e,r,t)=>{t.d(r,{H:()=>i,R:()=>n});var s=t(47980);let n={name:"Free",description:"The free plan has limited features to view daily vehicle pricing data.",stripePriceId:""},i={name:"PRO",description:"PRO plan: Advanced data vizualization, revenue and market analysis, plus reelSearch+ChatGPT",stripePriceId:s.O.STRIPE_PRO_MONTHLY_PLAN_ID||""}},47980:(e,r,t)=>{t.d(r,{O:()=>i});var s=t(7487),n=t(44132);let i=(0,s.D)({server:{apiKey:n.z.string().min(1),appId:n.z.string().min(1),auth_provider_x509_cert_url:n.z.string().min(1),auth_uri:n.z.string().min(1),authDomain:n.z.string().min(1),client_email:n.z.string().min(1),client_id:n.z.string().min(1),client_x509_cert_url:n.z.string().min(1),DATABASE_URL:n.z.string().min(1),GOOGLE_CLIENT_ID:n.z.string().min(1),GOOGLE_CLIENT_SECRET:n.z.string().min(1),measurementId:n.z.string().min(1),messagingSenderId:n.z.string().min(1),NEXT_PUBLIC_APP_URL:n.z.string().min(1),NEXT_PUBLIC_FACEBOOK_PIXEL_ID:n.z.string().min(1),NEXTAUTH_SECRET:n.z.string().min(1),NEXTAUTH_URL:n.z.string().url().optional(),OPENAI_API_KEY:n.z.string().min(1),OPENAI_ORG_ID:n.z.string().min(1),PINECONE_KEY:n.z.string().min(1),private_key:n.z.string().min(1),private_key_id:n.z.string().min(1),FACEBOOKCONVTOKEN:n.z.string().min(1),projectId:n.z.string().min(1),storageBucket:n.z.string().min(1),STRIPE_API_KEY:n.z.string().min(1),STRIPE_PRO_MONTHLY_PLAN_ID:n.z.string().min(1),STRIPE_WEBHOOK_SECRET:n.z.string().min(1),token_uri:n.z.string().min(1),type:n.z.string().min(1),universe_domain:n.z.string().min(1),EMAIL_SERVER_USER:n.z.string().min(1),EMAIL_SERVER_PASSWORD:n.z.string().min(1),EMAIL_SERVER_HOST:n.z.string().min(1),EMAIL_SERVER_PORT:n.z.string().min(1),EMAIL_FROM:n.z.string().min(1)},client:{NEXT_PUBLIC_APP_URL:n.z.string().min(1)},runtimeEnv:{apiKey:process.env.apiKey,appId:process.env.appId,auth_provider_x509_cert_url:process.env.auth_provider_x509_cert_url,auth_uri:process.env.auth_uri,authDomain:process.env.authDomain,client_email:process.env.client_email,client_id:process.env.client_id,client_x509_cert_url:process.env.client_x509_cert_url,DATABASE_URL:process.env.DATABASE_URL,GOOGLE_CLIENT_ID:process.env.GOOGLE_CLIENT_ID,GOOGLE_CLIENT_SECRET:process.env.GOOGLE_CLIENT_SECRET,measurementId:process.env.measurementId,messagingSenderId:process.env.messagingSenderId,NEXT_PUBLIC_APP_URL:"http://localhost:3000",NEXT_PUBLIC_FACEBOOK_PIXEL_ID:"877663831030809",NEXTAUTH_SECRET:process.env.NEXTAUTH_SECRET,NEXTAUTH_URL:process.env.NEXTAUTH_URL,OPENAI_API_KEY:process.env.OPENAI_API_KEY,OPENAI_ORG_ID:process.env.OPENAI_ORG_ID,PINECONE_KEY:process.env.PINECONE_KEY,private_key:process.env.private_key,private_key_id:process.env.FACEBOOKCONVTOKEN,FACEBOOKCONVTOKEN:process.env.PINECONE_KEY,projectId:process.env.projectId,storageBucket:process.env.storageBucket,STRIPE_API_KEY:process.env.STRIPE_API_KEY,STRIPE_PRO_MONTHLY_PLAN_ID:process.env.STRIPE_PRO_MONTHLY_PLAN_ID,STRIPE_WEBHOOK_SECRET:process.env.STRIPE_WEBHOOK_SECRET,token_uri:process.env.token_uri,type:process.env.type,universe_domain:process.env.universe_domain,NEXTAUTH_URL:process.env.NEXTAUTH_URL,NEXTAUTH_SECRET:process.env.NEXTAUTH_SECRET,DATABASE_URL:process.env.DATABASE_URL,STRIPE_API_KEY:process.env.STRIPE_API_KEY,STRIPE_WEBHOOK_SECRET:process.env.STRIPE_WEBHOOK_SECRET,STRIPE_PRO_MONTHLY_PLAN_ID:process.env.STRIPE_PRO_MONTHLY_PLAN_ID,NEXT_PUBLIC_APP_URL:"http://localhost:3000",GOOGLE_CLIENT_ID:process.env.GOOGLE_CLIENT_ID,GOOGLE_CLIENT_SECRET:process.env.GOOGLE_CLIENT_SECRET,NEXT_PUBLIC_FACEBOOK_PIXEL_ID:"877663831030809",EMAIL_SERVER_USER:process.env.EMAIL_SERVER_USER,EMAIL_SERVER_PASSWORD:process.env.EMAIL_SERVER_PASSWORD,EMAIL_SERVER_HOST:process.env.EMAIL_SERVER_PASSWORD,EMAIL_SERVER_PORT:process.env.EMAIL_SERVER_PASSWORD,EMAIL_FROM:process.env.EMAIL_SERVER_PASSWORD}})},75409:(e,r,t)=>{t.d(r,{L:()=>_});var s=t(5100),n=t(60318),i=t(18110),o=t(54124),a=t(47980),E=t(84808);(0,o.createTransport)({host:process.env.EMAIL_SERVER_HOST,port:process.env.EMAIL_SERVER_PORT,secure:!0,auth:{user:process.env.EMAIL_SERVER_USER,pass:process.env.EMAIL_SERVER_PASSWORD}});let _={adapter:(0,s.N)(E.db),session:{strategy:"jwt"},pages:{signIn:"/login"},providers:[(0,i.Z)({clientId:a.O.GOOGLE_CLIENT_ID,clientSecret:a.O.GOOGLE_CLIENT_SECRET,allowDangerousEmailAccountLinking:!0}),(0,n.Z)({server:{host:process.env.EMAIL_SERVER_HOST,port:process.env.EMAIL_SERVER_PORT,auth:{user:process.env.EMAIL_SERVER_USER,pass:process.env.EMAIL_SERVER_PASSWORD}},from:process.env.EMAIL_FROM,sendVerificationRequest:async({identifier:e,url:r,provider:t})=>{let{server:s,from:n}=t,i=(0,o.createTransport)(s),a={to:e,from:n,subject:`Sign in to ${process.env.NEXTAUTH_URL}`,text:`Sign in to ${process.env.NEXTAUTH_URL}
${r}

`,html:`<p>Sign in to <strong>${process.env.NEXTAUTH_URL}</strong></p><p><a href="${r}">Click here to sign in</a></p>`};await i.sendMail(a)}})],callbacks:{session:async({token:e,session:r})=>(e&&(r.user.id=e.id,r.user.name=e.name,r.user.email=e.email,r.user.image=e.picture,r.user.fleetMemberships=e.fleetMemberships),r),async jwt({token:e,user:r}){let t=await E.db.user.findFirst({where:{email:e.email},include:{fleetMemberships:{select:{id:!0,fleet:{select:{name:!0,id:!0}}}}}});return t?{id:t.id,name:t.name,email:t.email,picture:t.image,fleetMemberships:t.fleetMemberships}:(r&&(e.id=r?.id),e)}}}},84808:(e,r,t)=>{t.d(r,{db:()=>s});let s=new(t(53524)).PrismaClient},78827:(e,r,t)=>{t.d(r,{b:()=>i});var s=t(85685),n=t(84808);async function i(e){let r=await n.db.user.findFirst({where:{id:e},select:{stripeSubscriptionId:!0,stripeCurrentPeriodEnd:!0,stripeCustomerId:!0,stripePriceId:!0}});if(!r)throw Error("User not found");let t=r.stripePriceId&&r.stripeCurrentPeriodEnd?.getTime()+864e5>Date.now();return{...t?s.H:s.R,...r,stripeCurrentPeriodEnd:r.stripeCurrentPeriodEnd?.getTime(),isPro:t}}},7487:(e,r,t)=>{t.d(r,{D:()=>n});var s=t(44132);function n({runtimeEnv:e,...r}){return function(e){let r=e.runtimeEnvStrict??e.runtimeEnv??process.env;if(e.skipValidation??(!!process.env.SKIP_ENV_VALIDATION&&"false"!==process.env.SKIP_ENV_VALIDATION&&"0"!==process.env.SKIP_ENV_VALIDATION))return r;let t="object"==typeof e.client?e.client:{},n=s.ZP.object(t),i=s.ZP.object(e.server),o=e.isServer??!0,a=i.merge(n),E=o?a.safeParse(r):n.safeParse(r),_=e.onValidationError??(e=>{throw console.error("❌ Invalid environment variables:",e.flatten().fieldErrors),Error("Invalid environment variables")}),c=e.onInvalidAccess??(e=>{throw Error("❌ Attempted to access a server-side environment variable on the client")});return!1===E.success?_(E.error):new Proxy(E.data,{get(r,t){if("string"==typeof t)return o||t.startsWith(e.clientPrefix)?r[t]:c(t)}})}({...r,clientPrefix:"NEXT_PUBLIC_",runtimeEnvStrict:e})}},36666:(e,r)=>{Object.defineProperty(r,"__esModule",{value:!0}),function(e,r){for(var t in r)Object.defineProperty(e,t,{enumerable:!0,get:r[t]})}(r,{DYNAMIC_ERROR_CODE:function(){return t},DynamicServerError:function(){return s}});let t="DYNAMIC_SERVER_USAGE";class s extends Error{constructor(e){super("Dynamic server usage: "+e),this.digest=t}}("function"==typeof r.default||"object"==typeof r.default&&null!==r.default)&&void 0===r.default.__esModule&&(Object.defineProperty(r.default,"__esModule",{value:!0}),Object.assign(r.default,r),e.exports=r.default)},34113:(e,r,t)=>{Object.defineProperty(r,"__esModule",{value:!0}),Object.defineProperty(r,"staticGenerationBailout",{enumerable:!0,get:function(){return a}});let s=t(36666),n=t(45869);class i extends Error{constructor(...e){super(...e),this.code="NEXT_STATIC_GEN_BAILOUT"}}function o(e,r){let{dynamic:t,link:s}=r||{};return"Page"+(t?' with `dynamic = "'+t+'"`':"")+" couldn't be rendered statically because it used `"+e+"`."+(s?" See more info here: "+s:"")}let a=(e,r)=>{let{dynamic:t,link:a}=void 0===r?{}:r,E=n.staticGenerationAsyncStorage.getStore();if(!E)return!1;if(E.forceStatic)return!0;if(E.dynamicShouldError)throw new i(o(e,{link:a,dynamic:null!=t?t:"error"}));let _=o(e,{dynamic:t,link:"https://nextjs.org/docs/messages/dynamic-server-error"});if(null==E.postpone||E.postpone.call(E,e),E.revalidate=0,E.isStaticGeneration){let r=new s.DynamicServerError(_);throw E.dynamicUsageDescription=e,E.dynamicUsageStack=r.stack,r}return!1};("function"==typeof r.default||"object"==typeof r.default&&null!==r.default)&&void 0===r.default.__esModule&&(Object.defineProperty(r.default,"__esModule",{value:!0}),Object.assign(r.default,r),e.exports=r.default)},26040:(e,r,t)=>{e.exports=t(30517)}};var r=require("../../../webpack-runtime.js");r.C(e);var t=e=>r(r.s=e),s=r.X(0,[5046,4132,3613,4539],()=>t(82777));module.exports=s})();