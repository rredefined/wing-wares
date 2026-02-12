

# RenderByte — Pterodactyl Billing Panel

A full-featured billing panel integrated with Pterodactyl, branded as **RenderByte**. Built with React + Tailwind CSS + Framer Motion on the frontend, and Lovable Cloud (Supabase) for backend, auth, and database.

---

## Phase 1: Landing Page & Branding

A modern, dark-themed landing page inspired by the AeroX design, rebranded as **RenderByte**:

- **Hero Section** with animated text (Framer Motion), tagline, and CTA buttons ("Get Started" / "Learn More")
- **Feature Cards**: Instant Setup, DDoS Protection, 99.9% Uptime, 24/7 Support
- **Advanced Features Section**: High Performance, Low Latency, Security, Auto Recovery, Resource Scaling, Global Network
- **Global Locations** section with server specs and map
- **Pricing Plans** section showing hosting tiers (Bot Hosting, Game Servers, etc.)
- **Platform Experience** showcase (shell access, plugin manager, analytics)
- **FAQ Section** with accordion
- **Footer** with links and branding
- **Responsive navigation** with sticky header

---

## Phase 2: Authentication System

- **Login & Register pages** with email/password
- **Google OAuth** and **Discord OAuth** sign-in (configured via Supabase dashboard)
- **User profiles table** with username, avatar, balance/coins
- **User roles table** (admin, user) with secure role-checking functions
- Protected routes — redirect unauthenticated users to login

---

## Phase 3: User Dashboard & Store

- **Dashboard** showing user's servers, balance, and account summary
- **Store/Plans page**: Browse hosting packages with CPU, RAM, Disk, pricing details
- **Purchase flow**: Select plan → choose egg/game type → choose location → confirm purchase (deducts coins)
- **Coin balance display** and top-up page (placeholder for payment gateway integration)
- **Server list**: View active servers with status, expiry date, and quick actions

---

## Phase 4: Pterodactyl Integration (Edge Functions)

- **Edge function** to communicate with Pterodactyl Application API:
  - Auto-create server on purchase (create user + server via Pterodactyl API)
  - Sync eggs/nests from Pterodactyl
  - Sync locations/nodes from Pterodactyl
  - Suspend/unsuspend servers based on expiry
- Pterodactyl API key stored securely as a Supabase secret

---

## Phase 5: Admin Panel

- **Admin Dashboard** with stats overview (total users, servers, revenue)
- **User Management**: View all users, edit roles, manually add balance/coins
- **Package Management**: Create/edit/delete hosting plans with resource limits (CPU, RAM, Disk, price)
- **Resource Management**: One-click sync of eggs and locations from Pterodactyl
- **Store Configuration**: Set coin pricing and manage available plans
- **Admin-only routes** protected by role checks

---

## Phase 6: Ticket / Support System

- **User side**: Create support tickets, send messages, view ticket history
- **Admin side**: View all tickets, respond to users, close/resolve tickets
- Real-time chat-style interface for ticket conversations

---

## Design Direction

- **Dark theme** with orange accent color (similar to AeroX reference)
- Framer Motion animations for page transitions and element reveals
- Glassmorphism-style cards with subtle borders
- Clean, modern typography
- Fully responsive (mobile + desktop)

