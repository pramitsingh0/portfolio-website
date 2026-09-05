# CV -- Pramit Singh

**Location:** Bangalore, India
**Email:** pramitsingh0@gmail.com
**Phone:** +91 9937877665
**LinkedIn:** https://www.linkedin.com/in/pramit-singh-dev/
**Portfolio:** https://pramitsingh.netlify.app
**GitHub:** https://github.com/pramitsingh0

## Professional Summary

Full Stack Developer with 2+ years of experience building high-throughput, event-driven systems across logistics and compliance platforms. Specialized in API design, third-party integrations, and performance optimization, with proven impact on latency reduction and system scalability. Primarily working with Node.js and NoSQL systems, I take end-to-end ownership of features.

## Work Experience

### Meel
**Backend Developer**
Jun. 2025-Present

- Owned backend architecture and API design for a logistics platform on Google Cloud Run, sustaining 1,000+ daily orders across orders, routes, invoices, and admin systems
- Improved API response times by ~30% through query optimization, indexing, and caching
- Designed Firestore data models and queries for high-throughput reads/writes across orders, routes, and notifications
- Refactored notifications (Email/WhatsApp/SMS/FCM) out of the request path into an event-driven flow: a Firestore `onDocumentCreated` collection-group trigger fires on any new notification document across businesses and enqueues a Cloud Task, which handles delivery with exponential-backoff retries (10 attempts, then a further retry after an hour). Removed the inline third-party sends that were slowing API responses and silently losing failed deliveries. Idempotent dispatch, validated at ~5k notifications/day
- Built commerce integrations (Salla, Zid, WooCommerce) with webhook pipelines that stay consistent under burst traffic
- Shipped Zoho Books integration (OAuth token lifecycle, sales orders, invoices) and Google/Firebase sign-in via OpenID Connect
- Engineered a bulk order ingestion pipeline (CSV/Excel) with validation and preview workflows, and integrated Zapier and Make.com for no-code automation
- Implemented geospatial and AI route optimization: reverse geocoding, distance/time computation, ETA extraction, and real-time route orchestration
- Built customer-facing LLM route summaries on the Groq API, turning raw lifecycle event data (route created, order assigned to driver, shipment picked up, route started, route ended) into a readable narrative of what happened on each route


### iComply Lifescience Solutions
**Backend Developer**
Jul. 2024-Jun. 2025

- Designed and shipped the NCO (Non-Conformance) backend module, modeling relational workflows across deviation, action items, RCA, and CAPA entities
- Developed dynamic PDF reports using PHP, MySQL, and Node.js, leveraging `domPDF` and `html-pdf-node` to generate CAPA plan reports by embedding data from the database
- Implemented JWT authentication and access control, with input validation and parameterized queries to prevent SQL injection
- Built a Python (Django) microservice for event-triggered email notifications, reaching 99% uptime through structured error handling and monitoring
- Engineered complex SQL queries using joins, unions, subqueries, and indexing, improving critical query performance from 12s to under 500ms

### MoLog Media and Advertising
**Full Stack Developer Intern**
Apr. 2022-Jun. 2022

- Led the migration of MoLog's Soham-ngma product to AMP (Accelerated Mobile Pages), cutting page load times by ~50% and improving the mobile experience

## Projects

- **Chingu Rooms** -- React, Node.js, Express, MongoDB. Deployment: https://chingu-bt-30.onrender.com/ | Certificate: https://drive.google.com/file/d/1xMfJTuQ2L8mh3UjDqs1rtOxBsp5i0Xe0/view?usp=sharing
  - Built a full-stack hotel booking platform with a React frontend and Express/MongoDB backend
  - Led a team of 4 developers under a University of Helsinki training program
  - Designed backend services for user sessions, bookings, and simulated payments

## Education

- B.Tech, Electrical and Electronics Engineering, Veer Surendra Sai University of Technology (2020-2024) -- 7.55 CGPA

## Core Competencies

Full Stack Development | RESTful API Design & Integration | Microservices & Event-Driven Architecture | Relational Data Modeling | Query Optimization & Indexing | Authentication & Authorization | Third-Party & Webhook Integrations | System Design | Data Structures & Algorithms | Code Review

## Skills

- **Languages:** JavaScript (ES6+), TypeScript, Python, SQL, Java, PHP
- **Backend:** Node.js, Express.js, Django, Flask
- **Frontend:** React, HTML, CSS
- **Databases:** MySQL, PostgreSQL, MongoDB, Firestore
- **Cloud & DevOps:** GCP (Cloud Run, Pub/Sub, Cloud Tasks, Firestore), AWS (EC2, S3), Docker, VMware Workstation, Parallels, Firebase, Linux, Nginx
- **Security:** OAuth 2.0, OpenID Connect, JWT
- **Testing & Tools:** Mocha, Vitest, Git, Agile, Daily Standups
- **AI:** Groq API, Claude, Cursor, GitHub Copilot
- **Familiar:** Kafka, Redis, Spring Boot, JPA, Hibernate, Tailwind CSS
