# Atomic Components

## Overview

Atomic Components (ACs) are reusable Web Components used across HCL Digital Experience products to provide a consistent user experience and design language.

The Atomic Components library is maintained as the public repository **enchanted-web-components**.
Search v2 consumes these components, and this page serves as an entry point to the latest documentation and a list of components used within Search v2.

 ## Resources

| **Resource** | **Description** | **Link** |
| ------------ | ------------ | --------------|
| **GitHub Repository** | Source code, installation instructions, and contribution guidelines | [enchanted-web-components](https://github.com/HCL-TECH-SOFTWARE/enchanted-web-components) |
| **Storybook** | Interactive component documentation, examples, APIs, and accessibility guidelines | [View Storybook](https://opensource.hcltechsw.com/enchanted-web-components/) |

---

## Components Used in Search v2

The following Atomic Components are used within Search v2. For detailed APIs, usage examples, and accessibility guidance, refer to Storybook.

| Component | Description | Stroybook |
| ----------| ------------| ----------|
| `enchanted-button` | Clickable button for actions | [View Storybook](https://opensource.hcltechsw.com/enchanted-web-components/?path=/story/input-enchanted-button--enchanted-button) |
| `enchanted-textfield ` | Text input field for user queries. | [View Storybook](https://opensource.hcltechsw.com/enchanted-web-components/?path=/story/input-enchanted-textfield--default) |
| `enchanted-select` | Dropdown selection component | [View Storybook](https://opensource.hcltechsw.com/enchanted-web-components/?path=/story/input-enchanted-select--default) |
| `enchanted-link` | Hyperlink component | No dedicated Storybook story |
| `enchanted-list` | List container component | [View Storybook](https://opensource.hcltechsw.com/enchanted-web-components/?path=/story/data-display-enchanted-list--default) |
| `enchanted-list-item ` | Individual list item used within enchanted-list.  | Documented with <br>enchanted-list |
| `enchanted-svg-icon` | SVG icon display component | [View Storybook](https://opensource.hcltechsw.com/enchanted-web-components/?path=/story/icon-enchanted-svg-icon--default) |
| `enchanted-circular-progress` | Circular loading indicator | [View Storybook](https://opensource.hcltechsw.com/enchanted-web-components/?path=/story/feedback-enchanted-circular-progress--default) |
| `enchanted-chip` | Tag or filter element | [View Storybook](https://opensource.hcltechsw.com/enchanted-web-components/?path=/story/data-display-enchanted-chip--enchanted-chip) |
| `enchanted-toggle-button` | Two-state toggle button | [View Storybook](https://opensource.hcltechsw.com/enchanted-web-components/?path=/story/input-enchanted-toggle-button--default) |
| `enchanted-table-pagination` | Pagination control for tabular data | [View Storybook](https://opensource.hcltechsw.com/enchanted-web-components/?path=/story/table-enchanted-table-pagination--default) |
| `enchanted-header-layout` | Header section layout container |Documented with enchanted-header <br> [View Storybook](https://opensource.hcltechsw.com/enchanted-web-components/?path=/story/navigation-enchanted-header--enchanted-header)  |
| `enchanted-ac-base-element` | Base class for Atomic Components | Internal component  |

---

## CSS Parts Reference

The following CSS Parts are exposed by the Atomic Components used in Search v2. These Parts are part of the public styling API and can be targeted using the CSS ::part() selector to customize the appearance of the components.

---

### enchanted-button
| **Part** | **Description**  |
|-----------|-------------|
| button | Represents the main button element. It is the default part for the button and is styled based on the button's state (such as disabled and focused) and variant (such as contained, outlined, or text). |
| button-disabled | Represents the button in a disabled state when the `disabled` property is set to `true`. |
| button-outlined | Represents the button with an outlined style when the `variant` property is set to `outlined`. |
| button-outlined-focused | Represents the `outlined` button in a focused state when the `focused` property is set to `true` and the `variant` property is set to `outlined`. |
| button-outlined-disabled | Represents the `outlined` button in a disabled state when the `disabled` property is set to `true` and the `variant` property is set to `outlined`. |
| button-start-icon | Represents the start icon of the button when the `starticon` property is set to `true`. |
| button-start-icon-with-padding | Represents the start icon of the button with padding when the button does not have text (`buttontext` is set to `""`) but has the `withPadding` property set to `true`. |
| button-end-icon | Represents the end icon of the button when the `endicon` property is set to `true`. |
| button-start-icon-no-margin | Represents the start icon of the button without margin when the button does not have text (`buttontext` is set to `""`) and the `withPadding` property is set to `false`. |
| button-start-icon-rtl-margin | Represents the start icon of the button with right-to-left (RTL) margin when the text direction is set to `RTL`. |
| button-text | Represents the text content of the button when the button has text (`buttontext` is not an empty string). |
| button-contained | Represents the button with a contained style when the `variant` property is set to `contained`. |
| button-contained-disabled | Represents the contained button in a disabled state when the `disabled` property is set to `true` and the `variant` property is set to `contained`. |
| button-contained-focused | Represents the contained button in a focused state when the `focused` property is set to `true` and the `variant` property is set to `contained`. |
| button-enchanted-text | Represents the button with an enchanted text style when the `variant` property is set to `text`. |
| button-enchanted-text-disabled | Represents the enchanted text button in a disabled state when the `disabled` property is set to `true` and the `variant` property is set to `text`. |
| button-enchanted-text-focused | Represents the enchanted text button in a focused state when the `focused` property is set to `true` and the `variant` property is set to `text`. |
| button-enchanted-outlined | Represents the button with an enchanted outlined style when the `variant` property is set to `outlined`. |
| button-enchanted-outlined-disabled | Represents the enchanted outlined button in a disabled state when the `disabled` property is set to `true` and the `variant` property is set to `outlined`. |
| button-enchanted-outlined-focused | Represents the enchanted outlined button in a focused state when the `focused` property is set to `true` and the `variant` property is set to `outlined`. | 

### enchanted-textfield
| **Part** | **Description** |
| --- | --- |
| label | Main field label styling hook. |
| div | Root wrapper that contains label, input/textarea, and optional action icons. |
| label-disabled | Label style when the textfield is disabled. |
| input | Base input/textarea styling hook. |
| input-disabled | Input/textarea style when disabled. |
| input-icon-clear | Input spacing when at least one trailing icon is present (LTR). |
| input-icon-clear-rtl | Input spacing when at least one trailing icon is present (RTL). |
| input-icon-both | Input spacing when both clear and action icons are present (LTR). |
| input-icon-both-rtl | Input spacing when both clear and action icons are present (RTL). |
| icon-clear | Clear icon button container (LTR). |
| icon-clear-rtl | Clear icon button container (RTL). |
| icon-clear-with-label | Clear icon vertical/alignment adjustment when a label is shown. |
| icon-clear-disabled | Clear icon state when textfield is disabled. |
| icon-action | Action/search icon button container (LTR). |
| icon-action-rtl | Action/search icon button container (RTL). |
| icon-action-with-label | Action icon vertical/alignment adjustment when a label is shown. |
| icon-action-disabled | Action icon state when textfield is disabled. |

### enchanted-select
| **Part** | **Description** |
| --- | --- |
| div | Root select wrapper containing label area, trigger button, and dropdown list. |
| div-label | Wrapper around label and optional remove label. |
| label | Main select label styling hook. |
| label-disabled | Label style when select is disabled. |
| remove-label | Optional removable-label action text. |
| remove-label-disabled | Remove-label style when disabled. |

### enchanted-link
| **Part** | **Description** |
| --- | --- |
| result-title | Link rendered as a result title link. |
| pagination-index-default | Pagination link in default state. |
| pagination-index-selected | Pagination link in selected/active state. |
| pagination-index-disabled | Pagination link in disabled state. |

### enchanted-list
| **Part** | **Description** |
| --- | --- |
| unordered-list | Internal container for list content. |

### enchanted-list-item
| **Part** | **Description** |
| --- | --- |
| list-item | Default list item row state. |
| list-item-selected | Selected list item row state. |
| menu-item | Menu role list item styling (used when role is menuitem). |

### enchanted-svg-ico
| **Part** | **Description** |
| --- | --- |
| None | This component does not set any `part` attributes directly. |

### enchanted-circular-progress
| **Part** | **Description** |
| --- | --- |
| circular-progress-root | Root wrapper for spinner and optional label. |
| circular-progress-spinner | Spinner size container around the SVG. |
| circular-progress-svg | SVG element containing track and progress circles. |
| circular-progress-track | Background track circle. |
| circle | Animated progress arc (default shrink animation enabled). |
| circle-disable-shrink | Progress arc when shrink animation is disabled. |
| circular-progress-label | Optional text label shown next to spinner. |

### enchanted-chip
| **Part** | **Description** |
| --- | --- |
| chip-div | Root chip container. |
| chip-div-disabled | Root chip disabled state styling. |
| chip-name | Chip name/label text. |
| chip-count | Chip count badge text (LTR). |
| chip-count-rtl | Chip count badge text (RTL). |

### enchanted-toggle-button
| **Part** | **Description** |
| --- | --- |
| toggle-button-div | Root wrapper for toggle button and optional badge/tooltip. |
| toggle-button-badge-wrapper | Wrapper around badge slot content. |
| toggle-single-button | Main clickable toggle button element. |
| toggle-button-small | Size variant for small icon button (`iconSize="16"`). |
| toggle-button-large | Size variant for large icon button (`iconSize="20"`). |
| toggle-button-with-padding | Extra padding variant when `padding` is enabled. |
| focus-ring | Focus ring span used for keyboard focus styling. |
| toggle-button-icon | Icon slot styling hook inside the button. |

### enchanted-table-pagination
| **Part** | **Description** |
| -- | --- |
| container | Root pagination layout container. |
| rows-section | Left section containing rows-per-page select and rows summary text. |
| rows-description | Text showing current row range and total count. |
| pages-section | Right section containing page controls and page selector. |
| pages-description | Text showing page index separator and total pages. |
| pages-nav-button | Part applied to each navigation button host (first/prev/next/last). |

### enchanted-header-layout
| **Part** | **Description** |
| --- | --- |
| main-header | Root header layout container for standard mode. |
| chat-main-header | Root header layout container for chat mode. |
| header-start-container | Wrapper for start slot area. |
| header-start | Inner start slot content container. |
| header-start-container-label | Wrapper for start-label slot area. |
| header-start-label | Inner start-label slot content container. |
| header-middle-container | Wrapper for middle slot area. |
| header-middle | Inner middle slot content container. |
| header-end-container | Wrapper for end slot area. |
| header-end | Inner end slot content container. |

### enchanted-ac-base-element
| **Part** | **Description** |
| --- | --- |
| None | Base class only. It does not render template markup or define part attributes. |

**Note**

Storybook is the primary source of documentation for Atomic Components. It contains component APIs, properties, usage examples, component states, accessibility guidance, and interactive playgrounds.
