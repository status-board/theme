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
  name: 'mini kuro',
  typography: _typography["default"],
  colors: _colors["default"],
  root: {
    background: '#000',
    extend: "\n        @import url('https://fonts.googleapis.com/css?family=Roboto+Mono:300,400,500,700');\n        font-weight: 300;\n        \n        & a {\n            font-weight: 400;\n        }\n        & img {\n            filter: grayscale(100%);\n        }\n        "
  },
  dashboard: {
    header: {
      title: {}
    }
  },
  widget: {
    background: '#000',
    wrapper: {
      padding: '1.6vmin 3vmin'
    },
    header: {
      padding: '0.8vmin 0 0 0',
      extend: "\n            border-top: 2px solid #fff;\n            align-items: flex-start;    \n            ",
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
      background: '#fff',
      color: '#000',
      extend: "\n            font-weight: 400;\n            "
    }
  },
  label: {
    extend: "\n        line-height: 1em;\n        border-top: 1px dotted #fff;\n        border-bottom: 1px dotted #fff;\n        align-items: baseline;\n        ",
    main: {
      padding: '1vmin 0.2vmin'
    },
    addon: {
      padding: '1vmin 0.6vmin',
      extend: "\n            font-weight: 700;\n            &:first-child {\n                padding-right: 1.4vmin;\n                border-right: 1px dotted #fff;\n            }\n            &:last-child {\n                padding-left: 1.4vmin;\n                border-left: 1px dotted #fff;\n            }\n            & + .Label {\n                padding-left: 1.4vmin;\n            }\n            .Label + & {\n                margin-left: 1.4vmin;\n            }\n            "
    }
  },
  list: {
    item: {
      padding: '1vmin 0',
      extend: "\n            border-bottom: 1px solid #fff;\n            &:last-child {\n                border-bottom: 0;\n            }\n            ",
      meta: {
        fontSize: '1.4vmin',
        extend: "\n                font-weight: 300;\n                "
      }
    }
  },
  charts: _charts["default"]
};
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9taW5pLWt1cm8vaW5kZXgudHMiXSwibmFtZXMiOlsibmFtZSIsInR5cG9ncmFwaHkiLCJjb2xvcnMiLCJyb290IiwiYmFja2dyb3VuZCIsImV4dGVuZCIsImRhc2hib2FyZCIsImhlYWRlciIsInRpdGxlIiwid2lkZ2V0Iiwid3JhcHBlciIsInBhZGRpbmciLCJzdWJqZWN0IiwiY291bnQiLCJpY29uIiwibm90aWZpY2F0aW9ucyIsIml0ZW0iLCJjb2xvciIsImxhYmVsIiwibWFpbiIsImFkZG9uIiwibGlzdCIsIm1ldGEiLCJmb250U2l6ZSIsImNoYXJ0cyJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOztBQUNBOztBQUNBOzs7O2VBRWU7QUFDWEEsRUFBQUEsSUFBSSxFQUFFLFdBREs7QUFFWEMsRUFBQUEsVUFBVSxFQUFWQSxzQkFGVztBQUdYQyxFQUFBQSxNQUFNLEVBQU5BLGtCQUhXO0FBSVhDLEVBQUFBLElBQUksRUFBRTtBQUNGQyxJQUFBQSxVQUFVLEVBQUUsTUFEVjtBQUVGQyxJQUFBQSxNQUFNO0FBRkosR0FKSztBQWtCWEMsRUFBQUEsU0FBUyxFQUFFO0FBQ1BDLElBQUFBLE1BQU0sRUFBRTtBQUNKQyxNQUFBQSxLQUFLLEVBQUU7QUFESDtBQURELEdBbEJBO0FBdUJYQyxFQUFBQSxNQUFNLEVBQUU7QUFDSkwsSUFBQUEsVUFBVSxFQUFFLE1BRFI7QUFFSk0sSUFBQUEsT0FBTyxFQUFFO0FBQ0xDLE1BQUFBLE9BQU8sRUFBRTtBQURKLEtBRkw7QUFLSkosSUFBQUEsTUFBTSxFQUFFO0FBQ0pJLE1BQUFBLE9BQU8sRUFBRSxlQURMO0FBRUpOLE1BQUFBLE1BQU0scUdBRkY7QUFNSk8sTUFBQUEsT0FBTyxFQUFFLEVBTkw7QUFPSkMsTUFBQUEsS0FBSyxFQUFFO0FBQ0hSLFFBQUFBLE1BQU07QUFESCxPQVBIO0FBYUpTLE1BQUFBLElBQUksRUFBRTtBQUNGVCxRQUFBQSxNQUFNO0FBREo7QUFiRjtBQUxKLEdBdkJHO0FBZ0RYVSxFQUFBQSxhQUFhLEVBQUU7QUFDWEMsSUFBQUEsSUFBSSxFQUFFO0FBQ0ZMLE1BQUFBLE9BQU8sRUFBRSxlQURQO0FBRUZQLE1BQUFBLFVBQVUsRUFBRSxNQUZWO0FBR0ZhLE1BQUFBLEtBQUssRUFBRSxNQUhMO0FBSUZaLE1BQUFBLE1BQU07QUFKSjtBQURLLEdBaERKO0FBMERYYSxFQUFBQSxLQUFLLEVBQUU7QUFDSGIsSUFBQUEsTUFBTSx3SkFESDtBQU9IYyxJQUFBQSxJQUFJLEVBQUU7QUFDRlIsTUFBQUEsT0FBTyxFQUFFO0FBRFAsS0FQSDtBQVVIUyxJQUFBQSxLQUFLLEVBQUU7QUFDSFQsTUFBQUEsT0FBTyxFQUFFLGVBRE47QUFFSE4sTUFBQUEsTUFBTTtBQUZIO0FBVkosR0ExREk7QUF5RlhnQixFQUFBQSxJQUFJLEVBQUU7QUFDRkwsSUFBQUEsSUFBSSxFQUFFO0FBQ0ZMLE1BQUFBLE9BQU8sRUFBRSxTQURQO0FBRUZOLE1BQUFBLE1BQU0sNElBRko7QUFRRmlCLE1BQUFBLElBQUksRUFBRTtBQUNGQyxRQUFBQSxRQUFRLEVBQUUsU0FEUjtBQUVGbEIsUUFBQUEsTUFBTTtBQUZKO0FBUko7QUFESixHQXpGSztBQTBHWG1CLEVBQUFBLE1BQU0sRUFBTkE7QUExR1csQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBjb2xvcnMgZnJvbSAnLi9jb2xvcnMnO1xuaW1wb3J0IGNoYXJ0cyBmcm9tICcuL2NoYXJ0cyc7XG5pbXBvcnQgdHlwb2dyYXBoeSBmcm9tICcuL3R5cG9ncmFwaHknO1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gICAgbmFtZTogJ21pbmkga3VybycsXG4gICAgdHlwb2dyYXBoeSxcbiAgICBjb2xvcnMsXG4gICAgcm9vdDoge1xuICAgICAgICBiYWNrZ3JvdW5kOiAnIzAwMCcsXG4gICAgICAgIGV4dGVuZDogYFxuICAgICAgICBAaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PVJvYm90bytNb25vOjMwMCw0MDAsNTAwLDcwMCcpO1xuICAgICAgICBmb250LXdlaWdodDogMzAwO1xuICAgICAgICBcbiAgICAgICAgJiBhIHtcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgICAgIH1cbiAgICAgICAgJiBpbWcge1xuICAgICAgICAgICAgZmlsdGVyOiBncmF5c2NhbGUoMTAwJSk7XG4gICAgICAgIH1cbiAgICAgICAgYCxcbiAgICB9LFxuICAgIGRhc2hib2FyZDoge1xuICAgICAgICBoZWFkZXI6IHtcbiAgICAgICAgICAgIHRpdGxlOiB7fSxcbiAgICAgICAgfSxcbiAgICB9LFxuICAgIHdpZGdldDoge1xuICAgICAgICBiYWNrZ3JvdW5kOiAnIzAwMCcsXG4gICAgICAgIHdyYXBwZXI6IHtcbiAgICAgICAgICAgIHBhZGRpbmc6ICcxLjZ2bWluIDN2bWluJyxcbiAgICAgICAgfSxcbiAgICAgICAgaGVhZGVyOiB7XG4gICAgICAgICAgICBwYWRkaW5nOiAnMC44dm1pbiAwIDAgMCcsXG4gICAgICAgICAgICBleHRlbmQ6IGBcbiAgICAgICAgICAgIGJvcmRlci10b3A6IDJweCBzb2xpZCAjZmZmO1xuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7ICAgIFxuICAgICAgICAgICAgYCxcbiAgICAgICAgICAgIHN1YmplY3Q6IHt9LFxuICAgICAgICAgICAgY291bnQ6IHtcbiAgICAgICAgICAgICAgICBleHRlbmQ6IGBcbiAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNzAwO1xuICAgICAgICAgICAgICAgIHZlcnRpY2FsLWFsaWduOiBiYXNlbGluZTtcbiAgICAgICAgICAgICAgICBgLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGljb246IHtcbiAgICAgICAgICAgICAgICBleHRlbmQ6IGBcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgICAgICAgICAgICAgIGAsXG4gICAgICAgICAgICB9LFxuICAgICAgICB9LFxuICAgIH0sXG4gICAgbm90aWZpY2F0aW9uczoge1xuICAgICAgICBpdGVtOiB7XG4gICAgICAgICAgICBwYWRkaW5nOiAnMS4ydm1pbiAydm1pbicsXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAnI2ZmZicsXG4gICAgICAgICAgICBjb2xvcjogJyMwMDAnLFxuICAgICAgICAgICAgZXh0ZW5kOiBgXG4gICAgICAgICAgICBmb250LXdlaWdodDogNDAwO1xuICAgICAgICAgICAgYCxcbiAgICAgICAgfSxcbiAgICB9LFxuICAgIGxhYmVsOiB7XG4gICAgICAgIGV4dGVuZDogYFxuICAgICAgICBsaW5lLWhlaWdodDogMWVtO1xuICAgICAgICBib3JkZXItdG9wOiAxcHggZG90dGVkICNmZmY7XG4gICAgICAgIGJvcmRlci1ib3R0b206IDFweCBkb3R0ZWQgI2ZmZjtcbiAgICAgICAgYWxpZ24taXRlbXM6IGJhc2VsaW5lO1xuICAgICAgICBgLFxuICAgICAgICBtYWluOiB7XG4gICAgICAgICAgICBwYWRkaW5nOiAnMXZtaW4gMC4ydm1pbicsXG4gICAgICAgIH0sXG4gICAgICAgIGFkZG9uOiB7XG4gICAgICAgICAgICBwYWRkaW5nOiAnMXZtaW4gMC42dm1pbicsXG4gICAgICAgICAgICBleHRlbmQ6IGBcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICAgICAgICAgICAmOmZpcnN0LWNoaWxkIHtcbiAgICAgICAgICAgICAgICBwYWRkaW5nLXJpZ2h0OiAxLjR2bWluO1xuICAgICAgICAgICAgICAgIGJvcmRlci1yaWdodDogMXB4IGRvdHRlZCAjZmZmO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgJjpsYXN0LWNoaWxkIHtcbiAgICAgICAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDEuNHZtaW47XG4gICAgICAgICAgICAgICAgYm9yZGVyLWxlZnQ6IDFweCBkb3R0ZWQgI2ZmZjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgICYgKyAuTGFiZWwge1xuICAgICAgICAgICAgICAgIHBhZGRpbmctbGVmdDogMS40dm1pbjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5MYWJlbCArICYge1xuICAgICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAxLjR2bWluO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgYCxcbiAgICAgICAgfSxcbiAgICB9LFxuICAgIGxpc3Q6IHtcbiAgICAgICAgaXRlbToge1xuICAgICAgICAgICAgcGFkZGluZzogJzF2bWluIDAnLFxuICAgICAgICAgICAgZXh0ZW5kOiBgXG4gICAgICAgICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2ZmZjtcbiAgICAgICAgICAgICY6bGFzdC1jaGlsZCB7XG4gICAgICAgICAgICAgICAgYm9yZGVyLWJvdHRvbTogMDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGAsXG4gICAgICAgICAgICBtZXRhOiB7XG4gICAgICAgICAgICAgICAgZm9udFNpemU6ICcxLjR2bWluJyxcbiAgICAgICAgICAgICAgICBleHRlbmQ6IGBcbiAgICAgICAgICAgICAgICBmb250LXdlaWdodDogMzAwO1xuICAgICAgICAgICAgICAgIGAsXG4gICAgICAgICAgICB9LFxuICAgICAgICB9LFxuICAgIH0sXG4gICAgY2hhcnRzLFxufTtcbiJdfQ==