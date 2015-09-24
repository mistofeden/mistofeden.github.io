/* globals Cookies */
(function(){
    'use strict';
    var $overlay = $('.overlay'),
        $modal = $('.overlay .modal'),
        $btnLegalAge = $('.overlay #legalage'),
        $btnNotLegalAge = $('.overlay #notlegalage'),
        cookieLegal = Cookies.get('legalage');

    if(cookieLegal !== 'legal'){
        $overlay.css('display', 'block');
        setTimeout(function(){
            $modal.modal({backdrop: 'static', keyboard: false});
            $modal.modal('show');
            $btnLegalAge.on('click', function(){
                Cookies.set('legalage', 'legal');
                $modal.modal('toggle');
                $overlay.css('display', 'none');
            });
            $btnNotLegalAge.on('click', function(){
                window.location = 'http://www.google.com/';
            });
        }, 1000);
    }

}());
