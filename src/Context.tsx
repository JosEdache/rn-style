import React, {createContext, useContext} from 'react';

interface StyleContextValue {
  fontFamily?: string;
}

interface StyleContextProps {
  children?: React.ReactNode;
  value?: StyleContextValue;
}

export const StyleContext = createContext<StyleContextValue>({});
export const StyleConsumer = StyleContext.Consumer;

export function StyleProvider(props: StyleContextProps) {
  const {children, value = {}} = props;
  return (
    <StyleContext.Provider value={value}>{children}</StyleContext.Provider>
  );
}

export const useStyleContext = () => useContext(StyleContext);
