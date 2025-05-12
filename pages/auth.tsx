import { useState } from 'react';
import { useRouter } from 'next/router';

export default function Auth() {
  const [isLogin, setIsLogin] = useState(true);
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [remember, setRemember] = useState(false);
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (isLogin) {
      // Demo login
      localStorage.setItem('isAuthenticated', 'true');
      router.push('/');
    } else {
      // Demo signup
      if (password === confirmPassword) {
        localStorage.setItem('isAuthenticated', 'true');
        router.push('/');
      } else {
        alert('Passwords do not match');
      }
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-pink-500 via-purple-500 to-blue-500">
      <div className="bg-white p-10 rounded-xl shadow-lg w-full max-w-md">
        <h1 className="text-3xl font-bold mb-8 text-center">{isLogin ? 'LOGIN' : 'SIGN UP'}</h1>
        <form onSubmit={handleSubmit}>
          {!isLogin && (
            <div className="mb-4 relative">
              <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">
                {/* User icon */}
                <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </span>
              <input
                className="pl-10 pr-4 py-3 w-full border rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-400 bg-white text-gray-800"
                id="fullName"
                type="text"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                placeholder="Full Name"
                required={!isLogin}
              />
            </div>
          )}
          <div className="mb-4 relative">
            <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">
              {/* Email icon */}
              <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M4 4h16v16H4z" stroke="none"/><rect x="4" y="4" width="16" height="16" rx="2"/><path d="M4 8l8 5 8-5"/></svg>
            </span>
            <input
              className="pl-10 pr-4 py-3 w-full border rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-400 bg-white text-gray-800"
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email"
              required
            />
          </div>
          <div className="mb-4 relative">
            <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">
              {/* Password icon */}
              <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><rect x="4" y="11" width="16" height="9" rx="2"/><path d="M8 11V7a4 4 0 1 1 8 0v4"/></svg>
            </span>
            <input
              className="pl-10 pr-4 py-3 w-full border rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-400 bg-white text-gray-800"
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
              required
            />
          </div>
          {!isLogin && (
            <div className="mb-6 relative">
              <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">
                {/* Password icon */}
                <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><rect x="4" y="11" width="16" height="9" rx="2"/><path d="M8 11V7a4 4 0 1 1 8 0v4"/></svg>
              </span>
              <input
                className="pl-10 pr-4 py-3 w-full border rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-400 bg-white text-gray-800"
                id="confirmPassword"
                type="password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                placeholder="Confirm Password"
                required={!isLogin}
              />
            </div>
          )}
          {isLogin && (
            <div className="flex items-center mb-6">
              <input
                id="remember"
                type="checkbox"
                checked={remember}
                onChange={() => setRemember(!remember)}
                className="accent-pink-500 mr-2"
              />
              <label htmlFor="remember" className="text-sm text-gray-600 select-none">Remember me</label>
            </div>
          )}
          <button
            className="w-full bg-pink-500 hover:bg-pink-600 text-white font-bold py-3 rounded-lg transition mb-4"
            type="submit"
          >
            {isLogin ? 'LOGIN' : 'SIGN UP'}
          </button>
          <div className="flex items-center my-4">
            <div className="flex-grow h-px bg-gray-300" />
            <span className="mx-2 text-gray-400 text-sm">Or {isLogin ? 'login' : 'sign up'} with</span>
            <div className="flex-grow h-px bg-gray-300" />
          </div>
          <div className="flex gap-4 mb-6">
            <button type="button" className="flex-1 flex items-center justify-center gap-2 border border-gray-300 rounded-lg py-2 hover:bg-gray-50 transition text-blue-600">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="#1877F3"><path d="M22.675 0h-21.35C.595 0 0 .592 0 1.326v21.348C0 23.408.595 24 1.325 24h11.495v-9.294H9.692v-3.622h3.128V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.797.143v3.24l-1.918.001c-1.504 0-1.797.715-1.797 1.763v2.313h3.587l-.467 3.622h-3.12V24h6.116C23.406 24 24 23.408 24 22.674V1.326C24 .592 23.406 0 22.675 0"/></svg>
              Facebook
            </button>
            <button type="button" className="flex-1 flex items-center justify-center gap-2 border border-gray-300 rounded-lg py-2 hover:bg-gray-50 transition text-black">
              <svg width="20" height="20" viewBox="0 0 24 24">
                <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
              </svg>
              Google
            </button>
          </div>
          <p className="text-center text-sm text-gray-500">
            {isLogin ? (
              <>
                Not a member?{' '}
                <button type="button" className="text-pink-500 hover:underline font-medium" onClick={() => setIsLogin(false)}>
                  Sign up now
                </button>
              </>
            ) : (
              <>
                Already have an account?{' '}
                <button type="button" className="text-pink-500 hover:underline font-medium" onClick={() => setIsLogin(true)}>
                  Login now
                </button>
              </>
            )}
          </p>
        </form>
      </div>
    </div>
  );
} 