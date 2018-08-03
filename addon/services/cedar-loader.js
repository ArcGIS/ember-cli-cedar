import Service from '@ember/service';
import { getOwner } from '@ember/application';
import { Promise, allSettled, resolve } from 'rsvp';
import cedar from 'cedar';

// TODO: move these to utils and test

// lazy load a script
function loadScript(src) {
  return new Promise(resolve => {
    const script = document.createElement('script');
    script.onload = resolve;
    script.src = src;    
    document.head.appendChild(script);
  });
}

// lazy load a stylesheet
function loadStylesheet(href) {
  return new Promise(resolve => {
    const link = document.createElement('link');
    link.onload = resolve;
    link.rel = 'stylesheet'
    link.type = 'text/css';
    link.href = href;
    document.head.appendChild(link);
  });
}

function loadAmChartsFiles(path, fileNames) {
  // first have to load the main amCharts script
  // which by convention MUST be the first file
  const amchartsFileName = fileNames.shift();
  return loadScript(`${path}/${amchartsFileName}`)
  .then(() => {
    // load the remaining scripts
    return allSettled(fileNames.map(fileName => {
      const isScript = /\.js$/.test(fileName);
      return isScript
        ? loadScript(`${path}/${fileName}`)
        : loadStylesheet(`${path}/${fileName}`);
    }));  
  });  
}

export default Service.extend({
  loadDependencies() {
    if (window.AmCharts) {
      // at least amCharts dependency is loaded
      // for now, we assume that means that they all are
      // TODO: also use a loading flag in case is running?
      // TODO: check if all other imports are loaded to,
      // and load them if they are not?
      return resolve(cedar);
    } else {
      // load all the amCharts scripts
      // NOTE: the amCharts path is set in contentFor('head')
      const path = window && window.AmCharts_path;
      // TODO: what to do if no path? reject?

      // get required resources from config
      const ENV = getOwner(this).resolveRegistration('config:environment');
      const imports = ENV && ENV.cedar && ENV.cedar.amCharts && ENV.cedar.amCharts.imports;
      // TODO: what to do if no imports? resolve? reject?

      return loadAmChartsFiles(path, imports.concat())
      .then(() => { return cedar });
    }
  }
});
