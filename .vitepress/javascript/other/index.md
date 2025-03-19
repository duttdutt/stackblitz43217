# Index

<script setup>
import HeatMap from './HeatMap.vue';

const sampleTasks = {
  1: 0,
  2: 1,
  3: 1,
  4: 1,
  5: 2,
  6: 1,
  7: 4,
  8: 10
}
</script>

<div class="test">
    <HeatMap month="2025-02" month-name="February 2025" :tasks='sampleTasks' />
    <HeatMap month="2025-04" month-name="April 2025" :tasks='sampleTasks' />
    <HeatMap month="2025-05" month-name="May 2025" :tasks='sampleTasks' />
</div>
<div class="test">
    <HeatMap month="2025-03" month-name="March 2024" :tasks='sampleTasks' />
    <HeatMap month="2025-03" month-name="March 2024" :tasks='sampleTasks' />
    <HeatMap month="2025-03" month-name="March 2024" :tasks='sampleTasks' />
</div>

<style>
.test {
    margin-top: 10px;
    display: flex;
    gap: 10px;
}
</style>
# Teste
