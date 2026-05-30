import { useState } from 'react'
import { useApp } from '../context'
import { auth, db } from '../firebase'
import { doc, setDoc } from 'firebase/firestore'
import { showToast } from '../utils'

/**
 * AdminRoleButton
 * 
 * Floating action button that grants admin role to the current user.
 * - Gets current Firebase authenticated user
 * - Updates their /users/{uid} document with role: "admin"
 * - Uses merge: true to preserve existing data
 * - Shows success/error status via Toast notifications
 * - Displays as a floating red button in bottom-right corner
 */
export default function AdminRoleButton() {
  const { dispatch } = useApp()
  const [loading, setLoading] = useState(false)

  const handleGrantAdminRole = async () => {
    // Get current user from Firebase Auth
    const currentUser = auth.currentUser
    
    if (!currentUser) {
      showToast(dispatch, '❌ No user logged in', 'error')
      return
    }

    setLoading(true)
    
    try {
      // Reference to user document in Firestore
      const userRef = doc(db, 'users', currentUser.uid)
      
      // Update with merge: true to preserve existing data
      await setDoc(userRef, {
        role: 'admin',
        adminGrantedAt: new Date().toISOString(),
      }, { merge: true })

      showToast(dispatch, `✅ Admin role granted to ${currentUser.email || currentUser.uid}`, 'success')
    } catch (error) {
      console.error('Error granting admin role:', error)
      
      // Handle specific error cases
      if (error.code === 'not-found') {
        showToast(dispatch, '❌ User document not found', 'error')
      } else if (error.code === 'permission-denied') {
        showToast(dispatch, '❌ Permission denied - check Firestore rules', 'error')
      } else {
        showToast(dispatch, `❌ Error: ${error.message || 'Failed to grant admin role'}`, 'error')
      }
    } finally {
      setLoading(false)
    }
  }

  return (
    <>
      <button
        onClick={handleGrantAdminRole}
        disabled={loading}
        title="Grant admin role to current user"
        className={`admin-role-btn ${loading ? 'admin-role-btn--loading' : ''}`}
      >
        {loading ? (
          <i className="fa-solid fa-spinner admin-role-btn__spinner" />
        ) : (
          <i className="fa-solid fa-crown" />
        )}
      </button>
      <style>{`
        .admin-role-btn {
          position: fixed;
          bottom: 24px;
          right: 24px;
          width: 56px;
          height: 56px;
          border-radius: 50%;
          background-color: #dc2626;
          color: white;
          border: none;
          cursor: pointer;
          font-size: 24px;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 4px 12px rgba(220, 38, 38, 0.3);
          z-index: 999;
          transition: all 0.3s ease;
          padding: 0;
        }

        .admin-role-btn:hover:not(:disabled) {
          background-color: #b91c1c;
          transform: scale(1.1);
          box-shadow: 0 6px 16px rgba(220, 38, 38, 0.4);
        }

        .admin-role-btn:active:not(:disabled) {
          transform: scale(0.95);
        }

        .admin-role-btn--loading {
          opacity: 0.7;
          cursor: not-allowed;
          background-color: #c2410c;
        }

        .admin-role-btn__spinner {
          display: inline-block;
          animation: spin 1s linear infinite;
        }

        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
      `}</style>
    </>
  )
}
