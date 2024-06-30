import React from 'react';

import classNames from 'classnames/bind';
import style from './style.module.scss';
const cx = classNames.bind(style);

import type {
  CSS_DISPLAY_FLEX_DIRECTION,
  OVER_RIDABLE_PROPS,
} from '../../types';

type BaseProps = {
  children?: React.ReactNode;
  flexDirection?: CSS_DISPLAY_FLEX_DIRECTION;
};

const DEFAULT_ELEMENT = 'div';

type Props<T extends React.ElementType> = OVER_RIDABLE_PROPS<T, BaseProps>;

function Flex<T extends React.ElementType = typeof DEFAULT_ELEMENT>(
  { as, children, flexDirection, className, ...props }: Props<T>,
  ref: React.Ref<React.ElementRef<typeof DEFAULT_ELEMENT>>,
) {
  const ELEMENT = as || DEFAULT_ELEMENT;

  return (
    <ELEMENT
      {...props}
      ref={ref}
      className={cx('flex', flexDirection, className)}
    >
      {children}
    </ELEMENT>
  );
}

export type FlexProps = Props<typeof DEFAULT_ELEMENT>;
export default React.forwardRef(Flex) as typeof Flex;
