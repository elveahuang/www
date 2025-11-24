import '@/pages/captcha.css';

const SimpleCaptcha = function () {};

SimpleCaptcha.defaults = {
    width: 600,
    callback: false,
    limit: 3,
};

SimpleCaptcha.prototype.init = function (options) {
    this.options = options;
};

SimpleCaptcha.prototype.reset = function (options) {
    this.options = options;
};

SimpleCaptcha.prototype.check = function (options) {
    this.options = options;
    fetch("/api/captcha", {position, width).then();
    if (false) {
        callback
    }
};

SimpleCaptcha.init({
    callback: function (result) {
        if (result) {
            console.log('success');
        } else {
            console.log('fail');
        }
    },
});
