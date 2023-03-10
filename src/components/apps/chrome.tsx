import { FC } from 'react';
import { atom, useRecoilState } from 'recoil';
import App from '@/components/common/dock/app';
import type { AppComponentProps } from '.';
import { AppNames } from '../common/dock';
import Icon from '../common/icons';
import Window from '../common/window';

/* Constants */
const colorClassnames = 'bg-white hover:bg-gray-300';
const name = 'Chrome';

/* States */
const isChromeClosed = atom({
  key: 'chromeClosedState', // unique ID (with respect to other atoms/selectors)
  default: false, // default value (aka initial value)
});

/* Component */

const ChromeApp: FC<AppComponentProps> = () => {
  const [isClosed, setIsClosed] = useRecoilState(isChromeClosed);

  return (
    <App
      icon={<Icon.Chrome width={40} height={40} />}
      colorClassnames={colorClassnames}
      name={name as AppNames}
      onClick={() => setIsClosed(false)}
      isClosed={isClosed}
    />
  );
};

const ChromeWindow: FC<AppComponentProps> = ({ classNames, windowSelected, setWindowSelected }) => {
  const [isClosed, setIsClosed] = useRecoilState(isChromeClosed);

  return (
    <Window
      isClosed={isClosed}
      setWindowSelected={setWindowSelected}
      windowSelected={windowSelected}
      setIsClosed={setIsClosed}
      classNames={classNames}
      name={name}
    >
      <iframe
        title="Chrome Browser"
        src="https://www.google.com/webhp?igu=1"
        width="100%"
        height="100%"
      />
    </Window>
  );
};

const Chrome = {
  app: ChromeApp,
  window: ChromeWindow,
  name: 'Chrome',
};

export default Chrome;
