/*!
 *
 *  Copyright (c) David Bushell | http://dbushell.com/
 *
 */
(function(window, document, undefined)
{

    window.App = (function()
    {

        var _init = false, app = { };

        app.init = function()
        {
            if (_init) {
                return;
            }
            _init = true;

            var nav_open = false,
                $nav = $('#nav'),
                $inner = $('#inner-wrap');

            $('#nav-open-btn').on('click', function()
            {
                if (!nav_open) {
                    $inner.animate({ left: $nav.width() }, 500);
                    nav_open = true;
                    return false;
                }
            });

            $('#nav-close-btn').on('click', function()
            {
                if (nav_open) {
                    $inner.animate({ left: '0' }, 500);
                    nav_open = false;
                    return false;
                }
            });

            $(document.documentElement).addClass('js-ready');
        };

        return app;

    })();

    $.fn.ready(function()
    {
        window.App.init();
    });

})(window, window.document);
