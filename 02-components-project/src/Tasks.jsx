

function Tasks() {

    const task1 = "Call TV Service";
    const task2 = "Order from IHerb";


    return (
        <>
            <h2>Tasks</h2>
            <ul>
                <li>{task1}</li>
                <li>Take a car from the service</li>
                <li>{task2.toUpperCase()}</li>
            </ul>

        </>
    );

}

export default Tasks