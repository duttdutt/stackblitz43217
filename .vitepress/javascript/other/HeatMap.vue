<!-- HeatMap.vue -->
<script setup>
import { computed } from 'vue'
import { eachDayOfInterval, startOfMonth, endOfMonth, format, getDay, differenceInCalendarDays, endOfToday } from 'date-fns'

const props = defineProps({
    month: {
        type: String,
        required: true
    },
    monthName: {
        type: String,
        required: true
    },
    tasks: {
        type: Object,
        required: true
    }
});

const monthDate = computed(() => new Date(props.month))
const today = new Date()

// Общий счет задач
const totalTasks = computed(() =>
    Object.values(props.tasks).reduce((acc, curr) => acc + curr, 0)
)

// Оставшиеся дни
const remainingDays = computed(() => {
    const endOfMonthDate = endOfMonth(monthDate.value)
    return differenceInCalendarDays(endOfMonthDate, today) > 0
        ? differenceInCalendarDays(endOfMonthDate, today)
        : 0
})

const days = computed(() => {
    const start = startOfMonth(monthDate.value)
    const end = endOfMonth(monthDate.value)
    return eachDayOfInterval({ start, end })
})

const calendar = computed(() => {
    const result = []
    let week = Array(7).fill(null)

    // Fill in the first week with empty spaces before the first day
    const firstDay = days.value[0]
    const startingDay = getDay(firstDay)

    days.value.forEach((day, index) => {
        const dayOfWeek = getDay(day)
        const dayOfMonth = day.getDate()

        if (index === 0) {
            week = Array(7).fill(null)
            week[startingDay] = dayOfMonth
            if (dayOfWeek === 6) {
                result.push(week)
                week = Array(7).fill(null)
            }
        } else {
            week[dayOfWeek] = dayOfMonth
            if (dayOfWeek === 6) {
                result.push(week)
                week = Array(7).fill(null)
            }
        }
    })

    // Add the last week if it's not complete
    if (week.some(day => day !== null)) {
        result.push(week)
    }

    return result
})

const getColor = (day) => {
    if (day === null) return 'transparent'
    const tasks = props.tasks[day] || 0
    const colors = [
        '#FF5672',
        '#F88C6C',
        '#FFCB6B',
        '#C3E88D',
        '#2bcc85',
    ]
    const index = Math.min(Math.floor(tasks), 4)
    return colors[index]
}

const isToday = (date) => {
    return date &&
        date.getDate() === today.getDate() &&
        date.getMonth() === today.getMonth() &&
        date.getFullYear() === today.getFullYear()
}

const getTooltipText = (day) => {
    if (day === null) return ''
    const tasks = props.tasks[day] || 0
    return `${tasks} ${tasks === 1 ? 'task' : 'tasks'} completed`
}

const weekdays = ['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс']
</script>

<template>
    <div class="heatmap-container">
        <h3 class="month-name">{{ props.monthName }}</h3>
        <div class="stats">
            <span>Total tasks: {{ totalTasks }}</span>
            <span v-if="remainingDays > 0">Days left: {{ remainingDays }}</span>
        </div>
        <div class="calendar-grid">
            <div class="weekdays">
                <div v-for="day in weekdays" :key="day" class="weekday">{{ day }}</div>
            </div>
            <div class="calendar">
                <div v-for="(week, weekIndex) in calendar" :key="weekIndex" class="week">
                    <div v-for="(day, dayIndex) in week" :key="dayIndex" class="day" :class="{
                        empty: day === null
                    }" :style="{ backgroundColor: getColor(day) }" :title="day ? getTooltipText(day) : ''">
                        <span class="day-number">{{ day }}</span>
                        <div v-if="day && props.tasks[day]" class="tooltip">
                            {{ getTooltipText(day) }}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.heatmap-container {
    padding: 1rem;
    background: white;
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    width: 100%;
    max-width: min-content;
    margin: 0 auto;
}

.month-name {
    font-size: 1.25rem;
    font-weight: 600;
    margin: 0 0 1rem;
    text-align: center;
    color: #333;
}

.calendar-grid {
    display: flex;
    flex-direction: column;
    gap: 4px;
}

.weekdays {
    display: grid;
    grid-template-columns: repeat(7, 1fr);
    gap: 2px;
}

.weekday {
    font-size: 0.7rem;
    color: #666;
    text-align: center;
    padding: 2px;
    font-weight: 600;
}

.calendar {
    display: flex;
    flex-direction: column;
    gap: 2px;
}

.week {
    display: grid;
    grid-template-columns: repeat(7, 1fr);
    gap: 2px;
}

.stats {
    display: flex;
    justify-content: space-between;
    font-size: 0.9rem;
    margin-bottom: 1rem;
    padding: 0 0.5rem;
    color: #666;
}

.day {
    aspect-ratio: 1;
    border-radius: 2px;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 0.75rem;
    color: #333;
    transition: all 0.2s;
    border: 1px solid rgba(0, 0, 0, 0.1);
    min-height: 30px;
    cursor: pointer;
}

.day:hover {
    transform: scale(1.2);
    z-index: 2;
}

.day.empty {
    background-color: transparent;
    border: none;
    cursor: default;
}

.day.today {
    background-color: #2196F3 !important;
    box-shadow: 0 0 4px rgba(33, 150, 243, 0.3);
}

.day-number {
    font-weight: 500;
}

.tooltip {
    display: none;
    position: absolute;
    background: rgba(0, 0, 0, 0.8);
    color: white;
    padding: 4px 8px;
    border-radius: 4px;
    font-size: 0.75rem;
    white-space: nowrap;
    bottom: 100%;
    left: 50%;
    transform: translateX(-50%);
    margin-bottom: 4px;
    z-index: 3;
}

.day:hover .tooltip {
    display: block;
}

/* Add a small arrow to the tooltip */
.tooltip::after {
    content: '';
    position: absolute;
    top: 100%;
    left: 50%;
    margin-left: -4px;
    border-width: 4px;
    border-style: solid;
    border-color: rgba(0, 0, 0, 0.8) transparent transparent transparent;
}
</style>
