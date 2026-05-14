# Using IQ

This section provides a comprehensive guide on how to use IQ, the AI-powered assistant for HCL Digital Experience (DX). Learn how to interact with IQ, manage conversations, and leverage its capabilities to accomplish tasks more efficiently.

## Prerequisites

- IQ must be installed and configured. For installation instructions, refer to [Installing IQ](./installation.md).
- You must be logged in to HCL DX with appropriate permissions.
- Basic familiarity with accessing IQ. Refer to [Accessing IQ](./access.md) for access methods.

---

## Getting Started with IQ

### Opening IQ for the First Time

1. **Open IQ**

    Navigate to your HCL DX platform and log in with your credentials.

    Depending on the current page, either click the **sparkle icon** in the Toolbar (side panel) or the **Floating Action Button (FAB)** at the bottom corner (compact view). DX automatically determines which is available based on the page layout. IQ opens with an empty chat interface, ready for your first interaction.

    ![IQ Side Panel Opens](../../assets/HCL_IQ_Side_Panel_Initial_View.png "IQ side panel opens")

---

## Basic Interactions

### Sending Your First Message

1. **Type Your Question or Request**

    Click in the input field at the bottom of the IQ interface and type your message. For example:

    ```
    Hello! Can you help me understand what you can do?
    ```

    Press **Enter** on your keyboard or click the **Send** button to send your message.

    ![IQ Side Panel Ready](../../assets/HCL_IQ_Side_Panel_First_Question.png "IQ side panel ready for interaction")

2. **View IQ's Response**

    IQ processes your request and displays the response in the chat area. Responses may include:

    - Plain text explanations
    - Formatted content (bold, italic, lists)
    - Code snippets with syntax highlighting
    - Links to relevant resources

    ![View Response](../../assets/HCL_IQ_First_Question_Response.png "IQ displays its response")

### Understanding Message States

Messages in IQ go through different states:

- **Sending**: Your message appears immediately after clicking Send
- **Processing**: A loading indicator shows IQ is working on your request
- **Delivered**: IQ's response appears in the chat area
- **Error**: If something goes wrong, an error message is displayed

![Message States](../../assets/HCL_IQ_Different_Message_State.png "Different message states in IQ")

---

## Working with Conversations

### Continuing a Conversation

IQ maintains context throughout your conversation session. You can ask follow-up questions without repeating context:

**Example Conversation Flow:**

1. **Initial Question**

    ```
    What is HCL Digital Experience?
    ```

2. **Follow-up Question** (IQ remembers the context)

    ```
    What are its main features?
    ```

3. **Another Follow-up** (context is maintained)

    ```
    How do I create a new page?
    ```

![Conversation Flow](../../assets/HCL_IQ_Maintain_Context_Across_Multiple_Messages.png "Maintain context across multiple messages")

### Starting a New Conversation

To start a fresh conversation and clear the current context:

1. **Locate the "Start a new conversation" button**

    Look for the **Start a new conversation** icon in the IQ header (available in both the side panel and compact view).

    ![Start a new conversation Button](../../assets/HCL_IQ_Start_New_Confirmation_Icon.png "Start a new conversation button location")

2. **Click the Button**

    A confirmation dialog appears warning you that the current context will be permanently cleared.

    ![New Conversation Confirmation Dialog](../../assets/HCL_IQ_Start_New_Chat_Confirmation_Dialog.png "Confirm starting a new conversation")

3. **Click Proceed**

    A new session begins with a fresh context.

    ![New Conversation Started](../../assets/HCL_IQ_New_Conversation_Start.png "New conversation started")

!!! warning
    Starting a new conversation clears the current session context permanently. Conversation history is **not** persisted in this release — once cleared, the previous conversation cannot be recovered.

### Stopping an Ongoing Request

While IQ is processing your request (indicated by the "Thinking..." loading indicator), you can cancel it by clicking the **Stop** button that appears in the input area. Once stopped:

- IQ halts the response generation.
- A message "You stopped the response." is displayed in the chat area.
- You can send a new message immediately.

![Stop Ongoing Request](../../assets/HCL_IQ_Stop_Ongoing_Request.png "Cancel ongoing request")

---

## Expanding IQ to Full View

From either the side panel or the compact view, you can expand IQ to a full expanded dialog view for better readability and more interactive space:

1. **Click the Full View Button**

    In the IQ header, click the **Full View** icon.

    ![Full View Button](../../assets/HCL_IQ_Full_View_Icon.png "Click Full View button")

2. **IQ Expands to Full View**

    IQ expands to cover the full viewport in a dialog view. Click the **Compact View** icon in the header to return to the side panel or compact view.

    ![Full View Mode](../../assets/HCL_IQ_Full_Dialog_View.png "IQ in full view mode")

---

## Closing IQ

- **Side Panel**: Can be closed by either of the following:
    - Click the **Close (X)** button in the header
    - Click the **Sparkle icon** in the toolbar

    ![Close Side Panel](../../assets/HCL_IQ_Close_Side_Panel_Icon.png "Close icon in Side Panel view")

- **Compact View**: Can be closed by either of the following:
    - Click the **Close (X)** button in the header
    - Click the **FAB sparkle icon**

    ![Close Compact View](../../assets/HCL_IQ_Close_Compact_View_Icon.png "Close icon in Compact view")

- **Full View**: Can be closed by:
    - Clicking the **Close (X)** button in the header

    ![Close Full View](../../assets/HCL_IQ_Close_Full_View_Icon.png "Close Full View interface")

---

## Notification Badge

If IQ receives a new message while the interface is closed, a notification badge appears on the sparkle icon or FAB.

![Notification Badge FAB Icon](../../assets/HCL_IQ_FAB_Icon_With_Badge.png "Notification badge on FAB indicates unseen messages")

![Notification Badge Sparkle Icon](../../assets/HCL_IQ_Sparkle_Icon_With_Badge.png "Notification badge on sparkle icon indicates unseen messages")

To view unseen messages:

1. Click the sparkle icon or FAB to open IQ.
2. IQ opens and scrolls to the new message.
3. The badge disappears once you have viewed the message.

---

## Handling Errors

If something goes wrong, IQ displays an error message in the chat area.

![Error Message](../../assets/HCL_IQ_With_Error_Message.png "Error message displayed in IQ")

---

## Next Steps

- **[Limitations](./limitations.md)** — Understand current limitations and constraints
- **[Troubleshooting](./troubleshooting.md)** — Get help resolving issues
