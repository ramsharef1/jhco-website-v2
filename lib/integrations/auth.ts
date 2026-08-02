// Authentication helpers (NextAuth ready)
export interface User {
  id: string;
  email: string;
  name: string;
  role: 'donor' | 'volunteer' | 'admin' | 'partner';
  createdAt: Date;
}

export interface Donor extends User {
  role: 'donor';
  totalDonated: number;
  donationCount: number;
  favoritePrograms: string[];
}

export interface Volunteer extends User {
  role: 'volunteer';
  roles: string[];
  hoursContributed: number;
  status: 'active' | 'inactive';
}

export async function authenticateUser(email: string, password: string) {
  try {
    const response = await fetch('/api/auth/signin', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password }),
    });

    if (response.ok) {
      return await response.json();
    }
    return null;
  } catch (error) {
    console.error('Auth error:', error);
    return null;
  }
}

export async function registerUser(userData: Partial<User>) {
  try {
    const response = await fetch('/api/auth/signup', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(userData),
    });

    if (response.ok) {
      return await response.json();
    }
    return null;
  } catch (error) {
    console.error('Registration error:', error);
    return null;
  }
}

export async function getCurrentUser() {
  try {
    const response = await fetch('/api/auth/me');
    if (response.ok) {
      return await response.json();
    }
    return null;
  } catch (error) {
    return null;
  }
}

export async function updateUserProfile(userId: string, updates: Partial<User>) {
  try {
    const response = await fetch(`/api/auth/profile/${userId}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(updates),
    });

    if (response.ok) {
      return await response.json();
    }
    return null;
  } catch (error) {
    console.error('Update error:', error);
    return null;
  }
}
