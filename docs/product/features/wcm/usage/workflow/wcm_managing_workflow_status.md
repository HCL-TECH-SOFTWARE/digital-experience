# Item status

There are three major status levels that an item can be in at any one time; **Draft**, **Published**, or **Expired**. The current state of an item indicates where the item exists within a change management process, and where that item can be viewed and accessed.

## Status types

-   **Draft**

    This indicates that the item is being updated.

-   **Pending published**

    An item that uses a workflow can appear in a state of pending published. This indicates that the item has entered a workflow stage that includes a publish action but the action has yet to be processed.


-   **Published**

    A published status indicates that an item is ready to be rendered in the live site.


-   **Pending expired**

    An item that uses a workflow can appear in a state of pending expired. This indicates that the item has entered a workflow stage that includes an expire action but the action has yet to be processed.


-   **Expired**

    An expired status indicates that an item is ready to be expired from the live site.


## Changing status

The status of an item can change only in a linear fashion:

-   **Draft** to **Published**.
-   **Published** to **Expired**.
-   **Expired** to **Published**.
-   **Published** to **Draft**.

You cannot change an item's status from **Expired** to **Draft**.

## The process of publishing and expiring items

When the status of an item changes to published or expired, this change does not mean that the item has been added or removed from the rendered site. A status of published or expired means that the process of publishing or expiring an item has begun.

The actual time a published item appears on a website, or the time an expired item is removed from a website, also depends on:

-   how long it takes to syndicate updates to the delivery server
-   how long it takes for the current cache to expire

**Parent topic:**[Workflow and change management](../wcm/wcm_cms_change.md)

