# Access DX Picker
This section provides steps on how to access the DX Picker in a custom web application.

## Prerequisite

DX Picker should be installed and configured in HCL Digital Experience 9.5 release update CF214 or higher. For instructions on installing DX Picker on supported environments, see the [DX Picker Installation](../installation/index.md) topic.

!!! important
    To prevent CORS issue and be able to access DX Picker in a custom web application, it is required to add the host of the custom web application in the list of origins of the RingAPI service.
    ```
        ringApi:
        # CORS Origin configuration for Ring API, array of elements
        corsOrigin: []
    ```


## Accessing DX Picker

!!! note
    You must have **User** access to use DX Picker.

In order to use the DX Picker, you need to have the DX Picker Web Component imported in your HTML page.

1.  Add the DX Picker script as one of the dependencies in your HTML page.

    ```html
      <html>
        <head>...</head>
        <body>
          // Import the dx-picker.js inside 
          <script src="https://<DX_HOSTNAME>/dx/ui/picker/dx-picker.js"></script>
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

          <script src="https://<DX_HOSTNAME>/dx/ui/picker/dx-picker.js"></script>
        </body>
      </html>
    ```

3.  Open DX Picker by setting the `open` attribute of the picker to true.

    One of the ways you can achieve this is assigning an id to the `dx-picker` tag and adding an onclick handler    a button that sets the `open` attribute to true
    ```html
      <html>
        <head>
          function toggleDxPicker() {
            const dxPicker = document.getElementById('dx-picker-id')

            if (dxPicker) {
              const isOpen = dxPicker.getAttribute('open') === String(true);

              dxPicker.setAttribute('open', !isOpen)
            }
          }
        </head>
        <body>
          // Add toggleDxPicker to the button
          <button onclick="toggleDxPicker()">Open Picker</button>

          // Insert the tag inside your code
          <dx-picker id="dx-picker-id"></dx-picker>

          <script src="https://<DX_HOSTNAME>/dx/ui/picker/dx-picker.js"></script>
        </body>
      </html>
    ```

### Picker Events

Interacting with the DX Picker will trigger events which can be access through by listening on the `message` event. The following are the current events available in the DX Picker.

- `HCL-DX-PICKER-SELECT` - Will be triggered when selecting an item.

    This event will contain the following object

    ```json
    {
      source: 'dam',
      items: [
        {
          "id": string,
          "name": string,
          "size": string,
          "path": string,
          "thumbnail": string,
          "assertType": string,
          "mediaType": string
        }
      ]
    }
    ```
- `HCL-DX-PICKER-CLOSE` - Will be triggered when the Cancel button is clicked.

    This event will contain the following object

    ```json
    {
      "close": boolean;
    }
    ```
