import React, { useState } from 'react';
import { useApp } from '../context';
import { formatTKShort } from '../utils';
import '../styles/profile-premium.css'; 
import { getTierFromXP, getTierProgress, updateUser } from '../database';

const TABS = [
  { id: 'overview', label: 'Overview' },
  { id: 'stats',    label: 'Stats' },
  { id: 'network',  label: 'Network' },
  { id: 'achievements', label: 'Badges' },
  { id: 'quests',   label: 'Quests' },
  { id: 'ad-earnings', label: 'Ad Earnings' },
];

/* ─── SVG Icons ─── */
const IconBack = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="15 18 9 12 15 6"/></svg>
);
const IconSettings = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="3"/>
    <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"/>
  </svg>
);
const IconShare = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8"/><polyline points="16 6 12 2 8 6"/><line x1="12" y1="2" x2="12" y2="15"/></svg>
);
const IconCopy = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/></svg>
);
const IconDeposit = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="5" x2="12" y2="19"/><polyline points="19 12 12 19 5 12"/></svg>
);
const IconWithdraw = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="19" x2="12" y2="5"/><polyline points="5 12 12 5 19 12"/></svg>
);
const IconMore = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="1.5" fill="currentColor"/><circle cx="19" cy="12" r="1.5" fill="currentColor"/><circle cx="5" cy="12" r="1.5" fill="currentColor"/></svg>
);
const IconEdit = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M17 3a2.828 2.828 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z"/></svg>
);
const IconLogout = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/><polyline points="16 17 21 12 16 7"/><line x1="21" y1="12" x2="9" y2="12"/></svg>
);
const IconCheck = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
);
const IconWarning = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>
);
const IconShield = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
);
const IconUsers = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
);

export default function Profile() {
  const { state, dispatch, navigate } = useApp();
  const { currentUser, matches } = state;
  const [activeTab, setActiveTab] = useState('overview');
  const [editing, setEditing] = useState(false);
  const [editName, setEditName] = useState('');
  const [editUsername, setEditUsername] = useState('');
  const [editIgn, setEditIgn] = useState('');
  const [editUid, setEditUid] = useState('');
  const [editPhone, setEditPhone] = useState('');
  const [editEmail, setEditEmail] = useState('');
  const [editTeamName, setEditTeamName] = useState('');
  const [editError, setEditError] = useState('');
  const [saving, setSaving] = useState(false);
  const [copied, setCopied] = useState(false);

  // ═══════ SQUAD EDITOR STATE ═══════
  const [squadEditing, setSquadEditing] = useState(false);
  const [squadForm, setSquadForm] = useState({
    name: '',
    tag: '',
    logo: '',
    members: [
      { name: '', ign: '', role: 'Captain' },
      { name: '', ign: '', role: 'Fragger' },
      { name: '', ign: '', role: 'Support' },
      { name: '', ign: '', role: 'IGL' },
    ]
  });
  const [squadSaving, setSquadSaving] = useState(false);
  const [squadError, setSquadError] = useState('');

  const userSquad = currentUser?.squad || null;
  const SQUAD_ROLES = ['Captain', 'Fragger', 'Support', 'IGL', 'Substitute'];

  if (!currentUser) return null;

  const userXP = currentUser.rank?.xp || currentUser.xp || 0;
  const computedTier = getTierProgress(userXP);
  const tier = computedTier?.current || getTierFromXP(userXP);

  const streak = currentUser.streakData?.current || currentUser.streak || 0;
  const myMatches = matches.filter(m => m.participants?.includes(currentUser.id));
  const winRate = currentUser.rank?.winRate || (currentUser.matchesPlayed > 0 ? Math.round((currentUser.wins / currentUser.matchesPlayed) * 100) : 0);
  const kd = currentUser.matchesPlayed > 0 ? ((currentUser.totalKills || currentUser.kills || 0) / currentUser.matchesPlayed).toFixed(2) : '0.00';

  const handleBack = () => navigate('dashboard');
  const handleSettings = () => navigate('settings');

  const copyUID = () => {
    navigator.clipboard.writeText(currentUser.uid || currentUser.id || '');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const startEdit = () => {
    setEditName(currentUser.displayName || currentUser.name || '');
    setEditUsername(currentUser.username || '');
    setEditIgn(currentUser.ign || '');
    setEditUid(currentUser.uid || '');
    setEditPhone(currentUser.phone || '');
    setEditEmail(currentUser.email || '');
    setEditTeamName(currentUser.teamName || '');
    setEditError('');
    setEditing(true);
  };

  const saveEdit = async () => {
    setEditError('');
    if (!editName.trim()) { setEditError('Display name required'); return; }
    setSaving(true);
    try {
      await updateUser(currentUser.id, {
        name: editName.trim(),
        displayName: editName.trim(),
        username: editUsername.trim().toLowerCase() || currentUser.username,
        ign: editIgn.trim(),
        uid: editUid.trim(),
        phone: editPhone.trim(),
        email: editEmail.trim(),
        teamName: editTeamName.trim(),
      });
      dispatch({
        type: 'UPDATE_PROFILE',
        payload: {
          name: editName.trim(),
          displayName: editName.trim(),
          username: editUsername.trim(),
          ign: editIgn.trim(),
          uid: editUid.trim(),
          phone: editPhone.trim(),
          email: editEmail.trim(),
          teamName: editTeamName.trim(),
        }
      });
      setEditing(false);
    } catch (err) {
      setEditError('Save failed. Please try again.');
    } finally {
      setSaving(false);
    }
  };

  // ═══════ SQUAD EDITOR FUNCTIONS ═══════
  const startSquadEdit = () => {
    if (userSquad) {
      setSquadForm({
        name: userSquad.name || '',
        tag: userSquad.tag || '',
        logo: userSquad.logo || '',
        members: userSquad.members?.length >= 1
          ? [...userSquad.members, ...Array(Math.max(0, 4 - userSquad.members.length)).fill(null).map(() => ({ name: '', ign: '', role: 'Substitute' }))].slice(0, 4)
          : [
            { name: '', ign: '', role: 'Captain' },
            { name: '', ign: '', role: 'Fragger' },
            { name: '', ign: '', role: 'Support' },
            { name: '', ign: '', role: 'IGL' },
          ]
      });
    } else {
      setSquadForm({
        name: currentUser.teamName || '',
        tag: '',
        logo: '',
        members: [
          { name: currentUser.displayName || '', ign: currentUser.ign || '', role: 'Captain' },
          { name: '', ign: '', role: 'Fragger' },
          { name: '', ign: '', role: 'Support' },
          { name: '', ign: '', role: 'IGL' },
        ]
      });
    }
    setSquadError('');
    setSquadEditing(true);
  };

  const saveSquad = async () => {
    setSquadError('');
    if (!squadForm.name.trim()) { setSquadError('Squad name is required'); return; }
    if (!squadForm.tag.trim()) { setSquadError('Squad tag is required'); return; }

    const validMembers = squadForm.members.filter(m => m.name.trim());
    if (validMembers.length < 1) { setSquadError('Add at least one squad member'); return; }

    setSquadSaving(true);
    try {
      const squadData = {
        name: squadForm.name.trim(),
        tag: squadForm.tag.trim().toUpperCase(),
        logo: squadForm.logo.trim(),
        members: squadForm.members.map(m => ({
          name: m.name.trim(),
          ign: m.ign.trim(),
          role: m.role,
        })).filter(m => m.name),
        updatedAt: new Date().toISOString(),
        createdAt: userSquad?.createdAt || new Date().toISOString(),
      };

      await updateUser(currentUser.id, { squad: squadData });
      dispatch({
        type: 'UPDATE_PROFILE',
        payload: { squad: squadData }
      });
      setSquadEditing(false);
    } catch (err) {
      setSquadError('Save failed. Please try again.');
    } finally {
      setSquadSaving(false);
    }
  };

  const updateSquadMember = (index, field, value) => {
    setSquadForm(prev => ({
      ...prev,
      members: prev.members.map((m, i) => i === index ? { ...m, [field]: value } : m)
    }));
  };

  return (
    <div className="profile-premium">
      {/* ═══════ HEADER ═══════ */}
      <header className="p-header">
        <button className="p-header-btn" onClick={handleBack} aria-label="Go Back">
          <IconBack />
        </button>
        <div className="p-header-actions">
          <button className="p-header-btn" onClick={handleSettings} aria-label="Settings">
            <IconSettings />
          </button>
          <button className="p-header-btn" onClick={() => navigator.share?.({ title: 'ZENO Profile', url: window.location.href })} aria-label="Share">
            <IconShare />
          </button>
        </div>
      </header>

      {/* ═══════ AVATAR / HERO ═══════ */}
      <section className="p-hero">
        <div className="p-avatar-wrap">
          <div className="p-avatar-ring" />
          <div className="p-avatar-inner">
            {currentUser.avatar ? (
              <img src={currentUser.avatar} alt="" />
            ) : (
              <div className="p-avatar-fallback" style={{ background: `linear-gradient(135deg, ${tier.color}40, ${tier.color}15)` }}>
                <span style={{ color: tier.color }}>{(currentUser.displayName || '?').charAt(0).toUpperCase()}</span>
              </div>
            )}
          </div>
          <div className="p-online"><div className="p-online-dot" /></div>
        </div>

        <div className="p-name">
          <h1>{currentUser.displayName || currentUser.name || 'Player'}</h1>
          <p className="p-handle">@{currentUser.username || 'user'}</p>
          <div className="p-uid">
            <span className="p-uid-label">UID</span>
            <span className="p-uid-value">{currentUser.uid || currentUser.id?.slice(0, 8) || '4574575'}</span>
            <button className={`p-uid-copy ${copied ? 'copied' : ''}`} onClick={copyUID} aria-label="Copy UID">
              {copied ? <IconCheck /> : <IconCopy />}
            </button>
          </div>
        </div>
      </section>

      {/* ═══════ RANK CARD ═══════ */}
      <div className="p-rank">
        <div className="p-rank-header">
          <div>
            <p className="p-rank-label">Current Rank</p>
            <h2 className="p-rank-title">{tier.name} Tier</h2>
          </div>
          <div className="p-rank-badge">Level {currentUser.level || 12}</div>
        </div>
        <div className="p-rank-labels">
          <span>0 XP</span>
          <span>500 XP</span>
          <span>1000 XP</span>
        </div>
        <div className="p-rank-track">
          <div className="p-rank-milestone" />
          <div className="p-rank-fill" style={{ width: `${computedTier?.percent || 45}%` }} />
        </div>
      </div>

      {/* ═══════ TABS ═══════ */}
      <nav className="p-tabs">
        <div className="p-tabs-list">
          {TABS.map(tab => (
            <button
              key={tab.id}
              className={`p-tab ${activeTab === tab.id ? 'active' : ''}`}
              onClick={() => { setActiveTab(tab.id); setEditing(false); setSquadEditing(false); }}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </nav>

      {/* ═══════ CONTENT PANELS ═══════ */}
      <div className="p-panel">
        {editing ? (
          /* ─── EDIT FORM ─── */
          <div className="p-edit">
            {editError && (
              <div className="p-edit-error">
                <IconWarning /> {editError}
              </div>
            )}
            {[
              { label: 'Display Name *', value: editName, set: setEditName },
              { label: 'Username', value: editUsername, set: setEditUsername },
              { label: 'IGN', value: editIgn, set: setEditIgn },
              { label: 'UID', value: editUid, set: setEditUid },
              { label: 'Phone', value: editPhone, set: setEditPhone, type: 'tel' },
              { label: 'Email', value: editEmail, set: setEditEmail, type: 'email' },
              { label: 'Team', value: editTeamName, set: setEditTeamName },
            ].map((f, i) => (
              <div key={i} className="p-edit-field">
                <label className="p-edit-label">{f.label}</label>
                <input
                  type={f.type || 'text'}
                  className="p-edit-input"
                  value={f.value}
                  onChange={e => { f.set(e.target.value); setEditError(''); }}
                />
              </div>
            ))}
            <div className="p-edit-actions">
              <button className="p-btn p-btn-save" onClick={saveEdit} disabled={saving}>
                {saving ? '⏳ Saving...' : (<><IconCheck /> Save Changes</>)}
              </button>
              <button className="p-btn p-btn-cancel" onClick={() => setEditing(false)}>
                Cancel
              </button>
            </div>
          </div>
        ) : squadEditing ? (
          /* ─── SQUAD EDITOR ─── */
          <div className="p-squad-edit">
            <div className="p-squad-edit-header">
              <IconShield />
              <span>{userSquad ? 'Edit Squad' : 'Create Squad'}</span>
            </div>

            {squadError && (
              <div className="p-edit-error">
                <IconWarning /> {squadError}
              </div>
            )}

            <div className="p-edit-field">
              <label className="p-edit-label">Squad Name *</label>
              <input
                type="text"
                className="p-edit-input"
                value={squadForm.name}
                onChange={e => setSquadForm(p => ({ ...p, name: e.target.value }))}
                placeholder="e.g. Zenith Elite"
              />
            </div>

            <div className="p-edit-field">
              <label className="p-edit-label">Squad Tag * (3-4 letters)</label>
              <input
                type="text"
                className="p-edit-input"
                value={squadForm.tag}
                onChange={e => setSquadForm(p => ({ ...p, tag: e.target.value.slice(0, 4) }))}
                placeholder="e.g. ZEN"
                maxLength={4}
                style={{ textTransform: 'uppercase' }}
              />
            </div>

            <div className="p-edit-field">
              <label className="p-edit-label">Squad Logo URL</label>
              <input
                type="text"
                className="p-edit-input"
                value={squadForm.logo}
                onChange={e => setSquadForm(p => ({ ...p, logo: e.target.value }))}
                placeholder="https://... (optional)"
              />
            </div>

            <div className="p-squad-members-label">
              <IconUsers /> Squad Roster (4 Members)
            </div>

            {squadForm.members.map((member, i) => (
              <div key={i} className="p-squad-member-row">
                <div className="p-squad-member-index">{i + 1}</div>
                <div className="p-squad-member-fields">
                  <input
                    type="text"
                    className="p-edit-input p-squad-input"
                    value={member.name}
                    onChange={e => updateSquadMember(i, 'name', e.target.value)}
                    placeholder="Player Name"
                  />
                  <input
                    type="text"
                    className="p-edit-input p-squad-input"
                    value={member.ign}
                    onChange={e => updateSquadMember(i, 'ign', e.target.value)}
                    placeholder="In-Game Name"
                  />
                  <select
                    className="p-edit-input p-squad-select"
                    value={member.role}
                    onChange={e => updateSquadMember(i, 'role', e.target.value)}
                  >
                    {SQUAD_ROLES.map(role => (
                      <option key={role} value={role}>{role}</option>
                    ))}
                  </select>
                </div>
              </div>
            ))}

            <div className="p-edit-actions">
              <button className="p-btn p-btn-save" onClick={saveSquad} disabled={squadSaving}>
                {squadSaving ? '⏳ Saving...' : (<><IconCheck /> Save Squad</>)}
              </button>
              <button className="p-btn p-btn-cancel" onClick={() => setSquadEditing(false)}>
                Cancel
              </button>
            </div>
          </div>
        ) : (
          <>
            {/* ─── OVERVIEW ─── */}
            {activeTab === 'overview' && (
              <>
                {/* V6.0: SQUAD CARD */}
                {userSquad && (
                  <div className="p-squad-card">
                    <div className="p-squad-card-header">
                      <div className="p-squad-logo">
                        {userSquad.logo ? (
                          <img src={userSquad.logo} alt={userSquad.name} />
                        ) : (
                          <div className="p-squad-logo-fallback">
                            <span>{(userSquad.name || '?').charAt(0)}</span>
                          </div>
                        )}
                      </div>
                      <div className="p-squad-info">
                        <div className="p-squad-name">{userSquad.name}</div>
                        <div className="p-squad-tag">[{userSquad.tag}]</div>
                        <div className="p-squad-roster">
                          {userSquad.members?.map((m, i) => (
                            <span key={i} className="p-squad-roster-member">
                              {m.ign || m.name} <small>({m.role})</small>
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                <div className="p-balance">
                  <p className="p-balance-label">Total Balance</p>
                  <div className="p-balance-row">
                    <span className="p-balance-num">{currentUser.balance || 0}</span>
                    <span className="p-balance-unit">TK</span>
                  </div>
                  <div className="p-balance-actions">
                    <button className="p-btn p-btn-deposit" onClick={() => navigate('wallet')}>
                      <IconDeposit /> Deposit
                    </button>
                    <button className="p-btn p-btn-withdraw" onClick={() => navigate('wallet')}>
                      <IconWithdraw /> Withdraw
                    </button>
                    <button className="p-btn p-btn-more" aria-label="More">
                      <IconMore />
                    </button>
                  </div>
                </div>

                <div className="p-stats">
                  <div className="p-stat">
                    <p className="p-stat-label">Win Rate</p>
                    <p className="p-stat-value">{winRate}<span className="p-stat-suffix">%</span></p>
                  </div>
                  <div className="p-stat">
                    <p className="p-stat-label">Matches</p>
                    <p className="p-stat-value">{currentUser.matchesPlayed || 0}</p>
                  </div>
                  <div className="p-stat">
                    <p className="p-stat-label">K/D Ratio</p>
                    <p className="p-stat-value">{kd}</p>
                  </div>
                  <div className="p-stat">
                    <p className="p-stat-label">Streak</p>
                    <p className="p-stat-value accent">{streak}<span className="p-stat-suffix">d</span></p>
                  </div>
                </div>

                <div className="p-actions-stack">
                  <button className="p-btn p-btn-edit" onClick={startEdit}>
                    <IconEdit /> Edit Profile
                  </button>
                  <button className="p-btn p-btn-squad" onClick={startSquadEdit}>
                    <IconShield /> {userSquad ? 'Edit Squad' : 'Create Squad'}
                  </button>
                  <button className="p-btn p-btn-settings" onClick={() => navigate('settings')}>
                    <IconSettings /> Settings
                  </button>
                  <button className="p-btn p-btn-logout" onClick={() => dispatch({ type: 'LOGOUT' })}>
                    <IconLogout /> Logout
                  </button>
                </div>
              </>
            )}

            {/* ─── STATS / MATCH HISTORY ─── */}
            {activeTab === 'stats' && (
              <div className="p-card">
                <p className="p-card-title">Match History ({myMatches.length})</p>
                {myMatches.length === 0 ? (
                  <div className="p-empty">No matches yet</div>
                ) : (
                  myMatches.slice(0, 5).map(m => (
                    <div key={m.id} className="p-match-item" onClick={() => navigate(`match-detail/${m.id}`)}>
                      <div className={`p-match-dot ${m.status}`} />
                      <div className="p-match-info">
                        <div className="p-match-title">{m.title}</div>
                        <div className="p-match-meta">{m.mode} • {m.status}</div>
                      </div>
                      <span className="p-match-status">{m.status}</span>
                    </div>
                  ))
                )}
              </div>
            )}

            {/* ─── QUESTS ─── */}
            {activeTab === 'quests' && (
              <div className="p-card">
                <p className="p-card-title">Daily Quests</p>
                <div className="p-empty">Coming soon</div>
              </div>
            )}

            {/* ─── NETWORK / REFERRAL ─── */}
            {activeTab === 'network' && (
              <div className="p-card">
                <p className="p-card-title">Referral Program</p>
                <div className="p-ref-code">
                  <span className="p-ref-code-value">{currentUser.referralCode || 'N/A'}</span>
                  <button className="p-ref-copy" onClick={() => navigator.clipboard.writeText(currentUser.referralCode || '')}>
                    <IconCopy /> Copy
                  </button>
                </div>
              </div>
            )}

            {/* ─── ACHIEVEMENTS ─── */}
            {activeTab === 'achievements' && (
              <div className="p-card">
                <p className="p-card-title">Badges</p>
                <div className="p-empty">Complete challenges to unlock</div>
              </div>
            )}

            {/* ─── AD EARNINGS ─── */}
            {activeTab === 'ad-earnings' && (
              <div className="p-card">
                <p className="p-card-title">Ad Earnings</p>
                <div className="p-card-grid-2">
                  <div className="p-card-cell">
                    <div className="p-card-cell-value" style={{ color: '#4ade80' }}>
                      {formatTKShort(currentUser.totalAdRewards || 0)}
                    </div>
                    <div className="p-card-cell-label">Total Earned</div>
                  </div>
                  <div className="p-card-cell">
                    <div className="p-card-cell-value">{currentUser.adStats?.totalWatched || 0}</div>
                    <div className="p-card-cell-label">Ads Watched</div>
                  </div>
                </div>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
}