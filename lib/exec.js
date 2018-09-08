const wakeup = require('./wakeup.js');

module.exports = function (deviceInfo) {
    return new Promise((resolve, reject) => {
        var macAddr = deviceInfo.deviceType.identifier;
        var type = deviceInfo.deviceType.type;
        var value = deviceInfo.state.value;

        console.log('Prepare command for Awox ' + macAddr + ' (' + type + '=' + value +')');

        if (type === 'binary') {
            if (value === 1) {
                return wakeup(macAddr);
            //} else if (value === 0) {
            //    command = shared.commands.off;
            } else {
                return reject('DeviceState value ' + value + ' not managed');
            }
        } else {
            return reject('DeviceType ' + type + ' not managed');
        }
    });
};
