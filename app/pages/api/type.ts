export type importImage = {
    src : string
    height: number
    width: number
    blurDataURL: string
};

export type hobbysdescType = {
    id:number,
    param:string
}[];

export type hobbysTypes = {
    id:number
    image: any
    title: string
    description:{
        id: number
        param:string
    }[]
};

export type worktechTypes = {
    id: 0,
    mark: string
}[];

export type workTypes = {
    id: number,
    image: any,
    title: string,
    description: string,
    useTech:{
        id: 0,
        mark: string,
    }[],
    repository:string
};

export type skillTypes = {
    id: number
    image: any
    title: string
    stars: number
    description: string
    color:string
};