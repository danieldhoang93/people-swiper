<template>
    <section class="container">
      <div class="fixed header">
        <span>Please Love Me</span>
      </div>

      <div class="card secondCard fixed fixed--center">
        <div>
          <img :src="people[this.next].avatar" class="profilePicture"/>
          <div  class="q-pa-md">
            <h3 class="cardTitle">{{ people[this.next].name}}</h3>
            <p>{{ people[this.next].department}}</p>
          </div>
        </div>
      </div>

      <div class="fixed fixed--center">
        <Vue2InteractDraggable
        v-if="isVisible"
          @draggedRight="emitAndNext('match')"
          @draggedLeft="emitAndNext('reject')"
          :interact-block-drag-down="interactBlockDragDown"
          :interact-block-drag-left="interactBlockDragLeft"
          :interact-block-drag-right="interactBlockDragRight"
          :interact-block-drag-up="interactBlockDragUp"
          :interact-max-rotation="20"
          :interact-lock-x-axis="interactLockXAxis"
          :interact-lock-y-axis="interactLockYAxis"
          :interact-lock-swipe-down="interactLockSwipeDown"
          :interact-lock-swipe-left="interactLockSwipeLeft"
          :interact-lock-swipe-right="interactLockSwipeRight"
          :interact-lock-swipe-up="interactLockSwipeUp"
          :interact-event-bus-events="interactEventBus"
          :interact-out-of-sight-x-coordinate="600"
          :interact-x-threshold="250"
          class="card isCurrent">
          <div>
            <img :src="people[this.index].avatar" class="profilePicture"/>
            <div class="q-pa-md">
              <h3 class="cardTitle">{{ people[this.index].name}}</h3>
              <p>{{ people[this.index].department}}</p>
            </div>
            
          </div>
          
      </Vue2InteractDraggable>
      </div>
      
      <div class="footer fixed">
        <q-btn round color="primary" icon="clear" @click="reject" class="rejectButton"/>
        <q-btn round color="secondary" icon="favorite" @click="match" class="matchButton"/>
      </div>
    </section>
</template>

<script>
import { Vue2InteractDraggable, InteractEventBus } from "vue2-interact";
const INTERACT_DRAGGED_LEFT = 'INTERACT_DRAGGED_LEFT';
const INTERACT_DRAGGED_RIGHT = 'INTERACT_DRAGGED_RIGHT';

export default {
  components: {
    Vue2InteractDraggable
  },

  data() {
    return {
      isVisible: true,
      index: 0,
      next: 1,
      interactEventBus: {
        draggedRight: INTERACT_DRAGGED_RIGHT,
        draggedLeft: INTERACT_DRAGGED_LEFT,
      },
      isShowing: true,
      interactBlockDragDown: true,
      interactBlockDragLeft: false,
      interactBlockDragRight: false,
      interactBlockDragUp: true,
      interactLockXAxis: false,
      interactLockYAxis: false,
      interactLockSwipeDown: false,
      interactLockSwipeLeft: false,
      interactLockSwipeRight: false,
      interactLockSwipeUp: false,
      people: []
    }
  },
  computed: {
    current() {
      return this.people[this.index]
    },
    next() {
      return this.people[this.index + 1]
    }
  },
   methods: {
    match() {
      InteractEventBus.$emit(INTERACT_DRAGGED_RIGHT)
      console.log('right')
    },
    reject() {
      console.log('left')
      InteractEventBus.$emit(INTERACT_DRAGGED_LEFT);
    },
    emitAndNext(event) {
      console.log(event)
      this.$emit(event, this.index)
      setTimeout(() => this.isVisible = false, 200)
      setTimeout(() => {
        this.index++
        this.next++
        this.isVisible = true
      }, 200)
    }
  },
    created() {
        fetch("https://cors-anywhere.herokuapp.com/https://people-swiper-api.netlify.app/people.json")
        .then(response => {
            return response.json();
            
        })
        .then(data => {
            this.people = data;
        })
    }
};
</script>

<style lang="scss">
.container {
  width: 100%;
  height: 100vh;
}

.header {
  width: 100%;
  height: 60vh;
  z-index: 0;
  color: white;
  background: #f953c6;
  background: -webkit-linear-gradient(to top, #f03e91, #f568aa);
  background: linear-gradient(to top, #f84e9d, #f03e91);
  display: flex;
  justify-content: center;
  clip-path: polygon(0 0%, 100% 0%, 100% 76%, 0 89%);
  span {
    display: block;
    font-size: 4rem;
    padding-top: 2rem;
    text-shadow: 1px 1px 1px red;
  }
  i {
    padding: 24px;
  }
}

.flex {
  display: flex;
  &--center {
    align-items: center;
    justify-content: center;
  }
}
.fixed {
  position: fixed;
  &--center {
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
  }
}


.card {
  border-radius: 12px;
  display: flex;
  width: 21vw;
  min-width: 300px;
  height: 63vh;
  margin-left:auto;
  margin-right:auto;
  font-size: 14px;
  font-weight: bold;
  color: white;
  background:#29d3c8;
  opacity: 1;
  user-select: none;
  pointer-events: none;
  will-change: transform, opacity;
  z-index:2;
  &.isCurrent {
    pointer-events: auto;
  }

  &.isAnimating {
    transition: transform 0.7s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  }
}

.secondCard {
  background:#29d3c8;
  z-index:0;
}

.cardTitle {
  margin: 0 0 15px;
  font-size: 3em;
}

.profilePicture {
  border-radius: 12px 12px 0 0;
  width:21vw;
  min-width: 300px;
}

.footer {
  width: 77vw;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  padding-bottom: 30px;
  justify-content: space-around;
  align-items: center;
}

@media only screen and (max-width: 400px) {
  .card {
    width: 300px;
  }

  .profilePicture {
  width: 300px;
  }
}
</style>
