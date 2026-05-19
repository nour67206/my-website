let isArabic=false;

/* CURSOR FIX (main issue solved) */
const cursor=document.getElementById("cursor");

window.addEventListener("mousemove",(e)=>{
requestAnimationFrame(()=>{
cursor.style.left=e.clientX+"px";
cursor.style.top=e.clientY+"px";
});
});

/* typing */
const t1="Hi, I'm a Cyber Developer";
const t2="Web • Bots • Scripts • Plugins";

let i=0,j=0;

function type1(){
if(i<t1.length){
document.getElementById("title").innerHTML+=t1[i++];
setTimeout(type1,50);
}
}

function type2(){
if(j<t2.length){
document.getElementById("subtitle").innerHTML+=t2[j++];
setTimeout(type2,40);
}
}

type1();
setTimeout(type2,700);

/* LANGUAGE BUTTON ANIMATION */
function toggleLang(){
const btn=document.getElementById("langBtn");

btn.style.transform="scale(0.9)";
setTimeout(()=>btn.style.transform="scale(1)",150);

if(!isArabic){
document.getElementById("title").innerText="مرحبا أنا مطور سيبر";
document.getElementById("subtitle").innerText="مواقع • بوتات • سكربتات • بلوجنز";
isArabic=true;
}else{
location.reload();
}
}

/* EXPERIENCE */
function showExp(type){
const data={
web:["Web Dev","HTML CSS JS websites + UI systems + animations"],
bot:["Discord Bots","Automation systems + APIs + moderation bots"],
mc:["Minecraft","Plugins + server systems + mechanics"],
api:["APIs","Backend REST APIs + integrations"]
};

document.getElementById("mTitle").innerText=data[type][0];
document.getElementById("mText").innerText=data[type][1];
document.getElementById("modal").style.display="flex";
}

function closeModal(){
document.getElementById("modal").style.display="none";
}

/* SMALL CAPS */
function smallCaps(){
const map={a:'ᴀ',b:'ʙ',c:'ᴄ',d:'ᴅ',e:'ᴇ',f:'ғ',g:'ɢ',h:'ʜ',i:'ɪ',j:'ᴊ',k:'ᴋ',l:'ʟ',m:'ᴍ',n:'ɴ',o:'ᴏ',p:'ᴘ',q:'ǫ',r:'ʀ',s:'s',t:'ᴛ',u:'ᴜ',v:'ᴠ',w:'ᴡ',x:'x',y:'ʏ',z:'ᴢ'};
let v=document.getElementById("text").value.toLowerCase();
let r="";
for(let c of v) r+=map[c]||c;
document.getElementById("out").innerText=r;
}

/* SCROLL REVEAL */
window.addEventListener("scroll",()=>{
document.querySelectorAll(".reveal").forEach(el=>{
if(el.getBoundingClientRect().top<window.innerHeight-100){
el.classList.add("active");
}
});
});