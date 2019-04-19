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
    stroke: '#073642'
  },
  colors: ['#00b2b0', '#24dead', '#d9d356', '#f1c4c2', '#dfbbe8'],
  tooltip: {
    background: '#073c49',
    color: '#bed0d2',
    fontSize: '1.4vmin',
    borderRadius: 0,
    boxShadow: '0 1px 3px rgba(0, 0, 0, 0.5)'
  }
};
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9zb2xhcml6ZWQtZGFyay9jaGFydHMudHMiXSwibmFtZXMiOlsiYXhpcyIsInRleHRDb2xvciIsImNvbG9ycyIsInRleHQiLCJ0aWNrQ29sb3IiLCJsZWdlbmRDb2xvciIsImdyaWQiLCJzdHJva2UiLCJ0b29sdGlwIiwiYmFja2dyb3VuZCIsImNvbG9yIiwiZm9udFNpemUiLCJib3JkZXJSYWRpdXMiLCJib3hTaGFkb3ciXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7OztlQUVlO0FBQ1hBLEVBQUFBLElBQUksRUFBRTtBQUNGQyxJQUFBQSxTQUFTLEVBQUVDLG1CQUFPQyxJQURoQjtBQUVGQyxJQUFBQSxTQUFTLEVBQUVGLG1CQUFPQyxJQUZoQjtBQUdGRSxJQUFBQSxXQUFXLEVBQUVILG1CQUFPQztBQUhsQixHQURLO0FBTVhHLEVBQUFBLElBQUksRUFBRTtBQUNGQyxJQUFBQSxNQUFNLEVBQUU7QUFETixHQU5LO0FBU1hMLEVBQUFBLE1BQU0sRUFBRSxDQUFDLFNBQUQsRUFBWSxTQUFaLEVBQXVCLFNBQXZCLEVBQWtDLFNBQWxDLEVBQTZDLFNBQTdDLENBVEc7QUFVWE0sRUFBQUEsT0FBTyxFQUFFO0FBQ0xDLElBQUFBLFVBQVUsRUFBRSxTQURQO0FBRUxDLElBQUFBLEtBQUssRUFBRSxTQUZGO0FBR0xDLElBQUFBLFFBQVEsRUFBRSxTQUhMO0FBSUxDLElBQUFBLFlBQVksRUFBRSxDQUpUO0FBS0xDLElBQUFBLFNBQVMsRUFBRTtBQUxOO0FBVkUsQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBjb2xvcnMgZnJvbSAnLi9jb2xvcnMnO1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gICAgYXhpczoge1xuICAgICAgICB0ZXh0Q29sb3I6IGNvbG9ycy50ZXh0LFxuICAgICAgICB0aWNrQ29sb3I6IGNvbG9ycy50ZXh0LFxuICAgICAgICBsZWdlbmRDb2xvcjogY29sb3JzLnRleHQsXG4gICAgfSxcbiAgICBncmlkOiB7XG4gICAgICAgIHN0cm9rZTogJyMwNzM2NDInLFxuICAgIH0sXG4gICAgY29sb3JzOiBbJyMwMGIyYjAnLCAnIzI0ZGVhZCcsICcjZDlkMzU2JywgJyNmMWM0YzInLCAnI2RmYmJlOCddLFxuICAgIHRvb2x0aXA6IHtcbiAgICAgICAgYmFja2dyb3VuZDogJyMwNzNjNDknLFxuICAgICAgICBjb2xvcjogJyNiZWQwZDInLFxuICAgICAgICBmb250U2l6ZTogJzEuNHZtaW4nLFxuICAgICAgICBib3JkZXJSYWRpdXM6IDAsXG4gICAgICAgIGJveFNoYWRvdzogJzAgMXB4IDNweCByZ2JhKDAsIDAsIDAsIDAuNSknLFxuICAgIH0sXG59O1xuIl19