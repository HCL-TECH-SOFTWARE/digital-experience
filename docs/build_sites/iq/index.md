# IQ

IQ is an AI-powered intelligent assistant integrated into HCL Digital Experience (DX) that provides real-time, context-aware assistance to help users accomplish tasks more efficiently. Built on the Model Context Protocol (MCP), IQ offers a conversational interface directly within the DX environment, enabling users to interact with AI capabilities seamlessly while managing content and sites.

## Overview

IQ provides the following functionalities:

- Access AI-powered assistance through an intuitive chat interface integrated into DX.
- Interact with IQ via a Panel view or Floating view (Popper), depending on the current DX page.
- Expand either the Panel view or Floating view (Popper) to a Dialog view for a more spacious experience.
- Ask questions and receive intelligent responses powered by AI models.
- Maintain conversational context within an active session.
- Experience a responsive UI that supports all DX locales, including LTR and RTL layouts.
- Benefit from real-time communication through WebSocket technology for instant responses.

## Key Features

### **Conversational AI Interface**
IQ provides a natural language interface where users can ask questions, request assistance, and receive intelligent responses. The chat interface supports markdown formatting, and structured responses.

### **Adaptive Access**
IQ is rendered in one of two modes depending on the current DX page:

**Panel view**: Clicking the sparkle icon in the Toolbar opens IQ as a Panel view from the right (LTR) or left (RTL).

**Floating view (Popper)**: A Floating Action Button (FAB) at the bottom-right (LTR) or bottom-left (RTL) opens a Floating view (Popper).

For detailed information about when each mode is available, refer to [Accessing IQ](./access.md).

From either view, the **Dialog view** button in the header expands IQ into a Dialog view for a more spacious experience.

### **Session Management**
IQ maintains conversational context within an active session. You can start a new conversation at any time using the **"Start a new conversation"** button in the header.

### **Real-Time Communication**
Built on WebSocket technology, IQ provides instant responses and supports streaming content for longer responses, ensuring a smooth and responsive user experience.

## Prerequisites

To use IQ, ensure the following prerequisites are met:

1. HCL Digital Experience (DX) version 236 or higher is installed and running.
2. IQ is installed and configured in your DX environment. For detailed instructions on the installation process, refer to [Installing IQ](./installation.md).
3. Appropriate user permissions are configured to access IQ functionality.
4. Network connectivity is available for WebSocket communication between the browser and the IQ backend service.

## Documentation Overview

Refer to the following pages for comprehensive information about IQ:

- **[Installing IQ](./installation.md)**  
  This section provides detailed instructions on installing, configuring, and deploying IQ in your DX environment.

- **[Accessing IQ](./access.md)**  
  This section explains the different methods to access IQ, including the toolbar sparkle icon and floating action button.

- **[Using IQ](./usage.md)**  
  This section provides a step-by-step guide on interacting with IQ, managing conversations, and leveraging its features effectively.

- **[Limitations of IQ](./limitations.md)**  
  This section highlights the current limitations and known issues of IQ.

- **[Troubleshooting IQ](./troubleshooting.md)**  
  This section provides guidance on resolving common issues and troubleshooting IQ connectivity or functionality problems.

## Getting Started

To get started with IQ:

1. Ensure all prerequisites are met, including DX version 236 or higher.
2. Follow the installation instructions in [Installing IQ](./installation.md) to deploy IQ in your environment.
3. Learn how to access IQ using the methods described in [Accessing IQ](./access.md).
4. Explore the features and capabilities outlined in [Using IQ](./usage.md).

For any issues or questions, refer to the [Troubleshooting](./troubleshooting.md) section or contact HCL Support.
