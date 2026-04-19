function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
// ============================================================================
// ORIMUS BORDER SECURITY SOC CONSOLE — offline standalone build
// Laptop + iPad layouts, no external dependencies at runtime.
// ============================================================================

const {
  useState,
  useEffect,
  useRef,
  useMemo
} = React;

// ============================================================================
// INLINE SVG ICONS (replacing lucide-react — zero dependency)
// ============================================================================
const Icon = ({
  path,
  size = 12,
  stroke = 2
}) => /*#__PURE__*/React.createElement("svg", {
  width: size,
  height: size,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: stroke,
  strokeLinecap: "round",
  strokeLinejoin: "round"
}, path);
const IPlay = p => /*#__PURE__*/React.createElement(Icon, _extends({}, p, {
  path: /*#__PURE__*/React.createElement("polygon", {
    points: "5 3 19 12 5 21 5 3",
    fill: "currentColor"
  })
}));
const IPause = p => /*#__PURE__*/React.createElement(Icon, _extends({}, p, {
  path: /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("rect", {
    x: "6",
    y: "4",
    width: "4",
    height: "16",
    fill: "currentColor"
  }), /*#__PURE__*/React.createElement("rect", {
    x: "14",
    y: "4",
    width: "4",
    height: "16",
    fill: "currentColor"
  }))
}));
const IAlert = p => /*#__PURE__*/React.createElement(Icon, _extends({}, p, {
  path: /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("path", {
    d: "M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"
  }), /*#__PURE__*/React.createElement("line", {
    x1: "12",
    y1: "9",
    x2: "12",
    y2: "13"
  }), /*#__PURE__*/React.createElement("line", {
    x1: "12",
    y1: "17",
    x2: "12.01",
    y2: "17"
  }))
}));
const IShield = p => /*#__PURE__*/React.createElement(Icon, _extends({}, p, {
  path: /*#__PURE__*/React.createElement("path", {
    d: "M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"
  })
}));
const IEye = p => /*#__PURE__*/React.createElement(Icon, _extends({}, p, {
  path: /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("path", {
    d: "M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "12",
    cy: "12",
    r: "3"
  }))
}));
const IClock = p => /*#__PURE__*/React.createElement(Icon, _extends({}, p, {
  path: /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("circle", {
    cx: "12",
    cy: "12",
    r: "10"
  }), /*#__PURE__*/React.createElement("polyline", {
    points: "12 6 12 12 16 14"
  }))
}));
const IBattery = p => /*#__PURE__*/React.createElement(Icon, _extends({}, p, {
  path: /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("rect", {
    x: "1",
    y: "6",
    width: "18",
    height: "12",
    rx: "2"
  }), /*#__PURE__*/React.createElement("line", {
    x1: "23",
    y1: "13",
    x2: "23",
    y2: "11"
  }))
}));
const IRadio = p => /*#__PURE__*/React.createElement(Icon, _extends({}, p, {
  path: /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("circle", {
    cx: "12",
    cy: "12",
    r: "2"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M16.24 7.76a6 6 0 0 1 0 8.49m-8.48-.01a6 6 0 0 1 0-8.49m11.31-2.82a10 10 0 0 1 0 14.14m-14.14 0a10 10 0 0 1 0-14.14"
  }))
}));
const ICpu = p => /*#__PURE__*/React.createElement(Icon, _extends({}, p, {
  path: /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("rect", {
    x: "4",
    y: "4",
    width: "16",
    height: "16",
    rx: "2"
  }), /*#__PURE__*/React.createElement("rect", {
    x: "9",
    y: "9",
    width: "6",
    height: "6"
  }), /*#__PURE__*/React.createElement("line", {
    x1: "9",
    y1: "1",
    x2: "9",
    y2: "4"
  }), /*#__PURE__*/React.createElement("line", {
    x1: "15",
    y1: "1",
    x2: "15",
    y2: "4"
  }), /*#__PURE__*/React.createElement("line", {
    x1: "9",
    y1: "20",
    x2: "9",
    y2: "23"
  }), /*#__PURE__*/React.createElement("line", {
    x1: "15",
    y1: "20",
    x2: "15",
    y2: "23"
  }), /*#__PURE__*/React.createElement("line", {
    x1: "20",
    y1: "9",
    x2: "23",
    y2: "9"
  }), /*#__PURE__*/React.createElement("line", {
    x1: "20",
    y1: "14",
    x2: "23",
    y2: "14"
  }), /*#__PURE__*/React.createElement("line", {
    x1: "1",
    y1: "9",
    x2: "4",
    y2: "9"
  }), /*#__PURE__*/React.createElement("line", {
    x1: "1",
    y1: "14",
    x2: "4",
    y2: "14"
  }))
}));
const IActivity = p => /*#__PURE__*/React.createElement(Icon, _extends({}, p, {
  path: /*#__PURE__*/React.createElement("polyline", {
    points: "22 12 18 12 15 21 9 3 6 12 2 12"
  })
}));
const ITherm = p => /*#__PURE__*/React.createElement(Icon, _extends({}, p, {
  path: /*#__PURE__*/React.createElement("path", {
    d: "M14 14.76V3.5a2.5 2.5 0 0 0-5 0v11.26a4 4 0 1 0 5 0z"
  })
}));
const ILock = p => /*#__PURE__*/React.createElement(Icon, _extends({}, p, {
  path: /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("rect", {
    x: "3",
    y: "11",
    width: "18",
    height: "11",
    rx: "2"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M7 11V7a5 5 0 0 1 10 0v4"
  }))
}));
const IHash = p => /*#__PURE__*/React.createElement(Icon, _extends({}, p, {
  path: /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("line", {
    x1: "4",
    y1: "9",
    x2: "20",
    y2: "9"
  }), /*#__PURE__*/React.createElement("line", {
    x1: "4",
    y1: "15",
    x2: "20",
    y2: "15"
  }), /*#__PURE__*/React.createElement("line", {
    x1: "10",
    y1: "3",
    x2: "8",
    y2: "21"
  }), /*#__PURE__*/React.createElement("line", {
    x1: "16",
    y1: "3",
    x2: "14",
    y2: "21"
  }))
}));
const IDownload = p => /*#__PURE__*/React.createElement(Icon, _extends({}, p, {
  path: /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("path", {
    d: "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"
  }), /*#__PURE__*/React.createElement("polyline", {
    points: "7 10 12 15 17 10"
  }), /*#__PURE__*/React.createElement("line", {
    x1: "12",
    y1: "15",
    x2: "12",
    y2: "3"
  }))
}));
const IFile = p => /*#__PURE__*/React.createElement(Icon, _extends({}, p, {
  path: /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("path", {
    d: "M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"
  }), /*#__PURE__*/React.createElement("polyline", {
    points: "14 2 14 8 20 8"
  }))
}));
const IChevron = p => /*#__PURE__*/React.createElement(Icon, _extends({}, p, {
  path: /*#__PURE__*/React.createElement("polyline", {
    points: "9 18 15 12 9 6"
  })
}));

// ============================================================================
// ORIMUS BRAND TOKENS
// ============================================================================
const NAVY = '#05102B',
  NAVY_2 = '#0A1838',
  NAVY_3 = '#0F2148';
const CYAN = '#60C7F4',
  ROYAL = '#1F61FC';
const AMBER = '#F5B042',
  RED = '#E5484D',
  GREEN = '#30A46C';
const GRID = 'rgba(96, 199, 244, 0.08)';
const GRID_2 = 'rgba(96, 199, 244, 0.16)';
const TEXT = '#D9E4F2',
  TEXT_DIM = '#6A7B95',
  TEXT_DIMMER = '#3D4E6B';
const FONT_MONO = "ui-monospace, 'SF Mono', Menlo, Consolas, monospace";
const FONT_SANS = "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif";

// ============================================================================
// SIMULATED EVENT DATA (45 events across 7 days)
// ============================================================================
const EVENTS = [{
  id: 'E-20260413-001',
  day: 1,
  tOffset: 2807,
  type: 'animal',
  subType: 'canine-stray',
  count: 1,
  conf: 0.94,
  tier: 'routine',
  lat: 19.5472,
  lng: -71.7089,
  action: 'observe',
  thermal: 4.2,
  dist: 23,
  bearing: 182
}, {
  id: 'E-20260413-002',
  day: 1,
  tOffset: 8523,
  type: 'human',
  subType: 'single-local',
  count: 1,
  conf: 0.89,
  tier: 'routine',
  lat: 19.5511,
  lng: -71.7124,
  action: 'observe',
  thermal: 8.1,
  dist: 31,
  bearing: 94
}, {
  id: 'E-20260413-003',
  day: 1,
  tOffset: 14104,
  type: 'animal',
  subType: 'livestock-goats',
  count: 6,
  conf: 0.97,
  tier: 'routine',
  lat: 19.5498,
  lng: -71.7156,
  action: 'observe',
  thermal: 6.3,
  dist: 42,
  bearing: 211
}, {
  id: 'E-20260413-004',
  day: 1,
  tOffset: 54509,
  type: 'human',
  subType: 'pair-marked',
  count: 2,
  conf: 0.91,
  tier: 'routine',
  lat: 19.5467,
  lng: -71.7091,
  action: 'observe',
  thermal: 8.4,
  dist: 28,
  bearing: 76
}, {
  id: 'E-20260413-005',
  day: 1,
  tOffset: 60291,
  type: 'vehicle',
  subType: 'motorcycle-local',
  count: 1,
  conf: 0.93,
  tier: 'routine',
  lat: 19.5489,
  lng: -71.7142,
  action: 'plate-capture',
  thermal: 22.1,
  dist: 38,
  bearing: 158
}, {
  id: 'E-20260413-006',
  day: 1,
  tOffset: 64507,
  type: 'animal',
  subType: 'canine-stray',
  count: 1,
  conf: 0.92,
  tier: 'routine',
  lat: 19.5502,
  lng: -71.7118,
  action: 'observe',
  thermal: 4.4,
  dist: 26,
  bearing: 197
}, {
  id: 'E-20260414-001',
  day: 2,
  tOffset: 2500,
  type: 'human',
  subType: 'single-local',
  count: 1,
  conf: 0.90,
  tier: 'routine',
  lat: 19.5475,
  lng: -71.7093,
  action: 'observe',
  thermal: 8.2,
  dist: 29,
  bearing: 88
}, {
  id: 'E-20260414-002',
  day: 2,
  tOffset: 7092,
  type: 'unknown',
  subType: 'low-thermal-contact',
  count: 1,
  conf: 0.63,
  tier: 'suspicious',
  lat: 19.5519,
  lng: -71.7131,
  action: 'approach-illuminate',
  thermal: 5.8,
  dist: 18,
  bearing: 43
}, {
  id: 'E-20260414-003',
  day: 2,
  tOffset: 7138,
  type: 'animal',
  subType: 'boar-reclassified',
  count: 1,
  conf: 0.88,
  tier: 'routine',
  lat: 19.5519,
  lng: -71.7131,
  action: 'reclassify-standdown',
  thermal: 6.1,
  dist: 8,
  bearing: 43
}, {
  id: 'E-20260414-004',
  day: 2,
  tOffset: 12325,
  type: 'animal',
  subType: 'livestock-cattle',
  count: 4,
  conf: 0.96,
  tier: 'routine',
  lat: 19.5533,
  lng: -71.7168,
  action: 'observe',
  thermal: 7.8,
  dist: 55,
  bearing: 235
}, {
  id: 'E-20260414-005',
  day: 2,
  tOffset: 54257,
  type: 'vehicle',
  subType: 'pickup-local',
  count: 2,
  conf: 0.92,
  tier: 'routine',
  lat: 19.5482,
  lng: -71.7098,
  action: 'plate-capture',
  thermal: 21.4,
  dist: 47,
  bearing: 162
}, {
  id: 'E-20260414-006',
  day: 2,
  tOffset: 59373,
  type: 'human',
  subType: 'pair-marked',
  count: 2,
  conf: 0.89,
  tier: 'routine',
  lat: 19.5497,
  lng: -71.7147,
  action: 'observe',
  thermal: 8.0,
  dist: 34,
  bearing: 121
}, {
  id: 'E-20260414-007',
  day: 2,
  tOffset: 65504,
  type: 'animal',
  subType: 'canine-stray-repeat',
  count: 1,
  conf: 0.95,
  tier: 'routine',
  lat: 19.5488,
  lng: -71.7119,
  action: 'observe-match',
  thermal: 4.3,
  dist: 22,
  bearing: 187
}, {
  id: 'E-20260415-001',
  day: 3,
  tOffset: 2421,
  type: 'human',
  subType: 'single-marked',
  count: 1,
  conf: 0.90,
  tier: 'routine',
  lat: 19.5471,
  lng: -71.7087,
  action: 'observe',
  thermal: 8.3,
  dist: 27,
  bearing: 92
}, {
  id: 'E-20260415-002',
  day: 3,
  tOffset: 10517,
  type: 'animal',
  subType: 'livestock-goats',
  count: 6,
  conf: 0.97,
  tier: 'routine',
  lat: 19.5510,
  lng: -71.7134,
  action: 'observe',
  thermal: 6.2,
  dist: 44,
  bearing: 215
}, {
  id: 'E-20260415-003',
  day: 3,
  tOffset: 55328,
  type: 'vehicle',
  subType: 'motorcycle-local',
  count: 2,
  conf: 0.91,
  tier: 'routine',
  lat: 19.5484,
  lng: -71.7101,
  action: 'plate-capture',
  thermal: 22.0,
  dist: 41,
  bearing: 154
}, {
  id: 'E-20260415-004',
  day: 3,
  tOffset: 80077,
  type: 'human',
  subType: 'group-offtrail-nolights',
  count: 5,
  conf: 0.87,
  tier: 'alert',
  lat: 19.5541,
  lng: -71.7172,
  action: 'illuminate-ir-relay-hq-cesfront',
  thermal: 9.1,
  dist: 45,
  bearing: 28
}, {
  id: 'E-20260415-005',
  day: 3,
  tOffset: 82033,
  type: 'human',
  subType: 'cesfront-friendly',
  count: 3,
  conf: 0.94,
  tier: 'routine',
  lat: 19.5541,
  lng: -71.7172,
  action: 'confirm-friendly',
  thermal: 8.9,
  dist: 50,
  bearing: 28
}, {
  id: 'E-20260415-006',
  day: 3,
  tOffset: 86320,
  type: 'animal',
  subType: 'canine-stray-repeat',
  count: 1,
  conf: 0.94,
  tier: 'routine',
  lat: 19.5495,
  lng: -71.7139,
  action: 'observe-match',
  thermal: 4.4,
  dist: 24,
  bearing: 191
}, {
  id: 'E-20260416-001',
  day: 4,
  tOffset: 3524,
  type: 'human',
  subType: 'single-umbrella',
  count: 1,
  conf: 0.72,
  tier: 'routine',
  lat: 19.5479,
  lng: -71.7095,
  action: 'observe-lowconf',
  thermal: 7.4,
  dist: 33,
  bearing: 98
}, {
  id: 'E-20260416-002',
  day: 4,
  tOffset: 59930,
  type: 'vehicle',
  subType: 'pickup-local',
  count: 1,
  conf: 0.90,
  tier: 'routine',
  lat: 19.5502,
  lng: -71.7125,
  action: 'plate-capture',
  thermal: 20.8,
  dist: 49,
  bearing: 168
}, {
  id: 'E-20260417-001',
  day: 5,
  tOffset: 2531,
  type: 'human',
  subType: 'single-marked',
  count: 1,
  conf: 0.92,
  tier: 'routine',
  lat: 19.5473,
  lng: -71.7091,
  action: 'observe',
  thermal: 8.3,
  dist: 29,
  bearing: 91
}, {
  id: 'E-20260417-002',
  day: 5,
  tOffset: 7493,
  type: 'animal',
  subType: 'livestock-cattle',
  count: 2,
  conf: 0.96,
  tier: 'routine',
  lat: 19.5527,
  lng: -71.7159,
  action: 'observe',
  thermal: 7.6,
  dist: 58,
  bearing: 232
}, {
  id: 'E-20260417-003',
  day: 5,
  tOffset: 12104,
  type: 'drone',
  subType: 'small-uas-2.4ghz',
  count: 1,
  conf: 0.81,
  tier: 'alert',
  lat: 19.5530,
  lng: -71.7165,
  action: 'track-rf-log-relay',
  thermal: 2.1,
  dist: 80,
  bearing: 15
}, {
  id: 'E-20260417-004',
  day: 5,
  tOffset: 55808,
  type: 'vehicle',
  subType: 'pickup-local',
  count: 2,
  conf: 0.90,
  tier: 'routine',
  lat: 19.5488,
  lng: -71.7104,
  action: 'plate-capture',
  thermal: 21.1,
  dist: 46,
  bearing: 165
}, {
  id: 'E-20260417-005',
  day: 5,
  tOffset: 60739,
  type: 'human',
  subType: 'surveillance-of-unit',
  count: 1,
  conf: 0.88,
  tier: 'suspicious',
  lat: 19.5519,
  lng: -71.7143,
  action: 'covert-observe-capture',
  thermal: 8.2,
  dist: 58,
  bearing: 48
}, {
  id: 'E-20260417-006',
  day: 5,
  tOffset: 64706,
  type: 'animal',
  subType: 'canine-stray-repeat',
  count: 1,
  conf: 0.93,
  tier: 'routine',
  lat: 19.5493,
  lng: -71.7132,
  action: 'observe-match',
  thermal: 4.3,
  dist: 25,
  bearing: 189
}, {
  id: 'E-20260418-001',
  day: 6,
  tOffset: 3737,
  type: 'animal',
  subType: 'livestock-goats',
  count: 8,
  conf: 0.96,
  tier: 'routine',
  lat: 19.5476,
  lng: -71.7092,
  action: 'observe',
  thermal: 6.4,
  dist: 40,
  bearing: 218
}, {
  id: 'E-20260418-002',
  day: 6,
  tOffset: 12941,
  type: 'human',
  subType: 'pair-marked',
  count: 2,
  conf: 0.90,
  tier: 'routine',
  lat: 19.5498,
  lng: -71.7119,
  action: 'observe',
  thermal: 8.1,
  dist: 32,
  bearing: 112
}, {
  id: 'E-20260418-003',
  day: 6,
  tOffset: 15065,
  type: 'vehicle',
  subType: 'motorcycle-local',
  count: 1,
  conf: 0.92,
  tier: 'routine',
  lat: 19.5488,
  lng: -71.7105,
  action: 'plate-capture',
  thermal: 22.3,
  dist: 39,
  bearing: 159
}, {
  id: 'E-20260418-004',
  day: 6,
  tOffset: 78502,
  type: 'human',
  subType: 'pair-pack-animal-cargo',
  count: 2,
  conf: 0.89,
  tier: 'alert',
  lat: 19.5544,
  lng: -71.7177,
  action: 'illuminate-ir-relay-shadow',
  thermal: 9.3,
  dist: 60,
  bearing: 24
}, {
  id: 'E-20260418-005',
  day: 6,
  tOffset: 81236,
  type: 'human',
  subType: 'cesfront-friendly',
  count: 4,
  conf: 0.93,
  tier: 'routine',
  lat: 19.5544,
  lng: -71.7178,
  action: 'confirm-handoff',
  thermal: 9.0,
  dist: 65,
  bearing: 24
}, {
  id: 'E-20260418-006',
  day: 6,
  tOffset: 85268,
  type: 'animal',
  subType: 'canine-stray-repeat',
  count: 1,
  conf: 0.94,
  tier: 'routine',
  lat: 19.5494,
  lng: -71.7137,
  action: 'observe-match',
  thermal: 4.3,
  dist: 23,
  bearing: 190
}, {
  id: 'E-20260419-001',
  day: 7,
  tOffset: 2300,
  type: 'human',
  subType: 'single-marked',
  count: 1,
  conf: 0.91,
  tier: 'routine',
  lat: 19.5472,
  lng: -71.7088,
  action: 'observe',
  thermal: 8.2,
  dist: 28,
  bearing: 89
}, {
  id: 'E-20260419-002',
  day: 7,
  tOffset: 8163,
  type: 'animal',
  subType: 'livestock-goats',
  count: 5,
  conf: 0.96,
  tier: 'routine',
  lat: 19.5508,
  lng: -71.7128,
  action: 'observe',
  thermal: 6.3,
  dist: 43,
  bearing: 213
}, {
  id: 'E-20260419-003',
  day: 7,
  tOffset: 13469,
  type: 'human',
  subType: 'family-group',
  count: 4,
  conf: 0.89,
  tier: 'routine',
  lat: 19.5531,
  lng: -71.7168,
  action: 'observe',
  thermal: 8.0,
  dist: 52,
  bearing: 228
}, {
  id: 'E-20260419-004',
  day: 7,
  tOffset: 54735,
  type: 'vehicle',
  subType: 'pickup-local',
  count: 2,
  conf: 0.91,
  tier: 'routine',
  lat: 19.5485,
  lng: -71.7102,
  action: 'plate-capture',
  thermal: 21.2,
  dist: 45,
  bearing: 163
}, {
  id: 'E-20260419-005',
  day: 7,
  tOffset: 60672,
  type: 'animal',
  subType: 'canine-stray-repeat',
  count: 1,
  conf: 0.95,
  tier: 'routine',
  lat: 19.5496,
  lng: -71.7140,
  action: 'observe-match',
  thermal: 4.4,
  dist: 24,
  bearing: 188
}, {
  id: 'E-20260419-006',
  day: 7,
  tOffset: 65317,
  type: 'human',
  subType: 'pair-marked',
  count: 2,
  conf: 0.90,
  tier: 'routine',
  lat: 19.5478,
  lng: -71.7094,
  action: 'observe',
  thermal: 8.1,
  dist: 30,
  bearing: 84
}];
const DAY_SECONDS = 86400;
const WEEK_SECONDS = 7 * DAY_SECONDS;
const EVENTS_HYDRATED = EVENTS.map(e => ({
  ...e,
  globalT: (e.day - 1) * DAY_SECONDS + e.tOffset,
  hash: 'sha256:' + Math.abs(e.id.split('').reduce((a, c) => a + c.charCodeAt(0) * 31, 0)).toString(16).padStart(8, '0') + '…' + (e.day * 1000 + e.tOffset).toString(16).slice(-4)
})).sort((a, b) => a.globalT - b.globalT);
const MAP_BOUNDS = {
  latMin: 19.5460,
  latMax: 19.5550,
  lngMin: -71.7190,
  lngMax: -71.7080
};
const PATROL_PATH = [{
  lat: 19.5470,
  lng: -71.7090,
  wp: 'WP-1'
}, {
  lat: 19.5480,
  lng: -71.7100,
  wp: null
}, {
  lat: 19.5495,
  lng: -71.7120,
  wp: 'WP-2'
}, {
  lat: 19.5510,
  lng: -71.7135,
  wp: null
}, {
  lat: 19.5525,
  lng: -71.7155,
  wp: 'WP-3'
}, {
  lat: 19.5540,
  lng: -71.7175,
  wp: 'WP-4'
}, {
  lat: 19.5530,
  lng: -71.7165,
  wp: null
}, {
  lat: 19.5515,
  lng: -71.7150,
  wp: null
}, {
  lat: 19.5500,
  lng: -71.7125,
  wp: 'WP-5'
}, {
  lat: 19.5485,
  lng: -71.7105,
  wp: null
}, {
  lat: 19.5470,
  lng: -71.7090,
  wp: 'WP-1'
}];
function projectLatLng(lat, lng, w, h, pad = 20) {
  const x = pad + (lng - MAP_BOUNDS.lngMin) / (MAP_BOUNDS.lngMax - MAP_BOUNDS.lngMin) * (w - 2 * pad);
  const y = pad + (MAP_BOUNDS.latMax - lat) / (MAP_BOUNDS.latMax - MAP_BOUNDS.latMin) * (h - 2 * pad);
  return {
    x,
    y
  };
}
const tierColor = tier => tier === 'alert' ? RED : tier === 'suspicious' ? AMBER : CYAN;
const tierLabel = tier => tier.toUpperCase();
const tierIcon = tier => tier === 'alert' ? /*#__PURE__*/React.createElement(IAlert, {
  size: 12
}) : tier === 'suspicious' ? /*#__PURE__*/React.createElement(IEye, {
  size: 12
}) : /*#__PURE__*/React.createElement(IShield, {
  size: 12
});
function formatGlobalT(tSec) {
  const day = Math.floor(tSec / DAY_SECONDS) + 1;
  const s = tSec % DAY_SECONDS;
  const h = Math.floor(s / 3600).toString().padStart(2, '0');
  const m = Math.floor(s % 3600 / 60).toString().padStart(2, '0');
  const ss = Math.floor(s % 60).toString().padStart(2, '0');
  return {
    day,
    time: `${h}:${m}:${ss}`,
    date: `2026-04-${12 + day}`
  };
}

// ============================================================================
// ROOT
// ============================================================================
function OrimusSOCConsole() {
  // Auto-detect best layout based on viewport width; user can override.
  const [layoutOverride, setLayoutOverride] = useState(null);
  const [vw, setVw] = useState(typeof window !== 'undefined' ? window.innerWidth : 1440);
  useEffect(() => {
    const onR = () => setVw(window.innerWidth);
    window.addEventListener('resize', onR);
    return () => window.removeEventListener('resize', onR);
  }, []);
  const autoLayout = vw >= 1280 ? 'laptop' : 'ipad';
  const layout = layoutOverride || autoLayout;
  const [clock, setClock] = useState(0);
  const [playing, setPlaying] = useState(true);
  const [speed, setSpeed] = useState(240);
  const [selectedId, setSel] = useState(null);
  const [filter, setFilter] = useState('all');
  const [tabRight, setTabRight] = useState('feed'); // iPad right-column tabs
  const feedRef = useRef(null);
  const lastTick = useRef(Date.now());
  useEffect(() => {
    if (!playing) {
      lastTick.current = Date.now();
      return;
    }
    const id = setInterval(() => {
      const now = Date.now();
      const dt = (now - lastTick.current) / 1000;
      lastTick.current = now;
      setClock(c => {
        const n = c + dt * speed;
        return n >= WEEK_SECONDS ? 0 : n;
      });
    }, 100);
    return () => clearInterval(id);
  }, [playing, speed]);
  const visible = useMemo(() => EVENTS_HYDRATED.filter(e => e.globalT <= clock), [clock]);
  const filtered = useMemo(() => filter === 'all' ? visible : visible.filter(e => e.tier === filter), [visible, filter]);
  const current = useMemo(() => {
    if (selectedId) return EVENTS_HYDRATED.find(e => e.id === selectedId);
    return visible[visible.length - 1] || null;
  }, [visible, selectedId]);
  useEffect(() => {
    if (feedRef.current) feedRef.current.scrollTop = 0;
  }, [visible.length]);
  const counts = useMemo(() => ({
    total: visible.length,
    alert: visible.filter(e => e.tier === 'alert').length,
    suspicious: visible.filter(e => e.tier === 'suspicious').length,
    routine: visible.filter(e => e.tier === 'routine').length
  }), [visible]);
  const t = formatGlobalT(clock);
  const dayProg = clock % DAY_SECONDS / DAY_SECONDS;
  const unitPos = useMemo(() => {
    const n = PATROL_PATH.length - 1;
    const p = dayProg * n;
    const i = Math.floor(p) % n;
    const f = p - Math.floor(p);
    const a = PATROL_PATH[i],
      b = PATROL_PATH[i + 1];
    return {
      lat: a.lat + (b.lat - a.lat) * f,
      lng: a.lng + (b.lng - a.lng) * f
    };
  }, [dayProg]);
  const battery = Math.max(15, 100 - dayProg * 75);
  const sig = -82 - Math.round(6 * Math.sin(clock / 500));
  const cpu = 40 + Math.round(8 * Math.sin(clock / 300)) + (current?.tier === 'alert' ? 15 : 0);
  const gpu = 63 + Math.round(6 * Math.cos(clock / 250)) + (current?.tier === 'alert' ? 10 : 0);
  const motor = 55 + Math.round(8 * Math.sin(clock / 400));
  const isIpad = layout === 'ipad';
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: NAVY,
      color: TEXT,
      fontFamily: FONT_MONO,
      minHeight: '100vh',
      fontSize: isIpad ? 11 : 12,
      lineHeight: 1.4
    }
  }, /*#__PURE__*/React.createElement(ClassificationBar, null), /*#__PURE__*/React.createElement(Header, {
    isIpad: isIpad,
    counts: counts,
    t: t,
    layout: layout,
    onLayoutChange: setLayoutOverride,
    autoLayout: autoLayout
  }), /*#__PURE__*/React.createElement("main", {
    style: {
      display: 'grid',
      gridTemplateColumns: isIpad ? '260px 1fr' : '340px 1fr 380px',
      gap: 1,
      background: GRID_2,
      minHeight: 'calc(100vh - 96px)'
    }
  }, /*#__PURE__*/React.createElement("section", {
    style: {
      background: NAVY,
      display: 'flex',
      flexDirection: 'column'
    }
  }, /*#__PURE__*/React.createElement(PanelHeader, null, "SECTOR MAP \xB7 DJB-D3"), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: isIpad ? 8 : 12
    }
  }, /*#__PURE__*/React.createElement(SectorMap, {
    events: visible,
    unitPos: unitPos,
    selectedId: selectedId,
    onSelect: setSel,
    isIpad: isIpad
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      marginTop: 6,
      fontSize: 9,
      color: TEXT_DIM
    }
  }, /*#__PURE__*/React.createElement("span", null, "LAT ", unitPos.lat.toFixed(5)), /*#__PURE__*/React.createElement("span", null, "LNG ", unitPos.lng.toFixed(5)), /*#__PURE__*/React.createElement("span", null, "284m"))), /*#__PURE__*/React.createElement(PanelHeader, null, "PLATFORM TELEMETRY"), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: isIpad ? 8 : 12,
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 6
    }
  }, /*#__PURE__*/React.createElement(Gauge, {
    icon: /*#__PURE__*/React.createElement(IBattery, null),
    label: "BATT",
    value: `${battery.toFixed(0)}%`,
    pct: battery,
    color: battery > 30 ? CYAN : AMBER
  }), /*#__PURE__*/React.createElement(Gauge, {
    icon: /*#__PURE__*/React.createElement(IRadio, null),
    label: "SIG",
    value: `${sig} dBm`,
    pct: Math.max(0, 100 + sig),
    color: CYAN
  }), /*#__PURE__*/React.createElement(Gauge, {
    icon: /*#__PURE__*/React.createElement(ICpu, null),
    label: "CPU",
    value: `${cpu}%`,
    pct: cpu,
    color: cpu > 80 ? AMBER : CYAN
  }), /*#__PURE__*/React.createElement(Gauge, {
    icon: /*#__PURE__*/React.createElement(IActivity, null),
    label: "GPU",
    value: `${gpu}%`,
    pct: gpu,
    color: gpu > 80 ? AMBER : CYAN
  }), /*#__PURE__*/React.createElement(Gauge, {
    icon: /*#__PURE__*/React.createElement(ITherm, null),
    label: "MOTOR",
    value: `${motor}°C`,
    pct: motor,
    color: motor > 70 ? AMBER : CYAN
  }), /*#__PURE__*/React.createElement(Gauge, {
    icon: /*#__PURE__*/React.createElement(ILock, null),
    label: "TAMPER",
    value: "OK",
    pct: 100,
    color: GREEN
  })), !isIpad && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(PanelHeader, null, "DETECTION DENSITY \xB7 WEEK"), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 12
    }
  }, /*#__PURE__*/React.createElement(DensityBars, {
    events: visible,
    currentDay: t.day
  })))), isIpad ? /*#__PURE__*/React.createElement("section", {
    style: {
      background: NAVY,
      display: 'flex',
      flexDirection: 'column'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      borderBottom: `1px solid ${GRID_2}`,
      background: NAVY_2
    }
  }, [{
    k: 'detection',
    label: 'DETECTION'
  }, {
    k: 'feed',
    label: `FEED · ${filtered.length}`
  }, {
    k: 'custody',
    label: 'CUSTODY'
  }, {
    k: 'density',
    label: 'DENSITY'
  }].map(tab => /*#__PURE__*/React.createElement("button", {
    key: tab.k,
    onClick: () => setTabRight(tab.k),
    style: {
      flex: 1,
      background: tabRight === tab.k ? NAVY : 'transparent',
      color: tabRight === tab.k ? TEXT : TEXT_DIM,
      border: 'none',
      borderBottom: `2px solid ${tabRight === tab.k ? CYAN : 'transparent'}`,
      padding: '10px 8px',
      fontSize: 10,
      letterSpacing: 2,
      fontWeight: 700,
      fontFamily: FONT_MONO,
      cursor: 'pointer'
    }
  }, tab.label))), tabRight === 'detection' && (current ? /*#__PURE__*/React.createElement(DetectionCard, {
    event: current
  }) : /*#__PURE__*/React.createElement(EmptyPanel, null)), tabRight === 'feed' && /*#__PURE__*/React.createElement(FeedPanel, {
    events: filtered,
    selectedId: selectedId,
    currentId: current?.id,
    filter: filter,
    onFilter: setFilter,
    onSelect: setSel,
    feedRef: feedRef
  }), tabRight === 'custody' && /*#__PURE__*/React.createElement(CustodyPanel, {
    counts: counts
  }), tabRight === 'density' && /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 16
    }
  }, /*#__PURE__*/React.createElement(DensityBars, {
    events: visible,
    currentDay: t.day
  }))) : /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("section", {
    style: {
      background: NAVY,
      display: 'flex',
      flexDirection: 'column'
    }
  }, /*#__PURE__*/React.createElement(PanelHeader, {
    right: current ? /*#__PURE__*/React.createElement("span", {
      style: {
        color: tierColor(current.tier)
      }
    }, "\u25CF ", tierLabel(current.tier)) : null
  }, "ACTIVE DETECTION"), current ? /*#__PURE__*/React.createElement(DetectionCard, {
    event: current
  }) : /*#__PURE__*/React.createElement(EmptyPanel, null), /*#__PURE__*/React.createElement(PanelHeader, null, "EVIDENTIARY CHAIN OF CUSTODY"), /*#__PURE__*/React.createElement(CustodyGrid, {
    counts: counts
  }), /*#__PURE__*/React.createElement(PanelHeader, null, "DATA LIFECYCLE"), /*#__PURE__*/React.createElement(Lifecycle, {
    counts: counts
  })), /*#__PURE__*/React.createElement("section", {
    style: {
      background: NAVY,
      display: 'flex',
      flexDirection: 'column'
    }
  }, /*#__PURE__*/React.createElement(PanelHeader, {
    right: /*#__PURE__*/React.createElement(FilterTabs, {
      filter: filter,
      onChange: setFilter
    })
  }, "EVENT FEED \xB7 ", filtered.length), /*#__PURE__*/React.createElement("div", {
    ref: feedRef,
    style: {
      flex: 1,
      overflowY: 'auto',
      maxHeight: 'calc(100vh - 280px)'
    }
  }, [...filtered].reverse().map(e => /*#__PURE__*/React.createElement(FeedRow, {
    key: e.id,
    event: e,
    selected: e.id === selectedId || !selectedId && e.id === current?.id,
    onClick: () => setSel(e.id === selectedId ? null : e.id)
  })), filtered.length === 0 && /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 20,
      textAlign: 'center',
      color: TEXT_DIMMER,
      fontSize: 10
    }
  }, "NO EVENTS MATCH FILTER")), /*#__PURE__*/React.createElement(PanelHeader, null, "EXPORT \xB7 CHAIN OF CUSTODY"), /*#__PURE__*/React.createElement(ExportPanel, null)))), /*#__PURE__*/React.createElement(PlaybackBar, {
    clock: clock,
    playing: playing,
    speed: speed,
    onPlay: () => setPlaying(p => !p),
    onSpeed: setSpeed
  }), /*#__PURE__*/React.createElement(ClassificationBar, null));
}

// ============================================================================
// PANELS & COMPONENTS
// ============================================================================
const ClassificationBar = () => /*#__PURE__*/React.createElement("div", {
  style: {
    background: RED,
    color: '#fff',
    textAlign: 'center',
    padding: '4px 0',
    fontSize: 10,
    letterSpacing: 2,
    fontWeight: 700
  }
}, "// RESTRICTED \u2014 SIMULATION DATA \u2014 NOT FOR OPERATIONAL USE //");
function Header({
  isIpad,
  counts,
  t,
  layout,
  onLayoutChange,
  autoLayout
}) {
  return /*#__PURE__*/React.createElement("header", {
    style: {
      display: 'grid',
      gridTemplateColumns: isIpad ? 'auto 1fr auto auto' : 'auto 1fr auto auto auto',
      gap: isIpad ? 12 : 24,
      alignItems: 'center',
      padding: isIpad ? '8px 12px' : '10px 18px',
      background: NAVY_2,
      borderBottom: `1px solid ${GRID_2}`
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 10
    }
  }, /*#__PURE__*/React.createElement(HexLogo, null), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: FONT_SANS,
      fontSize: isIpad ? 12 : 13,
      letterSpacing: 3,
      fontWeight: 700
    }
  }, "ORIMUS ", /*#__PURE__*/React.createElement("span", {
    style: {
      color: TEXT_DIM,
      fontWeight: 400
    }
  }, "// BORDER SOC v0.9"))), !isIpad && /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 24,
      color: TEXT_DIM,
      fontSize: 11
    }
  }, /*#__PURE__*/React.createElement("span", null, "UNIT ", /*#__PURE__*/React.createElement("span", {
    style: {
      color: TEXT
    }
  }, "GO2X-001")), /*#__PURE__*/React.createElement("span", null, "SECTOR ", /*#__PURE__*/React.createElement("span", {
    style: {
      color: TEXT
    }
  }, "DJB-D3")), /*#__PURE__*/React.createElement("span", null, "OPERATOR ", /*#__PURE__*/React.createElement("span", {
    style: {
      color: TEXT
    }
  }, "SDQ-OPS-04")), /*#__PURE__*/React.createElement("span", null, "FW ", /*#__PURE__*/React.createElement("span", {
    style: {
      color: TEXT
    }
  }, "v2.4.1"))), isIpad && /*#__PURE__*/React.createElement("div", {
    style: {
      color: TEXT_DIM,
      fontSize: 10
    }
  }, "GO2X-001 \xB7 DJB-D3"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: isIpad ? 6 : 10
    }
  }, /*#__PURE__*/React.createElement(Pill, {
    color: RED,
    label: "ALERT",
    value: counts.alert,
    active: counts.alert > 0
  }), /*#__PURE__*/React.createElement(Pill, {
    color: AMBER,
    label: "SUSP",
    value: counts.suspicious
  }), /*#__PURE__*/React.createElement(Pill, {
    color: CYAN,
    label: "RTN",
    value: counts.routine
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 8,
      fontSize: 11
    }
  }, /*#__PURE__*/React.createElement(IClock, {
    size: 12
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      color: TEXT_DIM
    }
  }, t.date), /*#__PURE__*/React.createElement("span", {
    style: {
      color: TEXT,
      fontWeight: 600
    }
  }, t.time), /*#__PURE__*/React.createElement("span", {
    style: {
      color: TEXT_DIM
    }
  }, "D", t.day, "/7")), !isIpad && /*#__PURE__*/React.createElement(LayoutToggle, {
    layout: layout,
    onChange: onLayoutChange,
    autoLayout: autoLayout
  }));
}
function LayoutToggle({
  layout,
  onChange,
  autoLayout
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 4,
      fontSize: 9
    }
  }, ['laptop', 'ipad'].map(l => /*#__PURE__*/React.createElement("button", {
    key: l,
    onClick: () => onChange(l === autoLayout ? null : l),
    style: {
      background: layout === l ? NAVY_3 : 'transparent',
      color: layout === l ? TEXT : TEXT_DIM,
      border: `1px solid ${layout === l ? GRID_2 : 'transparent'}`,
      padding: '3px 8px',
      fontSize: 9,
      letterSpacing: 1,
      fontFamily: FONT_MONO,
      cursor: 'pointer',
      textTransform: 'uppercase'
    }
  }, l)));
}
const HexLogo = () => /*#__PURE__*/React.createElement("div", {
  style: {
    width: 22,
    height: 22,
    position: 'relative',
    background: `linear-gradient(180deg, ${CYAN} 0%, ${ROYAL} 100%)`,
    clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)'
  }
}, /*#__PURE__*/React.createElement("div", {
  style: {
    position: 'absolute',
    inset: 4,
    background: NAVY,
    clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)'
  }
}), /*#__PURE__*/React.createElement("div", {
  style: {
    position: 'absolute',
    left: '50%',
    top: '50%',
    transform: 'translate(-50%,-50%)',
    width: 6,
    height: 6,
    borderRadius: '50%',
    background: CYAN,
    boxShadow: `0 0 8px ${CYAN}`
  }
}));
const PanelHeader = ({
  children,
  right
}) => /*#__PURE__*/React.createElement("div", {
  style: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '6px 12px',
    background: NAVY_2,
    borderBottom: `1px solid ${GRID_2}`,
    fontSize: 9,
    letterSpacing: 2,
    color: TEXT_DIM,
    fontWeight: 700
  }
}, /*#__PURE__*/React.createElement("span", null, "\u25B8 ", children), right && /*#__PURE__*/React.createElement("span", {
  style: {
    fontSize: 9
  }
}, right));
const Pill = ({
  color,
  label,
  value,
  active
}) => /*#__PURE__*/React.createElement("div", {
  style: {
    border: `1px solid ${color}`,
    padding: '2px 8px',
    fontSize: 10,
    color,
    letterSpacing: 1,
    fontWeight: 700,
    boxShadow: active ? `0 0 8px ${color}` : 'none',
    animation: active ? 'pulse 1.5s infinite' : 'none'
  }
}, label, " ", value);
const Gauge = ({
  icon,
  label,
  value,
  pct,
  color
}) => /*#__PURE__*/React.createElement("div", {
  style: {
    border: `1px solid ${GRID_2}`,
    padding: 6,
    background: NAVY_2
  }
}, /*#__PURE__*/React.createElement("div", {
  style: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    color: TEXT_DIM,
    fontSize: 9
  }
}, /*#__PURE__*/React.createElement("span", {
  style: {
    display: 'flex',
    alignItems: 'center',
    gap: 4
  }
}, icon, " ", label), /*#__PURE__*/React.createElement("span", {
  style: {
    color,
    fontWeight: 700,
    fontSize: 11
  }
}, value)), /*#__PURE__*/React.createElement("div", {
  style: {
    marginTop: 6,
    height: 3,
    background: GRID_2
  }
}, /*#__PURE__*/React.createElement("div", {
  style: {
    width: `${Math.min(100, pct)}%`,
    height: '100%',
    background: color
  }
})));
const KV = ({
  k,
  v,
  color
}) => /*#__PURE__*/React.createElement("div", {
  style: {
    display: 'flex',
    justifyContent: 'space-between',
    padding: '4px 8px',
    background: NAVY_2,
    border: `1px solid ${GRID_2}`
  }
}, /*#__PURE__*/React.createElement("span", {
  style: {
    color: TEXT_DIM,
    fontSize: 9,
    letterSpacing: 1
  }
}, k), /*#__PURE__*/React.createElement("span", {
  style: {
    color: color || TEXT,
    fontSize: 10,
    fontWeight: 600
  }
}, v));
const CustodyGrid = ({
  counts
}) => /*#__PURE__*/React.createElement("div", {
  style: {
    padding: 12,
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gap: 8,
    fontSize: 10
  }
}, /*#__PURE__*/React.createElement(KV, {
  k: "EVENTS LOGGED",
  v: counts.total
}), /*#__PURE__*/React.createElement(KV, {
  k: "LEGAL HOLD",
  v: counts.alert + counts.suspicious
}), /*#__PURE__*/React.createElement(KV, {
  k: "RETENTION DEFAULT",
  v: "90 DAYS"
}), /*#__PURE__*/React.createElement(KV, {
  k: "RETENTION HOLD",
  v: "7 YEARS"
}), /*#__PURE__*/React.createElement(KV, {
  k: "ENCRYPTION AT REST",
  v: "AES-256"
}), /*#__PURE__*/React.createElement(KV, {
  k: "HASH ALGO",
  v: "SHA-256"
}), /*#__PURE__*/React.createElement(KV, {
  k: "SIGNED AUDIT LOG",
  v: "\u2713 ACTIVE",
  color: GREEN
}), /*#__PURE__*/React.createElement(KV, {
  k: "BIOMETRIC MATCH",
  v: "\u2717 DISABLED",
  color: TEXT_DIM
}));
const CustodyPanel = ({
  counts
}) => /*#__PURE__*/React.createElement("div", {
  style: {
    overflowY: 'auto'
  }
}, /*#__PURE__*/React.createElement(CustodyGrid, {
  counts: counts
}), /*#__PURE__*/React.createElement(PanelHeader, null, "DATA LIFECYCLE"), /*#__PURE__*/React.createElement(Lifecycle, {
  counts: counts
}), /*#__PURE__*/React.createElement(PanelHeader, null, "EXPORT"), /*#__PURE__*/React.createElement(ExportPanel, null));
const Lifecycle = ({
  counts
}) => /*#__PURE__*/React.createElement("div", {
  style: {
    padding: 12,
    fontSize: 10,
    color: TEXT_DIM,
    lineHeight: 1.8
  }
}, /*#__PURE__*/React.createElement(LifecycleRow, {
  label: "INGEST",
  status: "ACTIVE",
  color: GREEN,
  detail: `${counts.total} events · 7-day buffer on-unit`
}), /*#__PURE__*/React.createElement(LifecycleRow, {
  label: "TRANSMIT",
  status: "STREAMING",
  color: GREEN,
  detail: "AES-256 \xB7 avg 9.3 GB/day to HQ cold store"
}), /*#__PURE__*/React.createElement(LifecycleRow, {
  label: "CLASSIFY",
  status: "AUTO",
  color: CYAN,
  detail: "tier: routine/suspicious/alert \xB7 auto + human-in-loop"
}), /*#__PURE__*/React.createElement(LifecycleRow, {
  label: "RETAIN",
  status: "POLICY",
  color: CYAN,
  detail: "tiered 30d hot / 1yr cold / 7yr legal hold"
}), /*#__PURE__*/React.createElement(LifecycleRow, {
  label: "EXPORT",
  status: "ON DEMAND",
  color: TEXT_DIM,
  detail: "SIEM \xB7 analyst review \xB7 evidentiary bundle"
}));
const LifecycleRow = ({
  label,
  status,
  color,
  detail
}) => /*#__PURE__*/React.createElement("div", {
  style: {
    display: 'grid',
    gridTemplateColumns: '80px 80px 1fr',
    gap: 8,
    marginBottom: 6,
    alignItems: 'center'
  }
}, /*#__PURE__*/React.createElement("span", {
  style: {
    color: TEXT_DIM,
    fontSize: 9,
    letterSpacing: 2
  }
}, label), /*#__PURE__*/React.createElement("span", {
  style: {
    color,
    fontSize: 9,
    letterSpacing: 1,
    fontWeight: 700
  }
}, "\u25CF ", status), /*#__PURE__*/React.createElement("span", {
  style: {
    color: TEXT_DIM,
    fontSize: 10
  }
}, detail));
const ExportPanel = () => /*#__PURE__*/React.createElement("div", {
  style: {
    padding: 12,
    display: 'grid',
    gap: 6
  }
}, /*#__PURE__*/React.createElement(ExportBtn, {
  icon: /*#__PURE__*/React.createElement(IDownload, {
    size: 11
  }),
  label: "EVIDENTIARY BUNDLE (.zip)"
}), /*#__PURE__*/React.createElement(ExportBtn, {
  icon: /*#__PURE__*/React.createElement(IFile, {
    size: 11
  }),
  label: "SIEM EXPORT (CEF / STIX 2.1)"
}), /*#__PURE__*/React.createElement(ExportBtn, {
  icon: /*#__PURE__*/React.createElement(IEye, {
    size: 11
  }),
  label: "SUBMIT TO ANALYST REVIEW"
}), /*#__PURE__*/React.createElement("div", {
  style: {
    fontSize: 9,
    color: TEXT_DIMMER,
    marginTop: 4,
    lineHeight: 1.5
  }
}, "Demo build \xB7 export endpoints stubbed \xB7 production build integrates with gov SIEM and ticketing."));
const ExportBtn = ({
  icon,
  label
}) => /*#__PURE__*/React.createElement("button", {
  style: {
    display: 'flex',
    alignItems: 'center',
    gap: 8,
    background: NAVY_2,
    border: `1px solid ${GRID_2}`,
    color: TEXT,
    padding: '6px 10px',
    fontSize: 10,
    letterSpacing: 1,
    fontFamily: FONT_MONO,
    cursor: 'pointer',
    textAlign: 'left'
  }
}, icon, " ", label, /*#__PURE__*/React.createElement("span", {
  style: {
    marginLeft: 'auto',
    color: TEXT_DIM
  }
}, /*#__PURE__*/React.createElement(IChevron, {
  size: 11
})));
const FilterTabs = ({
  filter,
  onChange
}) => /*#__PURE__*/React.createElement("div", {
  style: {
    display: 'flex',
    gap: 4
  }
}, ['all', 'alert', 'suspicious', 'routine'].map(f => /*#__PURE__*/React.createElement("button", {
  key: f,
  onClick: () => onChange(f),
  style: {
    background: filter === f ? NAVY_3 : 'transparent',
    color: filter === f ? TEXT : TEXT_DIM,
    border: `1px solid ${filter === f ? GRID_2 : 'transparent'}`,
    fontSize: 9,
    padding: '2px 6px',
    cursor: 'pointer',
    fontFamily: FONT_MONO,
    letterSpacing: 1,
    textTransform: 'uppercase'
  }
}, f)));
const FeedPanel = ({
  events,
  selectedId,
  currentId,
  filter,
  onFilter,
  onSelect,
  feedRef
}) => /*#__PURE__*/React.createElement("div", {
  style: {
    display: 'flex',
    flexDirection: 'column',
    flex: 1,
    minHeight: 0
  }
}, /*#__PURE__*/React.createElement("div", {
  style: {
    padding: '6px 12px',
    background: NAVY_2,
    borderBottom: `1px solid ${GRID_2}`,
    display: 'flex',
    justifyContent: 'flex-end'
  }
}, /*#__PURE__*/React.createElement(FilterTabs, {
  filter: filter,
  onChange: onFilter
})), /*#__PURE__*/React.createElement("div", {
  ref: feedRef,
  style: {
    flex: 1,
    overflowY: 'auto'
  }
}, [...events].reverse().map(e => /*#__PURE__*/React.createElement(FeedRow, {
  key: e.id,
  event: e,
  selected: e.id === selectedId || !selectedId && e.id === currentId,
  onClick: () => onSelect(e.id === selectedId ? null : e.id)
}))));
const FeedRow = ({
  event,
  selected,
  onClick
}) => {
  const c = tierColor(event.tier);
  const t = formatGlobalT(event.globalT);
  return /*#__PURE__*/React.createElement("div", {
    onClick: onClick,
    style: {
      padding: '8px 12px',
      borderBottom: `1px solid ${GRID_2}`,
      borderLeft: `3px solid ${selected ? c : 'transparent'}`,
      background: selected ? NAVY_2 : 'transparent',
      cursor: 'pointer',
      display: 'grid',
      gridTemplateColumns: '14px 1fr auto',
      gap: 8,
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: c
    }
  }, tierIcon(event.tier)), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 10,
      color: TEXT,
      fontWeight: 600
    }
  }, event.id), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 9,
      color: TEXT_DIM
    }
  }, event.type.toUpperCase(), " \xB7 ", event.subType, " \xB7 conf ", event.conf.toFixed(2))), /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: 'right'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 9,
      color: TEXT_DIM
    }
  }, "D", t.day), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 9,
      color: TEXT_DIM,
      fontFamily: FONT_MONO
    }
  }, t.time.slice(0, 5))));
};
const EmptyPanel = () => /*#__PURE__*/React.createElement("div", {
  style: {
    padding: 40,
    textAlign: 'center',
    color: TEXT_DIM
  }
}, "AWAITING FIRST DETECTION\u2026");
const DetectionCard = ({
  event
}) => {
  const c = tierColor(event.tier);
  const t = formatGlobalT(event.globalT);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 16,
      borderLeft: `3px solid ${c}`,
      margin: 12,
      background: NAVY_2
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'flex-start',
      marginBottom: 12
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 10,
      color: TEXT_DIM,
      letterSpacing: 1
    }
  }, "EVENT ID"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 15,
      fontWeight: 700,
      color: TEXT,
      letterSpacing: 1
    }
  }, event.id)), /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: 'right'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 10,
      color: TEXT_DIM,
      letterSpacing: 1
    }
  }, "CLASSIFICATION"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      fontWeight: 700,
      color: c,
      letterSpacing: 2,
      display: 'flex',
      gap: 6,
      alignItems: 'center',
      justifyContent: 'flex-end'
    }
  }, tierIcon(event.tier), " ", tierLabel(event.tier)))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(4, 1fr)',
      gap: 10,
      marginBottom: 12
    }
  }, /*#__PURE__*/React.createElement(DataCell, {
    label: "TYPE",
    value: event.type.toUpperCase()
  }), /*#__PURE__*/React.createElement(DataCell, {
    label: "SUBTYPE",
    value: event.subType,
    mono: true
  }), /*#__PURE__*/React.createElement(DataCell, {
    label: "COUNT",
    value: event.count
  }), /*#__PURE__*/React.createElement(DataCell, {
    label: "CONFIDENCE",
    value: event.conf.toFixed(2),
    accent: event.conf > 0.85 ? GREEN : AMBER
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(4, 1fr)',
      gap: 10,
      marginBottom: 12
    }
  }, /*#__PURE__*/React.createElement(DataCell, {
    label: "LAT",
    value: event.lat.toFixed(5),
    mono: true
  }), /*#__PURE__*/React.createElement(DataCell, {
    label: "LNG",
    value: event.lng.toFixed(5),
    mono: true
  }), /*#__PURE__*/React.createElement(DataCell, {
    label: "DISTANCE",
    value: `${event.dist} m`
  }), /*#__PURE__*/React.createElement(DataCell, {
    label: "BEARING",
    value: `${String(event.bearing).padStart(3, '0')}°`
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(4, 1fr)',
      gap: 10,
      marginBottom: 12
    }
  }, /*#__PURE__*/React.createElement(DataCell, {
    label: "THERMAL \u0394",
    value: `+${event.thermal}°C`
  }), /*#__PURE__*/React.createElement(DataCell, {
    label: "TIMESTAMP",
    value: `${t.date} ${t.time}`,
    mono: true
  }), /*#__PURE__*/React.createElement(DataCell, {
    label: "TZ",
    value: "AST (UTC-4)"
  }), /*#__PURE__*/React.createElement(DataCell, {
    label: "DAY",
    value: `D${t.day}/7`
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      background: NAVY,
      padding: 10,
      border: `1px solid ${GRID_2}`,
      marginBottom: 8
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 9,
      color: TEXT_DIM,
      letterSpacing: 2,
      marginBottom: 4
    }
  }, "ACTION TAKEN"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      color: TEXT,
      fontWeight: 600
    }
  }, event.action.toUpperCase().replace(/-/g, ' '))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 8,
      padding: '6px 10px',
      background: NAVY,
      border: `1px solid ${GRID_2}`
    }
  }, /*#__PURE__*/React.createElement(IHash, {
    size: 11
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 9,
      color: TEXT_DIM,
      letterSpacing: 1
    }
  }, "CHAIN-OF-CUSTODY HASH"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 10,
      color: CYAN,
      marginLeft: 'auto',
      fontFamily: FONT_MONO
    }
  }, event.hash)));
};
const DataCell = ({
  label,
  value,
  accent,
  mono
}) => /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
  style: {
    fontSize: 8,
    color: TEXT_DIM,
    letterSpacing: 2,
    marginBottom: 2
  }
}, label), /*#__PURE__*/React.createElement("div", {
  style: {
    fontSize: 12,
    color: accent || TEXT,
    fontWeight: 600,
    fontFamily: mono ? FONT_MONO : FONT_SANS
  }
}, value));
const DensityBars = ({
  events,
  currentDay
}) => {
  const byDay = Array.from({
    length: 7
  }, (_, i) => {
    const day = i + 1;
    const d = events.filter(e => e.day === day);
    return {
      day,
      total: d.length,
      alert: d.filter(e => e.tier === 'alert').length,
      susp: d.filter(e => e.tier === 'suspicious').length,
      routine: d.filter(e => e.tier === 'routine').length
    };
  });
  const max = Math.max(7, ...byDay.map(d => d.total));
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 4,
      alignItems: 'flex-end',
      height: 60
    }
  }, byDay.map(d => /*#__PURE__*/React.createElement("div", {
    key: d.day,
    style: {
      flex: 1,
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'flex-end',
      gap: 1,
      opacity: d.day <= currentDay ? 1 : 0.25
    }
  }, d.alert > 0 && /*#__PURE__*/React.createElement("div", {
    style: {
      height: `${d.alert / max * 60}px`,
      background: RED
    }
  }), d.susp > 0 && /*#__PURE__*/React.createElement("div", {
    style: {
      height: `${d.susp / max * 60}px`,
      background: AMBER
    }
  }), d.routine > 0 && /*#__PURE__*/React.createElement("div", {
    style: {
      height: `${d.routine / max * 60}px`,
      background: CYAN,
      opacity: 0.7
    }
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 4,
      marginTop: 4
    }
  }, byDay.map(d => /*#__PURE__*/React.createElement("div", {
    key: d.day,
    style: {
      flex: 1,
      textAlign: 'center',
      fontSize: 9,
      color: d.day === currentDay ? CYAN : TEXT_DIM
    }
  }, "D", d.day))));
};
const SectorMap = ({
  events,
  unitPos,
  selectedId,
  onSelect,
  isIpad
}) => {
  const W = isIpad ? 240 : 316;
  const H = isIpad ? 170 : 220;
  const grid = [];
  for (let i = 1; i < 10; i++) {
    grid.push(/*#__PURE__*/React.createElement("line", {
      key: `v${i}`,
      x1: W / 10 * i,
      y1: 0,
      x2: W / 10 * i,
      y2: H,
      stroke: GRID,
      strokeWidth: 0.5
    }));
    grid.push(/*#__PURE__*/React.createElement("line", {
      key: `h${i}`,
      x1: 0,
      y1: H / 8 * i,
      x2: W,
      y2: H / 8 * i,
      stroke: GRID,
      strokeWidth: 0.5
    }));
  }
  const pathPts = PATROL_PATH.map(p => projectLatLng(p.lat, p.lng, W, H)).map(p => `${p.x},${p.y}`).join(' ');
  const up = projectLatLng(unitPos.lat, unitPos.lng, W, H);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      border: `1px solid ${GRID_2}`,
      background: NAVY_2
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: W,
    height: H,
    style: {
      display: 'block'
    }
  }, grid, /*#__PURE__*/React.createElement("text", {
    x: 4,
    y: 10,
    fill: TEXT_DIMMER,
    fontSize: 8,
    fontFamily: FONT_MONO
  }, "19.5550\xB0N"), /*#__PURE__*/React.createElement("text", {
    x: 4,
    y: H - 4,
    fill: TEXT_DIMMER,
    fontSize: 8,
    fontFamily: FONT_MONO
  }, "19.5460\xB0N"), /*#__PURE__*/React.createElement("text", {
    x: W - 60,
    y: 10,
    fill: TEXT_DIMMER,
    fontSize: 8,
    fontFamily: FONT_MONO
  }, "-71.7080\xB0W"), /*#__PURE__*/React.createElement("line", {
    x1: W * 0.35,
    y1: 0,
    x2: W * 0.15,
    y2: H,
    stroke: AMBER,
    strokeWidth: 1,
    strokeDasharray: "4 3",
    opacity: 0.5
  }), /*#__PURE__*/React.createElement("text", {
    x: W * 0.16,
    y: H / 2,
    fill: AMBER,
    fontSize: 8,
    opacity: 0.7,
    fontFamily: FONT_MONO,
    transform: `rotate(75, ${W * 0.16}, ${H / 2})`
  }, "\u25C1 HT \xB7 DR \u25B7"), /*#__PURE__*/React.createElement("polyline", {
    points: pathPts,
    fill: "none",
    stroke: ROYAL,
    strokeWidth: 1,
    strokeDasharray: "3 3",
    opacity: 0.7
  }), PATROL_PATH.filter(p => p.wp).map((p, i) => {
    const pt = projectLatLng(p.lat, p.lng, W, H);
    return /*#__PURE__*/React.createElement("g", {
      key: i
    }, /*#__PURE__*/React.createElement("rect", {
      x: pt.x - 3,
      y: pt.y - 3,
      width: 6,
      height: 6,
      fill: "none",
      stroke: CYAN,
      strokeWidth: 1
    }), /*#__PURE__*/React.createElement("text", {
      x: pt.x + 6,
      y: pt.y + 3,
      fill: TEXT_DIM,
      fontSize: 7,
      fontFamily: FONT_MONO
    }, p.wp));
  }), events.map(e => {
    const pt = projectLatLng(e.lat, e.lng, W, H);
    const c = tierColor(e.tier);
    const sel = e.id === selectedId;
    return /*#__PURE__*/React.createElement("g", {
      key: e.id,
      onClick: () => onSelect(e.id),
      style: {
        cursor: 'pointer'
      }
    }, sel && /*#__PURE__*/React.createElement("circle", {
      cx: pt.x,
      cy: pt.y,
      r: 8,
      fill: "none",
      stroke: c,
      strokeWidth: 1
    }), /*#__PURE__*/React.createElement("circle", {
      cx: pt.x,
      cy: pt.y,
      r: e.tier === 'alert' ? 4 : 3,
      fill: c,
      opacity: 0.85
    }), e.tier === 'alert' && /*#__PURE__*/React.createElement("circle", {
      cx: pt.x,
      cy: pt.y,
      r: 8,
      fill: c,
      opacity: 0.2
    }, /*#__PURE__*/React.createElement("animate", {
      attributeName: "r",
      from: 4,
      to: 12,
      dur: "1.5s",
      repeatCount: "indefinite"
    }), /*#__PURE__*/React.createElement("animate", {
      attributeName: "opacity",
      from: 0.4,
      to: 0,
      dur: "1.5s",
      repeatCount: "indefinite"
    })));
  }), /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("circle", {
    cx: up.x,
    cy: up.y,
    r: 12,
    fill: CYAN,
    opacity: 0.15
  }, /*#__PURE__*/React.createElement("animate", {
    attributeName: "r",
    from: 6,
    to: 14,
    dur: "2s",
    repeatCount: "indefinite"
  }), /*#__PURE__*/React.createElement("animate", {
    attributeName: "opacity",
    from: 0.35,
    to: 0,
    dur: "2s",
    repeatCount: "indefinite"
  })), /*#__PURE__*/React.createElement("circle", {
    cx: up.x,
    cy: up.y,
    r: 4,
    fill: CYAN,
    stroke: "#fff",
    strokeWidth: 1
  }), /*#__PURE__*/React.createElement("text", {
    x: up.x + 8,
    y: up.y + 3,
    fill: CYAN,
    fontSize: 8,
    fontFamily: FONT_MONO,
    fontWeight: 700
  }, "GO2X-001")), /*#__PURE__*/React.createElement("g", {
    transform: `translate(${W - 60}, ${H - 12})`
  }, /*#__PURE__*/React.createElement("line", {
    x1: 0,
    y1: 0,
    x2: 50,
    y2: 0,
    stroke: TEXT_DIM,
    strokeWidth: 1
  }), /*#__PURE__*/React.createElement("line", {
    x1: 0,
    y1: -3,
    x2: 0,
    y2: 3,
    stroke: TEXT_DIM,
    strokeWidth: 1
  }), /*#__PURE__*/React.createElement("line", {
    x1: 50,
    y1: -3,
    x2: 50,
    y2: 3,
    stroke: TEXT_DIM,
    strokeWidth: 1
  }), /*#__PURE__*/React.createElement("text", {
    x: 52,
    y: 3,
    fill: TEXT_DIM,
    fontSize: 8,
    fontFamily: FONT_MONO
  }, "~500m"))));
};
const PlaybackBar = ({
  clock,
  playing,
  speed,
  onPlay,
  onSpeed
}) => /*#__PURE__*/React.createElement("div", {
  style: {
    background: NAVY_2,
    borderTop: `1px solid ${GRID_2}`,
    display: 'flex',
    alignItems: 'center',
    gap: 16,
    padding: '8px 18px',
    fontSize: 11
  }
}, /*#__PURE__*/React.createElement("button", {
  onClick: onPlay,
  style: btnStyle
}, playing ? /*#__PURE__*/React.createElement(IPause, {
  size: 12
}) : /*#__PURE__*/React.createElement(IPlay, {
  size: 12
}), playing ? 'PAUSE' : 'PLAY'), /*#__PURE__*/React.createElement("div", {
  style: {
    display: 'flex',
    gap: 4
  }
}, [60, 240, 960, 3600].map(s => /*#__PURE__*/React.createElement("button", {
  key: s,
  onClick: () => onSpeed(s),
  style: {
    ...btnStyle,
    background: speed === s ? ROYAL : 'transparent',
    color: speed === s ? '#fff' : TEXT_DIM,
    border: `1px solid ${speed === s ? ROYAL : GRID_2}`
  }
}, s >= 3600 ? `${s / 3600}h/s` : s >= 60 ? `${s / 60}m/s` : `${s}×`))), /*#__PURE__*/React.createElement("div", {
  style: {
    flex: 1,
    position: 'relative',
    height: 20
  }
}, /*#__PURE__*/React.createElement("div", {
  style: {
    position: 'absolute',
    top: 9,
    left: 0,
    right: 0,
    height: 2,
    background: GRID_2
  }
}), /*#__PURE__*/React.createElement("div", {
  style: {
    position: 'absolute',
    top: 9,
    left: 0,
    height: 2,
    width: `${clock / WEEK_SECONDS * 100}%`,
    background: `linear-gradient(90deg, ${ROYAL}, ${CYAN})`
  }
}), Array.from({
  length: 8
}).map((_, i) => /*#__PURE__*/React.createElement("div", {
  key: i,
  style: {
    position: 'absolute',
    top: 4,
    left: `${i / 7 * 100}%`,
    width: 1,
    height: 12,
    background: GRID_2
  }
})), EVENTS_HYDRATED.filter(e => e.tier === 'alert').map(e => /*#__PURE__*/React.createElement("div", {
  key: e.id,
  title: e.id,
  style: {
    position: 'absolute',
    top: 2,
    left: `${e.globalT / WEEK_SECONDS * 100}%`,
    width: 3,
    height: 16,
    background: RED,
    transform: 'translateX(-50%)'
  }
})), /*#__PURE__*/React.createElement("div", {
  style: {
    position: 'absolute',
    top: 0,
    left: `${clock / WEEK_SECONDS * 100}%`,
    width: 2,
    height: 20,
    background: CYAN,
    transform: 'translateX(-50%)',
    boxShadow: `0 0 6px ${CYAN}`
  }
})), /*#__PURE__*/React.createElement("div", {
  style: {
    color: TEXT_DIM,
    fontSize: 10
  }
}, "WEEK ", (clock / WEEK_SECONDS * 100).toFixed(1), "%"));
const btnStyle = {
  display: 'flex',
  alignItems: 'center',
  gap: 6,
  background: NAVY_3,
  border: `1px solid ${GRID_2}`,
  color: TEXT,
  padding: '4px 10px',
  fontSize: 10,
  letterSpacing: 1,
  fontFamily: FONT_MONO,
  cursor: 'pointer'
};

// ============================================================================
// MOUNT
// ============================================================================
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(/*#__PURE__*/React.createElement(OrimusSOCConsole, null));
