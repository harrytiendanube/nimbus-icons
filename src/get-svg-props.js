const sizeMap = {
  small: 16,
  medium: 32,
  large: 64,
  fixed: "1em",
};

export default function getSvgProps({
  "aria-label": ariaLabel,
  size,
  verticalAlign,
  svgDataByHeight,
}) {
  const height = sizeMap[size] || size;
  const naturalHeight = closestNaturalHeight(
    Object.keys(svgDataByHeight),
    height
  );
  const naturalWidth = svgDataByHeight[naturalHeight].width;
  const width = Number.isInteger(height)
    ? height * (naturalWidth / naturalHeight)
    : height;
  const path = svgDataByHeight[naturalHeight].path;

  return {
    "aria-hidden": ariaLabel ? "false" : "true",
    "aria-label": ariaLabel,
    role: "img",
    viewBox: `0 0 ${naturalWidth} ${naturalHeight}`,
    width,
    height,
    fill: "currentColor",
    style: {
      display: "inline-block",
      userSelect: "none",
      verticalAlign,
    },
    dangerouslySetInnerHTML: { __html: path },
  };
}

function closestNaturalHeight(naturalHeights, height) {
  return naturalHeights
    .map((naturalHeight) => parseInt(naturalHeight, 10))
    .reduce(
      (acc, naturalHeight) => (naturalHeight <= height ? naturalHeight : acc),
      naturalHeights[0]
    );
}
