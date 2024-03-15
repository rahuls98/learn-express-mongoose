let BookInstance = require("../models/bookinstance");

exports.show_all_books_status = async function (res) {
    let results = await BookInstance.find({ status: { $eq: "Available" } })
        .populate("book")
        .exec();
    results = results.map(
        (bookInstance) => bookInstance.book.title + " : " + bookInstance.status
    );
    return res.send(results);
};
