console.log("inicio home controller");
const homeController = {
    visualizarHome: function ( req , res) {
        res.render("home")
    }
}
console.log(this.visualizarHome)
module.exports = homeController;