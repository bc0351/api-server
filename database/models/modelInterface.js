'use strict';

class modelInterface {
  constructor(model) {
    this.model = model;
  }

  async create(json) {
    await this.model.create(json)
      .then(instance => { return instance })
      .catch(err => { console.log(err); return err; });
  }

  async readOne(id) {
    await this.model.findOne({ where: { id } })
      .then(oneRecord => { return oneRecord })
      .catch(err => { console.log(err); return err; });
  }

  async readAll() {
    await this.model.findAll()
      .then(allRecords => { return allRecords })
      .catch(err => { console.log(err); return err; });
  }

  async readWithRelations(id, options) {
    let query = { where: { id }, ...options };
    await this.model.findOne(query)
      .then(result => { return result; })
      .catch(err => { console.log(err); return err; });
  }

  async update(id, updates) {
    await this.model.update({updates}, { where: { id } })
      .then(res => { return res; })
      .catch(err => { console.log(err); return err; });
  }

  async delete(id) {
    await this.model.findOne({ where: { id } })
      .then(this.model.destroy({ where: { id } }))
      .catch(err => { console.log(err); return err; });
  }
};

module.exports = {modelInterface};
