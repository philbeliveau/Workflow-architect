**🧠 Prompt to Manus AI:**

You're acting as a senior product strategist and UX researcher.

I want you to write a full **Product Requirements Document (PRD)** to serve as input for Claude-code to generate the complete frontend and backend of a consulting website. This website will promote and sell a new offering for AI-native developer acceleration and automation.

### 🧭 Project Overview:

We are launching an **AI-native automation consulting practice** that helps small dev teams, solo developers, and technical agencies supercharge their workflows using agentic development frameworks like Claude-code, MCP, CrewAI, and Autogen.

We offer **installation, configuration, and coaching services** so these teams can:

* Onboard faster to new codebases
* Generate code using LLMs and swarm agents
* Automate routine PR creation and documentation
* Integrate agent systems with tools like Jira, Confluence, ClickUp

Our target clients are:

* Small dev teams at agencies or startups (1–5 engineers)
* Freelancers and solopreneur developers
* Fractional CTOs and tech project managers

We are **not** focused on training or theory. We are selling done-with-you consulting and workflow transformation.

---

### 🛠️ Your Task:

Produce a **detailed Product Requirements Document (PRD)** that includes:

#### 1. **Website Goal & Value Proposition**

* A 1-2 sentence mission statement
* Clear articulation of value for each target persona

#### 2. **Key Pages**

Design layout and content structure for:

* Homepage
* Services/Offerings
* Case Studies
* Book a Demo / Contact
* Blog (for publishing field notes and updates)

#### 3. **Call-to-Actions**

Suggest CTAs for each page (e.g. "Book AI Workflow Audit", "Download Setup Framework", etc.)

#### 4. **Design Language & UX Guidance**

* Best UI/UX patterns from AI infrastructure companies (e.g. Langchain, Replit, Cursor)
* Typography, color palette, layout principles for technical credibility + speed
* Reference 3 modern sites to emulate and explain why

#### 5. **Relevant Copywriting Examples**

Write hero section taglines, subheaders, and microcopy optimized for our audience. No fluff. Speak to:

* Faster delivery
* Less burnout
* Lower headcount
* More predictable sprints

#### 6. **Trust-Building Elements**

* Case study format & placement
* Testimonials or “Before/After” metrics layout
* Logos or integrations we should mention (Claude, Autogen, GitHub, Jira, etc.)

#### 7. **SEO & Blog Strategy**

Give us a content plan for 5 blog posts optimized for our buyer persona. E.g., “How to onboard a new repo in 2 hours with Claude”, “Best Claude.md setup for solo devs”, etc.

#### 8. **Sources & Market Validation**

Find and cite **at least 3 authoritative sources** that confirm:

* The demand for AI-agent developer tooling
* The rise in solo/fractional developer teams
* The productivity gap AI can solve in small dev shops

#### 9. **Claude-Code Integration Ready**

Write the PRD in a format Claude-code can process to:

* Generate React/Next.js codebase
* Build reusable components (cards, pricing tables, CTAs)
* Populate with placeholder content

Make sure to include **component descriptions, routing structure, and required API endpoints** for a basic contact form, lead capture, and blog CMS.

#### 10. Website UI description. 
If you can, I want you to create a detailed description of the UI of the website so that claude-code can company the UI and put the info in it. 
https://cluely.com/#features

---

### 📦 Output Format:

```
# Product Requirements Document (Claude-Code Input)

## Project Overview
...

## Value Proposition
...

## Page Breakdown
- Homepage
  - Components:
    - HeroBanner: “Deploy AI Workflows. Deliver 3x Faster.”
    - ServicesOverviewCard[]
    - CTA: “Book a Workflow Audit”
  - Routing: /

...

## Component Library
- HeroBanner(title, subtitle, image)
- ServicesOverviewCard(title, description, icon)
...

## API Routes
- POST /api/contact
- GET /api/blog/:slug
...

## Market Validation Sources
1. [Title - Source Link]
2. ...
```

---

Give me the full PRD. Do not generate any code yet. Just give Claude-code the instructions to start coding.

Tell claude-code to build a french version of the Website first. 