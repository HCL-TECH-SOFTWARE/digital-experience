/// Mini Chat JavaScript
// API URL for backend communication
const API_URL = 'https://ds-docquest.hcl-software.com/dx';


// Generate a random session ID for the chat
let sessionId = `session_${Date.now()}_${Math.random().toString(36).substring(2, 9)}`;


// Track consent status
let consentGiven = false;

// Idle timeout configuration (30 minutes in milliseconds)
const IDLE_TIMEOUT = 30 * 60 * 1000; // 30 minutes


// Storage keys for persistence
const STORAGE_KEYS = {
  SESSION_ID: 'miniChat_sessionId',
  CONSENT_GIVEN: 'miniChat_consentGiven',
  CHAT_HISTORY: 'miniChat_history',
  LAST_QUESTION: 'miniChat_lastQuestion',
  LAST_ACTIVITY: 'miniChat_lastActivity'
};

// Load persisted data from localStorage
function loadPersistedData() {
  try {
    // Check if session has expired (30 minutes of inactivity)
    const lastActivity = localStorage.getItem(STORAGE_KEYS.LAST_ACTIVITY);
    const now = Date.now();
   
    if (lastActivity) {
      const timeSinceLastActivity = now - parseInt(lastActivity, 10);
     
      if (timeSinceLastActivity > IDLE_TIMEOUT) {
        // Session expired - clear consent and session data
        console.log('Session expired due to inactivity');
        clearSessionData();
        return; // Don't load persisted data
      }
    }
   
    // Load session ID or create new one if doesn't exist
    const savedSessionId = localStorage.getItem(STORAGE_KEYS.SESSION_ID);
    if (savedSessionId) {
      sessionId = savedSessionId;
    } else {
      localStorage.setItem(STORAGE_KEYS.SESSION_ID, sessionId);
    }
   
    // Load consent status
    const savedConsent = localStorage.getItem(STORAGE_KEYS.CONSENT_GIVEN);
    if (savedConsent === 'true') {
      consentGiven = true;
    }
   
    // Update last activity timestamp
    updateActivityTimestamp();
  } catch (error) {
    console.error('Error loading persisted data:', error);
  }
}


// Save chat history to localStorage
function saveChatHistory() {
  try {
    const messagesContainer = document.getElementById('mini-chat-messages');
    if (!messagesContainer) return;
   
    const messages = [];
    const messageElements = messagesContainer.querySelectorAll('.mini-chat-message');
   
    messageElements.forEach((msgElement) => {
      const isAI = msgElement.classList.contains('ai');
      const isUser = msgElement.classList.contains('user');
     
      if (isUser) {
        messages.push({
          type: 'user',
          content: msgElement.textContent
        });
      } else if (isAI) {
        const messageTextDiv = msgElement.querySelector('.message-text');
        if (messageTextDiv) {
          messages.push({
            type: 'ai',
            content: messageTextDiv.innerHTML
          });
        }
      }
    });
   
    localStorage.setItem(STORAGE_KEYS.CHAT_HISTORY, JSON.stringify(messages));
  } catch (error) {
    console.error('Error saving chat history:', error);
  }
}


// Load chat history from localStorage
function loadChatHistory() {
  try {
    const savedHistory = localStorage.getItem(STORAGE_KEYS.CHAT_HISTORY);
    if (!savedHistory) return;
   
    const messages = JSON.parse(savedHistory);
    const messagesContainer = document.getElementById('mini-chat-messages');
    if (!messagesContainer) return;
   
    // Clear existing welcome message
    messagesContainer.innerHTML = '';
   
    // Restore all messages
    messages.forEach((msg) => {
      if (msg.type === 'user') {
        const messageElement = document.createElement('div');
        messageElement.className = 'mini-chat-message user';
        messageElement.textContent = msg.content;
        messagesContainer.appendChild(messageElement);
      } else if (msg.type === 'ai') {
        const messageElement = document.createElement('div');
        messageElement.className = 'mini-chat-message ai';
       
        const messageTextDiv = document.createElement('div');
        messageTextDiv.className = 'message-text';
        messageTextDiv.innerHTML = msg.content;
       
        messageElement.appendChild(messageTextDiv);
       
        // Re-apply link attributes
        const links = messageTextDiv.querySelectorAll('a');
        links.forEach(link => {
          link.setAttribute('target', '_blank');
          link.setAttribute('rel', 'noopener noreferrer');
        });
        
        // Re-apply image click handlers
        const images = messageTextDiv.querySelectorAll('img');
        images.forEach(img => {
          img.addEventListener('click', function() {
            openImageModal(img.src, img.alt || 'Image');
          });
        });
       
        messagesContainer.appendChild(messageElement);
      }
    });
   
    // If no messages were loaded, show welcome message
    if (messages.length === 0) {
      addWelcomeMessage();
    }
  } catch (error) {
    console.error('Error loading chat history:', error);
    addWelcomeMessage();
  }
}


// Add welcome message
function addWelcomeMessage() {
  const messagesContainer = document.getElementById('mini-chat-messages');
  if (!messagesContainer) return;
 
  const welcomeMessage = document.createElement('div');
  welcomeMessage.className = 'mini-chat-message ai';
  const messageText = document.createElement('div');
  messageText.className = 'message-text';
  messageText.innerHTML = '<p>Hi, 😊 Welcome to HCL Doc IQ (Feature Preview)! How can I assist you today?</p>';
  welcomeMessage.appendChild(messageText);
  messagesContainer.appendChild(welcomeMessage);
}


// Clear all persisted chat data
function clearPersistedChatData() {
  try {
    localStorage.removeItem(STORAGE_KEYS.CHAT_HISTORY);
    localStorage.removeItem(STORAGE_KEYS.LAST_QUESTION);
    localStorage.removeItem(STORAGE_KEYS.SESSION_ID);
    // Note: We keep consent status so user doesn't have to accept again
  } catch (error) {
    console.error('Error clearing chat data:', error);
  }
}


// Clear session data including consent (used when session expires)
function clearSessionData() {
  try {
    localStorage.removeItem(STORAGE_KEYS.CHAT_HISTORY);
    localStorage.removeItem(STORAGE_KEYS.LAST_QUESTION);
    localStorage.removeItem(STORAGE_KEYS.SESSION_ID);
    localStorage.removeItem(STORAGE_KEYS.CONSENT_GIVEN);
    localStorage.removeItem(STORAGE_KEYS.LAST_ACTIVITY);
   
    // Reset consent status
    consentGiven = false;
   
    // Generate new session ID
    sessionId = `session_${Date.now()}_${Math.random().toString(36).substring(2, 9)}`;
  } catch (error) {
    console.error('Error clearing session data:', error);
  }
}


// Update last activity timestamp
function updateActivityTimestamp() {
  try {
    localStorage.setItem(STORAGE_KEYS.LAST_ACTIVITY, Date.now().toString());
  } catch (error) {
    console.error('Error updating activity timestamp:', error);
  }
}


// Check for session expiration and show consent modal if expired
function checkSessionExpiration() {
  const lastActivity = localStorage.getItem(STORAGE_KEYS.LAST_ACTIVITY);
 
  if (lastActivity) {
    const timeSinceLastActivity = Date.now() - parseInt(lastActivity, 10);
   
    if (timeSinceLastActivity > IDLE_TIMEOUT) {
      // Session expired
      clearSessionData();
     
      // Show consent modal again
      const consentModal = document.querySelector('.sf-chatmodal');
      const miniChatContainer = document.getElementById('mini-chat-container');
      const miniChatInput = document.getElementById('mini-chat-input');
      const miniChatSend = document.getElementById('mini-chat-send');
      const quickActions = document.querySelectorAll('.mini-chat-quick-action');
     
      if (consentModal) {
        consentModal.style.display = 'block';
        consentModal.style.animation = '';
      }
     
      if (miniChatContainer) {
        miniChatContainer.classList.add('blurred');
      }
     
      // Disable chat interactions
      if (miniChatInput) miniChatInput.disabled = true;
      if (miniChatSend) miniChatSend.disabled = true;
      quickActions.forEach(btn => btn.disabled = true);
     
      // Clear chat messages
      const miniChatMessages = document.getElementById('mini-chat-messages');
      if (miniChatMessages) {
        miniChatMessages.innerHTML = '';
        addWelcomeMessage();
      }
     
      return true; // Session expired
    }
  }
 
  return false; // Session still valid
}

// Function to open image modal
function openImageModal(imageSrc, imageAlt) {
  // Check if modal already exists
  let modal = document.getElementById('mini-chat-image-modal');
  
  if (!modal) {
    // Create modal
    modal = document.createElement('div');
    modal.id = 'mini-chat-image-modal';
    modal.className = 'mini-chat-image-modal';
    
    // Create close button
    const closeBtn = document.createElement('button');
    closeBtn.className = 'mini-chat-image-modal-close';
    closeBtn.innerHTML = '&times;';
    closeBtn.title = 'Close';
    
    // Create image element
    const img = document.createElement('img');
    img.alt = imageAlt;
    
    modal.appendChild(closeBtn);
    modal.appendChild(img);
    document.body.appendChild(modal);
    
    // Close on close button click
    closeBtn.addEventListener('click', function(e) {
      e.stopPropagation();
      closeImageModal();
    });
    
    // Close on background click
    modal.addEventListener('click', function(e) {
      if (e.target === modal) {
        closeImageModal();
      }
    });
    
    // Close on Escape key
    document.addEventListener('keydown', function(e) {
      if (e.key === 'Escape' && modal.classList.contains('active')) {
        closeImageModal();
      }
    });
  }
  
  // Set image source and show modal
  const img = modal.querySelector('img');
  img.src = imageSrc;
  img.alt = imageAlt;
  
  modal.classList.add('active');
  document.body.style.overflow = 'hidden'; // Prevent background scrolling
}

// Function to close image modal
function closeImageModal() {
  const modal = document.getElementById('mini-chat-image-modal');
  if (modal) {
    modal.classList.remove('active');
    document.body.style.overflow = ''; // Restore scrolling
  }
}


document.addEventListener('DOMContentLoaded', function() {
  // Load persisted data first
  loadPersistedData();
 
  // Create mini chat button and container elements
  createMiniChatElements();
 
  // Initialize event listeners
  initMiniChatEventListeners();
 
  // Load chat history after elements are created
  loadChatHistory();
});




// Function to create mini chat elements
function createMiniChatElements() {
  // Create mini chat button
  const miniChatButton = document.createElement('button');
  miniChatButton.id = 'mini-chat-button';
  miniChatButton.className = 'mini-chat-button';
  miniChatButton.setAttribute('data-title', 'HCL Doc IQ (Feature Preview)');
  miniChatButton.setAttribute('aria-label', 'HCL Doc IQ (Feature Preview)');
  miniChatButton.innerHTML = '<span class="mini-chat-button-icon"><svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M18 14C18 14.3956 17.8827 14.7822 17.6629 15.1111C17.4432 15.44 17.1308 15.6964 16.7654 15.8478C16.3999 15.9991 15.9978 16.0387 15.6098 15.9616C15.2219 15.8844 14.8655 15.6939 14.5858 15.4142C14.3061 15.1345 14.1156 14.7781 14.0384 14.3902C13.9613 14.0022 14.0009 13.6001 14.1522 13.2346C14.3036 12.8692 14.56 12.5568 14.8889 12.3371C15.2178 12.1173 15.6044 12 16 12C16.5304 12 17.0391 12.2107 17.4142 12.5858C17.7893 12.9609 18 13.4696 18 14ZM10 12C9.60444 12 9.21776 12.1173 8.88886 12.3371C8.55996 12.5568 8.30362 12.8692 8.15224 13.2346C8.00087 13.6001 7.96126 14.0022 8.03843 14.3902C8.1156 14.7781 8.30608 15.1345 8.58579 15.4142C8.86549 15.6939 9.22186 15.8844 9.60982 15.9616C9.99778 16.0387 10.3999 15.9991 10.7654 15.8478C11.1308 15.6964 11.4432 15.44 11.6629 15.1111C11.8827 14.7822 12 14.3956 12 14C12 13.4696 11.7893 12.9609 11.4142 12.5858C11.0391 12.2107 10.5304 12 10 12ZM22 12C21.6044 12 21.2178 12.1173 20.8889 12.3371C20.56 12.5568 20.3036 12.8692 20.1522 13.2346C20.0009 13.6001 19.9613 14.0022 20.0384 14.3902C20.1156 14.7781 20.3061 15.1345 20.5858 15.4142C20.8655 15.6939 21.2219 15.8844 21.6098 15.9616C21.9978 16.0387 22.3999 15.9991 22.7654 15.8478C23.1308 15.6964 23.4432 15.44 23.6629 15.1111C23.8827 14.7822 24 14.3956 24 14C24 13.4696 23.7893 12.9609 23.4142 12.5858C23.0391 12.2107 22.5304 12 22 12ZM30 8V30L22 24H6C4.93913 24 3.92172 23.5786 3.17157 22.8284C2.42143 22.0783 2 21.0609 2 20V8C2 6.93913 2.42143 5.92172 3.17157 5.17157C3.92172 4.42143 4.93913 4 6 4H26C27.0609 4 28.0783 4.42143 28.8284 5.17157C29.5786 5.92172 30 6.93913 30 8ZM28 8C28 7.46957 27.7893 6.96086 27.4142 6.58579C27.0391 6.21071 26.5304 6 26 6H6C5.46957 6 4.96086 6.21071 4.58579 6.58579C4.21071 6.96086 4 7.46957 4 8V20C4 20.5304 4.21071 21.0391 4.58579 21.4142C4.96086 21.7893 5.46957 22 6 22H22.66L23.2 22.4L28 26V8Z" fill="white"/></svg></span>';
  document.body.appendChild(miniChatButton);
 
  // Create mini chat container
  const miniChatContainer = document.createElement('div');
  miniChatContainer.id = 'mini-chat-container';
  miniChatContainer.className = 'mini-chat-container';
 
  // Add HTML structure for mini chat
  miniChatContainer.innerHTML = `
    <div class="mini-chat-resize-handle"></div>
    <div class="mini-chat-header">
      <h3>HCL Doc IQ (Feature Preview)</h3>
      <div class="mini-chat-header-controls">
        <button id="mini-chat-refresh" class="mini-chat-control-btn" title="Start new conversation">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
            <path d="M11.534 7h3.932a.25.25 0 0 1 .192.41l-1.966 2.36a.25.25 0 0 1-.384 0l-1.966-2.36a.25.25 0 0 1 .192-.41zm-11 2h3.932a.25.25 0 0 0 .192-.41L2.692 6.23a.25.25 0 0 0-.384 0L.342 8.59A.25.25 0 0 0 .534 9z"/>
            <path fill-rule="evenodd" d="M8 3c-1.552 0-2.94.707-3.857 1.818a.5.5 0 1 1-.771-.636A6.002 6.002 0 0 1 13.917 7H12.9A5.002 5.002 0 0 0 8 3zM3.1 9a5.002 5.002 0 0 0 8.757 2.182.5.5 0 1 1 .771.636A6.002 6.002 0 0 1 2.083 9H3.1z"/>
          </svg>
        </button>
        <button id="mini-chat-maximize" class="mini-chat-control-btn" title="Maximize">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16" class="maximize-icon">
            <path d="M1.5 1a.5.5 0 0 0-.5.5v4a.5.5 0 0 1-1 0v-4A1.5 1.5 0 0 1 1.5 0h4a.5.5 0 0 1 0 1h-4zM10 .5a.5.5 0 0 1 .5-.5h4A1.5 1.5 0 0 1 16 1.5v4a.5.5 0 0 1-1 0v-4a.5.5 0 0 0-.5-.5h-4a.5.5 0 0 1-.5-.5zM.5 10a.5.5 0 0 1 .5.5v4a.5.5 0 0 0 .5.5h4a.5.5 0 0 1 0 1h-4A1.5 1.5 0 0 1 0 14.5v-4a.5.5 0 0 1 .5-.5zm15 0a.5.5 0 0 1 .5.5v4a1.5 1.5 0 0 1-1.5 1.5h-4a.5.5 0 0 1 0-1h4a.5.5 0 0 0 .5-.5v-4a.5.5 0 0 1 .5-.5z"/>
          </svg>
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16" class="restore-icon" style="display: none;">
            <path d="M5.5 0a.5.5 0 0 1 .5.5v4A1.5 1.5 0 0 1 4.5 6h-4a.5.5 0 0 1 0-1h4a.5.5 0 0 0 .5-.5v-4a.5.5 0 0 1 .5-.5zm5 0a.5.5 0 0 1 .5.5v4a.5.5 0 0 0 .5.5h4a.5.5 0 0 1 0 1h-4A1.5 1.5 0 0 1 10 4.5v-4a.5.5 0 0 1 .5-.5zM0 10.5a.5.5 0 0 1 .5-.5h4A1.5 1.5 0 0 1 6 11.5v4a.5.5 0 0 1-1 0v-4a.5.5 0 0 0-.5-.5h-4a.5.5 0 0 1-.5-.5zm10 1a1.5 1.5 0 0 1 1.5-1.5h4a.5.5 0 0 1 0 1h-4a.5.5 0 0 0-.5.5v4a.5.5 0 0 1-1 0v-4z"/>
          </svg>
        </button>
        <button id="mini-chat-close" class="mini-chat-close">&times;</button>
      </div>
    </div>
    <div id="mini-chat-messages" class="mini-chat-messages">
      <div class="mini-chat-message ai">
        <div class="message-text">
          <p>Hi, 😊 Welcome to HCL Doc IQ (Feature Preview)! How can I assist you today?</p>
        </div>
      </div>
    </div>
    <div class="sf-chatmodal">
      <div class="sf-chatmodal-overlay">
        <div class="sf-chatmodal-body">
          <div class="sf-chatmodal-content">
            <div>
              <div class="sf-chatmodal-title">
                Hi! Welcome to HCL Doc IQ (Feature Preview)
              </div>
              <div class="sf-chatmodal-description">
                I am here to make your experience simpler and quicker by helping you anytime you need.
              </div>
              <div class="sf-chatmodal-checkbox-wrapper">
                <input type="checkbox" id="sf-rbl-tnc-checkbox">
                <label for="sf-rbl-tnc-checkbox">
                  <div class="label-text">
                    You are interacting with an AI assistant. Content is automatically generated - review carefully before use and avoid inclusion of personal or confidential information.
                  </div>
                </label>
              </div>
              <button class="sf-chatmodal-btn sf-confirm" disabled>
                Get Started
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="mini-chat-input-area">
      <div class="mini-chat-input-wrapper">
        <textarea id="mini-chat-input" class="mini-chat-input" aria-label="Type your query here..." placeholder="Type your query here..." rows="1"></textarea>
        <button id="mini-chat-send" class="mini-chat-send" disabled>➤</button>
      </div>
      <div class="mini-chat-disclaimer">
        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="currentColor" viewBox="0 0 16 16">
          <path d="M8.982 1.566a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566zM8 5c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995A.905.905 0 0 1 8 5zm.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
        </svg>
        This app can make mistakes. Check important information.
      </div>
    </div>
    <div class="mini-chat-quick-actions">
      <button class="mini-chat-quick-action">What is this product?</button>
      <button class="mini-chat-quick-action">What's new</button>
      <button class="mini-chat-quick-action">How do I get started?</button>
      <button class="mini-chat-quick-action">What are the System Requirements</button>
    </div>
   
  `;
 
  document.body.appendChild(miniChatContainer);
}




// Function to initialize event listeners
function initMiniChatEventListeners() {
  const miniChatButton = document.getElementById('mini-chat-button');
  const miniChatContainer = document.getElementById('mini-chat-container');
  const miniChatClose = document.getElementById('mini-chat-close');
  const miniChatInput = document.getElementById('mini-chat-input');
  const miniChatSend = document.getElementById('mini-chat-send');
  const miniChatMessages = document.getElementById('mini-chat-messages');
  const quickActions = document.querySelectorAll('.mini-chat-quick-action');
  const consentModal = document.querySelector('.sf-chatmodal');
  const consentAccept = document.querySelector('.sf-chatmodal-btn.sf-confirm');
  const consentCheckbox = document.getElementById('sf-rbl-tnc-checkbox');
  const resizeHandle = document.querySelector('.mini-chat-resize-handle');
 
  // Resize functionality
  let isResizing = false;
  let startX = 0;
  let startWidth = 0;


  if (resizeHandle) {
    resizeHandle.addEventListener('mousedown', function(e) {
      isResizing = true;
      startX = e.clientX;
      startWidth = parseInt(getComputedStyle(miniChatContainer).width, 10);
     
      // Prevent text selection during resize
      e.preventDefault();
      miniChatContainer.classList.add('resizing');
      document.body.style.userSelect = 'none';
      document.body.style.cursor = 'ew-resize';
    });


    document.addEventListener('mousemove', function(e) {
      if (!isResizing) return;
     
      // Calculate new width (negative because we're dragging from the left)
      const deltaX = startX - e.clientX;
      const newWidth = startWidth + deltaX;
     
      // Apply constraints
      const minWidth = 370;
      const maxWidth = 700;
      const constrainedWidth = Math.max(minWidth, Math.min(maxWidth, newWidth));
     
      miniChatContainer.style.width = constrainedWidth + 'px';
    });


    document.addEventListener('mouseup', function() {
      if (isResizing) {
        isResizing = false;
        miniChatContainer.classList.remove('resizing');
        document.body.style.userSelect = '';
        document.body.style.cursor = '';
      }
    });
  }
 
  // Disable chat interactions until consent is given
  miniChatInput.disabled = true;
  miniChatSend.disabled = true;
  quickActions.forEach(btn => btn.disabled = true);
 
  // Add blur effect to mini chat when modal is shown
  if (consentModal && !consentGiven) {
    miniChatContainer.classList.add('blurred');
  }
 
  // Enable/disable accept button based on checkbox
  if (consentCheckbox && consentAccept) {
    consentCheckbox.addEventListener('change', function() {
      consentAccept.disabled = !this.checked;
    });
  }
 
  // Consent accept handler
  if (consentAccept) {
    consentAccept.addEventListener('click', function() {
      if (consentCheckbox.checked) {
        consentGiven = true;
       
        // Save consent status to localStorage
        localStorage.setItem(STORAGE_KEYS.CONSENT_GIVEN, 'true');
       
        // Update activity timestamp
        updateActivityTimestamp();
       
        // Fade out modal
        consentModal.style.animation = 'fadeOut 0.3s ease';
        setTimeout(() => {
          consentModal.style.display = 'none';
          miniChatContainer.classList.remove('blurred');
        }, 300);
       
        // Enable chat interactions
        miniChatInput.disabled = false;
        miniChatSend.disabled = false;
        quickActions.forEach(btn => btn.disabled = false);
       
        miniChatInput.focus();
      }
    });
  }
 
  // If consent was already given, skip the modal
  if (consentGiven && consentModal) {
    consentModal.style.display = 'none';
    miniChatContainer.classList.remove('blurred');
    miniChatInput.disabled = false;
    miniChatSend.disabled = false;
    quickActions.forEach(btn => btn.disabled = false);
  }
 
  // Restore last question from localStorage
  const savedLastQuestion = localStorage.getItem(STORAGE_KEYS.LAST_QUESTION);
  if (savedLastQuestion && miniChatInput) {
    miniChatInput.dataset.lastQuestion = savedLastQuestion;
  }
 
  // Toggle mini chat visibility
  miniChatButton.addEventListener('click', function() {
    // Check if session expired before opening
    if (checkSessionExpiration()) {
      // Session expired, consent modal will be shown
      miniChatContainer.classList.add('active');
      miniChatButton.classList.add('hidden');
      return;
    }
   
    const isOpening = !miniChatContainer.classList.contains('active');
    miniChatContainer.classList.toggle('active');
    
    // Hide button when opening, show when closing
    if (isOpening) {
      miniChatButton.classList.add('hidden');
    } else {
      miniChatButton.classList.remove('hidden');
    }
   
    // Update activity timestamp when opening chat
    if (consentGiven && isOpening) {
      updateActivityTimestamp();
    }
  });
 
  // Close mini chat
  miniChatClose.addEventListener('click', function() {
    miniChatContainer.classList.remove('active');
    // Also remove maximized state when closing
    miniChatContainer.classList.remove('maximized');
    // Show button again when closing
    miniChatButton.classList.remove('hidden');
  });
  
  // Maximize/Restore button functionality
  const miniChatMaximize = document.getElementById('mini-chat-maximize');
  miniChatMaximize.addEventListener('click', function() {
    const isMaximized = miniChatContainer.classList.toggle('maximized');
    const maximizeIcon = miniChatMaximize.querySelector('.maximize-icon');
    const restoreIcon = miniChatMaximize.querySelector('.restore-icon');
    
    if (isMaximized) {
      // Switch to restore icon
      maximizeIcon.style.display = 'none';
      restoreIcon.style.display = 'block';
      miniChatMaximize.setAttribute('title', 'Restore');
    } else {
      // Switch to maximize icon
      maximizeIcon.style.display = 'block';
      restoreIcon.style.display = 'none';
      miniChatMaximize.setAttribute('title', 'Maximize');
    }
  });
 
  // Refresh button - start new conversation
  const miniChatRefresh = document.getElementById('mini-chat-refresh');
  miniChatRefresh.addEventListener('click', function() {
    // Clear persisted data
    clearPersistedChatData();
   
    // Clear all messages
    while (miniChatMessages.firstChild) {
      miniChatMessages.removeChild(miniChatMessages.firstChild);
    }
   
    // Add welcome message back
    addWelcomeMessage();
   
    // Generate a new session ID
    sessionId = `session_${Date.now()}_${Math.random().toString(36).substring(2, 9)}`;
    localStorage.setItem(STORAGE_KEYS.SESSION_ID, sessionId);
   
    // Clear input field
    miniChatInput.value = '';
    miniChatSend.disabled = true;
   
    // Save empty history
    saveChatHistory();
  });
 
  // Enable/disable send button based on input
  miniChatInput.addEventListener('input', function() {
    // Only enable send button if input is not disabled and has content
    if (!miniChatInput.disabled) {
      miniChatSend.disabled = !miniChatInput.value.trim();
    }
   
    // Auto resize textarea
    miniChatInput.style.height = 'auto';
    miniChatInput.style.height = (miniChatInput.scrollHeight) + 'px';
  });
 
  // Handle enter key press
  miniChatInput.addEventListener('keydown', function(e) {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      if (!miniChatSend.disabled) {
        sendMessage();
      }
    }
  });
 
  // Send message on button click
  miniChatSend.addEventListener('click', sendMessage);
 
  // Quick action buttons
  quickActions.forEach(button => {
    button.addEventListener('click', function() {
      const actionText = button.textContent;
     
      // Update activity timestamp
      updateActivityTimestamp();
     
      // Store last question for feedback
      miniChatInput.dataset.lastQuestion = actionText;
      localStorage.setItem(STORAGE_KEYS.LAST_QUESTION, actionText);
     
      addUserMessage(actionText);
      
      // Disable input and buttons while processing
      miniChatInput.disabled = true;
      miniChatSend.disabled = true;
      quickActions.forEach(btn => btn.disabled = true);
     
      // Show processing animation
      showProcessingAnimation();
     
      // Send the quick action text to the backend
      askQuestion(actionText);
    });
  });
 
  // Function to send user message
  function sendMessage() {
    const message = miniChatInput.value.trim();
    if (!message) return;
   
    // Update activity timestamp
    updateActivityTimestamp();
   
    // Store last question for feedback
    miniChatInput.dataset.lastQuestion = message;
    localStorage.setItem(STORAGE_KEYS.LAST_QUESTION, message);
   
    // Add user message to chat
    addUserMessage(message);
   
    // Clear input and reset height
    miniChatInput.value = '';
    miniChatInput.style.height = 'auto';
    
    // Disable input and buttons while processing
    miniChatInput.disabled = true;
    miniChatSend.disabled = true;
    quickActions.forEach(btn => btn.disabled = true);
   
    // Show processing animation
    showProcessingAnimation();
   
    // Send the message to the backend API
    askQuestion(message);
  }
 
  // Function to send question to backend API
  async function askQuestion(question) {
    try {
      const requestData = {
        question,
        id: sessionId
      };
     
      // Make API request to backend
      const response = await fetch(`${API_URL}/ask-agent`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(requestData)
      });
     
      if (!response.ok) {
        throw new Error(`API error: ${response.status}`);
      }
     
      const data = await response.json();
     
      // Remove processing animation
      removeProcessingAnimation();
     
      // Add AI response from backend
      addAIMessage(data.answer || "I'm sorry, I couldn't process your request at this time.");
      
      // Re-enable input and buttons after response is complete
      miniChatInput.disabled = false;
      miniChatSend.disabled = false;
      quickActions.forEach(btn => btn.disabled = false);
      miniChatInput.focus();
     
    } catch (error) {
      console.error('Error asking question:', error);
     
      // Remove processing animation
      removeProcessingAnimation();
     
      // Show error message
      addAIMessage("I'm sorry, there was an error processing your request. Please try again later.");
      
      // Re-enable input and buttons after error
      miniChatInput.disabled = false;
      miniChatSend.disabled = false;
      quickActions.forEach(btn => btn.disabled = false);
      miniChatInput.focus();
    }
  }
 
  // Function to add user message
  function addUserMessage(message) {
    const messageElement = document.createElement('div');
    messageElement.className = 'mini-chat-message user';
    messageElement.textContent = message;
    miniChatMessages.appendChild(messageElement);
   
    // Save to localStorage
    saveChatHistory();
   
    scrollToBottom();
  }
 
  // Function to add AI message with markdown support and message-text structure
  function addAIMessage(message) {
    const messageElement = document.createElement('div');
    messageElement.className = 'mini-chat-message ai';
   
    // Create message-text div
    const messageTextDiv = document.createElement('div');
    messageTextDiv.className = 'message-text';
   
    // Use marked.js to parse markdown and insert into message-text div
    try {
      // Configure marked to use proper HTML structure
      if (typeof marked !== 'undefined') {
        messageTextDiv.innerHTML = marked.parse(message);
      } else {
        // Fallback if marked.js is not loaded
        messageTextDiv.innerHTML = formatSimpleMarkdown(message);
      }
     
      // Format source URLs to display one per line
      formatSourceUrls(messageTextDiv);
     
      // Make all links open in new window
      const links = messageTextDiv.querySelectorAll('a');
      links.forEach(link => {
        link.setAttribute('target', '_blank');
        link.setAttribute('rel', 'noopener noreferrer');
      });
      
      // Make images clickable to expand
      const images = messageTextDiv.querySelectorAll('img');
      images.forEach(img => {
        img.addEventListener('click', function() {
          openImageModal(img.src, img.alt || 'Image');
        });
      });
    } catch (error) {
      console.error('Error parsing markdown:', error);
      messageTextDiv.textContent = message;
    }
   
    messageElement.appendChild(messageTextDiv);




    // Add feedback buttons container
    const feedbackContainer = document.createElement('div');
    feedbackContainer.className = 'mini-chat-feedback-container';
   
    // Create thumbs up button
    const thumbsUpBtn = document.createElement('button');
    thumbsUpBtn.className = 'mini-chat-feedback-btn';
    thumbsUpBtn.setAttribute('title', 'This was helpful');
    thumbsUpBtn.innerHTML = `
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
        <path d="M8.864.046C7.908-.193 7.02.53 6.956 1.466c-.072 1.051-.23 2.016-.428 2.59-.125.36-.479 1.013-1.04 1.639-.557.623-1.282 1.178-2.131 1.41C2.685 7.288 2 7.87 2 8.72v4.001c0 .845.682 1.464 1.448 1.545 1.07.114 1.564.415 2.068.723l.048.03c.272.165.578.348.97.484.397.136.861.217 1.466.217h3.5c.937 0 1.599-.477 1.934-1.064a1.86 1.86 0 0 0 .254-.912c0-.152-.023-.312-.077-.464.201-.263.38-.578.488-.901.11-.33.172-.762.004-1.149.069-.13.12-.269.159-.403.077-.27.113-.568.113-.857 0-.288-.036-.585-.113-.856a2.144 2.144 0 0 0-.138-.362 1.9 1.9 0 0 0 .234-1.734c-.206-.592-.682-1.1-1.2-1.272-.847-.282-1.803-.276-2.516-.211a9.84 9.84 0 0 0-.443.05 9.365 9.365 0 0 0-.062-4.509A1.38 1.38 0 0 0 9.125.111L8.864.046zM11.5 14.721H8c-.51 0-.863-.069-1.14-.164-.281-.097-.506-.228-.776-.393l-.04-.024c-.555-.339-1.198-.731-2.49-.868-.333-.036-.554-.29-.554-.55V8.72c0-.254.226-.543.62-.65 1.095-.3 1.977-.996 2.614-1.708.635-.71 1.064-1.475 1.238-1.978.243-.7.407-1.768.482-2.85.025-.362.36-.594.667-.518l.262.066c.16.04.258.143.288.255a8.34 8.34 0 0 1-.145 4.725.5.5 0 0 0 .595.644l.003-.001.014-.003.058-.014a8.908 8.908 0 0 1 1.036-.157c.663-.06 1.457-.054 2.11.164.175.058.45.3.57.65.107.308.087.67-.266 1.022l-.353.353.353.354c.043.043.105.141.154.315.048.167.075.37.075.581 0 .212-.027.414-.075.582-.05.174-.111.272-.154.315l-.353.353.353.354c.047.047.109.177.005.488a2.224 2.224 0 0 1-.505.805l-.353.353.353.354c.006.005.041.05.041.17a.866.866 0 0 1-.121.416c-.165.288-.503.56-1.066.56z"/>
      </svg>
    `;
   
    // Create thumbs down button
    const thumbsDownBtn = document.createElement('button');
    thumbsDownBtn.className = 'mini-chat-feedback-btn';
    thumbsDownBtn.setAttribute('title', 'This needs improvement');
    thumbsDownBtn.innerHTML = `
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
        <path d="M8.864 15.674c-.956.24-1.843-.484-1.908-1.42-.072-1.05-.23-2.015-.428-2.59-.125-.36-.479-1.012-1.04-1.638-.557-.624-1.282-1.179-2.131-1.41C2.685 8.432 2 7.85 2 7V3c0-.845.682-1.464 1.448-1.546 1.07-.113 1.564-.415 2.068-.723l.048-.029c.272-.166.578-.349.97-.484C6.931.08 7.395 0 8 0h3.5c.937 0 1.599.478 1.934 1.064.164.287.254.607.254.913 0 .152-.023.312-.077.464.201.262.38.577.488.9.11.33.172.762.004 1.15.069.13.12.268.159.403.077.27.113.567.113.856 0 .289-.036.586-.113.856-.035.12-.08.244-.138.363.394.571.418 1.2.234 1.733-.206.592-.682 1.1-1.2 1.272-.847.283-1.803.276-2.516.211a9.877 9.877 0 0 1-.443-.05 9.364 9.364 0 0 1-.062 4.51c-.138.508-.55.848-1.012.964l-.261.065zM11.5 1H8c-.51 0-.863.068-1.14.163-.281.097-.506.229-.776.393l-.04.025c-.555.338-1.198.73-2.49.868-.333.035-.554.29-.554.55V7c0 .255.226.543.62.65 1.095.3 1.977.997 2.614 1.709.635.71 1.064 1.475 1.238 1.977.243.7.407 1.768.482 2.85.025.362.36.595.667.518l.262-.065c.16-.04.258-.144.288-.255a8.34 8.34 0 0 0-.145-4.726.5.5 0 0 1 .595-.643h.003l.014.004.058.013a8.912 8.912 0 0 0 1.036.157c.663.06 1.457.054 2.11-.163.175-.059.45-.301.57-.651.107-.308.087-.67-.266-1.021L12.793 7l.353-.354c.043-.042.105-.14.154-.315.048-.167.075-.37.075-.581 0-.211-.027-.414-.075-.581-.05-.174-.111-.273-.154-.315l-.353-.354.353-.354c.047-.047.109-.176.005-.488a2.224 2.224 0 0 0-.505-.804l-.353-.354.353-.354c.006-.005.041-.05.041-.17a.866.866 0 0 0-.121-.415C12.4 1.272 12.063 1 11.5 1z"/>
      </svg>
    `;
    
    // Create copy button
    const copyBtn = document.createElement('button');
    copyBtn.className = 'mini-chat-feedback-btn mini-chat-copy-btn';
    copyBtn.setAttribute('title', 'Copy response');
    copyBtn.innerHTML = `
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
        <path d="M4 1.5H3a2 2 0 0 0-2 2V14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V3.5a2 2 0 0 0-2-2h-1v1h1a1 1 0 0 1 1 1V14a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V3.5a1 1 0 0 1 1-1h1v-1z"/>
        <path d="M9.5 1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5h3zm-3-1A1.5 1.5 0 0 0 5 1.5v1A1.5 1.5 0 0 0 6.5 4h3A1.5 1.5 0 0 0 11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3z"/>
      </svg>
    `;
   
    feedbackContainer.appendChild(thumbsUpBtn);
    feedbackContainer.appendChild(thumbsDownBtn);
    feedbackContainer.appendChild(copyBtn);
   
    messageElement.appendChild(feedbackContainer);
   
    // Add event listeners for feedback buttons
    thumbsUpBtn.addEventListener('click', function() {
      handleFeedback(messageElement, true, message);
    });
   
    thumbsDownBtn.addEventListener('click', function() {
      handleFeedback(messageElement, false, message);
    });
    
    // Add event listener for copy button
    copyBtn.addEventListener('click', function() {
      handleCopyResponse(messageElement, copyBtn);
    });
   
    miniChatMessages.appendChild(messageElement);
   
    // Save chat history to localStorage
    saveChatHistory();
   
    // Scroll to show both the user's question and start of the answer
    // Get all messages and find the user message that precedes this AI message
    const allMessages = miniChatMessages.querySelectorAll('.mini-chat-message');
    const currentIndex = Array.from(allMessages).indexOf(messageElement);
   
    // If there's a previous message (user's question), scroll to show it
    if (currentIndex > 0) {
      const previousMessage = allMessages[currentIndex - 1];
      previousMessage.scrollIntoView({ behavior: 'smooth', block: 'start' });
    } else {
      // Otherwise scroll to the current message
      messageElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }
 
  // Simple markdown formatter as fallback
  function formatSimpleMarkdown(text) {
    // Convert markdown-style text to HTML
    let html = text;
   
    // Headers
    html = html.replace(/^### (.*$)/gim, '<h3>$1</h3>');
    html = html.replace(/^## (.*$)/gim, '<h2>$1</h2>');
    html = html.replace(/^# (.*$)/gim, '<h1>$1</h1>');
   
    // Bold
    html = html.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
   
    // Italic
    html = html.replace(/\*(.*?)\*/g, '<em>$1</em>');
   
    // Code
    html = html.replace(/`(.*?)`/g, '<code>$1</code>');
   
    // Line breaks
    html = html.replace(/\n\n/g, '</p><p>');
    html = '<p>' + html + '</p>';
   
    // Lists (basic)
    html = html.replace(/<p>- (.*?)<\/p>/g, '<ul><li>$1</li></ul>');
    html = html.replace(/<p>\* (.*?)<\/p>/g, '<ul><li>$1</li></ul>');
   
    return html;
  }
 
  // Function to format source URLs to display one per line
  function formatSourceUrls(container) {
    // Find all paragraphs that contain "Source URL" text
    const paragraphs = container.querySelectorAll('p');
   
    paragraphs.forEach(p => {
      const text = p.textContent;
     
      // Check if this paragraph contains "Source URL" or similar patterns
      if (text.includes('Source URL') || text.includes('source url') ||
          (text.match(/^Source/i) && p.querySelectorAll('a').length > 0)) {
       
        // Get all links in this paragraph
        const links = p.querySelectorAll('a');
       
        if (links.length > 1) {
          // Create a new structure with proper line breaks
          const fragment = document.createDocumentFragment();
         
          // Keep the "Source URL:" text
          const textNodes = [];
          let currentNode = p.firstChild;
         
          while (currentNode) {
            if (currentNode.nodeType === Node.TEXT_NODE) {
              textNodes.push(currentNode.textContent);
            } else if (currentNode.nodeName === 'A') {
              break; // Stop at first link
            }
            currentNode = currentNode.nextSibling;
          }
         
          // Add the label text
          if (textNodes.length > 0) {
            const labelText = document.createTextNode(textNodes.join(''));
            fragment.appendChild(labelText);
            fragment.appendChild(document.createElement('br'));
          }
         
          // Add each link on a separate line
          links.forEach((link, index) => {
            const linkClone = link.cloneNode(true);
            fragment.appendChild(linkClone);
           
            // Add line break after each link except the last one
            if (index < links.length - 1) {
              fragment.appendChild(document.createElement('br'));
            }
          });
         
          // Replace the paragraph content
          p.innerHTML = '';
          p.appendChild(fragment);
        }
      }
    });
  }
 
  // Function to show processing animation
  function showProcessingAnimation() {
    const processingElement = document.createElement('div');
    processingElement.className = 'mini-chat-processing';
    processingElement.id = 'mini-chat-processing';
    processingElement.innerHTML = `
      <div class="mini-chat-processing-dot"></div>
      <div class="mini-chat-processing-dot"></div>
      <div class="mini-chat-processing-dot"></div>
    `;
    miniChatMessages.appendChild(processingElement);
    scrollToBottom();
  }
 
  // Function to remove processing animation
  function removeProcessingAnimation() {
    const processingElement = document.getElementById('mini-chat-processing');
    if (processingElement) {
      processingElement.remove();
    }
  }
 
  // Function to scroll chat to bottom
  function scrollToBottom() {
    miniChatMessages.scrollTop = miniChatMessages.scrollHeight;
  }
  
  // Function to handle copy response
  async function handleCopyResponse(messageElement, copyBtn) {
    try {
      // Get the message text div
      const messageTextDiv = messageElement.querySelector('.message-text');
      if (!messageTextDiv) {
        showFeedbackToast('Unable to copy response');
        return;
      }
      
      // Get both plain text and HTML content
      const htmlContent = messageTextDiv.innerHTML;
      const textContent = messageTextDiv.innerText;
      
      // Try to copy with HTML formatting (for rich text editors)
      // and fallback to plain text
      try {
        // Create a blob with HTML content
        const clipboardItem = new ClipboardItem({
          'text/html': new Blob([htmlContent], { type: 'text/html' }),
          'text/plain': new Blob([textContent], { type: 'text/plain' })
        });
        
        await navigator.clipboard.write([clipboardItem]);
      } catch (err) {
        // Fallback to plain text only if rich copy fails
        await navigator.clipboard.writeText(textContent);
      }
      
      // Visual feedback - change icon temporarily
      const originalHTML = copyBtn.innerHTML;
      copyBtn.innerHTML = `
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
          <path d="M13.854 3.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L6.5 10.293l6.646-6.647a.5.5 0 0 1 .708 0z"/>
        </svg>
      `;
      copyBtn.style.color = '#4CAF50';
      
      showFeedbackToast('Response copied to clipboard!');
      
      // Reset icon after 2 seconds
      setTimeout(() => {
        copyBtn.innerHTML = originalHTML;
        copyBtn.style.color = '';
      }, 2000);
      
    } catch (error) {
      console.error('Error copying response:', error);
      showFeedbackToast('Failed to copy response');
    }
  }
 
  // Function to handle feedback (thumbs up/down)
  async function handleFeedback(messageElement, isPositive, responseText) {
  const feedbackButtons = messageElement.querySelectorAll('.mini-chat-feedback-btn');
 
  if (isPositive) {
    // Disable feedback buttons after feedback is given
    feedbackButtons.forEach(btn => {
      btn.disabled = true;
      btn.style.opacity = '0.5';
    });
   
    // Highlight the selected button
    const selectedBtn = feedbackButtons[0];
    selectedBtn.style.opacity = '1';
    selectedBtn.style.color = '#4CAF50';
   
    // For thumbs up, send feedback directly
    await sendFeedbackToBackend({
      user: sessionId,
      question: miniChatInput.dataset.lastQuestion || '',
      answer: responseText,
      comments: '',
      feedtype: 'Like',
      feedbackCategory: '',
      session_user: ''
    });
   
    // Show thank you message
    showFeedbackToast('Thank you for your feedback!');
  } else {
    // For thumbs down, show feedback dialog
    // Pass messageElement and responseText so dialog can disable buttons after submission
    showFeedbackDialog(messageElement, responseText);
  }
}
 
  // Function to show feedback dialog for negative feedback
 function showFeedbackDialog(messageElement, responseText) {
  // Check if dialog already exists
  const existingDialog = miniChatContainer.querySelector('.mini-chat-feedback-dialog');
  if (existingDialog) {
    existingDialog.remove();
  }
 
  // Create compact dialog inside chat
  const dialog = document.createElement('div');
  dialog.className = 'mini-chat-feedback-dialog';
 
  dialog.innerHTML = `
    <div class="mini-chat-feedback-dialog-header" style="display: flex; align-items: center; justify-content: space-between; padding: 8px 10px; border-bottom: 1px solid #e5e7eb; background: linear-gradient(135deg, #f8fafc 0%, #f1f5f9 100%);">
      <div style="display: flex; align-items: center; gap: 6px;">
        <span style="font-size: 1em;">💭</span>
        <h4 style="margin: 0; font-size: 0.9em; font-weight: 600; color: #1e293b;">Help us improve</h4>
      </div>
      <button class="mini-chat-feedback-dialog-close" title="Close" style="background: none; border: none; cursor: pointer; padding: 2px; border-radius: 3px; transition: all 0.2s; display: flex; align-items: center; justify-content: center; width: 24px; height: 24px;" onmouseover="this.style.background='rgba(0,0,0,0.05)'" onmouseout="this.style.background='none'">
        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor" viewBox="0 0 16 16" style="opacity: 0.6;">
          <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z"/>
        </svg>
      </button>
    </div>
    <div class="mini-chat-feedback-dialog-content" style="padding: 10px; background: #ffffff;">
      <form class="mini-chat-feedback-form" autocomplete="off" style="display: flex; flex-direction: column; gap: 8px;">
        <div class="mini-chat-feedback-field" style="display: flex; flex-direction: column; gap: 4px;">
          <label for="feedbackComment" style="font-weight: 500; color: #475569; font-size: 0.85em; margin: 0;">What could be better?</label>
          <textarea id="feedbackComment" rows="2" placeholder="Share your thoughts..." required style="resize: vertical; border-radius: 6px; border: 1px solid #cbd5e1; padding: 6px 8px; font-size: 0.88em; background: #f8fafc; min-height: 50px; max-height: 80px; font-family: inherit; transition: all 0.2s; line-height: 1.4;" onfocus="this.style.borderColor='#667eea'; this.style.background='#ffffff'" onblur="this.style.borderColor='#cbd5e1'; this.style.background='#f8fafc'"></textarea>
        </div>
        <div class="mini-chat-feedback-field" style="display: flex; flex-direction: column; gap: 4px;">
          <label for="feedbackName" style="font-weight: 500; color: #475569; font-size: 0.85em; margin: 0;">Name <span style="color: #94a3b8; font-weight: 400; font-size: 0.9em;"></span></label>
          <input type="text" id="feedbackName" placeholder="Your name" style="border-radius: 6px; border: 1px solid #cbd5e1; padding: 6px 8px; font-size: 0.88em; background: #f8fafc; font-family: inherit; transition: all 0.2s; height: 32px;" onfocus="this.style.borderColor='#667eea'; this.style.background='#ffffff'" onblur="this.style.borderColor='#cbd5e1'; this.style.background='#f8fafc'">
        </div>
        <div style="display: flex; justify-content: flex-end; gap: 6px; margin-top: 4px;">
          <button type="button" class="mini-chat-feedback-dialog-btn-cancel" style="background: #f1f5f9; color: #64748b; border: none; border-radius: 6px; padding: 6px 14px; font-size: 0.88em; cursor: pointer; transition: all 0.2s; font-weight: 500; height: 32px;" onmouseover="this.style.background='#e2e8f0'" onmouseout="this.style.background='#f1f5f9'">Cancel</button>
          <button type="submit" class="mini-chat-feedback-dialog-btn-submit" disabled style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: #fff; border: none; border-radius: 6px; padding: 6px 16px; font-size: 0.88em; font-weight: 600; cursor: pointer; transition: all 0.2s; height: 32px; opacity: 0.5;" onmouseover="if(!this.disabled) this.style.transform='translateY(-1px)'; if(!this.disabled) this.style.boxShadow='0 4px 8px rgba(102,126,234,0.3)'" onmouseout="this.style.transform='translateY(0)'; this.style.boxShadow='none'">Submit</button>
        </div>
      </form>
    </div>
  `;
 
  // Insert dialog inside the chat container, positioned above input area
  miniChatContainer.appendChild(dialog);
 
  // Get form elements
  const feedbackComment = dialog.querySelector('#feedbackComment');
  const submitBtn = dialog.querySelector('.mini-chat-feedback-dialog-btn-submit');
  const cancelBtn = dialog.querySelector('.mini-chat-feedback-dialog-btn-cancel');
  const feedbackButtons = messageElement.querySelectorAll('.mini-chat-feedback-btn');
 
  // Enable/disable submit button based on form validation
  function validateForm() {
    const isValid = feedbackComment.value.trim().length > 0;
    submitBtn.disabled = !isValid;
    submitBtn.style.opacity = isValid ? '1' : '0.5';
    submitBtn.style.cursor = isValid ? 'pointer' : 'not-allowed';
  }
 
  feedbackComment.addEventListener('input', validateForm);
 
  // Close dialog function
  function closeFeedbackDialog() {
    dialog.classList.add('mini-chat-feedback-dialog-closing');
    setTimeout(() => dialog.remove(), 300);
  }
 
  // Close button handler
  const closeBtn = dialog.querySelector('.mini-chat-feedback-dialog-close');
  closeBtn.addEventListener('click', closeFeedbackDialog);
  cancelBtn.addEventListener('click', closeFeedbackDialog);
 
  // Get form element
  const form = dialog.querySelector('.mini-chat-feedback-form');
 
  // Form submit handler
  form.addEventListener('submit', async function(e) {
    e.preventDefault();
    e.stopPropagation();
   
    const comment = feedbackComment.value.trim();
    const name = dialog.querySelector('#feedbackName').value.trim();
   
    if (!comment) {
      return;
    }
   
    // Disable submit button while submitting
    submitBtn.disabled = true;
    submitBtn.textContent = 'Submitting...';
   
    // Send feedback to backend - always use 'improvement' as category
    await sendFeedbackToBackend({
      user: sessionId,
      question: miniChatInput.dataset.lastQuestion || '',
      answer: responseText,
      comments: comment,
      feedtype: 'Dislike',
      feedbackCategory: 'improvement',
      session_user: name
    });
   
    // NOW disable and highlight the feedback buttons after successful submission
    feedbackButtons.forEach(btn => {
      btn.disabled = true;
      btn.style.opacity = '0.5';
    });
   
    // Highlight the thumbs down button
    const thumbsDownBtn = feedbackButtons[1];
    thumbsDownBtn.style.opacity = '1';
    thumbsDownBtn.style.color = '#dc2626'; // Red color
   
    closeFeedbackDialog();
    showFeedbackToast('Thank you for your feedback! We appreciate your input.');
  });
 
  // Animate in
  setTimeout(() => dialog.classList.add('mini-chat-feedback-dialog-show'), 10);
 
  // Focus on comment field
  feedbackComment.focus();
}


  // Function to send feedback to backend
  async function sendFeedbackToBackend(feedbackData) {
    try {
      const response = await fetch(`${API_URL}/search/feedback`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(feedbackData)
      });
     
      if (!response.ok) {
        console.error('Failed to send feedback:', response.status);
      }
    } catch (error) {
      console.error('Error sending feedback:', error);
    }
  }
 
  // Function to show feedback toast notification
  function showFeedbackToast(message) {
    // Remove existing toast if any
    const existingToast = document.getElementById('mini-chat-feedback-toast');
    if (existingToast) {
      existingToast.remove();
    }
   
    const toast = document.createElement('div');
    toast.id = 'mini-chat-feedback-toast';
    toast.className = 'mini-chat-feedback-toast';
    toast.textContent = message;
   
    document.body.appendChild(toast);
   
    // Show toast
    setTimeout(() => {
      toast.classList.add('show');
    }, 100);
   
    // Hide and remove toast after 3 seconds
    setTimeout(() => {
      toast.classList.remove('show');
      setTimeout(() => {
        toast.remove();
      }, 300);
    }, 3000);
  }
}

