export {

}

type StrorNum = string | number

interface PersonItf<N extends StrorNum, G> {
    name: N;
    getName: () => G
}


let obj: PersonItf<number, number> = {
    name: 1,
    getName: () => 1
}


