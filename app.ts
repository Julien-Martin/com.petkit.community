'use strict';

import Homey from 'homey';

module.exports = class Petkit extends Homey.App {

  /**
   * onInit is called when the app is initialized.
   */
  async onInit() {
    this.log('Petkit has been initialized');
  }

};
