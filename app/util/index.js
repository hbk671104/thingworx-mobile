export const generateDailyRandom = () => {
    const arr = []
    for (let i = 0; i < 24; i++) {
        arr.push({
            x: i,
            y: Math.round(Math.random() * 100)
        })
    }
    return arr
}
