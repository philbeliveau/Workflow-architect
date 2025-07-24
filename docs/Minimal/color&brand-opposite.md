Here’s a clean, structured prompt you can give to your AI (e.g. Claude-code, Manus, or a design copilot) to **implement the new background color and typography** system across the site:

---

### 🧠 Prompt to AI — NEWCODE Background and Typography Update

You are updating the design of the *NEWCODE* website to align with our refined visual identity.

---

### 🎯 Goal

Apply a new color system using a calm **olive gray-green background** (`#7a8b73`) and clean **white typography** throughout the site. This should become the **default visual base**, replacing previous beige/dark backgrounds.

---

### ✅ New Visual System to Implement

#### 🎨 Colors

| Purpose             | HEX       | Usage                               |
| ------------------- | --------- | ----------------------------------- |
| **Background Base** | `#7a8b73` | Full-page background (hero, body)   |
| **Primary Text**    | `#ffffff` | Headings, body text, nav links      |
| **Accent Text**     | `#d4af37` | CTA hover, button icons, highlights |
| **Secondary Text**  | `#cfcfcf` | Paragraphs, footers, UI labels      |
| **Divider Lines**   | `#a1a89a` | Card borders, UI separators         |

---

### 🔤 Typography

* **Headings**: Satoshi or General Sans, `white`, bold
* **Body Text**: IBM Plex Sans or Inter, `#ffffff` or `#cfcfcf`
* **Code/Monospace**: JetBrains Mono, `white` or soft bronze
* **Logo text**: Use existing "NEWCODE" mark in white on green background

---

### 🧩 Sections to Apply

1. **Homepage Hero Section**

   * Background: `#7a8b73`
   * Headline: white
   * Subtext: soft white or `#cfcfcf`
   * Button: beige or bronze with white text (`#d4af37`, `#ffffff`)

2. **Navigation**

   * Background: transparent or `#7a8b73`
   * Link text: white
   * Hover: underline or shift to bronze (`#d4af37`)

3. **Footer**

   * Background: same green or deeper (`#5e6d58`)
   * Text: light gray or white
   * Links: underline on hover in bronze

4. **Cards / Panels**

   * Default card background: darker olive tint or semi-transparent beige
   * Text inside: white

---

### ✨ Optional Enhancements

* Add a **subtle texture or gradient overlay** to hero background (`#7a8b73 → #5d6c54`)
* Introduce **hover transitions**: white → bronze, or slight scale
* Maintain **accessibility contrast** throughout (WCAG AA+)

---

Let me know if you want to also:

* Apply this to blog pages, CMS templates, or reusable components
* Generate a Tailwind config or SCSS theme variables for the full site
* Create a light-mode inversion (optional)

---

Would you like me to generate the Tailwind theme or a starter CSS block next?
