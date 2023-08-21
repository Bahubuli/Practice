const yt = 153000;
const fb = 35000;
const tw = 12000;

const fb_counter = document.querySelector(".fb-count");
const tw_counter = document.querySelector(".tw-count");
const yt_counter = document.querySelector(".yt-count");

fb_counter.innerText = 0;
tw_counter.innerText = 0;
yt_counter.innerText = 0;

const fb_speed = fb / 100;
const yt_speed = yt / 100;
const tw_speed = tw / 100;


const interval1 = setInterval(() => { increment(fb_counter,fb,fb_speed) },1)

const interval2 = setInterval(() => { increment(tw_counter,tw,tw_speed) },1)

const interval3 = setInterval(() => { increment(yt_counter,yt,yt_speed) },1)

function increment(social, count,speed)
{
    if(social.innerText<count)
    social.innerText= +(social.innerText)+speed;
}
