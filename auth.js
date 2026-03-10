// ── EduAI Auth System ──
// localStorage-based authentication shared across all pages

const AUTH_KEY = 'eduai_user';
const USERS_KEY = 'eduai_users';

// Seed default accounts on first load
(function seedDefaults() {
  const existing = getUsers();
  if (!existing.find(u => u.email === 'admin@eduai.com')) {
    saveUser({
      id: 'USR001',
      name: 'Admin User',
      email: 'admin@eduai.com',
      password: 'admin123',
      role: 'Administrator',
      avatar: 'A',
      createdAt: new Date().toISOString()
    });
  }
  if (!existing.find(u => u.email === 'teacher@eduai.com')) {
    saveUser({
      id: 'USR002',
      name: 'Dr. Priya Menon',
      email: 'teacher@eduai.com',
      password: 'teacher123',
      role: 'Educator',
      avatar: 'P',
      createdAt: new Date().toISOString()
    });
  }
})();

function getUsers() {
  try { return JSON.parse(localStorage.getItem(USERS_KEY)) || []; }
  catch { return []; }
}

function saveUser(user) {
  const users = getUsers();
  users.push(user);
  localStorage.setItem(USERS_KEY, JSON.stringify(users));
}

function getCurrentUser() {
  try { return JSON.parse(localStorage.getItem(AUTH_KEY)); }
  catch { return null; }
}

function setCurrentUser(user) {
  // Don't store password in session
  const { password, ...safe } = user;
  localStorage.setItem(AUTH_KEY, JSON.stringify(safe));
}

function logout() {
  localStorage.removeItem(AUTH_KEY);
  window.location.href = 'login.html';
}

function requireAuth() {
  const user = getCurrentUser();
  if (!user) {
    window.location.href = 'login.html';
    return null;
  }
  return user;
}

function login(email, password) {
  const users = getUsers();
  const user = users.find(u =>
    u.email.toLowerCase() === email.toLowerCase() && u.password === password
  );
  if (user) {
    setCurrentUser(user);
    return { success: true, user };
  }
  return { success: false, error: 'Invalid email or password.' };
}

function register(name, email, password, role) {
  const users = getUsers();
  if (users.find(u => u.email.toLowerCase() === email.toLowerCase())) {
    return { success: false, error: 'An account with this email already exists.' };
  }
  const newUser = {
    id: 'USR' + String(users.length + 1).padStart(3, '0'),
    name: name.trim(),
    email: email.trim().toLowerCase(),
    password,
    role: role || 'Educator',
    avatar: name.trim()[0].toUpperCase(),
    createdAt: new Date().toISOString()
  };
  saveUser(newUser);
  setCurrentUser(newUser);
  return { success: true, user: newUser };
}

// Inject user info into sidebar on dashboard pages
function injectUserIntoSidebar() {
  const user = requireAuth();
  if (!user) return;

  const sidebar = document.getElementById('sidebar');
  if (!sidebar) return;

  // Add user card at bottom of sidebar
  const footer = sidebar.querySelector('.sidebar-stats');
  if (footer) {
    const userCard = document.createElement('div');
    userCard.id = 'sidebarUserCard';
    userCard.style.cssText = `
      padding: 12px 16px;
      border-top: 1px solid rgba(99,179,237,0.1);
      display: flex; align-items: center; gap: 10px;
      margin-top: auto;
    `;
    userCard.innerHTML = `
      <div style="
        width:34px;height:34px;border-radius:9px;
        background:linear-gradient(135deg,#22d3ee,#3b82f6);
        display:flex;align-items:center;justify-content:center;
        font-weight:800;font-size:14px;color:white;flex-shrink:0;
      ">${user.avatar || user.name[0]}</div>
      <div style="flex:1;min-width:0;">
        <div style="font-size:12px;font-weight:700;color:#e2e8f0;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;">${user.name}</div>
        <div style="font-size:10px;color:#64748b;font-family:'IBM Plex Mono',monospace;">${user.role}</div>
      </div>
      <button onclick="logout()" title="Sign Out" style="
        background:none;border:none;cursor:pointer;
        color:#64748b;font-size:16px;padding:4px;border-radius:6px;
        transition:all 0.2s;flex-shrink:0;
      " onmouseover="this.style.color='#f87171'" onmouseout="this.style.color='#64748b'">⏻</button>
    `;
    sidebar.insertBefore(userCard, footer);
  }
}
