function startRoutine() {
    const todaysTasks = [
        "Prepare breakfast",
        "Wash dishes",
        "Make coffee"
    ];

    function printTasks() {
        for (let i = 0; i < todaysTasks.length; i++) {
        console.log((i + 1) + ". " + todaysTasks[i]);
        }
    }

    console.log("Starting New Routine");

    printTasks();

    function PrepareBreakfast() {
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve("Breakfast is ready");
            }, 2000);
        });
    }

    PrepareBreakfast().then((message) => {
        console.log(message);
    });

    function WashDishes() {
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve("Dishes are clean");
            }, 2500);
        });
    }

    WashDishes().then((message) => {
        console.log(message);
    });

    function MakeCoffee() {
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve("Coffee is brewed");
            }, 3000);
        });
    }

    MakeCoffee().then((message) => {
        console.log(message);
    });


    function Reset() {
        console.log("click Reset to reset the routine");
    }

}
