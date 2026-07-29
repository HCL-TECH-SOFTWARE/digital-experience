# Atomic Components

Atomic Components (ACs) are reusable web components used across HCL Digital Experience (DX) products to provide a consistent user experience and design language.

Search V2 consumes these components, and this page serves as an entry point to the latest documentation and a list of components used within Search v2.

The AC library is maintained in the [enchanted-web-components](https://github.com/HCL-TECH-SOFTWARE/enchanted-web-components){target="_blank"} public repository.

## Components used in Search v2

The following ACs are used within Search v2. For detailed component APIs, properties, usage examples, component states, accessibility guidance, and interactive playgrounds, refer to the [Enchanted Web Components storybook](https://opensource.hcltechsw.com/enchanted-web-components/){target="_blank"}.

| Component | Description | Available CSS Parts |
| :-------- | :---------- | :------------------ |
| [`enchanted-button`](https://opensource.hcltechsw.com/enchanted-web-components/?path=/docs/input-enchanted-button--docs){target="_blank"} | Clickable button for actions | [`::part(button)`](https://opensource.hcltechsw.com/enchanted-web-components/?path=/docs/input-enchanted-button--docs#css-parts){target="_blank"} |
| [`enchanted-textfield`](https://opensource.hcltechsw.com/enchanted-web-components/?path=/docs/input-enchanted-textfield--docs){target="_blank"} | Text input field for user queries | [`::part(textfield)`](https://opensource.hcltechsw.com/enchanted-web-components/?path=/docs/input-enchanted-textfield--docs#css-parts){target="_blank"} |
| [`enchanted-select`](https://opensource.hcltechsw.com/enchanted-web-components/?path=/docs/input-enchanted-select--docs){target="_blank"} | Dropdown selection component | [`::part(select)`](https://opensource.hcltechsw.com/enchanted-web-components/?path=/docs/input-enchanted-select--docs#css-parts){target="_blank"} |
| `enchanted-link` | Hyperlink component | No part attributes|
| [`enchanted-list`](https://opensource.hcltechsw.com/enchanted-web-components/?path=/docs/data-display-enchanted-list--docs){target="_blank"} | List container component | [`::part(list)`](https://opensource.hcltechsw.com/enchanted-web-components/?path=/docs/data-display-enchanted-list--docs#css-parts){target="_blank"} |
| [`enchanted-list-item`](https://opensource.hcltechsw.com/enchanted-web-components/?path=/docs/data-display-enchanted-list--docs){target="_blank"} | Individual list item used within `enchanted-list` | [`::part(list-item)`](https://opensource.hcltechsw.com/enchanted-web-components/?path=/docs/data-display-enchanted-list--docs#css-parts){target="_blank"} |
| [`enchanted-svg-icon`](https://opensource.hcltechsw.com/enchanted-web-components/?path=/docs/icon-enchanted-svg-icon--docs){target="_blank"} | SVG icon display component | [`::part(svg-icon)`](https://opensource.hcltechsw.com/enchanted-web-components/?path=/docs/data-display-enchanted-list--docs#css-parts){target="_blank"} |
| [`enchanted-circular-progress`](https://opensource.hcltechsw.com/enchanted-web-components/?path=/docs/feedback-enchanted-circular-progress--docs){target="_blank"} | Circular loading indicator | [`::part(circular-progress)`](https://opensource.hcltechsw.com/enchanted-web-components/?path=/docs/feedback-enchanted-circular-progress--docs#css-parts){target="_blank"} |
| [`enchanted-chip`](https://opensource.hcltechsw.com/enchanted-web-components/?path=/docs/data-display-enchanted-chip--docs){target="_blank"} | Tag or filter element | [`::part(chip)`](https://opensource.hcltechsw.com/enchanted-web-components/?path=/docs/data-display-enchanted-chip--docs#css-parts){target="_blank"} |
| [`enchanted-toggle-button`](https://opensource.hcltechsw.com/enchanted-web-components/?path=/docs/input-enchanted-toggle-button--docs){target="_blank"} | Two-state toggle button | [`::part(toggle-button)`](https://opensource.hcltechsw.com/enchanted-web-components/?path=/docs/input-enchanted-toggle-button--docs#css-parts){target="_blank"} |
| [`enchanted-table-pagination`](https://opensource.hcltechsw.com/enchanted-web-components/?path=/docs/table-enchanted-table-pagination--docs){target="_blank"} | Pagination control for tabular data | [`::part(table-pagination)`](https://opensource.hcltechsw.com/enchanted-web-components/?path=/docs/table-enchanted-table-pagination--docs#css-parts){target="_blank"} |
| [`enchanted-header-layout`](https://opensource.hcltechsw.com/enchanted-web-components/?path=/docs/navigation-enchanted-header--docs){target="_blank"} | Header section layout container | [`::part(header-layout)`](https://opensource.hcltechsw.com/enchanted-web-components/?path=/docs/navigation-enchanted-header--docs#css-parts){target="_blank"} |
| `enchanted-ac-base-element` | Base class for AC | No part attributes |

<!--if enchanted-ac-base-element is an internal component, do we need to document it for a customer-facing doc?-->

???+ info "Related information"
    - [Enchanted Web Components storybook](https://opensource.hcltechsw.com/enchanted-web-components/){target="_blank"}
