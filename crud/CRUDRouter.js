const express = require("express");

class CRUDRouter extends express.Router {
  constructor(crudController) {
    super();
    console.log("My CRUD Controller:", crudController);
    this.get("/", crudController.list);
    this.post("/create", crudController.create);
    this.put("/:id", crudController.update);
    this.delete("/:id", crudController.destory);
  }
}
module.exports = CRUDRouter;
