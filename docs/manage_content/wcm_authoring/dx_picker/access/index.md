# Access for HCL DX Picker

This section provides steps on how to access the DX Picker in a custom web application.

!!! note
    You must have at least **User** access to use DX Picker. You also need to have access to the content source to display the items from the content source unless it has anonymous access. Refer to [Working with resource permissions](../../../../deployment/manage/security/people/authorization/controlling_access/working_with_resource_permission/index.md) for more information.

To use the DX Picker, you must have the DX Picker Web Component imported in your HTML page.

1.  Add the DX Picker script as one of the dependencies in your HTML page.

    !!! note
        The `src url` is now different from the previous version of DX Picker.

    ```html
      <html>
        <head>...</head>
        <body>
          // Import the dx-picker.js inside 
          <script src="https://<DX_HOSTNAME>/dx/ui/search/picker/dx-picker.js" type="module"></script>
        </body>
      </html>
    ```

2.  After adding the script, you can now use the `dx-picker` tag inside your HTML page.

    ```html
      <html>
        <head>...</head>
        <body>
          // Insert the tag inside your code
          <dx-picker></dx-picker>

          <script src="https://<DX_HOSTNAME>/dx/ui/search/picker/dx-picker.js" type="module"></script>
        </body>
      </html>
    ```

3.  Open DX Picker by calling `toggleDialog` function.

    You can assign an id to the `dx-picker` tag and add an onclick handler button that calls the `toggleDialog` function.
    
    ```html
      <html>
        <head>
          <script>
            function toggleDxPicker() {
                const dxPicker = document.getElementById('dx-picker-id')

                if (dxPicker) dxPicker.toggleDialog();
            }
          </script>
        </head>
        <body>
          // Add toggleDxPicker to the button
          <button onclick="toggleDxPicker()">Open Picker</button>

          // Insert the tag inside your code
          <dx-picker id="dx-picker-id"></dx-picker>

          <script src="https://<DX_HOSTNAME>/dx/ui/search/picker/dx-picker.js" type="module"></script>
        </body>
      </html>
    ```

4.  You can change the `content source` by adding `source` attribute to `dx-picer`.

    !!! note
        The list of content source available for DX Picker are **dam**, **wcm**, **jcr**, **portal** and **people**. Only one content source can be configured to DX Picker. If no source attribute is provided, **dam** is the default content source.
    
    ```html
      <html>
        <head>
          <script>
            function toggleDxPicker() {
                const dxPicker = document.getElementById('dx-picker-id')

                if (dxPicker) dxPicker.toggleDialog();
            }
          </script>
        </head>
        <body>
          // Add toggleDxPicker to the button
          <button onclick="toggleDxPicker()">Open Picker</button>

          // Insert the tag inside your code
          <dx-picker id="dx-picker-id" source='["dam"]'></dx-picker>

          <script src="https://<DX_HOSTNAME>/dx/ui/search/picker/dx-picker.js" type="module"></script>
        </body>
      </html>
    ```

### Picker Events

Interacting with the DX Picker triggers events which can be accessed by listening to the `message` event and inspecting the `data` object. 

```js
window.addEventListener('message', (event) => {
  const eventData = event.data;
  /*
   * event.data object will have the following structure:
   *
   * {
   *    type: <PICKER_EVENT>,
   *    detail: {
   *      <data included in the event>
   *    }
   *  }
   *
   */
})

```

The following are the current events available in the DX Picker:

- `HCL-DX-PICKER-SELECT` - Triggered when selecting an item.
- `HCL-DX-PICKER-PREVIEW-SELECT` - Triggered when selecting an item from Preview.

    These events contains the following object:
    !!! note
        This is the updated object that will be receive from DX Picker. The `documentObject` varies depending on the content source used. For more information about the `documentObject` parameter, see [Indexed documents](../../../../deployment/manage/container_configuration/configure_opensearch/architectural_overview.md#indexed-documents).
    ```json
    {
      "type": "HCL-DX-PICKER-SELECT" | "HCL-DX-PICKER-PREVIEW-SELECT",
      "detail": {
        "items":
          {
            "_index": string,
            "_id": string,
            "_score": number,
            "_source": {
              "created": string | number,
              "updated": string | number,
              "documentObject": Object,
              "type": string,
              "lastIndexed": number,
              "acls": string[],
              "firstIndexed": number,
              "tags": string[],
              "title": string,
              "description": string,
              "dataUri": string,
              "text": string,
              "link": string,
              "selectedRendition": {
                "renditionType": string,
                "binaryUrl": string,
                "thumbnailUrl": string,
                "fileSize": number,
                "metadata": {
                  "height": number,
                  "width": number,
                  "aspectRatio": number,
                  "alternateText": string,
                  "state": string,
                  "embeddedMetadata": {
                    "DPI": string
                  }
                }
              }
            }
          }
      }
    }
    ```

- `HCL-DX-PICKER-CLOSE` - Triggered when the Cancel button is clicked.

    This event contain the following object:

    ```json
    {
      "type": "HCL-DX-PICKER-CLOSE",
      "detail": {
        "close": boolean;
      }
    }
    ```
