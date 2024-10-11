"use strict";(()=>{var e={};e.id=798,e.ids=[798],e.modules={53524:e=>{e.exports=require("@prisma/client")},72934:e=>{e.exports=require("next/dist/client/components/action-async-storage.external.js")},54580:e=>{e.exports=require("next/dist/client/components/request-async-storage.external.js")},45869:e=>{e.exports=require("next/dist/client/components/static-generation-async-storage.external.js")},30517:e=>{e.exports=require("next/dist/compiled/next-server/app-route.runtime.prod.js")},32081:e=>{e.exports=require("child_process")},6113:e=>{e.exports=require("crypto")},82361:e=>{e.exports=require("events")},13685:e=>{e.exports=require("http")},95687:e=>{e.exports=require("https")},73837:e=>{e.exports=require("util")},37670:(e,t,r)=>{r.r(t),r.d(t,{headerHooks:()=>R,originalPathname:()=>T,patchFetch:()=>A,requestAsyncStorage:()=>O,routeModule:()=>I,serverHooks:()=>m,staticGenerationAsyncStorage:()=>v,staticGenerationBailout:()=>P});var n={};r.r(n),r.d(n,{POST:()=>d});var s=r(26040),i=r(7623),o=r(52816),a=r(6113),_=r.n(a),c=r(3613),E=r(47980),p=r(84808),u=r(95431);async function d(e){let t;let r=await e.text(),n=(0,c.headers)().get("Stripe-Signature");try{t=u.A.webhooks.constructEvent(r,n,E.O.STRIPE_WEBHOOK_SECRET)}catch(e){return new Response(`Webhook Error: ${e.message}`,{status:400})}try{console.log("event.type",t.type);let e=t.data.object;if(console.log("session",e),"checkout.session.completed"===t.type){let t=await u.A.subscriptions.retrieve(e.subscription);console.log("subscription",t),await p.db.user.update({where:{id:e?.metadata?.userId},data:{stripeSubscriptionId:t.id,stripeCustomerId:t.customer,stripePriceId:t.items.data[0].price.id,stripeCurrentPeriodEnd:new Date(1e3*t.current_period_end)}});let r=e.amount_total||1500,n={event_name:"Purchase",event_time:Math.floor(new Date().getTime()/1e3),action_source:"website",event_id:e.id,user_data:{em:l(e.customer_email)},custom_data:{currency:e.currency,value:r/100,content_ids:["reelSearch"],content_type:"product"}};try{let e=await fetch(`https://graph.facebook.com/v11.0/${E.O.NEXT_PUBLIC_FACEBOOK_PIXEL_ID}/events`,{method:"POST",headers:{"Content-Type":"application/json",Authorization:`Bearer ${E.O.FACEBOOKCONVTOKEN}`},body:JSON.stringify({data:[n]})});if(!e.ok){let t=await e.json();console.error("Error sending event to Facebook:",t)}}catch(e){console.error("Error sending event to Facebook:",e)}}if("invoice.payment_succeeded"===t.type){let t=await u.A.subscriptions.retrieve(e.subscription);console.log("subscription",t),await p.db.user.update({where:{stripeSubscriptionId:t.id},data:{stripePriceId:t.items.data[0].price.id,stripeCurrentPeriodEnd:new Date(1e3*t.current_period_end)}})}return new Response(null,{status:200})}catch(e){return new Response(`Webhook Error: ${e.message}`,{status:400})}}let l=e=>_().createHash("sha256").update(e).digest("hex"),I=new s.AppRouteRouteModule({definition:{kind:i.x.APP_ROUTE,page:"/api/webhooks/stripe/route",pathname:"/api/webhooks/stripe",filename:"route",bundlePath:"app/api/webhooks/stripe/route"},resolvedPagePath:"/Users/morganfuller/Documents/Invoke/ReelSearch/temp/ReelSearch/app/api/webhooks/stripe/route.ts",nextConfigOutput:"",userland:n}),{requestAsyncStorage:O,staticGenerationAsyncStorage:v,serverHooks:m,headerHooks:R,staticGenerationBailout:P}=I,T="/api/webhooks/stripe/route";function A(){return(0,o.patchFetch)({serverHooks:m,staticGenerationAsyncStorage:v})}},47980:(e,t,r)=>{r.d(t,{O:()=>i});var n=r(7487),s=r(44132);let i=(0,n.D)({server:{apiKey:s.z.string().min(1),appId:s.z.string().min(1),auth_provider_x509_cert_url:s.z.string().min(1),auth_uri:s.z.string().min(1),authDomain:s.z.string().min(1),client_email:s.z.string().min(1),client_id:s.z.string().min(1),client_x509_cert_url:s.z.string().min(1),DATABASE_URL:s.z.string().min(1),GOOGLE_CLIENT_ID:s.z.string().min(1),GOOGLE_CLIENT_SECRET:s.z.string().min(1),measurementId:s.z.string().min(1),messagingSenderId:s.z.string().min(1),NEXT_PUBLIC_APP_URL:s.z.string().min(1),NEXT_PUBLIC_FACEBOOK_PIXEL_ID:s.z.string().min(1),NEXTAUTH_SECRET:s.z.string().min(1),NEXTAUTH_URL:s.z.string().url().optional(),OPENAI_API_KEY:s.z.string().min(1),OPENAI_ORG_ID:s.z.string().min(1),PINECONE_KEY:s.z.string().min(1),private_key:s.z.string().min(1),private_key_id:s.z.string().min(1),FACEBOOKCONVTOKEN:s.z.string().min(1),projectId:s.z.string().min(1),storageBucket:s.z.string().min(1),STRIPE_API_KEY:s.z.string().min(1),STRIPE_PRO_MONTHLY_PLAN_ID:s.z.string().min(1),STRIPE_WEBHOOK_SECRET:s.z.string().min(1),token_uri:s.z.string().min(1),type:s.z.string().min(1),universe_domain:s.z.string().min(1),EMAIL_SERVER_USER:s.z.string().min(1),EMAIL_SERVER_PASSWORD:s.z.string().min(1),EMAIL_SERVER_HOST:s.z.string().min(1),EMAIL_SERVER_PORT:s.z.string().min(1),EMAIL_FROM:s.z.string().min(1)},client:{NEXT_PUBLIC_APP_URL:s.z.string().min(1)},runtimeEnv:{apiKey:process.env.apiKey,appId:process.env.appId,auth_provider_x509_cert_url:process.env.auth_provider_x509_cert_url,auth_uri:process.env.auth_uri,authDomain:process.env.authDomain,client_email:process.env.client_email,client_id:process.env.client_id,client_x509_cert_url:process.env.client_x509_cert_url,DATABASE_URL:process.env.DATABASE_URL,GOOGLE_CLIENT_ID:process.env.GOOGLE_CLIENT_ID,GOOGLE_CLIENT_SECRET:process.env.GOOGLE_CLIENT_SECRET,measurementId:process.env.measurementId,messagingSenderId:process.env.messagingSenderId,NEXT_PUBLIC_APP_URL:"http://localhost:3000",NEXT_PUBLIC_FACEBOOK_PIXEL_ID:"877663831030809",NEXTAUTH_SECRET:process.env.NEXTAUTH_SECRET,NEXTAUTH_URL:process.env.NEXTAUTH_URL,OPENAI_API_KEY:process.env.OPENAI_API_KEY,OPENAI_ORG_ID:process.env.OPENAI_ORG_ID,PINECONE_KEY:process.env.PINECONE_KEY,private_key:process.env.private_key,private_key_id:process.env.FACEBOOKCONVTOKEN,FACEBOOKCONVTOKEN:process.env.PINECONE_KEY,projectId:process.env.projectId,storageBucket:process.env.storageBucket,STRIPE_API_KEY:process.env.STRIPE_API_KEY,STRIPE_PRO_MONTHLY_PLAN_ID:process.env.STRIPE_PRO_MONTHLY_PLAN_ID,STRIPE_WEBHOOK_SECRET:process.env.STRIPE_WEBHOOK_SECRET,token_uri:process.env.token_uri,type:process.env.type,universe_domain:process.env.universe_domain,NEXTAUTH_URL:process.env.NEXTAUTH_URL,NEXTAUTH_SECRET:process.env.NEXTAUTH_SECRET,DATABASE_URL:process.env.DATABASE_URL,STRIPE_API_KEY:process.env.STRIPE_API_KEY,STRIPE_WEBHOOK_SECRET:process.env.STRIPE_WEBHOOK_SECRET,STRIPE_PRO_MONTHLY_PLAN_ID:process.env.STRIPE_PRO_MONTHLY_PLAN_ID,NEXT_PUBLIC_APP_URL:"http://localhost:3000",GOOGLE_CLIENT_ID:process.env.GOOGLE_CLIENT_ID,GOOGLE_CLIENT_SECRET:process.env.GOOGLE_CLIENT_SECRET,NEXT_PUBLIC_FACEBOOK_PIXEL_ID:"877663831030809",EMAIL_SERVER_USER:process.env.EMAIL_SERVER_USER,EMAIL_SERVER_PASSWORD:process.env.EMAIL_SERVER_PASSWORD,EMAIL_SERVER_HOST:process.env.EMAIL_SERVER_PASSWORD,EMAIL_SERVER_PORT:process.env.EMAIL_SERVER_PASSWORD,EMAIL_FROM:process.env.EMAIL_SERVER_PASSWORD}})},84808:(e,t,r)=>{r.d(t,{db:()=>n});let n=new(r(53524)).PrismaClient},95431:(e,t,r)=>{r.d(t,{A:()=>i});var n=r(42774),s=r(47980);let i=new n.Z(s.O.STRIPE_API_KEY,{apiVersion:"2022-11-15",typescript:!0})},7487:(e,t,r)=>{r.d(t,{D:()=>s});var n=r(44132);function s({runtimeEnv:e,...t}){return function(e){let t=e.runtimeEnvStrict??e.runtimeEnv??process.env;if(e.skipValidation??(!!process.env.SKIP_ENV_VALIDATION&&"false"!==process.env.SKIP_ENV_VALIDATION&&"0"!==process.env.SKIP_ENV_VALIDATION))return t;let r="object"==typeof e.client?e.client:{},s=n.ZP.object(r),i=n.ZP.object(e.server),o=e.isServer??!0,a=i.merge(s),_=o?a.safeParse(t):s.safeParse(t),c=e.onValidationError??(e=>{throw console.error("❌ Invalid environment variables:",e.flatten().fieldErrors),Error("Invalid environment variables")}),E=e.onInvalidAccess??(e=>{throw Error("❌ Attempted to access a server-side environment variable on the client")});return!1===_.success?c(_.error):new Proxy(_.data,{get(t,r){if("string"==typeof r)return o||r.startsWith(e.clientPrefix)?t[r]:E(r)}})}({...t,clientPrefix:"NEXT_PUBLIC_",runtimeEnvStrict:e})}},36666:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{DYNAMIC_ERROR_CODE:function(){return r},DynamicServerError:function(){return n}});let r="DYNAMIC_SERVER_USAGE";class n extends Error{constructor(e){super("Dynamic server usage: "+e),this.digest=r}}("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},34113:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"staticGenerationBailout",{enumerable:!0,get:function(){return a}});let n=r(36666),s=r(45869);class i extends Error{constructor(...e){super(...e),this.code="NEXT_STATIC_GEN_BAILOUT"}}function o(e,t){let{dynamic:r,link:n}=t||{};return"Page"+(r?' with `dynamic = "'+r+'"`':"")+" couldn't be rendered statically because it used `"+e+"`."+(n?" See more info here: "+n:"")}let a=(e,t)=>{let{dynamic:r,link:a}=void 0===t?{}:t,_=s.staticGenerationAsyncStorage.getStore();if(!_)return!1;if(_.forceStatic)return!0;if(_.dynamicShouldError)throw new i(o(e,{link:a,dynamic:null!=r?r:"error"}));let c=o(e,{dynamic:r,link:"https://nextjs.org/docs/messages/dynamic-server-error"});if(null==_.postpone||_.postpone.call(_,e),_.revalidate=0,_.isStaticGeneration){let t=new n.DynamicServerError(c);throw _.dynamicUsageDescription=e,_.dynamicUsageStack=t.stack,t}return!1};("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},26040:(e,t,r)=>{e.exports=r(30517)}};var t=require("../../../../webpack-runtime.js");t.C(e);var r=e=>t(t.s=e),n=t.X(0,[5046,4132,3613,2774],()=>r(37670));module.exports=n})();