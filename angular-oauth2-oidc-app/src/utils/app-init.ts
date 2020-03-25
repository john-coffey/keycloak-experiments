import { AuthConfigService } from './authconfig.service';

export function initializer(authConfigService: AuthConfigService): () => Promise<any> {
    return (): Promise<any> => {
        return authConfigService.initAuth();
      };
}
