async function djPlay(id){if(!isDJ)return;await initTone();await Sync.write("state",{trackId:id,playing:true,at:Date.now()})}
async function djToggle(){if(!isDJ)return;await initTone();const s=await Sync.read("state");if(!s)return;s.playing=!s.playing;if(s.playing)s.at=Date.now();await Sync.write("state",s)}
async function djNext(){if(!isDJ||!currentTrack)return;const i=TRACKS.findIndex(t=>t.id===currentTrack.id);await djPlay(TRACKS[(i+1)%TRACKS.length].id)}
async function djPrev(){if(!isDJ||!currentTrack)return;const i=TRACKS.findIndex(t=>t.id===currentTrack.id);await djPlay(TRACKS[(i-1+TRACKS.length)%TRACKS.length].id)}
