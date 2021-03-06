window.onload = function(e){ 
    TweenMax.set(['#headshot', '#title', '#subtitle'], {
        y: 50
    });
    TweenMax.set(['#wave'], {
        transform: 'rotate(-45)',
    });
    TweenMax.to(['#wave'], .3, {
        transform: 'rotate(0)',
        delay: 3.2,
    });
    TweenMax.to('#loading', .2, {
        y: 25,
        autoAlpha: 0,
        delay: 3,
        onComplete: () => {
            let introArr = ['#headshot', '#title', '#subtitle'];
            introArr.forEach((el, i) => {
                if (i !== introArr.length -1) {
                    TweenMax.to(el, .45, {
                        y: 0,
                        autoAlpha: 1,
                        delay: i*.1
                    });
                }
                else {
                    TweenMax.to(el, .6, {
                        y: 0,
                        autoAlpha: 1,
                        delay: i*.15, 
                        onComplete: () => {
                            TweenMax.to('#info', .6, {
                                autoAlpha: 1,
                            });
                            TweenMax.to('#links', .6, {
                                autoAlpha: 1,
                                delay: .35
                            });
                        }
                    });
                }
            })
        }
    });
}