#include <stdio.h>
#include <stdlib.h>

int main() {
    char filename[] = __FILE__;

    printf("After the execution I will try to destroy myself.\n");

    if (remove(filename) == 0) {
        printf("My self-destruction worked!\n");
    } else {
        perror("Error trying to self-destruct...");
    }

    return 0;
}
