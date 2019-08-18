class Model {
  static _db = {};

  save() {
    let model = this;
    this.constructor._db[model.id] = model;
  }

  static _findInLocal(id) {
    return typeof this._db[id] !== undefined ? this._db[id] : null;
  }
}

export default Model;
