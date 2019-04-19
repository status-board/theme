"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _colors = _interopRequireDefault(require("./colors"));

var _charts = _interopRequireDefault(require("./charts"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _default = {
  name: 'snow',
  colors: _colors["default"],
  root: {
    color: _colors["default"].text,
    background: _colors["default"].background,
    extend: "\n        @import url(\"https://fonts.googleapis.com/css?family=Open+Sans:400,200,600,700|Montserrat:400,700\");\n        \n        & a {\n            color: #2d7189;\n        }\n        "
  },
  dashboard: {
    header: {
      background: '#fff',
      boxShadow: '0 1px 3px rgba(0, 0, 0, .15)',
      padding: '0 3.6vmin',
      title: {
        color: '#000',
        fontFamily: '\'Montserrat\', sans-serif',
        fontSize: '2vmin'
      }
    },
    player: {
      slash: {
        color: '#0badc2',
        fontSize: '2.2vmin'
      }
    }
  },
  widget: {
    background: '#fff',
    extend: "\n        border-radius: 2px;\n        box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);\n        ",
    wrapper: {
      padding: '1vmin'
    },
    header: {
      height: '5vmin',
      background: '#fafafa',
      extend: "\n            border-bottom: 1px solid ".concat(_colors["default"].background, ";\n            border-radius: 2px 2px 0 0;\n            "),
      subject: {
        color: '#000'
      },
      count: {
        extend: "\n                border-radius: 2vmin;\n                padding: 0.4vmin 1.2vmin;\n                border: 1px solid #ddd;\n                "
      },
      icon: {
        fontSize: '2.6vmin',
        color: '#8fccd2'
      }
    },
    body: {
      top: '5vmin'
    }
  },
  notifications: {
    item: {
      padding: '1.2vmin 2vmin',
      background: '#fff',
      extend: "\n            box-shadow: 0 5px 20px rgba(0, 0, 0, 0.25);\n            border-radius: 2px;\n            font-size: 1.6vmin;\n            "
    }
  },
  label: {
    extend: "\n        border-radius: 2px;\n        border: 1px solid #ddd;\n        ",
    addon: {
      background: _colors["default"].background,
      color: '#000'
    }
  },
  list: {
    item: {
      extend: "\n            border-bottom: 1px solid ".concat(_colors["default"].background, ";\n            &:last-child {\n                border-bottom: 0;\n            }\n            "),
      hover: {
        background: '#eee'
      },
      meta: {
        color: '#777',
        fontSize: '1.4vmin'
      }
    }
  },
  charts: _charts["default"]
};
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9zbm93L2luZGV4LnRzIl0sIm5hbWVzIjpbIm5hbWUiLCJjb2xvcnMiLCJyb290IiwiY29sb3IiLCJ0ZXh0IiwiYmFja2dyb3VuZCIsImV4dGVuZCIsImRhc2hib2FyZCIsImhlYWRlciIsImJveFNoYWRvdyIsInBhZGRpbmciLCJ0aXRsZSIsImZvbnRGYW1pbHkiLCJmb250U2l6ZSIsInBsYXllciIsInNsYXNoIiwid2lkZ2V0Iiwid3JhcHBlciIsImhlaWdodCIsInN1YmplY3QiLCJjb3VudCIsImljb24iLCJib2R5IiwidG9wIiwibm90aWZpY2F0aW9ucyIsIml0ZW0iLCJsYWJlbCIsImFkZG9uIiwibGlzdCIsImhvdmVyIiwibWV0YSIsImNoYXJ0cyJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOztBQUNBOzs7O2VBRWU7QUFDWEEsRUFBQUEsSUFBSSxFQUFFLE1BREs7QUFFWEMsRUFBQUEsTUFBTSxFQUFOQSxrQkFGVztBQUdYQyxFQUFBQSxJQUFJLEVBQUU7QUFDRkMsSUFBQUEsS0FBSyxFQUFFRixtQkFBT0csSUFEWjtBQUVGQyxJQUFBQSxVQUFVLEVBQUVKLG1CQUFPSSxVQUZqQjtBQUdGQyxJQUFBQSxNQUFNO0FBSEosR0FISztBQWNYQyxFQUFBQSxTQUFTLEVBQUU7QUFDUEMsSUFBQUEsTUFBTSxFQUFFO0FBQ0pILE1BQUFBLFVBQVUsRUFBRSxNQURSO0FBRUpJLE1BQUFBLFNBQVMsRUFBRSw4QkFGUDtBQUdKQyxNQUFBQSxPQUFPLEVBQUUsV0FITDtBQUlKQyxNQUFBQSxLQUFLLEVBQUU7QUFDSFIsUUFBQUEsS0FBSyxFQUFFLE1BREo7QUFFSFMsUUFBQUEsVUFBVSxFQUFFLDRCQUZUO0FBR0hDLFFBQUFBLFFBQVEsRUFBRTtBQUhQO0FBSkgsS0FERDtBQVdQQyxJQUFBQSxNQUFNLEVBQUU7QUFDSkMsTUFBQUEsS0FBSyxFQUFFO0FBQ0haLFFBQUFBLEtBQUssRUFBRSxTQURKO0FBRUhVLFFBQUFBLFFBQVEsRUFBRTtBQUZQO0FBREg7QUFYRCxHQWRBO0FBZ0NYRyxFQUFBQSxNQUFNLEVBQUU7QUFDSlgsSUFBQUEsVUFBVSxFQUFFLE1BRFI7QUFFSkMsSUFBQUEsTUFBTSw4RkFGRjtBQU1KVyxJQUFBQSxPQUFPLEVBQUU7QUFDTFAsTUFBQUEsT0FBTyxFQUFFO0FBREosS0FOTDtBQVNKRixJQUFBQSxNQUFNLEVBQUU7QUFDSlUsTUFBQUEsTUFBTSxFQUFFLE9BREo7QUFFSmIsTUFBQUEsVUFBVSxFQUFFLFNBRlI7QUFHSkMsTUFBQUEsTUFBTSxtREFDcUJMLG1CQUFPSSxVQUQ1Qiw2REFIRjtBQU9KYyxNQUFBQSxPQUFPLEVBQUU7QUFDTGhCLFFBQUFBLEtBQUssRUFBRTtBQURGLE9BUEw7QUFVSmlCLE1BQUFBLEtBQUssRUFBRTtBQUNIZCxRQUFBQSxNQUFNO0FBREgsT0FWSDtBQWlCSmUsTUFBQUEsSUFBSSxFQUFFO0FBQ0ZSLFFBQUFBLFFBQVEsRUFBRSxTQURSO0FBRUZWLFFBQUFBLEtBQUssRUFBRTtBQUZMO0FBakJGLEtBVEo7QUErQkptQixJQUFBQSxJQUFJLEVBQUU7QUFDRkMsTUFBQUEsR0FBRyxFQUFFO0FBREg7QUEvQkYsR0FoQ0c7QUFtRVhDLEVBQUFBLGFBQWEsRUFBRTtBQUNYQyxJQUFBQSxJQUFJLEVBQUU7QUFDRmYsTUFBQUEsT0FBTyxFQUFFLGVBRFA7QUFFRkwsTUFBQUEsVUFBVSxFQUFFLE1BRlY7QUFHRkMsTUFBQUEsTUFBTTtBQUhKO0FBREssR0FuRUo7QUE4RVhvQixFQUFBQSxLQUFLLEVBQUU7QUFDSHBCLElBQUFBLE1BQU0sNEVBREg7QUFLSHFCLElBQUFBLEtBQUssRUFBRTtBQUNIdEIsTUFBQUEsVUFBVSxFQUFFSixtQkFBT0ksVUFEaEI7QUFFSEYsTUFBQUEsS0FBSyxFQUFFO0FBRko7QUFMSixHQTlFSTtBQXdGWHlCLEVBQUFBLElBQUksRUFBRTtBQUNGSCxJQUFBQSxJQUFJLEVBQUU7QUFDRm5CLE1BQUFBLE1BQU0sbURBQ3FCTCxtQkFBT0ksVUFENUIsa0dBREo7QUFPRndCLE1BQUFBLEtBQUssRUFBRTtBQUNIeEIsUUFBQUEsVUFBVSxFQUFFO0FBRFQsT0FQTDtBQVVGeUIsTUFBQUEsSUFBSSxFQUFFO0FBQ0YzQixRQUFBQSxLQUFLLEVBQUUsTUFETDtBQUVGVSxRQUFBQSxRQUFRLEVBQUU7QUFGUjtBQVZKO0FBREosR0F4Rks7QUF5R1hrQixFQUFBQSxNQUFNLEVBQU5BO0FBekdXLEMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgY29sb3JzIGZyb20gJy4vY29sb3JzJztcbmltcG9ydCBjaGFydHMgZnJvbSAnLi9jaGFydHMnO1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gICAgbmFtZTogJ3Nub3cnLFxuICAgIGNvbG9ycyxcbiAgICByb290OiB7XG4gICAgICAgIGNvbG9yOiBjb2xvcnMudGV4dCxcbiAgICAgICAgYmFja2dyb3VuZDogY29sb3JzLmJhY2tncm91bmQsXG4gICAgICAgIGV4dGVuZDogYFxuICAgICAgICBAaW1wb3J0IHVybChcImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1PcGVuK1NhbnM6NDAwLDIwMCw2MDAsNzAwfE1vbnRzZXJyYXQ6NDAwLDcwMFwiKTtcbiAgICAgICAgXG4gICAgICAgICYgYSB7XG4gICAgICAgICAgICBjb2xvcjogIzJkNzE4OTtcbiAgICAgICAgfVxuICAgICAgICBgLFxuICAgIH0sXG4gICAgZGFzaGJvYXJkOiB7XG4gICAgICAgIGhlYWRlcjoge1xuICAgICAgICAgICAgYmFja2dyb3VuZDogJyNmZmYnLFxuICAgICAgICAgICAgYm94U2hhZG93OiAnMCAxcHggM3B4IHJnYmEoMCwgMCwgMCwgLjE1KScsXG4gICAgICAgICAgICBwYWRkaW5nOiAnMCAzLjZ2bWluJyxcbiAgICAgICAgICAgIHRpdGxlOiB7XG4gICAgICAgICAgICAgICAgY29sb3I6ICcjMDAwJyxcbiAgICAgICAgICAgICAgICBmb250RmFtaWx5OiAnXFwnTW9udHNlcnJhdFxcJywgc2Fucy1zZXJpZicsXG4gICAgICAgICAgICAgICAgZm9udFNpemU6ICcydm1pbicsXG4gICAgICAgICAgICB9LFxuICAgICAgICB9LFxuICAgICAgICBwbGF5ZXI6IHtcbiAgICAgICAgICAgIHNsYXNoOiB7XG4gICAgICAgICAgICAgICAgY29sb3I6ICcjMGJhZGMyJyxcbiAgICAgICAgICAgICAgICBmb250U2l6ZTogJzIuMnZtaW4nLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgfSxcbiAgICB9LFxuICAgIHdpZGdldDoge1xuICAgICAgICBiYWNrZ3JvdW5kOiAnI2ZmZicsXG4gICAgICAgIGV4dGVuZDogYFxuICAgICAgICBib3JkZXItcmFkaXVzOiAycHg7XG4gICAgICAgIGJveC1zaGFkb3c6IDAgMXB4IDNweCByZ2JhKDAsIDAsIDAsIDAuMSk7XG4gICAgICAgIGAsXG4gICAgICAgIHdyYXBwZXI6IHtcbiAgICAgICAgICAgIHBhZGRpbmc6ICcxdm1pbicsXG4gICAgICAgIH0sXG4gICAgICAgIGhlYWRlcjoge1xuICAgICAgICAgICAgaGVpZ2h0OiAnNXZtaW4nLFxuICAgICAgICAgICAgYmFja2dyb3VuZDogJyNmYWZhZmEnLFxuICAgICAgICAgICAgZXh0ZW5kOiBgXG4gICAgICAgICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgJHtjb2xvcnMuYmFja2dyb3VuZH07XG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiAycHggMnB4IDAgMDtcbiAgICAgICAgICAgIGAsXG4gICAgICAgICAgICBzdWJqZWN0OiB7XG4gICAgICAgICAgICAgICAgY29sb3I6ICcjMDAwJyxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBjb3VudDoge1xuICAgICAgICAgICAgICAgIGV4dGVuZDogYFxuICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDJ2bWluO1xuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDAuNHZtaW4gMS4ydm1pbjtcbiAgICAgICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjZGRkO1xuICAgICAgICAgICAgICAgIGAsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgaWNvbjoge1xuICAgICAgICAgICAgICAgIGZvbnRTaXplOiAnMi42dm1pbicsXG4gICAgICAgICAgICAgICAgY29sb3I6ICcjOGZjY2QyJyxcbiAgICAgICAgICAgIH0sXG4gICAgICAgIH0sXG4gICAgICAgIGJvZHk6IHtcbiAgICAgICAgICAgIHRvcDogJzV2bWluJyxcbiAgICAgICAgfSxcbiAgICB9LFxuICAgIG5vdGlmaWNhdGlvbnM6IHtcbiAgICAgICAgaXRlbToge1xuICAgICAgICAgICAgcGFkZGluZzogJzEuMnZtaW4gMnZtaW4nLFxuICAgICAgICAgICAgYmFja2dyb3VuZDogJyNmZmYnLFxuICAgICAgICAgICAgZXh0ZW5kOiBgXG4gICAgICAgICAgICBib3gtc2hhZG93OiAwIDVweCAyMHB4IHJnYmEoMCwgMCwgMCwgMC4yNSk7XG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiAycHg7XG4gICAgICAgICAgICBmb250LXNpemU6IDEuNnZtaW47XG4gICAgICAgICAgICBgLFxuICAgICAgICB9LFxuICAgIH0sXG4gICAgbGFiZWw6IHtcbiAgICAgICAgZXh0ZW5kOiBgXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDJweDtcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgI2RkZDtcbiAgICAgICAgYCxcbiAgICAgICAgYWRkb246IHtcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IGNvbG9ycy5iYWNrZ3JvdW5kLFxuICAgICAgICAgICAgY29sb3I6ICcjMDAwJyxcbiAgICAgICAgfSxcbiAgICB9LFxuICAgIGxpc3Q6IHtcbiAgICAgICAgaXRlbToge1xuICAgICAgICAgICAgZXh0ZW5kOiBgXG4gICAgICAgICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgJHtjb2xvcnMuYmFja2dyb3VuZH07XG4gICAgICAgICAgICAmOmxhc3QtY2hpbGQge1xuICAgICAgICAgICAgICAgIGJvcmRlci1ib3R0b206IDA7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBgLFxuICAgICAgICAgICAgaG92ZXI6IHtcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAnI2VlZScsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgbWV0YToge1xuICAgICAgICAgICAgICAgIGNvbG9yOiAnIzc3NycsXG4gICAgICAgICAgICAgICAgZm9udFNpemU6ICcxLjR2bWluJyxcbiAgICAgICAgICAgIH0sXG4gICAgICAgIH0sXG4gICAgfSxcbiAgICBjaGFydHMsXG59O1xuIl19