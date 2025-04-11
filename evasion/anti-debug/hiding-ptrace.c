#define _GNU_SOURCE
#include <stdio.h>
#include <stdlib.h>
#include <unistd.h>
#include <sys/syscall.h>
#include <sys/ptrace.h>
#include <signal.h>

void antiDebug() {
    long ptrace_ret;

    // direct syscall to hide ptrace
    ptrace_ret = syscall(SYS_ptrace, PTRACE_TRACEME, 0, NULL, 0);

    if (ptrace_ret == -1) {
        printf("Debugger detected!\n");
        kill(getpid(), SIGKILL);
    }
}

int main() {
    antiDebug();

    printf("No Debugger found.\n");

    __asm__ __volatile__("int3");

    printf("Execução normal.\n");

    return 0;
}
