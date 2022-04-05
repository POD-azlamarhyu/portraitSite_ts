export interface importImage{
    src : string
    height: number
    width: number
    blurDataURL: string
};

export interface hobbysdescType{
    id:number,
    param:string
};

export interface hobbysTypes{
    id:number
    image: any
    title: string
    description:{
        id: number
        param:string
    }[]
};

export interface worktechTypes{
    id: number,
    mark: string
};

export interface workTypes{
    id: number,
    image: any,
    title: string,
    description: string,
    useTech:{
        id: number,
        mark: string,
    }[],
    repository:string
};

export interface skillTypes{
    id: number
    image: any
    title: string
    stars: number
    description: string
    color:string
};