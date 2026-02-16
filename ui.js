const REACTIONS=["🔥","💜","🎶","✨","🤘","💃","🫠","⚡"];
const AVATARS=["👾","🎧","🎵","🌊","🦊","🐱","🎸","🌙"];
const fmt=s=>`${Math.floor(s/60)}:${Math.floor(s%60).toString().padStart(2,"0")}`;
const genCode=()=>Math.random().toString(36).substring(2,7).toUpperCase();
let myName="",myAvatar=AVATARS[Math.floor(Math.random()*AVATARS.length)];
let isDJ=false,roomCode="",currentTrack=null,isPlaying=false;
// renderHome() — logo, tagline, name input, avatar, create/join buttons
// renderPlayer() — header, members, now-playing, reactions, tracklist
