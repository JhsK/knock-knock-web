import { createContext, ReactNode, useContext, useState } from "react";
import { createPortal } from "react-dom";

const PortalContext = createContext<HTMLDivElement | null>(null);

interface PortalProviderProps {
  children: ReactNode;
}

function PortalProvider({ children }: PortalProviderProps) {
  const [portalContainerRef, setPortalContainerRef] =
    useState<HTMLDivElement | null>(null);

  return (
    <PortalContext.Provider value={portalContainerRef}>
      {children}
      <div
        id="portal-container"
        ref={(elem) => {
          if (portalContainerRef === null && elem !== null) {
            setPortalContainerRef(elem);
          }
        }}
      />
    </PortalContext.Provider>
  );
}

interface PortalConsumerProps {
  children: ReactNode;
}

function PortalConsumer({ children }: PortalConsumerProps) {
  const portalContainerRef = useContext(PortalContext);

  if (!portalContainerRef) return <></>;

  return createPortal(children, portalContainerRef);
}

export const GlobalPortal = {
  Provider: PortalProvider,
  Consumer: PortalConsumer,
};
