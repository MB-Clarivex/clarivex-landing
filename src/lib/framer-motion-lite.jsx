import React from 'react';

const MOTION_PROPS = new Set([
  'animate',
  'exit',
  'initial',
  'layout',
  'layoutId',
  'transition',
  'variants',
  'viewport',
  'whileHover',
  'whileInView',
  'whileTap',
  'whileFocus',
  'whileDrag',
  'drag',
  'dragConstraints',
  'dragElastic',
  'dragMomentum',
  'dragTransition',
]);

const cache = new Map();

function createMotionComponent(tag) {
  if (cache.has(tag)) {
    return cache.get(tag);
  }

  const Component = React.forwardRef(({ children, ...props }, ref) => {
    const cleanProps = { ref };

    for (const [key, value] of Object.entries(props)) {
      if (!MOTION_PROPS.has(key)) {
        cleanProps[key] = value;
      }
    }

    return React.createElement(tag, cleanProps, children);
  });

  Component.displayName = `Motion.${tag}`;
  cache.set(tag, Component);
  return Component;
}

export const motion = new Proxy(
  {},
  {
    get(_, tag) {
      return createMotionComponent(tag);
    },
  }
);

export function AnimatePresence({ children }) {
  return <>{children}</>;
}
