
/* Import all modules that can be concated, eg. ValueConverters, CustomElements etc, for bundling.
 * Those also need to be added to spoonx.js 'importsToAdd' and 'jsResources' and
 * the package.json's' "aurelia.build.resources" (there without extension if view/view-model and with
 * .html extension for views without view-model).
*/
// import {AuthFilterValueConverter} from './authFilterValueConverter'; // eslint-disable-line no-unused-vars
import {Config as ViewManager}     from 'aurelia-view-manager';
import {AutoCompleteCustomElement} from './component/autocomplete';
import {getLogger}                 from 'aurelia-logging';

export function configure(aurelia, configCallback) {
  aurelia.container.get(ViewManager).configureNamespace('spoonx/autocomplete', {
    location: './{{framework}}/{{view}}.html'
  });

  if (typeof configCallback === 'function') {
    configCallback();
  }

  aurelia.globalResources('./component/autocomplete');
}

const logger = getLogger('aurelia-autocomplete');

export {
  logger
};