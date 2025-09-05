import { requireNativeModule } from 'expo-modules-core';
import { DeviceOsModuleType } from './DeviceOsModule.types';

const DeviceOSModule = requireNativeModule<DeviceOsModuleType>('DeviceOSModule');

export function getOS(): string {
  return DeviceOSModule.getOS();
}
