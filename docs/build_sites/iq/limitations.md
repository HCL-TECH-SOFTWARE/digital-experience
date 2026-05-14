# IQ Limitations

This page lists the known limitations of IQ in the initial release (compatible with HCL Digital Experience version 236).

---

## UI Limitations

### Conversation History
- Conversation history is **not persisted** in this release.
- Starting a new conversation or ending the session permanently clears the current context — it cannot be recovered.
- There is no ability to export or review previous conversations.

### Localization
- The IQ interface supports all DX locales, including both LTR and RTL layouts.
- **Translations are available in English only** in this release. All other locales show placeholder (untranslated) text in the UI.

### Interface Layout
- IQ adapts its presentation per page by setting page layout property: side panel on pages with enough horizontal space, compact view (via FAB) on pages without.

### Input and Output
- Text input only — rich text input editor, file attachments, images, and documents are not supported.
- Voice input and text-to-speech are not supported.

### User Preferences
- No per-user customization of the IQ interface (theme, font size, layout) is available.

### Accessibility
- Full keyboard navigation requires enabling it in your browser:
    - **Firefox**: Settings > General > Browsing > *"Always use the cursor keys to navigate within pages"*
    - **Safari**: Preferences > Advanced > *"Press Tab to highlight each item on a webpage"*

---

## Backend / Service Limitations

### AI Model Accuracy
- AI responses may contain inaccuracies. Always verify critical information with official HCL DX documentation.
- The AI model has a training data cutoff and may not reflect the most recent DX updates.

### Connectivity
- IQ requires a persistent WebSocket connection. Corporate firewalls or proxies that block WebSocket traffic will prevent IQ from functioning.
- No offline mode is available.

### Session and Concurrency
- One active session per user at a time.
- Using the same account across multiple browser tabs or devices simultaneously is not recommended and may cause session conflicts.

### MCP Tools
- MCP server integration is optional. If not configured, IQ will not have access to DX-specific tooling.
- MCP tool execution times out after the configured interval (default: 10 minutes).

### Deployment
- IQ is designed for container-based DX deployments (Kubernetes). It is not supported for traditional on-premises deployments.

---

## Reporting Issues

If you encounter issues not listed here:

1. Review the [Troubleshooting IQ](./troubleshooting.md) section.
2. Contact your DX administrator.
3. For persistent issues, contact HCL Support with browser type/version, steps to reproduce, error messages, and screenshots.

---

## Next Steps

- **[Troubleshooting IQ](./troubleshooting.md)** — Resolve common issues with IQ