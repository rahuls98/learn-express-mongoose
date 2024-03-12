var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var BookSchema = new Schema({
    title: { type: String, required: true, maxLength: 100 },
    author: { type: Schema.Types.ObjectId, ref: "Author", required: true },
    summary: { type: String, required: true },
    isbn: { type: String, required: true, required: true },
    genre: { type: [Schema.Types.ObjectId], ref: "Genre" },
});

//Export model
module.exports = mongoose.model("Book", BookSchema);
