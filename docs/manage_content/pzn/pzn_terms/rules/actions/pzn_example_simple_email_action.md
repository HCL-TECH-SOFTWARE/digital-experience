# Example: Simple email action

This email action rule example is typical of one that might be used after a website visitor submits a form indicating interest in an item or service.

The email action rule can be attached to a content spot that, when triggered by the visitor viewing the page with the spot, sends the email indicated by the **bodyURI** field to that visitor. This email is also blind copied to someone within the sample company.

## Email action rule

```
  To: current Portal Users.Email Address
  	From: Rates@YourCo.com
  	bcc: Mortgage_Broker@YourCo.com
  	 
  	Subject: Today's Mortgage Rates
  	Body URI /email/mortgage-rates.jsp
```


**Related information**  


[Email administration](../pzn/pzn_email_admin.md)

