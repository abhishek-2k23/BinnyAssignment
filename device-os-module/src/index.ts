// Reexport the native module. On web, it will be resolved to DeviceOsModule.web.ts
// and on native platforms to DeviceOsModule.ts
export { default } from './DeviceOsModule';
export { default as DeviceOsModuleView } from './DeviceOsModuleView';
export * from  './DeviceOsModule.types';
