export function composeInitialStyle<P, S>(props: P, style: S, ctx: any = {}) {
  if (typeof style === 'object') {
    return style;
  } else if (typeof style === 'function') {
    return style(props, ctx);
  }
  return undefined;
}

export default composeInitialStyle;
