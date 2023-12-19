export const opacity = {
    initial: {
        opacity: 0,
    },
    open: {
        opacity: 1,
        transition: {duration: 0.5},
    }, 
    closed: {
        opacity: 0,
    },
};

export const slideup = {
    initial: {
        opacity: 0,
    },
    open: (i) => ({
        y: 0,
        transition: {duration: 0.5, delay: 0.05 * i},
    }),
    closed: {
        y: "100%",
    },
};