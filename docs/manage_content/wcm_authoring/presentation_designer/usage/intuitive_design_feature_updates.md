# Feature updates for intuitive design and editing experience

Presentation Designer introduces several improvements to provide a more intuitive design and editing experience. This topic summarizes the behavior and usage of the latest feature updates under epic DXQ-44699.

The updates include:

- Image selection from HCL Digital Asset Management (DAM)
- Correct back-button navigation to the authoring page
- Stackable in-app notifications
- Responsive grid controls by device context

## Prerequisites

Before using these feature updates, ensure the following:

1. You can open and edit a presentation template in Presentation Designer.
2. You have access to required content and asset libraries.
3. The target environment is configured with the latest Presentation Designer updates.

## Select images from DAM

Presentation Designer now supports selecting images from DAM directly in image configuration.

### What changed

- The image source includes an HCL DAM option.
- DAM picker integration allows selecting an asset from the DAM dialog.
- Selected image metadata can populate image fields such as title and alternate text.
- Source switching prevents stale DAM values from persisting when switching back to URL mode.

+ [ADD IMAGE HERE]

### How to use

1. Open a presentation template in Presentation Designer.
2. In the sidebar, under **Static Elements**, drag and drop the **Image** element onto the canvas.
3. Select the image element to display its configuration options.
4. Click the **Configure** icon (third icon) to open the image configuration dialog.
5. In **Asset source**, select **HCL DAM**. This opens the DAM picker dialog.
6. Select the collection that contains the image you want to use.
7. Click **Select image**, then choose an asset in the DAM picker.
8. Verify that the selected DAM image name appears under **Asset source**.

### Notes

- If DAM picker is unavailable in the environment, the DAM source option appears disabled.
- DAM-specific selected image label is shown only for DAM-compatible image URLs.

## Back button returns to the correct authoring page

Back navigation has been improved so users return to the expected authoring context.

### What changed

- Authoring return URL handling is synchronized during app initialization.
- Return context is retained during editing transitions.
- The back action now prioritizes the stored authoring return URL and falls back to browser history when needed.

+ [ADD IMAGE HERE]

### Expected behavior

- Selecting **Back to authoring** returns users to the correct source authoring page.
- Navigation remains consistent during typical editing and language-change workflows.

## Stackable notifications

Presentation Designer now supports stacked notifications instead of immediately replacing active messages. This allows multiple snackbars to appear in order, instead of showing only the latest message.

### What changed

- Notifications are queued and rendered as multiple stacked messages.
- Notification lifecycle supports add, remove, and clear actions.
- The maximum simultaneous notification stack size is capped.

+ [ADD IMAGE HERE]

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

1. Open a presentation template in Presentation Designer.
2. In the sidebar, under **Static Elements**, drag and drop the **Grid** element onto the canvas.
3. Click the grid and open the style panel.
4. Add rows and columns to the grid (for example, 6 rows and 6 columns), then set the height to 600px for easier visualization.
5. In Desktop view, the area layout is based on the rows and columns you define. This layout is used as the baseline for other device views.
6. Switch to the target device view (for example, Tablet).
7. In that device view, use **Area layout** to override rows and columns without affecting Desktop. The area layout is computed automatically based on your device-specific row and column settings.
8. Optionally, enable **Auto-flow** and set it to **row** or **column** so grid items are placed automatically for the selected device view.

### Notes

- Desktop structural grid sizing remains managed separately from responsive overrides.
- Validate responsive behavior after saving and reloading.

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
