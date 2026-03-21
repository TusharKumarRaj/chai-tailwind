# ChaiTailwind

A lightweight, custom Tailwind-like utility engine built from scratch using JavaScript.

---

## About the Project

ChaiTailwind is a utility-first styling engine that mimics the core idea of Tailwind CSS. Instead of pre-generated CSS, it parses class names and dynamically applies styles to DOM elements at runtime.

This project was built to understand:
- DOM traversal
- Class parsing
- Dynamic styling
- Pipeline architecture

---

## Internal Architecture

![Architecture](./assets/architecture.png)

Pipeline:

Scanner → Styler → Interpreter → Parser → Handler → DOM Update

---

## Flow Explanation

- **Scanner**
  - Returns a NodeList of elements containing class attributes

- **Styler**
  - Extracts relevant class names from the NodeList

- **Interpreter**
  - Acts as the central controller
  - Sends classes to the parser and handler

- **Parser**
  - Converts class strings into structured data  
  - Example:
    ```
    chai-p-2 → { prefix: "p", value: "2" }
    ```

- **Handler**
  - Applies computed styles to DOM elements

- **DOM Update**
  - Final styles are reflected in the UI

---

## Demo

A demo is included in the project.

### Option 1: Using VS Code Live Server (Recommended)

1. Install the "Live Server" extension in VS Code
   
   ![Live_Server](./assets/live_server.png)
   
2. Open index.html  
3. Click "Go Live" as shown in figure

   ![Live_Server](./assets/live_server_button.png)

---

### Option 2: Using Node.js

Make sure Node.js is installed, then run:

```bash
git clone <your-repo-url>
cd chai-tailwind
npx http-server
