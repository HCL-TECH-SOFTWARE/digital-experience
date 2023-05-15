# JCR Text Search

During our measurements, we have disabled text indexing. In a production environment, text indexing is
done periodically, adding new content to the text index. However, the indexing interval is not synchronized
with our load plateaus. As a result, if we let text indexing run during our performance measurements, it
would likely reduce the reliability and repeatability of our measurements.
We do not recommend disabling text indexing in production authoring environments, as doing so would
mean that new content will not be added to the text index, and therefore would not appear in search
results.

### How to Set

In the WebSphere Integrated Solutions Console
Resources -> Resource Environment -> Resource Environment Providers -> JCR ConfigService
PortalContent

Name: jcr.textsearch.enabled
Value: false