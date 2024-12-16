# End-user Search with OpenSearch components

The HCL End-user Search UI is composed of web components called search components. This guide explains how to use the HCL End-user Search UI search components. Follow along to learn about the different types of search components, their styling options, and extendable features.

The default search component for End-User Search is designed to be user-friendly, customizable, and extendable. It offers intuitive search interactions, allows user-defined styling and extensions, and can be integrated anywhere in your application. See an example of the search component below.

![Screenshot](../../assets/HCL_Search_Search_Result.png)

## Search component features and benefits
End-user Search with OpenSearch components provide the following benefits:

1. **Encapsulation:** Styles and functionality are isolated from the rest of your application using Shadow DOM.
2. **Reusability:** Build once and reuse across different parts of your application.
3. **Customizability:** Use attributes, properties, and part selectors to customize components without altering their core code.

## Communication between components using the Broadcast Channel API

HCL End-user Search with OpenSearch utilizes the Broadcast Channel API for its components. The Broadcast Channel API provides real-time synchronization, updating search search results when a new query is entered. It has a decoupled design that allows FCC components to work independently and communicate without direct references. 

This API also enables seamless communication between different FCC components, even when they are placed in separate areas of your application such as themes, JSPs, portlets, or WCM. This functionality is already present in the provided JS theme module.

## Search components overview

End-user Search with OpenSearch components has two distinct types: Atomic Components (AC) and Functional Composite Components (FCC). 

### Atomic Components

Atomic Components (AC) are the smallest possible building blocks of the search functionality. These components include buttons, input fields, and chips, and are built using Web Components standards such as Shadow DOM for encapsulation and reusability. Refer to the table below each component for the list of compatible properties associated with them. 

- **dx-ac-base-element:** his class creates a foundational element for developing custom web components. It supports internationalization and localization, and uses the Shadow DOM to encapsulate its internal structure, ensuring high reusability.

    | **Properties** | **type** | **Description** | **Default** |
    | ------------ | ------------- | ------------ | --------------|
    | **id** | String | A unique identifier for the component instance. This property is automatically assigned using a UUID generator when the component is instantiated. | Generated UUID value |


- **dx-button:** This customizable button component comes with internationalization support, conditional icon and text rendering, and isolated styling using Shadow DOM and CSS parts.

    | **Properties** | **type** | **Description** | **Default** |
    | -------------- | ---------| -----------------------------------------------------------------------|--------------|
    | **disabled**   | Boolean  | Indicates whether the button is disabled.        | false |
    | **outlined**   | Boolean  | Indicates whether the button should be rendered with an outlined style.       | false |
    | **imgurl**     | String   | The URL of the image to be displayed as the icon of a button.                 | undefined |
    | **buttontext** | String   | Displays text on a button.                                                | undefined |
    | **endicon**    | Boolean  | Determines whether the image is displayed as an end icon instead of a start icon.           | false |
    | **focused**    | Boolean  | Indicates whether the button currently has focus. This property is managed internally. | false |

- **dx-input-select:** This flexible, accessible, and customizable component can handle a variety of user interactions and scenarios.

    | **Properties** | **type** | **Description** | **Default** |
    | -------------- | ---------| -----------------------------------------------------------------------|--------------|
    | **label**   | String | The label displayed for the dropdown. Defaults to a context-based message if not provided. | '' |
    | **disabled**   | Boolean | Indicates whether the dropdown is disabled. | false |
    | **selectedValue**     | String | The currently selected value. | undefined |
    | **selectedId** | String | The id of the currently selected option. | undefined |
    | **options**    | String, String[], OptionData[] | List of options to display in the dropdown. The options can be a JSON string, an array of strings, or an array of objects with id and name properties. | [] |
    | **field**    | DxSearchInputFieldType, String | The type of the input field used to determine default labels or handle specific behaviors. You can use `DxSearchInputFieldType` strings such as `contentSource` or `documentObjectType` or leave it blank. | '' |

- **dx-list:** This component wraps an unordered list (`<ul>`) and uses a slot to insert content such as list items into the component. The `part="unordered-list"` attribute allows external styling of the `<ul>`.                     
- **dx-switch:** This fully accessible and customizable custom component separates behavior (toggle state and events) from appearance (CSS styling through the dynamic part attribute). This component is currently not in use.

    | **Properties** | **type** | **Description** | **Default** |
    | -------------- | ---------| -----------------------------------------------------------------------|--------------|
    | **isChecked**   | Boolean | Indicates whether the switch is toggled on (true) or off (false). | false |
    | **isDisabled**   | Boolean | Indicates whether the switch is disabled. | false |

- **dx-anchor:** This versatile anchor component supports pagination and custom actions, and is designed for navigation menus and paginated lists.

    | **Properties** | **type** | **Description** | **Default** |
    | -------------- | ---------| -----------------------------------------------------------------------|--------------|
    | **url** |	String |	Specifies the URL the anchor element navigates to.|	'' |
    |**weight** |	Number |	Represents a custom weight value for the anchor. Ensure to use case-specific values. |	0 |
    |**title** |	String |	Specifies the title attribute, providing additional information about the link.|	'' |
    |**name** |	String	| The text content or label of the anchor element.|	'' |
    |**rel**	 | String	| Specifies the relationship between the current document and the linked document. Sample values include `noopener` or `nofollow`.|	'' |
    |**disabled** |	Boolean	| Indicates if the anchor element is disabled.|	false |
    |**selected**	| Boolean	| Indicates if the anchor is currently selected and is typically used in scenarios such as pagination. |	false |
    |**value**	| Number	| Represents a custom numeric value associated with the anchor. Ensure to use case-specific values.|	0 |
    |**mode**	| String	| Specifies the mode of the anchor, controlling its behavior and styling. You can use the mode values `pagination` or `result-title`, or leave it blank.|	'' |
    |**imgurl**	| String	| Specifies the URL of an image to be displayed inside the anchor if no text label is provided.	|'' |
    |**target**	| String	| Specifies where to open the linked document. Sample values include `_blank` or `_self`.| undefined |

- **dx-chip:** This component allows you to display a "chip" or "tag" with a numerical count, such as notification counters, tag lists, or pill-style labels. It also comes with built-in localization support.

    | **Properties** | **type** | **Description** | **Default** |
    | -------------- | ---------| -----------------------------------------------------------------------|--------------|
    | **name** |	String |	Specifies the name or label of the chip.|	'' |
    |**count** |	Number |	Represents a numeric count associated with the chip.|	0 |
    |**showChipCount** |	Boolean |	Determines whether `count` should be displayed alongside the chip name.|	false |

- **dx-input-textfield:** This component allows you to create rich input fields with enhanced user experience such as search bars or forms. You can also use it for fields where text input with optional icons and labels is required.

    | **Properties** | **type** | **Description** | **Default** |
    | -------------- | ---------| -----------------------------------------------------------------------|--------------|
    | **value** |	String |	The current value of the textfield. |	'' |
    |**type** |	String | Specifies the input type. Sample values include `text`, `password`, or `email`. |	'text' |
    |**label** |	String, undefined |	The label displayed above the textfield. |	undefined |
    |**placeholder** |	String	| The placeholder text displayed inside the textfield.|	'' |
    |**disabled** |	Boolean	| Indicates whether the textfield is disabled. |	false |
    |**iconStartUrl**	| String, undefined	| URL of the icon displayed at the start of the textfield. |	undefined |
    |**iconEndUrl**	| String, undefined	| URL of the icon displayed at the end of the textfield.|	undefined |
    |**field**	| DxSearchInputFieldType, String	| A field identifier for the input that is useful in custom events or associating the input with specific data. You can use the `DxSearchInputFieldType` string `queryString` or provide your own field name. |	'' |

- **dx-search-center-layout:** This customizable web component provides a structured layout for a search interface. It includes slots for adding content, such as a header, search input, and search output.

    <!-- | **Properties** | **type** | **Description** | **Default** |
    | -------------- | ---------| -----------------------------------------------------------------------|--------------|
    |**isTagsAvailable** |	Boolean	| Indicates whether tags are available for display. and controls the visibility of the tag layout. |	false | -->
  
- **dx-toggle-button:** This component supports customizable icons for each button and adjusts its style based on the selection and outlined setting. It includes separate styles for selected and unselected buttons and allows easy integration into other UI components.

    | **Properties** | **type** | **Description** | **Default** |
    | -------------- | ---------| -----------------------------------------------------------------------|--------------|
    |**disabled** |	Boolean	| Determines if the button is disabled. |	false |
    |**outlined** |	Boolean	| Indicates whether the button should be rendered with an outlined style. |	false |
    | **selectedValue** |	String |	The currently selected value of the toggle button. |	'' |
    |**iconUrls** |	String[] |	Array of URLs for the icons displayed on the buttons. |	[] |
    |**values** |	String[] |	Array of values corresponding to each button's selection state. |	[] |

- **dx-avatar:** This component allows you to customize your avatar's appearance and uses placeholder assets if you have not provided specific URLs. The `renderAvatarContent` method dynamically decides what to render based on the variant. This component is currently not in use. 

    | **Properties** | **type** | **Description** | **Default** |
    | -------------- | ---------| -----------------------------------------------------------------------|--------------|
    |**variant** |	String	| Defines the avatar's visual variant. Sample values include `avatar-letter`, `avatar-icon`, or `avatar-img`. |	undefined |
    |**imgUrl** |	String	| The URL of the image to be displayed as the avatar when the variant is set to `avatar-img`.|	undefined |
    | **iconUrl** |	String |	The URL of the icon to be displayed as the avatar when the variant is set to `avatar-icon`. |	undefined |
    |**avatarText** |	String |	The text to be displayed in the avatar when the variant is set to `avatar-letter`.  |	undefined |

- **dx-header:** This component offers a flexible and responsive header solution with various customization options and localization support.  

    | **Properties** | **type** | **Description** | **Default** |
    | -------------- | ---------| -----------------------------------------------------------------------|--------------|
    |**color** |	String	| Sets the color for the header's text and other elements. |	'rgba(0, 0, 0, .32)' |
    |**title** |	String	| The title displayed in the header.|	'' |
    | **showBackIcon** |	Boolean |	Determines whether the back icon is shown. |	false |
    |**isSideNavOpen** |	Boolean |	Indicates whether the side navigation is open. |	false |
    |**disabled** |	Boolean |	Determines whether certain components in the header are disabled. |	false |
    |**variant** |	HEADER_VARIANT |	The predetermined structure and styling of the header according to its use-case. You can use the value `header-endUser`. |	undefined |

- **dx-list-item:**  This component allows you to mark items as selected and apply different styles accordingly. It also includes a slot element, allowing you to insert content into the item when the component is used.

    | **Properties** | **type** | **Description** | **Default** |
    | -------------- | ---------| -----------------------------------------------------------------------|--------------|
    |**key** |	String	| A unique key for the list item that is typically used to identify it within a list. |	'' |
    |**isSelected** |	Boolean	| Used to track whether the list item is selected.|	false |
    
- **dx-svg-icon:** This component allows you to display scalable vector icons with customizable colors and sizes. You can use this component for dynamic UIs where the icon might need to change based on context or state.

    | **Properties** | **type** | **Description** | **Default** |
    | -------------- | ---------| -----------------------------------------------------------------------|--------------|
    |**color** | String	| The color of the SVG icon. If `useCurrentColor` is set to `false`, this color will be applied directly to the SVG's fill.|	'' |
    |**size** |	String	| The size of the icon. Used for both width and height. |	'' |
    | **useCurrentColor** |	Boolean |	Determines whether the icon will inherit the color of the parent element's color property (using CSS currentColor). |	false |
    |**icon** |	TemplateResult |	The SVG icon content passed as a template to render the icon. |	undefined |


### Functional Composite Components

Functional Composite Components (FCC) combine ACs to deliver higher-level functionality, such as displaying search results or managing pagination. Refer to the table below each component for the list of compatible properties associated with them. 

- **dx-circular-progress:** This component is a customizable radial progress bar that uses SVG graphics and CSS animations to display a loading state. It supports various styling options such as size, stroke width, and color, and can be integrated into any web application to visually indicate progress. 

    | **Properties** | **type** | **Description** | **Default** |
    | -------------- | ---------| -----------------------------------------------------------------------|--------------|
    |**size** |	Number	| The diameter of the circular progress element. |	100 |
    |**strokewidth** |	Number	| The width of the circle's stroke. |	4 |
    | **trailcolor** |	String |	The color of the inactive portion (trail) of the circle. |	#D6D6D6 |
    |**valuecolor** |	String |	The color of the active portion of the circle. |	#0550DC |

- **dx-search-input-query:** This component allows you to customize a set of properties related to search input such as disabling the input and defining placeholder and label text. It also checks the URL for existing query parameters on load, making it ideal for dynamic search-driven applications.

    | **Properties** | **type** | **Description** | **Default** |
    | -------------- | ---------| -----------------------------------------------------------------------|--------------|
    |**field** |	String	| The field name for the search input. |	'' |
    |**queryString** |	String	| The query string value for the search input. |	'' |
    | **disabled** |	Boolean |	Indicates whether the input field is disabled. |	false |
    |**label** |	String |	The label for the input field. |	'' |
    |**placeholder** |	String |	The placeholder text for the input field. |	'' |

- **dx-search-output-item-attribute:** This component is a flexible and reusable element that you can use to display specific attributes of search results. By consuming the `outputContext`, it dynamically renders different types of information, such as links, document types, and descriptions based on the attribute specified. This allows the component to be integrated into larger search result display systems with different content sources and attributes.

    | **Properties** | **type** | **Description** | **Default** |
    | -------------- | ---------| -----------------------------------------------------------------------|--------------|
    |**attribute** |	String	| The attribute to fetch from the search result item. |	'' |
    |**index** |	String	|The index of the search item in the result list. |	'' |
    | **outputContext** |	OutputContextType |	Consumed from context and contains the search result data. This property is internally managed by the component and should not be used. |	undefined |

- **dx-fcc-base-element:** This is a base class in the FCC framework that integrates the Broadcast Channel API for component communication and ensures no shadow DOM is used. It also cleans up resources when components are disconnected.

- **dx-search-input-scope:** This LitElement-based component allows you to manage and display a list of content sources for a search input. It fetches data from an external service, allows you to select a content source, and updates the search scope dynamically. You can use it as part of a larger search interface to provide filtering options based on available content sources.   

    | **Properties** | **type** | **Description** | **Default** |
    | -------------- | ---------| -----------------------------------------------------------------------|--------------|
    |**field** |	String	| The field associated with the input. |	'' |
    |**contentSources** |	DxSearchGetContentSource[]	| List of content sources fetched from the service. This property is internally managed by the component and should not be used. To be converted to internal state in the next release. |	[] |
    | **scope** |	String[] |	The current selected scope or content source. This property is internally managed by the component and should not be used. To be converted to internal state in the next release.|	['All Sources'] |
    |**disabled** |	Boolean |	Indicates whether the input is disabled. |	false |
    |**label** |	String |	The label for the input field. |	'' |
    |**placeholder** |	String |	The placeholder text for the input field. |	'' |

- **dx-search-output-pagination:** This flexible pagination component supports multiple pagination types, including infinite scroll and numbered pagination, and can handle different languages and locales. It also allows debouncing scroll events and a clean separation of concerns, making it efficient and maintainable.

    | **Properties** | **type** | **Description** | **Default** |
    | -------------- | ---------| -----------------------------------------------------------------------|--------------|
    |**outputConfig** |	Object	| Contains the search configuration, including the current page, page size, total number of items, and a function to load a new page (`loadPage`). It is injected from the `outputContext`. This property is internally managed by the component and should not be used. |	{} |
    |**type** |	SEARCH_PAGINATION_TYPE_ENUM	| Defines the type of pagination. Sample values include `numbered-pagination`, `show-more-button`, or `infinite-scroll`.|''|

- **dx-search-input-button:** This customizable search button component uses the Broadcast Channel to trigger search actions on click. It supports properties to disable the button and change its text. Debouncing is also used to optimize search requests, making it a reusable UI element for web applications.

    | **Properties** | **type** | **Description** | **Default** |
    | -------------- | ---------| -----------------------------------------------------------------------|--------------|
    | **disabled** |	Boolean |	Indicates whether the button is disabled. |	false |
    |**buttontext** |	String |	Custom text to display on the button. Reverts to default localized text if not provided. |	'' |

- **dx-search-input-type:** This dynamic dropdown component allows you to select document types in a search interface. Built with LitElement for efficient rendering and reactivity, it fetches searchable fields from a backend service, updates the selected document type, and communicates changes using `searchChannel` to update search parameters.

    | **Properties** | **type** | **Description** | **Default** |
    | -------------- | ---------| -----------------------------------------------------------------------|--------------|
    |**field** |	String	| The field name for the search input. |	'' |
    |**documentObjectType** |	String	| The selected document object type. |	'' |
    | **disabled** |	Boolean |	Indicates whether the search input is disabled. |	false |
    |**label** |	String |	The label text for the search input. |	'' |
    |**placeholder** |	String |	The placeholder text for the search input. |	'' |
    |**options** | OptionData[] | The list of options for the input select dropdown. This property is internally managed by the component and should not be used. |	[] |

- **dx-search-output:** This search result display component integrates with backend search services. It manages various search states such as loading, results, no results, or error, and updates the UI dynamically based on search parameters. It is designed for applications that require real-time search with pagination, filtering, and error handling.

    | **Properties** | **type** | **Description** | **Default** |
    | -------------- | ---------| -----------------------------------------------------------------------|--------------|
    |**templateItemId** |	String	| The ID of the template element used to render individual search results. |	'' |
    |**templatePaginationId** |	String	| The ID of the pagination template element used for paginated search results. |	'' |
    | **searchValue** |	String |	The current search query or keyword entered by the user. |	'' |
    |**documentObjectType** |	String |	The attribute in the document object being searched. |	'' |
    |**scope** |	String[] |	A list of content source IDs that limit the search query. |	[] |
    |**searchResults** |	DxSearchResults	| Contains the search results, including hit count, individual hits, and scores. |	{ hits: { total: { value: NaN, relation: 'eq' }, max_score: 0, hits: [] } } |
    |**isLoading** |	Boolean	| A flag that indicates whether search results are being loaded. |	false |

## Styling the search components

This section explains the default styles for search components and how to customize them.

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

You can override styles by targeting the component's class names. Other components can be overridden in a similar manner.

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

## Theme modules

Search components are provided using theme modules, allowing users to create custom stylesheets for all components. This flexibility is ideal for adapting the search functionality to match your application's design. For more information about themes and skins in DX, refer to  [Developing themes and skins](../../../build_sites/themes_skins/index.md).

## Default theme modules

You can use the default theme modules (CSS and JS files) provided to you as-is, or customize it to suit your needs. Follow these steps to get the provided theme modules for the HCL End-user Search UI on your own DX deployment instance.

1.  Log in to your HCL DX 9.5 platform then select **Themes** from the Practitioner Studio homepage or side navigation panel.

    ![](../../../assets/HCL_Search_Get_Theme_Modules_01.png "Log in to HCL Digital Experience 9.5 and Go to the Themes page")

2. In the side navigation panel, go to **Analyzer** then click **Examine modules**.
    
    ![](../../../assets/HCL_Search_Get_Theme_Modules_02.png "Go to Theme Analyzer view and click Examine modules")

3. Click **Examine all modules**.

    ![](../../../assets/HCL_Search_Get_Theme_Modules_03.png "Click Examine all modules")

4. Double-click the **Practitioner Studio Theme** module.

    ![](../../../assets/HCL_Search_Get_Theme_Modules_04.png "Click on Practitioner Studio Theme")

5. Expand the **System Modules** folder then locate and click the `dx_search_css` file.

    ![](../../../assets/HCL_Search_Get_Theme_Modules_05.png "Expand the system modules and scroll down to find dx_search_css and dx_search_js")

6. On the right-side panel that appears, scroll down and click **Contributions**.

    ![](../../../assets/HCL_Search_Get_Theme_Modules_06.png "Click on `dx_search_css` and on the right side, you will find the module information, scroll down to find Contributions and under it Location")

7. Click the **Location** URL to view the CSS file.

    ![](../../../assets/HCL_Search_Get_Theme_Modules_07.png "Click on the Location URL to view the css file")

8. Right click on the **Location** URL then click **Save Link As...** and name the file `default.css`.

    ![](../../../assets/HCL_Search_Get_Theme_Modules_08.png "Right click on the Location URL to download it. Save as default.css for now")

9. Go back to the **System Modules** folder then locate and click the `dx_search_js` file.

    ![](../../../assets/HCL_Search_Get_Theme_Modules_09.png "Click on `dx_search_js` and on the right side, you will find the module information, scroll down to find Contributions and under it Location")

10. On the right-side panel, scroll down and click **Contributions** again.

    ![](../../../assets/HCL_Search_Get_Theme_Modules_10.png "Click on the Location URL to view the js file")

11. Click the **Location** URL to view the JS file.

    ![](../../../assets/HCL_Search_Get_Theme_Modules_11.png "Right click on the Location URL to download it. Save as index.js for now.")

12. Right click on the **Location** URL then click **Save Link As...** and name the file `index.js`.

13. Open the `default.css`file in a code editor such as Visual Studio Code then open the **Command Palette**. You can open the **Command Palette** by pressing Cmd + Shift + P for Mac, or Ctrl + Shift + P for Windows.

14. In the **Command Palette**, enter `> Format Document` to format the CSS file in a more structured view. This allows you to read and inspect the code more easily so you can override the styles to your liking. For more information, refer to [Styling the search components](#styling-the-search-components).

See the sample view of the formatted CSS file.

    ![](../../../assets/HCL_Search_Get_Theme_Modules_12.png "Open the `default.css` file you have downloaded in a code editor such as Visual Studio Code")

    See the sample view of the formatted CSS file.

    ![](../../../assets/HCL_Search_Get_Theme_Modules_13.png "Log in to HCL Digital Experience 9.5 and Go to the End-user Search UI")


## Using the theme modules

Follow these steps to use the theme module files you downloaded on your new or existing theme pages.

!!!note
    Ensure you have downloaded the `dx_search_css` and `dx_search_js` files from [Default theme modules](#default-theme-modules) and saved the files as `default.css` and `index.js` respectively.

1. Open the `default.css` file and update the styles in the file as needed. 

- You can also create your own CSS file, such as `custom-theme.css`, where you can add your overrides, using the `default.css` as your guide for the base styles.

2. Link the default and custom CSS files in your application's HTML code as follows.

    ```html 
      <link rel="stylesheet" href="/path/to/default.css"> 
      <link rel="stylesheet" href="/path/to/custom-theme.css"> 
    ```

3. Download the default theme CSS `dx_search_js` from the provided location as `index.js`.

4. Add the script to your application's html head.
    ```html 
      <script type="module" src="/path/to/index.js"></script>
    ```

See the sample customized CSS code which changed the background color dx-search-center-layout component.

```css
  dx-search-center-layout::part(main) {
    background-color: #f0f0f0;
  }
```

