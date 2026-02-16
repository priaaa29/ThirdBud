async function createRoom(){
  myName=($("nameInput")?.value||"").trim();
  if(!myName){showErr("Name first!");return}
  roomCode=genCode();isDJ=true;
  Sync.init(roomCode);
  await Sync.write("state",{trackId:null,playing:false,at:0});
  await Sync.write("members",{});
  await Sync.write("reactions",{});
  enterRoom();
}
async function joinRoom(){
  myName=($("nameInput")?.value||"").trim();
  const code=($("joinInput")?.value||"").trim().toUpperCase();
  if(!myName){showErr("Name first!");return}
  if(!code){showErr("Enter code!");return}
  Sync.init(code);
  const s=await Sync.read("state");
  if(s===null){showErr("Room not found!");return}
  roomCode=code;isDJ=false;enterRoom();
}
