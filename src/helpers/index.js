export const sortTaskByData = (array) => {

    return array.sort((a, b) => {
        const createdA = new Date(a.created)
        const createdB = new Date(b.created)

        if (createdA > createdB) {
            return -1
        } else if (createdA < createdB) {
            return 1
        }
        return 0;
    })
}

export const sortTaskByGroup =(array) => {
    const favorite = array.filter(({favorite, completed}) => favorite &&  !completed);
    const unChecked = array.filter(({favorite, completed}) => !favorite &&  !completed);
    const completed = array.filter(({favorite, completed}) => !favorite &&  completed);
    const favoriteAndCompleted =  array.filter(({favorite, completed}) => favorite &&  completed);

    return [
        ...sortTaskByData(favorite),
        ...sortTaskByData(unChecked),
        ...sortTaskByData(favoriteAndCompleted),
        ...sortTaskByData(completed)
    ]

}