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
  name: 'night blue',
  typography: _typography["default"],
  colors: _colors["default"],
  root: {
    color: _colors["default"].text,
    background: _colors["default"].background,
    extend: "\n        @import url('https://fonts.googleapis.com/css?family=Raleway:200,400,600,800|Montserrat:400,700');\n        \n        & a {\n            color: #f6ecd0;\n        }\n        "
  },
  dashboard: {
    header: {
      background: '#2b3847',
      color: _colors["default"].text,
      boxShadow: '0 1px 1px rgba(0, 0, 0, 0.35)',
      title: {}
    }
  },
  widget: {
    background: '#2b3847',
    extend: "\n        border-radius: 2px;\n        box-shadow: 0 1px 1px rgba(0, 0, 0, .35);\n        ",
    wrapper: {
      padding: '0.6vmin'
    },
    header: {
      height: '5vmin',
      background: '#323f53',
      color: _colors["default"].text,
      extend: "\n            box-shadow: 0 1px 0 #495b71 inset;\n            border-bottom: 1px solid #253246;\n            border-radius: 2px 2px 0 0;\n            ",
      subject: {},
      count: {
        color: '#7e9ebc',
        extend: "\n                background-color: #1e2836;\n                box-shadow: 0 1px 0 rgba(0, 0, 0, 0.5) inset;\n                text-shadow: 0 1px 0 rgba(0, 0, 0, 0.5);\n                border-radius: 2px;\n                padding: 0.5vmin 0.8vmin;\n                "
      },
      icon: {
        fontSize: '2.2vmin',
        color: '#e0c671'
      }
    },
    body: {
      top: '5vmin'
    }
  },
  notifications: {
    item: {
      padding: '1.2vmin 2vmin',
      background: _colors["default"].background,
      color: _colors["default"].text,
      extend: "\n            box-shadow: 0 1px 2px rgba(0, 0, 0, 0.15), 0 10px 20px rgba(0, 0, 0, 0.15);\n            border-radius: 2px;\n            "
    }
  },
  label: {
    extend: "\n        border-radius: 2px;\n        ",
    main: {
      background: '#212e41',
      color: '#e0c671'
    },
    addon: {
      background: '#1e2836',
      color: '#e0c671'
    }
  },
  list: {
    item: {
      extend: "\n            border-bottom: 1px solid #28323f;\n            &:last-child {\n                border-bottom: 0;\n            }\n            ",
      hover: {
        background: '#2f3d4b'
      },
      meta: {
        color: '#879db7'
      }
    }
  },
  charts: _charts["default"]
};
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9uaWdodC1ibHVlL2luZGV4LnRzIl0sIm5hbWVzIjpbIm5hbWUiLCJ0eXBvZ3JhcGh5IiwiY29sb3JzIiwicm9vdCIsImNvbG9yIiwidGV4dCIsImJhY2tncm91bmQiLCJleHRlbmQiLCJkYXNoYm9hcmQiLCJoZWFkZXIiLCJib3hTaGFkb3ciLCJ0aXRsZSIsIndpZGdldCIsIndyYXBwZXIiLCJwYWRkaW5nIiwiaGVpZ2h0Iiwic3ViamVjdCIsImNvdW50IiwiaWNvbiIsImZvbnRTaXplIiwiYm9keSIsInRvcCIsIm5vdGlmaWNhdGlvbnMiLCJpdGVtIiwibGFiZWwiLCJtYWluIiwiYWRkb24iLCJsaXN0IiwiaG92ZXIiLCJtZXRhIiwiY2hhcnRzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7O0FBQ0E7O0FBQ0E7Ozs7ZUFFZTtBQUNYQSxFQUFBQSxJQUFJLEVBQUUsWUFESztBQUVYQyxFQUFBQSxVQUFVLEVBQVZBLHNCQUZXO0FBR1hDLEVBQUFBLE1BQU0sRUFBTkEsa0JBSFc7QUFJWEMsRUFBQUEsSUFBSSxFQUFFO0FBQ0ZDLElBQUFBLEtBQUssRUFBRUYsbUJBQU9HLElBRFo7QUFFRkMsSUFBQUEsVUFBVSxFQUFFSixtQkFBT0ksVUFGakI7QUFHRkMsSUFBQUEsTUFBTTtBQUhKLEdBSks7QUFlWEMsRUFBQUEsU0FBUyxFQUFFO0FBQ1BDLElBQUFBLE1BQU0sRUFBRTtBQUNKSCxNQUFBQSxVQUFVLEVBQUUsU0FEUjtBQUVKRixNQUFBQSxLQUFLLEVBQUVGLG1CQUFPRyxJQUZWO0FBR0pLLE1BQUFBLFNBQVMsRUFBRSwrQkFIUDtBQUlKQyxNQUFBQSxLQUFLLEVBQUU7QUFKSDtBQURELEdBZkE7QUF1QlhDLEVBQUFBLE1BQU0sRUFBRTtBQUNKTixJQUFBQSxVQUFVLEVBQUUsU0FEUjtBQUVKQyxJQUFBQSxNQUFNLDhGQUZGO0FBTUpNLElBQUFBLE9BQU8sRUFBRTtBQUNMQyxNQUFBQSxPQUFPLEVBQUU7QUFESixLQU5MO0FBU0pMLElBQUFBLE1BQU0sRUFBRTtBQUNKTSxNQUFBQSxNQUFNLEVBQUUsT0FESjtBQUVKVCxNQUFBQSxVQUFVLEVBQUUsU0FGUjtBQUdKRixNQUFBQSxLQUFLLEVBQUVGLG1CQUFPRyxJQUhWO0FBSUpFLE1BQUFBLE1BQU0sMEpBSkY7QUFTSlMsTUFBQUEsT0FBTyxFQUFFLEVBVEw7QUFVSkMsTUFBQUEsS0FBSyxFQUFFO0FBQ0hiLFFBQUFBLEtBQUssRUFBRSxTQURKO0FBRUhHLFFBQUFBLE1BQU07QUFGSCxPQVZIO0FBb0JKVyxNQUFBQSxJQUFJLEVBQUU7QUFDRkMsUUFBQUEsUUFBUSxFQUFFLFNBRFI7QUFFRmYsUUFBQUEsS0FBSyxFQUFFO0FBRkw7QUFwQkYsS0FUSjtBQWtDSmdCLElBQUFBLElBQUksRUFBRTtBQUNGQyxNQUFBQSxHQUFHLEVBQUU7QUFESDtBQWxDRixHQXZCRztBQTZEWEMsRUFBQUEsYUFBYSxFQUFFO0FBQ1hDLElBQUFBLElBQUksRUFBRTtBQUNGVCxNQUFBQSxPQUFPLEVBQUUsZUFEUDtBQUVGUixNQUFBQSxVQUFVLEVBQUVKLG1CQUFPSSxVQUZqQjtBQUdGRixNQUFBQSxLQUFLLEVBQUVGLG1CQUFPRyxJQUhaO0FBSUZFLE1BQUFBLE1BQU07QUFKSjtBQURLLEdBN0RKO0FBd0VYaUIsRUFBQUEsS0FBSyxFQUFFO0FBQ0hqQixJQUFBQSxNQUFNLDJDQURIO0FBSUhrQixJQUFBQSxJQUFJLEVBQUU7QUFDRm5CLE1BQUFBLFVBQVUsRUFBRSxTQURWO0FBRUZGLE1BQUFBLEtBQUssRUFBRTtBQUZMLEtBSkg7QUFRSHNCLElBQUFBLEtBQUssRUFBRTtBQUNIcEIsTUFBQUEsVUFBVSxFQUFFLFNBRFQ7QUFFSEYsTUFBQUEsS0FBSyxFQUFFO0FBRko7QUFSSixHQXhFSTtBQXFGWHVCLEVBQUFBLElBQUksRUFBRTtBQUNGSixJQUFBQSxJQUFJLEVBQUU7QUFDRmhCLE1BQUFBLE1BQU0sK0lBREo7QUFPRnFCLE1BQUFBLEtBQUssRUFBRTtBQUNIdEIsUUFBQUEsVUFBVSxFQUFFO0FBRFQsT0FQTDtBQVVGdUIsTUFBQUEsSUFBSSxFQUFFO0FBQ0Z6QixRQUFBQSxLQUFLLEVBQUU7QUFETDtBQVZKO0FBREosR0FyRks7QUFxR1gwQixFQUFBQSxNQUFNLEVBQU5BO0FBckdXLEMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgY29sb3JzIGZyb20gJy4vY29sb3JzJztcbmltcG9ydCBjaGFydHMgZnJvbSAnLi9jaGFydHMnO1xuaW1wb3J0IHR5cG9ncmFwaHkgZnJvbSAnLi90eXBvZ3JhcGh5JztcblxuZXhwb3J0IGRlZmF1bHQge1xuICAgIG5hbWU6ICduaWdodCBibHVlJyxcbiAgICB0eXBvZ3JhcGh5LFxuICAgIGNvbG9ycyxcbiAgICByb290OiB7XG4gICAgICAgIGNvbG9yOiBjb2xvcnMudGV4dCxcbiAgICAgICAgYmFja2dyb3VuZDogY29sb3JzLmJhY2tncm91bmQsXG4gICAgICAgIGV4dGVuZDogYFxuICAgICAgICBAaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PVJhbGV3YXk6MjAwLDQwMCw2MDAsODAwfE1vbnRzZXJyYXQ6NDAwLDcwMCcpO1xuICAgICAgICBcbiAgICAgICAgJiBhIHtcbiAgICAgICAgICAgIGNvbG9yOiAjZjZlY2QwO1xuICAgICAgICB9XG4gICAgICAgIGAsXG4gICAgfSxcbiAgICBkYXNoYm9hcmQ6IHtcbiAgICAgICAgaGVhZGVyOiB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAnIzJiMzg0NycsXG4gICAgICAgICAgICBjb2xvcjogY29sb3JzLnRleHQsXG4gICAgICAgICAgICBib3hTaGFkb3c6ICcwIDFweCAxcHggcmdiYSgwLCAwLCAwLCAwLjM1KScsXG4gICAgICAgICAgICB0aXRsZToge30sXG4gICAgICAgIH0sXG4gICAgfSxcbiAgICB3aWRnZXQ6IHtcbiAgICAgICAgYmFja2dyb3VuZDogJyMyYjM4NDcnLFxuICAgICAgICBleHRlbmQ6IGBcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMnB4O1xuICAgICAgICBib3gtc2hhZG93OiAwIDFweCAxcHggcmdiYSgwLCAwLCAwLCAuMzUpO1xuICAgICAgICBgLFxuICAgICAgICB3cmFwcGVyOiB7XG4gICAgICAgICAgICBwYWRkaW5nOiAnMC42dm1pbicsXG4gICAgICAgIH0sXG4gICAgICAgIGhlYWRlcjoge1xuICAgICAgICAgICAgaGVpZ2h0OiAnNXZtaW4nLFxuICAgICAgICAgICAgYmFja2dyb3VuZDogJyMzMjNmNTMnLFxuICAgICAgICAgICAgY29sb3I6IGNvbG9ycy50ZXh0LFxuICAgICAgICAgICAgZXh0ZW5kOiBgXG4gICAgICAgICAgICBib3gtc2hhZG93OiAwIDFweCAwICM0OTViNzEgaW5zZXQ7XG4gICAgICAgICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgIzI1MzI0NjtcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDJweCAycHggMCAwO1xuICAgICAgICAgICAgYCxcbiAgICAgICAgICAgIHN1YmplY3Q6IHt9LFxuICAgICAgICAgICAgY291bnQ6IHtcbiAgICAgICAgICAgICAgICBjb2xvcjogJyM3ZTllYmMnLFxuICAgICAgICAgICAgICAgIGV4dGVuZDogYFxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMxZTI4MzY7XG4gICAgICAgICAgICAgICAgYm94LXNoYWRvdzogMCAxcHggMCByZ2JhKDAsIDAsIDAsIDAuNSkgaW5zZXQ7XG4gICAgICAgICAgICAgICAgdGV4dC1zaGFkb3c6IDAgMXB4IDAgcmdiYSgwLCAwLCAwLCAwLjUpO1xuICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDJweDtcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAwLjV2bWluIDAuOHZtaW47XG4gICAgICAgICAgICAgICAgYCxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBpY29uOiB7XG4gICAgICAgICAgICAgICAgZm9udFNpemU6ICcyLjJ2bWluJyxcbiAgICAgICAgICAgICAgICBjb2xvcjogJyNlMGM2NzEnLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgfSxcbiAgICAgICAgYm9keToge1xuICAgICAgICAgICAgdG9wOiAnNXZtaW4nLFxuICAgICAgICB9LFxuICAgIH0sXG4gICAgbm90aWZpY2F0aW9uczoge1xuICAgICAgICBpdGVtOiB7XG4gICAgICAgICAgICBwYWRkaW5nOiAnMS4ydm1pbiAydm1pbicsXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiBjb2xvcnMuYmFja2dyb3VuZCxcbiAgICAgICAgICAgIGNvbG9yOiBjb2xvcnMudGV4dCxcbiAgICAgICAgICAgIGV4dGVuZDogYFxuICAgICAgICAgICAgYm94LXNoYWRvdzogMCAxcHggMnB4IHJnYmEoMCwgMCwgMCwgMC4xNSksIDAgMTBweCAyMHB4IHJnYmEoMCwgMCwgMCwgMC4xNSk7XG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiAycHg7XG4gICAgICAgICAgICBgLFxuICAgICAgICB9LFxuICAgIH0sXG4gICAgbGFiZWw6IHtcbiAgICAgICAgZXh0ZW5kOiBgXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDJweDtcbiAgICAgICAgYCxcbiAgICAgICAgbWFpbjoge1xuICAgICAgICAgICAgYmFja2dyb3VuZDogJyMyMTJlNDEnLFxuICAgICAgICAgICAgY29sb3I6ICcjZTBjNjcxJyxcbiAgICAgICAgfSxcbiAgICAgICAgYWRkb246IHtcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICcjMWUyODM2JyxcbiAgICAgICAgICAgIGNvbG9yOiAnI2UwYzY3MScsXG4gICAgICAgIH0sXG4gICAgfSxcbiAgICBsaXN0OiB7XG4gICAgICAgIGl0ZW06IHtcbiAgICAgICAgICAgIGV4dGVuZDogYFxuICAgICAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICMyODMyM2Y7XG4gICAgICAgICAgICAmOmxhc3QtY2hpbGQge1xuICAgICAgICAgICAgICAgIGJvcmRlci1ib3R0b206IDA7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBgLFxuICAgICAgICAgICAgaG92ZXI6IHtcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAnIzJmM2Q0YicsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgbWV0YToge1xuICAgICAgICAgICAgICAgIGNvbG9yOiAnIzg3OWRiNycsXG4gICAgICAgICAgICB9LFxuICAgICAgICB9LFxuICAgIH0sXG4gICAgY2hhcnRzLFxufTtcbiJdfQ==