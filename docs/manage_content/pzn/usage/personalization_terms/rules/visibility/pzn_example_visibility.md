# Example: Show page or portlet

View an example of a visibility rule, Show Page that shows the specified page or portlet only during the specified time period, and only to users in the Midwest. For all other dates and users, the page or portlet is hidden.

## Visibility rule

```
Show page or portlet when
  	     current Date.Date is between December 12, 2006 and December 19, 2006
  	     current LdapUsers.Geography is Midwest Region
  	  Otherwise hide 
```

**Parent topic:**[Visibility Rules](../pzn/pzn_visibility.md)

