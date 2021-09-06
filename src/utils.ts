const parseNumber = (num) => parseFloat(num);

export function getStyles(
  size?: string,
  pull?: string,
  fw?: boolean,
): { [k: string]: string } {
  let float;
  let width;
  const height = '1em';
  let lineHeight;
  let fontSize;
  let textAlign;
  let verticalAlign = '-.125em';
  const overflow = 'visible';

  if (fw) {
    textAlign = 'center';
    width = '1.25em';
  }

  if (pull) {
    float = pull;
  }

  if (size) {
    if (size === 'lg') {
      fontSize = '1.33333em';
      lineHeight = '.75em';
      verticalAlign = '-.225em';
    } else if (size === 'xs') {
      fontSize = '.75em';
    } else if (size === 'sm') {
      fontSize = '.875em';
    } else {
      fontSize = size.replace('x', 'em');
    }
  }

  return {
    float,
    width,
    height,
    'line-height': lineHeight,
    'font-size': fontSize,
    'text-align': textAlign,
    'vertical-align': verticalAlign,
    'transform-origin': 'center',
    overflow,
  };
}

export function getTransform(
  scale: string | number | Date,
  translateX: string | number | Date,
  translateY: string | number | Date,
  rotate?: string | number | Date,
  flip?: string | number,
  translateTimes = 1,
  translateUnit = '',
  rotateUnit = '',
): string {
  let flipX = 1;
  let flipY = 1;

  if (flip) {
    if (flip === 'horizontal') {
      flipX = -1;
    } else if (flip === 'vertical') {
      flipY = -1;
    } else {
      flipX = flipY = -1;
    }
  }

  return [
    `translate(${parseNumber(translateX) * translateTimes}${translateUnit},${parseNumber(translateY) * translateTimes}${translateUnit})`,
    `scale(${flipX * parseNumber(scale)},${flipY * parseNumber(scale)})`,
    rotate && `rotate(${rotate}${rotateUnit})`,
  ]
    .join(' ');
}
