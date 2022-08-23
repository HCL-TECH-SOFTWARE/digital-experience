# LDAP search filter expressions

The rules for rule-based user groups are based on the LDAP search filter syntax.

For information about the LDAP search filter syntax, see RFC2254 - The String Representation of LDAP Search Filters in the related links section.

You can use this subset of the LDAP search filter syntax:

-   The `AND` operator represented by an ampersand \(`&`\).
-   The `OR` operator represented by a vertical slash \(`|`\).
-   The `NOT` operator represented by an exclamation mark \(`!`\).
-   Equality comparison represented by an equal sign \(`=`\) for name and value expressions.
-   Wildcards represented by an asterisk \(`*`\) at the beginning or end of values in name and value expressions.

**Note:** Attributes must not start with one of the operator symbols `AND`, `OR`, or `NOT` \(`&`, `|`, or `!`\), and they must not contain a comparison equal sign \(`=`\), or parentheses.

For example:

-   **`(uid=testuser)`**

    Matches to all users that have exactly the value `testuser` for the attribute `uid`.

-   **`(uid=test*)`**

    Matches to all users that have values for the attribute `uid` that start with `test`.

-   **`(!(uid=test*))`**

    Matches to all users that have values for the attribute `uid` that do not start with `test`.

-   **`(&(department=1234)(city=Paris))`**

    Matches to all users that have exactly the value `1234` for the attribute `department` and exactly the value `Paris` for the attribute `city`.

-   **`(|(department=1234)(department=56*))`**

    Matches to all users that have exactly the value `1234` or a value that starts with `56` for the attribute `department`.

-   **`(&(department=12*)(!(department=123*)))`**

    Matches to all users that have a value starting with `12`, but not starting with `123` for the attribute `department`.


## Syntax validation

When you define or modify a rule base user group, the rule-based user groups adapter validates the syntax for the LDAP search filter expression. For example:

-   **Invalid rule specified:**

    If you provide a rule that is not valid, rule-based user groups return the appropriate error message. However, it does not check whether the attribute names that you use exist in the user configuration. You can verify the configuration by using the code that calls the search filter.

-   **Invalid attribute specified:**

    If an invalid attribute name is contained in a rule, the group membership determination for rule-based user groups does not work and logs an error. Existing rules might break if your attribute configuration in the system changes, for example, when an attribute is removed or renamed.



**Related information**  


[RFC2254 - The String Representation of LDAP Search Filters - http://www.faqs.org/rfcs/rfc2254.html](http://www.faqs.org/rfcs/rfc2254.html)

