async function sendReaction(emoji){
  const rxns=(await Sync.read("reactions"))||{};
  const id="r_"+Date.now()+"_"+Math.random().toString(36).slice(2,5);
  rxns[id]={emoji,id,ts:Date.now(),x:10+Math.random()*80,name:myName};
  Object.keys(rxns).forEach(k=>{if(Date.now()-rxns[k].ts>5000)delete rxns[k]});
  await Sync.write("reactions",rxns);
}
