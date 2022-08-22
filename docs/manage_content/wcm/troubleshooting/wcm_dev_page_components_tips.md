# Troubleshooting page components

Tips and tricks to help you troubleshoot any issues with your customized page components.

## Placing a link component inside an iframe and setting the link to point to an external url

Some websites, like Google.com, send a response header `X-Frame-Options=SAMEORIGIN` that prevents itself from being loaded into an iframe if the containing frame isn't from the same domain.

If you are placing a link component inside an iFrame and setting the link to point to an external url, make sure that the pointing website does not have this response header set. Alternately, change the link attribute "target" with the value of `_parent` or `_top` to load the new web URL in current top-level browsing context.


