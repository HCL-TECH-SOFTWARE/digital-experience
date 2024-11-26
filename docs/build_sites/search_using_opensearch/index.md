# End-User Search Powered by OpenSearch

This guide explains how to use the new search functionality powered by open search. Follow along to learn about its components, styling options, and extendable features.

The default search component, shown in the image below, is responsive and can be imported and used anywhere within an application.

![Screenshot](../../../assets/search_result.png)


## Overview of the search functionality.

The search component is designed to be: 

1. **User-friendly:** Offers intuitive search interactions.
2. **Customizable:** Allows user-defined styling and extensions.
3. **Extendable:** Can be integrated anywhere in your application.

## Components Overview

AC (Atomic Components)
These are the smallest posssible building blocks of the search functionality:

- **dx-ac-base-element:** This is the Base class for all AC components.        
- **dx-button:** The button component is used as search button in the default OpenSearch but it can be customize as per the customers need.                    
- **dx-input-select:** This a a drop down component used as 'Select a content source' and also used as 'Select and Attribute'.          
- **dx-list:** List component all the list items of the drop down will display under this component.                     
- **dx-switch:**
- **dx-anchor:** The dx-anchor is used as an anchor tag for pagination and also to display the search result.                
- **dx-chip:** This atomic component is used inside the search-tag-colud functional component to display the count of the tags.                  
- **dx-input-textfield:** This is input component and used as Search input field.          
- **dx-search-center-layout:** The dx-serach-center-layout is used as the layout of the search template.     
- **dx-toggle-button:** As the name suggest it is used as toggle button inside the tag cloud.
- **dx-avatar:**                   
- **dx-header:** It is a header component and used inside the search center layout.                
- **dx-list-item:**  It is a list component under which all the search result will display.             
- **dx-svg-icon:** This icon component will take color and size from passing params as parent component.


FCC (Functional Composite Components)
Composite components combines atomic elements to provide higher-level functionality:

- **dx-circular-progress:** This Fcc is used as a progress indicator while performing a search.              
- **dx-search-input-query:** This components uses the dx-input-textfiled ac and also the search label comes under this used for searching.              
- **dx-search-output-item-attribute:** This is Search output item attribute component. 
- **dx-search-tag-cloud:** 
- **dx-fcc-base-element:** This is Base class for all FCC components.                
- **dx-search-input-scope:** This is the base class for the drop down ac components.             
- **dx-search-output-pagination:** This is used at the bottom of the search page if there are more results are displaying for a search then this is used.        
- **dx-search-tag-match:**
- **dx-search-input-button:** Base class for the dx-button, is used as the search buttom in the opensearch.            
- **dx-search-input-type:** This is the base class for the drop down ac components and very similar to the dx-search-input-scope.            
- **dx-search-output:** This is base component for displaying the loading svg icon and also the searched results.

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

!!!  "Note"
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