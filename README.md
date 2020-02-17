## Description
This is a Gatsby source plugin. It allows you to pull job offers published with recruitee into your gatsby project.

## How to install

    npm install gatsby-source-recruitee

## Examples of usage

Add the plugin to your `gatsby-node.js` file by adding the following code to the `plugins` fild:

    {
      resolve: `gatsby-source-recruitee`,
      options: {
        companyName: "COMPANY-NAME",
      }
    }

Replaye the "COMPANY-NAME" with your company name given by recruitee. You can find it at the top of your dashboard overview in recruitee.
    
## How to query for data
Example query:

    allRecruiteeOffer {
        edges {
            node {
                title
                description
                requirements
                department
                city
                careers_url
                careers_apply_url
            }
        }
    }
