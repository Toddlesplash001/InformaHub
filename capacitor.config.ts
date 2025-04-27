
import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'app.lovable.b70c9361470842beab51a63521388d2a',
  appName: 'trendspot-news-hub',
  webDir: 'dist',
  server: {
    url: 'https://b70c9361-4708-42be-ab51-a63521388d2a.lovableproject.com?forceHideBadge=true',
    cleartext: true
  },
  android: {
    buildOptions: {
      keystorePath: undefined,
      keystorePassword: undefined,
      keystoreAlias: undefined,
      keystoreAliasPassword: undefined,
    }
  }
};

export default config;
