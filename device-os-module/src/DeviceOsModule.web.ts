import { NativeModule, registerWebModule } from 'expo';

import { DeviceOsModuleEvents } from './DeviceOsModule.types';

class DeviceOsModule extends NativeModule<DeviceOsModuleEvents> {
  getOS(): string {
    // Detect OS from user agent
    const userAgent = navigator.userAgent;
    if (/Android/i.test(userAgent)) {
      return 'Android';
    } else if (/iPhone|iPad|iPod/i.test(userAgent)) {
      return 'iOS';
    } else if (/Windows/i.test(userAgent)) {
      return 'Windows';
    } else if (/Mac/i.test(userAgent)) {
      return 'macOS';
    } else if (/Linux/i.test(userAgent)) {
      return 'Linux';
    }
    return 'Unknown';
  }
}

export default registerWebModule(DeviceOsModule, 'DeviceOsModule');
