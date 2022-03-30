# Current Request Parameters rule 

Use Current Request Parameters to inspect data contained within the query string \(the variables and values that appear after a question mark on a URL\).

To understand current Request parameters, consider the example URL `http://hostname/page.jsp?var1=rob&var2=expert`. In this example, the request parameters are `var1` and `var2`. Typically these are passed by GET and POST methods associated with forms. You must know the name of the request parameter that is passed by the page to use it in a rule.

Given the following <jsp:forward\> command:

```
<jsp:forward page="/servlet/login">
 <jsp:param name="user" value="rob" />
</jsp:forward>
```

an example rule condition constructed to evaluate this example might be:

```
when current Request.user is rob
```

Only data types Text and List are supported.

**Parent topic:**[Rule elements ](../pzn/pzn_rule_elements.md)

**Parent topic:**[Rule elements ](../pzn/pzn_rule_elements.md)

