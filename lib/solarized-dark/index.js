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
  name: 'solarized dark',
  typography: _typography["default"],
  colors: _colors["default"],
  root: {
    fontFamily: '\'Space Mono\', Consolas, monospace',
    background: _colors["default"].background,
    fontSize: '1.6vmin',
    lineHeight: '2.8vmin',
    extend: "\n        @import url('https://fonts.googleapis.com/css?family=Space+Mono');\n        \n        & a {\n            text-decoration: underline;\n        }\n        "
  },
  dashboard: {
    header: {
      background: '#002b36',
      title: {
        fontSize: '1.8vmin',
        color: '#eee8d5'
      }
    },
    player: {
      slash: {
        color: '#0badc2',
        margin: '0 0.8vmin'
      }
    }
  },
  widget: {
    background: '#002b36',
    wrapper: {
      padding: '0.6vmin'
    },
    header: {
      height: '5vmin',
      subject: {},
      count: {
        color: '#eee8d5'
      },
      icon: {
        fontSize: '2vmin',
        color: '#0badc2'
      }
    }
  },
  notifications: {
    item: {
      padding: '1.2vmin 2vmin',
      background: _colors["default"].background,
      color: '#b3c5c7',
      extend: "\n            box-shadow: 0 1px 3px rgba(0, 0, 0, 0.25);\n            "
    }
  },
  label: {
    background: _colors["default"].background,
    extend: "\n        border-radius: 2px;\n        ",
    main: {
      color: '#839496'
    },
    addon: {
      background: '#00242f',
      color: '#93a1a1'
    }
  },
  list: {
    item: {
      hover: {
        background: '#002834'
      },
      meta: {
        fontSize: '1.4vmin'
      }
    }
  },
  charts: _charts["default"]
};
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9zb2xhcml6ZWQtZGFyay9pbmRleC50cyJdLCJuYW1lcyI6WyJuYW1lIiwidHlwb2dyYXBoeSIsImNvbG9ycyIsInJvb3QiLCJmb250RmFtaWx5IiwiYmFja2dyb3VuZCIsImZvbnRTaXplIiwibGluZUhlaWdodCIsImV4dGVuZCIsImRhc2hib2FyZCIsImhlYWRlciIsInRpdGxlIiwiY29sb3IiLCJwbGF5ZXIiLCJzbGFzaCIsIm1hcmdpbiIsIndpZGdldCIsIndyYXBwZXIiLCJwYWRkaW5nIiwiaGVpZ2h0Iiwic3ViamVjdCIsImNvdW50IiwiaWNvbiIsIm5vdGlmaWNhdGlvbnMiLCJpdGVtIiwibGFiZWwiLCJtYWluIiwiYWRkb24iLCJsaXN0IiwiaG92ZXIiLCJtZXRhIiwiY2hhcnRzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7O0FBQ0E7O0FBQ0E7Ozs7ZUFFZTtBQUNYQSxFQUFBQSxJQUFJLEVBQUUsZ0JBREs7QUFFWEMsRUFBQUEsVUFBVSxFQUFWQSxzQkFGVztBQUdYQyxFQUFBQSxNQUFNLEVBQU5BLGtCQUhXO0FBSVhDLEVBQUFBLElBQUksRUFBRTtBQUNGQyxJQUFBQSxVQUFVLEVBQUUscUNBRFY7QUFFRkMsSUFBQUEsVUFBVSxFQUFFSCxtQkFBT0csVUFGakI7QUFHRkMsSUFBQUEsUUFBUSxFQUFFLFNBSFI7QUFJRkMsSUFBQUEsVUFBVSxFQUFFLFNBSlY7QUFLRkMsSUFBQUEsTUFBTTtBQUxKLEdBSks7QUFpQlhDLEVBQUFBLFNBQVMsRUFBRTtBQUNQQyxJQUFBQSxNQUFNLEVBQUU7QUFDSkwsTUFBQUEsVUFBVSxFQUFFLFNBRFI7QUFFSk0sTUFBQUEsS0FBSyxFQUFFO0FBQ0hMLFFBQUFBLFFBQVEsRUFBRSxTQURQO0FBRUhNLFFBQUFBLEtBQUssRUFBRTtBQUZKO0FBRkgsS0FERDtBQVFQQyxJQUFBQSxNQUFNLEVBQUU7QUFDSkMsTUFBQUEsS0FBSyxFQUFFO0FBQ0hGLFFBQUFBLEtBQUssRUFBRSxTQURKO0FBRUhHLFFBQUFBLE1BQU0sRUFBRTtBQUZMO0FBREg7QUFSRCxHQWpCQTtBQWdDWEMsRUFBQUEsTUFBTSxFQUFFO0FBQ0pYLElBQUFBLFVBQVUsRUFBRSxTQURSO0FBRUpZLElBQUFBLE9BQU8sRUFBRTtBQUNMQyxNQUFBQSxPQUFPLEVBQUU7QUFESixLQUZMO0FBS0pSLElBQUFBLE1BQU0sRUFBRTtBQUNKUyxNQUFBQSxNQUFNLEVBQUUsT0FESjtBQUVKQyxNQUFBQSxPQUFPLEVBQUUsRUFGTDtBQUdKQyxNQUFBQSxLQUFLLEVBQUU7QUFDSFQsUUFBQUEsS0FBSyxFQUFFO0FBREosT0FISDtBQU1KVSxNQUFBQSxJQUFJLEVBQUU7QUFDRmhCLFFBQUFBLFFBQVEsRUFBRSxPQURSO0FBRUZNLFFBQUFBLEtBQUssRUFBRTtBQUZMO0FBTkY7QUFMSixHQWhDRztBQWlEWFcsRUFBQUEsYUFBYSxFQUFFO0FBQ1hDLElBQUFBLElBQUksRUFBRTtBQUNGTixNQUFBQSxPQUFPLEVBQUUsZUFEUDtBQUVGYixNQUFBQSxVQUFVLEVBQUVILG1CQUFPRyxVQUZqQjtBQUdGTyxNQUFBQSxLQUFLLEVBQUUsU0FITDtBQUlGSixNQUFBQSxNQUFNO0FBSko7QUFESyxHQWpESjtBQTJEWGlCLEVBQUFBLEtBQUssRUFBRTtBQUNIcEIsSUFBQUEsVUFBVSxFQUFFSCxtQkFBT0csVUFEaEI7QUFFSEcsSUFBQUEsTUFBTSwyQ0FGSDtBQUtIa0IsSUFBQUEsSUFBSSxFQUFFO0FBQ0ZkLE1BQUFBLEtBQUssRUFBRTtBQURMLEtBTEg7QUFRSGUsSUFBQUEsS0FBSyxFQUFFO0FBQ0h0QixNQUFBQSxVQUFVLEVBQUUsU0FEVDtBQUVITyxNQUFBQSxLQUFLLEVBQUU7QUFGSjtBQVJKLEdBM0RJO0FBd0VYZ0IsRUFBQUEsSUFBSSxFQUFFO0FBQ0ZKLElBQUFBLElBQUksRUFBRTtBQUNGSyxNQUFBQSxLQUFLLEVBQUU7QUFDSHhCLFFBQUFBLFVBQVUsRUFBRTtBQURULE9BREw7QUFJRnlCLE1BQUFBLElBQUksRUFBRTtBQUNGeEIsUUFBQUEsUUFBUSxFQUFFO0FBRFI7QUFKSjtBQURKLEdBeEVLO0FBa0ZYeUIsRUFBQUEsTUFBTSxFQUFOQTtBQWxGVyxDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGNvbG9ycyBmcm9tICcuL2NvbG9ycyc7XG5pbXBvcnQgY2hhcnRzIGZyb20gJy4vY2hhcnRzJztcbmltcG9ydCB0eXBvZ3JhcGh5IGZyb20gJy4vdHlwb2dyYXBoeSc7XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgICBuYW1lOiAnc29sYXJpemVkIGRhcmsnLFxuICAgIHR5cG9ncmFwaHksXG4gICAgY29sb3JzLFxuICAgIHJvb3Q6IHtcbiAgICAgICAgZm9udEZhbWlseTogJ1xcJ1NwYWNlIE1vbm9cXCcsIENvbnNvbGFzLCBtb25vc3BhY2UnLFxuICAgICAgICBiYWNrZ3JvdW5kOiBjb2xvcnMuYmFja2dyb3VuZCxcbiAgICAgICAgZm9udFNpemU6ICcxLjZ2bWluJyxcbiAgICAgICAgbGluZUhlaWdodDogJzIuOHZtaW4nLFxuICAgICAgICBleHRlbmQ6IGBcbiAgICAgICAgQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1TcGFjZStNb25vJyk7XG4gICAgICAgIFxuICAgICAgICAmIGEge1xuICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XG4gICAgICAgIH1cbiAgICAgICAgYCxcbiAgICB9LFxuICAgIGRhc2hib2FyZDoge1xuICAgICAgICBoZWFkZXI6IHtcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICcjMDAyYjM2JyxcbiAgICAgICAgICAgIHRpdGxlOiB7XG4gICAgICAgICAgICAgICAgZm9udFNpemU6ICcxLjh2bWluJyxcbiAgICAgICAgICAgICAgICBjb2xvcjogJyNlZWU4ZDUnLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgfSxcbiAgICAgICAgcGxheWVyOiB7XG4gICAgICAgICAgICBzbGFzaDoge1xuICAgICAgICAgICAgICAgIGNvbG9yOiAnIzBiYWRjMicsXG4gICAgICAgICAgICAgICAgbWFyZ2luOiAnMCAwLjh2bWluJyxcbiAgICAgICAgICAgIH0sXG4gICAgICAgIH0sXG4gICAgfSxcbiAgICB3aWRnZXQ6IHtcbiAgICAgICAgYmFja2dyb3VuZDogJyMwMDJiMzYnLFxuICAgICAgICB3cmFwcGVyOiB7XG4gICAgICAgICAgICBwYWRkaW5nOiAnMC42dm1pbicsXG4gICAgICAgIH0sXG4gICAgICAgIGhlYWRlcjoge1xuICAgICAgICAgICAgaGVpZ2h0OiAnNXZtaW4nLFxuICAgICAgICAgICAgc3ViamVjdDoge30sXG4gICAgICAgICAgICBjb3VudDoge1xuICAgICAgICAgICAgICAgIGNvbG9yOiAnI2VlZThkNScsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgaWNvbjoge1xuICAgICAgICAgICAgICAgIGZvbnRTaXplOiAnMnZtaW4nLFxuICAgICAgICAgICAgICAgIGNvbG9yOiAnIzBiYWRjMicsXG4gICAgICAgICAgICB9LFxuICAgICAgICB9LFxuICAgIH0sXG4gICAgbm90aWZpY2F0aW9uczoge1xuICAgICAgICBpdGVtOiB7XG4gICAgICAgICAgICBwYWRkaW5nOiAnMS4ydm1pbiAydm1pbicsXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiBjb2xvcnMuYmFja2dyb3VuZCxcbiAgICAgICAgICAgIGNvbG9yOiAnI2IzYzVjNycsXG4gICAgICAgICAgICBleHRlbmQ6IGBcbiAgICAgICAgICAgIGJveC1zaGFkb3c6IDAgMXB4IDNweCByZ2JhKDAsIDAsIDAsIDAuMjUpO1xuICAgICAgICAgICAgYCxcbiAgICAgICAgfSxcbiAgICB9LFxuICAgIGxhYmVsOiB7XG4gICAgICAgIGJhY2tncm91bmQ6IGNvbG9ycy5iYWNrZ3JvdW5kLFxuICAgICAgICBleHRlbmQ6IGBcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMnB4O1xuICAgICAgICBgLFxuICAgICAgICBtYWluOiB7XG4gICAgICAgICAgICBjb2xvcjogJyM4Mzk0OTYnLFxuICAgICAgICB9LFxuICAgICAgICBhZGRvbjoge1xuICAgICAgICAgICAgYmFja2dyb3VuZDogJyMwMDI0MmYnLFxuICAgICAgICAgICAgY29sb3I6ICcjOTNhMWExJyxcbiAgICAgICAgfSxcbiAgICB9LFxuICAgIGxpc3Q6IHtcbiAgICAgICAgaXRlbToge1xuICAgICAgICAgICAgaG92ZXI6IHtcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAnIzAwMjgzNCcsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgbWV0YToge1xuICAgICAgICAgICAgICAgIGZvbnRTaXplOiAnMS40dm1pbicsXG4gICAgICAgICAgICB9LFxuICAgICAgICB9LFxuICAgIH0sXG4gICAgY2hhcnRzLFxufTtcbiJdfQ==