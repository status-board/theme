"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _colors = _interopRequireDefault(require("./colors"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _default = {
  axis: {
    textColor: _colors["default"].text,
    tickColor: _colors["default"].text,
    legendColor: _colors["default"].text
  },
  grid: {
    stroke: '#25303d'
  },
  colors: ['#FDECA4', '#cbb04a', '#D68649', '#648e9c', '#253445'],
  tooltip: {
    background: '#323f53',
    color: '#f6ecd0',
    fontSize: '1.4vmin',
    borderRadius: '2px',
    boxShadow: '0 1px 3px rgba(0, 0, 0, 0.5)'
  }
};
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9uaWdodC1ibHVlL2NoYXJ0cy50cyJdLCJuYW1lcyI6WyJheGlzIiwidGV4dENvbG9yIiwiY29sb3JzIiwidGV4dCIsInRpY2tDb2xvciIsImxlZ2VuZENvbG9yIiwiZ3JpZCIsInN0cm9rZSIsInRvb2x0aXAiLCJiYWNrZ3JvdW5kIiwiY29sb3IiLCJmb250U2l6ZSIsImJvcmRlclJhZGl1cyIsImJveFNoYWRvdyJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOzs7O2VBRWU7QUFDWEEsRUFBQUEsSUFBSSxFQUFFO0FBQ0ZDLElBQUFBLFNBQVMsRUFBRUMsbUJBQU9DLElBRGhCO0FBRUZDLElBQUFBLFNBQVMsRUFBRUYsbUJBQU9DLElBRmhCO0FBR0ZFLElBQUFBLFdBQVcsRUFBRUgsbUJBQU9DO0FBSGxCLEdBREs7QUFNWEcsRUFBQUEsSUFBSSxFQUFFO0FBQ0ZDLElBQUFBLE1BQU0sRUFBRTtBQUROLEdBTks7QUFTWEwsRUFBQUEsTUFBTSxFQUFFLENBQUMsU0FBRCxFQUFZLFNBQVosRUFBdUIsU0FBdkIsRUFBa0MsU0FBbEMsRUFBNkMsU0FBN0MsQ0FURztBQVVYTSxFQUFBQSxPQUFPLEVBQUU7QUFDTEMsSUFBQUEsVUFBVSxFQUFFLFNBRFA7QUFFTEMsSUFBQUEsS0FBSyxFQUFFLFNBRkY7QUFHTEMsSUFBQUEsUUFBUSxFQUFFLFNBSEw7QUFJTEMsSUFBQUEsWUFBWSxFQUFFLEtBSlQ7QUFLTEMsSUFBQUEsU0FBUyxFQUFFO0FBTE47QUFWRSxDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGNvbG9ycyBmcm9tICcuL2NvbG9ycyc7XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgICBheGlzOiB7XG4gICAgICAgIHRleHRDb2xvcjogY29sb3JzLnRleHQsXG4gICAgICAgIHRpY2tDb2xvcjogY29sb3JzLnRleHQsXG4gICAgICAgIGxlZ2VuZENvbG9yOiBjb2xvcnMudGV4dCxcbiAgICB9LFxuICAgIGdyaWQ6IHtcbiAgICAgICAgc3Ryb2tlOiAnIzI1MzAzZCcsXG4gICAgfSxcbiAgICBjb2xvcnM6IFsnI0ZERUNBNCcsICcjY2JiMDRhJywgJyNENjg2NDknLCAnIzY0OGU5YycsICcjMjUzNDQ1J10sXG4gICAgdG9vbHRpcDoge1xuICAgICAgICBiYWNrZ3JvdW5kOiAnIzMyM2Y1MycsXG4gICAgICAgIGNvbG9yOiAnI2Y2ZWNkMCcsXG4gICAgICAgIGZvbnRTaXplOiAnMS40dm1pbicsXG4gICAgICAgIGJvcmRlclJhZGl1czogJzJweCcsXG4gICAgICAgIGJveFNoYWRvdzogJzAgMXB4IDNweCByZ2JhKDAsIDAsIDAsIDAuNSknLFxuICAgIH0sXG59O1xuIl19