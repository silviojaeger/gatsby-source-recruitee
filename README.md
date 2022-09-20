## Description
This is a Gatsby source plugin. It allows you to pull job offers published with recruitee into your gatsby project.

## How to install
Run the following command in your gatsby project root directory:

    npm install gatsby-source-recruitee

## Examples of usage

Add the plugin to your `gatsby-config.js` file by adding the following code to the `plugins` fild:

```javascript
{
  resolve: `gatsby-source-recruitee`,
  options: {
    companyName: "COMPANY-NAME", // required
    department: "COMPANY-DEPARTMENT-FILTER", // optional
    tag: "TAG-FILTER", // optional
  }
}
```
Replaye the "COMPANY-NAME" with your company name given by recruitee. You can find it at the top of your dashboard overview in recruitee.
    
## How to query for data
Example query:
```graphql
allRecruiteeOffer {
  edges {
    node {
      title
      description
      requirements
      department
      city
      careersUrl
      careersApplyUrl
    }
  }
}
```
