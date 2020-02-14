const fetch = require("node-fetch");

exports.sourceNodes = async ({ actions }, { companyName }) => {
  const { createNode } = actions;

  if (!companyName) {
    console.log(
      "Error in gatsby-source-recruitee plugin: 'companyName' not found. Make sure add it in the gatsby-config.js."
    );
    return;
  }
  const resp = await fetch(`https://${companyName}.recruitee.com/api/offers/`);
  const data = await resp.json();

  data.offers.forEach(offer =>
    createNode({
      ...offer,

      id: `recruitee-${offer.id}`,
      parent: null,
      children: [],
      internal: {
        type: `RecruiteeOffer`,
        contentDigest: "Job offer published by recruitee"
      }
    })
  );
  return;
};
