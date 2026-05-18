# Troubleshooting IQ

This section provides guidance on resolving common issues you may encounter while using IQ. HCL DX log files and browser developer tools can be used to capture detailed diagnostic information.

---

## Quick Diagnostic Checklist

Before investigating specific issues, verify the following:

- You are logged in to HCL DX with appropriate credentials and permissions
- Your browser is up to date (Chrome, Firefox, Edge, or Safari — latest versions)
- JavaScript is enabled in your browser
- Network connectivity is stable
- WebSocket connections are not blocked by a firewall or proxy
- IQ is installed and enabled (check with your DX administrator if unsure)

---

## IQ Icon is Not Visible

The sparkle icon or FAB does not appear in the DX interface.

**Possible causes:**

- IQ is not installed or not enabled. Refer to [Installing IQ](./installation.md) and contact your DX administrator.
- Your user account does not have the required role. Contact your DX administrator to verify role assignments. IQ is primarily designed for the Practitioner persona, but any authorized DX user can access it.
- Browser cache is stale. Clear your browser cache and perform a hard refresh:
    - **Chrome / Firefox / Edge**: `Ctrl+Shift+R` (or `Cmd+Shift+R` on Mac)
    - **Safari**: `Cmd+Option+R`

---

## IQ Opens But Does Not Respond

IQ opens successfully but messages receive no response, or the "Thinking..." indicator runs indefinitely.

**Possible causes:**

- **WebSocket connection is blocked.** Open browser Developer Tools (F12), go to the **Network** tab, filter by **WS**, and look for a connection to `/dx/api/iq/v1/ws`. The status should be `101 Switching Protocols`. If the connection fails, check your corporate proxy or firewall settings and contact your IT team.
- **IQ backend service is unavailable.** Contact your DX administrator to verify the `dx-iq-integrator` service is running and reachable.
- **VPN or proxy interference.** Temporarily disable VPN and retry. If IQ responds, configure your VPN to allow WebSocket connections to the IQ endpoint.
- **Session expired.** Click the **Start a new conversation** button in the IQ header. If the issue persists, close and reopen IQ, or refresh the DX page.

---

## Error Messages

| Error | Meaning | Resolution |
|-------|---------|------------|
| Connection Error | WebSocket connection to IQ backend failed | Check network connectivity and browser console for errors; contact administrator |
| Unable to connect to AI service | IQ backend cannot reach the LLM provider | Wait and retry; contact administrator to check LLM provider credentials and connectivity |
| Request Timeout | The request took too long to process | Try a shorter or simpler question; contact administrator if timeouts are frequent |
| Unauthorized | Your account does not have access to IQ | Contact your DX administrator to check role assignments |

---

## Slow Response Times

If IQ is consistently slow to respond:

- Break complex questions into shorter, more specific ones.
- Check your network connection and try from a different network.
- Temporarily disable VPN to rule out latency introduced by the tunnel.
- Contact your DX administrator — high backend load may require scaling the IQ service.

---

## Messages Not Displaying Correctly

If responses appear garbled, lack formatting, or code blocks do not render:

- Ensure you are using a supported browser at its latest version.
- Test in incognito or private browsing mode to rule out browser extension interference (ad blockers, dark mode tools, privacy extensions).
- Clear your browser cache and hard refresh the page.

---

## Client-Side Tracing

You can capture detailed diagnostic information using browser developer tools to help investigate WebSocket and IQ interface issues.

1. Open browser Developer Tools by pressing **F12** or right-clicking the page and selecting **Inspect**.
2. Go to the **Console** tab and look for any errors (red) or warnings (yellow) related to IQ.
3. Go to the **Network** tab and filter by **WS** to inspect the WebSocket connection:
    - The connection to `/dx/api/iq/v1/ws` should show status `101`.
    - Click the connection to view individual JSON-RPC messages exchanged between the browser and IQ.
4. To capture a full trace, right-click in the Console and select **Save as** to export logs for sharing with HCL Support.

---

## Related Resources

- **[Installing IQ](./installation.md)** — Setup and deployment instructions
- **[Using IQ](./usage.md)** — How to use IQ effectively
- **[Limitations of IQ](./limitations.md)** — Known limitations in this release

For additional assistance, contact HCL Support.
