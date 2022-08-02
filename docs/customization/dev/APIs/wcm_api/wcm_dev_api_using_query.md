# The Query API

The query API provides querying capabilities that are much more rich than the "findBy" methods on the workspace class.

Here is an example of how to retrieve and use the QueryService to find the first content directly under the SiteArea parentSiteArea that has an element that is called "myElement":

```
            Content contentWithMyElement;
            QueryService queryService = workspace.getQueryService();
            Query query = queryService.createQuery(Content.class);
            query.addParentId(parentSiteArea.getId(), QueryDepth.CHILDREN);
            try
            {
               ResultIterator resultIterator = queryService.execute(query);
               if (resultIterator.hasNext())
               {
                  Content childContent = (Content) resultIterator.next();
                  while (childContent.hasComponent("myElement"))
                  {
                     contentWithMyElement = childContent;
                     break;
                  }
               }
            }
            catch (QueryServiceException e)
            {
               // Handle exception
            }
           
```

Here is an example of how to use create a query with 'AND' and 'OR' conditions by using Conjunction and Disjunction. The example processes all content whose name starts with 'news', or whose name starts with 'article' and has a keyword 'news':

```
            QueryService queryService = workspace.getQueryService();
            Query query = queryService.createQuery(Content.class);
            Disjunction or = new Disjunction();
            or.add(Selectors.nameLike("news%"));
            Conjunction and = new Conjunction();
            and.add(Selectors.nameLike("article%"));
            and.add(ProfileSelectors.keywordsContain("news"));
            or.add(and);
            query.addSelector(or);
            try
            {
               ResultIterator resultIterator = queryService.execute(query);
               while (resultIterator.hasNext())
               {
                  Content content = (Content) resultIterator.next();
                 
                  // Process Content result
               }
            }
            catch (QueryServiceException e)
            {
               // Handle exception
            }
           
```

**Parent topic:**[The HCL Web Content Manager API](../wcm/wcm_dev_api.md)

