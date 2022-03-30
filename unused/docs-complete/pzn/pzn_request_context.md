# Request Context 

The Request Context is the interface used to access various attributes for rules.

The Request Context, and any request values accessed via the request context, are only valid for the life of the request.

The Request Context string is used in caching lookups. The lookup is created by using a user-specified string combined with query values as the lookup key. The user-specified string should uniquely represent the current Request Context. This key is stored under ibm.wcp.cache.user.key as a request attribute or as a session attribute with the request attribute taking precedence.

## Accessing the Request Context

The Request Context provides the Personalization rules engine with the data and environmental information needed for rules processing. In other words, the Request Context contains all the input to execute Personalization content spots and rules. This includes simple inputs like request and session data, and more advanced input like the user object.

You can access the Request Context from a content spot by first using the setRequest method of the content spot to back the content spot with a request, and then by calling getContext to retrieve the context. You can also use the Request Context to call directly into the ResourceDomain3 and ResourceManager3 APIs.

The Request Context allows you to retrieve session, request, portlet attribute, date, cookie, and other data and environmental information from the resource layer.

The Request Context includes:

-   Session

    The session information identifies the HttpSession object that is associated with the current user.

-   Request date

    This request date is the date the HTTP request was received. This information supports rules that have date-dependent actions.


Since Personalization uses the Request Context to contain all the rule input, the Request Context must be set onto the content spot prior to rule execution. The code with the content spot’s useBean tag must be similar to:

```
<jsp:useBean id="gold_promo_bean"
class="yourco.goldpromo.BannerSpot" />
<% gold_promo_bean.setRequest (request); %> 
```

In the previous section, the jsp:useBean tag constructs the yourco.goldpromo.BannerSpot class and stores an instance of that class into the local variable gold\_promo\_bean. The next line calls setRequest to put the HttpServletRequest or PortletRequest onto the newly constructed content spot bean. The content spot then implicitly constructs a Request Context which is backed by the given HttpServletRequest or PortletRequest. This Request Context then provides access to that request’s parameters and attributes and attributes of the session through the com.ibm.websphere.personalization.RequestContext interface.

In some cases, it may be useful to call into a content spot without having access to an HttpServletRequest or PortletRequest. The interface com.ibm.websphere.personalization.PznRequestObjectInterface can be used in these situations. A implementation of this class called com.ibm.websphere.personalization.PznRequestObjectImplementor is provided for convenience.

**Parent topic:**[Personalization terms ](../pzn/pzn_concepts.md)

**Previous topic:**[Application object ](../pzn/pzn_application_object.md)

**Next topic:**[Query framework ](../pzn/pzn_query_framework.md)

**Parent topic:**[Personalization programming reference ](../pzn/pzn_programming_reference.md)

**Parent topic:**[Personalization terms ](../pzn/pzn_concepts.md)

**Previous topic:**[Application object ](../pzn/pzn_application_object.md)

**Next topic:**[Query framework ](../pzn/pzn_query_framework.md)

**Parent topic:**[Personalization programming reference ](../pzn/pzn_programming_reference.md)

