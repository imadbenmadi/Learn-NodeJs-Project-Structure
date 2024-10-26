exports.capitalize = (str) => {
    return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
};

exports.formatCurrency = (amount) => {
    return `$${parseFloat(amount).toFixed(2)}`;
};
