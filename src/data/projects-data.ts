export interface TopologyNode {
	label: string;
	type: "client" | "service" | "queue" | "db" | "infra";
	description?: string;
}

export interface ArchitecturalHighlight {
	label: string;
	subsystem: string;
	note: string;
}

export interface TechStackCategory {
	category: string;
	technologies: string[];
}

export interface MetricItem {
	label: string;
	value: string;
	description?: string;
}

export interface StatusBadge {
	code: string;
	label: string;
	variant: "live" | "production" | "verified" | "private" | "archived";
}

export interface ProjectDetail {
	slug: string;
	sysId: string;
	title: string;
	arabicTitle?: string;
	tagline: string;
	category: "saas" | "ecommerce" | "realtime";
	statusBadge: StatusBadge;
	image: string;
	gallery?: string[];
	liveUrl?: string;
	role: string;
	team: string;
	timeline: string;
	telemetry: string;
	theProblem: string;
	keyFeatures: string[];
	myRoleAndChallenge: {
		roleOverview: string;
		technicalChallenge: string;
		architecturalSolution: string;
		highlights?: ArchitecturalHighlight[];
	};
	stack: TechStackCategory[];
	topology: TopologyNode[];
	metrics: MetricItem[];
}

export const ALL_PROJECTS: ProjectDetail[] = [
	{
		slug: "egapy",
		sysId: "SYS.01",
		title: "Egapy Enterprise ERP",
		arabicTitle:
			"إيجابي - المنظومة السحابية المتكاملة لإدارة التجارة الإلكترونية",
		tagline:
			"An all-in-one operations platform that connects online storefronts, multiple warehouses, regional shipping couriers, and payment collection for high-volume retail merchants.",
		statusBadge: {
			code: "[PROPRIETARY_SYSTEM]",
			label: "Private Enterprise System",
			variant: "private",
		},
		category: "saas",
		image: "/projects/egapy.jpg",
		role: "Principal Systems Architect & Lead Full-Stack Engineer",
		team: "Core Engineering Team · 3 Applications (Core API Engine + Merchant Operations Portal & Landing + Governance Console)",
		timeline: "2024 – Present",
		telemetry:
			"PLATFORM: NESTJS + NEXT.JS 16 · APPS: SERVER + MERCHANT PORTAL + SUPER-ADMIN + MARKETING LANDING · DB: POSTGRESQL (PRISMA ORM) · REALTIME: SOCKET.IO WEBSOCKETS · PAYMENTS: KASHIER GATEWAY · LOGISTICS: BOSTA & MYLERZ ENGINES",
		theProblem:
			"Retailers selling across multiple online sales channels struggle with stockouts from unlinked sales streams, delayed courier handoffs, and untracked cash-on-delivery settlements. Existing tools rarely combine real-time warehouse inventory reservations with regional shipping integrations and automated financial reconciliation.",
		keyFeatures: [
			"Multi-Channel Store Sync: Automatically imports orders and synchronizes stock levels across external stores with zero duplicate records.",
			"Automated Courier Dispatch: Generates waybills, calculates shipping rates, and dispatches parcels directly through regional couriers.",
			"Multi-Warehouse Inventory & POS: Tracks SKU stock movements across multiple storage hubs and supports in-person barcode checkout.",
			"Returns & Exchanges (RMA): Tracks customer returns and automatically updates restock ledgers upon warehouse check-in.",
			"Cash-on-Delivery Ledger: Reconciles courier payouts, flags collection discrepancies, and attributes profit per order.",
			"Subscription Billing & Quotas: Manages merchant plan tiers, monthly order volume limits, and staff seat permissions.",
			"Interactive Admin GIS Zoning: Lets platform operators draw delivery zones and manage courier tariffs on interactive maps.",
			"Team Notifications: Dispatches real-time order status updates and customer notification messages.",
		],
		myRoleAndChallenge: {
			roleOverview:
				"I architected and led the engineering of the 3-application platform: the core API engine, the merchant portal, and the governance console. I designed the multi-tenant database schema, external courier adapters, and payment settlement workflows.",
			technicalChallenge:
				"Preventing race conditions during simultaneous webhook order bursts across warehouses, stopping double-credit errors during concurrent courier cash reconciliations, and enforcing tenant isolation on a shared relational database.",
			architecturalSolution:
				"I engineered an ACID-compliant transactional pipeline using deterministic idempotency keys and pre-transaction bulk reads to minimize lock contention. I implemented a 5-stage tenant resolution middleware and built a polymorphic factory pattern for courier integrations with unified district-level geographic normalization.",
			highlights: [
				{
					label: "Order Ingestion & Deduplication Pipeline",
					subsystem: "Integration Engine",
					note: "Pre-fetches product catalogs and customer entities outside active transactions before executing atomic order creation, customer linking, and ledger attribution inside an isolated ACID boundary.",
				},
				{
					label: "5-Stage Tenant Resolution Gateway",
					subsystem: "Security & Middleware Gateway",
					note: "Hierarchical fallback resolver identifying tenant contexts across secure cookies, custom tenant headers, URL path segments, and subdomain host headers.",
				},
				{
					label: "Dynamic Courier Dispatch Factory",
					subsystem: "Logistics Hub",
					note: "Polymorphic provider abstraction normalizing disparate courier APIs into a unified shipment protocol with automated waybill generation.",
				},
				{
					label: "Quota & Limit Guards",
					subsystem: "Billing & Subscriptions",
					note: "Execution guards enforcing real-time daily/monthly order quotas, SKU thresholds, and role-based staff seat caps with zero database overhead.",
				},
				{
					label: "Tenant-Scoped WebSocket Gateway",
					subsystem: "Real-Time Communications",
					note: "JWT-authenticated gateway enforcing tenant-isolated rooms for instant order status broadcasts, inventory movement alerts, and staff chat.",
				},
			],
		},
		stack: [
			{
				category: "Backend Engine (`server`)",
				technologies: [
					"NestJS (TypeScript)",
					"PostgreSQL",
					"Prisma ORM",
					"Socket.io (WebSockets)",
					"Passport JWT / Argon2",
					"Express Raw Body HMAC Middleware",
					"AWS S3 SDK",
					"nestjs-i18n",
				],
			},
			{
				category: "Merchant Operations Portal & POS (`tager`)",
				technologies: [
					"Next.js 16 (App Router / Turbopack)",
					"React 19",
					"Redux Toolkit",
					"TanStack Query v5",
					"TanStack Table v8",
					"Tailwind CSS v4",
					"Framer Motion",
					"ZXing & HTML5-QRCode (Barcode Scanner)",
					"@react-pdf/renderer & jsPDF",
					"next-intl (RTL Arabic / LTR English)",
				],
			},
			{
				category: "Public Marketing & Onboarding (`landing`)",
				technologies: [
					"Next.js 16 SSR/SSG",
					"React 19",
					"Tailwind CSS",
					"Framer Motion Dynamic Micro-Animations",
					"next-intl Localization",
					"Automated SEO Metadata Architecture",
				],
			},
			{
				category: "Super-Admin Governance Console (`super-admin`)",
				technologies: [
					"Next.js 16 (App Router)",
					"React 19",
					"Leaflet GIS & Leaflet-Draw (Geo-Zoning)",
					"TanStack Query & Table",
					"Recharts Financial Dashboards",
					"Zod & React Hook Form",
					"next-themes",
				],
			},
			{
				category: "External Integrations Hub",
				technologies: [
					"Shopify REST & Webhook APIs",
					"WooCommerce REST API",
					"Salla & LightFunnels Webhooks",
					"Bosta Courier API & Pickup Synchronization",
					"Mylerz Courier API & Automated City/Zone Sync",
					"Kashier Payment Gateway (HMAC-SHA512)",
					"Twilio & WhatsApp Cloud API",
				],
			},
		],
		topology: [
			{
				label: "Public Marketing Landing & Onboarding",
				type: "client",
				description:
					"SEO-optimized bilingual landing portal driving merchant conversion, plan selection, and self-service registration.",
			},
			{
				label: "Merchant Operations Dashboard & POS",
				type: "client",
				description:
					"Operational web portal handling order fulfillment, barcode POS scanning, RMA flows, and warehouse movements.",
			},
			{
				label: "Super-Admin Governance Console",
				type: "client",
				description:
					"Platform console with interactive GIS geofencing, subscription auditing, and multi-country configurations.",
			},
			{
				label: "Core NestJS API Engine & Gateway",
				type: "service",
				description:
					"5-stage tenant resolver, RBAC limit guards, and business logic orchestrator processing synchronous requests and asynchronous webhooks.",
			},
			{
				label: "Polymorphic Logistics & Carrier Hub",
				type: "service",
				description:
					"Courier abstraction layer standardizing shipment dispatching, warehouse pickups, tracking webhooks, and COD auditing.",
			},
			{
				label: "Real-Time WebSocket Gateway",
				type: "service",
				description:
					"Tenant-isolated Socket.io broker distributing instant team notifications, live order status transitions, and team chat.",
			},
			{
				label: "PostgreSQL Database (ACID Layer)",
				type: "db",
				description:
					"Multi-tenant relational schema (80+ models) managing foreign key constraints, double-entry ledgers, and audit logs.",
			},
		],
		metrics: [
			{
				label: "Order Deduplication Guarantee",
				value: "100%",
				description:
					"Zero duplicate records generated during high-concurrency webhook retries",
			},
			{
				label: "Architecture Scope",
				value: "3 Codebases",
				description:
					"Unified NestJS API, Next.js Merchant Portal/Landing, and Next.js Super-Admin",
			},
			{
				label: "Database Schema Scale",
				value: "80+ Models",
				description:
					"Relational Prisma schema spanning multi-tenancy, logistics, POS, and financial accounting",
			},
			{
				label: "Integrated Service Providers",
				value: "7+ Channels",
				description:
					"Native connectors across Shopify, WooCommerce, Bosta, Mylerz, Kashier, Twilio, and Meta WhatsApp",
			},
		],
	},
	{
		slug: "nazam",
		sysId: "SYS.02",
		title: "Nazam",
		arabicTitle: "نظّم",
		tagline:
			"A centralized commerce operations hub that connects online storefronts, inventory, payment collection, and regional shipping couriers across the Middle East.",
		statusBadge: {
			code: "[PROPRIETARY_SYSTEM]",
			label: "Private Enterprise System",
			variant: "private",
		},
		category: "saas",
		image: "/projects/nazam.jpg",
		role: "Lead Full-Stack Engineer",
		team: "Solo Engineer",
		timeline: "2024 – 2025",
		telemetry: "ARCH: MONOREPO · DB: POSTGRESQL · QUEUE: BULLMQ · CACHE: REDIS",
		theProblem:
			"Merchants selling across the Middle East lose hours daily copying order details into courier portals, reconciling cash-on-delivery payments, and manually updating stock levels across multiple storefronts.",
		keyFeatures: [
			"Multi-Store Inventory Sync: Synchronizes stock levels across domestic and regional storefronts.",
			"Bulk Courier Dispatch: Generates shipping waybills in batch with regional logistics providers.",
			"Cash-on-Delivery Auditing: Reconciles courier cash collections against bank deposits automatically.",
			"Background Task Processing: Handles bulk product imports and batch notifications asynchronously.",
			"Bilingual RTL/LTR Interface: Native Arabic and English layout switching tailored for regional teams.",
		],
		myRoleAndChallenge: {
			roleOverview:
				"I owned the entire product full-stack as a solo engineer within a monorepo, designing the database schema, worker queues, external store connectors, and merchant dashboard.",
			technicalChallenge:
				"Ingesting bulk product updates and order webhooks from multiple storefronts concurrently threatened to overwhelm database connections and trigger external courier API rate limits.",
			architecturalSolution:
				"I built a worker queue pipeline with exponential backoff retries, concurrency limiters, and payload deduplication to process external events asynchronously without blocking HTTP request threads or tripping third-party rate limits.",
			highlights: [
				{
					label: "Background Worker Queues",
					subsystem: "BullMQ / Redis",
					note: "Asynchronous job pipeline with concurrency limiters, payload deduplication, and exponential backoff retries.",
				},
				{
					label: "Store & Courier Connectors",
					subsystem: "Integration Gateway",
					note: "Rate-limited store synchronization pipelines preventing downstream API throttles.",
				},
			],
		},
		stack: [
			{
				category: "Architecture & Monorepo",
				technologies: ["Turborepo", "TypeScript", "Shared Packages"],
			},
			{
				category: "Frontend",
				technologies: [
					"Next.js",
					"Tailwind CSS",
					"Radix UI",
					"Bilingual RTL/LTR Localization",
				],
			},
			{
				category: "Backend & Queues",
				technologies: ["NestJS", "BullMQ", "Redis", "REST APIs"],
			},
			{
				category: "Database & ORM",
				technologies: ["PostgreSQL", "Prisma"],
			},
		],
		topology: [
			{
				label: "Next.js Web Client",
				type: "client",
				description: "Bilingual merchant dashboard with RTL switching",
			},
			{
				label: "NestJS Gateway",
				type: "service",
				description: "REST API & auth boundary",
			},
			{
				label: "BullMQ / Redis",
				type: "queue",
				description: "Rate-limited job queue & backoff retry engine",
			},
			{
				label: "Worker Processors",
				type: "service",
				description: "Asynchronous courier dispatch & sync workers",
			},
			{
				label: "PostgreSQL",
				type: "db",
				description: "Multi-store catalog, inventory, and COD audits",
			},
		],
		metrics: [
			{
				label: "Queue Reliability",
				value: "99.9%",
				description: "Zero dropped webhooks with exponential backoff",
			},
			{
				label: "Localization",
				value: "EN + AR",
				description: "Full bidirectional RTL/LTR support",
			},
			{
				label: "Architecture",
				value: "Turborepo",
				description: "Shared type-safe schemas across client & server",
			},
		],
	},
	{
		slug: "labika",
		sysId: "SYS.03",
		title: "Labika | Islamic Pilgrimage by Proxy Platform",
		arabicTitle: "لبيك | منصة العمرة بالإنابة والخدمات الرقمية",
		tagline:
			"A dedicated pilgrimage-by-proxy platform connecting seekers with verified performers in Mecca, featuring step-by-step ritual verification and secure escrow payments.",
		statusBadge: {
			code: "[PROPRIETARY_SYSTEM]",
			label: "Private Enterprise System",
			variant: "private",
		},
		category: "saas",
		image: "/projects/labika.webp",
		role: "Lead Full-Stack Architect & Systems Engineer",
		team: "Core Team · 3 Applications (API Engine, Operations Dashboard, Marketing Portal)",
		timeline: "2024 – Present",
		telemetry:
			"PLATFORM: NESTJS + NEXT.JS 16 · APPS: SERVER + DASHBOARD + LANDING · DB: MYSQL (TYPEORM) + REDIS · QUEUES: BULLMQ",
		theProblem:
			"Arranging Umrah on behalf of elderly, ill, or deceased family members (Badal Umrah) often lacks trust, ritual verification, and payment protection. Seekers have no clear proof that rites are fulfilled correctly, while performers face payment delays across international borders.",
		keyFeatures: [
			"Performer Matching: Allows verified pilgrims in Mecca to accept requests with custom schedules.",
			"Four-Stage Ritual Verification: Requires photo and video milestones at each sacred pillar before moving forward.",
			"Escrow Payment Ledger: Holds funds securely and releases payouts only after full verification.",
			"Multi-Rail Disbursements: Processes payouts through bank transfers, digital wallets, and payout rails.",
			"Direct Chat & Milestone Updates: Keeps seekers and performers connected with real-time progress updates.",
			"Automated Reminders: Dispatches scheduled notifications and verification prompts to performers.",
		],
		myRoleAndChallenge: {
			roleOverview:
				"I architected and built the three-tier system: the core API engine, the administrative governance dashboard, and the public web portal.",
			technicalChallenge:
				"Preventing race conditions during simultaneous payout withdrawals and payment webhooks, and preventing fraudulent instant ritual completions without blocking database transactions.",
			architecturalSolution:
				"I engineered a pessimistic-locked transaction model that transitions funds through five distinct balance states (escrow hold, pending earnings, locked disbursement, available balance, platform fee). I paired this with a time-gated ritual state machine requiring minimum duration thresholds and media proof before releasing escrowed funds.",
			highlights: [
				{
					label: "Multi-Partition Escrow & Wallet Ledger",
					subsystem: "Financial Engine",
					note: "Pessimistic locking and transactional accounting (Available, Locked, Pending, Converted, Refund) guaranteeing zero double-spending during payouts.",
				},
				{
					label: "Time-Gated Ritual Progression State Machine",
					subsystem: "Pilgrimage Core Engine",
					note: "Sequential validation engine enforcing prerequisite checks, duration minimums, and media proof uploads for each sacred pillar.",
				},
				{
					label: "Real-Time Chat & Presence Mesh",
					subsystem: "Communication Gateway",
					note: "WebSocket gateway with multi-device socket mapping, localized profanity filtering, and automated ritual milestone event insertion.",
				},
				{
					label: "Notification Worker",
					subsystem: "Job Processing Subsystem",
					note: "Worker queue with exponential backoff handling push notifications, SMS OTP pipelines, and payment expiration tasks.",
				},
			],
		},
		stack: [
			{
				category: "Backend Engine (`server`)",
				technologies: [
					"NestJS",
					"TypeScript",
					"TypeORM",
					"MySQL",
					"BullMQ",
					"Redis",
					"Socket.io",
					"Express 5",
					"Winston",
					"Firebase Admin SDK",
					"Twilio SDK",
					"AWS/DO S3 SDK",
				],
			},
			{
				category: "Operations Dashboard (`dashboard`)",
				technologies: [
					"Next.js 16 (App Router)",
					"React 19",
					"Redux Toolkit (RTK Query)",
					"TanStack Table",
					"TanStack Virtual",
					"Tailwind CSS v4",
					"Radix UI",
					"Recharts",
					"next-intl (RTL/LTR)",
					"AutoForm (Zod)",
				],
			},
			{
				category: "Marketing Landing Portal (`landing-page`)",
				technologies: [
					"Next.js 16 (Standalone Output)",
					"React 19",
					"Tailwind CSS v4",
					"Framer Motion",
					"Swiper",
					"Radix UI",
					"next-intl (Bilingual AR/EN)",
					"SEO Structured Schema",
				],
			},
			{
				category: "Disbursement & Third-Party Hub",
				technologies: [
					"Credit Card / Mada Payment Webhooks (HMAC Verified)",
					"SWIFT / IBAN Bank Wire Engine",
					"PayPal Payouts API",
					"Binance Crypto Pay (USDT)",
					"Al-Adhan Astronomical Prayer API",
				],
			},
		],
		topology: [
			{
				label: "Marketing Landing Portal",
				type: "client",
				description:
					"Bilingual Next.js 16 web portal with onboarding flow and clear ritual explanations.",
			},
			{
				label: "Admin & Operations Dashboard",
				type: "client",
				description:
					"Operations portal for Umrah request oversight, chat moderation, and payout approvals.",
			},
			{
				label: "Core API & WebSocket Server",
				type: "service",
				description:
					"NestJS application managing JWT/RBAC auth, ritual state machines, and payment webhook listeners.",
			},
			{
				label: "BullMQ Queue Workers",
				type: "service",
				description:
					"Distributed Redis queue processing push notifications, SMS OTPs, and scheduled expiration jobs.",
			},
			{
				label: "Database, Ledger & Object Storage",
				type: "db",
				description:
					"ACID-compliant MySQL relational store, Redis session cache, and S3 media storage.",
			},
		],
		metrics: [
			{
				label: "Disbursement Reconciliation",
				value: "100%",
				description:
					"Zero ledger discrepancies across Bank, PayPal, and Crypto payout rails",
			},
			{
				label: "Architecture Scope",
				value: "3 Applications",
				description:
					"Modular ecosystem consisting of Backend API, Operations Dashboard, and Marketing Web",
			},
			{
				label: "Ritual Verification Integrity",
				value: "4 Gates",
				description:
					"Sequential verification across Ihram, Tawaf, Sa'i, and Haircut milestones",
			},
		],
	},
	{
		slug: "coldwell-banker",
		sysId: "SYS.04",
		title: "Coldwell Banker Real Estate Platform",
		arabicTitle: "منصة كولد ويل بانكر العقارية",
		tagline:
			"A high-performance real estate discovery platform featuring interactive geospatial mapping, property filtering, and automated lead routing for regional brokerages.",
		statusBadge: {
			code: "[PROPRIETARY_SYSTEM]",
			label: "Private Business System",
			variant: "private",
		},
		category: "saas",
		image: "/projects/coldwell_banker.jpg",
		role: "Lead Full-Stack Architect / Systems Engineer",
		team: "Full-Stack Architecture · 2 Subsystems (API Engine + Client Portal)",
		timeline: "2024 – Present",
		telemetry:
			"PLATFORM: NODE.JS / EXPRESS · CLIENT: REACT 18 + VITE + MAPBOX GL · DB: MONGODB + AGGREGATION PIPELINES · I18N: DUAL RTL/LTR",
		theProblem:
			"High-end real estate portals often suffer from disjointed multi-language search indexes, sluggish property searches, and unmanaged media files accumulating on storage servers during frequent listing updates.",
		keyFeatures: [
			"Interactive Map Search: Dynamic property clustering and point-of-interest mapping across compounds and neighborhoods.",
			"Bilingual Data Model: Native Arabic and English property details stored at the database level with instant direction switching.",
			"Automated Storage Garbage Collection: Prunes replaced photos and video files immediately upon listing updates.",
			"Real-Time Ranking Analytics: Calculates top-performing areas, project counts, and unit availability on the fly.",
			"Developer & Compound Directory: Hierarchical listings linking developers, master plans, and individual property units.",
			"Direct Lead Routing: Generates contextual WhatsApp referral links connecting buyers directly to assigned agents.",
		],
		myRoleAndChallenge: {
			roleOverview:
				"I architected and built the RESTful API service with file lifecycle management, and the interactive client portal featuring Mapbox views and bilingual interfaces.",
			technicalChallenge:
				"Maintaining cross-entity counts across developers, areas, compounds, and properties while preventing orphaned media files on physical storage during high-frequency multipart updates.",
			architecturalSolution:
				"I engineered an automated diffing file cleanup subsystem that captures document state prior to mutation, computes symmetric differences between existing and incoming file arrays, and unlinks superseded assets on storage without blocking requests.",
			highlights: [
				{
					label: "Automated Orphan File Garbage Collector",
					subsystem: "Media Ingestion Pipeline",
					note: "Computes array-level symmetric differences on document mutations to eliminate orphaned assets on disk storage.",
				},
				{
					label: "Multi-Stage Real-Time Aggregator",
					subsystem: "Analytics & Ranking Engine",
					note: "Executes pipeline stages to compute live top-tier area and property-type rankings on the fly.",
				},
				{
					label: "Geospatial Coordinate Mapper",
					subsystem: "Mapbox Spatial View",
					note: "Renders hardware-accelerated interactive maps with custom marker injections and viewport centering based on project coordinates.",
				},
				{
					label: "Bilingual Schema Localization Bridge",
					subsystem: "Core Data Layer & I18n Engine",
					note: "Dual-schema field modeling paired with client-side language detectors and automatic CSS directional flips.",
				},
			],
		},
		stack: [
			{
				category: "Backend API Engine (`server`)",
				technologies: [
					"Node.js",
					"Express.js",
					"MongoDB",
					"Mongoose ODM",
					"Multer",
					"Joi",
					"Winston",
					"Helmet",
					"MongoSanitize",
					"CORS",
				],
			},
			{
				category: "Client & Discovery Portal (`client`)",
				technologies: [
					"React 18",
					"Vite",
					"React Router v6",
					"Mapbox GL JS",
					"React-i18next",
					"Axios",
					"Slick Carousel",
					"Swiper",
					"Bootstrap 5",
					"Lucide React",
				],
			},
			{
				category: "Data Modeling & Aggregations",
				technologies: [
					"MongoDB Aggregation Framework",
					"Embedded GeoJSON Coordinates",
					"Bilingual Document Schemas",
					"Atomic $push / $inc Counters",
				],
			},
			{
				category: "Media, Printing & Export Tooling",
				technologies: [
					"Asynchronous File GC Engine",
					"HTML2Canvas",
					"jsPDF",
					"Video Stream Ingestion",
					"WhatsApp Click-to-Chat Protocol",
				],
			},
		],
		topology: [
			{
				label: "Client Web Portal",
				type: "client",
				description:
					"Responsive bilingual discovery interface with interactive Mapbox maps and WhatsApp lead routing.",
			},
			{
				label: "Core REST API Server",
				type: "service",
				description:
					"Express middleware layer enforcing input sanitization, multipart upload handling, rate limiting, and standard error envelopes.",
			},
			{
				label: "Media Storage & Lifecycle Manager",
				type: "service",
				description:
					"Static asset serving gateway and diff-based filesystem garbage collector pruning superseded files upon listing update.",
			},
			{
				label: "Database & Document Store",
				type: "db",
				description:
					"MongoDB cluster storing bilingual schemas and relational references linking developers, compounds, and properties.",
			},
		],
		metrics: [
			{
				label: "Orphan File Leakage",
				value: "0%",
				description:
					"Automated disk garbage collector prunes superseded images on edit/delete",
			},
			{
				label: "Bilingual Coverage",
				value: "100%",
				description:
					"Complete dual-locale Arabic/English schema modeling and dynamic RTL rendering",
			},
			{
				label: "Architecture Scope",
				value: "2 Subsystems",
				description:
					"Node.js REST API Server and React 18 / Vite Interactive Portal",
			},
		],
	},
	{
		slug: "alzcare",
		sysId: "SYS.05",
		title: "AlzCare (Gedo)",
		arabicTitle: "نظام رعاية مرضى الزهايمر (جدو)",
		tagline:
			"A dedicated healthcare platform connecting Alzheimer’s patients and family caregivers through scheduled medication alerts, health records, and shared memory notes.",
		statusBadge: {
			code: "[PROPRIETARY_SYSTEM]",
			label: "Private Healthcare System",
			variant: "private",
		},
		category: "saas",
		image: "/projects/alzcare.jpg",
		role: "Lead Full-Stack Architect / Systems Engineer",
		team: "Core Engineering Team · 3-Tier Distributed Architecture",
		timeline: "2024 – Present",
		telemetry:
			"PLATFORM: HEALTHCARE TELEMETRY · APPS: CORE API + TELEMETRY WORKER + CLIENT SHELL · DB: MONGODB · QUEUES/WORKERS: NODE-CRON + FCM",
		theProblem:
			"Caring for Alzheimer’s patients often leads to missed medication times, unmonitored dietary habits, and communication gaps between patients and family members, causing preventable health risks.",
		keyFeatures: [
			"Scheduled Medication Alerts: Dispatches minute-accurate push notifications to both patient and caregiver devices.",
			"Secure Patient Pairing: Links caregivers and patients through unique alphanumeric pairing codes.",
			"Voice Notes & Memory Diary: Allows patients to record daily audio reflections and view family photos.",
			"Clinical Health Vault: Centralizes vital sign records, chronic conditions, and physician prescriptions.",
			"Caregiver Permissions: Keeps medical routines manageable by authorized family members while protecting patient privacy.",
			"Caregiver Community Hub: A discussion space for family caregivers to share advice and routines.",
		],
		myRoleAndChallenge: {
			roleOverview:
				"I designed and built the backend API, the scheduling engine, and the media processing pipeline.",
			technicalChallenge:
				"Delivering reliable dual-recipient reminder notifications across complex recurring weekly schedules without timing drift, while managing voice and image assets without storage leakage.",
			architecturalSolution:
				"I built a background scheduler synchronized with localized time slots that fans out push notifications to paired devices via Firebase Cloud Messaging, backed by a Cloudinary media pipeline that prunes stale assets upon record updates.",
			highlights: [
				{
					label: "Medication Dispatch & Dual-Fanout Engine",
					subsystem: "Scheduler & Push Telemetry",
					note: "Minute-precision scheduler querying active reminder matrices and concurrently dispatching push notifications to patient and caregiver devices.",
				},
				{
					label: "Pairing & RBAC Gateway",
					subsystem: "Identity & Access Management",
					note: "Algorithmic patient code generator with uniqueness guarantees and JWT-embedded patient context for zero-overhead caregiver authorization.",
				},
				{
					label: "Multimodal Asset Lifecycle Manager",
					subsystem: "Media & Cloud Storage Pipeline",
					note: "Multi-format upload pipeline supporting voice notes, images, and video with automated cloud cleanup on record deletion.",
				},
				{
					label: "Data Access Layer & Normalizer",
					subsystem: "Database & Core Framework",
					note: "Centralized repository abstraction with unified JSON serialization, automatic population hooks, and standard error handling.",
				},
			],
		},
		stack: [
			{
				category: "Backend Engine (`server`)",
				technologies: [
					"Node.js",
					"Express.js",
					"MongoDB",
					"Mongoose ODM",
					"JWT Authentication",
					"Passport.js",
					"Helmet",
					"Joi",
					"Winston",
				],
			},
			{
				category: "Telemetry & Schedulers (`cron` / `workers`)",
				technologies: [
					"Node-Cron",
					"Firebase Admin SDK (FCM)",
					"WebPush",
					"Nodemailer (SMTP)",
					"Socket.IO",
				],
			},
			{
				category: "Media Pipeline & Cloud Storage",
				technologies: [
					"Cloudinary SDK",
					"Multer",
					"Stream Buffering",
					"Automated Asset Pruning",
				],
			},
			{
				category: "Client Shell & Presentation (`views` / `web`)",
				technologies: [
					"EJS Templating",
					"Firebase Messaging Web Client",
					"Socket.IO Client",
					"Vanilla CSS",
				],
			},
		],
		topology: [
			{
				label: "Client Applications & Mobile Companion",
				type: "client",
				description:
					"Patient assistive interface and caregiver monitoring dashboard with real-time push alert listeners.",
			},
			{
				label: "Core API Gateway & RBAC Router",
				type: "service",
				description:
					"Dual-persona route partitioning, input validation, and JWT role-based access control.",
			},
			{
				label: "Automated Scheduler & Push Dispatcher",
				type: "service",
				description:
					"Minute-level cron job querying temporal schedule matrices and triggering dual-device push alerts.",
			},
			{
				label: "Cloud Media Storage & CDN Hub",
				type: "service",
				description:
					"Media pipeline managing voice notes, test scans, and prescription asset lifecycles.",
			},
			{
				label: "MongoDB Document Database",
				type: "db",
				description:
					"NoSQL document store managing user personas, medical details, medication schedules, and community data.",
			},
		],
		metrics: [
			{
				label: "Notification Fanout Latency",
				value: "< 2s",
				description:
					"Simultaneous push alert delivery across paired patient and caregiver devices",
			},
			{
				label: "Asset Lifecycle Cleanup",
				value: "100%",
				description:
					"Zero orphaned files on cloud storage during updates and deletions",
			},
			{
				label: "Security Hardening",
				value: "OWASP Ready",
				description:
					"NoSQL injection sanitization, HTTP parameter pollution protection & rate limiting",
			},
		],
	},
	{
		slug: "buy-from-egypt",
		sysId: "SYS.06",
		title: "Buy From Egypt",
		arabicTitle: "منصة اشتري من مصر للتصدير والتجارة الدولية",
		tagline:
			"A B2B export marketplace connecting international procurement buyers with verified Egyptian manufacturers through real-time negotiation channels and catalog discovery.",
		statusBadge: {
			code: "[PROPRIETARY_SYSTEM]",
			label: "Private Enterprise System",
			variant: "private",
		},
		category: "ecommerce",
		image: "/projects/buy-from-egypt.jpg",
		role: "Lead Full-Stack Architect / Systems Engineer",
		team: "Core Engineering · B2B Trade & Exporter Monorepo",
		timeline: "2024 – Present",
		telemetry:
			"PLATFORM: CROSS-BORDER B2B · APPS: BUYER MARKETPLACE + EXPORTER DASHBOARD + AI SOURCING · REALTIME: WEBSOCKET · STATE: RTK QUERY",
		theProblem:
			"International buyers face high friction finding verified industrial suppliers in Egypt due to unindexed catalogs and opaque communication. Local manufacturers struggle to showcase export products and manage international trade inquiries.",
		keyFeatures: [
			"Faceted Product Catalog: Dynamic search with currency conversion and multi-attribute category filtering.",
			"Real-Time Negotiation Chat: Direct messaging with delivery receipts, typing indicators, and presence detection.",
			"Exporter Verification: Validates corporate commercial registration and tax IDs before listing products.",
			"RFQ Management: Lets buyers submit detailed request-for-quote specifications directly to manufacturers.",
			"Exporter Showcase Feed: Business profiles featuring manufacturing capabilities, certificates, and product galleries.",
			"Fulfillment Dashboard: Tracks order lifecycle milestones and supplier performance metrics.",
		],
		myRoleAndChallenge: {
			roleOverview:
				"I built the marketplace frontend, the exporter dashboard, and the real-time communication integration.",
			technicalChallenge:
				"Synchronizing high-frequency WebSocket messaging states across active negotiation dialogues while maintaining fast client-side filtering over large catalog streams.",
			architecturalSolution:
				"I implemented optimistic UI cache updates using RTK Query paired with a Socket.io event pipeline featuring reconnection backoff and client-side message deduplication keys.",
			highlights: [
				{
					label: "Real-Time WebSocket Sync Hub",
					subsystem: "Communication Gateway",
					note: "Bi-directional Socket.io architecture with transport fallback, automatic reconnection backoff, and atomic message status tracking.",
				},
				{
					label: "Debounced Faceted Search Engine",
					subsystem: "Marketplace Search Pipeline",
					note: "Synchronized dual-layer filtering combining client-side instant memoization with parameterized server queries.",
				},
				{
					label: "Enterprise Exporter Verification",
					subsystem: "Auth & Compliance Engine",
					note: "Regulatory onboarding flow validating Egyptian industrial tax IDs, commercial registration numbers, and OTP verification.",
				},
				{
					label: "AI Sourcing Assistant Integration",
					subsystem: "AI Integration Gateway",
					note: "Session-persistent AI agent pipeline linking buyer intent with Egyptian manufacturer product categories and structured RFQ dispatch.",
				},
			],
		},
		stack: [
			{
				category: "Frontend Application & Client Shell (`app`)",
				technologies: [
					"Next.js 15 (App Router)",
					"React 19",
					"TypeScript",
					"Tailwind CSS 4",
					"Framer Motion",
					"Radix UI Primitives",
					"Lucide Icons",
				],
			},
			{
				category: "State Management & Data Layer",
				technologies: [
					"Redux Toolkit",
					"RTK Query",
					"React Hook Form",
					"Zod Validation",
					"Intersection Observer API",
				],
			},
			{
				category: "Real-Time & AI Integration Hub",
				technologies: [
					"Socket.io Client",
					"WebSocket Protocol",
					"AI Conversational Gateway",
					"Session Management Engine",
				],
			},
			{
				category: "Backend Services & Compliance Gateway (`server`)",
				technologies: [
					"NestJS Core",
					"JWT Bearer Auth",
					"Multi-Channel OTP Verification",
					"Cloud Storage Multipart Pipeline",
					"PostgreSQL",
				],
			},
		],
		topology: [
			{
				label: "Buyer Marketplace & Portal",
				type: "client",
				description:
					"Interactive B2B catalog, faceted search, exporter feed, and product discovery interface.",
			},
			{
				label: "Exporter Operations & Telemetry Dashboard",
				type: "client",
				description:
					"Order fulfillment metrics, catalog management, and customer inquiry tracking.",
			},
			{
				label: "Core REST API & Auth Gateway",
				type: "service",
				description:
					"Multi-tenant business logic, tax verification, product CRUD, and auth boundaries.",
			},
			{
				label: "WebSocket Real-Time Event Hub",
				type: "service",
				description:
					"Low-latency bi-directional messaging, presence detection, typing indicators, and status propagation.",
			},
			{
				label: "AI Sourcing Assistant Service",
				type: "service",
				description:
					"Contextual industrial taxonomy matching and natural language buyer procurement assistant.",
			},
		],
		metrics: [
			{
				label: "Real-Time Latency",
				value: "< 80ms",
				description: "Sub-second message dispatch and delivery receipts",
			},
			{
				label: "Search Responsiveness",
				value: "Instant",
				description: "Dual-tier client debounced search and server indexing",
			},
			{
				label: "Exporter Compliance",
				value: "100%",
				description: "Mandatory multi-stage tax and commercial verification",
			},
		],
	},
	{
		slug: "e-combo",
		sysId: "SYS.07",
		title: "E-Combo",
		arabicTitle: "ايكومبو",
		tagline:
			"A dropshipping and logistics platform enabling merchants in the GCC to launch retail stores with zero upfront inventory capital, regional warehousing, and fast delivery.",
		statusBadge: {
			code: "[LIVE_PRODUCTION]",
			label: "Live in Production",
			variant: "live",
		},
		category: "ecommerce",
		image: "/projects/ecombo.jpg",
		liveUrl: "https://ecompo.com",
		role: "Lead Frontend Architect & Systems Engineer",
		team: "Core Team · Multi-Application E-Commerce & Fulfillment Ecosystem",
		timeline: "2023 – 2024",
		telemetry:
			"PLATFORM: NEXT.JS 14 APP ROUTER · APPS: MARKETING LANDING + ONBOARDING GATEWAY + SUPPLIER PORTAL · LOCALIZATION: NATIVE RTL · MAPS: DYNAMIC MERCATOR PROJECTION",
		theProblem:
			"Launching an e-commerce business in the GCC typically requires heavy upfront inventory capital, complex cross-border storage, and difficult cash-on-delivery reconciliation.",
		keyFeatures: [
			"Zero-Capital Catalog: Access to wholesale product pools stored and packaged in regional warehouses.",
			"Interactive Logistics Map: Visualizes fulfillment hubs and delivery coverage across Saudi Arabia and the UAE.",
			"Cash-on-Delivery Settlement: Reconciles courier collections and automatically deposits profits into merchant wallets.",
			"Bilingual RTL Layout: Tailored Arabic and English interface with zero layout shift.",
			"Automated Order Dispatch: Forwards orders directly to warehouse packaging teams upon customer checkout.",
			"Supplier Onboarding: Streamlined qualification workflows for regional wholesale suppliers.",
		],
		myRoleAndChallenge: {
			roleOverview:
				"I designed and built the high-conversion acquisition portal, onboarding funnels, and interactive logistics visualization layer.",
			technicalChallenge:
				"Rendering complex geospatial map projections and smooth animations without layout shifts or frame drops on mobile devices.",
			architecturalSolution:
				"I built a Next.js App Router architecture combining server-rendered static shells with isolated client components for interactive maps, using TopoJSON vectors and lightweight intersection observers.",
			highlights: [
				{
					label: "Geo-Spatial Fulfillment Radar",
					subsystem: "Visualization Engine",
					note: "Dynamic Mercator projection using TopoJSON and pulse keyframes to render real-time distribution hubs without blocking main-thread interactivity.",
				},
				{
					label: "Dual-Persona Funnel Gateway",
					subsystem: "Onboarding Subsystem",
					note: "Context-aware routing for suppliers (warehouse storage) and marketers (zero-capital inventory & profit disbursement).",
				},
				{
					label: "RTL Typography & Rendering",
					subsystem: "Layout & Rendering Pipeline",
					note: "Font optimization with local Arabic font loading, CSS variable scoping, and Radix Direction primitives for bidirectional UI consistency.",
				},
				{
					label: "Scroll-Linked Viewport Coordinator",
					subsystem: "Motion & UI Engine",
					note: "Intersection observer pipeline orchestrating carousel interactions and entrance transitions.",
				},
			],
		},
		stack: [
			{
				category: "Public Web & Acquisition (`landing`)",
				technologies: [
					"Next.js 14 (App Router)",
					"React 18",
					"TypeScript",
					"Tailwind CSS",
					"Radix UI",
					"Framer Motion",
				],
			},
			{
				category: "Visualization & Interactive Layer",
				technologies: [
					"react-simple-maps",
					"d3-geo / TopoJSON",
					"Embla Carousel",
					"AOS (Animate On Scroll)",
					"Lucide Icons",
				],
			},
			{
				category: "Merchant & Supplier Platform (`app`)",
				technologies: [
					"React",
					"TypeScript",
					"RESTful API Integration",
					"Digital Wallet Ledger",
					"COD Reconciliation",
				],
			},
			{
				category: "Logistics Hub & Fulfillment APIs",
				technologies: [
					"GCC Courier Webhooks",
					"Multi-Warehouse Inventory Feeds",
					"WhatsApp Business Gateway",
				],
			},
		],
		topology: [
			{
				label: "Public Acquisition & Onboarding Web",
				type: "client",
				description:
					"Bilingual portal with supplier/marketer entry points and interactive fulfillment map.",
			},
			{
				label: "Merchant & Supplier Dashboard",
				type: "client",
				description:
					"Operational portal for wholesale catalog browsing, inventory placement, and profit withdrawals.",
			},
			{
				label: "Core Fulfillment & Auth Server",
				type: "service",
				description:
					"Business logic engine managing merchant accounts, catalog indexing, and security.",
			},
			{
				label: "Logistics & Carrier Dispatch Pipeline",
				type: "service",
				description:
					"Warehouse packaging notifications, tracking generation, and courier integration.",
			},
			{
				label: "COD Settlement & Ledger Engine",
				type: "db",
				description:
					"Transactional financial ledger tracking buyer cash collections and merchant payout disbursements.",
			},
		],
		metrics: [
			{
				label: "Capital Required",
				value: "0 AED",
				description:
					"Zero upfront merchant investment to launch wholesale stores",
			},
			{
				label: "Regional Coverage",
				value: "UAE & KSA",
				description:
					"Fulfillment hubs and cross-border delivery infrastructure",
			},
			{
				label: "Core Architectures",
				value: "3 Modules",
				description:
					"Acquisition Landing, Operations Portal, Logistics Backend",
			},
		],
	},
];

export function getProjectBySlug(slug: string): ProjectDetail | undefined {
	const normalizedSlug = slug.toLowerCase();
	return ALL_PROJECTS.find(
		(p) =>
			p.slug === normalizedSlug ||
			p.slug.replace(/-/g, "_") === normalizedSlug ||
			p.slug === normalizedSlug.replace(/_/g, "-") ||
			p.slug.replace(/-/g, "") === normalizedSlug.replace(/-/g, "") ||
			(p.slug === "labika" && normalizedSlug === "labaik") ||
			(p.slug === "labaik" && normalizedSlug === "labika") ||
			(p.slug === "alzcare" && normalizedSlug === "gedo") ||
			(p.slug === "gedo" && normalizedSlug === "alzcare") ||
			(p.slug === "e-combo" && normalizedSlug === "ecombo") ||
			(p.slug === "ecombo" && normalizedSlug === "e-combo"),
	);
}

export function getAllProjectSlugs(): string[] {
	return ALL_PROJECTS.map((p) => p.slug);
}
