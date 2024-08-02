import { Data } from "../Constants/DataTable"


const service = {
    getData: ({from, to}) => {
        return new Promise((resolve, reject) => {

            const data = Data.slice(from, to)
            resolve({
                count:Data.length,
                data: Data
            })
        })
    }
}

export default service;