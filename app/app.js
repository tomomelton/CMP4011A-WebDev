const express = require("express");
const app = express();
const port = 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

app.listen(port, () => {
  console.log(`myapp is listening on port ${port}!`);
});

// ******************* Download Energy PDF *******************
app.get("/downloadEnergy", (req, res) => {
  res.download("public/downloads/SDG 7 Policy Briefs 2021.pdf", (err) => {
    if (err) {
      console.log(err);
    } else {
      console.log("Downloading");
    }
  });
});

// ******************* Download Hunger PDF *******************
app.get("/downloadHunger", (req, res) => {
  res.download("public/downloads/Extended-Report-2025_Goal-2.pdf", (err) => {
    if (err) {
      console.log(err);
    } else {
      console.log("Downloading");
    }
  });
});

// ******************* Newsletter Form Handling *******************
app.post("/newsletter", (req, res) => {
  //process form data here
  console.log(req.body);
  const FirstName = req.body.FirstName;
  const LastName = req.body.LastName;
  const email = req.body.email;
  const message = req.body.message;

  res.json({ FirstName: FirstName, email: email });
});
