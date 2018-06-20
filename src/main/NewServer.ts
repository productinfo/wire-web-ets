/*
 * Wire
 * Copyright (C) 2018 Wire Swiss GmbH
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with this program. If not, see http://www.gnu.org/licenses/.
 *
 */

import * as Hapi from 'hapi';
import {ServerConfig} from './config';
import InstanceService from './InstanceService';

class Server {
  private config: ServerConfig;
  private instanceService: InstanceService;
  private server: Hapi.Server | undefined;

  constructor(config: ServerConfig) {
    this.config = config;
    this.instanceService = new InstanceService();
    this.init();
  }

  init() {}

  async stop(): Promise<void> {
    if (this.server) {
      this.server.stop();
      this.server = undefined;
    } else {
      throw new Error('Server is not running.');
    }
  }
}

export default Server;
