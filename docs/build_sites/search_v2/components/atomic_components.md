# Atomic Components

Atomic Components (ACs) are the smallest possible building blocks of the search functionality. These components include buttons, input fields, and chips, and are built using web components standards such as Shadow DOM for encapsulation and reusability. Refer to the table below each component for the list of compatible properties associated with them.

- **dx-ac-base-element:** This class is a base class for all AC web components, built using LitElement. It provides foundational features such as unique ID assignment, localization support, and configurable shadow DOM encapsulation. This class is intended to be extended by other AC components to ensure consistent behavior and structure across the library.

    | **Properties** | **type** | **Description** | **Default** |
    | ------------ | ------------- | ------------ | --------------|
    | **id** | String | Specifies the unique identifier for the component instance. This property is automatically assigned using a UUID generator when the component is instantiated. | Generated UUID value |
    | **localization** | Map<string,string\> | Specifies the localization map for template messages used for internationalization. | `undefined` |

- **dx-accordion:** This customizable web component provides an expandable and collapsible accordion UI element. It supports optional checkboxes, secondary text, and left-to-right (LTR) or right-to-left (RTL) layouts. The component is accessible, keyboard-navigable, and supports both outlined and no-outline visual styles. It is suitable for displaying grouped content sections that users can expand or collapse as needed.

    | **Properties** | **type** | **Description** | **Default** |
    | ------------ | ------------- | ------------ | --------------|
    | **showCheckbox** | Boolean | Displays a checkbox in the accordion header if set to `true`. | `false` |
    | **disabled** | Boolean | Disables the accordion interaction when set to `true`. | `false` |
    | **showSecondaryText** | Boolean | Shows secondary text below the main label if set to `true`. | `false` |
    | **type** | `outlined` or `no-outline` | Sets the visual style of the accordion: outlined or no outline. | `outlined` |
    | **open** | Boolean | Controls whether the accordion is expanded. | `false` |
    | **label** | String | Main label text for the accordion header. | '' |
    | **secondaryText** | String | Secondary text displayed if showSecondaryText is enabled. | '' |

- **dx-alert:** This customizable alert component, built with Lit, displays important messages to users with different severity levels and visual styles. It supports various alert types such as info, error, warning, and success, and can be styled as contained or outlined. It also allows you to set a custom width and message.

    | **Properties** | **type** | **Description** | **Default** |
    | ------------ | ------------- | ------------ | --------------|
    | **message** | String | Specifies the message text to display inside the alert. | '' |
    | **width** | Number | Indicates the width of the alert in pixels. | `240` |
    | **variant** | String | Determines the visual style of the alert. Possible values are `contained` and `outlined` | `contained` |
    | **severity** | String | Determines the severity level of the alert. Possible values are `info`, `error`, `warning`, and `success` | `info` |

- **dx-button:** This customizable button component comes with internationalization support, conditional icon and text rendering, and isolated styling using Shadow DOM and CSS parts.

    | **Properties** | **type** | **Description** | **Default** |
    | -------------- | ---------| -----------------------------------------------------------------------|--------------|
    | **disabled** | Boolean | Indicates whether the button is disabled. | `false` |
    | **imgurl** | String | The URL of the image to be displayed as the icon of a button. | `undefined` |
    | **icon** | TemplateResult | Specifies the template for a custom icon (for example, SVG or enchanted icon). | `undefined` |
    | **buttontext** | String | Displays text on a button. | `undefined` |
    | **endicon** | Boolean | Determines whether the image is displayed as an end icon instead of a start icon. | `false` |
    | **variant** | String | Specifies the button's visual style. Possible values are `contained`, `text`, and `outlined`. | `contained` |
    | **withPadding** | Boolean | Indicates whether the button should have padding. | `false` |
    | **inverseColor** | Boolean | Uses the inverse color scheme for the button. | `false` |
    | **size** | `small` or `medium` | Specifies the size of the button (affects icon size and padding). | `small` |

    The following CSS part attributes are responsible for determining the appropriate CSS for the `dx-button` component and its elements based on the component's state and properties.

    | **Part** | **Description** |
    | -------------- | ---------|
    | **button** | Represents the main button element. It is the default part for the button and is styled based on the button's state (such as `disabled` and `focused`) and `variant` (such as `contained`, `outlined`, or `text`). |
    | **button-disabled** | Represents the button in a disabled state when the `disabled` property is set to `true`. |
    | **button-outlined** | Represents the button with an outlined style when the `variant` property is set to `outlined`. |
    | **button-outlined-focused** | Represents the `outlined` button in a focused state when the `focused` property is set to `true` and the `variant` property is set to `outlined`. |
    | **button-outlined-disabled** | Represents the `outlined` button in a disabled state when the `disabled` property is set to `true` and the `variant` property is set to `outlined`. |
    | **button-start-icon** | Represents the start icon of the button when the `starticon` property is set to `true`. |
    | **button-start-icon-with-padding** | Represents the start icon of the button with padding when the button does not have text (`buttontext` is set to `""`) but has the `withPadding` property set to `true`. |
    | **button-end-icon** | Represents the end icon of the button when the `endicon` property is set to `true`. |
    | **button-start-icon-no-margin** | Represents the start icon of the button without margin when the button does not have text (`buttontext` is set to `""`) and the `withPadding` property is set to `false`. |
    | **button-start-icon-rtl-margin** | Represents the start icon of the button with right-to-left (RTL) margin when the text direction is set to `RTL`. |
    | **button-text** | Represents the text content of the button when the button has text (`buttontext` is not an empty string). |
    | **button-contained** | Represents the button with a contained style when the `variant` property is set to `contained`. |
    | **button-contained-disabled** | Represents the contained button in a disabled state when the `disabled` property is set to `true` and the `variant` property is set to `contained`. |
    | **button-contained-focused** | Represents the contained button in a focused state when the `focused` property is set to `true` and the `variant` property is set to `contained`. |
    | **button-enchanted-text** | Represents the button with an enchanted text style when the `variant` property is set to `text`. |
    | **button-enchanted-text-disabled** | Represents the enchanted text button in a disabled state when the `disabled` property is set to `true` and the `variant` property is set to `text`. |
    | **button-enchanted-text-focused** | Represents the enchanted text button in a focused state when the `focused` property is set to `true` and the `variant` property is set to `text`. |
    | **button-enchanted-outlined** | Represents the button with an enchanted outlined style when the `variant` property is set to `outlined`. |
    | **button-enchanted-outlined-disabled** | Represents the enchanted outlined button in a disabled state when the `disabled` property is set to `true` and the `variant` property is set to `outlined`. |
    | **button-enchanted-outlined-focused** | Represents the enchanted outlined button in a focused state when the `focused` property is set to `true` and the `variant` property is set to `outlined`. |

- **dx-input-select:** This flexible, accessible, and customizable component can handle a variety of user interactions and scenarios.

    | **Properties** | **type** | **Description** | **Default** |
    | -------------- | ---------| -----------------------------------------------------------------------|--------------|
    | **label** | String | The label displayed for the dropdown. Defaults to a context-based message if not provided. | '' |
    | **disabled** | Boolean | Indicates whether the `dx-input-select` component is disabled. | `false` |
    | **selectedValue** | String | The currently selected value. | `undefined` |
    | **selectedId** | String | The id of the currently selected option. | `undefined` |
    | **options** | String, String\[], OptionData\[] | List of options to display in the dropdown. The options can be a JSON string, an array of strings, or an array of objects with id and name properties. | `[]` |
    | **field** | DxSearchInputFieldType, String | The type of the input field used to determine default labels or handle specific behaviors. You can use `DxSearchInputFieldType` strings such as `contentSource` or `documentObjectType` or leave it blank. | '' |
    | **hiddenLabel** | Boolean | Hides the label when set to `true`. | `false` |
    | **hiddenIcon** | Boolean | Hides the dropdown icon when set to `true`. | `false` |
    | **showRemoveLabel** | Boolean | Shows a "remove" label for clearing the selection. | `false` |
    | **placeholder** | String or undefined | Specifies the placeholder text shown when no value is selected. | `undefined` |
    | **alwaysShowPlaceholder** | Boolean | Shows the placeholder text when set to `true`, even when a value is selected. | `false` |

    The following CSS part attributes are responsible for determining the appropriate CSS for the `dx-input-select` component and its elements based on the component's state and properties.

    | **Part** | **Description** |
    | -------------- | ---------|
    | **div** | Represents the outermost container `<div>` of the `dx-input-select` component. This part can be styled to control the overall layout and appearance of the component. |
    | **label** | Represents the `<label>` element of the `dx-input-select` component. This part can be styled to control the appearance of the label text displayed above or beside the dropdown. |
    | **BUTTON_PARTS** | Represents the parts of the `<dx-button>` element used in the component. The `exportparts` attribute allows the button's internal parts to be styled externally and ensures all button parts are exported for external styling. |
    | **unordered-list** | Represents the `<dx-list>` element that contains the dropdown options. This part can be styled to control the appearance of the dropdown list. |
    | **LIST_ITEM_PARTS** | Represents the parts of each `<dx-list-item>` element within the dropdown list. The `exportparts` attribute allows the list item's internal parts to be styled externally and ensures all list item parts are exported for external styling. |

- **dx-list:** This component wraps an unordered list (`<ul>`) and uses a slot to insert content such as list items into the component. The `part="unordered-list"` attribute allows external styling of the `<ul>`.

    | **Properties** | **type** | **Description** | **Default** |
    | -------------- | ---------| ---------------------------------------|--------------|
    | **role** | String | Specifies the ARIA role for the `<ul>` element. It is used for accessibility purposes. | '' |

    The following CSS part attribute is responsible for determining the appropriate CSS for the `dx-list` component and its elements based on the component's state and properties.

    | **Part** | **Description** |
    | -------------- | ---------|
    | **unordered-list** | Represents the `<ul>` element rendered by the `dx-list` component. It is the main container for the list items. |

- **dx-switch:** This fully accessible and customizable custom component separates behavior (toggle state and events) from appearance (CSS styling through the dynamic part attribute). This component is currently not in use.

    | **Properties** | **type** | **Description** | **Default** |
    | -------------- | ---------| -----------------------------------------------------------------------|--------------|
    | **isChecked** | Boolean | Indicates whether the switch is toggled on (`true`) or off (`false`). | `false` |
    | **isDisabled** | Boolean | Indicates whether the switch is disabled. | `false` |

    The following CSS part attributes are responsible for determining the appropriate CSS for the `dx-switch` component and its elements based on the component's state and properties.

    | **Part** | **Description** |
    | -------------- | ---------|
    | **switch-label** | Represents the label element of the switch component. It is the container for the input and slider elements. |
    | **switch-label-disabled** | Represents the label element of the switch component if the `isDisabled` property is set to `true`. |
    | **switch-input** | Represents the input element of the switch, which is a checkbox. It handles the toggle functionality of the switch. |
    | **switch-slider** | Represents the slider element of the switch, which visually indicates whether the switch is on or off. |
    | **switch-slider-checked** | Represents the slider element of the switch if the `isChecked` property is set to `true`. |
    | **switch-slider-disabled** | Represents the slider element of the switch if the `isDisabled` property is set to `true` but the `isChecked` property is set to `false`. |
    | **switch-slider-checked-disabled** | Represents the slider element of the switch if the `isDisabled` and `isChecked` properties are set to `true`. |

- **dx-anchor:** This customizable web component renders an extended anchor tag used in advanced UI scenarios, such as pagination, navigation, and result listings. The component supports dynamic attributes, event handling for custom click actions, and displays either text or an image. It is designed to be accessible and easily integrated into larger web applications.

    | **Properties** | **type** | **Description** | **Default** |
    | -------------- | ---------| -----------------------------------------------------------------------|--------------|
    | **url** | String | Specifies the URL to which the anchor navigates. | '' |
    | **weight** | Number | Specifies a numeric value for custom logic or styling (for example, ordering). | 0 |
    | **anchorTitle** | String | Specifies the title attribute for the anchor, shown as a tooltip on hover. | '' |
    | **name** | String | Specifies the display text for the anchor | '' |
    | **rel** | String| Specifies the relationship between the current document and the linked document. Sample values include `noopener` or `nofollow`. | '' |
    | **disabled** | Boolean | Indicates if the anchor element is disabled. | `false` |
    | **selected** | Boolean | Indicates if the anchor is currently selected and is typically used in scenarios such as pagination. | `false` |
    | **value** | Number | Represents a custom numeric value associated with the anchor. Ensure to use case-specific values. | 0 |
    | **mode** | String | Specifies the mode of the anchor, controlling its behavior and styling. You can use the mode values `pagination` or `result-title`, or leave it blank. | '' |
    | **imgurl** | String | Specifies the URL of an image to be displayed inside the anchor if no text label is provided. |'' |
    | **target** | String | Specifies where to open the linked document. Sample values include `_blank` or `_self`. | `undefined` |

    The following CSS part attributes are responsible for determining the appropriate CSS for the `dx-anchor` component and its elements based on the component's state and properties.

    | **Part** | **Description** |
    | -------------- | ---------|
    | **result-title** | Applies specific styles or behaviors for result titles in the UI. Used when the anchor tag represents a result title. |
    | **pagination-index-disabled** | Applies styles or behaviors indicating that the pagination link is not clickable. Used when the anchor tag is part of a pagination component and the `disabled` property is set to `true`. |
    | **pagination-index-selected** | Applies styles or behaviors indicating that the pagination link is currently active or selected. Used when the anchor tag is part of a pagination component and the `selected` property is set to `true`. |
    | **pagination-index-default** | Applies the default styles or behaviors for pagination links. Used when the anchor tag is part of a pagination component and is in its default state (`disabled` and `selected` are both set to `false`). |

- **dx-chip:** This component allows you to display a "chip" or "tag" with a numerical count, such as notification counters, tag lists, or pill-style labels. It also comes with built-in localization support.

    | **Properties** | **type** | **Description** | **Default** |
    | -------------- | ---------| -----------------------------------------------------------------------|--------------|
    | **name** | String | Specifies the name or label of the chip. | '' |
    | **count** | Number | Represents a numeric count associated with the chip. | `0` |
    | **showChipCount** | Boolean | Determines whether `count` should be displayed alongside the chip name. | `false` |
    | **showAvatar** | Boolean | Determines whether to display an avatar icon at the start of the chip. | `false` |
    | **clearIcon** | Boolean | Determines whether to display a clear (remove) icon slot at the end of the chip. | `false` |
    | **disabled** | Boolean | Disables the chip, making it non-interactive and visually distinct. | `false` |

    The following CSS part attributes are responsible for determining the appropriate CSS for the `dx-chip` component and its elements based on the component's state and properties.

    | **Part** | **Description** |
    | -------------- | ---------|
    | **chip-div** | Represents the main container `<div>` for the `dx-chip` component. It serves as the root element for styling and interaction. |
    | **chip-name** | Represents the `<span>` element that displays the name of the chip. It is used to style the text content of the chip's name. |
    | **chip-count** | Represents the `<span>` element that displays the count of the chip when the locale is left-to-right (LTR). It is used to style the count value in LTR layouts. |
    | **chip-count-rtl** | Represents the `<span>` element that displays the count of the chip when the locale is right-to-left (RTL). It is used to style the count value in RTL layouts. |

- **dx-circular-progress:** This customizable radial progress bar uses SVG graphics and CSS animations to display a loading state. It supports various styling options such as size, stroke width, and color, and can be integrated into any web application to visually indicate progress.

    | **Properties** | **type** | **Description** | **Default** |
    | -------------- | ---------| -----------------------------------------------------------------------|--------------|
    | **size** | Number | Specifies the diameter of the circular progress element. | `100` |
    | **strokewidth** | Number| Specifies the width of the circle's stroke. | `4` |
    | **trailcolor** | String | Specifies the color of the inactive portion (trail) of the circle. | `#D6D6D6` |
    | **valuecolor** | String | Specifies the color of the active portion of the circle. | `#0550DC` |

    The `dx-circular-progress` component does not currently use any part attributes in its implementation.

- **dx-input-textfield:** This component allows you to create rich input fields with enhanced user experience such as search bars or forms. You can also use it for fields where text input with optional icons and labels is required.

    | **Properties** | **type** | **Description** | **Default** |
    | -------------- | ---------| -----------------------------------------------------------------------|--------------|
    | **value** | String | Specifies the current value of the textfield. | '' |
    | **type** | String | Specifies the input type. Sample values include `text`, `password`, or `email`. | `text` |
    | **label** | String, undefined | Specifies the label displayed above the textfield. | `undefined` |
    | **placeholder** | String | Specifies the placeholder text displayed inside the textfield. | '' |
    | **disabled** | Boolean | Indicates whether the textfield is disabled. | `false` |
    | **clearIconUrl** | String | Specifies the URL or name of the icon used to clear the input. | '' |
    | **actionIconUrl** | String | Specifies the URL or name of the icon used for an action (for example, search). | `undefined` |
    | **field** | DxSearchInputFieldType, String | Specifies a field identifier for the input that is useful in custom events or associating it with specific data. You can use the `DxSearchInputFieldType` string `queryString` or provide your own field name. | '' |
    | **hassearchedbefore** | Boolean | Indicates if a search has been performed before. | `false` |

    The following CSS part attributes are responsible for determining the appropriate CSS for the `dx-input-textfield` component and its elements based on the component's state and properties.

    | **Part** | **Description** |
    | -------------- | ---------|
    | **div** | Represents the outermost container of the textfield component. |
    | **label** | Represents the label element for the input field. It is used when the `label` property is provided. |
    | **icon-start** | Represents the starting icon of the input field. It is used when the `iconStartUrl` property is provided. |
    | **icon-start-with-label** | Represents the starting icon of the input field when a label is also present. It is applied in addition to the `icon-start` part. |
    | **input** | Represents the input field. It is the default part for the input element. |
    | **input-disabled** | Represents the input field when the `disabled` property is set to `true`. It is applied in addition to the `input` part. |
    | **input-icon-start** | Represents the input field when there is a starting icon (`iconStartUrl` is provided). It is applied in addition to the `input` part. |
    | **input-icon-end** | Represents the input field when there is an ending icon (`iconEndUrl` is provided). It is applied in addition to the `input` part. |
    | **input-icon-both** | Represents the input field when both starting and ending icons are present (`iconStartUrl` and `iconEndUrl` are provided). It is applied in addition to the `input` part. |
    | **icon-end** | Represents the ending icon of the input field. It is used when the `iconEndUrl` property is provided. |
    | **icon-end-with-label** | Represents the ending icon of the input field when a label is also present. It is applied in addition to the `icon-end` part. |

- **dx-item-type-avatar:** This custom web component displays a predefined avatar representing a specific item type. It supports both icon-based and image-based avatars, automatically selecting the appropriate icon and color based on the provided item type.

    | **Properties** | **type** | **Description** | **Default** |
    | -------------- | ---------| -----------------------------------------------------------------------|--------------|
    | **itemType** | String | Specifies the type of item to display. Determines which icon and color are shown. | '' |
    | **imageUrl** | String | Specifies the URL of the image to display as the avatar. The image is displayed only if this URL is provided and the `itemType` is `IMAGE`. | '' |

    The following CSS part attributes are responsible for determining the appropriate CSS for the `dx-input-textfield` component and its elements based on the component's state and properties.

    | **Part** | **Description** |
    | -------------- | ---------|
    | **ITEM_TYPE_AVATAR_EXPORT_PARTS** | Represents the part names exported from the internal dx-avatar component, allowing you to style or access sub-elements of the avatar from outside the shadow DOM. Typical parts may include icon, image, background, or label. |

- **dx-search-center-layout:** This customizable web component provides a structured layout for a search interface. It includes slots for adding content, such as a header, search input, and search output.

    The following CSS part attributes are responsible for determining the appropriate CSS for the `dx-search-center-layout` component and its elements based on the component's state and properties.

    | **Part** | **Description** |
    | -------------- | ---------|
    | **header-container** | Represents the container for the header section of the layout. |
    | **header** | Represents the header content itself, which is populated through the `dx-header` slot. |
    | **pagination-container** | Represents the container for the pagination section. |
    | **pagination** | Represents the pagination content, which is populated through the `dx-pagination` slot. |
    | **main** | Represents the main content area of the layout. |
    | **search-input-container** | Represents the container for the search input section, which is populated through the `search-input-container` slot. |
    | **hr-part** | Represents the horizontal rule (divider) between the search input and the search results. |
    | **search-result-container** | Represents the container for the search results section. |
    | **SEARCH_OUTPUT_CONTAINER** | Represents a dynamic container for search results when the tag cloud is visible. |
    | **SEARCH_OUTPUT_CONTAINER_NO_TAGS** | Represents a dynamic container for search results when the tag cloud is hidden. |
  
- **dx-toggle-button:** This component supports customizable icons for each button and adjusts its style based on the selection and outlined setting. It includes separate styles for selected and unselected buttons and allows easy integration into other UI components.

    | **Properties** | **type** | **Description** | **Default** |
    | -------------- | ---------| -----------------------------------------------------------------------|--------------|
    | **disabled** | Boolean | Determines if the button is disabled. | `false` |
    | **outlined** | Boolean | Indicates whether the button should be rendered with an outlined style. | `false` |
    | **selectedValue** | String | Specifies the currently selected value of the toggle button. | '' |
    | **iconUrls** | String\[] | Array of URLs for the icons displayed on the buttons. | `[]` |
    | **values** | String\[] | Array of values corresponding to each button's selection state. | `[]` |
    | **singleButton** | Boolean | Renders a single toggle button if set to `true`. Otherwise, it renders two buttons. | `false` |
    | **toggleOn** | Boolean | Indicates if the single toggle button is in the "on" state. | `false` |
    | **showBadge** | Boolean | Displays a badge on the single toggle button if set to `true`. | `false` |
    | **singleButtonTitle** | String | Specifies the title attribute for the single toggle button. | '' |
    | **singleButtonAria** | String | Specifies the ARIA label for the single toggle button. | '' |
    | **icon** | TemplateResult | Specifies the icon template for the single toggle button. | `undefined` |

    The following CSS part attributes are responsible for determining the appropriate CSS for the `dx-toggle-button` component and its elements based on the component's state and properties.

    | **Part** | **Description** |
    | -------------- | ---------|
    | **toggle-button-div** | Represents the outer container `<div>` of the toggle button component. |
    | **toggle-button-div-outlined** | Represents the outer container `<div>` of the toggle button component if the `outlined` property is set to `true`. |
    | **first-button** | Represents the first `<button>` element in the toggle button. |
    | **toggle-button-selected** | Represents the first or second `<button>` element in the toggle button if the `selectedValue` matches the first value in the `values` array. |
    | **toggle-button** | Represents the first or second `<button>` element in the toggle button if the `selectedValue` does not match the first value in the `values` array. |
    | **second-button** |Represents the second `<button>` element in the toggle button. |
    | **toggle-button-icon** | Represents the `<img>` elements inside the buttons, which display the icons for the toggle button options. This part remains constant and does not change. |
    | **badge-dot** | Represents the badge element shown when `showBadge` is set to `true` in single button mode. |
    | **toggle-single-button** | Represents the single toggle button element when `singleButton` is set to `true`. |
    | **toggle-on-single-button** | Applied to the single button when it is in the "on" state (`toggleOn` is set to `true`). |
    | **toggle-off-single-button** | Applied to the single button when it is in the "off" state (`toggleOn` is set to `false`). |
  
- **dx-snackbar:** This custom web component displays brief messages to users, typically as feedback for actions or system events. It supports different message types (such as info, warning, error, success, and progress) and can display an icon or a progress indicator accordingly. The component is built using the Lit library and is highly customizable, supporting slots for action buttons and theming using CSS parts.

    | **Properties** | **type** | **Description** | **Default** |
    | -------------- | ---------| -----------------------------------------------------------------------|--------------|
    | **message** | String | Specifies the message text or HTML content to display in the snackbar. | '' |
    | **type** | String | Specifies the type of snackbar to display and determines the icon or progress indicator shown. Possible values are `info`, `warning`, `error`, `success`, `progress` | `info` |

    The following CSS part attributes are responsible for determining the appropriate CSS for the `dx-snackbar` component and its elements based on the component's state and properties.

    | **Part** | **Description** |
    | -------------- | ---------|
    | **snackbar-container** | Represents the main container for the snackbar. |
    | **snackbar-icon-container** | Represents the container that holds the icon or progress indicator. |
    | **snackbar-icon** | Represents the first `<button>` element in the snackbar. |
    | **snackbar-progress** | Represents the container for the progress indicator. This container is shown only when type is `SNACKBAR_PROGRESS`. |
    | **snackbar-message** | Represents the element displaying the snackbar message text or HTML. |
    | **snackbar-button-container** | Represents the container for the action buttons section. |
    | **snackbar-buttons** | Represents the slot container for custom action buttons (`slot="snackbar-buttons"`). |
  
- **dx-tooltip:** This highly configurable web component displays tooltips in web applications. It provides flexible positioning, sizing, and content options, supporting both single-line and multi-line tooltips. The component is accessible, responsive to viewport changes, and can be customized for right-to-left (RTL) layouts. It automatically manages visibility, placement, and sizing based on the target element and viewport constraints.

    | **Properties** | **type** | **Description** | **Default** |
    | -------------- | ---------| -----------------------------------------------------------------------|--------------|
    | **show** | Boolean | Controls the visibility of the tooltip. | `false` |
    | **tooltiptext** | String or undefined | Specifies the text content to display inside the tooltip. | `undefined` |
    | **tooltipSize** | String | Specifies the size variant of the tooltip (for example, small or large). | `tooltip-small` |
    | **tooltipType** | String | Specifies the type of tooltip (for example, single-line or multi-line). | `tooltip-single-line` |
    | **placement** | String| Specifies the preferred placement of the tooltip (for example, top, bottom, left, or right). | `tooltip-bottom` |
    | **gap** | Number | Specifies the gap in pixels between the tooltip and the target element. | 4 |
    | **multiLineMaxWidth** | Number | Specifies the maximum width for multi-line tooltips in pixels. | 300 |
    | **viewportPadding** | Number | Specifies the padding from the viewport edge in pixels. | 4 |
    | **minimumWidth** | Number | Specifies the minimum width of the tooltip in pixels. | 0 |
    | **isRTL** | Boolean | Enables RTL layout support. | `false` |

    The following CSS part attributes are responsible for determining the appropriate CSS for the `dx-tooltip` component and its elements based on the component's state and properties.

    | **Part** | **Description** |
    | -------------- | ---------|
    | **tooltip-root** | Represents the root element of the tooltip component. Useful for styling the overall tooltip container. |
    | **tooltip-text** | Represents the element containing the tooltip text. This part is combined with the effective type, size, and placement for more granular styling (for example, single-line, multi-line, small, large, top, or bottom). |
    | **tooltip-target** | Represents the interactive element that triggers the tooltip display upon hover or focus. |

- **dx-avatar:** This web component displays user avatars in various forms, such as images, icons, or text initials. It supports different shapes (rounded or circular), color themes, and content types (image, icon, icon template, or text). It is also highly customizable and can be used to represent users, entities, or any object requiring a visual identifier in your application.

    | **Properties** | **type** | **Description** | **Default** |
    | -------------- | ---------| -----------------------------------------------------------------------|--------------|
    | **variant** | String | Sets the avatar's visual variant. Possible values are `avatar-letter`, `avatar-icon`, or `avatar-img`. | `undefined` |
    | **imgUrl** | String | Indicates the URL of the image to be displayed as the avatar when the `variant` is set to `avatar-img`. | `undefined` |
    | **iconUrl** | String | Indicates the URL of the icon to be displayed as the avatar when the `variant` is set to `avatar-icon`. | `undefined` |
    | **color** | String | Specifies the color theme for the avatar. | `undefined` |
    | **iconTemplate** | TemplateResult or String | Custom icon template or SVG string for icon template avatars. | `undefined` |
    | **avatarText** | String | Specifies the text to be displayed in the avatar when the `variant` is set to `avatar-letter`. | `undefined` |
    | **type** | String | Sets the shape of the avatar. Possible values are `avatar-rounded` or `avatar-circular`. | `undefined` |

    The following CSS part attributes are responsible for determining the appropriate CSS for the `dx-avatar` component and its elements based on the component's state and properties.

    | **Part** | **Description** |
    | -------------- | ---------|
    | **avatar-div** | Represents the part attribute for the outer div element when the `type` property is set to `avatar-rounded`. It is used to style the container of the rounded avatar. |
    | **avatar-div-circular** | Represents the part attribute for the outer div element when the `type` property is set to `avatar-circular`. It is used to style the container of the circular avatar. |
    | **avatar-image-circular** | Represents the part attribute for an image element when the `variant` property is set to `avatar-img` and the `type` property is set to `avatar-circular`. It is used to style the circular avatar displaying an image. |
    | **avatar-image-rounded** | Represents the part attribute for an image element when the `variant` property is set to `avatar-img` and the `type` property is set to `avatar-rounded`. It is used to style the rounded avatar displaying an image. |
    | **avatar-icon-circular** | Represents the part attribute for an image element when the `variant` property is set to `avatar-icon` and the `type` property is set to `avatar-circular`. It is used to style the circular avatar displaying an icon. |
    | **avatar-icon-rounded** | Represents the part attribute for an image element when the `variant` property is set to `avatar-icon` and the `type` property is set to `avatar-rounded`. It is used to style the rounded avatar displaying an icon. |
    | **avatar-span-circular** | Represents the part attribute for a span element when the `variant` property is set to `avatar-letter` and the `type` property is set to `avatar-circular`. It is used to style the circular avatar displaying text. |
    | **avatar-span-rounded** | Represents the part attribute for a span element when the `variant` property is set to `avatar-letter` and the `type` property is set to `avatar-rounded`. It is used to style the rounded avatar displaying text. |

- **dx-header:** This component offers a flexible and responsive header solution with various customization options and localization support.

    | **Properties** | **type** | **Description** | **Default** |
    | -------------- | ---------| -----------------------------------------------------------------------|--------------|
    | **color** | String | Sets the color for the header's text and other elements. | 'rgba(0, 0, 0, .32)' |
    | **headerTitle** | String | Specifies the title displayed in the header. | '' |
    | **showBackIcon** | Boolean | Determines whether the back icon is shown. | `false` |
    | **isSideNavOpen** | Boolean | Indicates whether the side navigation is open. | `false` |
    | **disabled** | Boolean | Determines whether certain components in the header are disabled. | `false` |
    | **variant** | String | Specifies the predetermined structure and styling of the header according to its use-case. You can use the value `header-endUser`. | `undefined` |

    The following CSS part attributes are responsible for determining the appropriate CSS for the `dx-header` component and its elements based on the component's state and properties.

    | **Part** | **Description** |
    | -------------- | ---------|
    | **header** | Represents the main container of the header component. |
    | **sub-header-start** | Represents the left side of the header, typically used for navigation or back buttons. |
    | **header-spacing-start-hamburger** | Represents the spacing or container for the hamburger menu when the side navigation is open. |
    | **header-spacing-start** | Represents the spacing or container for the left side of the header when the side navigation is closed. |
    | **h6** | Represents the container for the title or heading of the header. |
    | **sub-header-end** | Represents the right side of the header, typically used for actions such as search, filters, or badges. |
    | **header-spacing-end** | Represents the spacing or container for the right side of the header. |
    | **input** | Represents the input text field used in the header, typically for search functionality. |
    | **badge_dot** | Represents the badge element, often used to display notifications or indicators. |
    | **hr-part** | Represents the horizontal rule (divider) at the bottom of the header. |

- **dx-list-item:** This component allows you to mark items as selected and apply different styles accordingly. It also includes a slot element, allowing you to insert content into the item when the component is used.

    | **Properties** | **type** | **Description** | **Default** |
    | -------------- | ---------| -----------------------------------------------------------------------|--------------|
    | **key** | String | A unique key for the list item that is typically used to identify it within a list. | '' |
    | **isSelected** | Boolean | Used to track whether the list item is selected. | `false` |
    | **role** | String | Specifies the ARIA role for the list item, such as `menuitem`. |'' |

    The following CSS part attributes are responsible for determining the appropriate CSS for the `dx-list-item` component and its elements based on the component's state and properties.

    | **Part** | **Description** |
    | -------------- | ---------|
    | **menu-item** | This part is applied when the `role` property of the list item is set to `menuitem`. It represents a menu item in a list. |
    | **list-item-selected** | This part is applied when the `isSelected` property is set to `true`. It indicates that the list item is currently selected. |
    | **list-item** | This part is applied when the `role` property of the list item is set to `menuitem`. It represents a menu item in a list. |

- **dx-svg-icon:** This component allows you to display scalable vector icons with customizable colors and sizes. You can use this component for dynamic UIs where the icon might need to change based on context or state.

    | **Properties** | **type** | **Description** | **Default** |
    | -------------- | ---------| -----------------------------------------------------------------------|--------------|
    | **color** | String | The color of the SVG icon. If `useCurrentColor` is set to `false`, this color will be applied directly to the SVG's fill. | '' |
    | **size** | String | The size of the icon. Used for both width and height. | '' |
    | **useCurrentColor** | Boolean | Determines whether the icon will inherit the color of the parent element's color property (using CSS currentColor). | `false` |
    | **icon** | TemplateResult | The SVG icon content passed as a template to render the icon. | `undefined` |

- **dx-authoring-item-type-avatar:** This component allows you to display an avatar image based on the `itemType` property that determines the type of item for which the avatar is rendered.

    | **Properties** | **type** | **Description** | **Default** |
    | -------------- | ---------| -----------------------------------------------------------------------|--------------|
    | **itemType** | String | Determines the type of item for which the avatar is rendered. | '' |

- **dx-badge:** This component displays a badge, typically used to show a small piece of information such as a count, label, or status. It supports both left-to-right (LTR) and right-to-left (RTL) layouts, automatically adjusting its styling based on the current localization direction.

    | **Properties** | **type** | **Description** | **Default** |
    | -------------- | ---------| -----------------------------------------------------------------------|--------------|
    | **badge** | String | Holds the text content to be displayed inside the badge. | '' |

    The following CSS part attributes are responsible for determining the appropriate CSS for the `dx-badge` component and its elements based on the component's state and properties.

    | **Part** | **Description** |
    | -------------- | ---------|
    | **badge_text** |Represents the badge text when the text direction is left-to-right (LTR). |
    | **badge_text-rtl** |Represents the badge text when the text direction is right-to-left (RTL). |

- **dx-breadcrumbs-item:** This web component represents a single, customizable item in a breadcrumb navigation trail. It is built using the Lit library and is designed to display a navigational link (optionally with an icon). It also supports customization for disabled states and accessibility, helping users understand and navigate the hierarchy of a website or application.

    | **Properties** | **type** | **Description** | **Default** |
    | -------------- | ---------| -----------------------------------------------------------------------|--------------|
    | **path** | PathType Object | Defines the breadcrumb item data, including title, link, icon, iconName, and state. | `undefined` |
    | **partProp** | String | Specifies the custom part attribute for styling or identification. | `undefined` |
    | **key** | String | Specifies the unique key for the breadcrumb item, which is essential for list rendering. | '' |

    The following CSS part attributes are responsible for determining the appropriate CSS for the `dx-badge` component and its elements based on the component's state and properties.

    | **Part** | **Description** |
    | -------------- | ---------|
    | **breadcrumbs-item** | Applied to the `<li>` element representing a breadcrumb item. |
    | **disabled** | Added to the `<li>` element when the breadcrumb item is disabled. |
    | **breadcrumbs-item-last** | Used for the last breadcrumb item. |
    | **breadcrumbs-icon** | Applied to the icon element within the breadcrumb item. |
    | **breadcrumbs-item-last-icon** | Used for the icon in the last breadcrumb item. |
    | **breadcrumbs-link** | Applied to the `<a>` link for a breadcrumb item. |
    | **breadcrumbs-link-last** | Used for the link in the last breadcrumb item. |
    | **breadcrumbs-content** | Applied to the `<div>` wrapping the icon and text. |
    | **breadcrumbs-text** | Applied to the `<span>` containing the breadcrumb title. |

- **dx-breadcrumbs:** This web component displays a navigational breadcrumb trail, helping users understand and navigate the hierarchy of a website or application. It renders a list of breadcrumb items, each representing a navigation step. The component supports both left-to-right (LTR) and right-to-left (RTL) layouts and allows custom click handling for breadcrumb navigation.

    | **Properties** | **type** | **Description** | **Default** |
    | -------------- | ---------| -----------------------------------------------------------------------|--------------|
    | **paths** | Array<PathType\> | Specifies the array of breadcrumb path objects to display. Each object defines a breadcrumb item (PathType). | `[]` |
    | **handleBreadcrumbClick** | Function | Defines the optional callback function invoked when a breadcrumb item is clicked (except for disabled items). | `undefined` |

    The following PathType Interface properties are used in `dx-breadcrumbs` and `dx-breadcrumbs-item`:

    | **Properties** | **type** | **Description** | **Default** |
    | -------------- | ---------| -----------------------------------------------------------------------|--------------|
    | **title** | String | Specifies the display text for the breadcrumb item. | `undefined` |
    | **parentId** | String | Specifies the optional parent identifier for hierarchical data. | `undefined` |
    | **link** | String | Specifies the URL or route for navigation. | `undefined` |
    | **icon** | TemplateResult | Defines the custom icon template to render. | `undefined` |
    | **iconName** | String | Specifies the predefined icon name (for example `HOME` or `INFORMATION`). | `undefined` |
    | **disabled** | Boolean | Disables the breadcrumb item if set to `true`. | `undefined` |

    The following CSS part attributes are responsible for determining the appropriate CSS for the `dx-breadcrumbs` component and its elements based on the component's state and properties.

    | **Part** | **Description** |
    | -------------- | ---------|
    | **breadcrumbs-container** | Represents the main container for the breadcrumbs navigation. |
    | **breadcrumbs-list** | Represents the list element that holds all breadcrumb items. |
    | **breadcrumbs-separator** | Represents the separator element (for example, chevron icon) between breadcrumb items. |
    | **breadcrumbs-item-last** | Represents the last breadcrumb item in the list, typically styled differently to indicate the current page. |

- **dx-data-grid:** This component is designed to provide a highly customizable and interactive data grid for displaying tabular data. Its features include sorting, selection, tooltips, and keyboard navigation.

    | **Properties** | **type** | **Description** | **Default** |
    | -------------- | ---------| -----------------------------------------------------------------------|--------------|
    | **isLoading** | String | Indicates whether the data grid is in a loading state. | `false` |
    | **colDef** | String | Represents the column definitions for the data grid. | '' |
    | **hasMiddlewareError** | String | Indicates if there is a middleware error. | `false` |
    | **hasContentSourceAvailable** | String | Indicates if content sources are available. | `false` |
    | **checkboxSelection** | String | Indicates if checkbox selection is enabled. | `false` |
    | **customTableHeaderPart** | String | Custom part name for table header styling. | '' |
    | **customTableCellPart** | String | Custom part name for table cell styling. | '' |
    | **specialFields** | String\[] | List of special fields for custom rendering or actions. | `[]` |
    | **tableHover** | String | Indicates if table hover effects are enabled. | `false` |

    The following CSS part attributes are responsible for determining the appropriate CSS for the `dx-data-grid` component and its elements based on the component's state and properties.

    | **Part** | **Description** |
    | -------------- | ---------|
    | **table-row-header-container** | Represents the container for the table header row. |
    | **table-select-all-checkbox** | Represents the checkbox for selecting all rows in the header row. |
    | **table-header-container** | Represents the container for each table header cell. |
    | **table-header-container-child** | Represents the child container inside a table header cell. |
    | **table-header-text-parent** | Represents the parent container for the header text. |
    | **table-header-text** | Represents the text content of the table header. |
    | **table-sort-button-container** |Represents the container for the sort buttons in the header. |
    | **table-header-icon-button** | Represents the sort icon button in the header. |
    | **table-header-asc-sort-button-hidden** | Represents the hidden state of the ascending sort button. |
    | **table-header-desc-sort-button-hidden** | Represents the hidden state of the descending sort button. |
    | **table-header-sort-button** | Represents the visible state of the sort button. |
    | **table-column-separator** | Represents the separator between table columns. |
    | **table-column-separator-hr** | Represents the horizontal rule (divider) used as a column separator. |
    | **table-body-container** | Represents the container for the table body. |
    | **table-loading-text** | Represents the loading text displayed when data is being loaded. |
    | **table-result-label** | Represents the label for the result message, such as "No results found." |
    | **table--result-description** | Represents the description for the result message. |
    | **table-row-body-container** | Represents the container for each row in the table body. |
    | **table-select-checkbox-container** | Represents the container for the checkbox in each row. |
    | **table-select-checkbox** | Represents the checkbox for selecting a specific row. |
    | **table-cell-container** | Represents the container for each table cell. |
    | **table-cell-text** | Represents the text content of a table cell. |
    | **table-cell-icon-button** | Represents the icon button inside a table cell. |
    | **table-action-icon-button** | Represents the action button for a row, such as an edit button for modifying an item or an overflow menu for displaying additional actions in a menu list. |
    | **table-header-menu-item** | Represents a menu item in the overflow menu. |
    | **table-container** | Represents the main container for the entire table. |
    | **table-column-authoring-{index}** | Represents the authoring-specific styling for a column. |
    | **table-column-authoring-{index}-div** | Represents the authoring-specific container for a column. |
    | **table-column-authoring-{index}-div-0** | Represents the first child container in the authoring column. |
    | **table-column-authoring-{index}-div-1** | Represents the second child container in the authoring column. |
    | **table-column-authoring-{index}-div-2** | Represents the third child container in the authoring column. |
    | **table-column-authoring-{index}-div-3** | Represents the fourth child container in the authoring column. |
    | **table-column-authoring-{index}-div-4** | Represents the fifth child container in the authoring column. |

- **dx-data-grid-generic:** This highly flexible and customizable web component renders data grids in web applications. It supports dynamic columns, sorting, selection, action menus, and integration with middleware data sources. The component is designed for enterprise use cases, offering accessibility, keyboard navigation, and advanced features such as row actions, tooltips, and avatar rendering. It is built using Lit and can be easily integrated into modern web applications.

    | **Properties** | **type** | **Description** | **Default** |
    | -------------- | ---------| -----------------------------------------------------------------------|--------------|
    | **data** | DxDataGridContextType | Defines the data context for the grid, including items, pagination, sorting, and selection. | {} |
    | **columns** | DxDataGridColDef\[] | Defines an array of column definitions specifying field, header, actions, and rendering options. | `[]` |
    | **isLoading** | String | Indicates if the grid is in a loading state. | `false` |
    | **hasMiddlewareError** | String | Indicates if there is a middleware error. | `false` |
    | **hasContentSourceAvailable** | String | Indicates if a content source is available. | `false` |
    | **customTableHeaderPart** | String | Custom part name for table header cells (for styling/export parts). | '' |
    | **customeTableCellPart** | String | Custom part name for table body cells (for styling/export parts). | '' |
    | **specialFields** | String\[] | Defines a list of special fields for custom rendering or logic. | `[]` |
    | **isRowClickable** | Boolean | Enables row click events for selection or navigation. | `false` |
    | **tableHover** | String | Enables table hover effect. | `false` |
    | **checkboxSelection** | String | Enables row selection using checkboxes when set to `true`. | `false` |

    The following CSS part attributes are responsible for determining the appropriate CSS for the `dx-data-grid-generic` component and its elements based on the component's state and properties.

    | **Part** | **Description** |
    | --- | --- |
    | **table-container** | Represents the main container for the data grid table. |
    | **table-row-header-container** | Represents the `<tr>` element for the table header row. |
    | **table-row-body-container** | Represents a table row in the body. |
    | **table-row-body-container-selected** | Represents a selected table row. |
    | **table-row-body-container-hovered** | Represents a hovered table row. |
    | **table-select-all-checkbox** | Represents the header cell containing the select-all checkbox. |
    | **table-header-container** | Represents the main container for each table header cell. |
    | **table-header-container-child** | Represents a child container inside a table header cell. |
    | **table-header-text-parent** | Represents the parent container for the header text. |
    | **table-header-text** | Represents the actual header text span. |
    | **table-sort-button-container** | Represents the container for the sort buttons in the header. |
    | **table-header-icon-button** | Represents the sort icon button in the header. |
    | **table-header-asc-sort-button** | Represents the sort button for ascending order. |
    | **table-header-desc-sort-button** | Represents the sort button for descending order. |
    | **table-header-asc-sort-button-hidden** | Represents the hidden state for ascending sort button. |
    | **table-header-desc-sort-button-hidden** | Represents the hidden state for descending sort button. |
    | **table-header-sort-button** | Represents the active sort button. |
    | **table-column-separator** | Represents the container for the column separator line. |
    | **table-column-separator-hr** | Represents the horizontal rule element for the column separator. |
    | **table-body-container** | Represents the main container for the table body (rows and loading, empty, or error states). |
    | **table-select-checkbox-container** | Represents the container for the row selection checkbox. |
    | **table-select-checkbox** | Represents the row selection checkbox. |
    | **table-cell-container** | Represents the container for a table cell. |
    | **table-cell-text** | Represents the main text span in a table cell. |
    | **table-cell-link** | Represents the link element in a table cell if the cell is a link. |
    | **table-action-buttons-container** | Represents the container for action buttons in a row. |
    | **table-action-icon-button** | Represents an action icon button in a row. |
    | **table-action-icon-button-menu** | Represents an action icon button that opens a menu. |
    | **table-action-icon-button-hidden** | Represents the hidden state for an action icon button. |
    | **table-cell-icon-button** | Represents an icon button inside a table cell. |
    | **table-cell-text-action** | Represents the text action button inside a table cell. |
    | **table-header-menu-item** | Represents a menu item in the table header. |
    | **table-result-label** | Represents the label for empty or error states in the table body. |
    | **table-result-description** | Represents the description for empty or error states in the table body. |
    | **table-loading-text** | Represents the text shown when the table is loading. |
    | **table-column-authoring-{index}** | Represents the authoring-specific column part. `{index}` is replaced by the column index. |
    | **table-column-authoring-{index}-div** | Represents the authoring-specific column div. `{index}` is replaced by the column index. |
    | **table-column-authoring-{index}-div-0/1/2/3/4** | Represents the nested divs for authoring columns for layout and styling. `{index}` is replaced by the column index. |
    | **table-column-picker-{index}** | Represents the picker-specific column part. `{index}` is replaced by the column index. |
    | **table-column-authoring-div-{index}** | Represents the authoring mode cell content wrapper, which is index-specific. |

- **dx-dialog:** This component is designed to represent a reusable dialog or modal element with customizable content, title, and actions.

    | **Properties** | **type** | **Description** | **Default** |
    | -------------- | ---------| -----------------------------------------------------------------------|--------------|
    | **open** | Boolean | Determines whether the dialog is visible or hidden. This property is reflected to the DOM, so any changes to it are also reflected in the corresponding HTML attribute. | `false` |
    | **dialogTitle** | String | Specifies the title text displayed in the dialog header (if not overridden by slot). | `A localized string for the generic label` |
    | **size** | String | Sets the dialog size. Accepts values from `DialogSizes` enum (for example, XL or SM). | `xl` |
    | **overrideTitle** | Boolean | Determines whether the default title is overridden by custom content provided through a slot. | `false` |

    The following CSS part attributes are responsible for determining the appropriate CSS for the `dx-dialog` component and its elements based on the component's state and properties.

    | **Part** | **Description** |
    | -------------- | ---------|
    | **dialog-root** |Represents the root container of the dialog component. It wraps the entire dialog structure. |
    | **backdrop** |Represents the backdrop layer behind the dialog. It is used to block interaction with the rest of the page and provides a visual overlay. |
    | **container** |Represents the container that holds the dialog content. It ensures proper layout and positioning of the dialog. |
    | **paper** |Represents the main dialog paper or card-like structure that contains the title, content, and actions. |
    | **title** |Represents the title section of the dialog. This part is conditionally applied based on the `overrideTitle` property. |
    | **title-root** |Represents the root container for the title text. It is used when `overrideTitle` property is set to `false`. |
    | **title-text** |Represents the text element of the dialog title. It displays the title string. |
    | **icon-root** |Represents the container for the close icon. It is used to position and style the close button. |
    | **icon-close** |Represents the close icon. It is used to trigger the dialog close action. |
    | **content** |Represents the content section of the dialog. It wraps the main content of the dialog. |
    | **content-root** |Represents the root container for the dialog content. It ensures proper layout and styling of the content. |
    | **action** |Represents the action section of the dialog. It contains the buttons or actions available in the dialog. |

- **dx-header-layout:** This component serves as a layout template for a header section in a web application, allowing developers to define and organize content into specific slots. These slots include `header-start`, `header-start-label`, `header-middle`, and `header-end`.

    The following CSS part attributes are responsible for determining the appropriate CSS for the `dx-header-layout` component and its elements based on the component's state and properties.

    | **Part** | **Description** |
    | -------------- | ---------|
    | **main-header** |Represents the main container for the header layout. It acts as the root wrapper for all header sections. |
    | **header-start-container** |Represents the container for the start section of the header. This section is typically used for elements such as logos or navigation menus. |
    | **header-start** |Represents the specific slot within the start section of the header. This slot allows users to insert custom content into the start section. |
    | **header-start-container-label** |Represents the container for the label associated with the start section of the header. This is likely used for additional descriptive content. |
    | **header-start-label** |Represents the specific slot for the label in the start section. This slot allows users to insert custom label content. |
    | **header-middle-container** |Represents the container for the middle section of the header. This section is typically used for elements such as search bars or titles. |
    | **header-middle** |Represents the specific slot within the middle section of the header. This slot allows users to insert custom content into the middle section. |
    | **header-end-container** |Represents the container for the end section of the header. This section is typically used for elements such as user profile icons or action buttons. |
    | **header-end** |Represents the specific slot within the end section of the header. This slot allows users to insert custom content into the end section. |

- **dx-icon-button:** This component is designed to render a `dx-button` button that can display an icon or image. Its padding and size can be customized. You need to add an `aria-label` to this component to prevent the screen reader from reading its `alt` text.

    | **Properties** | **type** | **Description** | **Default** |
    | -------------- | ---------| -----------------------------------------------------------------------|--------------|
    | **size** | String | Specifies the size of the icon button. | 'small' |
    | **withPadding** | Boolean | Determines whether the button should have padding. | `false` |
    | **imgurl** | String | Specifies the URL of the image to be used in the button. | '' |
    | **icon** | TemplateResult | Defines the Lit template for rendering a custom icon. | `undefined` |
    | **disabled** | Boolean | Disables the button if set to `true`. | `false` |
    | **inverseColor** | Boolean | Applies an inverse color scheme if set to `true`. | `false` |

    The following CSS part attribute is responsible for determining the appropriate CSS for the `dx-icon-button` component and its elements based on the component's state and properties.

    | **Part** | **Description** |
    | -------------- | ---------|
    | **BUTTON_PARTS** | Exposes the internal parts of the `dx-button` component so they can be styled externally. It accepts a comma-separated list of part names. |

- **dx-datepicker:** This custom web component, built with LitElement, provides a highly accessible, localized, and feature-rich date picker input for web applications. It supports keyboard navigation, localization, custom date formats, and accessibility features such as ARIA labels. The component allows users to select dates through an input field or an interactive calendar popup, with support for year selection, validation, and custom helper text. It is suitable for use in forms and complex UI scenarios where robust date input is required.

    | **Properties** | **type** | **Description** | **Default** |
    | -------------- | ---------| -----------------------------------------------------------------------|--------------|
    | **name** | String | Specifies the name of the datepicker, used for form submission. |'datepicker' |
    | **label** | String | Specifies the label for the datepicker, displayed above the input. | 'Label' |
    | **showInputAction** | Boolean | Controls whether to show or hide an action next to the input label. | `false` |
    | **helperIconTooltip** | String | Provides the tooltip text for the helper icon next to the label. | 'Label helper tooltip' |
    | **requiredField** | Boolean | Determines whether to show or hide the required field asterisk next to the label. | `false` |
    | **open** | Boolean | Opens the datepicker calendar on page load if set to `true`. | `false` |
    | **hideHelperText** | Boolean | Hides the helper text below the input. | `false` |
    | **showRemoveLabel** | Boolean | Controls whether to show or hide a "remove" label action. | `false` |
    | **value** | Number | Specifies the current value of the datepicker (as a Unix timestamp in ms). | 0 |
    | **disabled** | Boolean | Disables the datepicker input and actions. | `false` |
    | **field** | String | Specifies an additional field identifier, used in events. | '' |

    The following CSS part attributes are responsible for determining the appropriate CSS for the `dx-datepicker` component and its elements based on the component's state and properties.

    | **Part** | **Description** |
    | -------------- | ---------|
    | **datepicker-root** | Represents the root container of the datepicker component. |
    | **datepicker-div-label-and-action** | Represents the wrapper for the label and any action elements (such as the remove label or input action). |
    | **datepicker-div-label** | Represents the container for the label and required asterisk. |
    | **datepicker-label-text** | Represents the main label text for the datepicker. |
    | **datepicker-label-text-disabled** | Represents the label text when the input is disabled. |
    | **datepicker-label-text-invalid** | Represents the label text when the input is invalid. |
    | **datepicker-label-required** | Represents the asterisk indicating a required field. |
    | **datepicker-remove-label** | Represents the "remove" label or button for removing the field. |
    | **datepicker-remove-label-disabled** | Represents the "remove" label or button when disabled. |
    | **datepicker-div-form** | Represents the rapper for the input and calendar icon. |
    | **datepicker-div-input** | Represents the container for the input field. |
    | **datepicker-div-input-invalid** | Represents the input container when the value is invalid. |
    | **datepicker-div-input-disabled** | Represents the input container when disabled. |
    | **datepicker-input** | Represents the input field for date entry. |
    | **datepicker-input-rtl** | Represents the input field in right-to-left (RTL) layout. |
    | **datepicker-div-icon** | Represents the container for the calendar icon button. |
    | **datepicker-div-calendar-button** | Represents the button to open or close the calendar. |
    | **datepicker-invalid-text** | Represents the error message text for invalid input. |
    | **datepicker-invalid-text-rtl** | Represents the error message text in RTL layout. |
    | **datepicker-help-text** | Represents the helper text below the input. |
    | **datepicker-help-text-rtl** | Represents the helper text in RTL layout. |
    | **datepicker-calendar** | Represents the calendar popup container. |
    | **datepicker-calendar-header** | Represents the header of the calendar (month or year and navigation). |
    | **datepicker-calendar-div-year** | Represents the container for the year and year selection button. |
    | **datepicker-calendar-div-year-span** | Represents the span showing the current month and year. |
    | **datepicker-calendar-year-view-button** | Represents the button to toggle year selection view. |
    | **datepicker-calendar-year-view-button-rtl** | Represents the year view button in RTL layout. |
    | **datepicker-calendar-div-month** | Represents the container for month navigation buttons. |
    | **datepicker-calendar-month-prev** | Represents the button to go to the previous month. |
    | **datepicker-calendar-month-prev-rtl** | Represents the previous month button in RTL layout. |
    | **datepicker-calendar-month-next** | Represents the button to go to the next month. |
    | **datepicker-calendar-month-next-rtl** | Represents the next month button in RTL layout. |
    | **datepicker-calendar-days** | Represents the row containing the day-of-week labels. |
    | **datepicker-calendar-day-label** | Represents each day-of-week label. |
    | **datepicker-calendar-dates** | Represents the container for all date buttons. |
    | **datepicker-calendar-date-span** | Represents the wrapper for each date button. |
    | **datepicker-calendar-dates-button** | Represents the button for each date. |
    | **datepicker-calendar-dates-button-selected** | Represents the selected date button. |
    | **datepicker-calendar-dates-today-span** | Represents the indicator for today's date. |
    | **datepicker-calendar-dates-today-span-rtl** | Represents the indicator for today's date in RTL layout. |
    | **datepicker-calendar-dates-empty-div** | Represents the empty div for calendar grid alignment. |
    | **datepicker-calendar-year-selection** | Represents the container for the year selection view. |
    | **datepicker-calendar-year-selection-years** | Represents the container for the list of year buttons. |
    | **datepicker-calendar-year-selection-year-div** | Represents the wrapper for each year button. |
    | **datepicker-calendar-year-selection-year-button** | Represents the button for each year. |
    | **datepicker-calendar-year-selection-year-button-selected** | Represents the button for the selected year. |
    | **datepicker-calendar-footer** | Represents the footer of the calendar, which contains the "Today" button. |
    | **datepicker-calendar-footer-button** | Represents the "Today" button in the calendar footer. |

- **dx-menu:** This component is designed to represent a dropdown menu that can be anchored to a target element and toggled open or closed.

    | **Properties** | **type** | **Description** | **Default** |
    | -------------- | ---------| -----------------------------------------------------------------------|--------------|
    | **open** | Boolean | Indicates whether the menu is open or closed. | `false` |
    | **menuDelay** | Number | Specifies the delay (in milliseconds) before the menu opens or closes. | `300` |

    The following CSS part attributes are responsible for determining the appropriate CSS for the `dx-menu` component and its elements based on the component's state and properties.

    | **Part** | **Description** |
    | -------------- | ---------|
    | **menu-root** | Represents the root container of the menu. It is the main wrapper for the menu content. |
    | **backdrop** | Represents the backdrop element behind the menu. It is used to detect clicks outside the menu to trigger the menu to close. |
    | **paper-root** | Represents the container for the menu content. It holds the actual menu items and is styled to appear as the menu. |
    | **LIST_PARTS** | Represents the parts of the `dx-list` component used inside the menu. These parts are exported through the `dx-list` component to allow for the styling of the list and its items. |
    | **BUTTON_PARTS** | Represents the parts of the `dx-button` element that triggers the menu. These parts are exported through the target anchor to allow for the styling of the trigger element. |

- **dx-menu-item:** This component is designed to represent a single menu item in a menu list and enables interaction and accessibility.

    | **Properties** | **type** | **Description** | **Default** |
    | -------------- | ---------| -----------------------------------------------------------------------|--------------|
    | **text** | String | Represents the text content of the menu item. | '' |
    | **value** | String | Represents the value associated with the menu item. | '' |
    | **menuObject** | Object | Represents an object containing additional data for the menu item. | `{}` |

    The following CSS part attributes are responsible for determining the appropriate CSS for the `dx-menu-item` component and its elements based on the component's state and properties.

    | **Part** | **Description** |
    | -------------- | ---------|
    | **text-root** | Applied to the root container of the text within the menu item. It is used to wrap the text and handle mouse events like `mouseenter` for tooltips. |
    | **text** | Applied to the actual text content of the menu item. It represents the visible text displayed to the user. |
    | **LIST_ITEM_PARTS** | A collection of parts exported from the `dx-list-item` component through the `exportparts` attribute. These parts are made available for external styling and customization. |

- **dx-multiple-select-chip:** This component defines the properties for a multiple select chip component. This component is designed to allow users to select multiple options from a dropdown list, with each selection displayed as a chip. It supports features such as disabling the component, showing avatars, displaying the count of selected chips, handling empty options, and more. The component is highly configurable through its properties, making it suitable for various use cases where multi-selection is required in a user interface.

    | **Properties** | **type** | **Description** | **Default** |
    | -------------- | ---------| -----------------------------------------------------------------------|--------------|
    | **disabled** | Boolean | Disables the input and all interactions. | `false` |
    | **showHelperText** | Boolean | Shows helper text below the input. | `false` |
    | **helperText** | String | Displays a helper text below the input. | '' |
    | **name** | String | Specifies the name attribute for the input. | `multiple-select` |
    | **selectedValues** | OptionData\[] | Defines an array of selected option objects. | `[]` |
    | **options** | OptionData\[] | Defines an array of available option objects. | `[]` |
    | **field** | String | Specifies the field type or identifier. | '' |
    | **showRemoveLabel** | Boolean | Shows a "remove" label for the field. | `false` |
    | **emptyOptions** | Boolean | Allows the addition of new values not in the options list. | `false` |
    | **clearIcon** | Boolean | Shows a clear icon on each chip. | `true` |
    | **error** | Boolean | Marks the input as having an error. | `false` |
    | **customWidth** | String or undefined | Specifies the custom width for the component (for example, '300px'). | `undefined` |
    | **placeholder** | String or undefined | Specifies the placeholder text for the input. | `Localized default` |
    | **label** | String or undefined | Specifies the Label for the input. | `Localized default` |

    The following CSS part attributes are responsible for determining the appropriate CSS for the `dx-multiple-select-chip` component and its elements based on the component's state and properties.

    | **Part** | **Description** |
    | -------------- | ---------|
    | **top-container-div** | Represents the main container for the entire multi-select component. |
    | **multiple-select-div-label-and-remove** | Represents the container for the label and (optionally) the remove label button. |
    | **label** | Represents the main label for the multi-select input. |
    | **multiple-select-label-disabled** | Applied to the label when the component is disabled. |
    | **label-focus** | Applied to the label when the input is focused. |
    | **multiple-select-remove-label** | Represents the "remove" label or button for the component. |
    | **multiple-select-remove-label-disabled** | Applied to the remove label when disabled. |
    | **input-container** | Represents the container for the input field and chips. |
    | **input-container-disabled** | Applied to the input container when disabled. |
    | **chip-and-input-container** | Represents the container for the chips and the input field. |
    | **input-field** | Represents the actual input field for typing or selecting options. |
    | **input-text** | Represents the input text field part. |
    | **multiple-select-input-default** | Applied to the input when it has a value. |
    | **clear-and-icon-container** | Represents the container for the clear-all icon and dropdown toggle button. |
    | **Clear** | Represents the clear-all button or icon. |
    | **clear-all-icon** | Represents the visible clear-all icon part. |
    | **clear-all-icon-hidden** | Represents the hidden state for the clear-all icon. |
    | **list-item-content** | Represents the container for the content inside each list item. |
    | **checkmark** | Represents the checkmark icon for selected options. |
    | **checkmark-placeholder** | Represents the placeholder for the checkmark when not selected. |
    | **list-items** | Represents the text or content of each list item. |
    | **no-list-item** | Represents the list item shown when there are no options. |
    | **list-item-no-content** | Represents the content inside the "no options" list item. |
    | **helper-text** | Represents the helper text shown below the input. |
    | **CHIP_PARTS** | Exported to the dx-chip for styling its internal parts. |
    | **BUTTON_PARTS** | Exported to the dropdown toggle button for styling. |
    | **ICON_BUTTON_EXPORT_PARTS** | Exported to the clear-all icon button for styling. |
    | **LIST_PARTS.UNORDERED_LIST** | Exported to the list container for styling the dropdown list. |

- **dx-panel:** This customizable side panel web component, built with Lit, is designed for use in modern web applications. It provides a modal-like sliding panel that can be positioned on the left or right of the viewport. The panel supports a header with a title, an accessible ARIA label, a close button, and slots for custom content. It is ideal for displaying additional information, forms, or navigation without navigating away from the main view.

    | **Properties** | **type** | **Description** | **Default** |
    | -------------- | ---------| -----------------------------------------------------------------------|--------------|
    | **open** | Boolean | Controls the visibility of the panel. The panel is shown if this is set to `true`. | `false` |
    | **position** | String | Sets the panel's position. | `left` |
    | **headerTitle** | String | Specifies the title text displayed in the panel header. | '' |
    | **ariaLabel** | String | Specifies the ARIA label for accessibility and describes the panel for screen readers. | '' |

    The following CSS part attributes are responsible for determining the appropriate CSS for the `dx-panel` component and its elements based on the component's state and properties.

    | **Part** | **Description** |
    | -------------- | ---------|
    | **panel-container** | Represents the main container of the panel (the dialog surface). |
    | **panel-header** | Represents the header section of the panel, containing the title, center slot, and close button. |
    | **panel-title** | Represents the area within the header that displays the panel's title text. |
    | **panel-close-button** | Represents the close button in the header, allowing users to dismiss the panel. |
    | **panel-content** | Represents the main content area of the panel, where slotted content is rendered. |

- **dx-theme-inspector:** This web component visually inspects and displays the color palette and theme variables used in an application. It renders tables showing all available color shades, theme properties, and their values for both light and dark modes. It is useful for developers and designers to verify and document the color and theme configuration in a UI system.This component does not expose any properties to be set from outside. All configuration is internal and handled via state or theme utilities.

- **dx-table-pagination:** This web component provides a customizable and accessible pagination control for data tables. It allows users to navigate through large datasets by selecting the number of rows per page and moving between pages using navigation buttons. The component supports both left-to-right (LTR) and right-to-left (RTL) layouts, and emits events when the page or row size changes, enabling seamless integration with data-driven applications.

    | **Properties** | **type** | **Description** | **Default** |
    | -------------- | ---------| -----------------------------------------------------------------------|--------------|
    | **disabled** | Boolean | Disables the pagination controls when set to `true`. | `false` |
    | **currentPage** | Number | Specifies the current active page (1-based index). | `left` |
    | **totalCount** | Number | Specifies the total number of items in the dataset. | '' |
    | **rowSize** | Number | Specifies the number of rows to display per page. | `undefined` |
    | **options** | String\[] | Defines the selectable options for rows per page. | `['10', '25', '50', '100'] (from DEFAULT_ROWS_OPTIONS)` |

    The following CSS part attributes are responsible for determining the appropriate CSS for the `dx-table-pagination` component and its elements based on the component's state and properties.

    | **Part** | **Description** |
    | -------------- | ---------|
    | **container** | Represents the main container for the pagination component. |
    | **rows-section** | Represents the section containing the row size selector and row description. |
    | **rows-description** | Represents the span displaying the current rows description (for example, "1-10 of 100"). |
    | **pages-section** | Represents the section containing the page navigation controls. |
    | **pages-nav-button** | Applied to each navigation button (first, previous, next, or last page). |
    | **pages-description** | Represents the span displaying the current page and total pages (for example, "1 / 10"). |

- **dx-preview:** This web component provides a modal preview interface for digital assets such as images and videos. It supports navigation between multiple items, zoom controls for images, rendition selection, download and select actions, and error handling for unsupported file types. The component is highly configurable and emits custom events for integration with parent applications.

    | **Properties** | **type** | **Description** | **Default** |
    | -------------- | ---------| -----------------------------------------------------------------------|--------------|
    | **open** | Boolean | Controls whether the preview modal is open. | `false` |
    | **items** | PreviewItem\[] | Defines the array of items to preview. Each item contains `id`, `title`, `type`, `renditions`, and `fileExtension`. | `[]` |
    | **customHeaderTitle** | String | Specifies a custom title for the preview header. If not set, uses the current item's title. | null |
    | **component** | TemplateResult or String | Provides custom content to render instead of the default preview. | '' |
    | **isPreviousButtonDisabled** | Boolean | Indicates whether the previous navigation button is disabled. | `undefined` |
    | **isNextButtonDisabled** | Boolean | Indicates whether the next navigation button is disabled. | `undefined` |
    | **renditionLabel** | String | Specifies the label for the rendition select dropdown. | '' |
    | **selectButtonTitle** | String | Specifies the text for the select button. | '' |
    | **initialItemIndex** | Number | Specifies the index of the item to show initially. | `0` |

    The following CSS part attributes are responsible for determining the appropriate CSS for the `dx-preview` component and its elements based on the component's state and properties.

    | **Part** | **Description** |
    | -------------- | ---------|
    | **preview-backdrop** | Represents the backdrop overlay for the preview modal. |
    | **preview-container** | Represents the main container for the preview dialog. |
    | **preview-header** | Represents the header section of the preview dialog. |
    | **preview-header-start-actions** | Represents the container for the left-side header actions (for example, the back button). |
    | **preview-header-title** | Represents the element that displays the title of the current item or custom header. |
    | **preview-header-middle-actions** | Represents the middle section of the header, used for rendition selection (if applicable). |
    | **preview-header-rendition-label** | Represents the label for the rendition select dropdown. |
    | **preview-header-rendition-input-select** | Represents the rendition select dropdown itself. |
    | **preview-header-end-actions** | Represents the container for the right-side header actions (for example, download or select button). |
    | **preview-header-select-button** | Represents the "Select" button in the header. |
    | **preview-header-divider** | Represents the divider line below the header. |
    | **preview-item-container** | Represents the main area where the previewed item (image, video, or unsupported file type) is shown. |
    | **preview-item-previous-button-container** | Represents the container for the previous navigation button. |
    | **preview-item-previous-button** | Represents the previous navigation button itself. |
    | **preview-item-next-button-container** | Represents the container for the next navigation button. |
    | **preview-item-next-button** | Represents the next navigation button itself. |
    | **preview-item-content** | Represents the container for the main content (image, video, or unsupported message). |
    | **preview-item-image** | Represents the image element used for image previews. |
    | **preview-item-video-container** | Represents the container for video previews. |
    | **preview-item-video** | Represents the video element used for video previews. |
    | **preview-item-unsupported-container** | Represents the container for the unsupported file type message. |
    | **preview-item-unsupported-message-container** | Represents the container for the unsupported message text. |
    | **preview-item-unsupported-message-title** | Represents the title for the unsupported file type message. |
    | **preview-item-unsupported-message-description** | Represents the description for the unsupported file type message. |
    | **preview-zoom-container** | Represents the container for zoom controls (shown for images). |
    | **preview-zoom-controls** | Represents the zoom control button group. |
    | **ICON_BUTTON_EXPORT_PARTS** | Represents all button-related parts for icon buttons. |
    | **PREVIEW_NAV_BUTTONS_EXPORT_PARTS** | Represents the parts for navigation buttons. |
    | **PREVIEW_ZOOM_BUTTONS_EXPORT_PARTS** | Represents the parts for zoom in or zoom out buttons. |
    | **PREVIEW_ZOOM_PERCENT_BUTTON_EXPORT_PARTS** | Represents the parts for the zoom percentage button. |
    | **PREVIEW_RENDITION_SELECT_EXPORT_PARTS** | Represents the parts for the rendition select dropdown. |
    | **ITEM_TYPE_AVATAR_EXPORT_PARTS** | Represents the parts for the item type avatar. |
    | **TOOLTIP_EXPORT_PARTS** | Represents the parts for tooltips. |