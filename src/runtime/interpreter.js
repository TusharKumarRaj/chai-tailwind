import { config } from "../utils/config.js";
import { parseClass } from "../core/parser.js";

const handlers = {

  p: (el, value) => {
    const s = config.spacing[value];
    if (s) el.style.padding = s;
  },

  m: (el, value) => {
    const s = config.spacing[value];
    if (s) el.style.margin = s;
  },

  bg: (el, value) => {
    const [color, shade] = value.split("-");
    const c = config.colors[color]?.[shade];
    if (c) el.style.backgroundColor = c;
  },

  text: (el, value) => {
    const parts = value.split("-");

    if (parts.length === 1) {
      const size = config.fontSize[value];
      if (size) return (el.style.fontSize = size);

      const color = config.colors[value];
      if (color) el.style.color = color;

    } else {
      const [color, shade] = parts;
      const c = config.colors[color]?.[shade];
      if (c) el.style.color = c;
    }
  },

  font: (el, value) => {
    const fw = config.fontWeight[value];
    if (fw) el.style.fontWeight = fw;
  },

  tracking: (el, value) => {
    const ls = config.letterSpacing[value];
    if (ls) el.style.letterSpacing = ls;
  },

  leading: (el, value) => {
    const lh = config.lineHeight[value];
    if (lh) el.style.lineHeight = lh;
  },

  uppercase: (el) => el.style.textTransform = "uppercase",
  lowercase: (el) => el.style.textTransform = "lowercase",
  capitalize: (el) => el.style.textTransform = "capitalize",

  rounded: (el, value) => {
    const r = config.borderRadius[value || "DEFAULT"];
    if (r) el.style.borderRadius = r;
  },

  shadow: (el, value) => {
    const s = config.shadows[value || "DEFAULT"];
    if (s) el.style.boxShadow = s;
  },

  border: (el, value) => {
    if (!value) {
      el.style.borderWidth = config.borderWidth.DEFAULT;
      el.style.borderStyle = "solid";
      return;
    }

    if (config.borderWidth[value]) {
      el.style.borderWidth = config.borderWidth[value];
      el.style.borderStyle = "solid";
      return;
    }

    const [color, shade] = value.split("-");
    const c = config.colors[color]?.[shade] || config.colors[color];
    if (c) {
      el.style.border = `${config.borderWidth.DEFAULT} solid ${c}`;
    }
  },

  flex: (el, value) => {
    el.style.display = "flex";
    if (value === "col") el.style.flexDirection = "column";
    if (value === "row") el.style.flexDirection = "row";
  },

  justify: (el, value) => {
    const map = {
      start: "flex-start",
      center: "center",
      end: "flex-end",
      between: "space-between",
      around: "space-around",
      evenly: "space-evenly",
    };

    if (map[value]) {
      el.style.display = "flex";
      el.style.justifyContent = map[value];
    }
  },

  items: (el, value) => {
    const map = {
      start: "flex-start",
      center: "center",
      end: "flex-end",
      stretch: "stretch",
      baseline: "baseline",
    };

    if (map[value]) {
      el.style.display = "flex";
      el.style.alignItems = map[value];
    }
  },

  grid: (el, value) => {
    el.style.display = "grid";
    // handles chai-grid-cols-{n} → prefix=grid, value=cols-{n}
    if (value && value.startsWith("cols-")) {
      const n = value.replace("cols-", "");
      el.style.gridTemplateColumns = `repeat(${n}, 1fr)`;
    }
  },

  gap: (el, value) => {
    const g = config.spacing[value];
    if (g) el.style.gap = g;
  },

  w: (el, value) => {
    const named = config.widths[value];
    if (named) { el.style.width = named; return; }
    const s = config.spacing[value];
    if (s) el.style.width = s;
  },

  h: (el, value) => {
    const named = config.heights[value];
    if (named) { el.style.height = named; return; }
    const s = config.spacing[value];
    if (s) el.style.height = s;
  },

  align: (el, value) => {
    const a = config.textAlign[value];
    if (a) el.style.textAlign = a;
  },

  cursor: (el, value) => {
    const c = config.cursor[value];
    if (c) el.style.cursor = c;
  },

  overflow: (el, value) => {
    const o = config.overflow[value];
    if (o) el.style.overflow = o;
  },

  opacity: (el, value) => {
    el.style.opacity = value / 100;
  },

  relative: (el) => el.style.position = "relative",
  absolute: (el) => el.style.position = "absolute",

  top: (el, value) => {
    const s = config.spacing[value];
    if (s) el.style.top = s;
  },

  left: (el, value) => {
    const s = config.spacing[value];
    if (s) el.style.left = s;
  },

  z: (el, value) => {
    const z = config.zIndex[value];
    if (z !== undefined) el.style.zIndex = z;
  },

  transition: (el) => {
    el.style.transition = "all 0.2s ease";
  },

  duration: (el, value) => {
    el.style.transitionDuration = `${value}ms`;
  },

  ease: (el, value) => {
    const t = config.transitionTiming[value];
    if (t) el.style.transitionTimingFunction = t;
  },

  scale: (el, value) => {
    el.style.transform = `scale(${value / 100})`;
  },

  px: (el, value) => {
    const s = config.spacing[value];
    if (s) {
      el.style.paddingLeft = s;
      el.style.paddingRight = s;
    }
  },

  py: (el, value) => {
    const s = config.spacing[value];
    if (s) {
      el.style.paddingTop = s;
      el.style.paddingBottom = s;
    }
  },

  mx: (el, value) => {
    const s = config.spacing[value];
    if (s) {
      el.style.marginLeft = s;
      el.style.marginRight = s;
    }
  },

  my: (el, value) => {
    const s = config.spacing[value];
    if (s) {
      el.style.marginTop = s;
      el.style.marginBottom = s;
    }
  },

  mt: (el, value) => {
    const s = config.spacing[value];
    if (s) el.style.marginTop = s;
  },

  mb: (el, value) => {
    const s = config.spacing[value];
    if (s) el.style.marginBottom = s;
  },

  ml: (el, value) => {
    const s = config.spacing[value];
    if (s) el.style.marginLeft = s;
  },

  mr: (el, value) => {
    const s = config.spacing[value];
    if (s) el.style.marginRight = s;
  },

  pt: (el, value) => {
    const s = config.spacing[value];
    if (s) el.style.paddingTop = s;
  },

  pb: (el, value) => {
    const s = config.spacing[value];
    if (s) el.style.paddingBottom = s;
  },

  pl: (el, value) => {
    const s = config.spacing[value];
    if (s) el.style.paddingLeft = s;
  },

  pr: (el, value) => {
    const s = config.spacing[value];
    if (s) el.style.paddingRight = s;
  },

  "space-x": (el, value) => {
    const s = config.spacing[value];
    if (s) {
      Array.from(el.children).forEach((child, idx) => {
        if (idx > 0) child.style.marginLeft = s;
      });
    }
  },

  "space-y": (el, value) => {
    const s = config.spacing[value];
    if (s) {
      Array.from(el.children).forEach((child, idx) => {
        if (idx > 0) child.style.marginTop = s;
      });
    }
  },

  "backdrop-blur": (el, value) => {
    const b = config.blur[value || "DEFAULT"];
    if (b) el.style.backdropFilter = `blur(${b})`;
  },

  "bg-opacity": (el, value) => {
    const opacity = config.opacity[value];
    if (opacity !== undefined) {
      const bgColor = window.getComputedStyle(el).backgroundColor;
      // Replace rgba alpha channel or convert rgb to rgba
      const rgbaColor = bgColor.replace(/rgba?\(/, 'rgba(').replace(/\)/, `)`);
      const match = rgbaColor.match(/(rgba?\([^,]+,[^,]+,[^,]+),/);
      if (match) {
        el.style.backgroundColor = `${match[1]}, ${opacity})`;
      }
    }
  },

  hidden: (el) => el.style.display = "none",
  block: (el) => el.style.display = "block",
  inline: (el) => el.style.display = "inline",

  right: (el, value) => {
    const s = config.spacing[value];
    if (s) el.style.right = s;
  },

  bottom: (el, value) => {
    const s = config.spacing[value];
    if (s) el.style.bottom = s;
  },
};

export function interpretClass(element, cls) {
  const parsed = parseClass(cls);
  if (!parsed) return;

  const { hover, prefix, value } = parsed;
  const handler = handlers[prefix];
  if (!handler) return;

  if (!hover) {
    handler(element, value);
  }

  if (hover === "hover") {
    const original = element.style.cssText;

    element.addEventListener("mouseenter", () => {
      handler(element, value);
    });

    element.addEventListener("mouseleave", () => {
      element.style.cssText = original;
    });
  }
}