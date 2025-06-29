#include <stdio.h>

struct Process {
    int pid;
    int arrival_time;
    int burst_time;
    int remaining_time;
};

void swap(struct Process *a, struct Process *b) {
    struct Process temp = *a;
    *a = *b;
    *b = temp;
}

int main() {
    int n, total_time = 0;
    float avg_waiting_time = 0, avg_turnaround_time = 0;

    printf("Enter the number of processes: ");
    scanf("%d", &n);

    struct Process processes[n];
    for (int i = 0; i < n; i++) {
        processes[i].pid = i + 1;
        printf("Enter arrival time and burst time for process %d: ", processes[i].pid);
        scanf("%d %d", &processes[i].arrival_time, &processes[i].burst_time);
        processes[i].remaining_time = processes[i].burst_time;
        total_time += processes[i].burst_time;
    }

    // Sort processes by arrival time
    for (int i = 0; i < n-1; i++) {
        for (int j = 0; j < n-i-1; j++) {
            if (processes[j].arrival_time > processes[j+1].arrival_time) {
                swap(&processes[j], &processes[j+1]);
            }
        }
    }

    int current_time = 0;
    while (current_time < total_time) {
        int shortest = -1;
        int min_remaining_time = __INT_MAX__;
        for (int i = 0; i < n; i++) {
            if (processes[i].arrival_time <= current_time && processes[i].remaining_time < min_remaining_time && processes[i].remaining_time > 0) {
                shortest = i;
                min_remaining_time = processes[i].remaining_time;
            }
        }
        if (shortest == -1) {
            current_time++;
        } else {
            current_time++;
            processes[shortest].remaining_time--;

            if (processes[shortest].remaining_time == 0) {
                int completion_time = current_time;
                int waiting_time = completion_time - processes[shortest].arrival_time - processes[shortest].burst_time;
                int turnaround_time = completion_time - processes[shortest].arrival_time;
                avg_waiting_time += waiting_time;
                avg_turnaround_time += turnaround_time;
            }
        }
    }

    avg_waiting_time /= n;
    avg_turnaround_time /= n;

    printf("\nAverage Waiting Time: %.2f\n", avg_waiting_time);
    printf("Average Turnaround Time: %.2f\n", avg_turnaround_time);

    return 0;
}

