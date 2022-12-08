const express = require("express");
const router = express.Router();
const { request } = require("graphql-request");

router.post("/getcoin", async (req, res) => {
  const address = req.body.address;
console.log("getcoin api 호출", address)
  // graphql request
  const endpoint = "https://qa-aug-gql.433live.com:38080/graphql";
  const query = `
  mutation
  {
    transferAsset(
    recipient: "${address}"
      amount: "1"
      privateKeyHex: "ead84181e57412f48e8e28e09aab9c07c81a543935c28ac91967fd15f05beeac"
    )
    {
      id
    }
  }
  `;

  await request(endpoint, query)
    .then((data) => {
      res.json({ data: data.transferAsset.id });
    })
    .catch((err) => {
      console.log("graphql error log", JSON.stringify(err,undefined,2));
      res.json({ data: "fail" });
    });
});
module.exports = router;
