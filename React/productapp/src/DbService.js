export default class DbService {
  constructor() {
    const faunadb = require("faunadb");
    this.collection = "products";

    this.client = new faunadb.Client({
      // Replace YOUR_FAUNA_SECRET with the secret for the database that
      // should contain your Todo documents.
      secret: "fnAE8YLC9qAA1vdfFdZmMVDmFbFF26Ha_HofeguV",
      // Classic DB Domain = 'db.fauna.us';  US Region Domain = 'db.us.fauna.com';
      // See https://docs.fauna.com/fauna/current/learn/understanding/region_groups for Region domain information.
      domain: "db.eu.fauna.com",
      scheme: "https",
    });
  }

  // get all products from database
  async getAll() {
    const faunadb = require("faunadb");
    const q = faunadb.query;

    return await this.client
      .query(
        q.Map(
          q.Paginate(q.Documents(q.Collection(this.collection)), { size: 100 }),
          q.Lambda("ref", q.Get(q.Var("ref")))
        )
      )
      .then((res) => res.data.map((el) => el.data))
      .catch((err) => console.log(err));
  }

  // add product to the database
  add(id, name, price, description, image) {
    console.log("adding to database");
    const faunadb = require("faunadb");
    const q = faunadb.query;
    this.client
      .query(
        q.Create(q.Ref(q.Collection(this.collection), id), {
          data: {
            id: id,
            name: name,
            price: price,
            description: description,
            image: image,
          },
        })
      )

      .then((ret) => console.log(ret))
      .catch((err) =>
        console.error(
          "Error: [%s] %s: %s",
          err.name,
          err.message,
          err.errors()[0].description
        )
      );
  }

  // delete product from database
  async del(id) {
    //todo
    console.log("deleting in database");
    const faunadb = require("faunadb");
    const q = faunadb.query;
    // The following query looks a bit complicated, but it:
    // - avoids trying to delete a Todo document unless it exists
    // This step prevents problems if another instance of the todo app (or
    // the Fauna Dashboard) has already deleted the Todo document.
    await this.client
      .query(
        q.Let(
          {
            productRef: q.Ref(q.Collection(this.collection), id),
            productExists: q.Exists(q.Var("productRef")),
          },
          q.If(
            q.Var("productExists"),
            q.Delete(q.Ref(q.Collection(this.collection), id)),
            null
          )
        )
      )
      .catch((err) => console.log(err));
  }

  //update product in the database
  upd(id, name, price, description, image) {
    //todo
    const faunadb = require("faunadb");
    const q = faunadb.query;
    console.log("updating in database");
    console.log("image : ", image);
    this.client
      .query(
        q.Update(q.Ref(q.Collection(this.collection), id), {
          data: {
            id: id,
            name: name,
            price: price,
            description: description,
            image: image,
          },
        })
      )
      .then((ret) => console.log(ret))
      .catch((err) =>
        console.error(
          "Error: [%s] %s: %s",
          err.name,
          err.message,
          err.errors()[0].description
        )
      );
  }
}
