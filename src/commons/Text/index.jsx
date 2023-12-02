import React from 'react';


const FontSize = {
  H1: '30px',
  H2: '24px',
  H3: '20px',
  H4: '16px',
  Body: '14px',
  Label: '12px',
};

const LineHeight = {
  H1: '38px',
  H2: '32px',
  H3: '28px',
  H4: '24px',
  Body: '22px',
  Label: '20px',
};

// H1, H2, H3, H4, Body, Label
const Text = ({
  children,
  type,
  color,
  bold,
  fontSize,
  fontWeight,
  lineHeight,
  center,
  right,
  ml,
  mr,
  mt,
  mb,
  row,
  style,
  className,
  ucfirst,
  uppercase,
  lowercase,
  numberOfLines,
  onClick,
  ...rest
}) => {
  let _fontWeight = 400;
  if (bold) {
    _fontWeight = 600;
  }

  if (fontWeight) {
    _fontWeight = fontWeight;
  }

  let _fontSize = FontSize[0];
  let _lineHeight = LineHeight[0];
  if (type) {
    _fontSize = FontSize[`${type}`];
    _lineHeight = LineHeight[`${type}`];
  }

  if (fontSize) {
    _fontSize = fontSize;
  }
  if (lineHeight) {
    _lineHeight = lineHeight;
  }

  let textAlign = 'left';
  if (center) {
    textAlign = 'center';
  }
  if (right) {
    textAlign = 'right';
  }

  let marginLeft = null;
  if (ml) {
    marginLeft = ml;
  }
  let marginRight = null;
  if (mr) {
    marginRight = mr;
  }

  let marginTop = null;
  if (mt) {
    marginTop = mt;
  }
  let marginBottom = null;
  if (mb) {
    marginBottom = mb;
  }

  let display = 'block';
  if (row) {
    display = 'flex';
  }

  let _children = null;
  if (typeof children === 'string') {
    if (ucfirst) {
      _children = children.charAt(0).toUpperCase() + children.slice(1).toLowerCase();
    } else if (uppercase) {
      _children = children.toUpperCase();
    } else if (lowercase) {
      _children = children.toLowerCase();
    }
  }
  const styleNumberOfLines = numberOfLines
    ? {
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        display: '-webkit-box',
        WebkitBoxOrient: 'vertical',
        WebkitLineClamp: numberOfLines,
      }
    : null;

  return (
    <div
      style={{
        color,
        fontSize: _fontSize,
        fontWeight: _fontWeight,
        lineHeight: _lineHeight,
        textAlign,
        marginLeft,
        marginRight,
        marginTop,
        marginBottom,
        display,
        ...style,
        ...styleNumberOfLines,
      }}
      className={className}
      onClick={onClick}
      {...rest}
    >
      {_children || children}
    </div>
  );
};

export default Text;
