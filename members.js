function pill(n,a,d){return "<div>"+a+" "+n+(d?" DJ":"")+"</div>"}
async function heartbeat(){const m=(await Sync.read("members"))||{};m[myId]={name:myName,avatar:myAvatar,isDJ,ls:Date.now(),id:myId};await Sync.write("members",m)}
