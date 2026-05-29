# Limitations

Be aware of the following limitations when deploying and using the IQ backend services:

## Service Scope

- IQ backend server is designed specifically for WebSocket-based AI integration and session management
- The service manages only conversation state and AI communication orchestration
- It does not replace or modify existing DX Core functionality

## AI Model Limitations

- **Training Data Cutoff:** The AI model is strictly limited by its training data cutoff date regarding existing HCL DX architecture
- The model's knowledge of HCL DX features, APIs, and configuration is based on documentation available at the time of its training
- For information about features released after the model's training date, users should consult the official HCL DX documentation
- The model may not be aware of recent changes, new features, or updated best practices

## Database Requirements

- PostgreSQL database is required for session persistence
- Database can be either RTC-managed or externally hosted
- Database name for Runtime Controller (RTC)-managed deployments is fixed as `iqdb` and cannot be customized

## MCP Server Integration

- MCP servers must be accessible from the IQ backend pods
- At least one of WCM or DAM integration should be enabled for MCP functionality
- MCP standalone mode is configurable but may affect integration capabilities