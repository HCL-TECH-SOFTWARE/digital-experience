# Accessing IQ

This section explains how to access the IQ AI assistant from within HCL Digital Experience (DX).

On DX pages, IQ is rendered in one of two modes depending on the available horizontal space: clicking the **Sparkle Icon** in the DX Toolbar opens IQ as a **Panel view**, while clicking the **Floating Action Button (FAB)** opens IQ in a **Floating view (Popper)**. Which button and mode are presented is determined automatically based on the space available on the current page.

From either the Panel view or Floating view (Popper), you can expand IQ to a **Dialog view** for a more spacious and interactive experience.

## Prerequisites

- HCL Digital Experience (DX) version 236 or higher must be installed and running.
- IQ must be installed and configured. For installation instructions, refer to [Installing IQ](./installation.md).
- You must be authenticated with appropriate credentials and permissions.

---

## Panel View

On DX pages with sufficient horizontal space, IQ is accessed via the **sparkle icon** in the DX Toolbar.

- In **LTR** locales, the sparkle icon is at the **top-right** of the Toolbar; the Panel view opens from the **right**.
- In **RTL** locales, the sparkle icon is at the **top-left**; the Panel view opens from the **left**.

### Steps

1. **Log in to HCL DX**, navigate to the Practitioner Dashboard, and click the **Sparkle Icon** in the Toolbar.

    The IQ Panel view slides in from the right (or left in RTL).

    ![IQ Side Panel Opens](../../assets/HCL_IQ_Side_Panel_Initial_View.png "IQ side panel opens")

2. **Begin Interacting**

    Type your question in the input field and press **Enter** or click **Send**.

    ![IQ Side Panel Ready](../../assets/HCL_IQ_Side_Panel_First_Question.png "IQ side panel ready for interaction")

---

## Floating View (Popper) via FAB

On DX pages where horizontal space is insufficient for the Panel view (for example, Site Templates pages), IQ provides a **Floating Action Button (FAB)** instead of the toolbar sparkle icon.

- In **LTR** locales, the FAB is at the **bottom-right** corner; the Floating view (Popper) opens on the **right**.
- In **RTL** locales, the FAB is at the **bottom-left** corner; the Floating view (Popper) opens on the **left**.

### Steps

1. **Locate the FAB**

    Look for the FAB button with the AI sparkle icon at the bottom-right corner of the page.

    ![IQ Floating Action Button](../../assets/HCL_IQ_FAB_IQ_ICON.png "FAB in the bottom-right corner")

2. **Click the FAB**

    The IQ Floating view (Popper) opens on the same side.

    ![IQ Floating View Opens](../../assets/HCL_IQ_Compact_Chat_Initial_View.png "IQ Floating view (Popper) opens")

3. **Interact with IQ**

    Type your question and press **Enter** or click **Send**.

    ![IQ Floating View Ready](../../assets/HCL_IQ_Compact_Chat_First_Question_View.png "IQ Floating view (Popper) ready for interaction")

---

## Expanding to Full Screen View

From either the Side Panel view or Floating IQ view, click the **Full Screen view** icon in the IQ header to expand IQ into a Full Screen view. Click **Floating IQ view** to return to the previous view.

![IQ Full View](../../assets/HCL_IQ_Expanded_Initial_View.png "IQ expanded to full view")

---

## Understanding the IQ Interface

Regardless of the view (Side Panel view, Floating IQ view, or Full Screen view), the IQ interface contains the following components:

![IQ Interface Overview](../../assets/HCL_IQ_Introduction_Interface.png "Introduction of IQ interface")

### Header

- **Title**: "IQ"
- **Start a new conversation Button**: Starts a fresh session — current context will be cleared permanently
- **Full Screen view / Floating IQ view Button**: Toggles between the Full Screen view and the current view
- **Close Button**: Closes IQ

### Chat Content Area

- **Message Bubbles**: Displays your questions and IQ's responses
- **IQ Response**: Rich formatting including headings, lists, code blocks, and links
- **Scroll Area**: Automatically scrolls to the latest message

### Input Area

- **Text Input Field**: Type your questions here
- **Send Button**: Send your message (or press Enter)
- **Stop Button**: Appears while IQ is processing; click to cancel

### Status Indicators

- **Loading Indicator ("Thinking...")**: Appears while IQ is processing
- **Error Messages**: Displays connectivity or processing errors

---

## Next Steps

Now that you know how to access IQ, learn how to use its features effectively:

- **[Using IQ](./usage.md)** — Interact with IQ, manage conversations, and leverage its capabilities
