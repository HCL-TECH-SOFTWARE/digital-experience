# Canvas Context Preview in Presentation Designer

The Canvas Context Preview feature in HCL Digital Experience (DX) Presentation Designer lets you preview how presentation templates render with Web Content Manager (WCM) content items. Visualizing templates with real data helps you verify layouts and data mapping across different device views before publishing. This feature allows you to:

- Preview template changes in real time as you map content elements and tags.
- Map content elements, property tags, directly to the template structure.
- Preserve custom styling and layouts while switching between different content contexts.
- Retain the selected content context across different device views and sessions.
- Automatically map content elements and property tags to the template.

## Working with Canvas Context Preview

The **Apply canvas context preview** button in the header toolbar opens the context preview.

![](../../../../assets/HCL_Presentation_Designer_Context_Preview_Initial_State.png)

In the **Canvas context** field that appears, you can search for content items and templates to preview.

![](../../../../assets/HCL_Presentation_Designer_Context_Search_PopupResult.png)

Selecting an item from the results automatically updates the canvas with the new context. As you type, the search results update automatically. Each result displays the item type and its full path so you can easily identify the correct content.

### Selecting a context

To select a context:

1. Open an existing **Presentation template** or create a new one.
2. Select the **Apply canvas context preview** icon.
3. In the **Canvas context** field, enter keywords from the title or name of the content item.
4. Select a content item from the results.
5. View the updated canvas to see the selected content and mapped tags.

!!!note
    The selected context persists across sessions.

The following example shows the canvas updated with the selected context and actual content values:

![](../../../../assets/HCL_Presentation_Designer_Context_Selected.png)

### Content mapping <!--Map content elements, property tags directly to the template structure. - are generic tags supposed to be described in this section too?-->

Canvas Context Preview automatically maps content elements, property tags: <!--"Canvas Context Preview automatically maps content elements, property tags"-->

#### Content elements

Content elements map to corresponding fields in your selected content item. After selecting a canvas context, content elements display different states based on the availability and values of the selected content item:

- **With Value:** Elements with corresponding content display the actual value from the selected content item.
- **Empty:** Elements that exist in the content item but have no value display an "[element-name] element [Empty]" placeholder.
- **Does Not Exist:** Elements that do not exist in the selected content item display an "[element-name] element does not exist" placeholder.

For example:

![](../../../../assets/HCL_Presentation_Designer_Context_Element_States.png) 

<!-- can we replace this image with another that shows the three states so we can omit the section underneath? I think the image is lacking the "With Value" element state (but correct me if I'm wrong): 

    For example: 

    ```
    Template has: Title (Text Element), Image (Image Element), Description (Text Element)
    Content has: Title="Welcome", Image=<image-url>, Description=""

    Result on Canvas:
    - Title: "Welcome" (actual value)
    - Image: <displays the image>
    - Description: "Description element [Empty]" (placeholder)
    ```
--->

#### Property tags

Property tags map to standard WCM content properties. The following property tags are supported:

| Property | Description |
| -------- | ----------- |
| `name` | Content item name |
| `title` | Content item title |
| `description` | Content item description |
| `lastModifiedDate` | Last modification timestamp |

For example:

```html
<!-- Property Tag in Template -->
<Element context="current" type="content" key="name" />

<!-- Renders on Canvas -->
Sample Article
```

## Styling and customization

Custom styles applied to context elements are preserved when you select or switch between different contexts. Your styles also remain intact across device view changes and persist after you save and reopen the template.

### Style limitations

Keep the following in mind when styling context elements:

- Styles apply to the element container, not individual content values
- Responsive styles may need adjustment per device view
- Some WCM content may include inline styles that override template styles

## Canvas Context Preview settings

### Device preview integration

Canvas context preview works with the device preview feature in Presentation Designer. When you select a context, it persists across desktop, tablet, and mobile views. Content values remain correctly mapped while the layout adjusts to the selected device view. Any device-specific responsive styles automatically apply to the active context.

### RTL and LTR support

Canvas context preview supports both right-to-left (RTL) and left-to-right (LTR) text directions. When you toggle the RTL switch in the header, content elements and layouts adjust accordingly while the selected context remains active.

This support includes:

- **RTL languages:** Such as Arabic and Hebrew.
- **LTR languages:** All other supported languages.

### Canvas dimensions and zoom

Canvas context preview remains active as you adjust the canvas dimensions and zoom levels. Whether you manually enter width and height, select a predefined size, or rotate the orientation, the selected context and mapped content values persist.

## Advanced features

### Context Validation

When you open Presentation Designer with a previously selected context, the system validates that the content item still exists, the user has permission to access the content, and the content has not been moved or deleted.

- If the content is successfully validated, the context is restored automatically and the canvas displays the selected content.
- If the content validation fails, a message indicates that the content was not found or access is restricted, the context is cleared, and the user can select a new context.

![](../../../../assets/HCL_Presentation_Designer_Context_Validation_Error.png) <!--we can cut this image to only show the error message, or remove it entirely-->

### State persistence

Canvas context preview saves settings in the local storage of your browser to maintain these settings across sessions.

![](../../../../assets/HCL_Presentation_Designer_Context_LocalStorage.png)

The system saves the content item ID, metadata, name, display title, path, and type. It also saves canvas dimensions, zoom levels, and the text direction mode (RTL or LTR).

- Settings are restored when you open a template, navigate from WCM, or refresh the browser.
- Settings are cleared when you select **Back to authoring**, select **Cancel**, or log out of HCL DX.

To retrieve settings for a specific template, use the following command in the browser console:

```javascript
// Format: presentationdesigner_canvas_settings_{template-id}
localStorage.getItem('presentationdesigner_canvas_settings_abc-123-def');
```

### Edit and View mode

Canvas Context Preview works in both **Edit** (default) and **View** modes.

- **Edit** mode gives you full access to styling and layout tools. You can move elements and modify element properties while context values are displayed.
- **View** mode provides a read-only view of the canvas. You cannot modify elements or styles. You can change contexts to review the appearance of the template with different content.

!!!note
    If you select **Apply canvas context preview** while there are unsaved changes, a prompt appears to **Save and preview**.

## User scenarios <!--overhauled use cases and troubleshooting sections-->

- **Designing with real content**

    Designers use canvas context preview to verify how layouts handle actual data. This identifies layout issues, such as text overflow or image scaling, early in the design process.

- **Multilingual support**

    Authors toggle between LTR and RTL modes to test language support. This confirms that the layout mirrors correctly for languages such as Arabic or Hebrew while the content remains active.

- **Responsive design validation**

    Designers switch between desktop, tablet, and mobile views to ensure the design functions across different screen sizes. This identifies mobile layout issues while using real content.

- **Content migration and permissions**

    Administrators use context validation to ensure templates remain functional after content migrations. The system identifies if a content item was moved, deleted, or if access is restricted.

## Troubleshooting

Refer to the following scenarios when troubleshooting context preview issues.

| Issue | Cause | Solution |
| :--- | :--- | :--- |
| **Element does not exist** | The content item lacks the specified element. | Verify the content structure or select a different item. |
| **Empty placeholder** | The element exists but has no value. | Add a value to the content item or use a different item. |
| **Validation failed** | Content was moved or deleted, or access is restricted. | Select a new content item or verify permissions. |
| **Styles not preserved** | Inline styles or CSS specificity conflicts. | Use more specific selectors and check for inline overrides. |

<!--

## Workflows and Use Cases

### Use Case 1: Template Design with Real Content

**Scenario:** A designer creates a new presentation template and wants to see how it looks with actual article content.

**Steps:**

1. Create a new presentation template
2. Add content elements (Title, Image, Body)
3. Apply basic styling
4. Click the Canvas Context Preview button
5. Search for a sample article
6. Select the article
7. Review how the design looks with real content
8. Adjust styling as needed
9. Test with multiple articles
10. Save the template

**Benefits:**

- Design with real content in mind
- Identify layout issues early
- Ensure content fits within design constraints

### Use Case 2: Multi-Language Content Preview

**Scenario:** A content author needs to verify a template works for both English and Arabic content.

**Steps:**

1. Open the presentation template
2. Select an English content item as context
3. Review the layout and styling
4. Switch to RTL mode using the toggle
5. Select an Arabic content item
6. Verify text direction and layout
7. Adjust styles if needed for RTL support
8. Save the template

**Benefits:**

- Verify internationalization support
- Ensure RTL layouts work correctly
- Test with real multilingual content

### Use Case 3: Responsive Design Validation

**Scenario:** A designer wants to ensure a template is responsive across devices.

**Steps:**

1. Open the template in Presentation Designer
2. Select a content item for preview
3. View in Desktop mode (default)
4. Review layout and content display
5. Switch to Tablet view
6. Verify responsive behavior
7. Switch to Mobile view
8. Check mobile layout
9. Adjust responsive styles as needed
10. Save the template

**Benefits:**

- Test responsive design with real content
- Identify mobile layout issues
- Ensure content is readable on all devices

### Use Case 4: Content Migration Review

**Scenario:** An administrator migrates content and needs to verify all templates still work correctly.

**Steps:**

1. Open each presentation template
2. Previous context is automatically validated
3. If validation fails, select a new content item
4. Verify content elements still map correctly
5. Check for any missing elements
6. Update template if needed
7. Save changes

**Benefits:**

- Quickly identify broken content mappings
- Verify content still exists after migration
- Ensure templates work with new content structure

---

## Error Handling and Troubleshooting

### Common Issues and Solutions

#### Issue 1: Element Shows "Does Not Exist" Placeholder

**Symptom:** Canvas displays `[element-name] element does not exist`.

**Cause:** Selected content item does not have the specified element.

**Solutions:**

1. Verify the content item structure in WCM
2. Check if the element exists in the content template
3. Select a different content item that has the element
4. Update the presentation template to use a different element key

#### Issue 2: Element Shows "Empty" Placeholder

**Symptom:** Canvas displays `[element-name] element [Empty]`.

**Cause:** Element exists but has no value in the selected content item.

**Solutions:**

1. Edit the content item in WCM and add a value
2. Select a different content item with values
3. Use this state to design empty state placeholders

#### Issue 3: Context Validation Failed

**Symptom:** Snackbar message: "The content was not found..."

**Possible Causes:**

- Content item was deleted
- Content item was moved
- User no longer has permission

**Solutions:**

1. Select a new content item for preview
2. Contact content owner if permission issue
3. Verify content still exists in WCM
4. Update template to use available content

#### Issue 4: Styles Not Preserved

**Symptom:** Custom styles disappear when switching contexts.

**Cause:** Typically caused by conflicting inline styles or CSS specificity issues.

**Solutions:**

1. Check if content has inline styles
2. Use more specific CSS selectors
3. Use `!important` sparingly for critical styles
4. Review override stylesheet settings
-->