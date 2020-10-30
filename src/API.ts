
export const getFilters = async () => {
  try {
    const filters :IFilter[] = [
        {
            _id: "filter1",
            name: "All AAL",
            filter: "AAL*",
            checked: true
        },
        {
            _id: "filter2",
            name: "All DAL",
            filter: "DAL*",
            checked: true
        }
    ]
    return {data: {filters: filters}}
  } catch (error) {
    throw new Error(error)
  }
}

