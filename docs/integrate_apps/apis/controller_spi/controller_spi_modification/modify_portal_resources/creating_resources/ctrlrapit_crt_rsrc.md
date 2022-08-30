# Creating resources

You create resources by using methods of controllers. Each controller type enables the specific resources for its type of model.

The following list shows the existing controllers and the resources that you can create by using them:

-   `ContentModelController`. This enables the creation of resources of the following types:
    -   `ContentPage`
    -   `ContentLabel`
    -   The following two types of content URL:
        -   `ExternalContentURL`
        -   `InternalContentURL`
-   `LayoutModelController`. This enables the creation of resources of the following types:
    -   `LayoutContainer`
    -   `LayoutControl`
-   `PortletModelController`. This enables the creation of resources of the following types:
    -   `PortletDefinition`
    -   `PortletEntity`

To create a resource, proceed by the following steps:

1.  Obtain a creation context.

    Take the following two steps:

    1.  Obtain the creation context builder factory. For details about how to do this step, refer to [Obtaining creation contexts](ctrlrapit_crt_cntxt.md).

    2.  Obtain a creation context from the creation context builder. For details about how to do this step, refer to [Obtaining creation contexts](ctrlrapit_crt_cntxt.md).

2.  Obtain a controller.

3.  Create a resource.

    To do this step, use the `create(Class, CreationContext)` method of the controller and provide both arguments.


1.  The created resource is not part of the topology, unless you insert it into the topology by using the `insert()` method of the controller.
2.  For content nodes, that is content pages, content labels, and content URLs, you must set a supported markup. Otherwise, they do not show in the read-only model.

Example 1 - Creating a resource by using the creation context builder: This example creates a `ContentPage` that you can later insert into the content model.

```
// obtain creation context builder
final CreationContextBuilderFactory builder = CreationContextBuilderFactory.getInstance();

// obtain creation context
final CreationContext creationContext = builder.newIdentifiableCreationContext(objectID);

// create resource (which is not yet part of the topology of the controller!)
final Modifiable modifiable = controller.create(ContentPage.class, creationContext);
```

Example 2 - Cloning an existing portlet definition: To clone an existing portlet definition, create a portlet definition by using a portlet model controller and specify a `PortletDefinitionCloningContext`.

```
// obtain portlet definition cloning context; includes obtaining a portlet definition
final PortletDefinitionCloningContext context = ... (portletDefinition)

// create portlet definition
pmController.create(PortletDefinition.class, context);
```

The result of the `create()` method is a `Modifiable` instance of the created resource that you can cast to the type of the created resource as shown in the following example.

Example 3 - Casting a created resource to its type:

```
final ModifiableContentPage modifiableContentPage = (ModifiableContentPage) 
      controller.create(ContentPage.class, creationContext); 

```

-   **[Obtaining creation contexts](../dev/ctrlrapit_crt_cntxt.md)**  
You need a creation context to define immutable properties of a resource that you create. You can use the creation context builder factory to generate multiple such creation contexts without having to implement those interfaces directly.


