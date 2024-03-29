import { page } from './lib.js'
import { showForecastView } from './views/forecastView.js';
import { showHomeView } from './views/homeView.js';

page('/', showHomeView);
page('/PH1', () => alert('PH1 - I do nothing yet'));
page('/PH2', () => alert('PH2 - I also do nothing yet...'));
page('/forecast', showForecastView);

page.start()

function updateCtx(ctx, next){
    ctx
}