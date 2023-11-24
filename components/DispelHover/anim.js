const transforms = [
    {
        x: -0.5,//em
        y: -0.5,
        zRotation: -45,
    },
    {
        x: -0.2,
        y: -0.4,
        zRotation: -6,
    },
    {
        x: -0.05,
        y: -0.1,
        zRotation: 12,
    },
    {
        x: -0.5,
        y: -0.5,
        zRotation: -45,
    },
    {
        x: -0.05,
        y: -0.1,
        zRotation: -9,
    },
    {
        x: -0.1,
        y: 0.55,
        zRotation: 3,
    },
    {
        x: 0,
        y: -0.1,
        zRotation: 9,
    },
    {
        x: 0,
        y: 0.15,
        zRotation: -12,
    },
    {
        x: 0,
        y: 0.15,
        zRotation: -17,
    },
    {
        x: 0,
        y: -0.65,
        zRotation: 9,
    },
    {
        x: 0.1,
        y: 0.4,
        zRotation: -9,
    },
    {
        x: 0.2,
        y: 0.15,
        zRotation: 10,
    },
];

export const disperse = {
    open: (i) => ({
        x: transforms[i].x + "em",
        y: transforms[i].y + "em",
        rotateZ: transforms[i].zRotation,
        zIndex: 1,
        transition: {duration: 0.75, ease: [0.33, 1, 0.68 ,1]}
    }),
    closed: {
        x: 0,
        y: 0,
        rotateZ: 0,
        //to avoid overlapping, resest the index
        zIndex: 0,
        transition: {duration: 0.75, ease: [0.33, 1, 0.68 ,1]}
    },
}