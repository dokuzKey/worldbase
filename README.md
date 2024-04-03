# worldbase
 JSON and YAML database module with ease of use.

## Usage
```javascript
const {
    JsonDatabase,
    YamlDatabase
} = require("worldbase");

const db = new JsonDatabase({
  databasePath:"./databases/db.json"
});

const yamldb = new YamlDatabase({
  databasePath: "./databases/db.yml"
});

// Data set or get
db.set("test", 1);
db.get("test");
db.fetch("test");

// Data exists

db.has("test");
db.exists("test");

// Get all data

db.all(5); || db.all();
db.fetchAll(5); || db.fetchAll();

// To JSON

db.toJson(5); || db.toJson();

// Delete data

db.delete("test");
db.deleteAll();
db.findAndDelete((element,db) => {
    return element.ID.includes("test");
});

// Get data type

db.type("test"); // output: number

// DB Array methods
db.push("testArray", 10);
db.pull("testArray", (element, index, array) => element < 10, true); // multiple options = true (default false)
db.valueArray();
db.keyArray();

// DB Math metods

db.math("test","*", 3);
db.add("test", 10);
db.substr("test", 5);

// DB Finding methods

db.includes("tes");
db.startsWith("t");

// Infos
console.log(db.size);
console.log(db.info);

// Destroy DB
db.destroy();
```