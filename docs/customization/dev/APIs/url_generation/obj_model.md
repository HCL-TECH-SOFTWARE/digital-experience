# Object Model

Learn about the main object models used in the navigational state SPI.

## Navigational state

The Navigational state object model is a hierarchy of state information, which is modeled as a DOM-like document containing untyped state information represented as strings because a typical page contains many URLs that require the navigational state to be serialized multiple times per request. The string-based memory allows for efficiently serializing navigational states into URLs, because it avoids processing time and CPU consuming object to string conversions during the serialization process.

The Navigational state is modeled via the following interfaces:

-   com.ibm.portal.state.StateHolder
-   com.ibm.portal.state.StateHolderController
-   com.ibm.portal.state.dom.DocumentModel
-   com.ibm.portal.state.dom.DocumentController

The StateHolder interface provides read access to the navigational state information by exposing a getModel\(\) method that returns an interface to the untyped document model, namely the DocumentModel interface. The DocumentModel interface provides a set of methods to inspect both the hierarchical structure of the state document as well as single nodes being part of that document.

In addition, the StateHolder interface offers a newState\(\) method which can be used to create a clone of that particular StateHolder instance. This is an important method because, typically, the current navigational state has to be cloned before modifying it according to the specific semantics of the generated URL. For example if the programmer wants to create a URL that points to a particular portal page, the page selection information in the state document model has to be changed; however, this modification must not take effect on all URLs of a page.

Beyond that, the StateHolderController interface also allows you to modify state information by offering a getController\(\) method that delivers a controller interface to the untyped state document called DocumentController. The DocumentController interface provides a means to modify the hierarchical structure of the state document, which includes creating document nodes, inserting them into the node hierarchy, and removing nodes.

## Engine URLs

URLs are modeled via the com.ibm.portal.state.EngineURL interface. An EngineURL represents a URL that contains navigational state. The initial StateHolder an EngineURL refers to is specified when requesting a new EngineURL instance from the appropriate URL factory; see [URL generation services](url_gen_serv.md) for additional information. Typically it is a copy of the request-specific base state.

The EngineURL interface provides the following methods:

-   **StateHolderController getState\(\)**

    Returns a read-write interface to the navigational state carried by the URL.

-   **void setProtected\(Boolean flag\)**

    Specifies whether the URL should point to the public or protected area.

-   **void setSecure\(Boolean flag\)**

    Specifies whether a secure https connection is required.

-   **Writer writeCopy\(Writer out\)**

    Streams the URL to the given writer. Maintains the state of the URL. For example this method can be used to write the URL multiple times.

-   **Writer writeDispose\(Writer out\)**

    Streams the URL to the given writer and finally releases the state of the URL. The EngineURL object must not be accessed again after invoking this method.

-   **void dispose\(\)**

    The dispose\(\) method is inherited from the Disposable interface. It must be invoked to indicate that the EngineURL object is no longer needed. The EngineURL object must not be accessed again after invoking this method. Alternatively, you can invoke the writeDispose\(\) method, which calls dispose\(\).


The crucial method is the getState\(\) method, which returns the state holder object this particular EngineURL instance refers to.

**Note:** The method returns a controller interface \(StateHolderController\) that allows the programmer to modify the state of this EngineURL. See [Accessor SPI](accessor_spi.md) for additional information about modifying the state.

## Resource URLs

URLs that address generic resources such as, but not limited to, files, icons, and voice grammars cannot contain navigational states and are therefore modeled using a separate interface called com.ibm.portal.state.DisposableURL. The DisposableURL interface almost offers the same methods as EngineURL but does not provide a getState\(\) method.

Resource URLs can also be created using the URL generation Services that are offered along with the Navigational State SPI. See [URL generation services](url_gen_serv.md) for additional information.

**Parent topic:**[URL generation by using the Navigational State SPI](../dev/nav_state_spi.md)

