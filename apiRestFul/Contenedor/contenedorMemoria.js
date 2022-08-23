class ContenedorMemoria {
  miId = 0;
  constructor() {
    this.hamburguesas = [];
  }
  getAll() {
    return this.hamburguesas;
  }
  getOne(id) {
    let hamburguesaObtenida = this.hamburguesas.filter(
      (el) => el.id == Number(id)
    );
    return hamburguesaObtenida;
  }
  addOne(hamburguesa) {
    hamburguesa.id = this.miId++;
    this.hamburguesas = [...this.hamburguesas, hamburguesa];
  }
  updateOne(id, obj) {
    this.hamburguesas.forEach((el) => {
      if (el.id == Number(id)) {
        el = obj;
      }
    });
    return this.hamburguesas;
  }

  deleteOne(id) {
    let hamburguesaObtenida = this.hamburguesas.filter(
      (el) => el.id != Number(id)
    );
    this.hamburguesas = hamburguesaObtenida;
    return this.hamburguesas;
  }
}

module.exports = ContenedorMemoria;
