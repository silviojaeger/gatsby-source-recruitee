const fetch = require('node-fetch');

exports.sourceNodes = async ({ actions }, { companyName }) => {
    const { createNode } = actions
    
    // Get Data
    const resp = await fetch(`https://${companyName}.recruitee.com/api/offers/`)
    const data = await resp.json()

    // Process data into nodes.
    data.offers.forEach(offer =>  createNode({
      ...offer,

      id: `recruitee-${offer.id}`,
      parent: null,
      children: [],
      internal: {
        type: `RecruiteeOffer`,
        contentDigest: "Job offer published by recruitee"
      }
    }))
    return
  }