# Page component configuration items

Use page component configuration items to customize different aspects of individual page components.

Page component types include:

-   **Lists**

    When you use a list page component, you must select a list component and a list presentation component to use with it, along with a title and styling. The configuration settings are used to assign a context override, categories, and templates.

-   **Slideshow**

    A slideshow is similar to a list, but with extra elements to drive the slideshow widget.

-   **Carousel**

    A carousel is similar to a list, but with extra elements to drive the carousel widget.

-   **Block**

    A block page component is a generic wrapper for a component, with the ability to supply a title, styling, and a context override to use in the component. For example, a block page component can be used to create a Navigation page component.


Each of the authoring templates for the page component configuration content has a matching presentation template. The presentation template renders a component reference element in the content called "Component". Here, a "Component" refers to the Web Content Manager "Component" item type, as opposed to the pre-configured portlets known as "Page Components". The element that is referenced by the presentation template refers to an HTML component in the case of a Block, and a Menu, Personalization, or a Navigator component for the other types. This component is rendered by the special HTML components "Component In Context" and "Component In Context with List Presentation Override" that render the component in the appropriate context, by using the "InContext" tag.

Selected header and footer components are rendered before and after the main component, and the whole thing is wrapped in a <div\> tag that can be styled by using a CSS class.

For Lists, Slideshows, and Carousels, a "result design component" is also selected. This allows the same queries to be reused throughout the site, but with different fields being displayed with different formatting.

The page component configuration types in Content Template are just a starting point. This is a method for integrating functions with your content and giving non-technical users control over the functions. They also represent a design strategy that encourages designers to build in a reusable way that can be applied throughout your site.

The types in Content Template are purposely generic, but this also means that they are not as simple as they might be. You can always choose to build more specific configuration types if you want to offer a simpler interface for authors.

-   **[The role of the In Context tag in presentation templates \| CTC for HCL Digital Experience](../ctc/ctc_arch_prestemp_jspcontext.md)**  
The Component in Context HTML component uses the InContext tag to set up a context for the execution of the main component. Setting context includes setting paths, categories, and templates into the request, then running the component in either a selected context or the current page context.
-   **[The role of the Context Override field](../ctc/ctc_arch_prestemp_contexttover.md)**  
Setting a context override is the key to getting many of the components to select content throughout the site. Overrides also allow reuse of these components \(for example, by avoiding the hardcoding of site areas into menus and rules\).


