# Troubleshooting IQ

This section provides guidance on resolving common issues you may encounter while using IQ. Follow the troubleshooting steps for your specific issue, and refer to the advanced diagnostics section for deeper investigation.

---

## Quick Diagnostic Checklist

Before diving into specific issues, verify these basics:

- [ ] You are logged in to HCL DX with appropriate credentials
- [ ] Your browser is supported (Chrome, Firefox, Edge, or Safari - latest versions)
- [ ] JavaScript is enabled in your browser
- [ ] Cookies and local storage are enabled
- [ ] Network connectivity is stable
- [ ] WebSocket connections are not blocked by firewall or proxy
- [ ] IQ backend service is running (check with administrator if unsure)

---

## Common Issues and Solutions

### Issue 1: Cannot See IQ Icon (Sparkle Icon or FAB)

**Symptoms:**
- The sparkle icon is not visible in the DX toolbar
- The floating action button (FAB) does not appear on any page
- IQ seems to be completely missing from the interface

**Possible Causes and Solutions:**

#### **Cause 1: IQ is Not Installed or Enabled**

**Solution:**
1. Contact your DX administrator to verify IQ is installed
2. Check that IQ is enabled in DX configuration
3. Refer to [Installing IQ](./installation.md) for installation instructions

#### **Cause 2: Insufficient Permissions**

**Solution:**
1. Verify your user account has the required role to access IQ
2. Default required role: `User` (configurable by administrator)
3. Contact your DX administrator to check role assignments

#### **Cause 3: Browser Cache Issues**

**Solution:**
1. Clear your browser cache and cookies
2. Perform a hard refresh:
   - **Chrome/Firefox/Edge**: Ctrl+Shift+R (Cmd+Shift+R on Mac)
   - **Safari**: Cmd+Option+R
3. Close and reopen your browser
4. Log in to DX again

#### **Cause 4: Browser Extensions Interference**

**Solution:**
1. Disable browser extensions temporarily (especially ad blockers, privacy tools)
2. Try accessing DX in incognito/private browsing mode
3. If IQ appears in incognito mode, identify and disable the interfering extension

**Verification:**
```javascript
// Open browser console (F12) and check:
console.log(document.querySelector('dx-iq-side-panel'));
console.log(document.querySelector('dx-chat-dialog'));
// Should return HTML elements if IQ is loaded
```

---

### Issue 2: IQ Opens But Won't Connect

**Symptoms:**
- IQ interface opens successfully
- "Connecting..." message persists indefinitely
- No responses to any messages
- Connection error displayed

**Possible Causes and Solutions:**

#### **Cause 1: WebSocket Connection Blocked**

**Solution:**

1. **Check Browser Console for Errors:**
   - Press F12 to open Developer Tools
   - Go to Console tab
   - Look for WebSocket connection errors

   ![Browser Console WebSocket Error](../../assets/Access_HCL_DX_95_on_premises_server.png)

2. **Verify WebSocket Support:**
   - Ensure your browser supports WebSockets (all modern browsers do)
   - Check if corporate proxy or firewall blocks WebSocket connections
   - Contact IT/network team to whitelist WebSocket connections to IQ endpoint

3. **Check Network Tab:**
   - Open Developer Tools (F12)
   - Go to Network tab
   - Filter by "WS" (WebSocket)
   - Look for connection to `/dx/api/iq/v1/ws`
   - Check status (should be 101 Switching Protocols)

   ![Network Tab WebSocket](../../assets/Access_HCL_DX_95_on_premises_server.png)

#### **Cause 2: Backend Service Unavailable**

**Solution:**
1. Contact your DX administrator
2. Administrator should check:
   ```bash
   # Check if IQ pods are running
   kubectl get pods -n <namespace> | grep iq
   
   # Check IQ service
   kubectl get svc -n <namespace> | grep iq
   
   # Check IQ logs
   kubectl logs -f deployment/dx-iq-integrator -n <namespace>
   ```

#### **Cause 3: VPN or Proxy Interference**

**Solution:**
1. Temporarily disable VPN and try again
2. Configure VPN to allow WebSocket connections
3. Add IQ endpoints to VPN split-tunneling exceptions
4. Try accessing from a different network

**Verification:**
```bash
# Test WebSocket connection (from terminal)
wscat -c ws://your-dx-instance.com/dx/api/iq/v1/ws

# Or use browser console:
const ws = new WebSocket('wss://your-dx-instance.com/dx/api/iq/v1/ws');
ws.onopen = () => console.log('Connected!');
ws.onerror = (err) => console.error('Error:', err);
```

---

### Issue 3: IQ Connects But No Responses

**Symptoms:**
- IQ opens and shows "Connected"
- You can type and send messages
- Messages appear in the chat but no responses from IQ
- Loading indicator appears but no response follows

**Possible Causes and Solutions:**

#### **Cause 1: LLM Provider Unavailable**

**Solution:**
1. Wait 30-60 seconds and try again (temporary service issues)
2. Contact administrator to verify:
   - AWS Bedrock credentials are valid (if using Bedrock)
   - LiteLLM service is running (if using LiteLLM)
   - Network connectivity to LLM provider
   - LLM provider quota/limits not exceeded

**Administrator Diagnostic:**
```bash
# Check IQ logs for LLM errors
kubectl logs -f deployment/dx-iq-integrator -n <namespace> | grep -i "llm\|bedrock\|litellm"

# Manual health check (if debug API enabled)
curl http://iq-service:3000/debug/llm/healthCheck
```

#### **Cause 2: Request Timeout**

**Solution:**
1. Try a simpler, shorter question
2. Wait for current request to timeout (60 seconds)
3. Start a new conversation
4. If issue persists, contact administrator

#### **Cause 3: Session Expired**

**Solution:**
1. Start a new conversation (click "New Conversation" button)
2. If that doesn't work, close and reopen IQ
3. As a last resort, refresh the browser page and reopen IQ

---

### Issue 4: Error Messages in IQ

Common error messages and their solutions:

#### **"Connection Error"**

**Meaning**: WebSocket connection to backend failed

**Solutions:**
- Check network connectivity
- Verify backend service is running
- Check firewall/proxy settings
- Try refreshing the page

#### **"Unable to connect to AI service"**

**Meaning**: IQ backend cannot reach the LLM provider (AWS Bedrock or LiteLLM)

**Solutions:**
- Wait a moment and try again
- Contact administrator to check LLM provider configuration
- Administrator should verify API credentials and network access

#### **"Request Timeout"**

**Meaning**: The request took longer than 60 seconds to process

**Solutions:**
- Try a simpler question
- Check network latency
- Contact administrator if timeouts are frequent

#### **"Session Expired"**

**Meaning**: Your conversation session is no longer valid

**Solutions:**
- Start a new conversation
- Close and reopen IQ
- Refresh the browser page

#### **"Unauthorized"**

**Meaning**: You don't have permission to access IQ

**Solutions:**
- Verify you're logged in to DX
- Contact administrator to check role assignments
- Ensure the required virtual resource is configured

---

### Issue 5: Slow Response Times

**Symptoms:**
- IQ takes a long time (10+ seconds) to respond
- Loading indicator appears for extended periods
- Responses eventually arrive but feel sluggish

**Possible Causes and Solutions:**

#### **Cause 1: Complex Questions**

**Solution:**
1. Break complex questions into smaller, simpler questions
2. Avoid very long messages (> 500 words)
3. Be specific and concise in your questions

**Example:**
- ❌ "Tell me everything about HCL DX, how to use it, all features, configuration, deployment, etc."
- ✅ "What are the main features of HCL DX?"

#### **Cause 2: Network Latency**

**Solution:**
1. Check your internet connection speed
2. Try from a different network
3. Disable VPN temporarily to test
4. Contact IT if latency is consistently high

#### **Cause 3: High Backend Load**

**Solution:**
1. Wait for off-peak hours and try again
2. Contact administrator to check backend resource usage
3. Administrator may need to scale IQ backend pods

**Administrator Diagnostic:**
```bash
# Check pod CPU/memory usage
kubectl top pods -n <namespace> | grep iq

# Check number of replicas
kubectl get deployment dx-iq-integrator -n <namespace>

# Scale up if needed
kubectl scale deployment dx-iq-integrator --replicas=4 -n <namespace>
```

#### **Cause 4: MCP Tool Execution**

**Solution:**
- If IQ is using MCP tools, responses may take longer
- This is expected behavior for tool-based interactions
- Administrator can check MCP tool execution timeouts

---

### Issue 6: Messages Not Displaying Correctly

**Symptoms:**
- Garbled text or strange characters
- Missing formatting (no bold, lists, etc.)
- Code blocks not displaying with syntax highlighting
- Broken links or images

**Possible Causes and Solutions:**

#### **Cause 1: Browser Compatibility**

**Solution:**
1. Ensure you're using a supported browser:
   - Chrome (latest)
   - Firefox (latest)
   - Edge (Chromium-based, latest)
   - Safari (latest)
2. Update your browser to the latest version
3. Try a different browser

#### **Cause 2: Browser Extensions**

**Solution:**
1. Disable browser extensions that modify page content:
   - Ad blockers
   - Privacy tools
   - Content modifiers
   - Dark mode extensions
2. Test in incognito/private browsing mode

#### **Cause 3: Corrupted Cache**

**Solution:**
1. Clear browser cache completely
2. Clear site-specific data for your DX instance
3. Hard refresh the page (Ctrl+Shift+R or Cmd+Shift+R)

---

### Issue 7: Cannot Close or Minimize IQ

**Symptoms:**
- Close (X) button doesn't work
- Cannot dismiss IQ interface
- Escape key doesn't close IQ
- Clicking outside doesn't close the panel/dialog

**Solutions:**

1. **Try All Close Methods:**
   - Click the close (X) button in header
   - Press Escape key
   - Click outside the panel/dialog overlay
   - Refresh the browser page (last resort)

2. **Check for JavaScript Errors:**
   - Open browser console (F12)
   - Look for JavaScript errors
   - Share errors with administrator or HCL Support

3. **Force Close via Page Refresh:**
   - Refresh the page (F5 or Ctrl+R)
   - IQ will close, and you can reopen it

---

### Issue 8: Lost Conversation History

**Symptoms:**
- Previous conversation messages disappeared
- Starting fresh each time you open IQ
- No conversation history available

**Possible Causes and Solutions:**

#### **Cause 1: Browser Cache Cleared**

**Solution:**
- Conversation history is stored in browser session storage
- Clearing cache/cookies removes history
- This is expected behavior; no recovery possible

#### **Cause 2: Different Browser or Device**

**Solution:**
- Conversation history is device/browser-specific
- Use the same browser and device to access previous conversations
- This limitation is documented in [Limitations](./limitations.md)

#### **Cause 3: Session Timeout**

**Solution:**
- Sessions may expire after extended inactivity
- Start a new conversation
- Stay active to maintain session

#### **Cause 4: Backend Restart**

**Solution:**
- If IQ backend pods restart, in-memory sessions are lost (unless database is configured)
- This is expected behavior
- Contact administrator if sessions are lost frequently

---

## Advanced Diagnostics

### Browser Console Debugging

Use browser developer tools for detailed diagnostics:

1. **Open Developer Tools:**
   - Press F12 or Right-click > Inspect

2. **Check Console Tab:**
   - Look for errors (red messages)
   - Look for warnings (yellow messages)
   - Note any IQ-related messages

3. **Check Network Tab:**
   - Filter by "WS" for WebSocket connections
   - Check WebSocket status (should be 101)
   - Look for failed requests (red)

4. **Check Application Tab (Storage):**
   - Go to Session Storage
   - Check for IQ-related keys
   - Verify data is being stored

**Common Console Errors:**

| Error Message | Meaning | Solution |
|---------------|---------|----------|
| `WebSocket connection failed` | Cannot connect to backend | Check network, firewall, backend status |
| `Failed to fetch` | HTTP request failed | Check backend service availability |
| `Unauthorized` | Authentication/authorization failed | Check DX login, role permissions |
| `Cannot read property of undefined` | JavaScript error | Clear cache, refresh page, report to support |

### Network Diagnostics

#### **Check WebSocket Connection:**

```javascript
// In browser console:
const ws = new WebSocket('wss://your-dx-instance.com/dx/api/iq/v1/ws');

ws.onopen = () => {
  console.log('✅ WebSocket connected!');
  ws.send(JSON.stringify({
    jsonrpc: '2.0',
    method: 'ping',
    id: 'test-1'
  }));
};

ws.onmessage = (event) => {
  console.log('📥 Received:', event.data);
};

ws.onerror = (error) => {
  console.error('❌ WebSocket error:', error);
};

ws.onclose = (event) => {
  console.log('🔌 WebSocket closed:', event.code, event.reason);
};
```

#### **Check Backend Health:**

```bash
# From terminal (if you have access to cluster):
kubectl port-forward svc/dx-iq-integrator 3000:3000 -n <namespace>

# Then check health endpoints:
curl http://localhost:3000/probe/ready
curl http://localhost:3000/probe/live

# Expected response: {"status":"ok"}
```

### Collecting Diagnostic Information

When reporting issues to HCL Support, collect this information:

1. **User Information:**
   - Username
   - User role assignments
   - DX instance URL

2. **Browser Information:**
   - Browser name and version
   - Operating system
   - Enabled extensions

3. **Error Details:**
   - Screenshot of the error
   - Browser console errors (screenshot or copy/paste)
   - Steps to reproduce the issue
   - Time the issue occurred (approximate)

4. **Network Information:**
   - Are you behind a corporate firewall/proxy?
   - Are you using a VPN?
   - Network tab screenshot showing WebSocket connection

**How to Export Console Logs:**
1. Open console (F12 > Console tab)
2. Right-click in console area
3. Select "Save as..." or "Copy all messages"
4. Share with support

---

## Administrator Troubleshooting

### Backend Service Issues

#### **Check Pod Status:**

```bash
# List IQ pods
kubectl get pods -n <namespace> | grep iq

# Describe pod for events
kubectl describe pod <iq-pod-name> -n <namespace>

# Check logs
kubectl logs -f <iq-pod-name> -n <namespace>

# Check previous logs (if pod restarted)
kubectl logs <iq-pod-name> -n <namespace> --previous
```

#### **Common Pod Issues:**

| Pod Status | Possible Cause | Solution |
|------------|----------------|----------|
| `Pending` | Insufficient resources | Check cluster resources, adjust requests/limits |
| `CrashLoopBackOff` | Configuration error, startup failure | Check logs for errors, verify configuration |
| `ImagePullBackOff` | Cannot pull container image | Check image registry, credentials |
| `Error` | Container exited with error | Check logs, verify environment variables |

#### **Check Service and Endpoints:**

```bash
# Check service
kubectl get svc dx-iq-integrator -n <namespace>

# Check endpoints
kubectl get endpoints dx-iq-integrator -n <namespace>

# Should show pod IPs
```

#### **Check Ingress/Route:**

```bash
# For ingress
kubectl get ingress -n <namespace> | grep iq

# For OpenShift routes
oc get routes -n <namespace> | grep iq

# Verify WebSocket upgrade support is enabled
```

### LLM Provider Issues

#### **AWS Bedrock:**

```bash
# Check credentials (from IQ pod)
kubectl exec -it <iq-pod-name> -n <namespace> -- env | grep AWS

# Test Bedrock connectivity (from pod)
kubectl exec -it <iq-pod-name> -n <namespace> -- bash
aws bedrock list-foundation-models --region us-east-1

# Check IAM permissions
```

#### **LiteLLM:**

```bash
# Check LiteLLM service
kubectl get svc litellm-service -n <namespace>

# Check LiteLLM pods
kubectl get pods -n <namespace> | grep litellm

# Test LiteLLM endpoint
curl http://litellm-service:4000/health
```

### MCP Server Issues

```bash
# List configured MCP servers
kubectl exec -it <iq-pod-name> -n <namespace> -- \
  env | grep MCP_SERVER_LIST

# Test MCP server connectivity
curl http://mcp-server:3001/health

# Check MCP server logs
kubectl logs -f <mcp-pod-name> -n <namespace>
```

### Configuration Verification

```bash
# Check all environment variables
kubectl exec -it <iq-pod-name> -n <namespace> -- env | sort

# Check mounted secrets
kubectl exec -it <iq-pod-name> -n <namespace> -- ls -la /etc/secrets

# Check configuration from Helm
helm get values dx-deployment -n <namespace>
```

---

## Performance Issues

### High Latency

**Symptoms**: Slow response times, requests taking 10+ seconds

**Diagnostics:**

```bash
# Check pod resource usage
kubectl top pods -n <namespace> | grep iq

# Check node resources
kubectl top nodes

# Check backend logs for slow requests
kubectl logs <iq-pod-name> -n <namespace> | grep -i "slow\|timeout\|latency"
```

**Solutions:**
1. Scale up IQ pods: `kubectl scale deployment dx-iq-integrator --replicas=4`
2. Increase resource limits in Helm values
3. Enable horizontal pod autoscaling
4. Check LLM provider performance

### Memory Leaks

**Symptoms**: IQ pods gradually consuming more memory, eventually getting OOMKilled

**Diagnostics:**

```bash
# Monitor memory over time
watch kubectl top pod <iq-pod-name> -n <namespace>

# Check for OOMKilled events
kubectl get events -n <namespace> | grep OOM
```

**Solutions:**
1. Increase memory limits
2. Restart pods regularly
3. Report to HCL Support for investigation
4. Check for memory leaks in logs

---

## Firewall and Network Rules

### Required Network Access

IQ requires the following network access:

#### **From User Browser:**
- HTTPS/HTTP to DX instance (port 443/80)
- WebSocket upgrade to `/dx/api/iq/v1/ws`

#### **From IQ Backend:**
- HTTP to DX Core service (port 9080 or 9443)
- HTTPS to LLM provider:
  - AWS Bedrock: `bedrock-runtime.{region}.amazonaws.com` (port 443)
  - LiteLLM: Configured URL (port 4000 or custom)
- HTTP to MCP servers (configured ports)

#### **Firewall Rules:**

```text
# Allow WebSocket connections
Allow TCP port 443 (HTTPS/WSS)
Protocol: WebSocket (Upgrade from HTTPS)

# Allow outbound to AWS Bedrock (if using)
Allow HTTPS to *.amazonaws.com on port 443

# Allow inbound to IQ service
Allow TCP port 3000 from DX Core pods
```

---

## Getting Additional Help

If you've tried all troubleshooting steps and the issue persists:

### 1. Check HCL DX Documentation
- [HCL DX Documentation Portal](https://opensource.hcltechsw.com/digital-experience/)
- [IQ Documentation](./index.md)

### 2. Contact Your Administrator
- Provide diagnostic information collected above
- Share console logs and screenshots
- Describe steps to reproduce the issue

### 3. Contact HCL Support

**Before Contacting Support:**
- Collect all diagnostic information (see "Collecting Diagnostic Information" above)
- Document steps to reproduce
- Note the time the issue occurred
- Try reproducing in a different environment if possible

**Information to Provide to HCL Support:**
- DX version
- IQ version
- Browser and OS information
- Complete error messages and logs
- Screenshots showing the issue
- Steps to reproduce
- Network configuration details (proxy, firewall, VPN)
- Recent changes to DX or IQ configuration

**HCL Support Portal:**
- Visit the HCL Support Portal
- Create a support case for "HCL Digital Experience"
- Attach diagnostic information
- Specify severity based on impact

---

## Frequently Asked Questions (FAQ)

### Q: Why does IQ sometimes respond slowly?

**A:** Response time depends on several factors:
- Question complexity
- AI model load (AWS Bedrock or LiteLLM)
- Network latency
- Backend resource availability
- MCP tool execution time (if applicable)

Complex questions naturally take longer. If slowness is persistent, contact your administrator.

### Q: Can I use IQ offline?

**A:** No, IQ requires an active internet connection to function. It needs to communicate with:
- DX backend
- IQ backend service
- LLM provider (cloud-based)

### Q: Why did my conversation disappear?

**A:** Conversations may disappear if:
- Browser cache/cookies were cleared
- Backend pods restarted (if no database configured)
- Session expired due to inactivity
- You accessed from a different browser/device

### Q: Can I recover deleted conversations?

**A:** No, once a conversation is cleared or lost, it cannot be recovered. IQ does not have a conversation recovery feature in this release.

### Q: Why can't I attach files to IQ?

**A:** File attachments are not supported in the current version of IQ. This is documented in [Limitations](./limitations.md).

### Q: Does IQ support multiple languages?

**A:** The IQ user interface is in English only. You can ask questions in other languages (depending on the AI model's capabilities), but UI elements remain in English.

---

## Related Resources

- **[Installation Guide](./installation.md)** - Setup and deployment instructions
- **[Usage Guide](./usage.md)** - How to use IQ effectively
- **[Limitations](./limitations.md)** - Known limitations and constraints

For additional assistance, contact HCL Support or refer to the HCL DX community forums.
