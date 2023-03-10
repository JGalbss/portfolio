import { FC, ReactNode } from 'react';
import * as RadixTooltip from '@radix-ui/react-tooltip';

/* Props */
type TooltipProps = {
  className?: string;
  content: ReactNode;
  children: ReactNode;
};

/* Component */
const Tooltip: FC<TooltipProps> = ({ className, content, children }) => {
  return (
    <RadixTooltip.Provider delayDuration={100}>
      <RadixTooltip.Root>
        <RadixTooltip.Trigger>{children}</RadixTooltip.Trigger>
        <RadixTooltip.Portal>
          <RadixTooltip.Content className={className}>{content}</RadixTooltip.Content>
        </RadixTooltip.Portal>
      </RadixTooltip.Root>
    </RadixTooltip.Provider>
  );
};

export default Tooltip;
