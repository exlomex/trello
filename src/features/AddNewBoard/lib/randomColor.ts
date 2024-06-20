export const getRandomPastelColor = () => {
    const randomChannel = () => Math.floor(128 + Math.random() * 128);
    const r = randomChannel();
    const g = randomChannel();
    const b = randomChannel();

    return `rgb(${r}, ${g}, ${b})`;
};
