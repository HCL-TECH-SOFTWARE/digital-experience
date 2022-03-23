# Custom drag sources and drop targets 

Drag sources and drop targets must be created according to the HTML 5 specification. In HTML 5, the DataTransfer object is used to exchange data from source to target.

The source sets the data with `dataTransfer.setData(format, data)` and the target reads the data with `dataTransfer.getData(format)`. HCL Portal always uses format `= "Text"`. The data is a stringified JSON object with the following structure:

```
{ "uri" : URI }
```

In the previous example, the `URI` is the URI of the object that is dragged. If more than one object is dragged, the structure looks like this example.

```
{ "uri" : [ URI\_1, URI\_2, ... ] }
```

Each URI can have a list of parameters. In this case, the JSON object has the following structure.

```
{ "uri" : [ { key_11 : value_11, key_12 : value_12, ... }, URI\_1, { key_21 : value_21, key_22 : value_22, ... }, URI\_2, ... ] }
```

In the previous example, key\_1x:value\_1x are the parameters of URI\_1 and key\_2x:value\_2x are the parameters of URI\_2.

The theme module i$.dnd provides two convenience functions that simplify the creation of HTML 5 drag sources and drop targets. To create a drag source, you can use the following code.

```
i$.dnd.addSource(parameter)
```

In the previous example, the parameter object needs to have the following elements:

-   **\{DOMNode\} parameter.node**

    The DOM node that acts as the drag source.

-   **\{String\} parameter.type**

    The type of data that is transferred, typically `"Text"`.

-   **\{Object\} parameter.data**

    The data to transfer when dropped. When you exchang data with a standard HCL Portal drop target, it must be a stringified JSON object with the structure described before.

-   **\{DOMNode\} parameter.avatar**

    The DOM node to use as the DnD avatar. \(optional\)

-   **\{Function\} parameter.dragstart**

    A function to start when dragstart is called. \(optional\) The following parameters are passed to this function:

    -   **\{Event\} e**

        The event. For example, you can use the event to set `e.dataTransfer.effectAllowed = "copy";`.

    -   **\{DOMNode\} n**

        The DomNode of the source area.

-   **\{Function\} parameter.dragend**

    A function to start when dragend is called. It has the same parameters as parameter.dragstart. \(optional\)


To create a drop target, you can use the following code.

```
i$.dnd.addTarget(parameter)
```

In the previous example, the parameter object must have the following elements:

-   **\{DOMNode\} parameter.node**

    The DOMnode acting as the drop target.

-   **\{String\} parameter.type**

    The type of data that is transferred, typically `"Text"`.

-   **\{Function\} parameter.drop**

    Function to handle the drop event. The following parameters are passed to this function:

    -   **\{Event\} e**

        The drop event.

    -   **\{DOMNode\} n**

        The DOM node of the drop target.

    -   **\{String\} type**

        The type of data that is transferred.

    -   **\{Object\} data**

        The data that was transferred from the drag source. When receiving data from standard HCL Portal drag sources, it is a stringified JSON object with the structure described before.

-   **\{Function\} parameter.dragenter**

    Function to start when dragenter is called. \(optional\) The following parameters are passed to this function:

    -   **\{Event\} e**

        The event.

    -   **\{DOMNode\} n**

        The DOM node of the drop target.

-   **\{Function\} parameter.dragleave**

    Function to start when dragend is called with the same parameters as dragenter. \(optional\)

-   **\{Function\} parameter.dragover**

    Function to start when dragover is called with the same parameters as dragenter. \(optional\)


**Parent topic:**[Drag-and-drop ](../dev-theme/themeopt_cust_dnd.md)

