import { requireNativeModule } from 'expo-modules-core';
import { DeviceOsModuleType } from './DeviceOsModule.types';

const DeviceOsModule = requireNativeModule<DeviceOsModuleType>('DeviceOsModule');

export function getOS(): string {
  return DeviceOsModule.getOS();
}
