# Malu System — PRD Unificado

## 1. Overview
Malu System is a management platform for resellers, fleets, warehouses, clients, and financial operations.  
Built with **Next.js** for web, **Expo/React Native** for mobile, and **Supabase** for backend.  
Everything is fully **typed in TypeScript**, with ESLint enforced. The system is initially single-developer, local Docker-based, non-scaled, but designed for future expansion.

**Objectives:**  
- Streamline reseller operations (orders, commissions, clients)  
- Track fleet trips and expenses  
- Manage warehouse inventory with QR codes  
- Provide dashboards with KPIs for admins  

---

## 2. Technologies & Standards
- **Web:** Next.js (App Router)  
- **Mobile:** Expo / React Native  
- **Backend:** Supabase (Auth, DB, Edge Functions)  
- **Infra:** Local Docker (dev)  
- **Linting & Formatting:** ESLint + Prettier + TypeScript strict mode  
- **UI:** Shadcn/UI (Web), RN Paper or Tamagui (Mobile)  
- **QR Codes:** qrcode.react, expo-barcode-scanner  
- **TypeScript:** strict typing, no-any, consistent-type-imports  

---

## 3. Personas
- **Reseller:** receives goods, sells, records sales and payments, earns commissions.  
- **Driver / Fleet:** records trips, expenses, QR-code-based tracking.  
- **Admin (You):** configures warehouses, products, clients, fleets, commissions.

---

## 4. Modules & Features

### 4.1 Dashboard
**Description:** Overview of all operational and financial KPIs.  

**Tasks:**  
- [ ] Show total sales and revenue  
- [ ] Show pending orders and payments  
- [ ] Show active trips and fleet status  
- [ ] Display inventory levels per warehouse  
- [ ] Provide quick access to key actions (start trip, new order, add client)

---

### 4.2 Warehouse
**Description:** Manage inventory, track product entry/exit via QR codes.  

**Tasks:**  
- [ ] Create warehouse table in Supabase  
- [ ] Register products with name, price, stock, QR code  
- [ ] Scan QR for entry  
- [ ] Scan QR for exit  
- [ ] Generate stock reconciliation report  
- [ ] Integrate with orders module to update stock automatically

---

### 4.3 Clients
**Description:** Register clients, track commissions and payments.  

**Tasks:**  
- [ ] Register clients with commission rules:  
  - [ ] Product-based (< R$1000)  
  - [ ] Value-based (> R$1000)  
- [ ] Track payment history (pix, cash, cheque)  
- [ ] Display client status (active, delinquent)  
- [ ] Link clients to orders  
- [ ] Generate client report for admin

---

### 4.4 Orders (Reseller)
**Description:** Capture sales, payments, and commissions.  

**Tasks:**  
- [ ] Scan QR to load batch of products  
- [ ] Select client  
- [ ] Record quantity and payment method  
- [ ] Calculate commission automatically  
- [ ] Finalize order and update dashboard  
- [ ] Integrate with warehouse stock update  
- [ ] Save order record in Supabase

---

### 4.5 Fleets
**Description:** Track trips, drivers, vehicles, and expenses.  

**Tasks:**  
- [ ] Register drivers and vehicles  
- [ ] Start trip via QR scan  
- [ ] Record trip expenses (fuel, tolls, meals)  
- [ ] End trip via QR scan  
- [ ] Generate trip report  
- [ ] Integrate with dashboard KPIs

---

### 4.6 Finance
**Description:** Monitor payments, commissions, and cash flow.  

**Tasks:**  
- [ ] Track all incoming payments (pix, cash, cheque)  
- [ ] Compute commissions per client/order  
- [ ] Generate finance dashboard  
- [ ] Export payment and commission reports  
- [ ] Integrate with orders and clients modules

---

### 4.7 Configurations
**Description:** Admin settings for system-wide parameters.  

**Tasks:**  
- [ ] Configure commission rules  
- [ ] Manage users and permissions  
- [ ] Manage warehouses, products, clients, fleets  
- [ ] Setup navigation groups:  
  - navMain: Dashboard, Orders, Clients, Fleets  
  - navSec: Warehouse, Finance  
  - navTer: Configurations, Users, Parameters  

---

## 5. TypeScript Data Models (Plain Text)

type WarehouseItem = {
  id: string
  name: string
  price: number
  stock: number
  qrCode: string
}

type Client = {
  id: string
  name: string
  commissionRule: 'product' | 'value'
  contacts?: string[]
}

type Order = {
  id: string
  resellerId: string
  itemId: string
  qty: number
  paymentType: 'pix' | 'cash' | 'cheque'
  commissionValue: number
}

type FleetTrip = {
  id: string
  driverId: string
  startQr: string
  endQr: string
  expenses: Array<{ type: string; value: number }>
}

---

## 6. Workflows

### 6.1 Sales
- [ ] Scan QR → load products  
- [ ] Select client  
- [ ] Record payment method  
- [ ] Calculate commission  
- [ ] Update warehouse stock  
- [ ] Update dashboard

### 6.2 Trips
- [ ] Start trip QR scan  
- [ ] Log expenses  
- [ ] End trip QR scan  
- [ ] Generate trip report  
- [ ] Update dashboard

### 6.3 Warehouse
- [ ] Entry QR scan  
- [ ] Exit QR scan  
- [ ] Reconciliation report  
- [ ] Sync stock with orders

---

## 7. Milestones & Tasks

### Milestone 1 — Setup Base
- [ ] Setup Docker with Supabase local  
- [ ] Initialize Next.js project with TypeScript  
- [ ] Configure ESLint + Prettier  
- [ ] Initialize Expo project for mobile  
- [ ] Setup Supabase tables and RLS  

### Milestone 2 — Core Modules
- [ ] Dashboard UI and basic metrics  
- [ ] Warehouse CRUD and QR scanning  
- [ ] Clients CRUD + commission rules  
- [ ] Orders flow end-to-end  
- [ ] Fleet trips flow with expenses  

### Milestone 3 — Integrations
- [ ] Orders ↔ Warehouse stock update  
- [ ] Orders ↔ Clients ↔ Finance  
- [ ] Trips ↔ Dashboard metrics  
- [ ] Commission calculations edge functions  

### Milestone 4 — UI/UX Polishing
- [ ] Web: Shadcn/UI integration  
- [ ] Mobile: RN Paper/Tamagui integration  
- [ ] Navigation groups (navMain, navSec, navTer)  
- [ ] QR code UI flows  

### Milestone 5 — Reporting & Export
- [ ] Dashboard KPIs  
- [ ] Client reports  
- [ ] Finance reports  
- [ ] Trip reports  

---

## 8. Next Steps
- [ ] Confirm Supabase table structure  
- [ ] Define all TypeScript types for domain entities  
- [ ] Implement dashboard MVP  
- [ ] Implement QR scan flows  
- [ ] Commit PRD to repo for AI agent  
- [ ] Start milestone 1 tasks