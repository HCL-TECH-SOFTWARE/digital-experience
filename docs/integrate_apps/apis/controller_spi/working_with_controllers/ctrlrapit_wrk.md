# Working with controllers

When you modify a portal resource with the Controller SPI, you go through a set of steps.

For example, these steps can be as follows:

1.  Obtain the appropriate controller.

2.  Obtain a modifiable instance of the resource that you want to modify from the controller.

3.  Apply your modifications as required to the modifiable instance Commit the controller to persist the modifications.

4.  Optionally repeat steps [2](ctrlrapit_wrk.md#ctrlrapit_wrk_2) and [3](ctrlrapit_wrk.md#ctrlrapit_wrk_3) as required.

5.  Commit the controller to persist the modifications.

    This step saves and applies the modifications to your portal.


**Note:** You can modify multiple resources with one controller before you commit the modifications.

For more detailed information about each of these steps refer to the following topics.

-   **[Obtaining a controller for working with resources](../dev/ctrlrapit_obtn_ctrlr.md)**  
To modify, create, or delete portal resources by using the Controller SPI, you first need to create a controller.
-   **[Committing and persisting your modifications](../dev/ctrlrapit_comit.md)**  
To persist the modifications that you applied to the controller, you commit the controller.


