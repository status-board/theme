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
  name: 'mini',
  typography: _typography["default"],
  colors: _colors["default"],
  root: {
    background: '#fff',
    extend: "\n        @import url('https://fonts.googleapis.com/css?family=Roboto+Mono:300,400,500,700');\n        & a {\n            font-weight: 700;\n        }\n        & img {\n            filter: grayscale(100%);\n        }\n        "
  },
  dashboard: {
    header: {
      title: {}
    }
  },
  widget: {
    wrapper: {
      padding: '1.6vmin 3vmin'
    },
    header: {
      padding: '0.8vmin 0 0 0',
      extend: "\n            border-top: 2px solid #000;\n            align-items: flex-start;\n            ",
      subject: {},
      count: {
        extend: "\n                font-weight: 700;\n                vertical-align: baseline;\n                "
      },
      icon: {
        extend: "\n                display: none;\n                "
      }
    }
  },
  notifications: {
    item: {
      padding: '1.2vmin 2vmin',
      background: '#000',
      color: '#fff',
      extend: "\n            font-weight: 300;\n            "
    }
  },
  label: {
    extend: "\n        line-height: 1em;\n        border-top: 1px dotted #000;\n        border-bottom: 1px dotted #000;\n        align-items: baseline;\n        ",
    main: {
      padding: '1vmin 0.2vmin'
    },
    addon: {
      padding: '1vmin 0.6vmin',
      extend: "\n            font-weight: 700;\n            &:first-child {\n                padding-right: 1.4vmin;\n                border-right: 1px dotted #000;\n            }\n            &:last-child {\n                padding-left: 1.4vmin;\n                border-left: 1px dotted #000;\n            }\n            & + .Label {\n                padding-left: 1.4vmin;\n            }\n            .Label + & {\n                margin-left: 1.4vmin;\n            }\n            "
    }
  },
  list: {
    item: {
      padding: '1vmin 0',
      extend: "\n            border-bottom: 1px solid #000;\n            &:last-child {\n                border-bottom: 0;\n            }\n            ",
      meta: {
        fontSize: '1.4vmin',
        extend: "\n                font-weight: 300;\n                "
      }
    }
  },
  charts: _charts["default"]
};
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9taW5pL2luZGV4LnRzIl0sIm5hbWVzIjpbIm5hbWUiLCJ0eXBvZ3JhcGh5IiwiY29sb3JzIiwicm9vdCIsImJhY2tncm91bmQiLCJleHRlbmQiLCJkYXNoYm9hcmQiLCJoZWFkZXIiLCJ0aXRsZSIsIndpZGdldCIsIndyYXBwZXIiLCJwYWRkaW5nIiwic3ViamVjdCIsImNvdW50IiwiaWNvbiIsIm5vdGlmaWNhdGlvbnMiLCJpdGVtIiwiY29sb3IiLCJsYWJlbCIsIm1haW4iLCJhZGRvbiIsImxpc3QiLCJtZXRhIiwiZm9udFNpemUiLCJjaGFydHMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7QUFDQTs7QUFDQTs7OztlQUVlO0FBQ1hBLEVBQUFBLElBQUksRUFBRSxNQURLO0FBRVhDLEVBQUFBLFVBQVUsRUFBVkEsc0JBRlc7QUFHWEMsRUFBQUEsTUFBTSxFQUFOQSxrQkFIVztBQUlYQyxFQUFBQSxJQUFJLEVBQUU7QUFDRkMsSUFBQUEsVUFBVSxFQUFFLE1BRFY7QUFFRkMsSUFBQUEsTUFBTTtBQUZKLEdBSks7QUFnQlhDLEVBQUFBLFNBQVMsRUFBRTtBQUNQQyxJQUFBQSxNQUFNLEVBQUU7QUFDSkMsTUFBQUEsS0FBSyxFQUFFO0FBREg7QUFERCxHQWhCQTtBQXFCWEMsRUFBQUEsTUFBTSxFQUFFO0FBQ0pDLElBQUFBLE9BQU8sRUFBRTtBQUNMQyxNQUFBQSxPQUFPLEVBQUU7QUFESixLQURMO0FBSUpKLElBQUFBLE1BQU0sRUFBRTtBQUNKSSxNQUFBQSxPQUFPLEVBQUUsZUFETDtBQUVKTixNQUFBQSxNQUFNLGlHQUZGO0FBTUpPLE1BQUFBLE9BQU8sRUFBRSxFQU5MO0FBT0pDLE1BQUFBLEtBQUssRUFBRTtBQUNIUixRQUFBQSxNQUFNO0FBREgsT0FQSDtBQWFKUyxNQUFBQSxJQUFJLEVBQUU7QUFDRlQsUUFBQUEsTUFBTTtBQURKO0FBYkY7QUFKSixHQXJCRztBQTZDWFUsRUFBQUEsYUFBYSxFQUFFO0FBQ1hDLElBQUFBLElBQUksRUFBRTtBQUNGTCxNQUFBQSxPQUFPLEVBQUUsZUFEUDtBQUVGUCxNQUFBQSxVQUFVLEVBQUUsTUFGVjtBQUdGYSxNQUFBQSxLQUFLLEVBQUUsTUFITDtBQUlGWixNQUFBQSxNQUFNO0FBSko7QUFESyxHQTdDSjtBQXVEWGEsRUFBQUEsS0FBSyxFQUFFO0FBQ0hiLElBQUFBLE1BQU0sd0pBREg7QUFPSGMsSUFBQUEsSUFBSSxFQUFFO0FBQ0ZSLE1BQUFBLE9BQU8sRUFBRTtBQURQLEtBUEg7QUFVSFMsSUFBQUEsS0FBSyxFQUFFO0FBQ0hULE1BQUFBLE9BQU8sRUFBRSxlQUROO0FBRUhOLE1BQUFBLE1BQU07QUFGSDtBQVZKLEdBdkRJO0FBc0ZYZ0IsRUFBQUEsSUFBSSxFQUFFO0FBQ0ZMLElBQUFBLElBQUksRUFBRTtBQUNGTCxNQUFBQSxPQUFPLEVBQUUsU0FEUDtBQUVGTixNQUFBQSxNQUFNLDRJQUZKO0FBUUZpQixNQUFBQSxJQUFJLEVBQUU7QUFDRkMsUUFBQUEsUUFBUSxFQUFFLFNBRFI7QUFFRmxCLFFBQUFBLE1BQU07QUFGSjtBQVJKO0FBREosR0F0Rks7QUF1R1htQixFQUFBQSxNQUFNLEVBQU5BO0FBdkdXLEMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgY29sb3JzIGZyb20gJy4vY29sb3JzJztcbmltcG9ydCBjaGFydHMgZnJvbSAnLi9jaGFydHMnO1xuaW1wb3J0IHR5cG9ncmFwaHkgZnJvbSAnLi90eXBvZ3JhcGh5JztcblxuZXhwb3J0IGRlZmF1bHQge1xuICAgIG5hbWU6ICdtaW5pJyxcbiAgICB0eXBvZ3JhcGh5LFxuICAgIGNvbG9ycyxcbiAgICByb290OiB7XG4gICAgICAgIGJhY2tncm91bmQ6ICcjZmZmJyxcbiAgICAgICAgZXh0ZW5kOiBgXG4gICAgICAgIEBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9Um9ib3RvK01vbm86MzAwLDQwMCw1MDAsNzAwJyk7XG4gICAgICAgICYgYSB7XG4gICAgICAgICAgICBmb250LXdlaWdodDogNzAwO1xuICAgICAgICB9XG4gICAgICAgICYgaW1nIHtcbiAgICAgICAgICAgIGZpbHRlcjogZ3JheXNjYWxlKDEwMCUpO1xuICAgICAgICB9XG4gICAgICAgIGAsXG4gICAgfSxcbiAgICBkYXNoYm9hcmQ6IHtcbiAgICAgICAgaGVhZGVyOiB7XG4gICAgICAgICAgICB0aXRsZToge30sXG4gICAgICAgIH0sXG4gICAgfSxcbiAgICB3aWRnZXQ6IHtcbiAgICAgICAgd3JhcHBlcjoge1xuICAgICAgICAgICAgcGFkZGluZzogJzEuNnZtaW4gM3ZtaW4nLFxuICAgICAgICB9LFxuICAgICAgICBoZWFkZXI6IHtcbiAgICAgICAgICAgIHBhZGRpbmc6ICcwLjh2bWluIDAgMCAwJyxcbiAgICAgICAgICAgIGV4dGVuZDogYFxuICAgICAgICAgICAgYm9yZGVyLXRvcDogMnB4IHNvbGlkICMwMDA7XG4gICAgICAgICAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcbiAgICAgICAgICAgIGAsXG4gICAgICAgICAgICBzdWJqZWN0OiB7fSxcbiAgICAgICAgICAgIGNvdW50OiB7XG4gICAgICAgICAgICAgICAgZXh0ZW5kOiBgXG4gICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICAgICAgICAgICAgICB2ZXJ0aWNhbC1hbGlnbjogYmFzZWxpbmU7XG4gICAgICAgICAgICAgICAgYCxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBpY29uOiB7XG4gICAgICAgICAgICAgICAgZXh0ZW5kOiBgXG4gICAgICAgICAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICAgICAgICAgICAgICBgLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgfSxcbiAgICB9LFxuICAgIG5vdGlmaWNhdGlvbnM6IHtcbiAgICAgICAgaXRlbToge1xuICAgICAgICAgICAgcGFkZGluZzogJzEuMnZtaW4gMnZtaW4nLFxuICAgICAgICAgICAgYmFja2dyb3VuZDogJyMwMDAnLFxuICAgICAgICAgICAgY29sb3I6ICcjZmZmJyxcbiAgICAgICAgICAgIGV4dGVuZDogYFxuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgICAgICAgICAgIGAsXG4gICAgICAgIH0sXG4gICAgfSxcbiAgICBsYWJlbDoge1xuICAgICAgICBleHRlbmQ6IGBcbiAgICAgICAgbGluZS1oZWlnaHQ6IDFlbTtcbiAgICAgICAgYm9yZGVyLXRvcDogMXB4IGRvdHRlZCAjMDAwO1xuICAgICAgICBib3JkZXItYm90dG9tOiAxcHggZG90dGVkICMwMDA7XG4gICAgICAgIGFsaWduLWl0ZW1zOiBiYXNlbGluZTtcbiAgICAgICAgYCxcbiAgICAgICAgbWFpbjoge1xuICAgICAgICAgICAgcGFkZGluZzogJzF2bWluIDAuMnZtaW4nLFxuICAgICAgICB9LFxuICAgICAgICBhZGRvbjoge1xuICAgICAgICAgICAgcGFkZGluZzogJzF2bWluIDAuNnZtaW4nLFxuICAgICAgICAgICAgZXh0ZW5kOiBgXG4gICAgICAgICAgICBmb250LXdlaWdodDogNzAwO1xuICAgICAgICAgICAgJjpmaXJzdC1jaGlsZCB7XG4gICAgICAgICAgICAgICAgcGFkZGluZy1yaWdodDogMS40dm1pbjtcbiAgICAgICAgICAgICAgICBib3JkZXItcmlnaHQ6IDFweCBkb3R0ZWQgIzAwMDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgICY6bGFzdC1jaGlsZCB7XG4gICAgICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiAxLjR2bWluO1xuICAgICAgICAgICAgICAgIGJvcmRlci1sZWZ0OiAxcHggZG90dGVkICMwMDA7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAmICsgLkxhYmVsIHtcbiAgICAgICAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDEuNHZtaW47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAuTGFiZWwgKyAmIHtcbiAgICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogMS40dm1pbjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGAsXG4gICAgICAgIH0sXG4gICAgfSxcbiAgICBsaXN0OiB7XG4gICAgICAgIGl0ZW06IHtcbiAgICAgICAgICAgIHBhZGRpbmc6ICcxdm1pbiAwJyxcbiAgICAgICAgICAgIGV4dGVuZDogYFxuICAgICAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICMwMDA7XG4gICAgICAgICAgICAmOmxhc3QtY2hpbGQge1xuICAgICAgICAgICAgICAgIGJvcmRlci1ib3R0b206IDA7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBgLFxuICAgICAgICAgICAgbWV0YToge1xuICAgICAgICAgICAgICAgIGZvbnRTaXplOiAnMS40dm1pbicsXG4gICAgICAgICAgICAgICAgZXh0ZW5kOiBgXG4gICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgICAgICAgICAgICAgICBgLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgfSxcbiAgICB9LFxuICAgIGNoYXJ0cyxcbn07XG4iXX0=