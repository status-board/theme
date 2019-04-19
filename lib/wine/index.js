"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _colors = _interopRequireDefault(require("./colors"));

var _charts = _interopRequireDefault(require("./charts"));

var _typography = _interopRequireDefault(require("./typography"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _default = {
  name: 'wine',
  typography: _typography["default"],
  colors: _colors["default"],
  root: {
    background: _colors["default"].background,
    extend: "\n        @import url(\"https://fonts.googleapis.com/css?family=Roboto+Slab:100,300|Open+Sans:400italic,400,300,600,700\");\n        & a {\n            color: hsl(10, 60%, 90%);\n        }\n        "
  },
  dashboard: {
    header: {
      background: 'rgb(69, 23, 23)'
    },
    player: {
      slash: {
        color: 'hsl(0, 52%, 60%)'
      }
    }
  },
  widget: {
    background: 'rgb(69, 23, 23)',
    wrapper: {
      padding: '0.3vmin'
    },
    header: {
      fontSize: '2.2vmin',
      extend: "\n            border-bottom: 1px solid rgb(40, 18, 18);\n            ",
      subject: {},
      count: {
        color: 'hsl(0, 52%, 60%)',
        fontSize: '1.8vmin',
        extend: "\n                background-color: rgb(40, 18, 18);\n                border-radius: 2px;\n                padding: 0.6vmin 1vmin;\n                "
      },
      icon: {
        fontSize: '2.6vmin',
        color: 'hsl(0, 52%, 60%)'
      }
    }
  },
  notifications: {
    item: {
      background: 'rgb(87, 25, 25)',
      color: '#fff',
      extend: "\n            box-shadow: 0 1px 2px rgba(0, 0, 0, .75);\n            font-size: 1.6vmin;\n            "
    }
  },
  label: {
    extend: "\n        border-radius: 2px;\n        ",
    main: {
      background: '#561d1d',
      color: 'hsl(10, 60%, 90%)'
    },
    addon: {
      background: 'rgb(55, 21, 21)',
      color: 'hsl(0, 60%, 63%)'
    }
  },
  list: {
    item: {
      extend: "\n            border-bottom: 1px solid rgb(52, 20, 20);\n            &:last-child {\n                border-bottom: 0;\n            }\n            ",
      hover: {
        background: 'rgb(82, 25, 25)'
      },
      meta: {
        color: 'hsl(0, 52%, 60%)',
        fontSize: '1.6vmin'
      }
    }
  },
  charts: _charts["default"]
};
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy93aW5lL2luZGV4LnRzIl0sIm5hbWVzIjpbIm5hbWUiLCJ0eXBvZ3JhcGh5IiwiY29sb3JzIiwicm9vdCIsImJhY2tncm91bmQiLCJleHRlbmQiLCJkYXNoYm9hcmQiLCJoZWFkZXIiLCJwbGF5ZXIiLCJzbGFzaCIsImNvbG9yIiwid2lkZ2V0Iiwid3JhcHBlciIsInBhZGRpbmciLCJmb250U2l6ZSIsInN1YmplY3QiLCJjb3VudCIsImljb24iLCJub3RpZmljYXRpb25zIiwiaXRlbSIsImxhYmVsIiwibWFpbiIsImFkZG9uIiwibGlzdCIsImhvdmVyIiwibWV0YSIsImNoYXJ0cyJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOztBQUNBOztBQUNBOzs7O2VBRWU7QUFDWEEsRUFBQUEsSUFBSSxFQUFFLE1BREs7QUFFWEMsRUFBQUEsVUFBVSxFQUFWQSxzQkFGVztBQUdYQyxFQUFBQSxNQUFNLEVBQU5BLGtCQUhXO0FBSVhDLEVBQUFBLElBQUksRUFBRTtBQUNGQyxJQUFBQSxVQUFVLEVBQUVGLG1CQUFPRSxVQURqQjtBQUVGQyxJQUFBQSxNQUFNO0FBRkosR0FKSztBQWFYQyxFQUFBQSxTQUFTLEVBQUU7QUFDUEMsSUFBQUEsTUFBTSxFQUFFO0FBQ0pILE1BQUFBLFVBQVUsRUFBRTtBQURSLEtBREQ7QUFJUEksSUFBQUEsTUFBTSxFQUFFO0FBQ0pDLE1BQUFBLEtBQUssRUFBRTtBQUNIQyxRQUFBQSxLQUFLLEVBQUU7QUFESjtBQURIO0FBSkQsR0FiQTtBQXVCWEMsRUFBQUEsTUFBTSxFQUFFO0FBQ0pQLElBQUFBLFVBQVUsRUFBRSxpQkFEUjtBQUVKUSxJQUFBQSxPQUFPLEVBQUU7QUFDTEMsTUFBQUEsT0FBTyxFQUFFO0FBREosS0FGTDtBQUtKTixJQUFBQSxNQUFNLEVBQUU7QUFDSk8sTUFBQUEsUUFBUSxFQUFFLFNBRE47QUFFSlQsTUFBQUEsTUFBTSx5RUFGRjtBQUtKVSxNQUFBQSxPQUFPLEVBQUUsRUFMTDtBQU1KQyxNQUFBQSxLQUFLLEVBQUU7QUFDSE4sUUFBQUEsS0FBSyxFQUFFLGtCQURKO0FBRUhJLFFBQUFBLFFBQVEsRUFBRSxTQUZQO0FBR0hULFFBQUFBLE1BQU07QUFISCxPQU5IO0FBZUpZLE1BQUFBLElBQUksRUFBRTtBQUNGSCxRQUFBQSxRQUFRLEVBQUUsU0FEUjtBQUVGSixRQUFBQSxLQUFLLEVBQUU7QUFGTDtBQWZGO0FBTEosR0F2Qkc7QUFpRFhRLEVBQUFBLGFBQWEsRUFBRTtBQUNYQyxJQUFBQSxJQUFJLEVBQUU7QUFDRmYsTUFBQUEsVUFBVSxFQUFFLGlCQURWO0FBRUZNLE1BQUFBLEtBQUssRUFBRSxNQUZMO0FBR0ZMLE1BQUFBLE1BQU07QUFISjtBQURLLEdBakRKO0FBMkRYZSxFQUFBQSxLQUFLLEVBQUU7QUFDSGYsSUFBQUEsTUFBTSwyQ0FESDtBQUlIZ0IsSUFBQUEsSUFBSSxFQUFFO0FBQ0ZqQixNQUFBQSxVQUFVLEVBQUUsU0FEVjtBQUVGTSxNQUFBQSxLQUFLLEVBQUU7QUFGTCxLQUpIO0FBUUhZLElBQUFBLEtBQUssRUFBRTtBQUNIbEIsTUFBQUEsVUFBVSxFQUFFLGlCQURUO0FBRUhNLE1BQUFBLEtBQUssRUFBRTtBQUZKO0FBUkosR0EzREk7QUF3RVhhLEVBQUFBLElBQUksRUFBRTtBQUNGSixJQUFBQSxJQUFJLEVBQUU7QUFDRmQsTUFBQUEsTUFBTSx1SkFESjtBQU9GbUIsTUFBQUEsS0FBSyxFQUFFO0FBQ0hwQixRQUFBQSxVQUFVLEVBQUU7QUFEVCxPQVBMO0FBVUZxQixNQUFBQSxJQUFJLEVBQUU7QUFDRmYsUUFBQUEsS0FBSyxFQUFFLGtCQURMO0FBRUZJLFFBQUFBLFFBQVEsRUFBRTtBQUZSO0FBVko7QUFESixHQXhFSztBQXlGWFksRUFBQUEsTUFBTSxFQUFOQTtBQXpGVyxDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGNvbG9ycyBmcm9tICcuL2NvbG9ycyc7XG5pbXBvcnQgY2hhcnRzIGZyb20gJy4vY2hhcnRzJztcbmltcG9ydCB0eXBvZ3JhcGh5IGZyb20gJy4vdHlwb2dyYXBoeSc7XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgICBuYW1lOiAnd2luZScsXG4gICAgdHlwb2dyYXBoeSxcbiAgICBjb2xvcnMsXG4gICAgcm9vdDoge1xuICAgICAgICBiYWNrZ3JvdW5kOiBjb2xvcnMuYmFja2dyb3VuZCxcbiAgICAgICAgZXh0ZW5kOiBgXG4gICAgICAgIEBpbXBvcnQgdXJsKFwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PVJvYm90bytTbGFiOjEwMCwzMDB8T3BlbitTYW5zOjQwMGl0YWxpYyw0MDAsMzAwLDYwMCw3MDBcIik7XG4gICAgICAgICYgYSB7XG4gICAgICAgICAgICBjb2xvcjogaHNsKDEwLCA2MCUsIDkwJSk7XG4gICAgICAgIH1cbiAgICAgICAgYCxcbiAgICB9LFxuICAgIGRhc2hib2FyZDoge1xuICAgICAgICBoZWFkZXI6IHtcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICdyZ2IoNjksIDIzLCAyMyknLFxuICAgICAgICB9LFxuICAgICAgICBwbGF5ZXI6IHtcbiAgICAgICAgICAgIHNsYXNoOiB7XG4gICAgICAgICAgICAgICAgY29sb3I6ICdoc2woMCwgNTIlLCA2MCUpJyxcbiAgICAgICAgICAgIH0sXG4gICAgICAgIH0sXG4gICAgfSxcbiAgICB3aWRnZXQ6IHtcbiAgICAgICAgYmFja2dyb3VuZDogJ3JnYig2OSwgMjMsIDIzKScsXG4gICAgICAgIHdyYXBwZXI6IHtcbiAgICAgICAgICAgIHBhZGRpbmc6ICcwLjN2bWluJyxcbiAgICAgICAgfSxcbiAgICAgICAgaGVhZGVyOiB7XG4gICAgICAgICAgICBmb250U2l6ZTogJzIuMnZtaW4nLFxuICAgICAgICAgICAgZXh0ZW5kOiBgXG4gICAgICAgICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgcmdiKDQwLCAxOCwgMTgpO1xuICAgICAgICAgICAgYCxcbiAgICAgICAgICAgIHN1YmplY3Q6IHt9LFxuICAgICAgICAgICAgY291bnQ6IHtcbiAgICAgICAgICAgICAgICBjb2xvcjogJ2hzbCgwLCA1MiUsIDYwJSknLFxuICAgICAgICAgICAgICAgIGZvbnRTaXplOiAnMS44dm1pbicsXG4gICAgICAgICAgICAgICAgZXh0ZW5kOiBgXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDQwLCAxOCwgMTgpO1xuICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDJweDtcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAwLjZ2bWluIDF2bWluO1xuICAgICAgICAgICAgICAgIGAsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgaWNvbjoge1xuICAgICAgICAgICAgICAgIGZvbnRTaXplOiAnMi42dm1pbicsXG4gICAgICAgICAgICAgICAgY29sb3I6ICdoc2woMCwgNTIlLCA2MCUpJyxcbiAgICAgICAgICAgIH0sXG4gICAgICAgIH0sXG4gICAgfSxcbiAgICBub3RpZmljYXRpb25zOiB7XG4gICAgICAgIGl0ZW06IHtcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICdyZ2IoODcsIDI1LCAyNSknLFxuICAgICAgICAgICAgY29sb3I6ICcjZmZmJyxcbiAgICAgICAgICAgIGV4dGVuZDogYFxuICAgICAgICAgICAgYm94LXNoYWRvdzogMCAxcHggMnB4IHJnYmEoMCwgMCwgMCwgLjc1KTtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMS42dm1pbjtcbiAgICAgICAgICAgIGAsXG4gICAgICAgIH0sXG4gICAgfSxcbiAgICBsYWJlbDoge1xuICAgICAgICBleHRlbmQ6IGBcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMnB4O1xuICAgICAgICBgLFxuICAgICAgICBtYWluOiB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAnIzU2MWQxZCcsXG4gICAgICAgICAgICBjb2xvcjogJ2hzbCgxMCwgNjAlLCA5MCUpJyxcbiAgICAgICAgfSxcbiAgICAgICAgYWRkb246IHtcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICdyZ2IoNTUsIDIxLCAyMSknLFxuICAgICAgICAgICAgY29sb3I6ICdoc2woMCwgNjAlLCA2MyUpJyxcbiAgICAgICAgfSxcbiAgICB9LFxuICAgIGxpc3Q6IHtcbiAgICAgICAgaXRlbToge1xuICAgICAgICAgICAgZXh0ZW5kOiBgXG4gICAgICAgICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgcmdiKDUyLCAyMCwgMjApO1xuICAgICAgICAgICAgJjpsYXN0LWNoaWxkIHtcbiAgICAgICAgICAgICAgICBib3JkZXItYm90dG9tOiAwO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgYCxcbiAgICAgICAgICAgIGhvdmVyOiB7XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZDogJ3JnYig4MiwgMjUsIDI1KScsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgbWV0YToge1xuICAgICAgICAgICAgICAgIGNvbG9yOiAnaHNsKDAsIDUyJSwgNjAlKScsXG4gICAgICAgICAgICAgICAgZm9udFNpemU6ICcxLjZ2bWluJyxcbiAgICAgICAgICAgIH0sXG4gICAgICAgIH0sXG4gICAgfSxcbiAgICBjaGFydHMsXG59O1xuIl19