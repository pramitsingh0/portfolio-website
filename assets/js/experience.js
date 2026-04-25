AOS.init();

//  Work experience cards

const experiencecards = document.querySelector(".experience-cards");
const exp = [
  {
    title: "Backend Developer",
    cardImage: "assets/images/experience-page/meel.jpeg",
    place: "Meel",
    time: "(Jun, 2025 - Present)",
    desp: "<li>Took ownership of backend architecture and API design for a logistics platform, building scalable services across orders, routes, invoices, and admin systems on Google Cloud Run</li><li>Implemented real-time order fetching and event-driven workflows using Google Cloud Pub/Sub, enabling asynchronous processing and decoupled service communication</li><li>Used Firestore as the primary database, designing data models and queries for high-throughput reads/writes across orders, routes, and notifications</li><li>Built commerce integrations (Salla, Zid, WooCommerce) with webhook pipelines, designed for reliable synchronization under burst traffic conditions</li><li>Developed Zoho Books integration suite (OAuth/token lifecycle, contacts, sales orders, invoices), enabling automated invoice generation and seamless financial data synchronization</li><li>Designed high-throughput backend systems supporting 1,000+ daily orders, validated through load testing and performance benchmarking</li><li>Designed event-driven notification system (Email/WhatsApp/SMS/FCM) with idempotency and queue-based dispatch on GCP, validated reliability for ~5k notifications/day under load</li><li>Engineered bulk order ingestion pipeline (CSV/Excel) with validation and preview workflows, reducing manual processing time and data errors</li><li>Implemented geospatial and AI route optimization features, including reverse geocoding, distance/time computation, ETA extraction, and real-time route orchestration</li><li>Improved API response times by ~30% using query optimization, indexing, and caching strategies, reducing latency for critical endpoints</li><li>Integrated automation engines (Zapier, Make.com) to build no-code/low-code workflows for data pipelines, Excel exports for business reporting, and event-driven triggers across third-party services</li>",
  },
  {
    title: "Backend Developer",
    cardImage: "assets/images/experience-page/icomply.jpeg",
    place: "iComply Lifescience Solutions",
    time: "(Jun, 2023 - Jun, 2025)",
    desp: "<li>Designed and implemented the NCO (Non-Conformance) backend module, handling complex relational workflows across deviation, action items, RCA, and CAPA entities</li><li>Developed dynamic PDF reports using PHP, MySQL, and Node.js, leveraging domPDF and html-pdf-node to generate CAPA plan reports by embedding data from the database</li><li>Implemented JWT authentication to enhance security and streamline access control for backend systems</li><li>Orchestrated a Python (Django)-powered microservice for automated email notifications triggered by pivotal backend events, achieving 99% uptime through optimized error handling and monitoring</li><li>Engineered complex SQL queries using joins, unions, subqueries, and indexing, improving critical query performance from 12s to under 500ms</li>",
  },
  {
    title: "Full Stack Developer Intern",
    cardImage: "assets/images/experience-page/molog.jpg",
    place: "MoLog Media and Advertising",
    time: "(Apr, 2022 - Jun, 2022)",
    desp: "<li>Led the migration of MoLog's Soham-ngma product to AMP (Accelerated Mobile Pages), resulting in a 50% reduction in page load times and significantly improving mobile user experience</li>",
  },
];

const showCards2 = () => {
  let output = "";
  exp.forEach(
    ({ title, cardImage, place, time, desp }) =>
      (output += `
    <div class="col gaap" data-aos="fade-up" data-aos-easing="linear" data-aos-delay="100" data-aos-duration="400">
      <div class="card card1">
        <img src="${cardImage}" class="featured-image"/>
        <article class="card-body">
          <header>
            <div class="title">
              <h3>${title}</h3>
            </div>
            <p class="meta">
              <span class="pre-heading">${place}</span><br>
              <span class="author">${time}</span>
            </p>
            <ol>
              ${desp}
            </ol>
          </header>
        </article>
      </div>
    </div>
      `)
  );
  experiencecards.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards2);

// Volunteership Cards

// Hackathon Section
