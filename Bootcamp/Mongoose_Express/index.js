const express = require("express");
const path = require("path")
const mongoose = require("mongoose");
const methodOverride = require('method-override')
const app = express();


const Product = require("./models/product")

mongoose.connect('mongodb://127.0.0.1:27017/farmStand')
    .then(() => {
        console.log("MONGO CONNECTION OPEN!!")
    })
    .catch(err => {
        console.log("OH NO MONGO CONNECTION ERROR!!")
        console.log(err)
    })


app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use(express.urlencoded({extended: true}));
app.use(methodOverride("_method"))

const categories = ["fruit", "vegetable", "dairy"];

app.get("/products", async (req,res) => {
    const products = await Product.find({})
    res.render('products/index', {products})
})

app.get("/products/new", (req,res) => {
    res.render("products/new", { categories })
})

app.post("/products", async (req,res) => {
    const newProduct = new Product(req.body)
    await newProduct.save();
    res.redirect(`/products/${newProduct._id}`)

})

app.get("/products/:id", async (req,res) => {
    const { id } = req.params;
    const product = await Product.findById(id)
    res.render("products/show", { product })
})

app.get("/products/:id/edit", async (req,res) => {
    const { id } = req.params;
    const product = await Product.findById(id);
    res.render("products/edit", { product, categories })
})

app.put("/products/:id", async (req, res) => {
    const { id } = req.params;
    const { name, price, category } = req.body; // Extract fields to update
    try {
        const updatedProduct = await Product.findByIdAndUpdate(id, { name, price, category }, { runValidators: true, new: true });
        res.redirect(`/products/${updatedProduct._id}`);
    } catch (error) {
        console.error(error);
        // Handle error - redirect or render an error page
        res.redirect('/error');
    }
});

app.delete("/products/:id", async (req, res) => { 
    const { id } = req.params;
    const deletedProduct = await Product.findByIdAndDelete(id);
    res.redirect("/products");
})

app.listen(3000, () => {
    console.log("APP IS LISTENING ON PORT 3000 ")
})