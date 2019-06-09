export const generateColor = colors => {
    const color = {}
    Object.keys(colors).forEach(i => {
        color[i] = props => props.theme.colors[i]
    });
    return color;
}