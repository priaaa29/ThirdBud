const Sync = {
  _refs: [],
  init(code) { this.code = code; },
  ref(path) { return db.ref("rooms/" + this.code + "/" + path); },
  async write(path, val) { await this.ref(path).set(val); },
  async read(path) { const snap = await this.ref(path).get(); return snap.exists() ? snap.val() : null; },
  listen(path, cb) { const r = this.ref(path); r.on("value", snap => { if(snap.exists()) cb(snap.val()); }); this._refs.push(r); },
  destroy() { this._refs.forEach(r => r.off()); this._refs = []; }
};
