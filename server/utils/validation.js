export const AllValidations = (data) => {
    for (let key in data) {
        if (!data[key]) {
            return { status: false, message: `${key} is required` };
        }
    }
    return { status: true };
}