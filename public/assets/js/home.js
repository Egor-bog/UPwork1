const redBack = 'assets/images/cards_zipped/red_back.png';
const redBackBordered = 'assets/images/cards_zipped/red_back_bordered.jpg';
const selectedCards = new Set();
const valueToImageId = {};
let chart = null;
let slider = null;


$('document').ready(function () {
    setSlider();

    class Card {
        constructor(imageId, src = '', value = null) {
            this.imageId = imageId;
            this.setNewCard(src, value);
            this.setOnClick();
        }

        setNewCard(src, value) {
            selectedCards.add(value);
            this.src = src || redBack;
            this.value = value;
            this.setSrc();
        }

        serverValue() {
            if (!this.value) { return null; }
            return this.value.slice(-1) + this.value.slice(0, -1)
        }

        setSrc() {
            $('#' + this.imageId)[0].src = this.src;
        }

        // set a board's card onclick
        setOnClick() {
            $('#' + this.imageId).click(() => {
                if (this.value) {
                    selectedCards.delete(this.value);
                    const cardToRestore = $(valueToImageId[this.value]);
                    cardToRestore.css("visibility", "visible");
                    this.src = redBack;
                    this.value = null;
                    this.setSrc();
                }
                setNextCardBorder();
                setEquity();
            })
        }
    }

    class CardHolder {
        constructor(imageIds = []) {
            this.cards = imageIds.map(id => new Card(id));
        }

        exportValues() {
            return this.cards.map(c => c.serverValue()).filter(a => a);
        }
    }

    const p1 = new CardHolder(['player1-1-card','player1-2-card']);
    const p2 = new CardHolder(['player2-1-card','player2-2-card']);
    const table = new CardHolder(['board-1-card','board-2-card','board-3-card','board-4-card','board-5-card']);
    const allHolders = [p1, p2, table];
    let lastPlayingCardsCalced = null;

    function setNextCardBorder() {
        const cardIds = allHolders.map((cardHolder) => cardHolder.cards.map(c => c.imageId)).flat(2)
        cardIds.forEach((cId) => {
            if ($('#' + cId)[0].src.endsWith(redBackBordered)) {
                $('#' + cId)[0].src = redBack;
            }
        })
        const card = getNextCard();
        if (card) {
            $('#' + card.imageId)[0].src = redBackBordered;
        }
    }

    function getNextCard(selectedValue) {
        let cardToReturn = null;
        // card is on board
        if (selectedCards.has(selectedValue)) {
            return null;
        }
        // checking next card position
        allHolders.forEach(holder => {
            holder.cards.forEach(card => {
                if (!cardToReturn && !card.value) {
                    cardToReturn = card;
                }
            })
        })

        return cardToReturn;
    }

    // set onclick for deck
    ['H', 'D', 'S', 'C'].forEach((suit) => {
        ['A', 2, 3, 4, 5, 6, 7, 8, 9, '10', 'J', 'Q', 'K'].forEach((i) => {
            let imageSelector = '.' + i.toString() + suit;
            const imageQuery = $(imageSelector);
            const image = imageQuery[0];
            const imageValue = image.getAttribute('data-id');

            valueToImageId[imageValue] = imageSelector;

            imageQuery.click(function () {
                const nextCard = getNextCard(imageValue);
                if (nextCard) {
                    nextCard.setNewCard(image.src, imageValue);
                    imageQuery.css("visibility", "hidden");
                    setNextCardBorder();
                }

                setEquity();
            });
        })
    })

    function setSlider() {
        if (navigator.msMaxTouchPoints) {

            $('#slider').addClass('ms-touch');

            $('#slider').on('scroll', function() {
                $('.slide-image').css('transform','translate3d(-' + (100-$(this).scrollLeft()/6) + 'px,0,0)');
            });

        } else {

            slider = {

                el: {
                    slider: $("#slider"),
                    holder: $(".holder"),
                    imgSlide: $(".slide-image")
                },

                slideWidth: $('#slider').width(),
                touchstartx: undefined,
                touchmovex: undefined,
                movex: undefined,
                index: 0,
                longTouch: undefined,

                init: function() {
                    this.bindUIEvents();
                },

                bindUIEvents: function() {

                    this.el.holder.on("touchstart", function(event) {
                        slider.start(event);
                    });

                    this.el.holder.on("touchmove", function(event) {
                        slider.move(event);
                    });

                    this.el.holder.on("touchend", function(event) {
                        slider.end(event);
                    });

                },

                start: function(event) {
                    // Test for flick.
                    this.longTouch = false;
                    setTimeout(function() {
                        this.longTouch = true;
                    //    OLD CODE: 250
                    }.bind(this), 20);

                    // Get the original touch position.
                    this.touchstartx =  event.originalEvent.touches[0].pageX;

                    // The movement gets all janky if there's a transition on the elements.
                    $('.animate').removeClass('animate');
                },

                move: function(event) {
                    // Continuously return touch position.
                    this.touchmovex =  event.originalEvent.touches[0].pageX;
                    // Calculate distance to translate holder.
                    this.movex = this.index*this.slideWidth + (this.touchstartx - this.touchmovex);
                    // Defines the speed the images should move at.
                    var panx = 100-this.movex/6;
                    if (this.movex < 600) { // Makes the holder stop moving when there is no more content.
                        this.el.holder.css('transform','translate3d(-' + this.movex + 'px,0,0)');
                    }
                    if (panx < 100) { // Corrects an edge-case problem where the background image moves without the container moving.
                        this.el.imgSlide.css('transform','translate3d(-' + panx + 'px,0,0)');
                    }
                },

                end: function(event) {
                    // Calculate the distance swiped.
                    var absMove = Math.abs(this.index*this.slideWidth - this.movex);
                    // Calculate the index. All other calculations are based on the index.

                    // OLD CODE: if (absMove > this.slideWidth/2 || this.longTouch) {
                    if (absMove > 120 && this.longTouch) {
                        if (this.movex > this.index*this.slideWidth && this.index < 3) {
                            this.index++;
                        } else if (this.movex < this.index*this.slideWidth && this.index > 0) {
                            this.index--;
                        }
                    }
                    // Move and animate the elements.
                    this.el.holder.addClass('animate').css('transform', 'translate3d(-' + this.index*this.slideWidth + 'px,0,0)');
                    this.el.imgSlide.addClass('animate').css('transform', 'translate3d(-' + 100-this.index*50 + 'px,0,0)');

                },
                setIndexAndScroll: function(newIndex) {
                    this.index = newIndex
                    // Move and animate the elements.
                    this.el.holder.addClass('animate').css('transform', 'translate3d(-' + this.index*this.slideWidth + 'px,0,0)');
                    this.el.imgSlide.addClass('animate').css('transform', 'translate3d(-' + 100-this.index*50 + 'px,0,0)');
                }

            };

            slider.init();
        }
    }

    function sendAjax(times) {
        const params = {
            cardsPlayer1: p1.exportValues(),
            cardsPlayer2: p2.exportValues(),
            shared: table.exportValues(),
            times,
            deadCards: []
        }
        const queryString = Object.keys(params).map(key => {
            if (Array.isArray(params[key])) {
                return params[key].map(arrValue => key + '[]=' + arrValue).join('&');
            }
            return key + '=' + params[key];
        }).join('&');
        return fetch("/api/calc?" + queryString, {"method": "get"}).then(r => r.json());
    }

    function setEquity() {
        const playersCards = [].concat(p1.exportValues()).concat(p2.exportValues());
        const allHolderCards = [].concat(playersCards).concat(table.exportValues());
        lastPlayingCardsCalced = allHolderCards;
        if (playersCards.length === 4) {
            sendAjax(1).then(res => {
                if (JSON.stringify(lastPlayingCardsCalced) == JSON.stringify(allHolderCards)) {
                    $('#player1-eq')[0].innerHTML = "Win: " + (res.player1.running['100'] || '0') + '% <br> ' + "Tie: " + (res.player1.running['50'] || '0') + '%';
                    $('#player2-eq')[0].innerHTML = "Win: " + (res.player2.running['100'] || '0') + '% <br> ' + "Tie: " + (res.player2.running['50'] || '0') + '%';
                }
            });


            $('.calc-btn').removeAttr('disabled');
            $('.calc-btn').removeClass('disabled-btn');
        } else {
            $('#player1-eq')[0].innerHTML = "N\\A";
            $('#player2-eq')[0].innerHTML = "N\\A";
            $('.calc-btn').attr('disabled','disabled')
            $('.calc-btn').addClass('disabled-btn');
        }
        removeChart(); // if cards changed - chart isn't relevant
    }

    function initChart(chartData) {
        chart = anychart.column();

        // turn on chart animation
        chart.animation(true);

        // set chart title text settings
        chart.title('Running results');

        // create area series with passed data
        var series = chart.column(chartData);

        // set series tooltip settings
        series.tooltip().titleFormat('{%X}');

        series
            .tooltip()
            .position('center-top')
            .anchor('center-bottom')
            .offsetX(0)
            .offsetY(5)
            .format('%{%Value}{groupsSeparator: }');

        // set scale minimum
        chart.yScale().minimum(0);
        chart.yScale().maximum(100);

        // set yAxis labels formatter
        chart.yAxis().labels().format('%{%Value}{groupsSeparator: }');

        // tooltips position and interactivity settings
        chart.tooltip().positionMode('point');
        chart.interactivity().hoverMode('by-x');

        // axes titles
        chart.xAxis().title('Pot share');
        chart.yAxis().title('Frequency');

        // set container id for the chart
        chart.container('results');

        // initiate chart drawing
        chart.draw();
        $("#results")[0].scrollIntoView();
    }

    function removeChart(spinner = false) {
        if (chart) {
            chart.remove();
        }
        $('#results')[0].innerHTML = spinner ? '<img class="spinner" src="assets/images/spinner.gif"/>' : '';
    }

    function sendAjaxAndSetResults(times) {
        removeChart(true);
        sendAjax(times).
        then(a => {

            const humanMapping = {'0': 'Nothing',
                '25': '¼ Pot',
                '75': '¾ Pot',
                '50': '½ Pot',
                '100': 'All pots',
                '33.33333333333333': '⅓ Pot',
                '16.666666666666664': '⅙ Pot',
                '66.66666666666666': '⅔ Pot',
                '83.33333333333334': '⅚ Pot'}
            let text = 'Running results: \n';
            let chartData = [];
            Object.keys(a.player1.running).sort( (a,b) => parseFloat(a) - parseFloat(b)).forEach(res => {
                chartData.push([(humanMapping[res] || (res + '% Pot')), a.player1.running[res]])
                text += (humanMapping[res] || (res + '% Pot')) + ' is ' + a.player1.running[res] + '% '
                    + '\n';
            })
            $('#results')[0].innerHTML = '';
            initChart(chartData);

            // old method:
            // b[0].innerHTML = text;

        });

    }

    setNextCardBorder();
    $('.suit-select').click((event) => {
        slider.setIndexAndScroll(parseInt(event.currentTarget.getAttribute('data-index')))
    })
    $('#run-twice').click(() => {
        sendAjaxAndSetResults(2)
    })
    $('#run-three').click(() => {
        sendAjaxAndSetResults(3)
    })

});