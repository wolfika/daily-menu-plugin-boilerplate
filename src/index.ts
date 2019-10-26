import { Plugin as PluginAbstraction } from '../common/src/abstractions/Plugin';
import { HttpService } from '../common/src/abstractions/HttpService';

export default class PluginBoilerplate implements PluginAbstraction {
  name: 'My daily-menu plugin';

  constructor(private readonly httpService: HttpService) {}

  async provide(): Promise<string> {
    return 'Hello World!';
  }
}
