exports.getHomePage = (req, res) => {
    res.render("index", { title: "Home Page" });
};

exports.getAboutPage = (req, res) => {
    res.render("about", { title: "About Us" });
};
