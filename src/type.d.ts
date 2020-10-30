interface IFilter {
    _id: string
    name: string
    filter: string
    checked: boolean
    createdAt?: string
    updatedAt?: string
}

type FilterProps = {
    filter: IFilter
}

type ApiDataType = {
    message: string
    status: string
    filters: IFilter[]
    filter?: IFilter
  }
  