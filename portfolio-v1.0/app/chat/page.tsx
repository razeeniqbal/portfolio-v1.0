'use client';

import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Send, User, Users, MessageSquare } from 'lucide-react';

interface Message {
  id: string;
  user: string;
  text: string;
  timestamp: string;
  color: string;
}

const STORAGE_KEY = 'chat_messages';
const USERNAME_KEY = 'chat_username';
const ONLINE_USERS_KEY = 'chat_online_users';

export default function ChatPage() {
  const [username, setUsername] = useState('Guest');
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState<Message[]>([]);
  const [onlineUsers, setOnlineUsers] = useState<string[]>([]);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const userSessionId = useRef<string>('');

  const colors = [
    'text-primary-600',
    'text-blue-600',
    'text-purple-600',
    'text-green-600',
    'text-orange-600',
  ];

  // Initialize user session
  useEffect(() => {
    userSessionId.current = `user_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;

    // Load saved username
    const savedUsername = localStorage.getItem(USERNAME_KEY);
    if (savedUsername) {
      setUsername(savedUsername);
    }

    // Load existing messages
    const savedMessages = localStorage.getItem(STORAGE_KEY);
    if (savedMessages) {
      try {
        setMessages(JSON.parse(savedMessages));
      } catch (e) {
        // Initialize with welcome messages if parsing fails
        const initialMessages: Message[] = [
          {
            id: '1',
            user: 'System',
            text: 'Welcome to the Chat Room!',
            timestamp: new Date().toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' }),
            color: 'text-primary-600',
          },
          {
            id: '2',
            user: 'Razeen',
            text: 'Hey everyone! Feel free to leave a message 👋',
            timestamp: new Date().toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' }),
            color: 'text-blue-600',
          },
        ];
        setMessages(initialMessages);
        localStorage.setItem(STORAGE_KEY, JSON.stringify(initialMessages));
      }
    } else {
      // Initialize with welcome messages
      const initialMessages: Message[] = [
        {
          id: '1',
          user: 'System',
          text: 'Welcome to the Chat Room!',
          timestamp: new Date().toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' }),
          color: 'text-primary-600',
        },
        {
          id: '2',
          user: 'Razeen',
          text: 'Hey everyone! Feel free to leave a message 👋',
          timestamp: new Date().toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' }),
          color: 'text-blue-600',
        },
      ];
      setMessages(initialMessages);
      localStorage.setItem(STORAGE_KEY, JSON.stringify(initialMessages));
    }

    // Register this tab as online
    registerOnlineUser();

    // Listen for storage changes (from other tabs)
    const handleStorageChange = (e: StorageEvent) => {
      if (e.key === STORAGE_KEY && e.newValue) {
        try {
          setMessages(JSON.parse(e.newValue));
        } catch (err) {
          console.error('Failed to parse messages:', err);
        }
      }
      if (e.key === ONLINE_USERS_KEY && e.newValue) {
        try {
          setOnlineUsers(JSON.parse(e.newValue));
        } catch (err) {
          console.error('Failed to parse online users:', err);
        }
      }
    };

    window.addEventListener('storage', handleStorageChange);

    // Heartbeat to keep user online
    const heartbeat = setInterval(() => {
      registerOnlineUser();
    }, 5000);

    // Cleanup on unmount
    return () => {
      window.removeEventListener('storage', handleStorageChange);
      clearInterval(heartbeat);
      unregisterOnlineUser();
    };
  }, []);

  // Save username when changed
  useEffect(() => {
    localStorage.setItem(USERNAME_KEY, username);
    registerOnlineUser();
  }, [username]);

  // Register user as online
  const registerOnlineUser = () => {
    const savedUsers = localStorage.getItem(ONLINE_USERS_KEY);
    let users: { id: string; name: string; lastSeen: number }[] = [];

    if (savedUsers) {
      try {
        users = JSON.parse(savedUsers);
      } catch (e) {
        users = [];
      }
    }

    // Remove stale users (not seen in last 10 seconds)
    const now = Date.now();
    users = users.filter(u => now - u.lastSeen < 10000);

    // Update or add current user
    const existingUserIndex = users.findIndex(u => u.id === userSessionId.current);
    if (existingUserIndex >= 0) {
      users[existingUserIndex] = { id: userSessionId.current, name: username, lastSeen: now };
    } else {
      users.push({ id: userSessionId.current, name: username, lastSeen: now });
    }

    localStorage.setItem(ONLINE_USERS_KEY, JSON.stringify(users));
    setOnlineUsers(users.map(u => u.name));
  };

  // Unregister user when leaving
  const unregisterOnlineUser = () => {
    const savedUsers = localStorage.getItem(ONLINE_USERS_KEY);
    if (savedUsers) {
      try {
        let users: { id: string; name: string; lastSeen: number }[] = JSON.parse(savedUsers);
        users = users.filter(u => u.id !== userSessionId.current);
        localStorage.setItem(ONLINE_USERS_KEY, JSON.stringify(users));
      } catch (e) {
        // Ignore errors during cleanup
      }
    }
  };

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (!message.trim()) return;

    const newMessage: Message = {
      id: Date.now().toString(),
      user: username,
      text: message,
      timestamp: new Date().toLocaleTimeString('en-US', {
        hour: '2-digit',
        minute: '2-digit',
      }),
      color: colors[Math.floor(Math.random() * colors.length)],
    };

    const updatedMessages = [...messages, newMessage];
    setMessages(updatedMessages);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(updatedMessages));
    setMessage('');
  };

  const handleClearChat = () => {
    if (confirm('Are you sure you want to clear all messages? This will affect all open tabs.')) {
      const initialMessages: Message[] = [
        {
          id: '1',
          user: 'System',
          text: 'Chat cleared. Welcome to the Chat Room!',
          timestamp: new Date().toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' }),
          color: 'text-primary-600',
        },
      ];
      setMessages(initialMessages);
      localStorage.setItem(STORAGE_KEY, JSON.stringify(initialMessages));
    }
  };

  return (
    <div className="container-custom py-12">
      {/* Page Header */}
      <div className="text-center mb-12">
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-primary-500 to-primary-700 mb-4">
          <MessageSquare className="w-8 h-8 text-white" />
        </div>
        <h1 className="section-heading">Chat Room</h1>
        <p className="text-gray-600 dark:text-gray-400">
          Real-time chat synchronized across all your browser tabs
        </p>
      </div>

      <div className="grid lg:grid-cols-4 gap-6">
        {/* Sidebar - User List */}
        <div className="lg:col-span-1">
          <div className="card p-6">
            <div className="flex items-center gap-2 mb-4">
              <Users className="text-primary-600 dark:text-primary-400" size={20} />
              <h2 className="font-semibold text-gray-900 dark:text-white">
                Online ({onlineUsers.length})
              </h2>
            </div>

            <div className="space-y-2 mb-6">
              {onlineUsers.length > 0 ? (
                onlineUsers.map((user, index) => (
                  <motion.div
                    key={`${user}-${index}`}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-center gap-2 p-3 bg-gray-50 dark:bg-slate-800 rounded-lg"
                  >
                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                    <User size={16} className="text-gray-600 dark:text-gray-400" />
                    <span className="text-sm text-gray-900 dark:text-white">{user}</span>
                  </motion.div>
                ))
              ) : (
                <p className="text-sm text-gray-500 dark:text-gray-400 text-center py-4">
                  No users online
                </p>
              )}
            </div>

            {/* User Settings */}
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Your Username
              </label>
              <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="input"
                maxLength={20}
                placeholder="Enter your name"
              />
            </div>
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-2 lg:grid-cols-1 gap-4 mt-4">
            <div className="card p-4 text-center">
              <p className="text-xs text-gray-600 dark:text-gray-400 mb-1">Messages</p>
              <p className="text-2xl font-bold text-primary-600 dark:text-primary-400">
                {messages.length}
              </p>
            </div>
            <div className="card p-4 text-center">
              <p className="text-xs text-gray-600 dark:text-gray-400 mb-1">Users</p>
              <p className="text-2xl font-bold text-primary-600 dark:text-primary-400">
                {onlineUsers.length}
              </p>
            </div>
          </div>

          {/* Clear Chat Button */}
          <button
            onClick={handleClearChat}
            className="w-full mt-4 px-4 py-2 text-sm bg-red-50 dark:bg-red-900/20 text-red-600 dark:text-red-400 hover:bg-red-100 dark:hover:bg-red-900/30 rounded-lg transition-colors"
          >
            Clear Chat History
          </button>
        </div>

        {/* Main Chat Area */}
        <div className="lg:col-span-3">
          <div className="card p-6 flex flex-col" style={{ height: '600px' }}>
            {/* Chat Header */}
            <div className="border-b border-gray-200 dark:border-slate-700 pb-4 mb-4">
              <h3 className="font-semibold text-gray-900 dark:text-white flex items-center gap-2">
                <span className="w-3 h-3 bg-green-500 rounded-full"></span>
                General Chat
              </h3>
              <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                Messages are stored locally
              </p>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto mb-4 space-y-3">
              <AnimatePresence>
                {messages.map((msg) => (
                  <motion.div
                    key={msg.id}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    className="flex gap-3"
                  >
                    <div className="w-8 h-8 rounded-full bg-gradient-to-br from-primary-500 to-primary-700 flex items-center justify-center text-white text-xs font-bold flex-shrink-0">
                      {msg.user[0].toUpperCase()}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-baseline gap-2 mb-1">
                        <span className={`font-semibold text-sm ${msg.color}`}>
                          {msg.user}
                        </span>
                        <span className="text-xs text-gray-500 dark:text-gray-400">
                          {msg.timestamp}
                        </span>
                      </div>
                      <p className="text-gray-700 dark:text-gray-300 text-sm">
                        {msg.text}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
              <div ref={messagesEndRef} />
            </div>

            {/* Input Form */}
            <form onSubmit={handleSendMessage} className="flex gap-2">
              <input
                type="text"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Type your message..."
                className="input flex-1"
              />
              <button
                type="submit"
                className="btn-primary px-6 flex items-center gap-2"
              >
                <Send size={18} />
                Send
              </button>
            </form>

            {/* Quick Reactions */}
            <div className="flex flex-wrap gap-2 mt-4 pt-4 border-t border-gray-200 dark:border-slate-700">
              {['👍', '❤️', '😊', '🎉', '🔥', '💯'].map((emoji) => (
                <button
                  key={emoji}
                  onClick={() => setMessage(message + emoji)}
                  className="px-3 py-1 bg-gray-100 dark:bg-slate-800 hover:bg-gray-200 dark:hover:bg-slate-700 rounded-lg text-sm transition-colors"
                >
                  {emoji}
                </button>
              ))}
            </div>
          </div>

          {/* Info Note */}
          <div className="mt-4 p-4 bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg">
            <p className="text-sm text-blue-800 dark:text-blue-300">
              💡 <strong>Multi-Tab Sync Active:</strong> Messages are synchronized in real-time across all your browser tabs! Open this page in multiple tabs to see it in action. Messages are stored locally in your browser.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
