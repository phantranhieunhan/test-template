import React from 'react'
import { Text, Platform, StyleSheet } from 'react-native'
import {Fonts} from '../constants';
export const typography = () => {
  const oldTextRender = Text.render
  Text.render = function(...args) {
    const origin = oldTextRender.call(this, ...args)
    return React.cloneElement(origin, {
      style: [styles.defaultText, origin.props.style],
    })
  }
}

const styles = StyleSheet.create({
  defaultText: {
    fontFamily: Fonts.Roboto_Slab_Regular,
  }
});