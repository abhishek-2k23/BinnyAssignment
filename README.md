# MyApp: A assignment

A feature-rich React Native application built with Expo, showcasing modern mobile development practices including infinite scrolling, offline capabilities, deep linking, native modules, and comprehensive state management.

## 🚀 Features

### 📱 Core Features
- **Product Catalog**: Display up to 5,000 products with infinite scroll using FlatList
- **Shopping Cart**: Add/remove products with persistent state management
- **User Management**: Fetch and display user data with offline caching
- **Deep Linking**: Navigate to specific users via custom URL schemes
- **Native Module**: Device OS detection using custom native module
- **Authentication**: Secure token management with automatic regeneration
- **Theme Support**: Dark/Light mode based on system preferences

### 🔧 Technical Features
- **Offline Support**: Cached data with network status detection
- **State Management**: Zustand for efficient state handling
- **Component Architecture**: Separated UI and business logic
- **Performance Optimization**: Optimized FlatList with virtualization
- **Secure Storage**: Token storage using Expo SecureStore
- **Network Monitoring**: Real-time network status updates

## 📋 Prerequisites

- Node.js (v18 or higher)
- npm or yarn
- Expo CLI
- Android Studio (for Android development)
- Xcode (for iOS development, macOS only)

## 🛠️ Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/abhishek-2k23/BinnyAssignment
   cd myapp
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Install the custom native module**
   ```bash
   cd device-os-module
   npm install
   cd ..
   ```

4. **Create native files**
   ```bash
   npx expo prebuild

5. **Start the development build**
   ```bash
   npm run android
   ```

## 🏗️ Project Structure

```
myapp/
├── src/
│   ├── app/                    # Expo Router pages
│   │   ├── (tabs)/            # Tab navigation screens
│   │   │   ├── index.tsx      # Home screen
│   │   │   ├── products.tsx   # Products listing
│   │   │   └── cart.tsx       # Shopping cart
│   │   └── user/              # User detail screens
│   ├── components/            # Reusable UI components
│   │   ├── common/           # Common components (Card, Loading)
│   │   ├── product/          # Product-specific components
│   │   ├── token/            # Token management components
│   │   └── ui/               # UI components (ThemedText, ThemedView)
│   ├── hooks/                # Custom React hooks
│   │   ├── useAuthToken.ts   # Token management
│   │   ├── useProducts.ts    # Product data handling
│   │   ├── useUsers.ts       # User data with offline support
│   │   └── useDeepLink.ts    # Deep link handling
│   ├── stores/               # State management
│   │   └── CartStore.tsx     # Zustand cart store
│   └── utils/                # Utility functions
│       ├── api.ts            # API calls
│       ├── cache.ts          # Caching utilities
│       ├── deepLinkHandler.ts # Deep link navigation
│       ├── mock.ts           # Mock data generation
│       └── secureStorage.ts  # Secure storage utilities
├── device-os-module/         # Custom native module
│   ├── android/             # Android native code
│   ├── ios/                 # iOS native code
│   └── src/                 # TypeScript interface
└── assets/                  # Static assets
```

## 🎯 Key Components

### Product Management
- **Infinite Scroll**: Efficiently loads 5,000 products using FlatList virtualization
- **Add to Cart**: Seamless product addition with Zustand state management
- **Performance Optimized**: Uses `getItemLayout`, `removeClippedSubviews`, and batch rendering

### Offline Support
- **Network Detection**: Real-time network status monitoring
- **Data Caching**: Automatic caching of user data using AsyncStorage
- **Fallback Strategy**: Graceful degradation when offline

### Deep Linking
- **URL Scheme**: `myapp://user/{id}` format
- **Navigation**: Automatic routing to user detail pages
- **Error Handling**: Fallback to home screen for invalid links

### Native Module
- **Device OS Detection**: Custom native module for platform identification
- **Cross-Platform**: Works on both Android and iOS
- **TypeScript Support**: Fully typed interface

## 🚀 Available Scripts

### Development
```bash
# recommended
# Run on Android
npm run android

# Run on iOS
npm run ios

```

### Testing
```bash
# Test deep linking (Android)
npm run test-deeplinking:android


# Test deep linking (ios)
npm run test-deeplinking:ios

```

### Deep Link Testing
```bash
# Test user deep link
npx uri-scheme open myapp://user/1 --android

# Test with different user IDs
npx uri-scheme open myapp://user/5 --android
```

## 🔧 Configuration

### Native Module
The custom `DeviceOsModule` provides:
- `getOS()`: Returns the current device operating system
- Cross-platform compatibility
- TypeScript definitions

## 🎨 Theming

The app supports both light and dark themes:
- **Automatic Detection**: Follows system theme preferences
- **Themed Components**: `ThemedText` and `ThemedView` adapt to current theme
- **Consistent UI**: All components respect theme changes

## 📱 State Management

### Zustand Store
- **Cart Management**: Add, remove, and track cart items
- **Persistent State**: Maintains cart state across app sessions
- **Type Safety**: Fully typed with TypeScript

### Key Store Methods
```typescript
const { 
  products,           // Cart items
  addProduct,         // Add item to cart
  removeProduct,      // Remove item from cart
  getTotalPrice,      // Calculate total
  getTotalItems,      // Count items
  isInCart           // Check if item exists
} = useCartStore();
```

## 🔐 Security Features

### Token Management
- **Secure Storage**: Uses Expo SecureStore for sensitive data
- **Auto-Generation**: Creates new tokens on app restart
- **Fallback Strategy**: Handles storage errors gracefully

### Data Protection
- **Encrypted Storage**: Tokens stored with device encryption
- **Network Security**: HTTPS for all API calls
- **Input Validation**: Sanitized deep link parameters

## 🚀 Performance Optimizations

### FlatList Optimization
- **Virtualization**: Only renders visible items
- **Item Layout**: Pre-calculated item dimensions
- **Batch Rendering**: Optimized render cycles
- **Memory Management**: Automatic cleanup of off-screen items

### Caching Strategy
- **AsyncStorage**: Persistent data caching
- **Network Awareness**: Smart cache invalidation
- **Memory Efficiency**: Minimal memory footprint

## 🧪 Testing

### Manual Testing
1. **Products**: Scroll through 5,000 items
2. **Cart**: Add/remove items, verify persistence
3. **Offline**: Test with network disabled
4. **Deep Links**: Test various user IDs
5. **Themes**: Switch between light/dark modes

### Deep Link Testing
```bash
# Test valid user ID
npm run test-deeplinking

# Test invalid user ID (should fallback)
npx uri-scheme open myapp://user/invalid --android
```

## 🐛 Troubleshooting

### Common Issues

1. **Metro bundler issues**
   ```bash
   npx expo start --clear
   ```

2. **Native module not found**
   ```bash
   cd device-os-module && npm install
   cd .. && npm run android
   ```

3. **Deep links not working**
   - Ensure app is installed
   - Check URL scheme format
   - Verify Android manifest configuration

### Debug Mode
Enable debug logging by checking console output for:
- Network status changes
- Token generation
- Deep link handling
- Cache operations






