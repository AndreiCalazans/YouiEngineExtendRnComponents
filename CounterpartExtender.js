import React, { useRef, forwardRef, useImperativeHandle, useEffect } from 'react';
import { NativeModules, findNodeHandle, NativeEventEmitter } from 'react-native';

const CounterpartExtensionEmitter = new NativeEventEmitter(
    NativeModules.CounterpartExtension
);

function whenTag(parentTag, callback) {
  return ({ tag, index }) => parentTag == tag && callback(index);
} 

export const CounterpartExtender = forwardRef(({
  component,
  onListLostFocus,
  onListGainedFocus,
  onFocusChanged,
  ...remainingProps
}, ref) => {
  const compRef = useRef(null);
  // Send the ref back up to parent
  useImperativeHandle(ref, () => compRef.current);
  const Comp = component;

    useEffect(() => {
      const listTag = findNodeHandle(compRef.current);
      NativeModules.CounterpartExtension.extendCounterpart(listTag);

      const listeners = [];

      if (onListLostFocus) {
        listeners.push(CounterpartExtensionEmitter.addListener(
          "ListLostFocus",
          whenTag(listTag, onListLostFocus)
        ));
      }

      if (onListGainedFocus) {
        listeners.push(CounterpartExtensionEmitter.addListener(
          "ListGainedFocus",
          whenTag(listTag, onListGainedFocus)
        ));
      }

      if (onFocusChanged) {
        listeners.push(CounterpartExtensionEmitter.addListener(
          "ListChangedFocus",
          whenTag(listTag, onFocusChanged)
        ));
      }

      return () => listeners.forEach(listener => listener.remove());
      
    }, []);

  return <Comp ref={compRef}  {...remainingProps} />
})
