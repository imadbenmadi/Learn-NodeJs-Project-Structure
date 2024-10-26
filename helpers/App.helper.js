exports.isObjectEmpty = (obj) => {
    return Object.keys(obj).length === 0;
};

exports.formatDate = (date) => {
    return new Date(date).toISOString().split("T")[0];
};
