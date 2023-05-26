# Public Page Invalidation

By default, on every page modification, Portal checks if the anonymous user has permissions on that page.
If so the ContentModel for the anonymous user will be invalidated in addition to the model of the user who
executed the modification. This behavior may have a performance impact if there are a large number of
public pages. It can be disabled by changing the content.public.page.invalidation property.
In the benchmark environment, there was no improvement in our own internal scenario because public
pages are not modified during the scenario.

### How to Set

In the WebSphere Integrated Solutions Console
Resources -> Resource Environment -> Resource Environment Providers -> WP ConfigService

Add the following new property:
Name: content.public.page.invalidation
Value: false