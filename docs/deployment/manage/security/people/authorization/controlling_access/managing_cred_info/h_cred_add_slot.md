# Adding a vault slot

You can create a vault slot that is associated with a resource in the Credential Vault and a vault segment. You can also create a shared vault slot on a resource.

!!!note
    Do not create multiple shared vault slots on the same resource. Only one shared vault slot can exist for a resource. If a second slot is created, it overwrites the first slot.

1.  Select a vault from the menu. The selection list for resources reflects the resources that are defined for that vault.

2.  Type a **Name** for the vault slot. The name must be fewer than 255 characters and cannot include the pipe character (|).

3.  Select a vault segment from the menu to associate the segment with a resource.

4.  Select the **Vault slot is shared** check box if the resource is associated with information that provides secure access to more than one user. If you check this box, also enter the following fields:

    -   **Shared userid**
    -   **Shared password**
    -   **Confirm password**

5.  Select one of the following options to associate a vault slot with a resource:

    -   Select **existing** and then, select a vault resource from the menu.
    -   Select **new** and type a vault resource name. The name must be fewer than 64 characters and cannot include the pipe character (|).
    
6.  Type a vault slot **Description**. This description must be fewer than 64 characters.

    !!!note
        If you leave the description field blank and you create a locale-specific description, the locale-specific description defaults into this field. If a description is provided in this field, the locale-specific description does not populate this field.

7.  Select **Set locale-specific description** for more supported languages. Complete the following steps to set the language:

    1.  Select the **Locale**.

    2.  Click **Set selected locale description**.

    3.  Enter a **Description** for the locale. This description must be fewer than 64 characters.

    4.  Click **Done**.

8.  Click **Done**.

9.  Click **OK** to save the changes.


