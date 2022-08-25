<template>
  <div>
    <section class="Changes-image">
      <div class="container">
        <div class="row">
          <div class="col-lg-12 col-md-12">
            <div class="slider-container">
              <input type="radio" name="slider" id="item-1" checked />
              <input type="radio" name="slider" id="item-2" />
              <input type="radio" name="slider" id="item-3" />
              <div class="card_customs">
                <label class="card_custom" for="item-1" id="song-1">
                  <img
                    loading="lazy"
                    src="https://images.unsplash.com/photo-1530651788726-1dbf58eeef1f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=882&q=80"
                    alt=""
                    class="img-fluid"
                  />
                </label>
                <label class="card_custom" for="item-2" id="song-2">
                  <img
                    loading="lazy"
                    src="https://images.unsplash.com/photo-1559386484-97dfc0e15539?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1234&q=80"
                    alt=""
                    class="img-fluid"
                  />
                </label>
                <label class="card_custom" for="item-3" id="song-3">
                  <img
                    loading="lazy"
                    src="https://images.unsplash.com/photo-1533461502717-83546f485d24?ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60"
                    alt=""
                    class="img-fluid"
                  />
                </label>
              </div>
              <div class="player">
                <div class="upper-part">
                  <div class="info-area" id="test">
                    <label class="song-info" id="song-info-1">
                      <div class="sub-line">
                        <h3>Manage Customers & Orders</h3>
                        <p>
                          Lorem ipsum dolor sit amet consectetur, adipisicing
                          elit. Odio harum eos consectetur dolore quod
                          accusantium facere, architecto rem reprehenderit
                          magnam molestiae praesentium fugit eius. Mollitia
                          corrupti quas dolorem reiciendis officia.
                        </p>
                      </div>
                    </label>
                    <label class="song-info" id="song-info-2">
                      <div class="sub-line">
                        <h3>Automates Shipping & And Taxes</h3>
                        <p>
                          Lorem ipsum dolor sit amet consectetur, adipisicing
                          elit. Odio harum eos consectetur dolore quod
                          accusantium facere, architecto rem reprehenderit
                          magnam molestiae praesentium fugit eius. Mollitia
                          corrupti quas dolorem reiciendis officia.
                        </p>
                      </div>
                    </label>
                    <label class="song-info" id="song-info-3">
                      <div class="sub-line">
                        <h3>Enhance Customer & Experience</h3>
                        <p>
                          Lorem ipsum dolor sit amet consectetur, adipisicing
                          elit. Odio harum eos consectetur dolore quod
                          accusantium facere, architecto rem reprehenderit
                          magnam molestiae praesentium fugit eius. Mollitia
                          corrupti quas dolorem reiciendis officia.
                        </p>
                      </div>
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
    export default {
        name: "ProductManagement",
    };
</script>

<style scoped>
    section.Changes-image {
        height: 700px;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    
    input[type="radio"] {
        display: none;
    }
    
    .card_custom {
        position: absolute;
        width: 70%;
        height: 500px;
        left: 0;
        right: 0;
        margin: auto;
        transition: transform 0.4s ease;
        cursor: pointer;
    }
    
    .slider-container {
        width: 100%;
        max-width: 800px;
        /* max-height: 600px; */
        height: 100%;
        transform-style: preserve-3d;
        display: flex;
        justify-content: center;
        flex-direction: column;
        align-items: center;
        margin: 0 auto;
    }
    
    .card_customs {
        position: relative;
        width: 100%;
        height: 100%;
        margin-bottom: 20px;
        min-height: 500px;
    }
    
    img {
        width: 100%;
        height: 100%;
        border-radius: 10px;
        object-fit: cover;
    }
    
    label.card_custom img {
        min-height: 356px;
        object-position: center;
        object-fit: cover;
    }
    
    #item-1:checked~.card_customs #song-3,
    #item-2:checked~.card_customs #song-1,
    #item-3:checked~.card_customs #song-2 {
        transform: translatex(-40%) scale(0.8);
        opacity: 0.4;
        z-index: 0;
    }
    
    #item-1:checked~.card_customs #song-2,
    #item-2:checked~.card_customs #song-3,
    #item-3:checked~.card_customs #song-1 {
        transform: translatex(40%) scale(0.8);
        opacity: 0.4;
        z-index: 0;
    }
    
    #item-1:checked~.card_customs #song-1,
    #item-2:checked~.card_customs #song-2,
    #item-3:checked~.card_customs #song-3 {
        transform: translatex(0) scale(1);
        opacity: 1;
        z-index: 1;
    }
    
    #item-1:checked~.card_customs #song-1 img,
    #item-2:checked~.card_customs #song-2 img,
    #item-3:checked~.card_customs #song-3 img {
        box-shadow: 0px 0px 5px 0px rgba(81, 81, 81, 0.47);
    }
    
    .player {
        background-color: #1d3f83;
        border-radius: 8px;
        min-width: 600px;
        padding: 16px 0px;
        /* box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px; */
        box-shadow: 0 0 10px rgb(0 0 0 / 30%);
    }
    
    .upper-part {
        position: relative;
        /* display: flex;
  align-items: center; */
        min-height: 130px;
        overflow: hidden;
    }
    
    .play-icon {
        margin-right: 10px;
    }
    
    .song-info {
        width: 100%;
        display: block;
        padding: 0 18px;
    }
    
    .song-info .title {
        color: #403d40;
        font-size: 14px;
        line-height: 24px;
    }
    
    .sub-line {
        width: 100%;
    }
    
    .sub-line h3 {
        position: relative;
        margin-bottom: 10px;
        text-align: center;
        color: var(--teqo-white);
    }
    
    .sub-line h3::before {
        position: absolute;
        content: "";
        bottom: -5px;
        left: 0;
        right: 0;
        width: 170px;
        height: 5px;
        background-color: var(--teqo-white);
        border-radius: 10px;
        margin: 0 auto;
    }
    
    .sub-line p {
        color: var(--teqo-white);
    }
    
    .subtitle,
    .time {
        font-size: 12px;
        line-height: 16px;
        color: #c6c5c6;
    }
    
    .time {
        font-size: 12px;
        line-height: 16px;
        color: #a5a5a5;
        font-weight: 500;
        margin-left: auto;
    }
    
    .progress-bar {
        height: 3px;
        width: 100%;
        background-color: #e9efff;
        border-radius: 2px;
        overflow: hidden;
    }
    
    .progress {
        display: block;
        position: relative;
        width: 60%;
        height: 100%;
        background-color: #2992dc;
        border-radius: 6px;
    }
    
    .info-area {
        position: absolute;
        top: 0;
        /* left: 30px; */
        transition: transform 0.4s ease-in;
    }
    
    #item-2:checked~.player #test {
        transform: translateY(0);
    }
    
    #item-2:checked~.player #test {
        transform: translateY(-130px);
    }
    
    #item-3:checked~.player #test {
        transform: translateY(-260px);
    }
    
    @media all and (max-width:767px) {
        .player {
            min-width: 300px;
        }
        .card_custom {
            height: 340px;
        }
        .card_customs {
            min-height: 380px;
        }
    }
</style>