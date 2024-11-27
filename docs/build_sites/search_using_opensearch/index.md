# End-User Search Powered by OpenSearch

This guide explains how to use the new search functionality powered by open search. Follow along to learn about its components, styling options, and extendable features.

The default search component, shown in the image below, is responsive and can be imported and used anywhere within an application.

![Screenshot](../../assets/search_result.png)


## Overview of the search functionality.

The search component is designed to be: 

1. **User-friendly:** Offers intuitive search interactions.
2. **Customizable:** Allows user-defined styling and extensions.
3. **Extendable:** Can be integrated anywhere in your application.

## Components Overview

AC (Atomic Components)
These are the smallest posssible building blocks of the search functionality:

- **dx-ac-base-element:** This class sets up a base element for building a custom web component that is highly reusable, can handle internationalization/localization, and encapsulates its internal structure using the Shadow DOM.        
- **dx-button:** This custom button component provides a highly customizable button with internationalization support, conditional rendering for icons and text, and a clean separation of concerns for styling via shadow DOM and CSS parts.                   
- **dx-input-select:** This is a flexible, accessible, and customizable select component for a web application, handling a variety of user interactions and scenarios. And other features of this component is          
- **dx-list:** This component is a simple wrapper around an unordered list (<ul>), and it allows for flexibility by using a slot to project light DOM content (e.g., list items) into the component. The part="unordered-list" attribute helps with styling by allowing you to target the <ul> from outside the component.                     
- **dx-switch:** This is a well-structured custom component that is fully accessible and customizable, with clear separation of behavior (handling toggle state and events) and appearance (dynamic part attribute for CSS styling). As of now we are not using this component.
- **dx-anchor:** This component provides a highly flexible and reusable anchor element with support for pagination and custom actions, making it suitable for interactive UI elements like navigation menus or paginated lists.               
- **dx-chip:** This component is ideal for use in UIs where you need to display a "chip" or "tag" with a numerical count, such as notification counters, tag lists, or pill-style labels, with built-in localization support.                  
- **dx-input-textfield:** This component is well-suited for creating rich input fields with enhanced user experience, such as search bars, forms, or any situation where text input with optional icons and labels is required.         
- **dx-search-center-layout:** This is a customizable web component that provides a structured layout for a search interface. It includes slots for injecting content like a header, search input, search output, and an optional tag cloud. The component dynamically adjusts its layout based on the isTagsAvailable property: when true, it displays a tag cloud and a full search container; when false, it hides the tag cloud and simplifies the search container. 
- **dx-toggle-button:** The component supports customizable icons for each button and adjusts its style based on the selection and the outlined setting. It is designed to be flexible and accessible, with separate styles for the selected and unselected states, and allows for easy integration into other UI components.
- **dx-avatar:** The component ensures flexibility by allowing customization of the avatar's appearance, and it uses placeholder assets if specific URLs are not provided. The renderAvatarContent method dynamically decides what to render based on the variant. As of now it is not in use in our open search component.                
- **dx-header:** The component also supports localization, making it adaptable to multiple languages. Overall, the DxHeader offers a flexible and responsive header solution with various customization options for different user interfaces.               
- **dx-list-item:**  The component is designed to be flexible and reusable in various list-based UI components, with the ability to mark items as selected and apply different styles accordingly. The list item also supports a slot element, allowing content to be inserted into the item when the component is used.         
- **dx-svg-icon:** This component is useful for displaying scalable vector icons with customizable colors and sizes, ideal for use in dynamic UIs where the icon appearance might need to change based on context or state.


FCC (Functional Composite Components)
Composite components combines atomic elements to provide higher-level functionality:

- **dx-circular-progress:** This component is a customizable circular progress spinner that uses SVG graphics and CSS animations to display a loading state. It supports various styling options like size, stroke width, and color, and can be integrated into any web app to visually indicate progress.             
- **dx-search-input-query:** It provides a rich set of properties for customization, including the ability to disable the input and define placeholder and label text. The component also checks the URL for existing query parameters on load, making it ideal for dynamic search-driven applications.             
- **dx-search-output-item-attribute:** This component is a flexible and reusable element designed to display specific attributes of search results. By consuming the outputContext, it dynamically renders different types of information, such as links, document types, and descriptions, based on the attribute specified. This allows it to be integrated into larger search result display systems with different data sources and attributes. 
- **dx-search-tag-cloud:** The DxSearchTagCloud component is a flexible and interactive component that provides a visual representation of search tags in either a tag cloud or list format. It enables users to select multiple tags, toggle between views, and triggers search updates based on user selection. The component is extensible and can be connected to a broader application via message passing (BroadcastChannel).
- **dx-fcc-base-element:** This is a base class in the FCC framework that integrates BroadcastChannel for component communication and ensures no shadow DOM is used. It also handles cleanup of resources when components are disconnected.               
- **dx-search-input-scope:** This component is a well-structured LitElement-based component designed to manage and display a list of content sources for a search input. It fetches data from an external service, allows users to select a content source, and updates the search scope dynamically. It can be used as part of a larger search interface to provide filtering options based on available content sources.             
- **dx-search-output-pagination:** This component is a well-structured, flexible pagination component designed for search results. It supports multiple pagination types, including infinite scroll and numbered pagination, and is capable of handling different languages and locales. The use of debouncing for scroll events and clean separation of concerns makes it both efficient and maintainable.      
- **dx-search-tag-match:** This component is a robust and flexible solution for rendering and managing search-related tag matches. It listens for changes in the search result context and updates the UI accordingly. The component also provides a user-friendly way to clear tag matches, improving the overall search experience.
- **dx-search-input-button:** This is a search button component that integrates with the BroadcastChannel to trigger a search action when clicked. It supports properties for customization, including disabling the button and changing the button text. The component leverages debouncing to optimize search requests and provides a clean, reusable UI element for triggering search functionality in a web application.         
- **dx-search-input-type:** This component is a flexible and dynamic search input dropdown designed for selecting a document object type in a search interface. It fetches available searchable fields from a backend service, updates the selected document type, and communicates this change through the searchChannel to update search parameters. The component is built using LitElement, which ensures efficient rendering and reactivity.            
- **dx-search-output:** This component is a comprehensive search result display component that integrates with backend search services, handles various search states (loading, results, no results, error), and dynamically updates the UI based on search parameters. It's well-suited for applications that require real-time search capabilities, including pagination, filtering, and handling errors gracefully.

## Styling the search components

## Default styling

Each component comes with deafult styles. for example

```scss
/* for dx-search-center-layout */
dx-search-center-layout::part(main) {
  display: flex;
}
/* for dx-input-textfield */
dx-input-textfield::part(div) {
  width: 100%;
  position: relative;
}
/* for dx-button */
dx-button::part(button) {
  @include button;
}
/* for dx-circular-progress */
@keyframes rotateCircularProgress {
  100% {
   transform: rotate(360deg);
  }
}
/* for dx-header */
dx-header::part(div) {
  width: 100%;
  position: relative;
}
/* for dx-chip */
dx-chip::part(chip-div) {
  background-color: $BLACK8P;
  border-radius: 4px;
  display:inline-flex;
  padding:8px 8px 8px 8px;
  align-items: center;
  height: 16px;
}
/* for dx-avatar */
dx-avatar::part(avatar-div) {
  height: 32px;
  width: 32px;
  border: 1px solid $avatar-border-color;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;
}
// for the input select fields
dx-search-center-layout .search-input-div {
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  dx-search-input-scope,
  dx-search-input-type {
    display: flex;
    align-self: center;
    max-width: 49%;
    width: 49%;
  }
}
// for the input query field and button
dx-search-center-layout div.search-input-div {
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  dx-search-input-query {
    display: flex;
    align-self: center;
    width: calc(100% - 125px);
    max-width: calc(100% - 125px);
  }
```


## Customizing Styles

You can override styles by targeting the component's class names:

!!! note
    The `part` attribute is used to name parts of a shadow tree, which can then be styled from outside the shadow DOM using the `::part()` pseudo-element. This allows you to apply CSS styles to shadow tree elements from the parent DOM.

```css
/* for dx-button */
dx-button::part(button-start-icon) {
  color: #FBCD00;    /* change the color as per your requirments and also othere things can be changed */
  height: 16px;
  margin-right: 4px;
  width: 16px;
}
/* for dx-input-textfield */
dx-input-textfield::part(label) {
  @include font-default;
  width: 100%;
  margin-bottom: 16px;
  display: red;
  color: #AFC002;
}

```
Similar way other components can also be overridden.