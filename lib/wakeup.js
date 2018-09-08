const wol = require('wake_on_lan');

module.exports = function (macAddress) {
    return new Promise((resolve, reject) => {
        wol.wake(macAddress, function(error) {
            if (error) {
                reject(error);
            } else {
                resolve();
            }
        });
    });
};
