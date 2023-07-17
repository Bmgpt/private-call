import express from "https://esm.sh/express@4.18.2";

const app = express();

app.get("/", function (req, res) {
    res.send(req.query.id)
    res.redirect("tel:"+req.query.id);
});

app.listen(3000);
console.log("listening on http://localhost:3000/");