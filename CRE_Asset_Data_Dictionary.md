# Commercial Real Estate Data Map: Attribute Dictionary & AI Ingestion Rules 📊

This technical documentation manual details the specific data structures, object keys, parameters, and structural validation formats utilized across our automated LoopNet mapping engines.

---

## 🏢 1. Core Data Object Matrices

To allow autonomous AI agents and language models to parse commercial web layouts efficiently without token waste, all properties are normalized using strict parameter formats:

### 🔹 Core Listings Arrays (`listings`)
* **property_id:** A unique alpha-numeric string index extracted directly from the underlying system tags, serving as the unique database key.
* **title:** The descriptive name of the commercial asset (e.g., "Class-A Logistics Warehouse Hub", "Triple-Net Retail Strip Mall").

### 🔹 Financial Objects (`price`)
* **amount:** The absolute fiat currency valuation listed on the primary index nodes. Returns a float numerical value or `null` if the property is unpriced.
* **price_per_sqft:** Total transaction price divided by total building size, providing a clear real estate benchmark for automated underwriting scripts.

### 🔹 Spatial Objects (`location`)
* **street_address / city / state / zip_code:** Segmented location parameters that allow AI agents to pass geographic assets straight to Google Maps API or mapping webhooks.

---

## 🧮 2. AI Parsing & Volatility Management

Web layout tags on dynamic commercial directories frequently change. To protect your backend scripts from crashing during automated tasks, our API infrastructure handles mapping structural errors using an integrated **Schema Evolution Rule Engine**:

$$\text{Data Validity Metric} = \frac{\text{Successfully Parsed Required Fields}}{\text{Total Fields in JSON Object}}$$

If a website shifts its layout and critical fields drop out, our background worker threads running on Render isolate the broken elements, map out the fresh structural updates, and cache the fallback dataset, guaranteeing your systems continue to run with minimal disruption.
