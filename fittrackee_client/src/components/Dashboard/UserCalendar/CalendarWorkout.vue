<template>
  <div
    class="calendar-workout"
    @click="
      $router.push({ name: 'Workout', params: { workoutId: workout.id } })
    "
  >
    <SportImage
      :sport-label="sportLabel"
      :title="workout.title"
      :color="sportColor"
    />
    <sup>
      <i
        v-if="workout.records.length > 0"
        class="fa fa-trophy custom-fa-small"
        aria-hidden="true"
        :title="
          workout.records.map(
            (record) => ` ${$t(`workouts.RECORD_${record.record_type}`)}`
          )
        "
      />
    </sup>
  </div>
</template>

<script setup lang="ts">
  import { toRefs } from 'vue'

  import { IWorkout } from '@/types/workouts'
  interface Props {
    workout: IWorkout
    sportLabel: string
    sportColor: string | null
  }
  const props = defineProps<Props>()

  const { workout, sportLabel, sportColor } = toRefs(props)
</script>

<style lang="scss">
  @import '~@/scss/vars.scss';

  .calendar-workout {
    display: flex;
    padding: 1px;
    cursor: pointer;
    .sport-img {
      width: 18px;
      height: 18px;
    }
    sup {
      position: relative;
      top: -8px;
      left: -3px;
      width: 2px;
      .custom-fa-small {
        font-size: 0.7em;
      }
    }

    @media screen and (max-width: $small-limit) {
      .sport-img {
        padding: 3px;
        width: 20px;
        height: 20px;
      }
      sup {
        .custom-fa-small {
          font-size: 0.6em;
        }
      }
    }
  }
</style>
