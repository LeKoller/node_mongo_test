const assert = require("assert");

const State = require("../src/models/state");

describe("Nesting records", () => {
  it("Creates a state with one city", (done) => {
    let sp = new State({
      name: "São Paulo",
      abbreviation: "SP",
      cities: [{ name: "Capital" }],
    });

    sp.save().then(() => {
      State.findOne({ name: "São Paulo" }).then((record) => {
        assert(record.cities.length === 1);
        done();
      });
    });
  });
});
