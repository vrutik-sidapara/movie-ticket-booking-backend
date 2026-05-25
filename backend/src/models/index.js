const Sequelize = require("sequelize");
const config = require("../config/config").development;

const sequelize = new Sequelize(config);

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

sequelize
  .authenticate()
  .then(() => {
    console.log("✅ Database connected successfully!");
  })
  .catch((err) => {
    console.error("❌ Unable to connect to database:", err);
  });

db.User = require("./userModel")(sequelize, Sequelize.DataTypes);
db.Movie = require("./movieModel")(sequelize, Sequelize.DataTypes);
db.Theater = require("./theaterModel")(sequelize, Sequelize.DataTypes);
db.Schedule = require("./scheduleModel")(sequelize, Sequelize.DataTypes);
db.Booking = require("./bookingModel")(sequelize, Sequelize.DataTypes);
db.Rating = require("./ratingModel")(sequelize, Sequelize.DataTypes);
db.City = require("./cityModel")(sequelize, Sequelize.DataTypes);
db.Timesheet = require("./timesheetModel")(sequelize, Sequelize.DataTypes);
db.Screen = require("./screenModel")(sequelize, Sequelize.DataTypes);

Object.keys(db).forEach((modelName) => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

module.exports = db;
