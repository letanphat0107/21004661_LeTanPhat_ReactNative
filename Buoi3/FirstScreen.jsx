import React from 'react';
import { View, Text, Image, ScrollView, Button } from 'react-native';
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
const App = () => {
  return /*#__PURE__*/_jsxs(ScrollView, {
    children: [/*#__PURE__*/_jsx(View, {
      style: {
        width: 335,
        height: 200,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: "#00ccf9"
      },
      children: /*#__PURE__*/_jsx(Image, {
        source: './Image/Ellipse_8.png',
        style: {
          width: 100,
          height: 100
        }
      })
    }), /*#__PURE__*/_jsxs(View, {
      style: {
        width: 335,
        height: 100,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: "#00ccf9"
      },
      children: [/*#__PURE__*/_jsx(Text, {
        style: {
          fontFamily: 'Roboto',
          fontSize: 25,
          fontWeight: 700
        },
        children: "GROW"
      }), /*#__PURE__*/_jsx(Text, {
        style: {
          fontFamily: 'Roboto',
          fontSize: 25,
          fontWeight: 700
        },
        children: "YOUR BUSINESS"
      })]
    }), /*#__PURE__*/_jsx(View, {
      style: {
        width: 335,
        height: 100,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: "#00ccf9"
      },
      children: /*#__PURE__*/_jsx(Text, {
        style: {
          fontFamily: 'Roboto',
          fontSize: 15,
          fontWeight: 700,
          maxWidth: 290,
          textAlign: 'center'
        },
        children: "We will help you to grow your business using online server"
      })
    }), /*#__PURE__*/_jsxs(View, {
      style: {
        width: 335,
        height: 195,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        backgroundColor: "#00ccf9"
      },
      children: [/*#__PURE__*/_jsx(Button, {
        title: "LOGIN",
        color: "#e3c100"
      }), /*#__PURE__*/_jsx(Button, {
        title: "SIGN UP",
        color: "#e3c100"
      })]
    })]
  });
};
export default App;