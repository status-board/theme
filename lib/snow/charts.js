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
    tickColor: '#bbb',
    legendColor: _colors["default"].text
  },
  grid: {
    stroke: '#eee'
  },
  colors: ['#82c2de', '#ade0de', '#dad7a3', '#b3deff', '#baab89'],
  tooltip: {
    background: '#fff',
    color: _colors["default"].text,
    fontSize: '1.4vmin',
    borderRadius: '2px',
    boxShadow: '0 5px 9px rgba(0, 0, 0, 0.15)'
  }
};
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9zbm93L2NoYXJ0cy50cyJdLCJuYW1lcyI6WyJheGlzIiwidGV4dENvbG9yIiwiY29sb3JzIiwidGV4dCIsInRpY2tDb2xvciIsImxlZ2VuZENvbG9yIiwiZ3JpZCIsInN0cm9rZSIsInRvb2x0aXAiLCJiYWNrZ3JvdW5kIiwiY29sb3IiLCJmb250U2l6ZSIsImJvcmRlclJhZGl1cyIsImJveFNoYWRvdyJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOzs7O2VBRWU7QUFDWEEsRUFBQUEsSUFBSSxFQUFFO0FBQ0ZDLElBQUFBLFNBQVMsRUFBRUMsbUJBQU9DLElBRGhCO0FBRUZDLElBQUFBLFNBQVMsRUFBRSxNQUZUO0FBR0ZDLElBQUFBLFdBQVcsRUFBRUgsbUJBQU9DO0FBSGxCLEdBREs7QUFNWEcsRUFBQUEsSUFBSSxFQUFFO0FBQ0ZDLElBQUFBLE1BQU0sRUFBRTtBQUROLEdBTks7QUFTWEwsRUFBQUEsTUFBTSxFQUFFLENBQUMsU0FBRCxFQUFZLFNBQVosRUFBdUIsU0FBdkIsRUFBa0MsU0FBbEMsRUFBNkMsU0FBN0MsQ0FURztBQVVYTSxFQUFBQSxPQUFPLEVBQUU7QUFDTEMsSUFBQUEsVUFBVSxFQUFFLE1BRFA7QUFFTEMsSUFBQUEsS0FBSyxFQUFFUixtQkFBT0MsSUFGVDtBQUdMUSxJQUFBQSxRQUFRLEVBQUUsU0FITDtBQUlMQyxJQUFBQSxZQUFZLEVBQUUsS0FKVDtBQUtMQyxJQUFBQSxTQUFTLEVBQUU7QUFMTjtBQVZFLEMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgY29sb3JzIGZyb20gJy4vY29sb3JzJztcblxuZXhwb3J0IGRlZmF1bHQge1xuICAgIGF4aXM6IHtcbiAgICAgICAgdGV4dENvbG9yOiBjb2xvcnMudGV4dCxcbiAgICAgICAgdGlja0NvbG9yOiAnI2JiYicsXG4gICAgICAgIGxlZ2VuZENvbG9yOiBjb2xvcnMudGV4dCxcbiAgICB9LFxuICAgIGdyaWQ6IHtcbiAgICAgICAgc3Ryb2tlOiAnI2VlZScsXG4gICAgfSxcbiAgICBjb2xvcnM6IFsnIzgyYzJkZScsICcjYWRlMGRlJywgJyNkYWQ3YTMnLCAnI2IzZGVmZicsICcjYmFhYjg5J10sXG4gICAgdG9vbHRpcDoge1xuICAgICAgICBiYWNrZ3JvdW5kOiAnI2ZmZicsXG4gICAgICAgIGNvbG9yOiBjb2xvcnMudGV4dCxcbiAgICAgICAgZm9udFNpemU6ICcxLjR2bWluJyxcbiAgICAgICAgYm9yZGVyUmFkaXVzOiAnMnB4JyxcbiAgICAgICAgYm94U2hhZG93OiAnMCA1cHggOXB4IHJnYmEoMCwgMCwgMCwgMC4xNSknLFxuICAgIH0sXG59O1xuIl19