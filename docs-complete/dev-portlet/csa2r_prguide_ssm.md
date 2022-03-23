# Programming model guidelines for server-side mode 

Learn which widgets you can use in server-side mode and how to adapt widgets for server-side mode.

## Widgets you can use in server-side mode

In general, all widgets programmed against the iWidget specification can be rendered in server side mode. However, a key difference to client side rendering is that full page refreshes happen frequently and not only if a user action triggers them explicitly. For example, each time a user triggers a portlet action, this results in a full page refresh that fetches the updated page from the server. This also means that the document object model \(DOM\) is regenerated as a result of a standard user interaction. Therefore, to write a widget that works in server side mode, apply the guidelines listed in the following:

-   State always needs to be stored using onNavState changed events and not by storing it in the dom. Otherwise it is gone after a page refresh.

Furthermore, some of the predefined events that the iWidget specification specifies behave slightly different when you use them in server side rendering mode:

-   `onRefreshNeeded`: This event is not sent after a page refresh.
-   `onSizeChanged`: This event is only sent if the skin used with it supports it.
-   `onNewWire`:
    -   This event can be sent by a client side user interface component for widgets on the same page.
    -   This event is not sent if the wire model of the page was changed externally.
    -   This event is not sent after a page refresh.
-   `onRemoveWire`:
    -   This event can be sent by a client side user interface component for widgets on the same page.
    -   This event is not sent if the wire model of the page was changed externally.
    -   This event is not sent after a page refresh.

## Options of interactions between widgets and portlets

-   **iWidgets cannot:**

    -   Send events to JSR168 or JSR286 portlets.
    -   Receive events from JSR168 or JSR286 portlets.
    -   Share render parameters with JSR286 portlets.
-   **iWidgets can:**

    -   Send events to and receive events from other iWidgets.
    -   Share render parameters with other iWidgets on the same page by using shared item sets.

**Parent topic:**[Client-side aggregation reference ](../dev-portlet/csa2r.md)

