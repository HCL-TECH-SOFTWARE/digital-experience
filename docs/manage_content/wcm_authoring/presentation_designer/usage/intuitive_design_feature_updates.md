# Feature updates for intuitive design and editing experience

Presentation Designer introduces multiple improvements to deliver a more intuitive design and editing experience. This topic summarizes the behavior and usage of the recent feature updates under epic DXQ-44699.

The updates include:

- Image selection from HCL Digital Asset Management (DAM)
- Enhanced color picker for styling
- Correct back-button navigation to the authoring page
- Stackable in-app notifications
- Responsive grid controls by device context

## Prerequisites

Before using these feature updates, ensure the following:

1. You can open and edit a presentation template in Presentation Designer.
2. You have access to required content and asset libraries.
3. The target environment is configured with the latest Presentation Designer updates.

## Select images from DAM

Presentation Designer now supports selecting images from DAM directly from image configuration.

### What changed

- The image source includes an HCL DAM option.
- DAM picker integration allows selecting an asset from the DAM dialog.
- Selected image metadata can populate image fields such as title and alternate text.
- Source switching behavior prevents stale DAM values from persisting when switching back to URL mode.

### How to use

1. Open a presentation template in Presentation Designer.
2. Select an image element.
3. In image configuration, change source to **HCL DAM**.
4. Select **Select image** and choose an asset from the DAM picker.
5. Confirm that image source and metadata are applied.

### Notes

- If DAM picker is unavailable in the environment, the DAM source option appears disabled.
- DAM-specific selected image label is shown only for DAM-compatible image URLs.

## Use the enhanced color picker

Presentation Designer includes a dedicated color picker in styling workflows.

### What changed

- A dedicated color picker is available in text color styling.
- Color editing supports HEX, RGB, and CSS modes.
- Alpha/opacity handling is supported within the picker workflow.

### How to use

1. Select an element that supports color styling (for example, text).
2. Open the style panel and go to text color.
3. Select a color from the picker or enter values in a supported format.
4. Adjust opacity if required.
5. Save and verify the rendered result.

### Notes

- Switching between color modes preserves the current selected color.
- Invalid inputs are validated and should not disrupt styling workflow.

## Back button returns to the correct authoring page

Back navigation has been improved so users return to the expected authoring context.

### What changed

- Authoring return URL handling is synchronized during app initialization.
- Return context is retained during editing transitions.
- Back action now prefers the stored authoring return URL and falls back to browser history when required.

### Expected behavior

- Selecting **Back to authoring** returns users to the correct source authoring page.
- Navigation remains consistent during typical editing and language-change workflows.

## Stackable notifications

Presentation Designer now supports stacked notifications instead of replacing active messages immediately.

### What changed

- Notifications are queued and rendered as multiple stacked messages.
- Notification lifecycle supports add, remove, and clear actions.
- Maximum simultaneous notification stack size is capped.

### Expected behavior

- Rapid operations can show multiple messages in order.
- The oldest message is removed when the queue exceeds the configured cap.

## Responsive grid controls by device context

Responsive grid controls are expanded to support per-device layout behavior.

### What changed

- Grid responsive layout controls can override rows and columns for active device context.
- Grid auto-flow settings are configurable by device context.
- Responsive overrides are applied through device-specific stylesheet media blocks.

### How to use

1. Select a grid element.
2. Open the style panel and locate responsive grid controls.
3. Switch to the target device view (for example Tablet or Mobile).
4. Set responsive rows, columns, and flow behavior.
5. Save and verify rendering in each device view.

### Notes

- Desktop structural grid sizing remains managed separately from responsive overrides.
- Validate responsive behavior after save and reload.

## Troubleshooting

| Issue | Possible cause | Recommended action |
| :--- | :--- | :--- |
| DAM source is disabled | DAM picker is unavailable or not loaded | Verify environment configuration and picker availability |
| Selected DAM image details do not appear | Selected asset metadata is missing or source URL is not DAM-compatible | Confirm selected asset data and URL pattern |
| Back navigation goes to an unexpected page | Source authoring return URL is missing or invalid | Reopen from authoring entry point and retry |
| Multiple notifications are not visible | Queue cap reached or notification timing overlap | Trigger actions again and verify queue behavior |
| Grid layout differs by device unexpectedly | Responsive overrides or fallback values conflict | Re-check per-device settings and save again |

## Related topics

- [Editing a presentation template in Presentation Designer](../usage/edit_presentation_template.md)
- [Styling options](../usage/styling_options.md)
- [Canvas settings](../usage/canvas_settings.md)
- [Handle multiple stylesheets](../usage/handle_multiple_stylesheets.md)
