# Nesting lists


You can render nested lists by nesting list-rendering contexts. Nested lists can be useful if the individual entries in your list contain associated information in the form of a list as well. For example, you might want to show a list of communities, including all the community members for each community. In this case, you can retrieve the individual lists of community members by rendering nested lists from within the individual items of the community list.

To create a nested list-rendering context, you add an extra `[Plugin:ListRenderingContext action="set"]` plug-in to your list design component. This new child context replaces the parent list-rendering context that was active before the new context was set. To remove the nested context and reestablish the parent context that was active before, add a `[Plugin:ListRenderingContext action="remove"]` tag to your design after you include the corresponding list design component that renders the nested list.

To remove a currently active nested list-rendering context, add the following tag to your design: `[Plugin:ListRenderingContext action="remove"]`

