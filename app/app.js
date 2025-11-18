const express = require("express");
const app = express();
const port = 3000;

app.use(express.urlencoded({extended: true}))
app.use(express.json())

app.use(express.static('public'));

app.listen(port, () => {
console.log(`myapp is listening on port ${port}!`);
});

// ******************* Download Energy PDF *******************
app.get("/downloadEnergy", (req, res) =>
{
    res.download("public/downloads/SDG 7 Policy Briefs 2021.pdf", (err) =>
    {
        if (err)
        {
            console.log(err);
        }
        else
        {
            console.log("Downloading")
        }
    });
});