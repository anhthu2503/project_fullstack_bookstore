import React from 'react';

const carousel = () => {
    return (
        <div>
            <div id="carousel" class="carousel slide p-lg-0" data-ride="carousel">


                <ol class="carousel-indicators">
                    <li data-target="#carousel" data-slide-to="0" class="active"></li>
                    <li data-target="#carousel" data-slide-to="1"></li>
                    <li data-target="#carousel" data-slide-to="2"></li>
                    <li data-target="#carousel" data-slide-to="3"></li>
                </ol>


                <div class="carousel-inner">
                    <div class="carousel-item active">
                        <img src="images/1540_new.jpg" alt="Los Angeles" width="1100" height="500"/>
                    </div>
                    <div class="carousel-item">
                        <img src="images/1545_new.jpg" alt="Chicago" width="1100" height="500"/>
                    </div>
                    <div class="carousel-item">
                        <img src="images/1525_new.jpg" alt="New York" width="1100" height="500"/>
                    </div>
                    <div class="carousel-item">
                        <img src="images/1522_new.jpg" alt="New York" width="1100" height="500"/>
                    </div>
                </div>


                <a class="carousel-control-prev" href="#carousel" data-slide="prev">
                    <span class="carousel-control-prev-icon"></span>
                </a>
                <a class="carousel-control-next" href="#carousel" data-slide="next">
                    <span class="carousel-control-next-icon"></span>
                </a>
            </div>
        </div>
    );
};

export default carousel;