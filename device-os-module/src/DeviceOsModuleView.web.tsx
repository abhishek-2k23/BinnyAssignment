import * as React from 'react';

import { DeviceOsModuleViewProps } from './DeviceOsModule.types';

export default function DeviceOsModuleView(props: DeviceOsModuleViewProps) {
  return (
    <div>
      <iframe
        style={{ flex: 1 }}
        src={props.url}
        onLoad={() => props.onLoad({ nativeEvent: { url: props.url } })}
      />
    </div>
  );
}
