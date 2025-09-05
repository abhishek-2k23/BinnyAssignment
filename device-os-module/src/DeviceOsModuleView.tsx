import { requireNativeView } from 'expo';
import * as React from 'react';

import { DeviceOsModuleViewProps } from './DeviceOsModule.types';

const NativeView: React.ComponentType<DeviceOsModuleViewProps> =
  requireNativeView('DeviceOsModule');

export default function DeviceOsModuleView(props: DeviceOsModuleViewProps) {
  return <NativeView {...props} />;
}
