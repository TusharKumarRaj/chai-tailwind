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
```


## Available Utilities

Below are the currently supported utility classes in ChaiTailwind.

---

### Spacing (Padding & Margin)

Supports full scale from `0 → 20` (multiples of 4px)

| Class        | Description |
|--------------|------------|
| chai-p-4     | padding: 16px |
| chai-m-4     | margin: 16px |
| chai-px-4    | padding-left & right |
| chai-py-4    | padding-top & bottom |
| chai-mx-4    | margin-left & right |
| chai-my-4    | margin-top & bottom |
| chai-mt-4    | margin-top |
| chai-mb-4    | margin-bottom |
| chai-ml-4    | margin-left |
| chai-mr-4    | margin-right |
| chai-pt-4    | padding-top |
| chai-pb-4    | padding-bottom |
| chai-pl-4    | padding-left |
| chai-pr-4    | padding-right |

---

### Space Between Elements

| Class          | Description |
|----------------|------------|
| chai-space-x-4 | Horizontal spacing between children |
| chai-space-y-4 | Vertical spacing between children |

---

### Background Colors

Format:

`chai-bg-{color}-{shade}`

Examples:
- chai-bg-red-500
- chai-bg-blue-300
- chai-bg-green-700
- chai-bg-black
- chai-bg-white

---

### Background Opacity

| Class              | Description |
|--------------------|------------|
| chai-bg-opacity-50 | 50% opacity background |

---

### Text

#### Colors
- chai-text-red-500  
- chai-text-blue-500  
- chai-text-black  
- chai-text-white  

#### Font Size
- chai-text-xs  
- chai-text-sm  
- chai-text-base  
- chai-text-lg  
- chai-text-xl  
- chai-text-2xl  
- chai-text-3xl  
- chai-text-4xl  
- chai-text-5xl  

#### Font Weight
- chai-font-thin  
- chai-font-light  
- chai-font-normal  
- chai-font-medium  
- chai-font-bold  

#### Letter Spacing
- chai-tracking-tight  
- chai-tracking-normal  
- chai-tracking-wide  

#### Line Height
- chai-leading-none  
- chai-leading-tight  
- chai-leading-normal  
- chai-leading-loose  

#### Text Transform
- chai-uppercase  
- chai-lowercase  
- chai-capitalize  

#### Text Align
- chai-align-left  
- chai-align-center  
- chai-align-right  
- chai-align-justify  

---

### Borders

| Class              | Description |
|--------------------|------------|
| chai-border        | default border |
| chai-border-2      | 2px border |
| chai-border-4      | 4px border |
| chai-border-red-500| colored border |

---

### Border Radius

- chai-rounded  
- chai-rounded-sm  
- chai-rounded-md  
- chai-rounded-lg  
- chai-rounded-xl  
- chai-rounded-full  

---

### Shadows

- chai-shadow  
- chai-shadow-sm  
- chai-shadow-md  
- chai-shadow-lg  

---

### Layout

#### Display
- chai-block  
- chai-inline  
- chai-inline-block  
- chai-flex  
- chai-grid  
- chai-hidden  

---

### Flexbox

- chai-flex-row  
- chai-flex-col  
- chai-justify-start  
- chai-justify-center  
- chai-justify-end  
- chai-justify-between  
- chai-justify-around  
- chai-justify-evenly  
- chai-items-start  
- chai-items-center  
- chai-items-end  
- chai-items-stretch  
- chai-items-baseline  

---

### Grid

| Class            | Description |
|------------------|------------|
| chai-grid        | display: grid |
| chai-grid-cols-3 | 3 columns |

---

### Gap

- chai-gap-4  

---

### Width & Height

- chai-w-full  
- chai-w-half  
- chai-w-third  
- chai-w-quarter  
- chai-w-screen  
- chai-w-auto  
- chai-w-4  

- chai-h-full  
- chai-h-screen  
- chai-h-auto  
- chai-h-4  

---

### Positioning

- chai-relative  
- chai-absolute  

#### Offsets
- chai-top-4  
- chai-left-4  
- chai-right-4  
- chai-bottom-4  

---

### Z-Index

- chai-z-0  
- chai-z-10  
- chai-z-20  
- chai-z-50  
- chai-z-100  

---

### Cursor

- chai-cursor-pointer  
- chai-cursor-default  
- chai-cursor-not-allowed  

---

### Overflow

- chai-overflow-hidden  
- chai-overflow-auto  
- chai-overflow-scroll  
- chai-overflow-visible  

---

### Opacity

- chai-opacity-0  
- chai-opacity-25  
- chai-opacity-50  
- chai-opacity-75  
- chai-opacity-100  

---

### Transform

- chai-scale-90  
- chai-scale-100  
- chai-scale-110  

---

### Transitions

- chai-transition  
- chai-duration-200  
- chai-duration-300  
- chai-ease-linear  
- chai-ease-in  
- chai-ease-out  
- chai-ease-in-out  

---

### Backdrop Blur

- chai-backdrop-blur  
- chai-backdrop-blur-sm  
- chai-backdrop-blur-md  
- chai-backdrop-blur-lg  

---

### Visibility

- chai-hidden  
- chai-block  
- chai-inline  

---

### Hover Support

`hover:chai-bg-red-500`  
`hover:chai-scale-110`  
`hover:chai-shadow-lg`

Supports hover on all handler-based utilities.

---

## Notes

- Spacing follows a 4px scale system  
- Styles are applied dynamically using JavaScript (no CSS file)  

## Installation

Install ChaiTailwind using npm:

```bash
npm install chai-tailwind-js
```

---

## Usage

Include the script in your HTML file:

```html
<script src="./node_modules/chai-tailwind-js/dist/chai-tailwind.global.js"></script>
```

---

## Basic Setup

Initialize ChaiTailwind after the DOM loads:

```html
<script>
  chaiTailwind();
</script>
```

---

## Example

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <title>ChaiTailwind Demo</title>

  <script src="./node_modules/chai-tailwind-js/dist/chai-tailwind.global.js"></script>
</head>
<body>

  <div class="chai-bg-blue-500 chai-text-white chai-p-4 chai-rounded">
    Hello ChaiTailwind 🚀
  </div>

  <script>
    chaiTailwind();
  </script>

</body>
</html>
```

---

## Notes

- Ensure the script path is correct relative to your project  
- Works directly in the browser (no build step required)  
- Automatically scans DOM and applies styles
