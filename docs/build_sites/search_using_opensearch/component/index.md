# End-User Search with Opensearch: Web Components

This guide explains how to use the HCL End-user Search UI. Follow along to learn about its components, styling options, and extendable features.

The default search component, shown in the image below, is responsive and can be imported and used anywhere within an application.

![Screenshot](../../../assets/HCL_Search_Search_Result.png)


## Overview of the search functionality

The search component is designed to be: 

1. **User-friendly:** Offers intuitive search interactions.
2. **Customizable:** Allows user-defined styling and extensions.
3. **Extendable:** Can be integrated anywhere in your application.


## Web Components: Features and Benefits
Web components provide the following benefits:

1. **Encapsulation:** Styles and functionality are isolated from the rest of your application using Shadow DOM.
2. **Reusability:** Build once and reuse across different parts of your application.
3. **Customizability:** Use attributes, properties, and part selectors to customize components without altering their core code.

Why did we use Broadcast Channel API?

1. **Real-Time Synchronization:** Keeps components in sync, such as updating search results when a new query is entered.
2. **Decoupled Design:** FCC components can work independently and communicate without direct references.
3. **Flexibility:** FCC components can be distributed across different sections of the application, ensuring modularity.

## Components Overview

AC (Atomic Components)
Atomic Components are the smallest possible building blocks of the search functionality, such as buttons, input fields, and chips. These components are built using Web Components standards like Shadow DOM for encapsulation and reusability.

- **dx-ac-base-element:** This class creates a foundational element for developing custom web components. It supports internationalization and localization, and uses the Shadow DOM to encapsulate its internal structure, ensuring high reusability. 

    | **Properties** | **type** | **Description** | **Default** |
    | ------------ | ------------- | ------------ | --------------|
    | **id** | String | A unique identifier for the component instance. This property is automatically assigned using a UUID generator when the component is instantiated. | Generated UUID value |


- **dx-button:** A customizable button component with internationalization support, optional icon, and text rendering, and isolated styling using Shadow DOM and CSS parts. 

    | **Properties** | **type** | **Description** | **Default** |
    | -------------- | ---------| -----------------------------------------------------------------------|--------------|
    | **disabled**   | Boolean  | Indicates whether the button is disabled, preventing user interaction.        | false |
    | **outlined**   | Boolean  | Indicates whether the button should be rendered with an outlined style.       | false |
    | **imgurl**     | String   | URL of an image to display as an icon on the button.                          | undefined |
    | **buttontext** | String   | Text to display on the button.                                                | undefined |
    | **endicon**    | Boolean  | If true, displays the image as an end icon instead of a start icon.           | false |
    | **focused**    | Boolean  | Indicates whether the button currently has focus. This is managed internally. | false |

- **dx-input-select:** This is a flexible, accessible, and customizable select component for a web application, handling a variety of user interactions and scenarios.

    | **Properties** | **type** | **Description** | **Default** |
    | -------------- | ---------| -----------------------------------------------------------------------|--------------|
    | **label**   | String | The label displayed above the dropdown. Defaults to a context-based message if not provided. | '' |
    | **disabled**   | Boolean | Indicates if the dropdown is disabled, preventing user interaction. | false |
    | **selectedValue**     | String | The currently selected value. | undefined |
    | **selectedId** | String | The id of the currently selected option. | undefined |
    | **options**    | String, String[], OptionData[] | List of options to display in the dropdown. Can be a JSON string, an array of strings, or an array of objects with id and name properties. | [] |
    | **field**    | DxSearchInputFieldType, String | The type of the input field, used to determine default labels or handle specific behaviors. You can use DxSearchInputFieldType strings such as "contentSource" or "documentObjectType" or leave it blank. | '' |

- **dx-list:** This component wraps an unordered list (`<ul>`) and uses a slot to insert content (e.g., list items) into the component. The `part="unordered-list"` attribute allows external styling of the `<ul>`.                     
- **dx-switch:** A fully accessible and customizable custom component that separates behavior (toggle state and events) from appearance (CSS styling via dynamic part attribute). Currently, this component is not in use.

    | **Properties** | **type** | **Description** | **Default** |
    | -------------- | ---------| -----------------------------------------------------------------------|--------------|
    | **isChecked**   | Boolean | Indicates whether the switch is toggled on (true) or off (false). | false |
    | **isDisabled**   | Boolean | When true, disables the switch and prevents user interaction. | false |

- **dx-anchor:** A versatile anchor component that supports pagination and custom actions, ideal for navigation menus and paginated lists.   

    | **Properties** | **type** | **Description** | **Default** |
    | -------------- | ---------| -----------------------------------------------------------------------|--------------|
    | **url** |	String |	Specifies the URL the anchor element navigates to.|	'' |
    |**weight** |	Number |	Represents a custom weight value for the anchor (use case-specific).|	0 |
    |**title** |	String |	Specifies the title attribute, providing additional information about the link.|	'' |
    |**name** |	String	| The text content or label of the anchor element.|	'' |
    |**rel**	 | String	| Specifies the relationship between the current document and the linked document (e.g., noopener, nofollow).|	'' |
    |**disabled** |	Boolean	| Indicates if the anchor element is disabled (non-functional).|	false |
    |**selected**	| Boolean	| Indicates if the anchor is currently selected (used in contexts like pagination).|	false |
    |**value**	| Number	| Represents a custom numeric value associated with the anchor (use case-specific).|	0 |
    |**mode**	| String	| Specifies the mode of the anchor, controlling its behavior and styling. You can use as mode the string "pagination" or "result-title" or leave it blank.|	'' |
    |**imgurl**	| String	| Specifies the URL for an image to display inside the anchor (if no text label is provided).	|'' |
    |**target**	| String	| Specifies where to open the linked document (e.g., _blank, _self).| undefined |

- **dx-chip:** This component is ideal for use in UIs where you need to display a "chip" or "tag" with a numerical count, such as notification counters, tag lists, or pill-style labels, with built-in localization support. 

    | **Properties** | **type** | **Description** | **Default** |
    | -------------- | ---------| -----------------------------------------------------------------------|--------------|
    | **name** |	String |	Specifies the name or label of the chip.|	'' |
    |**count** |	Number |	Represents a numeric count associated with the chip.|	0 |
    |**showChipCount** |	Boolean |	Determines whether the numeric count (count) should be displayed alongside the chip name.|	false |

- **dx-input-textfield:** This component is well-suited for creating rich input fields with enhanced user experience, such as search bars, forms, or any situation where text input with optional icons and labels is required.

    | **Properties** | **type** | **Description** | **Default** |
    | -------------- | ---------| -----------------------------------------------------------------------|--------------|
    | **value** |	String |	The current value of the textfield. |	'' |
    |**type** |	String |	Specifies the input type (e.g., text, password, email, etc.). |	'text' |
    |**label** |	String, undefined |	The label displayed above the textfield. |	undefined |
    |**placeholder** |	String	| The placeholder text displayed inside the textfield.|	'' |
    |**disabled** |	Boolean	| Indicates whether the textfield is disabled. |	false |
    |**iconStartUrl**	| String, undefined	| URL of the icon displayed at the start of the textfield. |	undefined |
    |**iconEndUrl**	| String, undefined	| URL of the icon displayed at the end of the textfield.|	undefined |
    |**field**	| DxSearchInputFieldType, String	| A field identifier for the input, useful in custom events or for associating the input with specific data. You can use DxSearchInputFieldType string "queryString" or pass your own field name.|	'' |

- **dx-search-center-layout:** This is a customizable web component that provides a structured layout for a search interface. It includes slots for injecting content like a header, search input, and search output.

    <!-- | **Properties** | **type** | **Description** | **Default** |
    | -------------- | ---------| -----------------------------------------------------------------------|--------------|
    |**isTagsAvailable** |	Boolean	| Indicates whether tags are available for display. Controls visibility of tag layout. |	false | -->
  
- **dx-toggle-button:** The component supports customizable icons for each button and adjusts its style based on the selection and the outlined setting. It is designed to be flexible and accessible, with separate styles for the selected and unselected states, and allows for easy integration into other UI components.

    | **Properties** | **type** | **Description** | **Default** |
    | -------------- | ---------| -----------------------------------------------------------------------|--------------|
    |**disabled** |	Boolean	| Determines if the button is disabled. |	false |
    |**outlined** |	Boolean	| Controls if the button has an outlined style.|	false |
    | **selectedValue** |	String |	The currently selected value of the toggle button. |	'' |
    |**iconUrls** |	String[] |	Array of URLs for the icons displayed on the buttons. |	[] |
    |**values** |	String[] |	Array of values corresponding to each button's selection state. |	[] |

- **dx-avatar:** The component ensures flexibility by allowing customization of the avatar's appearance, and it uses placeholder assets if specific URLs are not provided. The renderAvatarContent method dynamically decides what to render based on the variant. As of now it is not in use in our OpenSearch component.  

    | **Properties** | **type** | **Description** | **Default** |
    | -------------- | ---------| -----------------------------------------------------------------------|--------------|
    |**variant** |	String	| Defines the avatar's visual variant (e.g., avatar-letter, avatar-icon, or avatar-img). |	undefined |
    |**imgUrl** |	String	| The URL of the image to be displayed as the avatar when the variant is set to avatar-img.|	undefined |
    | **iconUrl** |	String |	The URL of the icon to be displayed as the avatar when the variant is set to avatar-icon. |	undefined |
    |**avatarText** |	String |	The text to be displayed in the avatar when the variant is set to "avatar-letter".  |	undefined |

- **dx-header:** The component also supports localization, making it adaptable to multiple languages. Overall, the DxHeader offers a flexible and responsive header solution with various customization options for different user interfaces.  

    | **Properties** | **type** | **Description** | **Default** |
    | -------------- | ---------| -----------------------------------------------------------------------|--------------|
    |**color** |	String	| Sets the color for the header's text and other elements. |	'rgba(0, 0, 0, .32)' |
    |**title** |	String	| The title displayed in the header.|	'' |
    | **showBackIcon** |	Boolean |	Determines if the back icon should be shown. |	false |
    |**isSideNavOpen** |	Boolean |	Indicates if the side navigation is open. |	false |
    |**disabled** |	Boolean |	If true, disables certain components in the header. |	false |
    |**variant** |	HEADER_VARIANT |	The predetermined structure and styling of the header according to its use-case. You can use "header-endUser" |	undefined |

- **dx-list-item:**  The component is designed to be flexible and reusable in various list-based UI components, with the ability to mark items as selected and apply different styles accordingly. The list item also supports a slot element, allowing content to be inserted into the item when the component is used.

    | **Properties** | **type** | **Description** | **Default** |
    | -------------- | ---------| -----------------------------------------------------------------------|--------------|
    |**key** |	String	| A unique key for the list item, typically used to identify it within a list. |	'' |
    |**isSelected** |	Boolean	| A boolean to track if the list item is selected or not.|	false |
    
- **dx-svg-icon:** This component is useful for displaying scalable vector icons with customizable colors and sizes, ideal for use in dynamic UIs where the icon appearance might need to change based on context or state.

    | **Properties** | **type** | **Description** | **Default** |
    | -------------- | ---------| -----------------------------------------------------------------------|--------------|
    |**color** |	String	| The color for the SVG icon. If useCurrentColor is false, this color will be applied directly to the SVG's fill. |	'' |
    |**size** |	String	| The size of the icon (used for both width and height). |	'' |
    | **useCurrentColor** |	Boolean |	If true, the icon will inherit the color from the parent element's color property (using CSS currentColor). |	false |
    |**icon** |	TemplateResult |	The SVG icon content, passed as a template to render the icon. |	undefined |


FCC (Functional Composite Components)
Functional Composite Components combine Atomic Components to deliver higher-level functionality, such as displaying search results or managing pagination.

- **dx-circular-progress:** This component is a customizable circular progress spinner that uses SVG graphics and CSS animations to display a loading state. It supports various styling options like size, stroke width, and color, and can be integrated into any web app to visually indicate progress. 

    | **Properties** | **type** | **Description** | **Default** |
    | -------------- | ---------| -----------------------------------------------------------------------|--------------|
    |**size** |	Number	| The size (diameter) of the circular progress element. |	100 |
    |**strokewidth** |	Number	| The width of the circle's stroke. |	4 |
    | **trailcolor** |	String |	The color of the trail (inactive portion) of the circle. |	#D6D6D6 |
    |**valuecolor** |	String |	The color of the active portion of the circle. |	#0550DC |

- **dx-search-input-query:** It provides a rich set of properties for customization, including the ability to disable the input and define placeholder and label text. The component also checks the URL for existing query parameters on load, making it ideal for dynamic search-driven applications.  

    | **Properties** | **type** | **Description** | **Default** |
    | -------------- | ---------| -----------------------------------------------------------------------|--------------|
    |**field** |	String	| The field name for the search input. |	'' |
    |**queryString** |	String	| The query string value for the search input. |	'' |
    | **disabled** |	Boolean |	Whether the input field is disabled. |	false |
    |**label** |	String |	The label for the input field. |	'' |
    |**placeholder** |	String |	The placeholder text for the input field. |	'' |

- **dx-search-output-item-attribute:** This component is a flexible and reusable element designed to display specific attributes of search results. By consuming the outputContext, it dynamically renders different types of information, such as links, document types, and descriptions, based on the attribute specified. This allows it to be integrated into larger search result display systems with different content sources and attributes.

    | **Properties** | **type** | **Description** | **Default** |
    | -------------- | ---------| -----------------------------------------------------------------------|--------------|
    |**attribute** |	String	| The attribute to fetch from the search result item. |	'' |
    |**index** |	String	|The index of the search item in the result list. |	'' |
    | **outputContext** |	OutputContextType |	Consumed from context, contains the search result data. This is internally managed by the component and should not be used. |	undefined |

- **dx-fcc-base-element:** This is a base class in the FCC framework that integrates BroadcastChannel for component communication and ensures no shadow DOM is used. It also handles cleanup of resources when components are disconnected. 

- **dx-search-input-scope:** This component is a well-structured LitElement-based component designed to manage and display a list of content sources for a search input. It fetches data from an external service, allows users to select a content source, and updates the search scope dynamically. It can be used as part of a larger search interface to provide filtering options based on available content sources.   

    | **Properties** | **type** | **Description** | **Default** |
    | -------------- | ---------| -----------------------------------------------------------------------|--------------|
    |**field** |	String	| The field associated with the input. |	'' |
    |**contentSources** |	DxSearchGetContentSource[]	| List of content sources fetched from the service. This is internally managed by the component and should not be used as this will be converted to internal state in next release. |	[] |
    | **scope** |	String[] |	The current selected scope (content source). This is internally managed by the component and should not be used as this will be converted to internal state in next release.|	['All Sources'] |
    |**disabled** |	Boolean |	Whether the input is disabled. |	false |
    |**label** |	String |	The label for the input field. |	'' |
    |**placeholder** |	String |	The placeholder text for the input field. |	'' |

- **dx-search-output-pagination:** This component is a well-structured, flexible pagination component designed for search results. It supports multiple pagination types, including infinite scroll and numbered pagination, and is capable of handling different languages and locales. The use of debouncing for scroll events and clean separation of concerns makes it both efficient and maintainable.      

    | **Properties** | **type** | **Description** | **Default** |
    | -------------- | ---------| -----------------------------------------------------------------------|--------------|
    |**outputConfig** |	Object	| Contains search configuration, including current page, page size, total number of items, and a function to load a new page (loadPage). It is injected from the outputContext. This is internally managed by the component and should not be used. |	{} |
    |**type** |	SEARCH_PAGINATION_TYPE_ENUM	| Defines the type of pagination ("numbered-pagination", "show-more-button", or "infinite-scroll"). |	'' |

- **dx-search-input-button:** A customizable search button component that uses BroadcastChannel to trigger search actions on click. It supports properties to disable the button and change its text. Debouncing is used to optimize search requests, making it a reusable UI element for web applications.  

    | **Properties** | **type** | **Description** | **Default** |
    | -------------- | ---------| -----------------------------------------------------------------------|--------------|
    | **disabled** |	Boolean |	Indicates whether the button is disabled. |	false |
    |**buttontext** |	String |	Custom text to display on the button. If not provided, it falls back to the default localized text. |	'' |

- **dx-search-input-type:** A dynamic dropdown component for selecting document types in a search interface. It fetches searchable fields from a backend service, updates the selected document type, and communicates changes via searchChannel to update search parameters. Built with LitElement for efficient rendering and reactivity. 

    | **Properties** | **type** | **Description** | **Default** |
    | -------------- | ---------| -----------------------------------------------------------------------|--------------|
    |**field** |	String	| The field name for the search input. |	'' |
    |**documentObjectType** |	String	| The selected document object type. Initially empty. |	'' |
    | **disabled** |	Boolean |	Indicates whether the search input is disabled. Default is false. |	false |
    |**label** |	String |	The label text for the search input. |	'' |
    |**placeholder** |	String |	The placeholder text for the search input. |	'' |
    |**options** |	OptionData[] |	The list of options for the input select dropdown, initially empty. This is internally managed by the component and should not be used. |	[] |

- **dx-search-output:** A search result display component that integrates with backend search services. It manages various search states (loading, results, no results, error) and updates the UI dynamically based on search parameters. Ideal for applications needing real-time search with pagination, filtering, and error handling.

    | **Properties** | **type** | **Description** | **Default** |
    | -------------- | ---------| -----------------------------------------------------------------------|--------------|
    |**templateItemId** |	String	| The ID of the template element used to render individual search results. |	'' |
    |**templatePaginationId** |	String	| The ID of the pagination template element used for paginated search results. |	'' |
    | **searchValue** |	String |	The current search query or keyword entered by the user. |	'' |
    |**documentObjectType** |	String |	The attribute in the document object being searched. |	'' |
    |**scope** |	String[] |	A list of content sources ids that limit the search query. |	[] |
    |**searchResults** |	DxSearchResults	| Contains the search results, including hit count, individual hits, and scores. |	{ hits: { total: { value: NaN, relation: 'eq' }, max_score: 0, hits: [] } } |
    |**isLoading** |	Boolean	| A flag indicating whether search results are being loaded. |	false |

## Styling the search components

### Default styling

Each component comes with default styles. See the following examples of different default styles below.

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


### Customizing Styles

You can override styles by targeting the component's class names:

!!! note
    The `part` attribute is used to name parts of a shadow tree, which can then be styled from outside the shadow DOM using the `::part()` pseudo-element. This allows you to apply CSS styles to shadow tree elements from the parent DOM.

```css
/* for dx-button */
dx-button::part(button-start-icon) {
  color: #FBCD00;    /* change the color as per your requirements and also other things can be changed */
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
Other components can be overridden in a similar manner.

# Theme modules

## Overview
The search components are provided via **theme modules**, allowing users to create custom stylesheets for all components. This flexibility is ideal for adapting the search functionality to match your application's look and feel. 

!!! important
    For an in-depth look at how themes and skins work in DX, refer to  [Developing themes and skins](../../../build_sites/themes_skins/index.md).

## Default Theme Modules

We provide default theme modules (CSS and JS files) that can be used as-is or extended by customers. These are the steps to get the provided theme modules for the HCL End-user Search UI on your own DX deployment instance.

1.  Log in to your HCL Digital Experience 9.5 platform, and select **Themes** from the Practitioner Studio navigator home cards or side nav.

    ![](../../../assets/HCL_Search_Get_Theme_Modules_01.png "Log in to HCL Digital Experience 9.5 and Go to the Themes page")

2. Go to Theme **Analyzer** view and click **Examine modules**.
    
    ![](../../../assets/HCL_Search_Get_Theme_Modules_02.png "Go to Theme Analyzer view and click Examine modules")

3. Click **Examine all modules**.

    ![](../../../assets/HCL_Search_Get_Theme_Modules_03.png "Click Examine all modules")

4. Click on **Practitioner Studio Theme**.

    ![](../../../assets/HCL_Search_Get_Theme_Modules_04.png "Click on Practitioner Studio Theme")

5. Expand the system modules and scroll down to find `dx_search_css` and `dx_search_js`.

    ![](../../../assets/HCL_Search_Get_Theme_Modules_05.png "Expand the system modules and scroll down to find dx_search_css and dx_search_js")

6. Click on `dx_search_css` and on the right side, you will find the module information, scroll down to find **Contributions** and under it **Location**.

    ![](../../../assets/HCL_Search_Get_Theme_Modules_06.png "Click on `dx_search_css` and on the right side, you will find the module information, scroll down to find Contributions and under it Location")

7. Click on the Location URL to view the css file.

    ![](../../../assets/HCL_Search_Get_Theme_Modules_07.png "Click on the Location URL to view the css file")

8. Right click on the Location URL to download it. Save as `default.css` for now.

    ![](../../../assets/HCL_Search_Get_Theme_Modules_08.png "Right click on the Location URL to download it. Save as default.css for now")

9. Click on `dx_search_js` and on the right side, you will find the module information, scroll down to find **Contributions** and under it **Location**.

    ![](../../../assets/HCL_Search_Get_Theme_Modules_09.png "Click on `dx_search_js` and on the right side, you will find the module information, scroll down to find Contributions and under it Location")

10. Click on the Location URL to view the js file

    ![](../../../assets/HCL_Search_Get_Theme_Modules_10.png "Click on the Location URL to view the js file")

11. Right click on the Location URL to download it. Save as `index.js` for now.

    ![](../../../assets/HCL_Search_Get_Theme_Modules_11.png "Right click on the Location URL to download it. Save as index.js for now.")

12. Open the `default.css` file you have downloaded in a code editor such as Visual Studio Code. On your keyboard, hold down Cmd + Shift + P (on Mac) or Ctrl + Shift + P (on Windows) to open the Command Palette. Find and click `Format Document`.

    ![](../../../assets/HCL_Search_Get_Theme_Modules_12.png "Open the `default.css` file you have downloaded in a code editor such as Visual Studio Code")

13. View the resulting `default.css` file in a prettyfied format that is easy to read and inspect so you can plan the style overrides you like to make later. See [Styling the search components](#styling-the-search-components)

    ![](../../../assets/HCL_Search_Get_Theme_Modules_13.png "Log in to HCL Digital Experience 9.5 and Go to the End-user Search UI")


## Using the theme modules

To use the theme modules (CSS and JS files) on your new or existing theme pages, these are the steps.

1. Download the default theme CSS `dx_search_css` from the provided location as `default.css`.

2. Update the styles in the file as needed. It is also possible to create your own css file e.g. `custom-theme.css` where you can put your overrides using the `default.css` as a guide for base styles.

3. Link the default and custom css files in this order in your application's html head.

    ```html 
      <link rel="stylesheet" href="/path/to/default.css"> 
      <link rel="stylesheet" href="/path/to/custom-theme.css"> 
    ```

4. Download the default theme CSS `dx_search_js` from the provided location as `index.js`.

5. Add the script to your application's html head.

    ```html 
      <script type="module" src="/path/to/index.js"></script>
    ```

## Example of Customization

Suppose you want to change the background color of the dx-search-center-layout component. In your custom CSS file:

```css
  dx-search-center-layout::part(main) {
    background-color: #f0f0f0;
  }
```

## Communication between Components using Broadcast Channel API
HCL End-user Search with OpenSearch utilizes the Broadcast Channel API for its components. The Broadcast Channel API provides real-time synchronization, updating search search results when a new query is entered. It also has a decouple design that allows FCC components to work independently and communicate without direct references. 

This API also enables seamless communication between different FCC components, even when they are placed in separate areas of your application such as themes, JSPs, portlets, or WCM. This functionality is already present in the provided JS theme module.

