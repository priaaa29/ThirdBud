function enterRoom(){
  renderPlayer();
  Sync.listen("state",async s=>{if(!s)return;const t=s.trackId?TRACKS.find(x=>x.id===s.trackId):null;currentTrack=t;isPlaying=s.playing;if(t&&lastTrackId!==t.id){lastTrackId=t.id;if(s.playing)await startMusic(t)}else if(s.playing&&Tone.Transport.state!=="started"){if(t)resumeMusic()}else if(!s.playing&&Tone.Transport.state==="started"){pauseMusic()}renderPlayer()});
  Sync.listen("members",m=>updateMembers(m));
  Sync.listen("reactions",r=>showReactions(r));
  heartbeat();setInterval(heartbeat,3000);
}
