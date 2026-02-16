const SCALES = {
  pentatonic:["C4","D4","E4","G4","A4","C5","D5","E5"],
  minor:["A3","B3","C4","D4","E4","F4","G4","A4","B4","C5"],
  major:["C4","D4","E4","F4","G4","A4","B4","C5"],
  lofi:["D3","F3","G3","A3","C4","D4","F4","G4","A4"],
  dreamy:["E3","G3","A3","B3","D4","E4","G4","A4","B4"],
  chill:["C3","Eb3","F3","G3","Bb3","C4","Eb4","F4"]
};
const TRACKS = [
  {id:1,title:"Neon Pulse",artist:"SynthBot",hue:160,scale:"pentatonic",bpm:110,wave:"triangle",mood:"bright"},
  {id:2,title:"Midnight Lo-Fi",artist:"ChillWave",hue:280,scale:"lofi",bpm:75,wave:"sine",mood:"mellow"},
  {id:3,title:"Golden Hour",artist:"Sunset FM",hue:30,scale:"major",bpm:100,wave:"square",mood:"warm"},
  {id:4,title:"Deep Blue",artist:"Ocean.wav",hue:200,scale:"dreamy",bpm:85,wave:"sawtooth",mood:"ambient"},
  {id:5,title:"After Dark",artist:"Night Shift",hue:340,scale:"minor",bpm:120,wave:"triangle",mood:"dark"},
  {id:6,title:"Velvet Haze",artist:"Cloud Nine",hue:50,scale:"chill",bpm:90,wave:"sine",mood:"dreamy"}
];
