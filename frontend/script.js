/* =========================================
   EduTrack - styles.css
   ========================================= */

/* ---------- RESET & BASE ---------- */
*, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

:root {
  --bg: #0d0f14;
  --surface: #13161e;
  --surface2: #1a1e28;
  --border: #252a38;
  --accent: #4f7cff;
  --accent2: #00e5c3;
  --text: #e8eaf0;
  --text-muted: #6b7280;
  --danger: #ff4d4d;
  --success: #22c55e;
  --warning: #f59e0b;
  --sidebar-w: 230px;
  --radius: 10px;
  --font-head: 'Syne', sans-serif;
  --font-body: 'DM Sans', sans-serif;
  --shadow: 0 4px 24px rgba(0,0,0,0.4);
}

html { font-size: 15px; }

body {
  font-family: var(--font-body);
  background: var(--bg);
  color: var(--text);
  min-height: 100vh;
  line-height: 1.6;
}

a { color: var(--accent); text-decoration: none; }
a:hover { text-decoration: underline; }

/* ---------- AUTH PAGES ---------- */
.auth-page { display: flex; min-height: 100vh; }

.auth-split {
  display: flex;
  width: 100%;
  min-height: 100vh;
}

.auth-brand {
  flex: 1;
  background: linear-gradient(135deg, #0a0c12 0%, #101420 50%, #0d1426 100%);
  display: flex;
  align-items: center;
  padding: 3rem;
  position: relative;
  overflow: hidden;
}

.auth-brand::before {
  content: '';
  position: absolute;
  top: -30%;
  left: -20%;
  width: 500px; height: 500px;
  background: radial-gradient(circle, rgba(79,124,255,0.15) 0%, transparent 70%);
  border-radius: 50%;
}

.auth-brand::after {
  content: '';
  position: absolute;
  bottom: -20%;
  right: -10%;
  width: 400px; height: 400px;
  background: radial-gradient(circle, rgba(0,229,195,0.1) 0%, transparent 70%);
  border-radius: 50%;
}

.brand-content { position: relative; z-index: 1; max-width: 420px; }

.brand-logo {
  font-family: var(--font-head);
  font-size: 1.4rem;
  font-weight: 800;
  letter-spacing: 0.08em;
  color: var(--text-muted);
  margin-bottom: 2.5rem;
}
.brand-logo span { color: var(--accent); }

.brand-content h1 {
  font-family: var(--font-head);
  font-size: 2.6rem;
  font-weight: 800;
  line-height: 1.15;
  color: var(--text);
  margin-bottom: 1rem;
}

.brand-content p {
  color: var(--text-muted);
  font-size: 1rem;
  margin-bottom: 2rem;
}

.brand-features { display: flex; flex-direction: column; gap: 0.75rem; }

.feat {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  font-size: 0.9rem;
  color: #a0aec0;
}

.feat-icon {
  background: var(--surface2);
  border: 1px solid var(--border);
  border-radius: 8px;
  width: 34px; height: 34px;
  display: flex; align-items: center; justify-content: center;
  font-size: 1rem;
}

.auth-form-side {
  width: 460px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem;
  background: var(--bg);
}

.auth-card {
  width: 100%;
  max-width: 380px;
}

.auth-card h2 {
  font-family: var(--font-head);
  font-size: 1.9rem;
  font-weight: 700;
  color: var(--text);
  margin-bottom: 0.3rem;
}

.auth-sub { color: var(--text-muted); font-size: 0.9rem; margin-bottom: 2rem; }

.auth-switch {
  text-align: center;
  font-size: 0.88rem;
  color: var(--text-muted);
  margin-top: 1.5rem;
}

/* ---------- FORMS ---------- */
.form-group { margin-bottom: 1.1rem; }
.form-group label {
  display: block;
  font-size: 0.82rem;
  font-weight: 500;
  color: var(--text-muted);
  text-transform: uppercase;
  letter-spacing: 0.05em;
  margin-bottom: 0.4rem;
}
.form-group input, .form-group select, .form-group textarea {
  width: 100%;
  background: var(--surface);
  border: 1.5px solid var(--border);
  color: var(--text);
  padding: 0.65rem 0.9rem;
  border-radius: var(--radius);
  font-family: var(--font-body);
  font-size: 0.9rem;
  transition: border-color 0.2s;
  outline: none;
}
.form-group input:focus, .form-group select:focus {
  border-color: var(--accent);
}
.form-group input::placeholder { color: var(--text-muted); }

.form-row { display: grid; grid-template-columns: 1fr 1fr; gap: 1rem; }

.field-error {
  display: block;
  font-size: 0.78rem;
  color: var(--danger);
  margin-top: 0.25rem;
  min-height: 1em;
}

/* ---------- BUTTONS ---------- */
.btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.4rem;
  padding: 0.65rem 1.4rem;
  border-radius: var(--radius);
  font-family: var(--font-body);
  font-size: 0.9rem;
  font-weight: 500;
  cursor: pointer;
  border: none;
  transition: all 0.2s;
  text-decoration: none;
}
.btn-primary {
  background: var(--accent);
  color: #fff;
}
.btn-primary:hover { background: #3d6aee; text-decoration: none; color: #fff; }
.btn-secondary {
  background: var(--surface2);
  color: var(--text);
  border: 1px solid var(--border);
}
.btn-secondary:hover { background: var(--border); text-decoration: none; }
.btn-danger {
  background: var(--danger);
  color: #fff;
}
.btn-danger:hover { background: #e03434; }
.btn-full { width: 100%; }
.btn-loader { animation: pulse 1s infinite; }
@keyframes pulse { 0%,100%{opacity:1} 50%{opacity:0.4} }

.btn-logout {
  background: none;
  border: 1px solid var(--border);
  color: var(--text-muted);
  padding: 0.35rem 0.8rem;
  border-radius: 6px;
  cursor: pointer;
  font-size: 0.8rem;
  font-family: var(--font-body);
  transition: all 0.2s;
}
.btn-logout:hover { color: var(--danger); border-color: var(--danger); }

/* ---------- ALERTS ---------- */
.alert {
  padding: 0.75rem 1rem;
  border-radius: var(--radius);
  font-size: 0.88rem;
  margin-bottom: 1rem;
}
.alert-error { background: rgba(255,77,77,0.15); border: 1px solid rgba(255,77,77,0.35); color: #ff8080; }
.alert-success { background: rgba(34,197,94,0.15); border: 1px solid rgba(34,197,94,0.35); color: #4ade80; }
.hidden { display: none !important; }

/* ---------- APP LAYOUT ---------- */
.app-page { display: flex; min-height: 100vh; }

.sidebar {
  width: var(--sidebar-w);
  background: var(--surface);
  border-right: 1px solid var(--border);
  display: flex;
  flex-direction: column;
  position: fixed;
  height: 100vh;
  left: 0; top: 0;
  z-index: 100;
}

.sidebar-logo {
  font-family: var(--font-head);
  font-size: 1.1rem;
  font-weight: 800;
  letter-spacing: 0.08em;
  color: var(--text-muted);
  padding: 1.5rem 1.4rem;
  border-bottom: 1px solid var(--border);
}
.sidebar-logo span { color: var(--accent); }

.sidebar-nav {
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 1rem 0.75rem;
  gap: 0.3rem;
}

.nav-item {
  display: flex;
  align-items: center;
  gap: 0.7rem;
  padding: 0.65rem 0.85rem;
  border-radius: 8px;
  color: var(--text-muted);
  font-size: 0.9rem;
  font-weight: 500;
  transition: all 0.15s;
  text-decoration: none;
}
.nav-item:hover { background: var(--surface2); color: var(--text); text-decoration: none; }
.nav-item.active { background: rgba(79,124,255,0.15); color: var(--accent); }

.nav-icon { font-size: 1rem; width: 20px; text-align: center; }

.sidebar-footer {
  padding: 1rem 1.2rem;
  border-top: 1px solid var(--border);
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}
.sidebar-user { font-size: 0.78rem; color: var(--text-muted); word-break: break-all; }

.main-content {
  margin-left: var(--sidebar-w);
  flex: 1;
  padding: 2rem 2.5rem;
  max-width: calc(100vw - var(--sidebar-w));
}

.page-header {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  margin-bottom: 2rem;
}
.page-title {
  font-family: var(--font-head);
  font-size: 1.9rem;
  font-weight: 700;
  color: var(--text);
}
.page-sub { color: var(--text-muted); font-size: 0.9rem; margin-top: 0.15rem; }

/* ---------- CARDS ---------- */
.card {
  background: var(--surface);
  border: 1px solid var(--border);
  border-radius: 12px;
  padding: 1.5rem;
}
.card-title {
  font-family: var(--font-head);
  font-size: 1rem;
  font-weight: 700;
  color: var(--text);
  margin-bottom: 1rem;
}
.card-desc { font-size: 0.88rem; color: var(--text-muted); margin-bottom: 1.2rem; }
.mt-1 { margin-top: 1rem; }
.mt-2 { margin-top: 1.5rem; }

/* ---------- DASHBOARD STATS ---------- */
.stats-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1rem;
  margin-bottom: 1.5rem;
}

.stat-card {
  background: var(--surface);
  border: 1px solid var(--border);
  border-radius: 12px;
  padding: 1.4rem;
  position: relative;
  overflow: hidden;
}

.stat-card--accent {
  border-color: rgba(79,124,255,0.4);
  background: rgba(79,124,255,0.07);
}

.stat-label {
  font-size: 0.78rem;
  text-transform: uppercase;
  letter-spacing: 0.06em;
  color: var(--text-muted);
  margin-bottom: 0.5rem;
}

.stat-value {
  font-family: var(--font-head);
  font-size: 2.2rem;
  font-weight: 800;
  color: var(--text);
  line-height: 1;
}

.stat-icon {
  position: absolute;
  top: 1rem; right: 1rem;
  font-size: 1.4rem;
  opacity: 0.5;
}

.dashboard-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
  margin-bottom: 1.5rem;
}

.dept-list { display: flex; flex-direction: column; gap: 0.7rem; }

.dept-row {
  display: flex;
  align-items: center;
  gap: 0.8rem;
  font-size: 0.88rem;
}
.dept-name { width: 140px; color: var(--text); white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }
.dept-bar-wrap { flex: 1; background: var(--surface2); border-radius: 4px; height: 6px; }
.dept-bar { height: 100%; background: var(--accent); border-radius: 4px; min-width: 8px; transition: width 0.4s; }
.dept-count { color: var(--text-muted); font-size: 0.82rem; min-width: 24px; text-align: right; }

.quick-actions { display: flex; flex-direction: column; gap: 0.75rem; }
.qa-btn {
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 0.9rem 1rem;
  border-radius: 8px;
  background: var(--surface2);
  border: 1px solid var(--border);
  color: var(--text);
  text-decoration: none;
  transition: all 0.15s;
}
.qa-btn:hover { background: var(--border); border-color: var(--accent); text-decoration: none; }
.qa-btn span { font-size: 1.4rem; }
.qa-btn strong { display: block; font-size: 0.9rem; }
.qa-btn small { font-size: 0.78rem; color: var(--text-muted); }

/* ---------- TABLE ---------- */
.table-wrap { overflow-x: auto; }
.data-table {
  width: 100%;
  border-collapse: collapse;
  font-size: 0.88rem;
}
.data-table th {
  text-align: left;
  padding: 0.7rem 1rem;
  font-size: 0.76rem;
  text-transform: uppercase;
  letter-spacing: 0.06em;
  color: var(--text-muted);
  border-bottom: 1px solid var(--border);
  font-family: var(--font-head);
}
.data-table td {
  padding: 0.8rem 1rem;
  border-bottom: 1px solid rgba(37,42,56,0.6);
  color: var(--text);
  vertical-align: middle;
}
.data-table tr:last-child td { border-bottom: none; }
.data-table tr:hover td { background: rgba(255,255,255,0.02); }

.badge {
  background: rgba(79,124,255,0.15);
  color: var(--accent);
  border: 1px solid rgba(79,124,255,0.3);
  padding: 0.2rem 0.55rem;
  border-radius: 5px;
  font-size: 0.78rem;
  font-family: monospace;
  font-weight: 600;
}

.grade-badge {
  background: rgba(0,229,195,0.12);
  color: var(--accent2);
  border: 1px solid rgba(0,229,195,0.3);
  padding: 0.2rem 0.55rem;
  border-radius: 5px;
  font-size: 0.82rem;
  font-weight: 600;
}

.loading-text { text-align: center; color: var(--text-muted); padding: 2rem; font-size: 0.88rem; }
.empty-msg { text-align: center; color: var(--text-muted); padding: 2rem; font-style: italic; }

/* ---------- SEARCH ---------- */
.search-bar {
  position: relative;
  margin-bottom: 1.2rem;
  max-width: 420px;
}
.search-bar input {
  width: 100%;
  background: var(--surface);
  border: 1.5px solid var(--border);
  color: var(--text);
  padding: 0.65rem 0.9rem 0.65rem 2.5rem;
  border-radius: var(--radius);
  font-family: var(--font-body);
  font-size: 0.9rem;
  outline: none;
  transition: border-color 0.2s;
}
.search-bar input:focus { border-color: var(--accent); }
.search-icon {
  position: absolute;
  left: 0.8rem;
  top: 50%;
  transform: translateY(-50%);
  color: var(--text-muted);
  font-size: 0.9rem;
  pointer-events: none;
}

/* ---------- ACTION BUTTONS ---------- */
.btn-action {
  padding: 0.3rem 0.75rem;
  border-radius: 6px;
  font-size: 0.78rem;
  font-family: var(--font-body);
  cursor: pointer;
  border: 1px solid;
  margin-right: 0.4rem;
  transition: all 0.15s;
}
.btn-edit {
  background: rgba(79,124,255,0.1);
  border-color: rgba(79,124,255,0.4);
  color: var(--accent);
}
.btn-edit:hover { background: rgba(79,124,255,0.2); }
.btn-del {
  background: rgba(255,77,77,0.1);
  border-color: rgba(255,77,77,0.4);
  color: var(--danger);
}
.btn-del:hover { background: rgba(255,77,77,0.2); }

/* ---------- MODALS ---------- */
.modal-overlay {
  position: fixed;
  inset: 0;
  background: rgba(0,0,0,0.7);
  backdrop-filter: blur(4px);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 200;
  padding: 1rem;
}

.modal {
  background: var(--surface);
  border: 1px solid var(--border);
  border-radius: 14px;
  width: 100%;
  max-width: 560px;
  max-height: 90vh;
  overflow-y: auto;
  box-shadow: var(--shadow);
}
.modal--sm { max-width: 380px; padding: 1.5rem; }

.modal-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1.3rem 1.5rem;
  border-bottom: 1px solid var(--border);
}
.modal-header h3 {
  font-family: var(--font-head);
  font-size: 1.1rem;
  font-weight: 700;
}
.modal-close {
  background: none;
  border: none;
  color: var(--text-muted);
  cursor: pointer;
  font-size: 1.1rem;
  padding: 0.2rem 0.4rem;
  border-radius: 4px;
  transition: color 0.15s;
}
.modal-close:hover { color: var(--text); }

.modal form { padding: 1.5rem; }
.modal-footer {
  display: flex;
  gap: 0.75rem;
  justify-content: flex-end;
  padding-top: 1rem;
}

/* ---------- UPLOAD PAGE ---------- */
.upload-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1.5rem;
}

.drop-zone {
  border: 2px dashed var(--border);
  border-radius: 12px;
  padding: 2.5rem 2rem;
  text-align: center;
  cursor: pointer;
  transition: all 0.2s;
  user-select: none;
}
.drop-zone:hover {
  border-color: var(--accent);
  background: rgba(79,124,255,0.05);
}
.drop-zone.drag-over {
  border-color: var(--accent);
  background: rgba(79,124,255,0.07);
}
.drop-icon { font-size: 2.5rem; margin-bottom: 0.75rem; }
.drop-text { font-size: 0.95rem; font-weight: 500; color: var(--text); margin-bottom: 0.3rem; }
.drop-sub { font-size: 0.82rem; color: var(--text-muted); margin-bottom: 0.75rem; }

.file-queue { margin-top: 1.5rem; }
.file-queue h4 {
  font-size: 0.82rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.06em;
  color: var(--text-muted);
  margin-bottom: 0.75rem;
}

.file-item {
  display: flex;
  align-items: center;
  gap: 0.6rem;
  padding: 0.65rem 0.9rem;
  background: var(--surface2);
  border: 1px solid var(--border);
  border-radius: 8px;
  margin-bottom: 0.5rem;
  font-size: 0.85rem;
}
.file-icon { font-size: 1rem; }
.file-name { flex: 1; color: var(--text); overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }
.file-size { color: var(--text-muted); font-size: 0.78rem; }
.file-status { font-size: 0.78rem; font-weight: 600; min-width: 70px; text-align: right; color: var(--text-muted); }
.status-success { color: var(--success); }
.status-error { color: var(--danger); }
.status-pending { color: var(--warning); }

.file-remove {
  background: none;
  border: none;
  color: var(--text-muted);
  cursor: pointer;
  font-size: 0.85rem;
  padding: 0 0.2rem;
  transition: color 0.15s;
}
.file-remove:hover { color: var(--danger); }

.upload-actions {
  display: flex;
  gap: 0.75rem;
  justify-content: flex-end;
  margin-top: 1rem;
}

.csv-format {
  background: var(--bg);
  border: 1px solid var(--border);
  border-radius: 8px;
  overflow: hidden;
  font-size: 0.78rem;
  font-family: monospace;
  margin-bottom: 1.2rem;
}
.csv-header-row, .csv-example-row {
  display: flex;
  gap: 0;
}
.csv-header-row { background: var(--surface2); }
.csv-header-row span, .csv-example-row span {
  flex: 1;
  padding: 0.45rem 0.5rem;
  border-right: 1px solid var(--border);
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.csv-header-row span { color: var(--accent); font-weight: 700; }
.csv-example-row span { color: var(--text-muted); }
.csv-header-row span:last-child, .csv-example-row span:last-child { border-right: none; }

.format-rules { display: flex; flex-direction: column; gap: 0.4rem; }
.rule { font-size: 0.82rem; color: var(--text-muted); }

.result-item {
  padding: 0.75rem 1rem;
  border-radius: 8px;
  font-size: 0.88rem;
  margin-bottom: 0.5rem;
}
.result-success { background: rgba(34,197,94,0.1); border: 1px solid rgba(34,197,94,0.3); color: #4ade80; }
.result-error { background: rgba(255,77,77,0.1); border: 1px solid rgba(255,77,77,0.3); color: #ff8080; }
.result-item ul { margin: 0.4rem 0 0 1.2rem; font-size: 0.82rem; }
.result-item li { margin-bottom: 0.2rem; }

/* ---------- RESPONSIVE ---------- */
@media (max-width: 900px) {
  .auth-brand { display: none; }
  .auth-form-side { width: 100%; }
  .stats-grid { grid-template-columns: 1fr 1fr; }
  .dashboard-grid, .upload-grid { grid-template-columns: 1fr; }
  .main-content { padding: 1.5rem; }
}
@media (max-width: 640px) {
  .sidebar { transform: translateX(-100%); }
  .main-content { margin-left: 0; }
  .stats-grid { grid-template-columns: 1fr; }
}
