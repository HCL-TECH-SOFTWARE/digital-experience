# Accessing IQ

This section explains how to access the IQ AI assistant from within HCL Digital Experience (DX).

On DX pages, IQ is rendered in one of two modes: clicking the **Sparkle Icon** in the DX Toolbar opens IQ as a **Panel view**, while clicking the **Floating Action Button (FAB)** opens IQ in a **Compact view**. Which mode is displayed is determined automatically by a page layout parameter. On certain DX pages where rendering the Panel view would break or negatively impact the page layout (for example, non-responsive or non-adaptive applications), IQ will display as a Compact view via the FAB instead.

From either the Panel view or Compact view, you can expand IQ to a **Full view** for a more spacious and interactive experience.

## Prerequisites

- HCL Digital Experience (DX) version 236 or higher must be installed and running.
- IQ must be installed and configured. For installation instructions, refer to [Installing IQ](./installation.md).
- You must be authenticated with appropriate credentials and permissions.

---

## Panel View

On DX pages where the Panel view is compatible with the page layout, IQ is accessed via the **sparkle icon** in the DX Toolbar.

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

## Compact view via FAB

On DX pages where the Panel view would break or negatively affect the page layout (for example, Site Templates pages or non-responsive/non-adaptive applications), IQ provides a **Floating Action Button (FAB)** instead of the toolbar sparkle icon.

- In **LTR** locales, the FAB is at the **bottom-right** corner; the Compact view opens on the **right**.
- In **RTL** locales, the FAB is at the **bottom-left** corner; the Compact view opens on the **left**.

### Steps

1. **Locate the FAB**

    Look for the FAB button with the AI sparkle icon at the bottom-right corner of the page.

    ![IQ Floating Action Button](../../assets/HCL_IQ_FAB_IQ_ICON.png "FAB in the bottom-right corner")

2. **Click the FAB**

    The IQ Compact view opens on the same side.

    ![IQ Compact view Opens](../../assets/HCL_IQ_Compact_Chat_Initial_View.png "IQ Compact view opens")

3. **Interact with IQ**

    Type your question and press **Enter** or click **Send**.

    ![IQ Compact view Ready](../../assets/HCL_IQ_Compact_Chat_First_Question_View.png "IQ Compact view ready for interaction")

---

## Expanding to Full view

From either the Panel view or Compact view, click the **Full view** icon in the IQ header to expand IQ into a Full view. Click the collapse icon in the header to return to the previous view.

![IQ Full View](../../assets/HCL_IQ_Expanded_Initial_View.png "IQ expanded to full view")

---

## Understanding the IQ Interface

Regardless of the view (Panel view, Compact view, or Full view), the IQ interface contains the following components:

![IQ Interface Overview](../../assets/HCL_IQ_Introduction_Interface.png "Introduction of IQ interface")

### Header

- **Title**: "IQ"
- **Info Button**: Displays a tooltip with important information about the IQ, including a message that content is automatically generated and should be reviewed before use to avoid inclusion of personal or confidential information.
- **Start a new conversation Button**: Starts a fresh session — current context will be cleared permanently
- **Full view / Collapse Button**: Toggles between the Full view and the previous view (Panel view or Compact view)
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

- **Loading Indicator (Thinking...)**: Appears while IQ is processing
- **Processing Status**: May display different states depending on where the request is being processed (e.g., integrator processing, API calls, or MCP server operations)
- **Error Messages**: Displays various error conditions including:
    - **Connection Error**: WebSocket connection to IQ backend failed
    - **Unable to connect to AI service**: IQ backend cannot reach the LLM provider
    - **Request Timeout**: The request took too long to process
    - **Session expired**: Session has timed out and requires a new conversation
    - **Processing errors**: Other general errors during message processing
    
    For detailed error resolution steps, see [Troubleshooting IQ](./troubleshooting.md).

---

## Next Steps

Now that you know how to access IQ, learn how to use its features effectively:

- **[Using IQ](./usage.md)** — Interact with IQ, manage conversations, and leverage its capabilities
