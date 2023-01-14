import Menu from './Menu.js';
import Order from './Order.js';
import Router from './Router.js';

// Request persistance storage
(async function() {
    // note that navigator.storage is not available in un-secured context.
    // so when running locally, run with localhost:3000 instead of X.X.X.X:3000
    if (navigator.storage && navigator.storage.persist) {
        const isAlreadyPersistent = await navigator.storage.persisted();
        if (!isAlreadyPersistent) {
            const result = await navigator.storage.persist();
            console.log(`Was Persistent Storage Request granted? ${result}`);
        } else {
            console.log(`Persistent Storage already granted`)
        }
    }
  }
)();

(async function() {
    if (navigator.storage && navigator.storage.estimate) {
        const q = await navigator.storage.estimate();
        console.log(`quota available: ${parseInt(q.quota/1024/1024)}MiB`);
        console.log(`quota usage: ${q.usage/1024}KiB`);
    }
}
)();

window.addEventListener("DOMContentLoaded", () => {
    Router.init();
    Menu.load();
    Order.render();
 } );
