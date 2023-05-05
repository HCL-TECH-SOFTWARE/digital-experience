# Content Scalability

In our own internal rendering tests, we have scaled as high as 1 million total items across 10 libraries with
100,000 items per library in rendering. In Authoring, we have scaled as high as 500,000 items (10
libraries with 50,000 items per library).

When scaling, the primary issue appears to be the total number of children under any one node. We
recommend having no more than 25,000 items.