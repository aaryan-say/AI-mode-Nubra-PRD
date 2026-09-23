/* @ds-bundle: {"format":4,"namespace":"NubraDesignSystem_019de8","components":[],"sourceHashes":{"ui_kits/nubra-pro/BottomDock.jsx":"4a91659d3833","ui_kits/nubra-pro/ChartPanel.jsx":"170aa19c16e3","ui_kits/nubra-pro/NavRail.jsx":"ace3d83c5bde","ui_kits/nubra-pro/OrderTicket.jsx":"8a5cc86bed71","ui_kits/nubra-pro/Primitives.jsx":"82d4bd03aba7","ui_kits/nubra-pro/TopBar.jsx":"06ed554e64a8","ui_kits/nubra-pro/Watchlist.jsx":"bb64bd0cc95b"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.NubraDesignSystem_019de8 = window.NubraDesignSystem_019de8 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// ui_kits/nubra-pro/BottomDock.jsx
try { (() => {
// Bottom dock — Positions / Holdings / Orders / Funds tabs + AI chat fab
const BottomDock = () => {
  const [tab, setTab] = React.useState("Positions");
  const tabs = [{
    id: "Positions",
    count: 2
  }, {
    id: "Holdings",
    count: 12
  }, {
    id: "Orders",
    count: 5
  }, {
    id: "Baskets",
    count: 0
  }, {
    id: "Funds",
    count: null
  }];
  return /*#__PURE__*/React.createElement("div", {
    style: {
      borderTop: "1px solid var(--dark-border)",
      background: "rgba(6,10,15,.6)",
      backdropFilter: "blur(8px)",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      padding: "0 16px",
      gap: 24,
      height: 40
    }
  }, tabs.map(t => /*#__PURE__*/React.createElement("button", {
    key: t.id,
    onClick: () => setTab(t.id),
    style: {
      display: "flex",
      alignItems: "center",
      gap: 6,
      padding: "8px 0",
      border: 0,
      background: "transparent",
      cursor: "pointer",
      color: tab === t.id ? "var(--dark-fg-1)" : "var(--dark-fg-3)",
      fontFamily: "var(--font-sans)",
      fontWeight: 500,
      fontSize: 13,
      borderBottom: `2px solid ${tab === t.id ? "var(--nubra-blue-200)" : "transparent"}`,
      height: 40
    }
  }, t.id, t.count != null && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "Geist",
      fontSize: 10,
      fontWeight: 600,
      background: "rgba(245,245,255,.08)",
      color: "var(--dark-fg-2)",
      padding: "1px 5px",
      borderRadius: 999,
      minWidth: 16,
      textAlign: "center"
    }
  }, t.count))), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--dark-fg-3)",
      fontSize: 11
    }
  }, "Net PnL"), /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--up-300)",
      fontFamily: "Geist",
      fontWeight: 600,
      fontSize: 13,
      fontVariantNumeric: "tabular-nums"
    }
  }, "+\u20B92,840.50 (+1.24%)")), /*#__PURE__*/React.createElement(Positions, null));
};
const POSITIONS = [{
  sym: "RELIANCE",
  product: "MIS",
  qty: 25,
  avg: 1281.40,
  ltp: 1293.65,
  pnl: 306.25,
  pct: 0.96
}, {
  sym: "BHARTIARTL",
  product: "CNC",
  qty: 10,
  avg: 1602.30,
  ltp: 1594.20,
  pnl: -81.00,
  pct: -0.51
}];
const Positions = () => /*#__PURE__*/React.createElement("div", {
  style: {
    height: 140,
    overflowY: "auto"
  }
}, /*#__PURE__*/React.createElement("div", {
  style: {
    display: "grid",
    gridTemplateColumns: "2fr 1fr 1fr 1fr 1fr 1fr 1fr",
    padding: "8px 16px",
    borderBottom: "1px solid var(--dark-border)",
    color: "var(--dark-fg-3)",
    fontSize: 10,
    fontWeight: 500,
    letterSpacing: ".04em"
  }
}, /*#__PURE__*/React.createElement("span", null, "Instrument"), /*#__PURE__*/React.createElement("span", null, "Product"), /*#__PURE__*/React.createElement("span", {
  style: {
    textAlign: "right"
  }
}, "Qty"), /*#__PURE__*/React.createElement("span", {
  style: {
    textAlign: "right"
  }
}, "Avg."), /*#__PURE__*/React.createElement("span", {
  style: {
    textAlign: "right"
  }
}, "LTP"), /*#__PURE__*/React.createElement("span", {
  style: {
    textAlign: "right"
  }
}, "P&L"), /*#__PURE__*/React.createElement("span", {
  style: {
    textAlign: "right"
  }
}, "Chg %")), POSITIONS.map(p => /*#__PURE__*/React.createElement("div", {
  key: p.sym,
  style: {
    display: "grid",
    gridTemplateColumns: "2fr 1fr 1fr 1fr 1fr 1fr 1fr",
    padding: "10px 16px",
    borderBottom: "1px solid var(--dark-border)",
    alignItems: "center"
  }
}, /*#__PURE__*/React.createElement("span", {
  style: {
    fontFamily: "Geist",
    fontWeight: 600,
    fontSize: 12,
    color: "var(--dark-fg-1)"
  }
}, p.sym), /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement(Tag, {
  tone: p.product === "MIS" ? "info" : "up"
}, p.product)), /*#__PURE__*/React.createElement("span", {
  style: {
    textAlign: "right",
    fontFamily: "Geist",
    color: "var(--dark-fg-1)",
    fontVariantNumeric: "tabular-nums",
    fontSize: 12
  }
}, p.qty), /*#__PURE__*/React.createElement("span", {
  style: {
    textAlign: "right",
    fontFamily: "Geist",
    color: "var(--dark-fg-2)",
    fontVariantNumeric: "tabular-nums",
    fontSize: 12
  }
}, p.avg.toFixed(2)), /*#__PURE__*/React.createElement("span", {
  style: {
    textAlign: "right",
    fontFamily: "Geist",
    color: "var(--dark-fg-1)",
    fontVariantNumeric: "tabular-nums",
    fontSize: 12
  }
}, p.ltp.toFixed(2)), /*#__PURE__*/React.createElement("span", {
  style: {
    textAlign: "right",
    fontFamily: "Geist",
    fontWeight: 600,
    fontVariantNumeric: "tabular-nums",
    fontSize: 12,
    color: p.pnl >= 0 ? "var(--up-300)" : "var(--down-500)"
  }
}, p.pnl >= 0 ? "+" : "−", "\u20B9", Math.abs(p.pnl).toFixed(2)), /*#__PURE__*/React.createElement("span", {
  style: {
    textAlign: "right"
  }
}, /*#__PURE__*/React.createElement(Tag, {
  tone: p.pct >= 0 ? "up" : "down"
}, p.pct >= 0 ? "▲" : "▼", " ", Math.abs(p.pct).toFixed(2), "%")))));
const AIFab = () => /*#__PURE__*/React.createElement("button", {
  style: {
    position: "fixed",
    right: 20,
    bottom: 20,
    zIndex: 50,
    width: 48,
    height: 48,
    borderRadius: "50%",
    border: 0,
    cursor: "pointer",
    background: "linear-gradient(135deg, #6E83FB 0%, #4358E1 100%)",
    boxShadow: "0 8px 24px rgba(67,88,225,.4), 0 0 0 1px rgba(255,255,255,.1) inset",
    display: "grid",
    placeItems: "center"
  }
}, /*#__PURE__*/React.createElement(Icon, {
  name: "ai",
  size: 22,
  color: "white"
}));
window.BottomDock = BottomDock;
window.AIFab = AIFab;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/nubra-pro/BottomDock.jsx", error: String((e && e.message) || e) }); }

// ui_kits/nubra-pro/ChartPanel.jsx
try { (() => {
// Chart panel — header + tabs + intervals + Sell/Buy quote pills + faux candle chart
const ChartPanel = ({
  symbol = "RELIANCE",
  ltp = "1,293.65",
  delta = 12.25,
  pct = 0.95
}) => {
  const [tab, setTab] = React.useState("Chart");
  const [interval, setInterval] = React.useState("5m");
  const [range, setRange] = React.useState("5D");
  return /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      display: "flex",
      flexDirection: "column",
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 12,
      padding: "10px 16px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 4,
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 8
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--dark-fg-1)",
      fontFamily: "Geist",
      fontWeight: 700,
      fontSize: 16
    }
  }, symbol), /*#__PURE__*/React.createElement(Tag, {
    tone: "info"
  }, "\u2726 13 Signals")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 8
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--dark-fg-1)",
      fontFamily: "Geist",
      fontWeight: 600,
      fontSize: 18,
      fontVariantNumeric: "tabular-nums"
    }
  }, "\u20B9", ltp), /*#__PURE__*/React.createElement(Delta, {
    value: delta,
    pct: pct
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--dark-fg-3)",
      fontSize: 11
    }
  }, "NSE \u2195"))), /*#__PURE__*/React.createElement("button", {
    style: {
      ...iconBtn2
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "set-alert",
    size: 18,
    color: "white"
  })), /*#__PURE__*/React.createElement(Button, {
    variant: "contained",
    color: "neutral",
    size: "md",
    leftIcon: "scalper",
    style: {
      background: "#fff",
      color: "#161C22"
    }
  }, "Scalper"), /*#__PURE__*/React.createElement("button", {
    style: iconBtn2
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "more",
    size: 18,
    color: "white"
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      padding: "0 16px",
      gap: 32,
      borderBottom: "1px solid var(--dark-border)"
    }
  }, ["Chart", "Details", "Option Chain", "Analyse with AI"].map(t => /*#__PURE__*/React.createElement("button", {
    key: t,
    onClick: () => setTab(t),
    style: {
      padding: "10px 0",
      border: 0,
      background: "transparent",
      cursor: "pointer",
      color: tab === t ? "var(--nubra-blue-200)" : "var(--dark-fg-3)",
      fontFamily: "var(--font-sans)",
      fontWeight: 500,
      fontSize: 13,
      borderBottom: `2px solid ${tab === t ? "var(--nubra-blue-200)" : "transparent"}`,
      display: "flex",
      alignItems: "center",
      gap: 6
    }
  }, t === "Analyse with AI" && "✦ ", t))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 16,
      padding: "10px 16px",
      color: "var(--dark-fg-3)",
      fontSize: 12
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 8
    }
  }, ["1D", "5D", "1M", "3M", "YTD", "1Y", "5Y", "All"].map(r => /*#__PURE__*/React.createElement("button", {
    key: r,
    onClick: () => setRange(r),
    style: {
      padding: "4px 8px",
      border: 0,
      background: "transparent",
      cursor: "pointer",
      color: range === r ? "var(--nubra-blue-200)" : "var(--dark-fg-3)",
      fontWeight: range === r ? 600 : 500,
      fontSize: 12,
      borderRadius: 4
    }
  }, r))), /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--dark-fg-3)"
    }
  }, "Interval:"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 8
    }
  }, ["1m", "2m", "3m", "5m", "10m", "15m"].map(i => /*#__PURE__*/React.createElement("button", {
    key: i,
    onClick: () => setInterval(i),
    style: {
      padding: "4px 8px",
      border: 0,
      background: "transparent",
      cursor: "pointer",
      color: interval === i ? "var(--dark-fg-1)" : "var(--dark-fg-3)",
      fontWeight: interval === i ? 600 : 500,
      fontSize: 12
    }
  }, i)))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 16,
      padding: "8px 16px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 1,
      borderRadius: 6,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      background: "var(--down-600)",
      color: "#fff",
      padding: "6px 12px",
      fontFamily: "Geist",
      fontWeight: 600,
      fontSize: 13,
      fontVariantNumeric: "tabular-nums"
    }
  }, "Sell 1,293.50"), /*#__PURE__*/React.createElement("span", {
    style: {
      background: "rgba(245,245,255,.08)",
      color: "var(--dark-fg-2)",
      padding: "6px 12px",
      fontFamily: "Geist",
      fontVariantNumeric: "tabular-nums"
    }
  }, "0.17"), /*#__PURE__*/React.createElement("span", {
    style: {
      background: "var(--up-600)",
      color: "#fff",
      padding: "6px 12px",
      fontFamily: "Geist",
      fontWeight: 600,
      fontSize: 13,
      fontVariantNumeric: "tabular-nums"
    }
  }, "Buy 1,293.33")), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "JetBrains Mono",
      fontSize: 12,
      color: "var(--dark-fg-2)",
      fontVariantNumeric: "tabular-nums"
    }
  }, "O ", /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--dark-fg-1)"
    }
  }, "1,295.80"), " H ", /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--dark-fg-1)"
    }
  }, "1,296.80"), " L ", /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--down-500)"
    }
  }, "1,290.30"), " C ", /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--dark-fg-1)"
    }
  }, "1,295.40"), /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--down-500)",
      marginLeft: 8
    }
  }, "\u22120.40 (\u22120.03%)"))), /*#__PURE__*/React.createElement(Candles, null));
};
const iconBtn2 = {
  width: 36,
  height: 36,
  border: 0,
  background: "rgba(245,245,255,.06)",
  cursor: "pointer",
  borderRadius: 999,
  display: "grid",
  placeItems: "center"
};

// Procedural candle chart — purely visual, deterministic by index
const Candles = () => {
  const W = 880,
    H = 360,
    N = 78;
  const candles = React.useMemo(() => {
    let p = 1320;
    return Array.from({
      length: N
    }, (_, i) => {
      const drift = Math.sin(i * 0.18) * 6 + Math.sin(i * 0.07) * 12 + i / N * 24;
      const o = p;
      p += (Math.sin(i * 1.3) + Math.cos(i * 0.7)) * 3;
      const c = 1320 + drift + Math.cos(i * 0.42) * 4;
      const h = Math.max(o, c) + Math.abs(Math.sin(i * 2.1)) * 4;
      const l = Math.min(o, c) - Math.abs(Math.cos(i * 1.7)) * 4;
      return {
        o,
        h,
        l,
        c
      };
    });
  }, []);
  const min = Math.min(...candles.map(c => c.l)) - 4;
  const max = Math.max(...candles.map(c => c.h)) + 4;
  const y = v => H - (v - min) / (max - min) * (H - 60) - 30;
  const cw = (W - 60) / N;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      position: "relative",
      padding: "8px 0",
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: "100%",
    height: "100%",
    viewBox: `0 0 ${W} ${H}`,
    preserveAspectRatio: "none",
    style: {
      display: "block"
    }
  }, [0, .25, .5, .75, 1].map(p => /*#__PURE__*/React.createElement("line", {
    key: p,
    x1: 20,
    y1: 30 + p * (H - 60),
    x2: W - 60,
    y2: 30 + p * (H - 60),
    stroke: "rgba(245,245,255,.04)"
  })), /*#__PURE__*/React.createElement("line", {
    x1: 20,
    y1: y(candles[candles.length - 1].c),
    x2: W - 60,
    y2: y(candles[candles.length - 1].c),
    stroke: "var(--down-500)",
    strokeDasharray: "3 3",
    strokeWidth: 1
  }), /*#__PURE__*/React.createElement("rect", {
    x: W - 60,
    y: y(candles[candles.length - 1].c) - 9,
    width: 56,
    height: 18,
    fill: "var(--down-600)"
  }), /*#__PURE__*/React.createElement("text", {
    x: W - 32,
    y: y(candles[candles.length - 1].c) + 4,
    textAnchor: "middle",
    fill: "#fff",
    fontFamily: "Geist",
    fontSize: 11,
    fontWeight: 600
  }, "1,376.00"), candles.map((c, i) => {
    const x = 20 + i * cw + cw * 0.5;
    const up = c.c >= c.o;
    const color = up ? "rgb(124,207,94)" : "rgb(241,66,66)";
    return /*#__PURE__*/React.createElement("g", {
      key: i
    }, /*#__PURE__*/React.createElement("line", {
      x1: x,
      y1: y(c.h),
      x2: x,
      y2: y(c.l),
      stroke: color,
      strokeWidth: 1
    }), /*#__PURE__*/React.createElement("rect", {
      x: x - cw * 0.35,
      y: Math.min(y(c.o), y(c.c)),
      width: cw * 0.7,
      height: Math.max(2, Math.abs(y(c.o) - y(c.c))),
      fill: color
    }));
  }), [1392, 1384, 1376, 1368, 1360, 1352, 1344].map((v, i) => /*#__PURE__*/React.createElement("text", {
    key: v,
    x: W - 56,
    y: 30 + i / 6 * (H - 60) + 4,
    fontFamily: "Geist",
    fontSize: 10,
    fill: "var(--dark-fg-3)",
    style: {
      fontVariantNumeric: "tabular-nums"
    }
  }, v, ".00")), ["10:30", "14:00", "28", "10:30", "14:00", "29", "10:30"].map((t, i) => /*#__PURE__*/React.createElement("text", {
    key: i,
    x: 40 + i / 6 * (W - 100),
    y: H - 8,
    fontFamily: "Geist",
    fontSize: 10,
    fill: "var(--dark-fg-3)"
  }, t))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 8,
      top: 8,
      display: "flex",
      flexDirection: "column",
      gap: 2,
      background: "rgba(8,8,8,.5)",
      borderRadius: 8,
      padding: 4,
      border: "1px solid var(--dark-border)"
    }
  }, ["add", "edit", "drag-handle", "set-alert", "ai", "delete"].map(n => /*#__PURE__*/React.createElement("button", {
    key: n,
    style: {
      width: 28,
      height: 28,
      border: 0,
      background: "transparent",
      cursor: "pointer",
      borderRadius: 4,
      display: "grid",
      placeItems: "center"
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: n,
    size: 14,
    color: "muted"
  })))));
};
window.ChartPanel = ChartPanel;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/nubra-pro/ChartPanel.jsx", error: String((e && e.message) || e) }); }

// ui_kits/nubra-pro/NavRail.jsx
try { (() => {
// Nubra Pro — left rail navigation
// Mirrors /Components/Navigation: 48px wide rail, 36×36 icon buttons, logo at top.

const {
  useState: useNavState
} = React;
const NavRail = ({
  active = "watchlist",
  onSelect
}) => {
  const items = [{
    id: "watchlist",
    icon: "watchlist",
    filled: "watchlist-filled",
    label: "Watchlist"
  }, {
    id: "options",
    icon: "option-chain",
    label: "Option chain"
  }, {
    id: "orders",
    icon: "order",
    filled: "order-filled",
    label: "Orders"
  }, {
    id: "portfolio",
    icon: "portfolio",
    filled: "portfolio-filled",
    label: "Portfolio"
  }, {
    id: "strategies",
    icon: "strategies",
    label: "Strategies"
  }, {
    id: "scalper",
    icon: "scalper",
    label: "Scalper"
  }];
  return /*#__PURE__*/React.createElement("div", {
    style: {
      width: 48,
      height: "100%",
      flexShrink: 0,
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      padding: "12px 6px",
      gap: 16,
      background: "rgba(8,8,8,.4)",
      borderRight: "1px solid var(--dark-border)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 36,
      height: 36,
      borderRadius: 8,
      background: "var(--nubra-blue-400)",
      display: "grid",
      placeItems: "center"
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "../logo-mark",
    size: 20,
    color: "white",
    style: {
      width: 18,
      height: 18
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 4,
      flex: 1
    }
  }, items.map(it => {
    const on = active === it.id;
    return /*#__PURE__*/React.createElement("button", {
      key: it.id,
      onClick: () => onSelect?.(it.id),
      title: it.label,
      style: {
        width: 36,
        height: 36,
        border: 0,
        padding: 0,
        cursor: "pointer",
        borderRadius: 8,
        background: on ? "rgba(0,120,206,.18)" : "transparent",
        display: "grid",
        placeItems: "center",
        transition: "background 120ms"
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: on && it.filled ? it.filled : it.icon,
      size: 20,
      color: on ? "white" : "muted"
    }));
  })), /*#__PURE__*/React.createElement("button", {
    title: "Settings",
    style: {
      width: 36,
      height: 36,
      border: 0,
      background: "transparent",
      cursor: "pointer",
      borderRadius: 8,
      display: "grid",
      placeItems: "center"
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "settings",
    size: 20,
    color: "muted"
  })));
};
window.NavRail = NavRail;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/nubra-pro/NavRail.jsx", error: String((e && e.message) || e) }); }

// ui_kits/nubra-pro/OrderTicket.jsx
try { (() => {
// Right-rail: order ticket + market depth
const OrderTicket = () => {
  const [side, setSide] = React.useState("BUY");
  const [orderType, setOrderType] = React.useState("Regular");
  const [product, setProduct] = React.useState("Intraday");
  const [qty, setQty] = React.useState(1);
  const [price, setPrice] = React.useState("1,293.65");
  return /*#__PURE__*/React.createElement("div", {
    style: {
      width: 320,
      flexShrink: 0,
      borderLeft: "1px solid var(--dark-border)",
      display: "flex",
      flexDirection: "column",
      background: "rgba(6,10,15,.4)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "12px 14px",
      borderBottom: "1px solid var(--dark-border)",
      display: "flex",
      flexDirection: "column",
      gap: 6
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 6
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 1,
      color: "var(--dark-fg-1)",
      fontFamily: "Geist",
      fontWeight: 700,
      fontSize: 14
    }
  }, "RELIANCE"), /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--dark-fg-3)",
      fontSize: 11
    }
  }, "NSE"), /*#__PURE__*/React.createElement("button", {
    style: iconBtn3
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "more",
    size: 14,
    color: "muted"
  })), /*#__PURE__*/React.createElement("button", {
    style: iconBtn3
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "add",
    size: 14,
    color: "muted"
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "baseline",
      gap: 8
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--dark-fg-1)",
      fontFamily: "Geist",
      fontWeight: 600,
      fontSize: 16,
      fontVariantNumeric: "tabular-nums"
    }
  }, "\u20B91,293.65"), /*#__PURE__*/React.createElement(Delta, {
    value: 12.25,
    pct: 0.95
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: 0,
      padding: 12
    }
  }, [{
    id: "BUY",
    color: "var(--up-600)"
  }, {
    id: "SELL",
    color: "var(--down-600)"
  }].map((s, i) => /*#__PURE__*/React.createElement("button", {
    key: s.id,
    onClick: () => setSide(s.id),
    style: {
      height: 40,
      border: 0,
      cursor: "pointer",
      background: side === s.id ? s.color : "rgba(245,245,255,.04)",
      color: side === s.id ? "#fff" : "var(--dark-fg-2)",
      fontFamily: "var(--font-sans)",
      fontWeight: 600,
      fontSize: 13,
      borderRadius: i === 0 ? "8px 0 0 8px" : "0 8px 8px 0",
      letterSpacing: ".08em"
    }
  }, s.id))), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "0 12px 12px",
      display: "flex",
      flexDirection: "column",
      gap: 12
    }
  }, /*#__PURE__*/React.createElement(Field, {
    label: "Order type"
  }, /*#__PURE__*/React.createElement(Segmented, {
    value: orderType,
    onChange: setOrderType,
    options: ["Regular", "Cover", "AMO", "GTT"]
  })), /*#__PURE__*/React.createElement(Field, {
    label: "Product"
  }, /*#__PURE__*/React.createElement(Segmented, {
    value: product,
    onChange: setProduct,
    options: ["Intraday", "Delivery", "MTF"]
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: 8
    }
  }, /*#__PURE__*/React.createElement(Field, {
    label: "Quantity"
  }, /*#__PURE__*/React.createElement(Counter, {
    value: qty,
    onChange: setQty
  })), /*#__PURE__*/React.createElement(Field, {
    label: "Price"
  }, /*#__PURE__*/React.createElement(TextField, {
    value: price,
    onChange: setPrice,
    rightSlot: /*#__PURE__*/React.createElement("span", {
      style: {
        color: "var(--dark-fg-3)",
        fontSize: 11
      }
    }, "\u20B9")
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 8,
      padding: "8px 0",
      borderTop: "1px solid var(--dark-border)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 1,
      color: "var(--dark-fg-2)",
      fontSize: 12
    }
  }, "Stoploss & Target"), /*#__PURE__*/React.createElement(Switch, {
    on: false
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 8,
      padding: "8px 12px",
      background: "rgba(245,245,255,.03)",
      borderRadius: 8,
      border: "1px solid var(--dark-border)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--dark-fg-3)",
      fontSize: 11
    }
  }, "Margin Required"), /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 1
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--dark-fg-1)",
      fontFamily: "Geist",
      fontWeight: 600,
      fontSize: 13,
      fontVariantNumeric: "tabular-nums"
    }
  }, "\u20B91,293.65")), /*#__PURE__*/React.createElement(Button, {
    variant: "contained",
    color: side === "BUY" ? "success" : "error",
    size: "lg",
    style: {
      width: "100%",
      justifyContent: "center",
      borderRadius: 12
    }
  }, side === "BUY" ? "Buy" : "Sell", " \u20B91,293.65"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      color: "var(--dark-fg-3)",
      fontSize: 11
    }
  }, /*#__PURE__*/React.createElement("span", null, "Available margin"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "Geist",
      color: "var(--dark-fg-2)",
      fontVariantNumeric: "tabular-nums"
    }
  }, "\u20B924,500.00"))), /*#__PURE__*/React.createElement(MarketDepth, null));
};
const Field = ({
  label,
  children
}) => /*#__PURE__*/React.createElement("div", {
  style: {
    display: "flex",
    flexDirection: "column",
    gap: 6
  }
}, /*#__PURE__*/React.createElement("span", {
  style: {
    color: "var(--dark-fg-3)",
    fontSize: 11,
    fontWeight: 500
  }
}, label), children);
const Segmented = ({
  value,
  onChange,
  options
}) => /*#__PURE__*/React.createElement("div", {
  style: {
    display: "flex",
    background: "rgba(245,245,255,.04)",
    borderRadius: 8,
    padding: 2,
    border: "1px solid var(--dark-border)"
  }
}, options.map(o => /*#__PURE__*/React.createElement("button", {
  key: o,
  onClick: () => onChange(o),
  style: {
    flex: 1,
    height: 28,
    border: 0,
    cursor: "pointer",
    background: value === o ? "rgba(245,245,255,.08)" : "transparent",
    color: value === o ? "var(--dark-fg-1)" : "var(--dark-fg-3)",
    fontFamily: "var(--font-sans)",
    fontWeight: 500,
    fontSize: 11,
    borderRadius: 6
  }
}, o)));
const Counter = ({
  value,
  onChange
}) => /*#__PURE__*/React.createElement("div", {
  style: {
    display: "flex",
    alignItems: "center",
    height: 36,
    border: "1px solid var(--dark-border)",
    borderRadius: 8,
    background: "rgba(245,245,255,.04)"
  }
}, /*#__PURE__*/React.createElement("button", {
  onClick: () => onChange(Math.max(0, value - 1)),
  style: {
    width: 32,
    height: 34,
    border: 0,
    background: "transparent",
    cursor: "pointer",
    color: "var(--dark-fg-2)",
    fontSize: 16
  }
}, "\u2212"), /*#__PURE__*/React.createElement("input", {
  value: value,
  onChange: e => onChange(parseInt(e.target.value) || 0),
  style: {
    flex: 1,
    border: 0,
    outline: 0,
    background: "transparent",
    textAlign: "center",
    color: "var(--dark-fg-1)",
    fontFamily: "Geist",
    fontWeight: 600,
    fontSize: 13,
    fontVariantNumeric: "tabular-nums"
  }
}), /*#__PURE__*/React.createElement("button", {
  onClick: () => onChange(value + 1),
  style: {
    width: 32,
    height: 34,
    border: 0,
    background: "transparent",
    cursor: "pointer",
    color: "var(--dark-fg-2)",
    fontSize: 16
  }
}, "+"));
const MarketDepth = () => {
  const bids = [[1293.50, 245, 12], [1293.45, 180, 8], [1293.40, 320, 15], [1293.35, 90, 5], [1293.30, 410, 22]];
  const asks = [[1293.65, 165, 9], [1293.70, 280, 14], [1293.75, 195, 11], [1293.80, 350, 17], [1293.85, 130, 7]];
  const maxQty = 410;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      borderTop: "1px solid var(--dark-border)",
      padding: "12px 12px 16px",
      display: "flex",
      flexDirection: "column",
      gap: 8
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 6
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 1,
      color: "var(--dark-fg-1)",
      fontWeight: 600,
      fontSize: 12
    }
  }, "Market Depth"), /*#__PURE__*/React.createElement(Icon, {
    name: "chevron-down",
    size: 14,
    color: "muted"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: 8,
      color: "var(--dark-fg-3)",
      fontSize: 10,
      fontWeight: 500
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr 1fr"
    }
  }, /*#__PURE__*/React.createElement("span", null, "Qty"), /*#__PURE__*/React.createElement("span", null, "Orders"), /*#__PURE__*/React.createElement("span", null, "Bid")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr 1fr"
    }
  }, /*#__PURE__*/React.createElement("span", null, "Ask"), /*#__PURE__*/React.createElement("span", null, "Orders"), /*#__PURE__*/React.createElement("span", {
    style: {
      textAlign: "right"
    }
  }, "Qty"))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: 8
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 2
    }
  }, bids.map((b, i) => /*#__PURE__*/React.createElement(DepthRow, {
    key: i,
    qty: b[1],
    orders: b[2],
    price: b[0],
    maxQty: maxQty,
    side: "bid"
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 2
    }
  }, asks.map((a, i) => /*#__PURE__*/React.createElement(DepthRow, {
    key: i,
    qty: a[1],
    orders: a[2],
    price: a[0],
    maxQty: maxQty,
    side: "ask"
  })))));
};
const DepthRow = ({
  qty,
  orders,
  price,
  maxQty,
  side
}) => {
  const w = qty / maxQty * 100;
  const color = side === "bid" ? "rgba(124,207,94,.18)" : "rgba(241,66,66,.18)";
  const text = side === "bid" ? "var(--up-300)" : "var(--down-500)";
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      height: 22,
      fontFamily: "Geist",
      fontSize: 11,
      fontVariantNumeric: "tabular-nums"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      inset: 0,
      [side === "bid" ? "right" : "left"]: 0,
      width: `${w}%`,
      background: color,
      borderRadius: 2,
      ...(side === "ask" ? {} : {
        right: 0,
        left: "auto"
      })
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "grid",
      gridTemplateColumns: "1fr 1fr 1fr",
      alignItems: "center",
      padding: "0 4px",
      height: "100%",
      color: "var(--dark-fg-2)"
    }
  }, side === "bid" ? /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("span", null, qty), /*#__PURE__*/React.createElement("span", null, orders), /*#__PURE__*/React.createElement("span", {
    style: {
      color: text,
      fontWeight: 600
    }
  }, price.toFixed(2))) : /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("span", {
    style: {
      color: text,
      fontWeight: 600
    }
  }, price.toFixed(2)), /*#__PURE__*/React.createElement("span", null, orders), /*#__PURE__*/React.createElement("span", {
    style: {
      textAlign: "right"
    }
  }, qty))));
};
const iconBtn3 = {
  width: 22,
  height: 22,
  border: 0,
  background: "transparent",
  cursor: "pointer",
  borderRadius: 4,
  display: "grid",
  placeItems: "center",
  padding: 0
};
window.OrderTicket = OrderTicket;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/nubra-pro/OrderTicket.jsx", error: String((e && e.message) || e) }); }

// ui_kits/nubra-pro/Primitives.jsx
try { (() => {
// Nubra Pro — shared UI primitives
// Inter for chrome, Geist for numerics, JBM for chart ticks.
// Dark trading canvas using --dark-ambient.

const {
  useState
} = React;
const Icon = ({
  name,
  size = 20,
  color = "currentColor",
  style
}) => /*#__PURE__*/React.createElement("img", {
  src: `../../assets/icons/${name}.svg`,
  alt: "",
  style: {
    width: size,
    height: size,
    // SVGs ship as black fills; CSS filter recolors to brand neutrals on dark
    filter: color === "white" ? "brightness(0) invert(1)" : color === "muted" ? "brightness(0) invert(1) opacity(.5)" : color === "dark" ? "brightness(0)" : "none",
    ...style
  }
});
const Button = ({
  variant = "contained",
  color = "primary",
  size = "md",
  children,
  leftIcon,
  rightIcon,
  onClick,
  style
}) => {
  const sz = size === "lg" ? {
    h: 44,
    px: 16,
    fz: 16
  } : size === "sm" ? {
    h: 28,
    px: 8,
    fz: 12
  } : {
    h: 36,
    px: 12,
    fz: 14
  };
  const palettes = {
    primary: {
      bg: "var(--nubra-blue-400)",
      fg: "var(--fg-on-primary)",
      soft: "var(--nubra-blue-100)",
      softFg: "var(--nubra-blue-700)"
    },
    success: {
      bg: "var(--up-600)",
      fg: "#fff",
      soft: "var(--up-50)",
      softFg: "var(--up-700)"
    },
    error: {
      bg: "var(--down-600)",
      fg: "#fff",
      soft: "var(--down-50)",
      softFg: "var(--down-700)"
    },
    neutral: {
      bg: "var(--fg-1)",
      fg: "#fff",
      soft: "var(--bg-subtle)",
      softFg: "var(--fg-1)"
    }
  };
  const p = palettes[color];
  const styles = {
    contained: {
      background: p.bg,
      color: p.fg,
      border: "0"
    },
    soft: {
      background: p.soft,
      color: p.softFg,
      border: "0"
    },
    outlined: {
      background: "transparent",
      color: p.softFg,
      border: `1px solid ${p.softFg === "var(--nubra-blue-700)" ? "var(--nubra-blue-200)" : "var(--border-default)"}`
    },
    text: {
      background: "transparent",
      color: p.softFg,
      border: "0"
    }
  }[variant];
  return /*#__PURE__*/React.createElement("button", {
    onClick: onClick,
    style: {
      height: sz.h,
      padding: `0 ${sz.px}px`,
      fontSize: sz.fz,
      fontFamily: "var(--font-sans)",
      fontWeight: 500,
      borderRadius: 999,
      display: "inline-flex",
      alignItems: "center",
      gap: 8,
      cursor: "pointer",
      whiteSpace: "nowrap",
      transition: "all 120ms var(--ease-out)",
      ...styles,
      ...style
    }
  }, leftIcon && /*#__PURE__*/React.createElement(Icon, {
    name: leftIcon,
    size: sz.fz === 12 ? 14 : 16
  }), children, rightIcon && /*#__PURE__*/React.createElement(Icon, {
    name: rightIcon,
    size: sz.fz === 12 ? 14 : 16
  }));
};
const Chip = ({
  children,
  color = "neutral",
  onRemove,
  size = "md",
  style
}) => {
  const sz = size === "lg" ? 36 : size === "sm" ? 24 : 28;
  const palettes = {
    primary: {
      bg: "var(--nubra-blue-100)",
      fg: "var(--nubra-blue-700)"
    },
    success: {
      bg: "var(--up-50)",
      fg: "var(--up-700)"
    },
    error: {
      bg: "var(--down-50)",
      fg: "var(--down-700)"
    },
    neutral: {
      bg: "var(--bg-subtle)",
      fg: "var(--fg-2)"
    },
    dark: {
      bg: "rgba(110,131,251,.18)",
      fg: "rgb(176,189,255)"
    }
  };
  const p = palettes[color];
  return /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 6,
      height: sz,
      padding: "0 12px",
      borderRadius: 999,
      background: p.bg,
      color: p.fg,
      fontFamily: "var(--font-sans)",
      fontWeight: 500,
      fontSize: 12,
      ...style
    }
  }, children, onRemove && /*#__PURE__*/React.createElement("span", {
    onClick: onRemove,
    style: {
      cursor: "pointer",
      opacity: .7,
      fontSize: 14
    }
  }, "\xD7"));
};
const Tag = ({
  children,
  tone = "up"
}) => {
  const palettes = {
    up: {
      bg: "rgba(124,207,94,.15)",
      fg: "var(--up-300)"
    },
    down: {
      bg: "rgba(241,66,66,.15)",
      fg: "var(--down-500)"
    },
    info: {
      bg: "rgba(120,201,255,.15)",
      fg: "var(--nubra-blue-200)"
    }
  };
  const p = palettes[tone] || palettes.up;
  return /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 4,
      padding: "2px 6px",
      borderRadius: 4,
      background: p.bg,
      color: p.fg,
      fontFamily: "Geist",
      fontWeight: 500,
      fontSize: 11,
      fontVariantNumeric: "tabular-nums"
    }
  }, children);
};
const Price = ({
  value,
  currency = "₹",
  className,
  style
}) => /*#__PURE__*/React.createElement("span", {
  style: {
    fontFamily: "Geist",
    fontWeight: 500,
    fontVariantNumeric: "tabular-nums",
    ...style
  }
}, currency, value);
const Delta = ({
  value,
  pct,
  prefix
}) => {
  const up = value >= 0;
  return /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "Geist",
      fontWeight: 500,
      fontSize: 12,
      color: up ? "var(--up-300)" : "var(--down-500)",
      fontVariantNumeric: "tabular-nums",
      display: "inline-flex",
      gap: 4
    }
  }, up ? "▲" : "▼", " ", prefix, Math.abs(value).toFixed(2), " ", pct != null && `(${up ? "+" : "−"}${Math.abs(pct).toFixed(2)}%)`);
};
const TextField = ({
  value,
  onChange,
  placeholder,
  leftIcon,
  rightSlot,
  size = "md",
  style
}) => {
  const h = size === "lg" ? 44 : size === "sm" ? 32 : 36;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 8,
      height: h,
      padding: "0 12px",
      background: "rgba(245,245,255,.04)",
      border: "1px solid var(--dark-border)",
      borderRadius: 8,
      ...style
    }
  }, leftIcon && /*#__PURE__*/React.createElement(Icon, {
    name: leftIcon,
    size: 16,
    color: "muted"
  }), /*#__PURE__*/React.createElement("input", {
    defaultValue: value || "",
    onChange: onChange ? e => onChange(e.target.value) : undefined,
    placeholder: placeholder,
    readOnly: !onChange,
    style: {
      flex: 1,
      border: 0,
      outline: 0,
      background: "transparent",
      color: "var(--dark-fg-1)",
      fontFamily: "var(--font-sans)",
      fontSize: 13,
      fontWeight: 500
    }
  }), rightSlot);
};
const Switch = ({
  on,
  onChange
}) => /*#__PURE__*/React.createElement("button", {
  onClick: () => onChange?.(!on),
  style: {
    width: 32,
    height: 18,
    borderRadius: 999,
    border: 0,
    cursor: "pointer",
    background: on ? "var(--nubra-blue-400)" : "rgba(245,245,255,.12)",
    position: "relative",
    padding: 0,
    transition: "background 120ms"
  }
}, /*#__PURE__*/React.createElement("span", {
  style: {
    position: "absolute",
    top: 2,
    left: on ? 16 : 2,
    width: 14,
    height: 14,
    borderRadius: "50%",
    background: "#fff",
    transition: "left 120ms var(--ease-out)"
  }
}));
window.Icon = Icon;
window.Button = Button;
window.Chip = Chip;
window.Tag = Tag;
window.Price = Price;
window.Delta = Delta;
window.TextField = TextField;
window.Switch = Switch;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/nubra-pro/Primitives.jsx", error: String((e && e.message) || e) }); }

// ui_kits/nubra-pro/TopBar.jsx
try { (() => {
// Top bar — search + ask AI + indices + PnL/margin chips.

const TopBar = ({
  onAsk
}) => /*#__PURE__*/React.createElement("div", {
  style: {
    display: "flex",
    alignItems: "center",
    gap: 16,
    padding: "10px 16px",
    borderBottom: "1px solid var(--dark-border)",
    background: "rgba(8,8,8,.32)"
  }
}, /*#__PURE__*/React.createElement("div", {
  style: {
    display: "flex",
    alignItems: "center",
    gap: 8,
    flex: "0 0 auto"
  }
}, /*#__PURE__*/React.createElement(TextField, {
  leftIcon: "add",
  placeholder: "Search stocks",
  style: {
    width: 240,
    height: 36
  }
}), /*#__PURE__*/React.createElement(Button, {
  variant: "soft",
  color: "primary",
  size: "md",
  leftIcon: "ai",
  onClick: onAsk
}, "Ask AI")), /*#__PURE__*/React.createElement("div", {
  style: {
    display: "flex",
    alignItems: "center",
    gap: 24,
    flex: 1
  }
}, /*#__PURE__*/React.createElement(Index, {
  name: "NIFTY 50",
  value: "28,048.65",
  delta: 241.25,
  pct: 0.95
}), /*#__PURE__*/React.createElement(Index, {
  name: "SENSEX",
  value: "92,548.10",
  delta: 612.40,
  pct: 0.66
})), /*#__PURE__*/React.createElement("div", {
  style: {
    display: "flex",
    alignItems: "center",
    gap: 8
  }
}, /*#__PURE__*/React.createElement(Stat, {
  label: "PnL",
  value: "\u20B90.00"
}), /*#__PURE__*/React.createElement(Stat, {
  label: "Margin",
  value: "\u20B924,500"
}), /*#__PURE__*/React.createElement("button", {
  style: {
    width: 36,
    height: 36,
    borderRadius: 999,
    border: 0,
    cursor: "pointer",
    background: "rgba(245,245,255,.06)",
    display: "grid",
    placeItems: "center"
  }
}, /*#__PURE__*/React.createElement(Icon, {
  name: "set-alert",
  size: 18,
  color: "white"
})), /*#__PURE__*/React.createElement("div", {
  style: {
    width: 36,
    height: 36,
    borderRadius: "50%",
    background: "linear-gradient(135deg,#7C9CFF,#586FED)",
    border: "1.5px solid rgba(255,255,255,.2)"
  }
})));
const Index = ({
  name,
  value,
  delta,
  pct
}) => /*#__PURE__*/React.createElement("div", {
  style: {
    display: "flex",
    alignItems: "center",
    gap: 8,
    fontFamily: "var(--font-sans)"
  }
}, /*#__PURE__*/React.createElement("span", {
  style: {
    color: "var(--dark-fg-2)",
    fontSize: 11,
    fontWeight: 600,
    letterSpacing: ".06em"
  }
}, name), /*#__PURE__*/React.createElement("span", {
  style: {
    color: "var(--dark-fg-1)",
    fontFamily: "Geist",
    fontWeight: 600,
    fontSize: 14,
    fontVariantNumeric: "tabular-nums"
  }
}, "\u20B9", value), /*#__PURE__*/React.createElement(Delta, {
  value: delta,
  pct: pct
}));
const Stat = ({
  label,
  value
}) => /*#__PURE__*/React.createElement("div", {
  style: {
    display: "flex",
    alignItems: "center",
    gap: 6,
    height: 36,
    padding: "0 10px",
    border: "1px solid var(--dark-border)",
    borderRadius: 999,
    background: "rgba(245,245,255,.03)"
  }
}, /*#__PURE__*/React.createElement("span", {
  style: {
    color: "var(--dark-fg-3)",
    fontSize: 11,
    fontWeight: 500
  }
}, label), /*#__PURE__*/React.createElement("span", {
  style: {
    color: "var(--dark-fg-1)",
    fontFamily: "Geist",
    fontWeight: 600,
    fontSize: 13,
    fontVariantNumeric: "tabular-nums"
  }
}, value), /*#__PURE__*/React.createElement(Icon, {
  name: "chevron-down",
  size: 14,
  color: "muted"
}));
window.TopBar = TopBar;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/nubra-pro/TopBar.jsx", error: String((e && e.message) || e) }); }

// ui_kits/nubra-pro/Watchlist.jsx
try { (() => {
// Watchlist column — symbol rows w/ LTP + delta + signal chip
const WATCHLIST = [{
  sym: "RELIANCE",
  ex: "BSE",
  sig: 13,
  ltp: "1,293.65",
  delta: 12.25,
  pct: 0.95
}, {
  sym: "ADANIPOWER",
  ex: "BSE",
  sig: 13,
  ltp: "548.10",
  delta: 6.85,
  pct: 1.27
}, {
  sym: "BHARTIARTL",
  ex: "NSE",
  sig: 8,
  ltp: "1,594.20",
  delta: 8.10,
  pct: 0.51
}, {
  sym: "HDFCBANK",
  ex: "NSE",
  sig: 6,
  ltp: "1,728.40",
  delta: -8.10,
  pct: -0.46
}, {
  sym: "AXISBANK",
  ex: "NSE",
  sig: 4,
  ltp: "1,120.55",
  delta: 3.45,
  pct: 0.31
}, {
  sym: "APOLLOHOSP",
  ex: "BSE",
  sig: 9,
  ltp: "7,234.00",
  delta: 124.50,
  pct: 1.74
}, {
  sym: "M&M",
  ex: "NSE",
  sig: 5,
  ltp: "2,891.30",
  delta: -14.20,
  pct: -0.49
}, {
  sym: "INFY",
  ex: "NSE",
  sig: 11,
  ltp: "1,890.75",
  delta: 22.40,
  pct: 1.20
}, {
  sym: "TCS",
  ex: "NSE",
  sig: 7,
  ltp: "4,120.10",
  delta: -8.50,
  pct: -0.21
}, {
  sym: "ITC",
  ex: "BSE",
  sig: 3,
  ltp: "478.65",
  delta: 1.30,
  pct: 0.27
}];
const Watchlist = ({
  active,
  onSelect,
  collapsed,
  onToggleCollapse
}) => {
  const [tab, setTab] = React.useState(0);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      width: collapsed ? 56 : 280,
      flexShrink: 0,
      borderRight: "1px solid var(--dark-border)",
      display: "flex",
      flexDirection: "column",
      background: "rgba(6,10,15,.4)",
      transition: "width 200ms var(--ease-out)",
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 6,
      padding: "10px 12px",
      borderBottom: "1px solid var(--dark-border)"
    }
  }, !collapsed && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 1,
      color: "var(--dark-fg-1)",
      fontWeight: 600,
      fontSize: 14,
      display: "flex",
      gap: 6,
      alignItems: "center"
    }
  }, "Watchlist 1 ", /*#__PURE__*/React.createElement(Icon, {
    name: "chevron-down",
    size: 14,
    color: "muted"
  })), /*#__PURE__*/React.createElement("button", {
    onClick: onToggleCollapse,
    style: iconBtn
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "collapse-left",
    size: 16,
    color: "muted"
  })), /*#__PURE__*/React.createElement("button", {
    style: iconBtn
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "more",
    size: 16,
    color: "muted"
  }))), collapsed && /*#__PURE__*/React.createElement("button", {
    onClick: onToggleCollapse,
    style: iconBtn
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "collapse-right",
    size: 16,
    color: "muted"
  }))), !collapsed && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      padding: "0 12px",
      gap: 4,
      borderBottom: "1px solid var(--dark-border)"
    }
  }, ["1", "2", "3", "+"].map((t, i) => /*#__PURE__*/React.createElement("button", {
    key: i,
    onClick: () => setTab(i),
    style: {
      padding: "8px 10px",
      border: 0,
      background: "transparent",
      cursor: "pointer",
      color: tab === i ? "var(--dark-fg-1)" : "var(--dark-fg-3)",
      fontFamily: "var(--font-sans)",
      fontWeight: 500,
      fontSize: 12,
      borderBottom: `2px solid ${tab === i ? "var(--nubra-blue-400)" : "transparent"}`
    }
  }, t === "+" ? /*#__PURE__*/React.createElement(Icon, {
    name: "add",
    size: 12,
    color: "muted"
  }) : `Watchlist ${t}`))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1fr auto",
      padding: "8px 12px",
      borderBottom: "1px solid var(--dark-border)",
      color: "var(--dark-fg-3)",
      fontSize: 11,
      fontWeight: 500
    }
  }, /*#__PURE__*/React.createElement("span", null, "Instrument"), /*#__PURE__*/React.createElement("span", null, "LTP")), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      overflowY: "auto"
    }
  }, WATCHLIST.map(r => {
    const on = active === r.sym;
    const up = r.delta >= 0;
    return /*#__PURE__*/React.createElement("div", {
      key: r.sym,
      onClick: () => onSelect?.(r.sym),
      style: {
        display: "grid",
        gridTemplateColumns: "1fr auto",
        alignItems: "center",
        gap: 8,
        padding: "10px 12px",
        borderBottom: "1px solid var(--dark-border)",
        background: on ? "rgba(0,120,206,.10)" : "transparent",
        cursor: "pointer"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        flexDirection: "column",
        gap: 4,
        minWidth: 0
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: "Geist",
        fontWeight: 600,
        fontSize: 13,
        color: "var(--dark-fg-1)"
      }
    }, r.sym), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        alignItems: "center",
        gap: 6
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 10,
        fontWeight: 500,
        color: "var(--dark-fg-3)"
      }
    }, r.ex), /*#__PURE__*/React.createElement(Tag, {
      tone: "info"
    }, "\u2726 ", r.sig))), /*#__PURE__*/React.createElement("div", {
      style: {
        textAlign: "right",
        display: "flex",
        flexDirection: "column",
        gap: 4,
        alignItems: "flex-end"
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: "Geist",
        fontWeight: 600,
        fontSize: 13,
        color: "var(--dark-fg-1)",
        fontVariantNumeric: "tabular-nums"
      }
    }, r.ltp), /*#__PURE__*/React.createElement(Delta, {
      value: r.delta,
      pct: r.pct
    })));
  }))));
};
const iconBtn = {
  width: 24,
  height: 24,
  border: 0,
  background: "transparent",
  cursor: "pointer",
  borderRadius: 4,
  display: "grid",
  placeItems: "center",
  padding: 0
};
window.Watchlist = Watchlist;
window.WATCHLIST = WATCHLIST;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/nubra-pro/Watchlist.jsx", error: String((e && e.message) || e) }); }

})();
