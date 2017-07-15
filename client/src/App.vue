<template>
    <div class="container">
        <appLottery></appLottery>
    </div>
</template>


<script>
import Lottery from './components/Lottery.vue'
export default {

  name: 'app',
  components: {
    appLottery: Lottery

  }
}
</script>

<style>
    body {
        padding: 30px;
         font-family:'Avenir';
    }

        .slide-leave-active {
        transition: opacity 0.5s ease;
        opacity: 0;
        animation: slide-out 0.5s ease-out forwards;
    }

    .slide-leave {
        opacity: 1;
        transform: translateX(0);
    }

    .slide-enter-active {
        animation: slide-in 0.5s ease-out forwards;
    }

    @keyframes slide-out {
        0% {
            transform: translateY(0);
        }
        100% {
            transform: translateY(-30px);
        }
    }

    @keyframes slide-in {
        0% {
            transform: translateY(-30px);
        }
        100% {
            transform: translateY(0);
        }
    }
</style>