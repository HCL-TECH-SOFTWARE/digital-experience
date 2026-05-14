# Troubleshooting IQ

This section provides guidance on resolving common issues you may encounter while using IQ. Follow the troubleshooting steps for your specific issue, and refer to the advanced diagnostics section for deeper investigation.

---

## Quick Diagnostic Checklist

Before diving into specific issues, verify these basics:

- [ ] You are logged in to HCL DX with appropriate credentials
- [ ] Your browser is supported (Chrome, Firefox, Edge, or Safari - latest versions)
- [ ] JavaScript is enabled in your browser
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

---

### Issue 2: IQ Opens But Won't Connect

**Symptoms:**
- IQ interface opens successfully
- "Thinking ..." state persists indefinitely
- No responses to any messages
- Connection error displayed

**Possible Causes and Solutions:**

#### **Cause 1: WebSocket Connection Blocked**

**Solution:**

1. **Check Browser Console for Errors:**
   - Press F12 to open Developer Tools
   - Go to Console tab
   - Look for WebSocket connection errors

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
# Use browser console:
const ws = new WebSocket('wss://your-dx-instance.com/dx/api/iq/v1/ws');
ws.onopen = () => console.log('Connected!');
ws.onerror = (err) => console.error('Error:', err);
```

---

### Issue 3: IQ Connects But No Responses

**Symptoms:**
- IQ opens and no error message
- You can type and send messages
- Messages appear in the chat but no responses from IQ
- "Thinking ..." indicator appears but no response follows

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

---

## Related Resources

- **[Installation Guide](./installation.md)** - Setup and deployment instructions
- **[Usage Guide](./usage.md)** - How to use IQ effectively
- **[Limitations](./limitations.md)** - Known limitations and constraints

For additional assistance, contact HCL Support or refer to the HCL DX community forums.
