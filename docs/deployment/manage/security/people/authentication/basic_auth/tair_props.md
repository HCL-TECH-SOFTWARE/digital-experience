# Reference: Properties for the Trust Association Interceptor

The HTTP Basic Authentication Trust Association Interceptor has several configuration properties.

You can configure the following properties for the HTTP Basic Authentication Trust Association Interceptor.

**Notes:**

1.  The default value for each parameter is given in parentheses.
2.  In the descriptions, **TAI** refers to the portal HTTP Basic Authentication Trust Association Interceptor.

###   **enabled = \( true \)**

Use this property to determine whether the TAI is active or not. Possible values are true and false. The default is true. If you set this property to true, the TAI authenticates requests. If you set this property to false, the TAI does not authenticate requests.

###   **loginTarget = \( Portal\_LTPA \)**

Use this property to specify the alias of the JAAS login configuration that is used by the TAI. The default value is Portal\_LTPA. By this default, the TAI uses the same JAAS login configuration as the one that is used by portal HTTP form based log in.

###   **authenticationRealm = \( WPS \)**

Use this property to specify the name of an authentication realm as defined in RFC 2617. The TAI challenges the client to authenticate against this realm. The default is WPS. By this default, the TAI uses the same authentication realm name as the one that is used by portal HTTP form based login.

###   **userAgentBlackList = \( AllAgentsAllowed \)**

Use this property to specify a list of patterns for which you do not want the TAI to handle the requests. Separate the patterns by whitespaces.

Every product name in the HTTP header field `User-Agent` of incoming requests is compared with each of the patterns specified for this parameter. If the TAI is enabled and the URL matches at least one of the patterns specified for the `userAgentBlackList` property, the TAI will not handle the request.

The default value is AllAgentsAllowed. This default value means that the user agent black list is not active.

You can specify the patterns with an asterisk \( `*` \) as a wild card character. You can also define the patterns as Java regular expressions. In this case set the property [`useRegExp`](tair_props.md#useregexp-false) to true.

###   **urlBlackList = \( /wps/myportal\* \)**

Use this property to specify a list of patterns for which you do not want the TAI to handle the requests. Separate the patterns by whitespaces.

The full path information of the URL of the incoming request is compared with each of the patterns specified for this parameter. Before comparing the URL to the patterns, the protocol, server, port, and query information is removed from the URL. If the TAI is enabled and the URL matches at least one of the patterns specified for the `urlBlackList` property, the TAI will not handle the request. The default value is /wps/myportal\*.

Use the following syntax rules for specifying the patterns:

-   You can use URI encoded patterns. For example, if you want to use the blank character as part of a pattern, you can encode it as %20. It is then interpreted as part of the pattern and not as a pattern separator. Make sure that you use only characters that are valid within a URI, and encode all other characters.
-   You can use an asterisk \( `*` \) as a wild card character.
-   You can define the patterns as Java regular expressions. In this case set the property [`useRegExp`](tair_props.md#useregexp-false) to true.  

###   **userAgentWhiteList = \( NoAgentSpecified \)**

Use this property to specify a list of patterns for which you want the TAI to handle the requests. Separate the patterns by whitespaces. Every product name in the HTTP header field `User-Agent` of the incoming request is compared with each of the patterns specified for this parameter.

If the TAI is enabled and the pattern specified for this property has at least one match and neither of the [`userAgentBlackList`](tair_props.md#useragentblacklist-allagentsallowed) or the [`urlBlackList`](tair_props.md#urlblacklist-wpsmyportal) have a match, then the TAI handles the request.

The default is NoAgentSpecified. This default value means that the user agent white list is not active.

You can specify the patterns with an asterisk \( `*` \) as a wild card character. You can also define the patterns as Java regular expressions. In this case set the property [`useRegExp`](tair_props.md#useregexp-false) to true.

###   **urlWhiteList = \( /wps/mycontenthander\* \)**

Use this property to specify a list of patterns for which you want the TAI to handle the requests. Separate the patterns by whitespaces. The full path information of the URL of the incoming request is compared with each of the patterns specified for this parameter. Before comparing the URL to the patterns, the protocol, server, port, and query information is removed from the URL.

If the TAI is enabled and the pattern specified for this property has at least one match and neither of the [`userAgentBlackList`](tair_props.md#useragentblacklist-allagentsallowed) or the [`urlBlackList`](tair_props.md#urlblacklist-wpsmyportal) have a match, then the TAI handles the request.

The default value is /wps/mycontenthander\*.

Use the following syntax rules for specifying the patterns:

-   You can use URI encoded patterns. For example, if you want to use the blank character as part of a pattern, you can encode it as %20. It is then interpreted as part of the pattern and not as a pattern separator. Make sure that you use only characters that are valid within a URI, and encode all other characters.  
-   You can use an asterisk \( `*` \) as a wild card character.  
-   You can define the patterns as Java regular expressions. In this case set the property [`useRegExp`](tair_props.md#useregexp-false) to true.  

**Note:** Values that you specify for the [`userAgentWhiteList`](tair_props.md#useragentwhitelist-noagentspecified) or `    [`urlWhiteList`](tair_props.md#url_white) properties come into effect only if all of the following conditions apply:  
-   The TAI is enabled by specifying [enabled = true](tair_props.md#tai_nbl).  
-   Neither of the properties [`userAgentBlackList`](tair_props.md#useragentblacklist-allagentsallowed) or [`urlBlackList`](tair_props.md#urlblacklist-wpsmyportal) has the default value asterisk specified. To enable the values specified for the white list properties, you can remove the asterisk from the black list properties and leave them without a specified value.

###   **useRegExp = \( false \)**

Use this property to determine whether or not the patterns that you specified for the black list and white list the previous properties are to be interpreted as Java regular expressions. Possible values are true or false. The default value is false. The values have the following meanings and syntax rules:  

**true**  
If you set the value for this property to true, all the patterns in the black and white lists are interpreted as Java regular expressions \(`RegExp`\). For more information about Java regular expressions syntax and usage refer to [http://docs.oracle.com/javase/tutorial/essential/regex/](http://docs.oracle.com/javase/tutorial/essential/regex/).  

Examples:  
-   `[^X]*` will match every user agent that does not contain an uppercase `X` in its product name.  
-   `.*my_browser.*` will match every user agent that contains `my_browser` in its product name.  
-   `.*%5bX%5d` is URL encoded for `.*[X]` and will match every URL that ends with `X`.  

**false**  
This is the default. If the value for this property is set to false, all patterns support only the asterisk \( \* \) as a wildcard character that matches against any string. The asterisk \( \* \) wildcard can appear anywhere in the pattern. You can use multiple asterisk \( \* \) wildcards within the same pattern.  

If you want to represent an asterisk as an actual character for matches in the pattern instead of using it as a wildcard, prefix it with a backslash like this: **\\\*** . To represent the backslash as a character for matching, code it by using a double backslash: **\\\\** .  

Examples:  
-   `*my_browser*` will match every user agent that contains `my_browser` in its product name.  
-   `/myprefix*mysuffix` will match every URL that starts with `/myprefix` and ends with `mysuffix`.  
-   `Fun\* Ag\\ent` will only match a user agent hat has `Fun* Ag\ent` as product name.  


