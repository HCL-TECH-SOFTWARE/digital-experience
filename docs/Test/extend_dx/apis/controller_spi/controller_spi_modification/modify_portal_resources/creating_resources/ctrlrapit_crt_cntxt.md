# Obtaining creation contexts

You need a creation context to define immutable properties of a resource that you create. You can use the creation context builder factory to generate multiple such creation contexts without having to implement those interfaces directly.

The creation context builder factory can do both of the following:

-   Generate single creation contexts, that is contexts that contain only one or more immutable properties. Examples:

    -   A creation context for an object ID contains only the object ID property.
    -   A layout control creation context contains two properties, portlet definition and portlet entity.
    
-   Combine several creation contexts into one in order to define multiple immutable properties.

!!!note
    You can only combine creation contexts that have not already been combined by using the creation context builder.

Example 1 - Obtaining a simple creation context:

```
// obtain creation context builder
final CreationContextBuilderFactory builder = CreationContextBuilderFactory.getInstance();

// obtain creation context
final CreationContext creationContext = builder.newIdentifiableCreationContext(objectID);

```

Example 2 - Obtaining a combined creation context:

```
// obtain creation context builder
final CreationContextBuilderFactory builder = CreationContextBuilderFactory.getInstance();

// obtain combined creation context
final CreationContext creationContext = builder.combine(new CreationContext[] 
     {builder.newContentPageCreationContext(true), builder.newIdentifiableCreationContext(objectID)});

```

The following list describes creation contexts that you can create by using the creation context builder factory:

-   **ContentPageCreationContext**

    Use this creation context to define whether a page that you create is private. This applies to the resource type `ContentPage` on the `ContentModelController`.

-   **DerivedContentPageCreationContext**

    Use this creation context to define the derivation parent of a page that you want to create. This applies to the resource type `ContentPage` on the `ContentModelController`.

    !!!note
        This creation context derives from the `ContentPageCreationContext`.

-   **IdentifiableCreationContext**

    Use this creation context to define an object ID for a resource that you want to create. This applies all resource types: `ContentModelController`, `LayoutModelController`, `PortletModelController`.

-   **PortletDefinitionCloningContext**

    Use this creation context to define the portlet definition ID, and optionally, the domain for the portlet definition that you want to clone. This applies to the resource type `PortletDefinition` on the `PortletModelController`.

-   **PortletEntityCreationContext**

    Use this creation context to define the parent ID, and optionally, the domain for the portlet entity that you want to create. This applies to the resource type `PortletEntity` on the `PortletModelController`.



