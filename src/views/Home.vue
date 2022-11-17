<template>
    <div class="home">
        <div 
            v-for="coin in coins"
            :key="coin.id"
        >
            <div class="home__header">
                <img :src="coin.image" />
                <span class="home__title">
                    {{ coin.name }}  ({{ coin.symbol }})
                </span>
            </div>
            <div class="home__content">
                <h3 class="home__content--main-value">
                    $ {{ coin.current_price.toLocaleString() }}
                </h3>
                <h4 :class="[
                        coin.price_change_percentage_24h > 0 ? 
                        'home__content--positive-value' : 
                        'home__content--negative-value'
                    ]"
                >
                ({{ coin.price_change_percentage_24h.toLocaleString() }} %)
                </h4>
                <span>vol = ${{ coin.total_volume.toLocaleString() }}</span>
            </div>
        </div>
        <div class="home__widgets">
            <coingecko-coin-compare-chart-widget  
                coin-ids="bitcoin" 
                currency="usd" 
                locale="en"
                width="450"
                height="400"
            >
            </coingecko-coin-compare-chart-widget>
            <div>
                <h5>Follow the current price<br /> 
                    of bitcoinin real time <br />
                    and know its value in dollars!
                </h5>
                <coingecko-coin-converter-widget  
                    coin-id="bitcoin" 
                    currency="usd" 
                    background-color="#313b39" 
                    font-color="#f7951e" 
                    locale="en"
                >
                </coingecko-coin-converter-widget>
            </div>
        </div>
        <span class="home__author">
            Made for Dacxi by 
            <a 
                href="https://github.com/hosanabarcelos"
                target="_blank"
            >   @hosanabarcelos
            </a>
            .
        </span>
        <footer class="home__footer">
            <coingecko-coin-price-marquee-widget  
                coin-ids="dacxi,ethereum,atompad,lunar-2" 
                currency="usd" 
                background-color="#313b39" 
                locale="en" 
                font-color="#ffffff"
            >
            </coingecko-coin-price-marquee-widget>
        </footer>
    </div>
</template>

<script>
export default {
    name: 'app',
    data() {
        return {
            coins: [],
        }
    },
    async mounted() {
      const res = await fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=1&page=1&sparkline=false');
      const data = await res.json();
      console.log(data[0]);
      this.coins = data;
    },
}
</script>

<style lang="scss" scoped>
@import '../sass/home.scss';

</style>
