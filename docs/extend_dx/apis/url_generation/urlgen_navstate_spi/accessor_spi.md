# Accessor SPI

The Accessor SPI provides typed access to the state document model. It allows the programmer to query and modify navigational state information. The Accessor SPI is part of the package com.ibm.portal.state.accessors.\*.

The Accessor SPI is an abstract layer that surrounds the access to particular nodes in the hierarchical document model. For more information about the hierarchical document model, see [Object Model](obj_model.md). For each state aspect such as, but not limited to, page selection, expansion states, and portlet states, the SPI offers an accessor factory. The accessor factory provides read-only and read-write accessor controls that are designed for the particular state aspect they refer to. The accessors read from or write to the respective positions in the state document model and does the required type conversions.

The navigational state information is in the state document model and is available when the accessor factory is used. After the node is located, the accessor factory passes a node reference to the accessor or accessor controller during. The accessor and accessor controller are independent from the state document model structure; you can reuse accessors even if the information is moved to another node in the state document.

The SelectionAccessorFactory offers the following interfaces, as shown in the example:

-   **SelectionAccessor getSelectionAccessor(StateHolder)**

    This method returns a SelectionAccessor interface that allows for reading page selection information from the StateHolder.

-   **SelectionAccessorController getSelectionAccessorController(StateHolderController)**

    This method returns a SelectionAccessorController interface that allows programmers to modify page selection information. The controller uses the StateHolderController interface to modify the navigational state accordingly.


The flyweight pattern, where the StateHolder or StateHolderController is used as an argument, is commonly used in the accessor factory interfaces. The navigational state the accessor operates on cannot be the base state that is retrieved from the request URL; typically, it is the state clone created for a particular EngineURL. Call getState\(\) on the EngineURL object to obtain the URL-specific state holder. The following example shows how to make a created EngineURL point to a certain portal page \(for example, the "Stock Market" page\) by using the SelectionAccessorController:

```
final EngineURL url = ...;
final SelectionAccessorFactory selectionFct = ...;

final SelectionAccessorController selectionCtrl = 
    selectionFct.getSelectionAccessorController(url.getState());

try {
    selectionCtrl.setSelection("wps.StockMarket");
} catch (StateException e) {
    // include error handling here
} finally {
    selectionCtrl.dispose();
}

```

## Using the SelectionAccessorController to create a page link

The base Accessor interface is derived from the com.ibm.portal.Disposable interface. Start the dispose() method to indicate when the accessor is no longer required. Using the dispose() method allows the accessor factory to store the accessors and accessor controllers in object pools to achieve better performance (due to less initialization and garbage collection overhead).

The Navigational State SPI offers the following accessor factories, each covering a certain state aspect:

-   **SelectionAccessorFactory**

    The SelectionAccessorFactory provides accessors to read and write portal page selection information. To create a URL that points to another page, the SelectionAccessorController needs to be requested from the factory to include the new selection into the state, the created EngineURL is associated with.

-   **PortletAccessorFactory**

    The PortletAccessorFactory provides accessors to read and write portlet-related navigational state information, which includes portlet mode, window state, and render parameters. In particular the PortletAccessorController can be used to change the navigational state of a portlet (for example, the portlet mode).

-   **PortletTargetAccessorFactory**

    The PortletTargetAccessorFactory provides accessors to read and write portlet action-related information. In particular the PortletAccessorController can be used to declare a portlet as the target of an action. This action allows the programmer to create URLs that trigger portlet actions.

-   **SoloAccessorFactory**

    The SoloAccessorFactory provides accessors to read and write the so-called Solo state. If the portal is in Solo state, it renders only one particular portlet of the current portal page; all navigation controls and toolbars are hidden. The SoloAccessorController can be used to create URLs that activate/deactivate the Solo state for a particular portlet.

-   **ThemeTemplateAccessorFactory**

    The ThemeTemplateAccessorFactory supports reading and writing theme template information. In particular the ThemeTemplateAccessorController can be used to create URLs that switch to a certain theme template.

-   **LocaleAccessorFactory**

    The LocaleAccessorFactory provides accessors to read and write locale information. The LocaleAccessorController can be used to set a special locale into the navigational state and thus into a URL.

    !!! note
        A locale that is retrieved from such a URL takes precedence over user preferred locales or locales that are defined on your browser.

-   **ExpansionStatesAccessorFactory**

    The ExpansionStatesAccessorFactory provides accessors to read and write expansion states information; for example, to determine whether a navigation node in a navigation tree control is expanded or collapsed. The ExpansionStatesAccessorController is typically used to generate URLs that toggle the expansion state of a navigation node.

-   **ShowToolsAccessorFactory**

    The ShowToolsAccessorFactory provides accessors to read and write tool-related information. The ShowToolsAccessorController is typically used to create a URL that blends in the tool icons for portlet windows that offer functions such as moving/deleting the respective portlet.

-   **StatePartitionAccessorFactory**

    The StatePartitionAccessorFactory provides accessors to read and write state partition identifiers. The StatePartitionAccessorController can be used to include a state partition identifier into the navigational state. A new state partition identifier is included into URLs that open new browser windows or iFrames.

-   **EngineActionAccessorFactory**

    The EngineActionAccessorFactory provides controllers that are used to create engine action URLs. The EngineActionAccessorController, in particular, allows you to set action parameters.

    !!! note
        The EngineActionAccessorFactory does not offer a read-only accessor because the portal manages the engine actions.



