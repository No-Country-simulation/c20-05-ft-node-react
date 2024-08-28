export const handlerValuesToFilter = (value) => {
    const initialDay = value[0];
    const endDay = value[1];
    return {
        initialDay, endDay
    }
}